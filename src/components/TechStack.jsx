import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../data';
import './TechStack.css';

const TechStack = () => {
    return (
        <section className="section-padding" id="tech">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">02. Setup</span>
                    <h2 className="section-title">Teknoloji <br /><span className="gradient-accent">Stack.</span></h2>
                </div>

                <div className="tech-bento-grid">
                    {TECH_STACK.map((stack, index) => (
                        <motion.div
                            key={index}
                            className="bento-card tech-card group relative overflow-hidden cursor-default"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20, delay: 0 } }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-indigo-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>
                            
                            <div className="tech-header relative z-10">
                                <div className="tech-icon text-gray-400 group-hover:text-cyan-400 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                                    {stack.icon}
                                </div>
                                <h3 className="tech-cat group-hover:text-white transition-colors duration-500">{stack.category}</h3>
                            </div>

                            <div className="tech-skills-wrap relative z-10">
                                {stack.skills.map((skill, i) => (
                                    <span key={i} className="skill-pill mono hover:!bg-indigo-500/20 hover:!text-cyan-300 hover:!border-indigo-500/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer group-hover:border-white/10">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
