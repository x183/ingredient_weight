import express from "express";
import vtmRouter from "./routers/volumeToMass";
import { config } from "dotenv";
import mtvRouter from "./routers/massToVolume";
config();
const app = express();
app.use("/volymtillmassa/", vtmRouter);
app.use("/massatillvolym/", mtvRouter);
app.listen(process.env.PORT || 8080, () => {
	console.log(`Servern kör på port  ${process.env.PORT || 8080}`);
});