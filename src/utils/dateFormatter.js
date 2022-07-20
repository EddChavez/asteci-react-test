import moment from "moment";

export function dateFormatLabel(label) {
	return moment(label).utc().format("YYYY MM DD");
}
