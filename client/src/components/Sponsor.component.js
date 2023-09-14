import React from 'react';
import { Link } from 'react-router-dom';
import mitclima from '../assets/img/MitClima-2.png';
import etti from '../assets/img/ETTI.png';
import mitsubishi from '../assets/img/Mitsubishi.png';
import upb from '../assets/img/UPB.png';
import mayo from '../assets/img/4mayo.png';
import hipo from '../assets/img/hipo.png';

const Sponsor = () => {
    return(
        
        <div className='flex justify-center items-center flex-col'>
            <div className='text-3xl tracking-wider font-bold mb-3'>PARTENERI</div>
            <div className='flex flex-col items-center justify-around md:flex-row'>
                <Link className='h-40 w-40 flex items-center justify-center hover:scale-110 duration-300' to='/'><img src={mitclima}></img></Link>
                <Link className='h-40 w-40 flex items-center justify-center hover:scale-110 duration-300' to='/'><img src={etti}></img></Link>
                <Link className='h-40 w-40 flex items-center justify-center hover:scale-110 duration-300' to='/'><img src={mitsubishi}></img></Link>
                <Link className='h-40 w-40 flex items-center justify-center hover:scale-110 duration-300' to='/'><img src={upb}></img></Link>
                <Link className='h-40 w-40 flex items-center justify-center mr-6 hover:scale-110 duration-300' to='/'><img src={mayo}></img></Link>
                <Link className='h-40 w-40 flex items-center justify-center hover:scale-110 duration-300' to='/'><img src={hipo}></img></Link>
            </div>
        </div>
        
    )
}

export default Sponsor;