import { useState } from 'react'
import logo from '../assets/images/logo.png'


function Header() {

    const links = [
        { name: "Home", link: "#banner" },
        { name: "Sobre", link: "#sobre" },
        { name: "Serviços", link: "#servicos" }
    ]
    
    const [open,setOpen]=useState(false);

    return (
        <div>
            <div className='bg-cyan-800 text-sm'>
                <div className='flex py-1 justify-between md:max-w-screen-lg m-auto text-xs md:text-sm text-white'>
                    <div className='flex space-x-1 md:space-x-4'>
                        <div className="flex cursor-default items-center space-x-0 md:space-x-1">
                        <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/whatsapp.png"/>
                            <span>
                                (67) 9-9656-7787
                            </span>
                        </div>
                        <div className="flex cursor-default items-center space-x-0 md:space-x-1">
                            <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/secured-letter--v1.png" />
                            <span>
                               probanhohomecare@outlook.com
                            </span>
                        </div>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/profile.php?id=100070024864408' target="_blank">
                        <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/facebook-new.png"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className='md:flex justify-between py-2 pl-4 md:pl-0 items-center m-auto md:max-w-screen-lg'>
                <div>
                    <img src={logo} alt="logo pro banho" width={120} />
                </div>

                <div onClick={() => setOpen(!open)} 
                className="absolute md:hidden right-4 top-16 cursor-pointer text-gray-800 text-5xl">
                    <i className={open ? 'bi bi-x' : 'bi bi-list'}></i>
                </div>

                <div>
                    <ul className={`md:flex space-x-0 md:space-x-8 md:items-center absolute md:static
                    bg-[#F8F8FF] md:z-auto z.[-1] left-0 w-full md:w-auto transition-all duration-300
                    ease-in p-8 md:p-0 ${open ? 'top-35' : 'top-[-495px]'}`}>
                        {links.map((link, i) =>
                            <li className='my-7 font-semibold md:my-0 text-xl md:text-lg hover:border-b-2 border-cyan-800' key={i}>
                                <a href={link.link}>
                                    {link.name}
                                </a>
                            </li>
                        )}
                        <li>
                            <a href="#contato" className='text-xl bg-cyan-800 hover:bg-cyan-600 hover:duration-500 px-4 py-2 rounded-sm text-white'>
                                Fale conosco
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header