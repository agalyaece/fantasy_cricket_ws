import mongoose from "mongoose";

const teamsSchema = new mongoose.Schema({
    team_name: {
        type: String,
        required: true,
    },
    team_short_name:{
        type: String,
        required: true,
    },
  
   
    players: {
        type: [{
            player_name: String,
            player_short_name: String,
            player_role: String,
            credits: Number,
            team_short_name: String,
            isCaptain: {
                type: Boolean,
                default: false,
            },
            isViceCaptain: {
                type: Boolean,
                default: false,
            },
        }],

    },
})

const Teams = mongoose.model("Teams", teamsSchema);

export default Teams;
