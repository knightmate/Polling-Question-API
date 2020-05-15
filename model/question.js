let mongoose = require('mongoose');
// let optionsModel = require('./options.model');
let questionsSchema = mongoose.Schema;


let questionSchema = new questionsSchema({

    id: { type: String, unique: true, required: true },
    title: { type: String, unique: true, required: true },

    options: [{ type: questionsSchema.Types.ObjectId, ref: 'options' }]

},
 {timestamps: true});
 


//questionSchema.pre('remove', async function() {
 //   this.model('optionsModel').remove({ _id: this._id });
//});

let questionModel = mongoose.model("questions", questionSchema);

module.exports = questionModel;