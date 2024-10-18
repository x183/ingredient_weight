import express, { Router } from "express";
import { Venheter } from "../types/Enhet";
import { volymMassa } from "../actions/converter";

const vtmRouter = Router();
vtmRouter.get(
	"/konvertera/:ingrediens/:volym/:enhet",
	async (req: express.Request, res: express.Response) => {
		const ingrediens = req.params.ingrediens;
		const volym = parseFloat(req.params.volym) || 0;
		const enhet = req.params.enhet;
		if (volym === 0) {
			res.send("Felaktig volym, volym är på formatet ");
		}
		if (Venheter[enhet] === undefined) {
			res.send(`Felaktig enhet, enheterna som stöds är ${Object.keys(Venheter).join(", ")}`);
		}
		const data = volymMassa(ingrediens, volym, enhet);
		if (data) {
			res.status(200).send(data);
		}
		else {
			res.status(404).send("Ingrediensen finns inte");
		}
	}
);

export default vtmRouter;