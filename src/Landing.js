import heroImage from "./assets/hero1.png";
import posiIcon from "./assets/positivity.png";
import smileIcon from "./assets/distance.png";
import balanceScreen from "./assets/balance.jpg";
import boxesImage from "./assets/boxes.png";
import { Link } from "react-router-dom";

// This component displays the initial page of our app
const Landing = () => {
	return (
		<>
			<section className="landingPage">
                <div className="landingWrapper">
                    <nav>
                        <div className="logo">
                            <h1 href="#">WealthWell</h1>
                        </div>
                        <div className="navJoinLogin">
                            <ul className="right-nav">
                                <Link to="/signup">
                            <li><button className="dayButton"><a href="#">Join Us</a></button></li>
                            </Link>
                            <Link to="/login">
                            <li><button className="dayButton"><a href="#">Login</a></button></li>
                            </Link>
                            </ul>
                        </div>
                    </nav>    
                    <div className="hero">
                        <div className="hero-left">  
                            <h2>Spend smarter,<br></br>save better.</h2>
                            <p className="subHeading">Invest in your financial wellness with WealthWell, a budgeting app that helps you create a healthy money mindset.</p>
                            <Link className="rectangleButton shadow" to="/signup">
                                <h4>Join Us Today!</h4>
                            </Link>
                        </div>
                        <div className="hero-right">
                            <img src={heroImage} alt="Clip Art of person dealing with finances" />
                        </div>
                    </div>
                    <div className="content-middle">
                        <div className="middle-right">
                            <img src={posiIcon} alt="Financial health icon" />
                            <h3>The perfect tool for financial health</h3>
                            <p>Easily add and list expenses so you can stay on top of your spending. </p>
                            <p>Keep track of your budget until the next payday with our intuitive interface, designed to make managing your money a breeze. </p>
                        </div>
                        <div className="middle-left">
                            <img src={balanceScreen} className="shadowStatic" alt="Screenshot of the balance screen" />
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="bottom-right">
                            <img src={boxesImage} alt="Clip Art of person dealing carrying presents" />
                        </div>
                            <div className="bottom-left">
                            <img src={smileIcon} alt="Path to happiness icon" />
                            <h3>Financial experts agree</h3> 
                            <p>By tracking your expenses and sticking to a budget, you can reduce your debt, save money, and achieve your financial goals. </p> 
                            <p>Don't just take our word for it – financial experts everywhere recommend using a budget app to take your finances to the next level.</p>
                        </div>
                    </div>
                </div>
                <footer>                        
                    <p>© 2023 WealthWell Corporation | <a href="https://github.com/GiaZozula">Source Code</a></p>
                </footer>
			</section>
		</>
	);
};

export default Landing;