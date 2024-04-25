import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Link from 'next/link';
import { BsFacebook, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (  
     <Container className=' p-10 bg-black text-grey-100 flex items-center justify-between mx-auto'>
        <Logo title='VCO Foundation' className='text-orange-600' />
        <div className='text-gray-300 hidden md:inline-flex items-center gap-7'>
               <Link href='https://web.facebook.com/VCOFoundation' target='blank'>
                   <BsFacebook className='text-2xl hover:text-orange-600 duration-200' /> 
                </Link>
                <Link href='https://twitter.com/valentineozigbo' target='blank'>
                   <BsTwitter className='text-2xl hover:text-orange-600 duration-200' /> 
                </Link>
               
               {/* <BsTwitter /> */}

        </div>
        <p className='text-sm text-gray-300'> © All rights reserved{" "}
          <Link 
            href={"VCOFoundation.org"}
            target='blank'
            className='hover:text-white hover:underline font-semibold duration-200'>@reactjsBD
          </Link>
        </p>

    
    </Container>
  );
};

export default Footer