const mongoose = require('mongoose');

//Schema = Schema
const {Schema} = mongoose;

const shelterSchema = new Schema(
    {
        _colaborator:{
            type:Schema.Types.ObjectId, 
            ref:"User", 
            required:[true,'We´d like to know whos helping us'] 
        },
        building_name: {
            type: String,
            re: [true, 'Please add a building´s name']
        },
        location: {
            required: [true, 'Please add an addres'],
            type: [{
                state: {type: String,},
                city: {type: String},
                municipality: {type: String},
                zipCode: {type: Number},
                streetName: {type: String},
                references: {type: String,}
            }],
         },
        general:{
            type: [{
                phone:{type:Number},
                openingHour: {type:String},
                closingHour: {type:String},
                capacity:{type:Number},
                victims:{type:Number},
                injured:{type:Number},
                missing:{type:Number},
                deceased:{type:Number},
            }]

        }, 
        need: {
            type: [String]
        },
        offer: {
            type: [String]
        },
        description:{
            type:String,
            required: [false, 'How else can we help you?'],
        },
        status: {
            type: String,
            enum: ['PENDING', 'APPROVED', 'DENIED']
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('EntryShelter', shelterSchema);