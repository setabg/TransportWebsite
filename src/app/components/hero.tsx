import Image from 'next/image';

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
        <h1 className='text-[#01303A] font-lato font-semibold text-xl text-center w-[80%] 
        sm:text-4xl md:mt-[72px] md:leading-[108%] md:-tracking-[4px] lg:w-[50%] lg:text-5xl xl:text-6xl 2xl:text-7xl'>
            Гъвкави решения за сухопътен транспорт за всеки клиент
        </h1>

        <div className='mt-5 max-w-[90%} lg:mt-[60px]'>
            <div style={{borderRadius: '3%', overflow: 'hidden' }}>
            <Image src='/images/main.png' alt="main_image" width={969} height={690} priority style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    </section>
  )
}

export default Hero;
