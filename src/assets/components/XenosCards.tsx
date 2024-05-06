import React from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, doc, getDoc, where, query } from 'firebase/firestore';
import titanImage from '../images/titan.png'

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

const threats = {
  name: "Bile Titan",
  color: "from-purple-600 to-purple-400",
  race: "Terminids",
  photo: "titanImage"
}

const XenosCards = () => {

  return (

    XenosCardsModel(threats.name, threats.color, threats.race, threats.photo)
  )
}

function XenosCardsModel(name: string, color: string, race: string, photo: string) {

  return (
    <>
      <div className='grid m-4'>
        <div className={`max-h-72 max-w-64 rounded-lg bg-gradient-to-tl ${color} col-start-1 row-start-1`}/>
        <div className='max-h-72 max-w-64 rounded-lg border-2 border-zinc-800 bg-slate-50 text-center content-center z-10 -translate-x-1.5 -translate-y-1.5 hover:translate-x-0 hover:translate-y-0 duration-150 col-start-1 row-start-1'>
          <h2 className='font-mono font-bold uppercase text-zinc-800 text-4xl'>{name}</h2>
          <img src={titanImage} className='object-center w-full object-contain p-2'></img>
          <h3 className='text-zinc-800 font-mono font-semibold'>{race}</h3>
        </div>
      </div>
    </>
  )
}

export default XenosCards;