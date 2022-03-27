import React from "react";
import NavTabs from "../Nav";

function Header({ currentPage, handlePageChange }) {
	return (
		<header className="bg-secondary mb-4 py-2 flex-row align-center">
			<NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
		</header>
	);
}

export default Header;
