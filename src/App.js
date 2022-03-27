import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// const App = () => <PortfolioContainer />;

function App() {
	const [currentPage, setCurrentPage] = useState("About");

	// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
	const renderPage = () => {
		if (currentPage === "About") {
			return <About />;
		}
		if (currentPage === "Contact") {
			return <Contact />;
		}
		return <About />;
	};

	useEffect(() => {
		document.title = currentPage;
	});

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			<Header currentPage={currentPage} handlePageChange={handlePageChange} />
			<main>{renderPage()}</main>
			<Footer />
		</div>
	);
}
export default App;
