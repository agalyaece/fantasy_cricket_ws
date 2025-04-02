import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    teams: {
        type: [{
            team_name: String,
            team_short_name: String,
            players: [{
                player_name: String,
                player_short_name: String,
                player_role: String,
                credits: Number,
                team_short_name: String,
            }]
        }],
        required: true,

    },

});


const Tournament = mongoose.model("Tournament", tournamentSchema);

export default Tournament;