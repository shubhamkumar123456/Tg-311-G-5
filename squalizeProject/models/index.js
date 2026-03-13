const sequelize = require("../config/db");

const User = require("./userModel");
const Post = require("./postModel");
const Comment = require("./commentModel");
const Like = require("./likeModel");

// Associations (Relationships)

User.hasMany(Post);
Post.belongsTo(User);  //1 to many

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

User.belongsToMany(Post, { through: Like });
Post.belongsToMany(User, { through: Like });

sequelize.sync({ alter: true });

// 👉 sync() will:// Create Users table (if not exists)
// 🔥 What is { alter: true }?
// 👉 It means:
// “Update existing tables to match model changes”

module.exports = {
  sequelize,
  User,
  Post,
  Comment,
  Like,
};
