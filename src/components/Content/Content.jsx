import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";
import "./Content.css";
const Content = () => {
	return (
		<div className="content_holder">
			<Sidebar />
			<MainContent />
		</div>
	);
};

export default Content;
