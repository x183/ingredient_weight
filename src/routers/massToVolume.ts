import express, { Router } from "express";
import { Menheter } from "../types/Enhet";
import { massaVolym } from "../actions/converter";

const mtvRouter = Router();
mtvRouter.get(
	"/konvertera/:ingrediens/:massa/:enhet",
	async (req: express.Request, res: express.Response) => {
		const ingrediens = req.params.ingrediens;
		const massa = parseFloat(req.params.massa) || 0;
		const enhet = req.params.enhet;
		if (massa === 0) {
			res.send("Felaktig massa, volym är på formatet ");
		}
		if (Menheter[enhet] === undefined) {
			res.send(`Felaktig enhet, enheterna som stöds är ${Object.keys(Menheter).join(", ")}`);
		}
		const data = massaVolym(ingrediens, massa, enhet);
		if (data) {
			res.status(200).send(data);
		}
		else {
			res.status(404).send("Ingrediensen finns inte");
		}
	}
);

export default mtvRouter;