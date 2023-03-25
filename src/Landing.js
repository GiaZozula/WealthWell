import SplashLogo from "./SplashLogo";
import { Link } from "react-router-dom";

// This component displays the initial page of our app
const Landing = () => {
	return (
		<>
			<section className="landingPage">
                <div class="landingWrapper">
                    <nav>       
                        <ul>
                            {/* <SplashLogo /> */}
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href=".#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                            <Link className="rectangleButton shadow" to="/signup">
                                <h4>Create a new profile</h4>
                            </Link>
                            <Link className="rectangleButton shadow" to="/login">
                                <h4>Log In</h4>
                            </Link>
                        </ul>
                    </nav>          
                    <h1 class="logo">WealthWell</h1>    

                </div>
			</section>
		</>
	);
};

export default Landing;