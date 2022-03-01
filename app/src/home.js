import React from 'react';
import './home.css';

function Home() {
	const redirectEvent = () =>  {
		window.location.href = "https://hackertyper.com/";
	}

	const redirectDiscord = () => {
		window.location.href = "https://hackertyper.com/";
	}

	return (
		<div className="homepage">

		<div className="subText1">
		17th March 2022
		</div>

		<div className="homeText">
		<h1>ADRENALINE</h1>
		</div>

		<div className="subText2">
		<h4>Are you ready to pump up your Open Source?</h4>
		</div>

		<div>
		<button className="registerButton" onClick={redirectEvent}>Register.begin()</button>
		<button className="discordServer" onClick={redirectDiscord}>Join Discord</button>
		</div>
  
		</div>
	);
}

export default Home;
