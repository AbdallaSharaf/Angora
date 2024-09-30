import { useState, useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { faHome, faFolderOpen, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [navigation, setNavigation] = useState([
        { name: 'Home', to: '/#home', current: true, icon: faHome },
        { name: 'About', to: '/#about', current: false, icon: faUser },
        { name: 'Team', to: '/#team', current: false },
        { name: 'Projects', to: '/#projects', current: false, icon: faFolderOpen },
        { name: 'Services', to: '/#services', current: false },
        { name: 'Blog', to: '/#blog', current: false },
        { name: 'Contact', to: '/#contact', current: false, icon: faPhone }
    ]);

    // Handle navigation link click
    const handleLinkClick = (item) => {
        const targetElement = document.getElementById(item.to.substring(2));
        if (targetElement !== null) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Update only if the clicked item is different
        setNavigation((prevNavigation) =>
            prevNavigation.map((navItem) => ({
                ...navItem,
                current: navItem.name === item.name, // Only set the clicked item as current
            }))
        );
    };

    useEffect(() => {
        const sectionIds = navigation.map((item) => item.to.substring(2));
        const sectionElements = sectionIds.map((id) => document.getElementById(id));

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const observerCallback = (entries) => {
            let activeItem = null; // Store the new active item

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeItem = navigation.find(navItem => navItem.to.substring(2) === entry.target.id);
                }
            });

            // Only update if the active item has changed
            if (activeItem) {
                setNavigation((prevNavigation) =>
                    prevNavigation.map((navItem) => ({
                        ...navItem,
                        current: navItem.name === activeItem.name, // Only set the intersecting item as current
                    }))
                );
            }
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

    return (
        <>
            <MobileNavbar navigation={navigation} handleLinkClick={handleLinkClick} />
            <DesktopNavbar navigation={navigation} handleLinkClick={handleLinkClick} />
        </>
    );
}
