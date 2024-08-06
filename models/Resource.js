const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true } // vidéo, devoir, projet, etc.
});

module.exports = mongoose.model('Resource', resourceSchema);
