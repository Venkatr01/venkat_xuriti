const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://vraju4865:IU3TbXXN2mFadqML@venkat.maum9h0.mongodb.net/assignment")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = {
	User
};