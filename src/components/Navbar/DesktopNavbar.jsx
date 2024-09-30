// DesktopNavbar.jsx
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import imageLight from '../../assets/images/logo-white.png';
import { motion, AnimatePresence} from 'framer-motion';
import imageDark from '../../assets/images/logo-red.png';
import "@fontsource/poppins";

export default function DesktopNavbar({handleLinkClick, navigation}) {    
    const [darkNav, setDarkNav] = useState(false);
    const [image, setImage] = useState(imageLight);

    useEffect(() => {
        const handleScroll = () => {
            setDarkNav(window.scrollY > 80);
            setImage(window.scrollY > 80 ? imageDark : imageLight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='relative hidden md:block'>
    <nav className={`absolute top-0 w-full bg-transparent border-b border-white border-opacity-20 z-10`}>
    <div className='flex items-center justify-between py-5 md:py-[25px] lg:py-[30px] px-4 md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto'>
    <Link to='/#home' onClick={() => handleLinkClick(navigation[0])}>
      <img src={image}/>
    </Link>
    <div className="flex">
        {navigation.map((item,id) => (
          <Link
          key={id}
          to={item.to}
          onClick={() => handleLinkClick(item)}
          aria-current={item.current ? 'page' : undefined}
          className= {` ${item.current ? 'text-[#f25454]': 'text-white'} hover:text-[#f25454] px-[15px] text-[13px] font-semibold font-["poppins"] rounded-md flex flex-col tracking-[0.5px] transition-all duration-150 ease-in-out`}>
            {item.name}
          </Link>                      
        ))}
        <div className='hidden items-center text-sm gap-6 ml-10 text-white lg:flex'>
            <Link><FontAwesomeIcon className='hover:text-[#f25454] transition-all duration-150 ease-in-out' icon={faTwitter}/></Link>
            <Link><FontAwesomeIcon className='hover:text-[#f25454] transition-all duration-150 ease-in-out' icon={faFacebookF}/></Link>
            <Link><FontAwesomeIcon className='hover:text-[#f25454] transition-all duration-150 ease-in-out' icon={faInstagram}/></Link>
        </div>
    </div>
    </div>
    </nav>
    <AnimatePresence>
    {darkNav && (
        <motion.nav
          initial={{ height: 0 }} // Start above the view
          animate={{ height: 'auto' }} // Slide down into view
          exit={{height:0}}
          transition={{ type: 'tween', duration: 0.5 }} // Smooth slide down
          className={`fixed top-0 w-full bg-white border-b shadow-lg border-white border-opacity-20 z-20 overflow-hidden`}
        >

    <div className='flex items-center justify-between py-5 px-4 md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto'>
    <Link to='/#home' onClick={() => handleLinkClick(navigation[0])}>
      <img src={image}/>
    </Link>
    <div className="flex">
        {navigation.map((item,id) => (
          <Link
          key={id}
          to={item.to}
          onClick={() => handleLinkClick(item)}
          aria-current={item.current ? 'page' : undefined}
          className= {` ${item.current ? 'text-[#f25454]': 'text-black'} hover:text-[#f25454] px-[15px] text-[13px] font-semibold font-["poppins"] rounded-md flex flex-col tracking-[0.5px] transition-all duration-150 ease-in-out`}>
            {item.name}
          </Link>                      
        ))}
        <div className='hidden items-center text-sm gap-6 ml-10 text-black lg:flex'>
            <Link><FontAwesomeIcon className='hover:text-[#f25454] transition-all duration-150 ease-in-out' icon={faTwitter}/></Link>
            <Link><FontAwesomeIcon className='hover:text-[#f25454] transition-all duration-150 ease-in-out' icon={faFacebookF}/></Link>
            <Link><FontAwesomeIcon className='hover:text-[#f25454] transition-all duration-150 ease-in-out' icon={faInstagram}/></Link>
        </div>
    </div>
    </div>
    </motion.nav>)}
    </AnimatePresence>
    </div>
    );
}
