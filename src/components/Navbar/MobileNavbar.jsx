import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function MobileNavbar({ navigation, handleLinkClick }) {
    // State to track whether the additional menu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Filter mobile items to include only those that have an icon
    const mobileItems = navigation.filter(item => item.icon);
    
    // Create a copy of the mobileItems array
    const updatedNavigation = [...mobileItems];
    
    // Remove the first item and insert it at index 2 (third position)
    const firstItem = updatedNavigation.shift(); // Remove the first item
    updatedNavigation.splice(2, 0, firstItem);

    // Toggle the menu when the "Menu" item is clicked
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="fixed bottom-0 block md:hidden left-0 w-full max-h-20 border-t border-opacity-20 border-gray-700 bg-white z-20">
                <div className='flex relative justify-around py-2'>
                    {updatedNavigation.map((item, id) => (
                        id !== 2 ? (
                            <Link
                                key={id}
                                to={item.to}
                                onClick={() => handleLinkClick(item)}
                                className={`flex flex-col items-center py-2 text-xs ${item.current ? 'text-[#f25454]' : 'text-black'} transition-all duration-300 ease-in-out`}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                <span className="text-xl">
                                    <FontAwesomeIcon icon={item.icon} />
                                </span>
                                {item.name}
                            </Link>
                        ) : (
                            <Link
                                key={`new-item-${id}`} // Ensure uniqueness with a prefix
                                to={item.to}
                                onClick={() => handleLinkClick(item)}
                                className={`flex flex-col justify-center items-center text-center w-14 h-14`}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                <FontAwesomeIcon className='absolute -top-4 text-center p-4 w-8 text-xl h-8 leading-none text-white bg-[#f25454] rounded-full z-50 ml-1' icon={item.icon}/>
                            </Link>
                        )
                    ))}
                    <button 
                        onClick={() => toggleMenu()}
                        className={`flex flex-col items-center py-2 text-xs ${isMenuOpen ? 'text-[#f25454]' : 'text-black'} transition-all duration-300 ease-in-out`}
                    >
                        <span className="text-xl">
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                        Menu
                    </button>
                </div>

                {/* Add sliding and fading transition for the menu */}
                <div
                    className={`fixed bottom-[75px] left-0 w-full pb-2 h-fit bg-white z-30 border-t border-opacity-20 border-gray-700 transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
                    }`}
                >
                    <div className="flex flex-col justify-center items-center h-full">
                        {navigation.map((item, index) => (
                            <Link
                                key={`menu-item-${index}`}
                                to={item.to}
                                onClick={() => {
                                    handleLinkClick(item);
                                    setIsMenuOpen(false); // Close the menu after clicking an item
                                }}
                                className={`py-4 text-xl text-center transition-all duration-300 ease-in-out w-full ${item.current && 'text-white bg-[#f25454]'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}
