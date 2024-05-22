import React from 'react';
import { useState } from 'react';
import data from '../../../data.json'
import XenosCards from '../XenosCards';

const Main = () => {

  const [threat, setThreat] = useState(data)

  return (
    <>
      <div className='w-10/12 mx-auto z-10'>
        <div className='flex flex-wrap justify-between gap-10'>
          <XenosCards data={data} />
        </div>
      </div>
    </>
  );
};

export default Main;