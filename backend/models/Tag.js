const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is required"],
    },
    slug: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Category field is required"],
    }
});

const Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag;
