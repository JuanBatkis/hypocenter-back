const mongoose = require('mongoose');

//Schema = Schema
const {Schema} = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            re: [true, 'Please add your name']
        },
        last_name: {
            type: String,
            re: [true, 'Please add your last name']
        },
        phone: {
            type: String,
            re: [true, 'Please add your last phone number']
        },
        email: {
            type: String,
            required: [true, 'Please add your email'],
            validate: {
                message: 'Email already in use',
                validator: async (email) => {
                    const items = await mongoose.models['User'].count({email});
                    return items < 1;
                },
            },
        },
        organization: {
            type: String,
        },
        role: {
            type: String,
            default: 'USER',
            enum: ['ADMIN', 'USER'],
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

module.exports = mongoose.model('User', userSchema);