const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre(
    'save',
    async function (next) {
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next();
    }
);

UserSchema.methods.isValidPassword = async function (password) {
    const compare = await bcrypt.compare(password, this.password);
    return compare;
}


module.exports = mongoose.model('user', UserSchema);