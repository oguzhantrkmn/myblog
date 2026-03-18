import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EXPERIENCE } from '../data';
import './Experience.css';

const Experience = () => {
    return (
        <section className="section-padding" id="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">03. Kariyer</span>
                    <h2 className="section-title">Neler <br /><span className="gradient-accent">Yaptım.</span></h2>
                </div>

                <div className="exp-timeline">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="exp-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="exp-tracker">
                                <div className="tracker-dot"></div>
                                {index !== EXPERIENCE.length - 1 && <div className="tracker-line"></div>}
                            </div>

                            <div className="bento-card exp-card">
                                <div className="exp-head">
                                    <span className="exp-date mono">{exp.date}</span>
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <h4 className="exp-company">{exp.company}</h4>
                                </div>
                                <div className="exp-body">
                                    <ul className="exp-tasks">
                                        {exp.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                                {exp.tech && (
                                    <div className="exp-foot">
                                        {exp.tech.map((t, i) => (
                                            <span key={i} className="exp-pill mono">{t}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
