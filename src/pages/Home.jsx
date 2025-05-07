import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../assets/components/NavBar';

class Home extends React.Component {

    componentDidMount() {
        document.title = "Margaux Fleureau - Etudiante et ambassadrice de l'ISCOM Paris";
    }

    render() {
        return (
            <div className="Home">
                <section className="Header">
                    <NavBar home background="bg-white" />

                    <div className="hero">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-lg-5 col-xxl-4">
                                    <div className="avatar">
                                        <img src={process.env.PUBLIC_URL + "/images/margaux.jpeg"} alt="Margaux Fleureau" className="profile-picture" />
                                        <img src={process.env.PUBLIC_URL + "/images/margaux.jpeg"} alt="Margaux Fleureau" className="profile-picture-hover" />
                                    </div>
                                    <h1>{new Date().getHours() < 18 ? "Bonjour" : "Bonsoir"}, je suis Margaux Fleureau <div className="tooltipHint">👋<span className="tooltiptext"> Enchantée ! </span></div></h1>


                                    <div className="diplomas d-lg-flex d-none">

                                        <div className="diploma-badge">
                                            <div className="tooltiptext">Programme Grande Ecole</div>
                                            <div className="content">
                                                <img src={process.env.PUBLIC_URL + "/images/iscom.jpeg"} alt="Logo de l'ISCOM" />
                                                ISCOM, Bachelor en communication <i className="far fa-hourglass iconTooltip" />
                                            </div>
                                        </div>
                                        <div className="diploma-badge">
                                            <div className="tooltiptext">Mention Assez Bien</div>
                                            <div className="content">
                                                <img src={process.env.PUBLIC_URL + "/images/monod.jpeg"} alt="Baccalauréat" />
                                                Baccaulauréat
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-xs-12 col-lg-7 col-xxl-8 ps-lg-5">
                                    <div className="presentation">
                                        <h2>Etudiante et ambassadrice de l'ISCOM</h2>
                                        <span className="description">Passionnée de communication, je suis actuellement étudiante et ambassadrice à l'ISCOM Paris au programme Grande Ecole.</span>

                                        <div className="cta-section">
                                            <NavLink className="btn btn-black mb-2" to="/contact">Me contacter</NavLink>
                                            <NavLink className="btn btn-outline-black" to="/experience">Découvrir mon expérience</NavLink>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );

    }

}

export default Home;