import heroimg from '../assets/hero-img.png';

const Hero = () => {
  return (
    <div className='px-10 max-w-[1200px] mx-auto py-16 md:grid grid-cols-2 '>
      <div id='left'>
        <h2 className='text-gray-900 text-lg py-1 font-semibold'>
          Buy & Sell Crypto 24/7 using your retirement account.
        </h2>
        <h1 className='text-5xl md:text-4xl lg:text-7xl font-bold text-black max-w-sm'>
          Invest in cryptocurrency with your IRA
        </h1>
        <h2 className='text-gray-900 text-lg py-1 font-semibold'>
          Buy,sell and store hundreds of cryptocurrencies
        </h2>
        <div className='flex my-2'>
          <input
            className='rounded-tr-2xl rounded-bl-2xl outline-none py-1.5 px-4 bg-gray-100'
            placeholder='Enter Email'
            type='email'
            name='email'
            id='email'
          />
          <div className='mx-2'>
            <button className='bg-green-600 text-white px-8 py-1.5 rounded-tr-2xl rounded-bl-2xl cursor-pointer font-semibold'>
              Learn
            </button>
          </div>
        </div>
      </div>
      <div id='right' className='py-6'>
        <img src={heroimg} alt='hero_img' className='object-cover' />
      </div>
    </div>
  );
};

export default Hero;
