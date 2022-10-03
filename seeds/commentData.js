const { Comment } = require('../models')

const commentData = [
    {
        comment_text: 'Commenting my first comment here',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'This is another boring comment',
        user_id: 2,
        post_id: 1
    }
]

module.exports = commentData;