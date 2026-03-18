import React from 'react';
import { motion } from 'framer-motion';
import { GOALS_LEARNING, BLOG_CONTENT } from '../data';
import './Goals.css';

const Goals = () => {
    return (
        <section className="section-padding" id="goals">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">05. İleriye Dönük</span>
                    <h2 className="section-title">Hedefler & <br /><span className="gradient-accent">Vizyon.</span></h2>
                </div>

                <div className="bento-grid goals-bento-grid">
                    <motion.div
                        className="bento-card bento-main"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="goals-h3">Gelecek Hedeflerim</h3>
                        <ul className="goals-custom-list mono">
                            {GOALS_LEARNING.goals.map((g, i) => (
                                <li key={i}>
                                    <span className="list-number">0{i + 1}</span>
                                    <span className="list-text">{g}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="bento-card bg-brand"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="goals-h3 white">Aktif Öğrenim</h3>
                        <div className="learning-tags">
                            {GOALS_LEARNING.learning.map((l, i) => (
                                <span key={i} className="learning-tag mono">{l}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Goals;
