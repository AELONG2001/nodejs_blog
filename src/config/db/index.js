const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            process.env.MONGODB_URI ||
                'mongodb://localhost:27017/f8_education_dev',
        );
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = { connect };
