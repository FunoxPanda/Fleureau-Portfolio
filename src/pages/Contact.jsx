import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../assets/components/NavBar';

class Contact extends React.Component {
    componentDidMount() {
        document.title = "Me contacter - Margaux Fleureau";
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
                                    <h1>Entrons en contact {new Date().getHours() < 18 ? "aujourd'hui" : "ce soir"} ! {new Date().getHours() >= 18 ? <div className="tooltipHint">🤗<span className="tooltiptext">J'ai déjà hâte de vous rencontrer !</span></div> : null}</h1>

                                    <p className="mt-3 d-none d-lg-flex">
                                        Envie de me contacter, un stage ou une alternance ? N'hésitez pas à me contacter !<br />
                                        Mon téléphone : 06 98 92 40 65
                                    </p>

                                </div>

                                <div className="col-xs-12 col-lg-7 col-xxl-8 ps-lg-5">
                                    <div className="presentation align-items-top">
                                        <h2>Choisissez un endroit où me contacter</h2>

                                        <div className="cta-section mb-3">
                                            <Link to="https://www.linkedin.com/in/margaux-fleureau-480855267/" target="_blank" className="btn btn-black mb-2">Mon LinkedIn</Link>
                                            <Link to="mailto:margaux.fleureau@iscom.org" className="btn btn-black mb-2">M'envoyer un e-mail</Link>
                                        </div>

                                        <span className="text-danger">

                                        </span>
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

export default Contact;