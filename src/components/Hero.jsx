import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../data';
import './Hero.css';
import { ArrowRight, Terminal } from 'lucide-react';

const codeSnippet = `
const developer = {
  name: "Oğuzhan Türkmen",
  role: "Mobile & Web Developer",
  focus: ["Android", "React", "Node.js"],
  passion: "Problem solving",
  status: "Building new things",
  execute() {
    this.learn()
        .then(() => this.build())
        .then(() => this.deploy());
  }
};

developer.execute();
`;

const TypewriterText = ({ text }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let current = '';
        let i = 0;
        const interval = setInterval(() => {
            current += text[i];
            setDisplayText(current);
            i++;
            if (i >= text.length) clearInterval(interval);
        }, 20);
        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>;
}

const Hero = () => {
    return (
        <section className="hero-section section-padding">
            <div className="container hero-container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="status-badge mono"
                    >
                        <span className="live-dot"></span>
                        Available for Work
                    </motion.div>

                    <motion.div
                        className="hero-image-wrapper"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        {/* 
                          RESMİNİ BURAYA EKLEYEBİLİRSİN: 
                          Projenin 'public' klasörünün içine profil resmini at ve src kısmını örneğin src="/resmim.jpg" olarak değiştir.
                        */}
                        <img src="/blog.jpeg" alt="Oğuzhan Türkmen" className="hero-profile-image" />
                    </motion.div>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Merhaba, ben <strong style={{ color: "white" }}>Oğuzhan Türkmen</strong>. {HERO_DATA.description}.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a href="#projects" className="btn-primary">
                            Projeleri Gör <ArrowRight size={18} />
                        </a>
                        <div className="social-links-minimal">
                            {HERO_DATA.socials.map((s, i) => (
                                <a key={i} href={s.link} target="_blank" rel="noreferrer" title={s.label}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="code-window">
                        <div className="window-header">
                            <div className="window-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <div className="window-title mono"><Terminal size={14} style={{ marginRight: '6px' }} /> script.js</div>
                        </div>
                        <div className="window-body mono">
                            <pre>
                                <code>
                                    <TypewriterText text={codeSnippet.trim()} />
                                    <span className="blinking-cursor">_</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                    {/* Decorative glow behind code window */}
                    <div className="hero-glow"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
