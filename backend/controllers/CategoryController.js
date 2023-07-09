const Category = require("../models/Category");
const Article = require("../models/Article");
const slugify = require("slugify");

const index = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const store = async (req, res) => {
    try {
        const { name } = req.body;
        const slug = slugify(name, { lower: true });

        const category = await Category.create({ name, slug });
        res.status(200).json({
            message: "Category created successfully",
            data: category
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const articles = async (req, res) => {
    try {
        const categoryParam = req.params.category; // Get the category parameter from the URL

        const category = await Category.findOne({ slug: categoryParam }); // Find the category based on the parameter
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        const data = await Article.find({ category: category._id })
            .populate("author", "-_id name")
            .populate("category", "-_id name")
            .populate("tags", "-_id name")
            .exec(); // Find the articles for the category

        const categoryWithArticles = {
            data,
        };

        res.status(200).json(categoryWithArticles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    index,
    store,
    articles,
};
