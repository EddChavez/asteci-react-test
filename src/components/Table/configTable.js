import { dateFormatLabel } from "../../utils/dateFormatter";
import { checkIfRains } from "../../utils/validateRains";

export const ColumnHeaders = [
	{
		label: "_id",
		field: "_id",
	},
	{
		label: "cityid",
		field: "cityid",
	},
	{
		label: "name",
		field: "name",
	},
	{
		label: "state",
		field: "state",
	},
	{
		label: "probabilityof precip",
		field: "probabilityofprecip",
	},
	{
		label: "relativehu midity",
		field: "relativehumidity",
	},
	{
		label: "Lastreportt ime formato (YYYY/MM /DD)",
		field: "lastreporttime",
		callback: dateFormatLabel,
	},
	{
		label:
			"LLUEVE SI se cumple = probabilityof precip > 60 || relativehumi dity > 50",
		field: "chanceOfRain",
		callback: checkIfRains,
	},
];
