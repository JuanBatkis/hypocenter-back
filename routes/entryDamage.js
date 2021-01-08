const express = require ('express');
const router = express.Router();

//Import the important things
const DamageEntry = require("../models/EntryDamage");
const { veryToken } = require("../utils/auth");

/* GET property page. 
    C = Create /
    R = Read /
    U = Update
    D = Delete
*/

// Create an entry
router.post("/", veryToken, (req, res, next)=>{
    const { _id: _colaborator } = req.user; 

    DamageEntry.create({...req.body, _colaborator})
        .then((damageEnt)=>{
            res.status(200).json({result:damageEnt});
        })
        .catch((error)=>{
            res.status(400).json({msg:"Something went wrong", error});
        });
});

// Read entries

// Dinamic filter
router.get("/", veryToken, (req, res, next)=>{
    // req.query = {key:"value"}
DamageEntry.find(req.query)
    .populate("_colaborator","name last_name organization") //<----- Populate
    .then((damageEntries)=>{
        res.status(200).json({result:damageEntries})
    })
    .catch((error)=>{
        res.status(400).json({msg:"Something went wrong", error});
    });
});

// Traer uno solo, por id 
router.get("/:id", veryToken, (req, res, next)=>{

    // :id = "7ewjhvc7sw53tkbfw97"
    // req.params = {id:"7ewjhvc7sw53tkbfw97"}
    const { id } = req.params; 

    DamageEntry.findById(id)
        .populate("colaborator","name last_name organization") //<----- Populate
        .then((damageEntry)=>{
            res.status(200).json({result:damageEntry})
        })
        .catch((error)=>{
            res.status(400).json({msg:"Something went wrong", error})
        }); 
});

// Edit or update a shelter entry
router.patch("/:id", veryToken,(req,res, next)=>{
    const { id } = req.params; 
    damageEntry.findByIdAndUpdate(id,req.body, { new:true })
        .populate("colaborator","name last_name organization") //<----- Populate
        .then((damageEntry)=>{
            res.status(200).json({result:damageEntry})
    })
        .catch((error)=>{
            res.status(400).json({msg:"Something went wrongSomething went wrong", error})
        })
}); 

// Delete an entry
router.delete("/:id", veryToken,(req,res, next)=>{
    const { id } = req.params; 
    DamageEntry.findByIdAndDelete(id)
        .then(()=>{
            res.status(200).json({msg:"Shelter entry was deleted"})
        })
        .catch((error)=>{
            res.status(400).json({msg:"Something went wrong", error})
        })
}); 


module.exports = router;