import Player from "../../models/administration/players.module.js";

export const createPlayer = async (req, res) => {

    const players = req.body;

    const existingPlayer = await Player.findOne({
        player_name: players.player_name.toLowerCase(),
        player_short_name: players.player_short_name.toLowerCase(),
        nationality: players.nationality
    });
    if (existingPlayer) {
        return res.status(400).json({ success: false, message: "Player with same details already exists" });
    }

    if (!players.player_name || !players.player_short_name || !players.nationality) {
        return res.status(400).json({ success: false, message: "Provide all fields" })
    }

    const newPlayers = new Player(players);
    try {
        await newPlayers.save();
        console.log(newPlayers);
        res.status(201).json({ success: true, message: "player added successfully", data: newPlayers });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};


export const getPlayers = async (req, res) => {
    await Player.find().then((data) => {
        res.status(201).json(data);
    })
        .catch((err) => {
            res.status(500).send(err.message);
            console.log(err);
        });
}