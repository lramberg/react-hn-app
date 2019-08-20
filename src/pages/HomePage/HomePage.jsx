import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../HomePage/HomePage.module.css';


const HomePage = () => {
  return (
    <div className={styles.HomePage}>
        <nav className={styles.navbar}>
            <img src={require('../../images/surelogo_blue.png')} alt="sure logo" className={styles.navLogo} />
            <img src={require('../../images/menu.png')} alt="menu icon" className={styles.menu} />
        </nav>
        <section className={styles.hero}>
            <h1 className={styles.h1} >Sure + You.</h1>
            <p className={styles.heroBlurb} >
                Complement your core business and <strong>increase customer lifetime value</strong> with integrated offers from top-tier insurance carriers.
            </p>
            <button  >
                <Link to='/hacker-news' className={styles.getStartedBtn}>Get Started</Link>
            </button>
            <img src={require('../../images/Bitmap.png')} alt="bitmap photo" className={styles.computerImage} />
        </section>
        <section className={styles.partners}>
            <img src={require('../../images/chubb.png')} alt="chubb logo" className={`${styles.partnerLogo} ${styles.chubb}`} />
            <img src={require('../../images/NationwideLrgFormat.png')} alt="nationwide logo" className={`${styles.partnerLogo} ${styles.nationWide}`} />
            <img src={require('../../images/QBE_logo.png')} alt="qbe logo" className={`${styles.partnerLogo} ${styles.QBE}`} />
            <img src={require('../../images/Assurant_logo.svg.png')} alt="assurant logo" className={`${styles.partnerLogo} ${styles.assurant}`} />
        </section>
        <section className={styles.solutions}>
            <p className={styles.solutionsHeading} >Choose the solution that's right for your business.</p>
            <div>
                <div>
                    <img src={require('../../images/api.png')} alt="icon"/>
                    <h3 className={styles.h3} >API</h3>
                </div>
                <p className={styles.solutionBlurb} >
                    The Sure API is a set of RESTful endpoints that allow you to customize the look and feel for a truly native experience.
                </p>
            </div>
            <div>
                <div>
                    <img src={require('../../images/iFrame.png')} alt="icon"/>
                    <h3 className={styles.h3} >iFrame</h3>
                </div>
                <p className={styles.solutionBlurb} >
                    The iFrame solution allows for easy integration - simply place a line of code to embed an insurance form anywhere on your site.
                </p>
            </div>
            <div>
                <div>
                    <img src={require('../../images/whitelabel.png')} alt="icon"/>
                    <h3 className={styles.h3} >White Label</h3>
                </div>
                <p className={styles.solutionBlurb} >
                    Sure will build and host a branded page, which you ca link to from a webpage or an email.
                </p>
            </div>
        </section>
        <section className={styles.coverageOptions}>
                <p className={styles.coverageOptionsHeading} >
                    Our partners come in all shapes and sizes, just like our policies.
                </p>
                <div className={styles.coverageWrapper}>
                    <img src={require('../../images/Pet Icon.png')} alt="pet icon" className={styles.coverageIcon} />
                    <h4 className={styles.coverageTitle} >Pet Coverage</h4>
                    <p className={styles.coverageBlurb} >
                        Includes preventatice, accident, and comprehensive
                    </p>
                </div>
                <div className={styles.coverageWrapper}>
                    <img src={require('../../images/travel icon.png')} alt="suitcase icon" className={styles.coverageIcon} />
                    <h4 className={styles.coverageTitle} >Travel Coverage</h4>
                    <p className={styles.coverageBlurb} >
                        Includes baggage, car, rental, leisure, and flight policies
                    </p>
                </div>
                <div className={styles.coverageWrapper}>
                    <img src={require('../../images/Property Icon.png')} alt="picture frame icon" className={styles.coverageIcon} />
                    <h4 className={styles.coverageTitle} >Property Coverage</h4>
                    <p className={styles.coverageBlurb} >
                        Includes jewelry, collectibles, and smartphones policies
                    </p>
                </div>
                <div className={styles.coverageWrapper}>
                    <img src={require('../../images/Event Icon.png')} alt="diamond ring icon" className={styles.coverageIcon} />
                    <h4 className={styles.coverageTitle} >Catastrophic Event Coverage</h4>
                    <p className={styles.coverageBlurb} >
                        Includes weddings, and special events policies
                    </p>
                </div>
                <div className={styles.coverageWrapper}>
                    <img src={require('../../images/Home Icon.png')} alt="house icon" className={styles.coverageIcon} />
                    <h4 className={styles.coverageTitle} >Home Coverage</h4>
                    <p className={styles.coverageBlurb} >
                        Includes renters, eviction, and homeowners policies
                    </p>
                </div>
        </section>
        <section className={styles.signup}>
            <p className={styles.signupHeading}>Contact our partnerships team today.</p>
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
