import CreateTeam from "../../models/fantasy/create_team.module.js";

export const createTeam = async (req, res) => {
    const matches = req.body;
    
    const newTeam = new CreateTeam(matches);
    try {
        await newTeam.save();
        console.log("Team Created successfully");
        res.status(201).json({ success: true, message: "Team Created successfully", data: newTeam });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const getSelectedTeams = async (req, res) => {
    await CreateTeam.find().then((data) => {
        res.status(201).json(data);
    })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        })
}