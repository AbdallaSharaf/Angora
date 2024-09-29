import { Bars3Icon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import imageLight from '../../assets/images/logo-white.png'
import imageDark from '../../assets/images/logo-dark.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "@fontsource/poppins";
import { motion, AnimatePresence} from 'framer-motion';

export default function Navbar() {
    const [navigation, setNavigation] = useState([
        { name: 'Home', to: '/#home', current: true },
        { name: 'About', to: '/#about', current: false },
        { name: 'Team', to: '/#team', current: false },
        { name: 'Projects', to: '/#projects', current: false },
        { name: 'Services', to: '/#services', current: false },
        { name: 'Blog', to: '/#blog', current: false },
        { name: 'Contact', to: '/#contact', current: false }
      ]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkNav, setDarkNav] = useState(false)    
  const [image, setImage] = useState(imageLight)

  const handleLinkClick = (item) => {
    const targetElement = document.getElementById(item.to.substring(2));
    if (targetElement !== null){
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setNavigation(prevNavigation =>
      prevNavigation.map(navItem => ({
        ...navItem,
        current: navItem === item,
      }))
    );
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if(scrollY > 80){
          setDarkNav(true); // Change `80` to the height where the navbar should shrink
          setImage(imageDark)
      }
      else {
        setDarkNav(false)
        setImage(imageLight)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.to.substring(2));
    const sectionElements = sectionIds.map((id) => document.getElementById(id));

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      let activeItem = entries[0];

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeItem = navigation.find(navItem => navItem.to.substring(2) === entry.target.id);
        }
      });

      setNavigation((prevNavigation) =>
        prevNavigation.map((navItem) => ({
          ...navItem,
          current: navItem === activeItem,
        }))
      );
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      sectionElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [navigation]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // sm breakpoint
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <div className='relative'>
    <nav className={`absolute top-0 w-full bg-transparent border-b border-white border-opacity-20 z-10`}>
    <div className='flex items-center justify-between py-5 md:py-[25px] lg:py-[30px] px-4 md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto'>
    <Link to='/#home' onClick={() => handleLinkClick(navigation[0])}>
      <img src={image}/>
    </Link>
    <div className=" block md:hidden">
      {/* Mobile menu Link */}
      <Link
        className="z-20"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Bars3Icon aria-hidden="true" className={`h-[25px] w-[25px] hover:text-[#f25454] transition-all duration-150 ease-in-out ${mobileMenuOpen ? 'text-[#f25454]' : 'text-white'}`} />
      </Link>
    </div>
    <div className="hidden md:flex">
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
    {/* Mobile menu */}

    <div className={`${mobileMenuOpen ? 'max-h-screen ' : 'max-h-0'} overflow-hidden bg-white w-full transition-all duration-700 ease-in-out`}>
    <div className='py-2'>
    {navigation.map((item,id) => (
    <Link
      key={id}
      to={item.to}
      onClick={() => handleLinkClick(item)}
      aria-current={item.current ? 'page' : undefined}
      className={`${item.current ? 'text-[#f25454]': 'text-black'} py-2 hover:text-[#f25454] px-[15px] text-[13px] font-semibold font-["poppins"] rounded-md flex flex-col tracking-[0.5px] transition-all duration-150 ease-in-out`}
        >
      {item.name}
    </Link>
    ))}
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
    <div className=" block md:hidden">
      {/* Mobile menu Link */}
      <Link
        className="z-20"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Bars3Icon aria-hidden="true" className={`h-[25px] w-[25px] text-black hover:text-[#f25454] transition-all duration-150 ease-in-out ${mobileMenuOpen ? 'text-[#f25454]' : 'text-black'}`} />
      </Link>
    </div>
    <div className="hidden md:flex">
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
    {/* Mobile menu */}

    <div className={`${mobileMenuOpen ? 'max-h-screen ' : 'max-h-0'} overflow-hidden bg-white w-full transition-all duration-700 ease-in-out`}>
    <div className='py-2'>
      {navigation.map((item,id) => (
        <Link
          key={id}
          to={item.to}
          onClick={() => handleLinkClick(item)}
          aria-current={item.current ? 'page' : undefined}
          className={` ${item.current ? 'text-[#f25454]': 'text-black'} py-2 hover:text-[#f25454] px-[15px] text-[13px] font-semibold font-["poppins"] rounded-md flex flex-col tracking-[0.5px] transition-all duration-150 ease-in-out`}
            >
          {item.name}
        </Link>
      ))}
      </div>
    </div>
    </motion.nav>)}
    </AnimatePresence>
    </div>
}