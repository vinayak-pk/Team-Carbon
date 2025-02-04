import React from "react";
import logo_dark_ketto from '../../images/logo_dark_ketto.svg'
import fb_logo from '../../images/fb_logo.JPG'

import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1 style={{
				color: "green",
				textAlign: "center"
			}}>
			</h1>
			<Container>
				<Row>
					<Column>
						<div style={{marginBottom:"30px"}}>
							<img src={logo_dark_ketto} style={{ height: "40px" }} alt="logo"/>
							<hr style={{ width: "100%",marginBottom:"0px" ,margin: "5px auto", color: "rgb(53, 53, 53)" }} />

						</div>

						<FooterLink style={{marginTop:"-25px"}} href="#">
						<img src={fb_logo} style={{height: "45px" }} alt="fb_logo"/>
						</FooterLink>

						<div>
						<FooterLink  style={{fontWeight:"700" ,fontSize:"25px"}}  href="#">15M +</FooterLink><br/>
						<FooterLink  style={{fontSize:"13px"}}  href="#">Followers</FooterLink>
						</div>
						<div style={{fontWeight:"700" ,marginTop:"10px"}}>
						<FooterLink style={{fontSize:"15px"}} href="#">For any queries</FooterLink><br/>
						<FooterLink style={{fontSize:"15px"}}  href="#">Email: info@ketto.org</FooterLink><br/>
						<FooterLink style={{fontSize:"15px"}}  href="#">Contact: 7700975559</FooterLink>
						</div>
						

							
					</Column>

					<Column>
						<Heading>Causes</Heading>
						<FooterLink href="#">Medical crowdfunding</FooterLink>
						<FooterLink href="#">Cancer Crowdfunding</FooterLink>
						<FooterLink href="#">Education Crowdfunding</FooterLink>
					</Column>
					<Column>
						<Heading>How it works?</Heading>
						<FooterLink href="#">Fundraising for NGOs</FooterLink>
						<FooterLink href="#">Corporates</FooterLink>
						<FooterLink href="#">Browse Fundraiser</FooterLink>
						<FooterLink href="#">What is Crowdfunding?</FooterLink>
					</Column>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Team Ketto</FooterLink>
						<FooterLink href="#">In The News</FooterLink>
						<FooterLink href="#">Our Partners</FooterLink>
						<FooterLink href="#">Careers</FooterLink>
					</Column>
					<Column>
						<Heading>Support</Heading>
						<FooterLink href="#">Medical Finance</FooterLink>
						<FooterLink href="#">FAQs & Help Center</FooterLink>
						<FooterLink href="#">Fundraising Tips</FooterLink>
						<FooterLink href="#">Fundraiser Video</FooterLink>
						<FooterLink href="#">Plans & Pricing</FooterLink>
						<FooterLink href="#">Contact Us</FooterLink>
					</Column>

					{/* 
        <Column>
			<Heading>Support</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column> */}



				</Row>
			 <hr style={{ width: "100%", margin: "auto", color: "gray" }} />

				<p style={{ color: "#fff", margin: "30px auto" }}>Copyright © 2021 Ketto Online Ventures Pvt Ltd. All Rights Reserved.
				Terms of Use |
				Privacy Policy |
				AML Policy |
				Use of cookies
                </p>
			</Container>

		</Box>
	);
};
export { Footer };
