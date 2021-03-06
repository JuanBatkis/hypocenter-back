const express = require ('express');
const router = express.Router();

//Import the important things
const ShelterEntry = require("../models/EntryShelter");
const { veryToken, checkRole } = require("../utils/auth");

/* GET property page. 
    C = Create /
    R = Read /
    U = Update
    D = Delete
*/

// Create an entry
router.post("/", veryToken, (req, res, next)=>{
    const { _id: _colaborator } = req.user;

    ShelterEntry.create({...req.body, _colaborator})
        .then((shelterEnt)=>{
            res.status(200).json({result:shelterEnt});
        })
        .catch((error)=>{
            res.status(400).json({msg:"Something went wrong", error});
        });
});

// Read entries

// Get all user entries
router.get("/my-entries", veryToken, (req, res, next)=>{
    const { _id: _colaborator } = req.user;
    ShelterEntry.find({'_colaborator': _colaborator})
        .populate("_colaborator","name last_name organization") //<----- Populate
        .then((shelterEntries)=>{
            res.status(200).json({result:shelterEntries})
        })
        .catch((error)=>{
            res.status(400).json({msg:"Something went wrong", error});
        });
});

// Dinamic filter
//router.get("/", veryToken, (req, res, next)=>{
router.get("/", (req, res, next)=>{
    // req.query = {key:"value"}
    ShelterEntry.find(req.query)
        .populate("_colaborator","name last_name organization phone email role") //<----- Populate
        .then((shelterEntries)=>{
            res.status(200).json({result:shelterEntries})
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

    ShelterEntry.findById(id)
        .populate("_colaborator","name last_name organization") //<----- Populate
        .then((shelterEntry)=>{
            res.status(200).json({result:shelterEntry})
        })
        .catch((error)=>{
            res.status(400).json({msg:"Something went wrong", error})
        }); 
});

// Edit or update a shelter entry
router.patch("/:id", veryToken,(req,res, next)=>{
    const { id } = req.params; 
    ShelterEntry.findByIdAndUpdate(id,req.body, { new:true })
        .populate("colaborator","name last_name organisation") //<----- Populate
        .then((shelterEntry)=>{
            res.status(200).json({result:shelterEntry})
    })
        .catch((error)=>{
            res.status(400).json({msg:"Something went wrongSomething went wrong", error})
        })
}); 

// Delete an entry
router.delete("/:id", veryToken, checkRole(["ADMIN"]), (req,res, next)=>{
    const { id } = req.params; 
    ShelterEntry.findByIdAndDelete(id)
        .then(()=>{
            res.status(200).json({msg:"Shelter entry was deleted"})
        })
        .catch((error)=>{
            res.status(400).json({msg:"Something went wrong", error})
        })
}); 


module.exports = router;