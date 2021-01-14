const mongoose = require('mongoose');

//Schema = Schema
const {Schema} = mongoose;

const damageSchema = new Schema(
    {
        _colaborator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'We´d like to know whos helping us'],
        },
        building_name: {
            type: String,
            required: [true, 'Please add a building´s name']
        },
        location: {
            required: [true, 'Please add an addres'],
            type: {
                city: {
                    type: String,
                    required: [true, 'Please add a city']
                },
                state: {
                    type: String,
                    required: [true, 'Please add a state']
                },
                municipality: {
                    type: String,
                    required: [true, 'Please add a municipality']
                },
                zipCode: {
                    type: Number,
                    required: [true, 'Please add a zip code']
                },
                streetName: {
                    type: String,
                    required: [true, 'Please add a street name']
                },
                references: {
                    type: String,
                    required: [true, 'Please add a reference']
                }
            }
        },
        general: {
            required: [true, 'Please add general info'],
            type: {
                phone:{
                    type: String,
                    required: [true, 'Please add a phone']
                },
                damageType: {
                    type: [String],
                    required: [true, 'Please add a damage type']
                },
                infraType: {
                    type: [String],
                    required: [true, 'Please add a infrastructure type']
                },
                useType: {
                    type: [String],
                    required: [true, 'Please add a use type']
                },
                trapped:{
                    type: Number,
                    required: [true, 'Please add a trapped number']
                },
                injured:{
                    type: Number,
                    required: [true, 'Please add a injured number']
                },
                missing:{
                    type: Number,
                    required: [true, 'Please add a missing number']
                },
                deceased:{
                    type: Number,
                    required: [true, 'Please add a deceased number']
                }
            }
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

module.exports = mongoose.model('Damage', damageSchema);