import express from "express";
import { createMatches, getMatches } from "../../controller/fantasy/matches.controller.js";
import { createTeam, getSelectedTeams } from "../../controller/fantasy/create_team.controller.js";
const router = express.Router();

router.post("/matches/add_match", createMatches);
router.get("/matches/get_matches", getMatches);

router.post("/matches/create_team", createTeam);
router.get("/matches/get_selected_teams", getSelectedTeams);
export default router;