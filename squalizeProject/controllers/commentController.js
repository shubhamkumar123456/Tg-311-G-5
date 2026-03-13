const { Comment } = require("../models");

exports.addComment = async (req, res) => {
    const { text, userId, postId } = req.body;

    const comment = await Comment.create({
        text,
        UserId: userId,
        PostId: postId
    });

    res.json(comment);
};