import mongoose from "mongoose";

const createTeamSchema = new mongoose.Schema({
    team_A: {
        type: String,
        required: true
    },
    team_B: {
        type: String,
        required: true
    },
    tournament_name: {
        type: String,
        required: true
    },
    players: [{
        player_name: String,
        player_short_name: String,
        player_role: String,
        credits: Number,
        team_short_name: String,
        is_captain: {
            type: Boolean,
            default: false,
        },
        is_vice_captain: {
            type: Boolean,
            default: false,
        },
    }],
    captain: {
        type: String,
        required: true
    },
    vice_captain: {
        type: String,
        required: true
    },
    match_date: {
        type: Date,
        required: true,
    },
})

const CreateTeam = mongoose.model("CreateTeam", createTeamSchema);
export default CreateTeam;