const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"],
    },
    email: {
        type: String,
        required: [true, "Email field is required"],
    },
    password: {
        type: String,
        required: [true, "Password field is required"],
    },
    bio: {
        type: String,
        required: false,
    },
});

userSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

userSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

const User = mongoose.model("User", userSchema);
module.exports = User;