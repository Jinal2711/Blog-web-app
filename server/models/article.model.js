const mongoose = require('mongoose');


const articleSchema = new mongoose.Schema(
    {
        title: String,
        slug: String,
        content: String,
        category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
      },
      {
        timestamps: true,
      }
)

module.exports = mongoose.model('Article', articleSchema);