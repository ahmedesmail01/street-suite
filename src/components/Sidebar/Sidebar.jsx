import "./Sidebar.css";
import vector from "../../assets/Vector.svg";
import verify from "../../assets/verify-round.svg";
const Sidebar = () => {
	return (
		<div className="sidebar">
			<h1>Filters</h1>
			<div className="sidebox">
				<label htmlFor="industry">Industry</label>
				<div className="select_holder">
					<img src={vector} alt="vector" />
					<select name="industry" id="industry">
						<option value="health-care">Health care.</option>
					</select>
				</div>
				<p>Choose something.</p>
			</div>
			<div className="sidebox">
				<label htmlFor="Market-Cap">Market Cap</label>
				<div className="select_holder">
					<img src={vector} alt="vector" />
					<select name="Market-Cap" id="Market-Cap">
						<option value="health-care">Large-Cap.</option>
					</select>
				</div>
				<p>Press Apply to see changes.</p>
			</div>
			<div className="sidebox">
				<label htmlFor="Risk">Risk</label>
				<div className="select_holder">
					<img src={vector} alt="vector" />
					<select name="Risk" id="Risk">
						<option value="health-care">Insert text here.</option>
					</select>
				</div>
				<p className="risk_option">
					<img src={verify} alt="verify" />
					Low risk
				</p>
				<p className="risk_option">
					<img src={verify} alt="verify" />
					Mid-risk
				</p>
				<p className="risk_option">
					<img src={verify} alt="verify" />
					High risk
				</p>
				<p className="risk_option">
					<img src={verify} alt="verify" />
					Option text here
				</p>
			</div>
			<button>Apply Filters</button>
		</div>
	);
};

export default Sidebar;
