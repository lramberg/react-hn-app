import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../HomePage/HomePage.module.css';

// images
import BlueLogo from '../../images/surelogo_blue.png';
import Bitmap from '../../images/Bitmap.png';
import ChubbLogo from '../../images/chubb.png';
import NWLogo from '../../images/NationwideLrgFormat.png';
import QBELogo from '../../images/QBE_logo.png';
import AssurantLogo from '../../images/Assurant_logo.svg.png';
import ApiIcon from '../../images/api.png';
import iFrameIcon from '../../images/iFrame.png';
import WhiteLabelIcon from '../../images/whitelabel.png';
import PetIcon from '../../images/Pet Icon.png';
import TravelIcon from '../../images/travel icon.png';
import PropertyIcon from '../../images/Property Icon.png';
import CatastrophicEventIcon from '../../images/Event Icon.png';
import HomeIcon from '../../images/Home Icon.png';
import TwitterIcon from '../../images/Twitter.png';
import FacebookIcon from '../../images/Facebook.png';
import InstagramIcon from '../../images/Instagram.png';


const HomePage = () => {
  return (
    <div className={styles.HomePage}>
        <div className={styles.navbar}>
            this is the nav bar
            <img src={BlueLogo} alt="sure logo"/>
        </div>
        <section className={styles.hero}>
            <h1>Sure + You.</h1>
            <p>
                Complement your core business and <em>increase customer lifetime value</em> with integrated offers from top-tier insurance carriers.
            </p>
            <button>
                <Link to='/hacker-news'>Get Started</Link>
            </button>
            <img src={Bitmap} alt=""/>
        </section>
        <section className={styles.partners}>
            <img src={ChubbLogo} alt="chubb logo"/>
            <img src={NWLogo} alt="nationwide logo"/>
            <img src={QBELogo} alt="qbe logo"/>
            <img src={AssurantLogo} alt="assurant logo"/>
        </section>
        <section className={styles.solutions}>
            <p>Choose the solution that's right for your business.</p>
            <div>
                <div>
                    <img src={ApiIcon} alt="icon"/>
                    <h3>API</h3>
                </div>
                <p>
                    The Sure API is a set of RESTful endpoints that allow you to customize the look and feel for a truly native experience.
                </p>
            </div>
            <div>
                <div>
                    <img src={iFrameIcon} alt="icon"/>
                    <h3>iFrame</h3>
                </div>
                <p>
                    The iFrame solution allows for easy integration - simply place a line of code to embed an insurance form anywhere on your site.
                </p>
            </div>
            <div>
                <div>
                    <img src={WhiteLabelIcon} alt="icon"/>
                    <h3>White Label</h3>
                </div>
                <p>
                    Sure will build and host a branded page, which you ca link to from a webpage or an email.
                </p>
            </div>
        </section>
        <section className={styles.coverageOptions}>
                <p>
                    Our partners come in all shapes and sizes, just like our policies.
                </p>
                <div className={styles.optionWrapper}>
                    <img src={PetIcon} alt="pet icon"/>
                    <h4>Pet Coverage</h4>
                    <p>
                        Includes preventatice, accident, and comprehensive
                    </p>
                </div>
                <div className={styles.optionWrapper}>
                    <img src={TravelIcon} alt="suitcase icon"/>
                    <h4>Travel Coverage</h4>
                    <p>
                        Includes baggage, car, rental, leisure, and flight policies
                    </p>
                </div>
                <div className={styles.optionWrapper}>
                    <img src={PropertyIcon} alt="picture frame icon"/>
                    <h4>Property Coverage</h4>
                    <p>
                        Includes jewelry, collectibles, and smartphones policies
                    </p>
                </div>
                <div className={styles.optionWrapper}>
                    <img src={CatastrophicEventIcon} alt="diamond ring icon"/>
                    <h4>Catastrophic Event Coverage</h4>
                    <p>
                        Includes weddings, and special events policies
                    </p>
                </div>
                <div className={styles.optionWrapper}>
                    <img src={HomeIcon} alt="house icon"/>
                    <h4>Home Coverage</h4>
                    <p>
                        Includes renters, eviction, and homeowners policies
                    </p>
                </div>
        </section>
        <section className={styles.signup}>
            <p>Contact our partnerships team today.</p>
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Company" />
                <input type="text" placeholder="Work Email" />
                <button>Submit</button>
            </form>
        </section>
        <footer>
            <img src={BlueLogo} alt="sure logo"/>
            <p>&copy; 2016-2017 Sure Inc.<br/>All rights reserved.</p>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Licenses</a>
            <a href="#">Help Center</a>
            <a href="#">Contact Us</a>
            <div className={styles.iconWrapper}>
                <img src={TwitterIcon} alt="twitter icon"/>
                <img src={FacebookIcon} alt="facebook icon"/>
                <img src={InstagramIcon} alt="instagram icon"/>
            </div>
        </footer>
    </div>
  );
};

export default HomePage;
