const { Post } = require('../models')

const postData = [
    {
        title: "This is the first post",
        content: "This is the first post's content. This is the first post's content. This is the first post's content. This is the first post's content. This is the first post's content. This is the first post's content.",
        user: "userOne",
        date: "07/27/2022",
        user_id: 1

    },
    {
        title: "This is the second post",
        content: "This is the second post's content. This is the second post's content. This is the second post's content. This is the second post's content. This is the second post's content. This is the second post's content.",
        user: "userTwo",
        date: "02/13/2022",
        user_id: 2

    }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts