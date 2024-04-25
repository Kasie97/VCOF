import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { ModeToggle } from './ModeToggle';

const Navbar = () => {
    const navigations = [
        { title: "Home", href: "/" },
        { title: "About us", href: "/about" },
        { title: "Programs", href: "/programs" },
        { title: "Media", href: "/media" },
        { title: "Contact us", href: "/contact" },
        { title: "Donate", href: "/donate" },
    ];
    return (
        <div className='w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50'>
            <div className='max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full'>
                <Link href={"/"}><Logo title="VCO Foundation" className="text-green-500" /></Link>
                <ModeToggle />
                <div className='hidden md:inline-flex items-center gap-6 text-orange-700 hover:text-black duration-300'>
                    {navigations.map((nav) => (
                        <Link key={nav.title} href={nav.href} className='text-sm uppercase font-semibold relative group overflow-hidden hover:underline'>
                            {nav.title}
                            <span className=' w-full h-[1px] bg-orange-100 absolute inline-block bottom-0 left-0 translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300' />
                        </Link>
                    ))}
                </div>
                <div className='md:hidden'>
                    <FiMenu className='text-4xl text-black' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
