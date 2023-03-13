import React from "react";
import './errorPage.css';
import { NavLink } from "react-router-dom";
import error from '../../assets/caution-sign.png';

const ErrorPage = () =>{

    return(
        <main className="main">
        <section className="home">
            <div className="home__container container">
                <div className="home__data">
                    <span className="home__subtitle">Oops! Something went wrong...</span>
                    <h1 className="home__title">Error 404</h1>
                    <p className="home__description">
                        Hey Candidate, look like you've found a page that doesn't exits.
                    </p>
                    <NavLink to="/home"><button className="home__button">
                        Go Home
                    </button>
                    </NavLink>
                </div>

                <div className="home__img">
                    <img src={error} alt="" />
                    <div className="home__shadow"></div>
                </div>
            </div>

            <footer className="home__footer">
                <span><a href="https://github.com/Gaurav-Verma07/school-erp-system">School-Erp-System</a></span>
                <span>|</span>
                <span><a href="https://github.com/Gaurav-Verma07">Gaurav Verrma</a></span>
            </footer>
        </section>
    </main>
    )
};

export default ErrorPage;