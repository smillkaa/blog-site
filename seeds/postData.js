const { Post } = require('../models')

const postData = [
    {
        name: "This is the first post",
        content: "This is the first post's content. This is the first post's content. This is the first post's content. This is the first post's content. This is the first post's content. This is the first post's content.",
        user: "userOne",
        date: "07/27/2022",
        post_id: 1

    },
    {
        name: "This is the second post",
        content: "This is the second post's content. This is the second post's content. This is the second post's content. This is the second post's content. This is the second post's content. This is the second post's content.",
        user: "userTwo",
        date: "02/13/2022",
        post_id: 2

    }
]

const seedPost = () => Post.bulkcreate(postData)

module.exports = seedPost