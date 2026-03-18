import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
    { name: 'Hakkımda', href: '#about' },
    { name: 'Yetenekler', href: '#tech' },
    { name: 'Deneyim', href: '#experience' },
    { name: 'Projeler', href: '#projects' },
    { name: 'Blog', href: '#blog' }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="nav-container container">
                <a href="#" className="nav-logo mono">
                    <span className="text-muted">{'<'}</span>
                    Oğuzhan
                    <span className="text-muted">{' />'}</span>
                </a>

                <div className="nav-links">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="nav-right">
                    <a href="#projects" className="nav-cta">
                        Projeleri Gör
                    </a>
                    <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
