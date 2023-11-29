"use client";
import Image from 'next/image';
import './header.css';
import LandingPage from '../../assets/LandingPage.png';
import Title from "../../assets/Title.jpeg";
import { useEffect, useState } from 'react';

const Header = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 70) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <div className='landing_page__header' style={{position: isSticky ? 'sticky' : 'static', top: isSticky ? -100 : null, zIndex: isSticky?1:null}}>
      <div className='landing_page__header_title'>
        <div className='landing_page__header_title_text'>
          <p className='text-white text-[2rem]'>Domino's online ordering</p>
          <p className='text-[#47A0FF] text-[1.2rem]'>Yummy pizza delivered fast & fresh</p>
        </div>
        <div className='landing_page__header_title_btn'>
          <button>ORDER ONLINE NOW</button>
        </div>
        <Image src={Title} alt="Domino's Logo" width={350} height={350} className='w-full'/>
      </div>
      <div>
        <Image src={LandingPage} alt="Domino's Logo" width={950} height={950} />
      </div>
    </div>
  )
}

export default Header