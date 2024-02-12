import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
	const [activeTab, setActiveTab] = useState("Alerts"); // State to keep track of the active tab

	// Function to handle click event on h2 element
	const handleTabClick = (tabName) => {
		setActiveTab(tabName); // Set the active tab
	};

	return (
		<ul className="nav_holder">
			<li className="nav_box">
				<a href="#" onClick={() => handleTabClick("Trading")}>
					<p>coming soon</p>
					<h2 className={activeTab === "Trading" ? "active" : ""}>Trading</h2>
				</a>
			</li>
			<div className="nav_line"></div>
			<li className="nav_box">
				<a href="#" onClick={() => handleTabClick("Automation")}>
					<p>coming soon</p>
					<h2 className={activeTab === "Automation" ? "active" : ""}>
						Automation
					</h2>
				</a>
			</li>
			<div className="nav_line"></div>
			<li className="nav_box">
				<a href="#" onClick={() => handleTabClick("Portfolio")}>
					<p>coming soon</p>
					<h2 className={activeTab === "Portfolio" ? "active" : ""}>
						Portfolio
					</h2>
				</a>
			</li>
			<div className="nav_line"></div>
			<li className="nav_box">
				<a href="#" onClick={() => handleTabClick("Alerts")}>
					<h2 className={activeTab === "Alerts" ? "active" : ""}>Alerts</h2>
				</a>
			</li>
			<div className="nav_line"></div>
			<li className="nav_box">
				<a href="#" onClick={() => handleTabClick("Training")}>
					<h2 className={activeTab === "Training" ? "active" : ""}>Training</h2>
				</a>
			</li>
		</ul>
	);
};

export default Navbar;
