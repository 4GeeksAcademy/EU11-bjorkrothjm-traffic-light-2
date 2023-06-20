import React ,{ useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	// const color = "green-light-selected"
	const [color, setColor] = useState("");

	const selectColor = (event) => {
		let cssClass = event.target.className.trim()

		cssClass === "light green"
			? setColor("light green")
			: cssClass === "light yellow"
				? setColor("light yellow")
				: cssClass === "light red"
					? setColor ("light red")
					: setColor("")
	};

	return (
		<div id="container">
			<div id="traffic-top"></div>
			<div id="box">
				<div className={"light red "+(color==="light red"? "glow" : "")} onClick={selectColor}></div>
				<div className={"light yellow "+(color==="light yellow"? "glow" : "")} onClick={selectColor}></div>
				<div className={"light green "+(color==="light green"? "glow" : "")} onClick={selectColor}></div>
			</div>
		</div>
	)
};

export default Home;
