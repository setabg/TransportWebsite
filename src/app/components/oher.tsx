import React from 'react';

const Other = () => {
  return (
    <div className="flex justify-center items-center mb-[80px]">
      <div className="flex flex-col justify-center w-full max-w-[90%] h-auto mt-[48px] lg:max-w-[1296px] lg:h-[481px]">
        <h1 className="text-[24px] text-start text-[#01303A] font-bold md:text-[36px] mb-[32px]">
            Други услуги
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="mb-[16px]">
            <img src="/images/adr.png" alt="adr" className="w-full h-auto max-w-full cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out"/>
            <p className="text-[18px] text-[#01303A] hover:text-black font-semibold mt-4 leading-[140%] tracking-[-0.5px] 
             cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out md:text-[24px] text-center">
            Опасни товари
            </p>
          </article>
          <article className="mb-[16px]">
            <img src="/images/frigo.png" alt="frigo" className="w-full h-auto max-w-full cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out"/>
           <p className="text-[18px] text-[#01303A] hover:text-black font-semibold mt-4 leading-[140%] tracking-[-0.5px] 
             cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out md:text-[24px] text-center">
                Хладилен транспорт
            </p>
          </article>
          <article className="mb-[16px]">
            <img src="/images/heavy_duty.png" alt="heavy_duty" className="w-full h-auto max-w-full cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out"/>
            <p className="text-[18px] text-[#01303A] hover:text-black font-semibold mt-4 leading-[140%] tracking-[-0.5px] 
             cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out md:text-[24px] text-center">
                Извънгабаритни товари
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Other;