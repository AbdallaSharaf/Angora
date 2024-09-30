import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { p } from 'framer-motion/client';

export default function MobileNavbar({ navigation, handleLinkClick }) {
    // Filter mobile items to include only those that have an icon
    const mobileItems = navigation.filter(item => item.icon);
    
    // Create the new item
    const newItem = {
        name: '+',
        to: '/#form',
        icon: faPlus,  // Add icon for the new item
        current: false,
    };

    // Create a copy of the mobileItems array and insert the new item at index 2
    const updatedNavigation = [...mobileItems];
    updatedNavigation.splice(2, 0, newItem);

    return (
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
                            className={`flex flex-col justify-center items-center text-center w-14 h-14 `}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            <FontAwesomeIcon className='absolute -top-4 ml-4 text-center p-4 w-8 text-xl h-8 leading-none  text-white bg-[#f25454] rounded-full' icon={item.icon} />
                        </Link>
                    )
                ))}
            </div>
        </nav>
    );
}
