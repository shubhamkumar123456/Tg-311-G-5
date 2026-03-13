const { Post,User,Comment } = require("../models");

exports.createPost = async (req, res) => {
    const { content, userId } = req.body;

    const post = await Post.create({
        content,
        UserId: userId
    });

    res.json(post);
};

exports.getAllPosts = async (req, res) => {
    const posts = await Post.findAll({
        include: [ {
            model: User,
            attributes: { exclude: ['password'] }
        },
        {
            model: Comment
        }]
    });

    res.json(posts);
};