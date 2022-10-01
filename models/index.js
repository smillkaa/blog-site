const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');


// user to post relationship
User.hasMany(Post,{
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// comment to user relationship
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
    
});

// comment to post relationship
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
   
});

// user to comment relationship
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
   
});


// post to comment relationship 
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
   
});

module.exports = { User, Post, Comment };