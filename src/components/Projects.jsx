import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, LIVE_PROJECTS } from '../data';
import './Projects.css';
import { ExternalLink, Rocket } from 'lucide-react';

const Projects = () => {
    return (
        <section className="section-padding" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">04. Portfolyo</span>
                    <h2 className="section-title">İnşa <br /><span className="gradient-accent">Ettiklerim.</span></h2>
                </div>

                {/* Canlı Projeler */}
                <div className="live-projects-container">
                    {LIVE_PROJECTS.map((live, idx) => (
                        <motion.a
                            key={idx}
                            href={live.url}
                            target="_blank"
                            rel="noreferrer"
                            className="bento-card live-project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="live-header">
                                <div className="live-icon">
                                    <Rocket size={24} />
                                </div>
                                <span className="live-badge-glow">CANLI</span>
                            </div>
                            <h3 className="live-name">{live.name}</h3>
                            <p className="live-desc">{live.desc}</p>
                            <div className="live-link mono">
                                {live.url.replace('https://', '')} <ExternalLink size={14} />
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="section-header" style={{ marginTop: '4rem' }}>
                    <span className="section-label">04.1. Arşiv & Kodlar</span>
                    <h2 className="section-title">Diğer <span className="gradient-accent">Üretimler.</span></h2>
                </div>

                <div className="proj-grid">
                    {PROJECTS.map((proj, index) => (
                        <motion.div
                            key={index}
                            className="bento-card proj-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="proj-icon-wrapper">
                                {proj.icon}
                            </div>

                            <h3 className="proj-title">{proj.category}</h3>
                            <p className="proj-desc">{proj.desc}</p>

                            <div className="proj-list mono">
                                {proj.items.map((item, i) => (
                                    <div key={i} className="proj-item">
                                        <span className="proj-item-bullet">-</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
