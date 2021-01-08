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
            required: [true, 'Please add a buildings name']
        },
        address: {
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
        general: {
            type: [{
                phone:{type: String},
                damageType: {type: [String]},
                infraType: {type: [String]},
                useType: {type: [String]},
                trapped:{type: Number},
                injured:{type: Number},
                missing:{type: Number},
                deceased:{type: Number},
            }]
        },
        need: {
            type: [String]
        },
        offer: {
            type: [String]
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

module.exports = mongoose.model('Damage', damageSchema);