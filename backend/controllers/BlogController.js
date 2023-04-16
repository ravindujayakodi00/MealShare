const Blog = require('../models/Blog');

// add blog
const addBlog = async (req, res) => {
    const { title, description, author, date, image } = req.body;
    
    const blog = new Blog({
        title,
        description,
        author,
        date,
        image,
    });
    
    try {
        const savedBlog = await blog.save();
        res.status(201).json({ success: true, blog: savedBlog });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
    }

// get all blogs
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ success: true, blogs });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

// get blog by id
const getBlogById = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findById(id);
        res.status(200).json({ success: true, blog });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

// update blog
const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, description, author, date, image } = req.body;

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, {
            title,
            description,
            author,
            date,
            image,
        }, { new: true });
        res.status(200).json({ success: true, blog: updatedBlog });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

// delete blog
const deleteBlog = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        res.status(200).json({ success: true, blog: deletedBlog });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = {
    addBlog,
    getBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
};
