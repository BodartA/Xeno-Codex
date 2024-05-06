import React from 'react';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, doc, getDoc, query } from 'firebase/firestore';
import XenosCards from '../XenosCards';

const app = {
  apiKey: "AIzaSyDsRTs6J_ibHCIYLYFahCRi1QxzH1frPzo",
  authDomain: "xeno-codex.firebaseapp.com",
  projectId: "xeno-codex",
  storageBucket: "xeno-codex.appspot.com",
  messagingSenderId: "761825618027",
  appId: "1:761825618027:web:2c662cec99710a6588292e",
  measurementId: "G-WQT0M73MTD"
}

const firebaseApp = initializeApp(app)
const db = getFirestore(firebaseApp)

let datas = []

const allThreatsDatas = await getDocs(collection(db, "threats"));
allThreatsDatas.forEach((doc) => {
  datas = [doc.id, doc.data()]
  console.log(datas)
})

const Main = () => {

  return (
    <>
      <div className='w-10/12 mx-auto z-10'>
        <div className='grid grid-cols-2 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-6 2xl:grid-cols-6 2xl:gap-8'>
          <XenosCards datas={datas} />
        </div>
      </div>
    </>
  );
};

export default Main;