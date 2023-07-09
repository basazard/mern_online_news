const Article = require("../models/Article");
const slugify = require("slugify");

const index = async (req, res) => {
    try {
        const articles = await Article.find()
            .populate("author", "-_id name") // Populate the author field and exclude the _id field
            .populate("tags", "-_id name") // Populate the tags field and exclude the _id field
            .populate("category", "-_id name") // Populate the category field and exclude the _id field
            .select("-_id -createdAt -updatedAt -content -__v")
            .exec();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const store = async (req, res) => {
    try {
        const { author, title, content, publication_date, category, tags } = req.body;
        const slug = slugify(title, { lower: true });

        const article = await Article.create({ author, title, slug, content, publication_date, category, tags });
        res.status(200).json({
            message: "Article created successfully",
            data: article,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const show = async (req, res) => {
    try {
        const { slug } = req.params;
        const article = await Article.findOne({ slug: slug })
            .populate("author", "-_id name") 
            .populate("tags", "-_id name") 
            .populate("category", "-_id name")
            .exec();
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    index,
    store,
    show,
};
