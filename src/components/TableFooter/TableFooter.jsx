import React from "react";
import { MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";
import "./index.scss";

const TableFooter = ({
	totalPageCount = 10,
	totalItems,
	currentPage = 1,
	pagingHandler,
}) => {
	const previousHandler = () => {
		if (currentPage > 1) pagingHandler(currentPage - 1);
	};

	const nextHandler = () => {
		if (currentPage < totalPageCount) pagingHandler(currentPage + 1);
	};

	return (
		<div className="table-footer">
			<MDBPagination className="table-footer__pagination">
				<MDBPageItem disabled={currentPage < 2} onClick={previousHandler}>
					<MDBPageNav>
						<span>Anterior</span>
					</MDBPageNav>
				</MDBPageItem>
				{Array.from(Array(totalPageCount)).map((x, index) => (
					<MDBPageItem
						onClick={() => pagingHandler(index + 1)}
						active={index + 1 === currentPage}
						key={`item-pagination-${index}`}
					>
						<MDBPageNav>{index + 1}</MDBPageNav>
					</MDBPageItem>
				))}
				<MDBPageItem
					disabled={currentPage === totalPageCount}
					onClick={nextHandler}
				>
					<MDBPageNav>
						<span>Anterior</span>
					</MDBPageNav>
				</MDBPageItem>
			</MDBPagination>
		</div>
	);
};

export default TableFooter;
