import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {

  const Links = [
    { name: "Automatons", link: "/automatons" },
    { name: "Terminides", link: "/terminides" },
  ]

  return (
    <>
      <div className='text-center text-yellow-400 w-3/4 mx-auto mt-10'>
        <h1 className=" pb-5 text-4xl md:text-7xl font-bold">Pour la Super Terre !</h1>
        <h3 className=' pb-5 text-1xl md:text-3xl'>Retrouvez ici tout ce qu'il faut savoir pour éradiquer au mieux la menace qui pèse sur la Super Terre.</h3>
      </div>
    </>
  );
};

export default Homepage;