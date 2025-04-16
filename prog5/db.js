const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const conectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("DB connection error:", error.message);
        process.exit(1);
    }
};

module.exports = conectdb;
