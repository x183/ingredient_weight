import data from '../data/ingredienser.json';
import { Venheter, Menheter } from '../types/Enhet';
export const volymMassa = (ingrediens: string, volym: number, enhet: string) => {
	var massa = volym * parseFloat((data as Ingredienser)[ingrediens]) * Venheter[enhet];
	var enhet = "g";
	console.log(massa);
	const massenheter = Object.keys(Menheter);
	for (var i = 0; i < massenheter.length; i++) {
		const massenhetsnyckel = massenheter[i];
		const måttmassa = Menheter[massenhetsnyckel];
		if (massa >= måttmassa) {
			massa /= måttmassa;
			enhet = massenhetsnyckel;
			break;
		}
	}
	return { massa: massa, enhet: enhet };
}

export const massaVolym = (ingrediens: string, massa: number, enhet: string) => {
	var volym = (massa / parseFloat((data as Ingredienser)[ingrediens])) * Menheter[enhet];
	var enhet = "krm";
	console.log(volym);
	const volymenheter = Object.keys(Venheter);
	for (var i = 0; i < volymenheter.length; i++) {
		const volymenhetsnyckel = volymenheter[i];
		const måttvolym = Venheter[volymenhetsnyckel];
		if (volym >= måttvolym) {
			volym /= måttvolym;
			enhet = volymenhetsnyckel;
			console.log("Enhet found " + enhet + " och volym " + volym);
			break;
		}
	}
	return { volym: volym, enhet: enhet };
}


interface Ingredienser {
	[key: string]: string
}
