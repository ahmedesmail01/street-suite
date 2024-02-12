import "./MainContent.css";
import ticker from "../../assets/ticker 1.svg";
import contract from "../../assets/contract 1.svg";
import volume from "../../assets/volume 1.svg";
import risk from "../../assets/risk 1.svg";
const MainContent = () => {
	return (
		<div className="main_content">
			<div className="main_head">
				<div className="top">
					<div className="info">
						<img src={ticker} alt="ticker" />
						<p>$TSLA</p>
					</div>
					<div className="line"></div>
					<div className="info">
						<img src={contract} alt="contract" />
						<p>200 Contracts</p>
					</div>
					<div className="line"></div>
					<div className="info">
						<img src={volume} alt="volume" />
						<p>12.2%</p>
					</div>
					<div className="line"></div>
					<div className="info">
						<img src={risk} alt="risk" />
						<p>High risk</p>
					</div>
				</div>
				<p className="text">
					Someone Just bought xxxx contracts of $XYZ, this is notable because
					the relative volume on this options trade is X.X%.
				</p>
			</div>
			<div className="posts">
				<div className="post">
					<p>
						X company released a short report on $XYZ, High IV option sales opps
					</p>
				</div>
				<div className="post">
					<p>
						$XYZ just announced an acquisition of $ABC at $X. This is an
						arbitrage opportunity, with the max gain being %X if the deal
						closes, but the possible risk is %Y if the deal fails.
					</p>
				</div>
				<div className="post">
					<p>
						$XYZ just announced an acquisition of $ABC at $X. This is an
						arbitrage opportunity, with the max gain being %X if the deal
						closes, but the possible risk is %Y if the deal fails.
					</p>
				</div>
				<div className="post">
					<p>
						$XYZ just announced an acquisition of $ABC at $X. This is an
						arbitrage opportunity, with the max gain being %X if the deal
						closes, but the possible risk is %Y if the deal fails.
					</p>
				</div>
				<div className="post">
					<p>
						$XYZ just announced an acquisition of $ABC at $X. This is an
						arbitrage opportunity, with the max gain being %X if the deal
						closes, but the possible risk is %Y if the deal fails.
					</p>
				</div>
				<div className="post">
					<p>
						$XYZ just announced an acquisition of $ABC at $X. This is an
						arbitrage opportunity, with the max gain being %X if the deal
						closes, but the possible risk is %Y if the deal fails.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
