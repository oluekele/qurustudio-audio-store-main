import { GiCrossedAirFlows } from "react-icons/gi";
import { FaXTwitter, FaInstagram  } from "react-icons/fa6";
import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";
import { FiTwitch } from "react-icons/fi";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-[100%] bg-[#222222]">
      <div className="flex flex-col items-center justify-center max-w-[850px] w-[80%] md:[70%] mx-auto pt-[50px] pb-[30px] md:pb-[80px] text-slate-50 gap-4 ">
        <GiCrossedAirFlows size={20} className='text-[#ffa200]'/>
        <div className="flex items-center justify-center gap-4 md:py-5 py-2">
          <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
            <FaXTwitter size={24}/>
          </Link>
          <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
            <FaFacebookF size={24}/>
          </Link>
          <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
            <FaInstagram size={24}/>
          </Link>
          <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
            <FaYoutube size={24}/>
          </Link>
          <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
            <FaTiktok size={24}/>
          </Link>
          <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
            <FiTwitch size={24}/>
          </Link>
        </div>
        <div className='flex flex-wrap text-[14px] md:text-[18px] leading-[10px] items-center gap-6 justify-center'>
          <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
            ABOUT
          </Link>
          <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
            HELP
          </Link>
          <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
            BUSINESS INQUIRIES
          </Link>
          <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
            STYEGUIDE
          </Link>
          <Link href={"/"} className='transition hover:text-[#ffa200] font-bold'>
            CREATOR APP
          </Link>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:py-5 py-2">
          <div className="border-[1px] border-slate-100 rounded-[8px] px-4 py-2 flex gap-2 transition hover:border-[#ffa200] hover:text-[#ffa200]">
            <div className="flex items-end">
              <MdOutlineStackedBarChart size={30} className='text-[#ffa200] ]'/>
              <IoMdSettings size={15} className=''/>
            </div>
            <div className="">
              <p className="text-[10px] mb-[-5px]">Download the</p>
              <h2 className="">Creator App</h2>
            </div>
          </div>
          <div className="border-[1px] border-slate-100 rounded-[8px] px-4 py-2 flex gap-2 transition hover:border-[#ffa200] hover:text-[#ffa200]">
            <div className="flex items-end">
              <GiCrossedAirFlows size={20} className='text-[#ffa200]'/>
            </div>
            <div className="">
              <p className="text-[10px] mb-[-5px]">Download the</p>
              <h2 className="">Qurustudio App</h2>
            </div>
          </div>
          
        </div>
        <div className="flex items-center justify-center">
            <p className="text-center text-slate-300 text-[12px] md:text-[16px]">
            Qurustudio is an on-demand music streaming and audio discovery platform that allows artists and creators to upload limitless music and podcasts for listeners through its mobile apps and website.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] md:text-[20px] leading-[10px] md:py-5 py-2">
            <Link href={"/"} className='transition  font-bold'>
              Legal & DMCA
            </Link>
            <Link href={"/"} className='transition font-bold'>
              Privacy Policy
            </Link>
            <Link href={"/"} className='transition  font-bold'>
              Terms of Service 
            </Link>
            <Link href={"/"} className='transition  font-bold'>
              Report a Vulnerability
            </Link>
            <Link href={"/"} className='transition  font-bold'>
              Do not sell my info
            </Link>
            <Link href={"/"} className='transition  font-bold'>
              Your Privacy Rights
            </Link>
          </div>
          <div className="text-slate-300 flex items-center justify-center text-[14px] md:text-[18px]">
            <p className="text-center">&copy; {new Date().getFullYear()} Qurustudio - All Rights Reserved</p>
          </div>
      </div>
    </div>
  )
}

export default Footer