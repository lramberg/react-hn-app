import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../HomePage/HomePage.module.css';


const HomePage = () => {
  return (
    <div className={styles.HomePage}>
        <div className={styles.navbar}>
            this is the nav bar
            <img src={require('../../images/surelogo_blue.png')} alt="sure logo"/>
        </div>
        <section className={styles.hero}>
            <h1>Sure + You.</h1>
            <p>
                Complement your core business and <em>increase customer lifetime value</em> with integrated offers from top-tier insurance carriers.
            </p>
            <button>
                <Link to='/hacker-news'>Get Started</Link>
            </button>
            <img src={require('../../images/Bitmap.png')} alt="bitmap photo"/>
        </section>
        <section className={styles.partners}>
            <img src={require('../../images/chubb.png')} alt="chubb logo"/>
            <img src={require('../../images/NationwideLrgFormat.png')} alt="nationwide logo"/>
            <img src={require('../../images/QBE_logo.png')} alt="qbe logo"/>
            <img src={require('../../images/Assurant_logo.svg.png')} alt="assurant logo"/>
        </section>
        <section className={styles.solutions}>
            <p>Choose the solution that's right for your business.</p>
            <div>
                <div>
                    <img src={require('../../images/api.png')} alt="icon"/>
                    <h3>API</h3>
                </div>
                <p>
                    The Sure API is a set of RESTful endpoints that allow you to customize the look and feel for a truly native experience.
                </p>
            </div>
            <div>
                <div>
                    <img src={require('../../images/iFrame.png')} alt="icon"/>
                    <h3>iFrame</h3>
                </div>
                <p>
                    The iFrame solution allows for easy integration - simply place a line of code to embed an insurance form anywhere on your site.
                </p>
            </div>
            <div>
                <div>
                    <img src={require('../../images/whitelabel.png')} alt="icon"/>
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
                    <img src={require('../../images/Pet Icon.png')} alt="pet icon"/>
                    <h4>Pet Coverage</h4>
                    <p>
                        Includes preventatice, accident, and comprehensive
                    </p>
                </div>
                <div className={styles.optionWrapper}>
                    <img src={require('../../images/travel icon.png')} alt="suitcase icon"/>
                    <h4>Travel Coverage</h4>
                    <p>
                        Includes baggage, car, rental, leisure, and flight policies
                    </p>
                </div>
                <div className={styles.optionWrapper}>
                    <img src={require('../../images/Property Icon.png')} alt="picture frame icon"/>
                    <h4>Property Coverage</h4>
                    <p>
                        Includes jewelry, collectibles, and smartphones policies
                    </p>
                </div>
                <div className={styles.optionWrapper}>
                    <img src={require('../../images/Event Icon.png')} alt="diamond ring icon"/>
                    <h4>Catastrophic Event Coverage</h4>
                    <p>
                        Includes weddings, and special events policies
                    </p>
                </div>
                <div className={styles.optionWrapper}>
                    <img src={require('../../images/Home Icon.png')} alt="house icon"/>
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
            <img src={require('../../images/surelogo_blue.png')} alt="sure logo"/>
            <p>&copy; 2016-2017 Sure Inc.<br/>All rights reserved.</p>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Licenses</a>
            <a href="#">Help Center</a>
            <a href="#">Contact Us</a>
            <div className={styles.iconWrapper}>
                <img src={require('../../images/Twitter.png')} alt="twitter icon"/>
                <img src={require('../../images/Facebook.png')} alt="facebook icon"/>
                <img src={require('../../images/Instagram.png')} alt="instagram icon"/>
            </div>
        </footer>
    </div>
  );
};

export default HomePage;
