import heroImage from "./assets/hero1.png";
import { Link } from "react-router-dom";

// This component displays the initial page of our app
const Landing = () => {
	return (
		<>
			<section className="landingPage">
                <div class="landingWrapper">
                    <nav>
                        <div class="logo">
                            <h1 href="#">WealthWell</h1>
                        </div>
                        <div class="navbar">
                            <ul class="left-nav">
                            <li><a href="#">Product</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Source Code</a></li>
                            </ul>
                        </div>
                        <div class="navJoinLogin">
                            <ul class="right-nav">
                                <Link to="/signup">
                            <li><a href="#">Join Us</a></li>
                            </Link>
                            <Link to="/login">
                            <li><a href="#">Login</a></li>
                            </Link>
                            </ul>
                        </div>
                    </nav>    
                    <div class="hero">
                        <div class="hero-left">  
                            <h2>Spend smarter,<br></br>save better.</h2>
                            <p>Invest in your financial wellness with WealthWell, a budgeting app that helps you create a healthy money mindset.</p>
                            <Link className="rectangleButton shadow" to="/signup">
                                <h4>Join Us Today!</h4>
                            </Link>
                        </div>
                        <div className="hero-right">
                            <img src={heroImage} alt="Clip Art of woman dealing with finances" />
                        </div>
                    </div>
                </div>
			</section>
		</>
	);
};

export default Landing;