import Match from "../../models/fantasy/matches.module.js";

export const createMatches = async (req, res) => {
    const matches = req.body;
    if (!matches.tournament_name || !matches.team_A || !matches.team_B) {
        return res.status(400).json({ success: false, message: "Provide all fields" })
    }
    const newMatch = new Match(matches);
    try {
        await newMatch.save();
        console.log("Match added successfully");
        res.status(201).json({ success: true, message: "Match added successfully", data: newMatch });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const getMatches = async (req, res) => {
    await Match.find().then((data) => {
        res.status(201).json(data);
    })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
}