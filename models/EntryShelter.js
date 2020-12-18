const mongoose = require('mongoose');

//Schema = Schema
const {Schema} = mongoose;

const shelterSchema = new Schema(
    {
        _colaborator:{
            type:Schema.Types.ObjectId, 
            ref:"User", 
            required:true, 
        },
        building_name: {
            type: String,
            re: [true, 'Please add a building name']
        },
        location: {
            type: String,
            required: [true, 'Please add an addres'],
            address: {
                state: {type: String,},
                city: {type: String},
                municipality: {type: String},
                zipCode: {type: String},
                streetName: {type: String},
                references: {type: String,}
                },
            },
        general:{
            phone:{type:Number},
            openingHour: {type:Number},
            closingHour: {type:Number},
            capacity:{type:Number},
            victims:{type:Number},
            injured:{type:Number},
            missing:{type:Number},
            deceased:{type:Number},
        }, 
        need:{
            type:Array,
            required: [false, 'How can we help you?'],
        },
        offer:{
            type:Array,
            required: [false, 'How can you help us?'],
        },
        description:{
            type:String,
            required: [false, 'How else can we help you?'],
        },
        typeOfReport:['SHELTER', 'DAMAGE'],
        status:['PENDING', 'APPROVED', 'DENIED'],
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('EntryShelter', shelterSchema);