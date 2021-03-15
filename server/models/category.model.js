
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: String,
    slug: String,
    description: String,
    articles: [{type: mongoose.Schema.Types.ObjectId, ref: 'Article'}]
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('Category', categorySchema)