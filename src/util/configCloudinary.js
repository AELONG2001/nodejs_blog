const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: 'longdev2001',
    api_key: '954987614327576',
    api_secret: '0PPgaGMbv5BB2rRp295ci4DEPcs',
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'DEV',
    },
});

module.exports = multer({ storage: storage });
