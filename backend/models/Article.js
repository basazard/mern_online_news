const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Author field is required"],
        },
        title: {
            type: String,
            required: [true, "Title field is required"],
        },
        slug: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: [true, "Content field is required"],
        },
        publication_date: {
            type: Date,
            required: [true, "Publication Date field is required"],
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },
        tags: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Tag",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
