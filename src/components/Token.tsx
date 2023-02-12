import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';

const Token = ({ data }: { data: any }) => {
  return (
    <div className='py-10 md:grid grid-cols-3'>
      {data?.map((item: any) => (
        <div
          key={item?.id}
          className='py-4 m-2 shadow-2xl bg-white flex flex-col items-center justify-center rounded-xl'
        >
          <div className=''>
            <img className='w-16 h-16' src={item.image} alt={item.name} />
          </div>
          <h1 className='font-bold text-lg'>{item.name}</h1>
          <span className='font-semibold text-lg'>$ {item.current_price}</span>
          <div className='flex items-center justify-center'>
            <span className='flex my-1 items-center justify-center text-base'>
              {item.price_change_percentage_24h.toFixed(3)}
              {item.price_change_percentage_24h > 0 ? (
                <FiArrowUpRight className='text-green-600 mx-1' size={20} />
              ) : (
                <FiArrowDown className='text-red-600 mx-1' size={20} />
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Token;
