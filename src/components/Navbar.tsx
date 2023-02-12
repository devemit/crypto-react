import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='flex justify-between items-center py-6 max-w-[1200px] mx-auto px-10'>
      {/*  logo div */}
      <div className='z-10 cursor-pointer'>
        <h1 className='text-4xl font-extrabold'>
          De<span className='text-green-600'>Fi</span>
        </h1>
      </div>
      {/*  List */}
      <ul className='md:flex hidden gap-6'>
        <li className='text-lg font-semibold hover:underline focus:underline cursor-pointer'>
          Home
        </li>
        <li className='text-lg font-semibold hover:underline focus:underline cursor-pointer'>
          Featured
        </li>
        <li className='text-lg font-semibold hover:underline focus:underline cursor-pointer'>
          Earn
        </li>
        <li className='text-lg font-semibold hover:underline focus:underline cursor-pointer'>
          Contact
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
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile section */}
      <div
        className={
          nav
            ? 'md:hidden fixed flex flex-col w-full h-[330px] left-0 rounded-b-3xl top-0 pt-20 px-6 bg-white uppercase ease-in-out duration-500'
            : 'fixed top-[-100%]'
        }
      >
        <ul className='cursor-pointer'>
          <li className='border-b-2 p-1 font-semibold hover:font-bold'>Home</li>
          <li className='border-b-2 p-1 font-semibold hover:font-bold'>Featured</li>
          <li className='border-b-2 p-1 font-semibold hover:font-bold'>Earn</li>
          <li className='border-b-2 p-1 font-semibold hover:font-bold'>Contact</li>
        </ul>
        <div className='py-4'>
          <button className='w-full bg-green-600 rounded-tr-2xl rounded-bl-2xl text-semibold text-white py-2'>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
