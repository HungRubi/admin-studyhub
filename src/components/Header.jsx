import {CircleButton } from './index'
import icon from '../util/icon'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const { IoSunnyOutline, FaRegBell, FaArrowRightFromBracket, BsPerson, IoSettingsOutline, IoMenu} = icon;

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
    
    const [openMenu, setOpenMenu] = useState(null);
    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (!event.target.closest(".btn_togglo, .menu_togglo")) {
            setOpenMenu(null);
          }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);

    return (
        <header className="w-full flex justify-between items-center h-full px-2 sm:px-4">
            <div className="w-auto sm:w-60 flex items-center gap-2 sm:gap-0">
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    <IoMenu className="text-2xl text-gray-600" />
                </button>
                <NavLink to={"/"} className="flex items-center min-h-10">
                        <img 
                            src={"/images/logo.png"}
                            alt={"Logo"}
                            className='w-12.5 sm:w-15 md:w-17.5 object-contain flex-none'
                        />
                        <h1 className='ml-1.5 text-[#e5780b] text-2xl font-bold'>
                            StudyHub
                        </h1>
                </NavLink>
            </div>
            <div className="mr-2.5 sm:mr-5 md:mr-7.5 flex items-center gap-2 sm:gap-3 md:gap-4">
                <CircleButton className="bg-[rgba(255,204,133,0.24)]! hidden sm:flex">
                    <IoSunnyOutline className='text-[16px] sm:text-[18px] md:text-[20px] text-[#e5780b]'/>
                </CircleButton>
                <CircleButton className="hidden sm:flex">
                    <FaRegBell className='text-[16px] sm:text-[18px] md:text-[20px] text-gray-500'/>
                </CircleButton>
                <CircleButton className={"relative btn_togglo"} onClick={() => toggleMenu("account")}>
                    <img
                        src={"https://zingmp3.vmu.com.vn/img/default.png"}
                        alt="avatar"
                        className='rounded-[50%] w-full object-cover'
                    />
                    {openMenu === "account" && (
                        <div className="absolute bg-white w-55 sm:w-62.5 top-[140%] right-0 rounded-[3px] menu pb-2.5 menu_togglo z-50 shadow-lg">
                            <div className="flex flex-col items-center pt-3.75 justify-center">
                                <CircleButton className="w-10 h-10">
                                    <img 
                                        src={"https://zingmp3.vmu.com.vn/img/default.png"}
                                        alt="avatar"
                                        className='rounded-[50%] w-full object-cover'
                                    />
                                </CircleButton>
                                <h5 className="text-[13px] sm:text-[14px] md:text-[15px] mt-2.5 px-2 text-center">
                                    Huy Hùng
                                </h5>
                                <hr className='h-px border-t border-t-[#cbd0dd] w-full my-3'/>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-2.5 pb-2.5">
                                <ul className='w-full'>
                                    <li className="px-3 sm:px-4 py-2 flex gap-2 sm:gap-2.5 items-center hover_bg_li">
                                        <BsPerson className='text-base sm:text-lg text-gray-600 shrink-0'/>
                                        <NavLink className="capitalize text-[13px] sm:text-[14px] md:text-[15px] text-gray-600"
                                        to={"/account/info"}>
                                            tài khoản
                                        </NavLink>
                                    </li>
                                    <li className="px-3 sm:px-4 py-2 hidden sm:flex gap-2 sm:gap-2.5 items-center hover_bg_li">
                                        <FaRegBell className='text-sm sm:text-base text-gray-500 shrink-0'/>
                                        <NavLink className="capitalize text-[13px] sm:text-[14px] md:text-[15px] text-gray-600"
                                        to={"/account/order"}>
                                            thông báo
                                        </NavLink>
                                    </li>
                                    <li className="px-3 sm:px-4 py-2 hidden sm:flex gap-2 sm:gap-2.5 items-center hover_bg_li">
                                        <IoSettingsOutline className='text-base sm:text-lg text-gray-600 shrink-0'/>
                                        <NavLink className="capitalize text-[13px] sm:text-[14px] md:text-[15px] text-gray-600"
                                        to={"/account/voucher"}>
                                            setting
                                        </NavLink>
                                    </li>
                                </ul>
                                <div className="px-3 sm:px-4 w-full">
                                    <button 
                                    className={`flex items-center justify-center gap-2 sm:gap-2.5 text-sm sm:text-base cursor-pointer bg-[rgba(121,119,119,0.1215686275)] w-full py-1.5 rounded-lg text-black! border border-[#cbd0dd]`}>
                                        <FaArrowRightFromBracket className='text-sm sm:text-base'/>
                                        <span className="text-[12px] sm:text-sm md:text-base">Sign out</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </CircleButton>
            </div>
        </header>   
    );
};

export default Header;