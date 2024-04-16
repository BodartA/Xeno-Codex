import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {

    const Links = [
        { name: "Automatons", link: "/automatons" },
        { name: "Terminides", link: "/terminides" },
    ]

    return (
        <>
            <div className=' text-yellow-400 text-center min-h-screen content-center font-mono pt-10'>
                <h1 className=" font-bold text-8xl">Pour la Super Terre !</h1>
                <h3 className=' text-4xl'>Retrouvez ici tout ce qu'il faut savoir pour éradiquer au mieux la menace qui pèse sur la Super Terre.</h3>
            </div>
        </>
    );
};

export default Homepage;