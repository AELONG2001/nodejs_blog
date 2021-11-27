const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://longdev2001:Longkmhd123.@cluster0.f3nvx.mongodb.net/f8_education_dev?retryWrites=true&w=majority' ||
                'mongodb://localhost:27017/f8_education_dev',
        );
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = { connect };
