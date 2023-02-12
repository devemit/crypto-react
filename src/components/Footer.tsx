const Footer = () => {
  return (
    <div className='grid grid-cols-2 md:flex items-center justify-between p-10 max-w-[1200px] mx-auto'>
      <h1 className='text-4xl font-extrabold'>
        De<span className='text-green-600'>Fi</span>
      </h1>
      <div>
        <ul className='cursor-pointer my-4'>
          <li className='font-bold text-xl my-4'>Support</li>
          <hr className='w-[70px]' />
          <li className='text-lg'>Contact Us</li>
          <li className='text-lg'>Chat</li>
          <li className='text-lg'>Help Center</li>
          <li className='text-lg'>FAQ</li>
        </ul>
      </div>
      <div>
        <ul className='cursor-pointer my-4'>
          <li className='font-bold text-xl my-4'>Company</li>
          <hr className='w-[70px]' />

          <li className='text-lg'>About</li>
          <li className='text-lg'>Infomation</li>
          <li className='text-lg'>Legal</li>
          <li className='text-lg'>ASD</li>
        </ul>
      </div>
      <div>
        <ul className='cursor-pointer my-4'>
          <li className='font-bold text-xl my-4'>Developers</li>
          <hr className='w-[70px]' />

          <li className='text-lg'>Cloud</li>
          <li className='text-lg'>Commerce</li>
          <li className='text-lg'>PRO</li>
          <li className='text-lg'>API</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
