import React, { useEffect, useState } from "react";
import API from "../api/api";

const useGetData = () => {
	const [isFetching, setIsFetching] = useState(false);
	const [data, setData] = useState();

	useEffect(() => {
		async function getData() {
			try {
				setIsFetching(true);
				const { data } = await API.get();
				setData(data);
			} catch (error) {
				console.error(error);
				throw error;
			} finally {
				setIsFetching(false);
			}
		}
		getData();
	}, []);

	return { isFetching, data };
};

export default useGetData;
