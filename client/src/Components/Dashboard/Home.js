import React from "react";
import Image from "react-bootstrap/Image";
import "./Home.css";

export default function Home() {
	return (
		<div>
			<Image
				src="http://www.betterbodieslbc.com/backgrounds/personal-training-home-banner.jpg"
				fluid
			/>
			<header>
				<h1>Ashtainy Fit</h1>
			</header>
			<div className="container">
				<h1>Mission</h1>
				<p className="about">
					My mission is to improve my client's quality of life now and ongoing.
					I help my clients achieve their fitness goals by delivering the most
					effective one-on-one personal training (in-studio, in-home, or outdoor
					training), and virtual coaching in the environment that is most
					comfortable and convenient for them.
				</p>

				<h1>About me</h1>
				<p className="about">
					Thanks for visiting my website. My name is Alex Ashtiany and I
					attended the National Personal Training Institute (NPTI) in 2015. I've
					worked for commercial gyms before, and built a strong clientele which
					then helped me gain the confidence I needed to start my own business
					in 2017. I have the knowledge and skills to
					help various client's needs including strength training, fat loss,
					muscle building, functional training, partner training, rehabilitation
					training, and train all age groups.
                    <br />
                     Other
					certifications include kettle bell, basic nutrition, and powerlifting.
					Now is my time to help YOU.
				</p>
			</div>
		</div>
	);
}
