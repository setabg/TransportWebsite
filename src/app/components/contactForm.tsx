"use client";

import React, { useState } from "react";

const ContactForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        setPhoneNumber('');
    }

    function handlePhoneNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
        const input = e.target.value.replace(/\D/g, ''); // Изтрива всички символи, които не са цифри
        const formattedInput = input.replace(/^(\d{2})(\d{3})(\d{7})$/, '$1-$2-$3'); // Форматира входа като "00-000-0000000"

        setPhoneNumber(formattedInput);
    }

    return (
        <div className="bg-[#394649] flex items-center justify-center w-full h-[602px] mt-10 mb-10 lg:h-[602px] lg:max-w-[1600px]">
            <div className="flex flex-col justify-center items-center w-full max-w-[90%] md:w-[80%] lg:max-w-[728px] lg:h-[368px]">
                
                <h1 className="text-[24px] text-white text-center font-bold leading-[150%] tracking-[-2px] mb-6 
                    md:text-[36px] md:leading-[120%] md:mb-10 lg:text-[72px] lg:w-full lg:max-w-[728px] lg:h-[156px]">
                    Готови ли сте да работим заедно?
                </h1>
                
                <p className="text-[16px] text-white text-center leading-[170%] w-full mb-6 
                    md:text-[20px] md:mb-10 lg:text-[20px] lg:w-full lg:max-w-[728px] lg:h-[68px]">
                    Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси
                </p>
                
                <div className="flex relative mt-4 items-center w-full lg:w-full lg:max-w-[428px] lg:h-[70px]">
                    <div className="flex items-center justify-between bg-white w-full h-[56px] rounded-md">
                        <div className="flex items-center justify-center w-5 h-">
                            <img src="/icons/mail.png" alt="mail" className="text-[#7F8C89] text-center pl-15"/>
                        </div>
                        <div className="w-full">
                            <input
                                type="mobile"
                                className="text-black outline-none p-4 w-full text-sm md:text-base"
                                placeholder="Мобилен телефон"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>
                    
                    <button className="bg-[#E7F874] text-[#083C2F] text-[16px] absolute flex items-center justify-center top-0 right-0 w-[30%] h-[56px] rounded-md lg:w-[137px]" onClick={handleSubmit}>
                        Изпрати
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ContactForm;