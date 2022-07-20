import React, { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import "./index.scss";
import { ColumnHeaders } from "./configTable";
import TableFooter from "../TableFooter/TableFooter";

export const Table = () => {
	const { isFetching, data } = useGetData();
	const [results, setResults] = useState([]);

	useEffect(() => {
		if (data?.results.length > 0) setResults(data.results);
	}, [data]);

	const Headers = () => {
		return ColumnHeaders.map((col) => <th key={col.field}>{col.label}</th>);
	};

	const Cell = (col, row) => {
		switch (col.field) {
			case "chanceOfRain":
				return col.callback(row.probabilityofprecip, row.relativehumidity);
			case "lastreporttime":
				return col.callback(row[col.field]);
			default:
				return row[col.field];
		}
	};

	return (
		<>
			<div className="wrapper-table">
				<MDBTable>
					<MDBTableHead>
						<tr>{Headers()}</tr>
					</MDBTableHead>
					<MDBTableBody>
						{results.map((row) => (
							<tr key={row._id}>
								{ColumnHeaders.map((col) => (
									<td key={`${row._id}-${col.field}`}>{Cell(col, row)}</td>
								))}
							</tr>
						))}
					</MDBTableBody>
				</MDBTable>
			</div>
			<TableFooter />
		</>
	);
};
