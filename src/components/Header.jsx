import { useState } from 'react'
import logo from '../assets/images/logo.png'

const links = [
    { name: "Cuidador", link: "#porque" },
    { name: "Sobre", link: "#sobre" },
    { name: "Serviços", link: "#servicos" }
]

export default function Header() {

    const [open,setOpen]=useState(false);

    return (
        <div>
            <div className='bg-blue-200 text-sm'>
                <div className='flex py-1 justify-between md:max-w-screen-lg m-auto'>
                    <div className='flex space-x-4'>
                        <div className="flex cursor-default items-center text-blue-600">
                            <img src="https://img.icons8.com/ios-glyphs/30/2590EB/phone--v1.png" />
                            (67) 9-9999-9999
                        </div>
                        <div className="flex cursor-default items-center text-blue-600">
                            <img src="https://img.icons8.com/ios-glyphs/30/2590EB/secured-letter--v1.png" />
                            exemplo@gmail.com
                        </div>
                    </div>
                    <div>
                        <a href='https://www.facebook.com' target="_blank">
                            <img src="https://img.icons8.com/color/30/000000/facebook.png" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='md:flex justify-between py-4 items-center m-auto md:max-w-screen-lg'>
                <div>
                    <a href="#banner">
                        <img src={logo} alt="logo pro banho" width={100} />
                    </a>
                </div>

                <div onClick={() => setOpen(!open)} 
                className="absolute md:hidden right-4 top-16 cursor-pointer text-gray-800 text-5xl">
                    <i className={open ? 'bi bi-x' : 'bi bi-filter-left'}></i>
                </div>

                <div>
                    <ul className={`md:flex space-x-0 md:space-x-8 md:items-center absolute md:static
                    bg-slate-50 md:z-auto z.[-1] left-0 w-full md:w-auto transition-all duration-500
                    ease-in p-8 md:p-0 ${open ? 'top-35' : 'top-[-500px]'}`}>
                        {links.map((link, i) =>
                            <li className='my-7 md:my-0 text-xl md:text-lg' key={i}>
                                <a href={link.link}>
                                    {link.name}
                                </a>
                            </li>
                        )}
                        <li>
                            <a href="#servicos" className='text-xl font-semibold bg-blue-400 px-4 py-2 rounded-sm text-white'>
                                Fale conosco
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}