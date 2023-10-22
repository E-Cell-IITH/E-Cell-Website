const mongoose = require('mongoose');

const startupSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    fName: {
        type: String,
        default: ''
    },
    pocName: {
        type: String,
        default: ''
    },
    pocNum: {
        type: String,
        default: ''
    },
    pocEmail: {
        type: String,
        default:''
    },
    oEmail: {
        type: String,
        default: ''
    },
    stage: {
        type: String,
        default: ''
    },
    fIndustry: {
        type: String,
        default: ''
    },
    sector: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        default: ''
    },
    aYears : {
        type: Number,
        default:0
    },
    city : {
        type: String,
        default: ''
    },
    about : {
        type: String,
        default: ''
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})

startupSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

startupSchema.set('toJSON', {
    virtuals: true,
});


exports.Startup = mongoose.model('Startup', startupSchema);
