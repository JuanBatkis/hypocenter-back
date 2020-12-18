const mongoose = require('mongoose');

//Schema = Schema
const {Schema} = mongoose;

const damageSchema = new Schema(
    {
        _colaborator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'The property requires an owner'],
        },
        building_name: {
            type: String,
            re: [true, 'Please add a buildings name']
        },
        location: {
            required: [true, 'Please complete the location'],
            type: [{
                state: {type: String,},
                city: {type: String},
                municipality: {type: String},
                zipCode: {type: Number},
                streetName: {type: String},
                streetNumber: {type: Number},
                references: {type: String,}
            }]
        },
        general:{
            type: [{
                phone:{type: String},
                damageType: {type: [String]},
                closingHour: {type: Number},
                capacity:{type: Number},
                victims:{type: Number},
                injured:{type: Number},
                missing:{type: Number},
                deceased:{type: Number},
            }]
        }, 
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Damage', damageSchema);