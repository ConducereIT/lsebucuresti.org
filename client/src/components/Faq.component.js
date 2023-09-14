import React, {useState} from 'react';
import {FaPlus} from 'react-icons/fa'
import { data1, data2 } from '../assets/config/configFAQ';

const FAQ = () => {

    const [selected, setSelected] = useState(null); //0
    const [selected2, setSelected2] = useState(null); //3

    const toggle = (i) => {
        if(selected === i)
            return setSelected(null);
        setSelected(i);
    }

    const toggle2 = (i2) => {
        if(selected2 === i2)
            return setSelected2(null);
        setSelected2(i2);
    }

    return(
        
    <div className='flex flex-col h-full justify-center items-center'>
        <div className='tracking-wider text-xs font-[600]'>AI NEVOIE DE AJUTOR?</div>
        <div className='tracking-wider font-[700] text-[1.2cm]'>FAQs</div>
        <div className='tracking-wider font-[600] text-[0.4cm]'>Sperăm să te ajutăm cu câteva răspunsuri la cele mai adresate întrebări legate de LSE și ETTI.</div>
        <div className='block mt-auto mb-auto flex '>
            <div className='flex flex-col w-[50%] justify-center items-end h-full'>
                {data1.map((item, i) => (
                    <div className='flex flex-col m-2 bg-gray-400 w-[70%] '>
                        <div 
                            className='flex justify-between p-2 cursor-pointer items-center'
                            onClick={() => toggle(i)}>
                            <div className='text-xs tracking-wider font-bold'>{item.question}</div>
                            <span className='text-xl'>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div 
                            className={selected === i ? "h-auto max-h-56 transition-all" : "max-h-0 overflow-hidden transition-all" }
                            >
                            <div className='text-xs p-2'>{item.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col w-[50%] mr-4'>
                {data2.map((item2, i2) => (
                    <div className='flex flex-col m-2 bg-gray-400 w-[70%]'>
                        <div 
                            className='flex justify-between p-2 cursor-pointer items-center'
                            onClick={() => toggle2(i2)}>
                            <div className='text-xs tracking-wider font-bold'>{item2.question}</div>
                            <span className='text-xl'>{selected2 === i2 ? '-' : '+'}</span>
                        </div>
                        <div 
                            className={selected2 === i2 ? "h-auto max-h-56 transition-all" : "max-h-0 overflow-hidden transition-all" }
                            >
                            <div className='text-xs p-2'>{item2.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FAQ;