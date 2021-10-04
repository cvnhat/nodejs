const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete= require('mongoose-delete')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name: { type: String },
    description: { type: String, maxlength: 500 },
    slug: { type: String, slug: 'name', unique: true},
    image: { type: String },
    level: {type: String},
    
},{
    timestamps: true,
});

//Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {overrideMethods: 'all', deletedAt: true})

module.exports = mongoose.model('Course', Course);
