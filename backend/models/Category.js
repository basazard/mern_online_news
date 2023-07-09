const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"],
    },
    slug: {
        type: String,
        required: true,
    },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
