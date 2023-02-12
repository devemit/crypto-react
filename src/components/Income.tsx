import earn from '../assets/trade.png';

const Income = () => {
  return (
    <div className='px-10 max-w-[1200px] mx-auto md:py-24 md:grid grid-cols-2'>
      <div id='left'>
        <img src={earn} alt='earn-logo' className='object-cover' />
      </div>
      <div id='right' className='md:py-16'>
        <h1 className='text-black font-bold text-5xl md:text-6xl text-left py-8 max-w-md'>
          Earn passive income with crypto.
        </h1>
        <p className='text-lg text-gray-900 max-w-lg py-4'>
          Earn up to 12% annual rewards on 30+ digital assets.Simply hold your assets in
          the app to automatically earn rewards at the end of each month with no lockups
          and no limits.
        </p>
        <div className='flex py-4'>
          <input
            className='rounded-tr-2xl rounded-bl-2xl outline-none py-1.5 px-4 bg-gray-100'
            placeholder='Enter Email'
            type='email'
            name='email'
            id='email'
          />
          <div className='mx-2'>
            <button className='bg-green-600 text-white text-lg px-8 py-1.5 rounded-tr-2xl rounded-bl-2xl cursor-pointer font-semibold'>
              Learn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
