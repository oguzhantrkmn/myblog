import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA } from '../data';
import './About.css';
import { Compass, Cpu, Code2, Rocket } from 'lucide-react';

const About = () => {
    return (
        <section className="section-padding" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">01. Hakkımda</span>
                    <h2 className="section-title">Tutku, Kod & <br /><span className="gradient-accent">Üretim.</span></h2>
                </div>

                <div className="bento-grid">
                    {/* Main Intro Card */}
                    <motion.div
                        className="bento-card bento-main"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <Compass className="bento-icon" size={32} />
                        <h3>Hikayem</h3>
                        {ABOUT_DATA.paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </motion.div>

                    {/* Quick Stats / Points */}
                    <motion.div
                        className="bento-card bento-stats"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Cpu className="bento-icon" size={32} />
                        <h3>Odak & İlgi</h3>
                        <div className="stats-list">
                            {ABOUT_DATA.points.map((pt, i) => (
                                <div key={i} className="stat-item">
                                    <span className="stat-label mono">{pt.label}</span>
                                    <span className="stat-value">{pt.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Philosophy Quote */}
                    <motion.div
                        className="bento-card bento-quote"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Rocket className="bento-icon" size={32} />
                        <h3>Felsefem</h3>
                        <blockquote>
                            "{ABOUT_DATA.quote}"
                        </blockquote>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
