import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    player_name: {
        type:String,
        required: true,
    },
    player_short_name: {
        type: String,
        required: true,
    },
    nationality:{
        type: String,
        required: true,
    },
    teams: {
        type: [String],
    },
    player_role:{
        type: [String],
    },
}, {timestamps: true});

const Player = mongoose.model("Player", playerSchema);

export default Player;
