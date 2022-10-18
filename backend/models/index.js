const User = require("./users");
const Post = require("./Post");
const Comment = require("./Comment");


// Comment belongs to user and user has many comments
Comment.belongsTo(User, {
    foreignKey: "creator_id"
})

User.hasMany(Comment, {
    foreignKey: "creator_id",
    onDelete: "CASCADE"
})

// Post belongs to user and user has many posts
Post.belongsTo(User, {
    foreignKey: "creator"
})

User.hasMany(Post, {
    foreignKey: "creator",
    onDelete: "CASCADE"
})

// Coment belongs to post and post has many comments
Comment.belongsTo(Post, {
    foreignKey: "post_id"
})

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
})



module.exports = {
    User, Post, Comment
}