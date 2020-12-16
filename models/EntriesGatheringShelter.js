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
            re: [true, 'Please add a buildings name']
        },
        location: {
            type: String,
            required: [true, 'Please add an addres'],
            address: {
                state: {type: String,},
                city: {type: String},
                municipality: {type: String},
                zipCode: {type: String},
                streetName: {Number},
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
        need:[ ],
        offer:[ ],
        status:['PENDING', 'APPROVED', 'DENIED'],
        role: {
            type: String,
            default: 'USER',
            enum: ['ADMIN', 'COLAB'],
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Colab', shelterSchema);