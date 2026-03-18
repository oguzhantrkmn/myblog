import React from 'react';
import { HERO_DATA } from '../data';
import './Footer.css';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer section-padding">
            <div className="container">
                <div className="footer-top">
                    <h2 className="footer-cta">Birlikte bir <br /> şeyler <span className="gradient-accent">inşa edelim.</span></h2>

                    <div className="footer-links">
                        <div className="footer-col">
                            <span className="col-title mono">SOSYAL MEDYA</span>
                            {HERO_DATA.socials.map((s, i) => (
                                <a key={i} href={s.link} target="_blank" rel="noreferrer" className="footer-link">
                                    {s.label} <ArrowUpRight size={14} />
                                </a>
                            ))}
                        </div>
                        <div className="footer-col">
                            <span className="col-title mono">MENÜ</span>
                            <a href="#about" className="footer-link">Hakkımda</a>
                            <a href="#projects" className="footer-link">Projeler</a>
                            <a href="#blog" className="footer-link">Blog</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom mono">
                    <div className="footer-copy">
                        © {new Date().getFullYear()} Oğuzhan Türkmen. Tüm hakları saklıdır.
                    </div>
                    <div className="footer-note">
                        Tasarım ve geliştirme Oğuzhan Türkmen.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
