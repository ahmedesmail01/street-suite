import logo from "../../assets/street suite logo-04.png";
import notifications from "../../assets/icon.svg";
import avatar from "../../assets/avatar.svg";
import oval from "../../assets/Oval.svg";
import search from "../../assets/search.svg";
import more from "../../assets/More.svg";
import "./Header.css";
import { useState } from "react";
const Header = () => {
	const [notificationNum, setNotificationNum] = useState(6);
	const [searchInput, setSearchInput] = useState("");
	function searching(e) {
		setSearchInput(e);
		console.log(e);
	}
	return (
		<div className="header">
			<div>
				<img className="logo" src={logo} alt="logo-st" />
			</div>
			<div className="side_logo">
				<div className="search_holder">
					<img className="search_glass" src={search} alt="search glass" />
					<input
						className="search_input"
						type="search"
						name="search"
						placeholder="Search"
						value={searchInput}
						onChange={(e) => searching(e.target.value)}
					/>
				</div>
				<div className="admin_info">
					<div className="notification_holder">
						<img
							className="notifications"
							src={notifications}
							alt="notifications"
						/>
						<img className="oval" src={oval} alt="oval" />
						<p className="noti_num">{notificationNum}</p>
					</div>
					<div>
						<img className="avatar" src={avatar} alt="avatar" />
					</div>
					<div className="user_info">
						<p className="user_name">Moni Roy</p>
						<p className="user_position">Admin</p>
					</div>
					<div>
						<img src={more} alt="more" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
