const Tag = require("../models/Tag");
const slugify = require("slugify");

const index = async (req, res) => {
    try {
        const tags = await Tag.find()
            .populate({
                path: "category",
                select: "name", // Specify the fields to retrieve from the category
            })
            .exec();
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const store = async (req, res) => {
    try {
        const { name, category } = req.body;
        const slug = slugify(name, { lower: true });

        const tag = await Tag.create({ name, slug, category });
        res.status(200).json({
            message: "Tag created successfully",
            data: tag,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    index,
    store,
};
