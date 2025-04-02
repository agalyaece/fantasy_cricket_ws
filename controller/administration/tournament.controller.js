import Tournament from "../../models/administration/tournament.module.js";

export const createTournament= async(req,res)=> {
    const tournament_details = req.body
    if (!tournament_details.name) {
        return res.status(400).json({ success: false, message: "Tournament name is required" });
    }
    if (!tournament_details.teams) {
        return res.status(400).json({ success: false, message: "Teams are required" });
    }
  
    try {
        const tournament = new Tournament(tournament_details);
        await tournament.save();
        res.status(201).json({ success: true, message: "Tournament added successfully", data: tournament });
        // console.log("Tournament created:", tournament);
    } catch (error) {
        res.status(500).send(err.message);
        // console.error("Error creating tournament:", error);
    }
}


export const getTournament = async (req, res) => {
    await Tournament.find().then((data) => {
        // console.log("Tournament details:", data);
        res.status(201).json(data);
    })
        .catch((err) => {
            res.status(500).send(err.message);
            // console.log(err);
        })
}

