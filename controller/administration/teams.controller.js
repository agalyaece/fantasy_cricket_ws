import Teams from "../../models/administration/teams.module.js";

export const createTeam = async (req, res) => {
    const teams = req.body;

    const existingTeam = await Teams.findOne({ name: teams.team_name });
    if (existingTeam) {
        return res.status(400).json({ success: false, message: "Team already exists, try adding new" });
    }
    if (!teams.team_name || !teams.team_short_name || !teams.players ) {
        return res.status(400).json({ success: false, message: "Provide all fields" })
    }
    const newTeams = new Teams(teams);
    try {
        await newTeams.save();
        console.log("Team added successfully");
        res.status(201).json({ success: true, message: "Team added successfully", data: newTeams });
    } catch (error) {
        console.log(error);

        res.status(500).json({ success: false, message: "Server Error" });
    }

}


export const getTeams = async (req, res) => {
    await Teams.find().then((data) => {
        res.status(201).json(data);
    })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
}