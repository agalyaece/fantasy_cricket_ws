import express from "express";
import { createPlayer, getPlayers } from "../../controller/administration/players.controller.js";
import { createTeam, getTeams } from "../../controller/administration/teams.controller.js";
import { createTournament, getTournament } from "../../controller/administration/tournament.controller.js";
const router = express.Router();

router.post("/players/add_player", createPlayer);
router.get("/players/get_players", getPlayers);

router.post("/teams/add_team", createTeam);
router.get("/teams/get_teams", getTeams);

router.post("/tournaments/add_tournament", createTournament);
router.get("/tournaments/get_tournaments", getTournament)

export default router;