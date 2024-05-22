const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            default: "Hassan Zandani"
        },
        content: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Tweet", tweetSchema);
