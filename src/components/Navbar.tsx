import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  // bad choice
  const closeNav = () => {
    setNav(false);
  };
  return (
    <div
      id='home'
      className='flex justify-between items-center py-6 max-w-[1200px] mx-auto px-10'
    >
      {/*  logo div */}
      <div className='z-10 cursor-pointer'>
        <h1 className='text-4xl font-extrabold'>
          De<span className='text-green-600'>Fi</span>
        </h1>
      </div>
      {/*  List */}
      <ul className='md:flex hidden gap-6'>
        <li className='text-lg font-semibold hover:underline focus:underline cursor-pointer'>
          <Link to='/' spy={true} smooth={true} offset={50} duration={800}>
            Home
          </Link>
        </li>
        <li className='text-lg font-semibold hover:underline focus:underline cursor-pointer'>
          <Link to='featured' spy={true} smooth={true} offset={-30} duration={800}>
            Featured
          </Link>
        </li>
        <li className='text-lg font-semibold hover:underline focus:underline cursor-pointer'>
          <Link to='earn' spy={true} smooth={true} offset={50} duration={800}>
            Earn
          </Link>
        </li>
        <li className='text-lg font-semibold hover:underline focus:underline cursor-pointer'>
          <Link to='footer' spy={true} smooth={true} offset={50} duration={800}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Buttons div */}
      <div className='md:flex hidden gap-4'>
        <h1 className='bg-green-600 text-white text-lg px-6 py-1.5 rounded-tr-2xl rounded-bl-2xl cursor-pointer font-semibold'>
          Connect Wallet
        </h1>
      </div>
      {/* Hamuberger Menu (open/close)*/}
      <div className='md:hidden block z-10 cursor-pointer' onClick={handleNav}>
        {nav ? <AiOutlineClose size={23} /> : <AiOutlineMenu size={23} />}
      </div>
      {/* Mobile section */}
      <ul
        className={
          nav
            ? 'md:hidden fixed flex flex-col w-full h-[330px] left-0 rounded-b-3xl top-0 pt-20 px-10 bg-white uppercase ease-in-out duration-500'
            : 'fixed top-[-100%]'
        }
      >
        <Link
          onClick={closeNav}
          to='/'
          spy={true}
          smooth={true}
          offset={50}
          duration={800}
          className='border-b-2 p-1 font-semibold hover:font-bold'
        >
          Home
        </Link>
        <Link
          onClick={closeNav}
          to='featured'
          spy={true}
          smooth={true}
          offset={50}
          duration={800}
          className='border-b-2 p-1 font-semibold hover:font-bold'
        >
          Featured
        </Link>
        <Link
          onClick={closeNav}
          to='earn'
          spy={true}
          smooth={true}
          offset={50}
          duration={800}
          className='border-b-2 p-1 font-semibold hover:font-bold'
        >
          Earn
        </Link>
        <Link
          onClick={closeNav}
          to='footer'
          spy={true}
          smooth={true}
          offset={50}
          duration={800}
          className='border-b-2 p-1 font-semibold hover:font-bold'
        >
          Contact
        </Link>
        <div className='py-6'>
          <button className='w-full bg-green-600 rounded-tr-2xl rounded-bl-2xl text-semibold text-white py-2'>
            Connect Wallet
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
