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
                        className="bento-card bento-main relative overflow-hidden group cursor-default"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>
                        <Compass className="bento-icon relative z-10 text-cyan-400 group-hover:scale-110 transition-transform duration-500" size={32} />
                        <h3 className="relative z-10">Hikayem</h3>
                        <div className="relative z-10">
                            {ABOUT_DATA.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Stats / Points */}
                    <motion.div
                        className="bento-card bento-stats relative overflow-hidden group cursor-default"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -5, scale: 1.01 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>
                        <Cpu className="bento-icon relative z-10 text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" size={32} />
                        <h3 className="relative z-10">Odak & İlgi</h3>
                        <div className="stats-list relative z-10">
                            {ABOUT_DATA.points.map((pt, i) => (
                                <div key={i} className="stat-item group/item">
                                    <span className="stat-label mono text-purple-400/80 group-hover/item:text-cyan-400 transition-colors">{pt.label}</span>
                                    <span className="stat-value text-gray-300 group-hover/item:text-white transition-colors">{pt.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Philosophy Quote */}
                    <motion.div
                        className="bento-card bento-quote relative overflow-hidden group cursor-default"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>
                        <Rocket className="bento-icon relative z-10 text-indigo-400 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-500" size={32} />
                        <h3 className="relative z-10">Felsefem</h3>
                        <blockquote className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-500">
                            "{ABOUT_DATA.quote}"
                        </blockquote>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
