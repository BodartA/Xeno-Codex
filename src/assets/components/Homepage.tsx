import React from 'react';

const Homepage = () => {

    const Xenos = [
        {race: "Automatons", link: "/" },
        { race: "Terminides", link: "/" },
    ]

    return (
        <div className=' text-yellow-400 text-center min-h-screen content-center font-mono pt-10'>
            <div>
                <h1 className=" font-bold text-8xl">Pour la Super Terre !</h1>
                <h3 className=' text-4xl'>Retrouvez ici tout ce qu'il faut savoir pour éradiquer au mieux la menace qui pèse sur la Super Terre.</h3>
            </div>
        </div>
    );
};

export default Homepage;