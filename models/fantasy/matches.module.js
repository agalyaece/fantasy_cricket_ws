import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
    tournament_name: {
        type: String,
        required: true
    },
    team_A: {
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
    team_B: {
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
    match_date: {
        type: Date,
        required: true,
    },
})

const Match = mongoose.model("Match", matchSchema);
export default Match;
