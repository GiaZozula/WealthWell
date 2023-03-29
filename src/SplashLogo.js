import logo from "./assets/wealthwelllogo.png";

// this component handles our splash logo
const SplashLogo = () => {
	return (
		<>
			<div className="imgContainer">
				<img src={logo} alt="WealthWell logo" />
			</div>
		</>
	);
};

export default SplashLogo;
