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
                            className="bento-card tech-card group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="tech-header">
                                <div className="tech-icon">
                                    {stack.icon}
                                </div>
                                <h3 className="tech-cat">{stack.category}</h3>
                            </div>

                            <div className="tech-skills-wrap">
                                {stack.skills.map((skill, i) => (
                                    <span key={i} className="skill-pill mono">{skill}</span>
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
