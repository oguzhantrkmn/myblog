import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_CONTENT } from '../data';
import './BlogSection.css';
import { ArrowUpRight, Mail } from 'lucide-react';

const BlogSection = () => {
    return (
        <section className="section-padding" id="blog">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">06. Blog</span>
                    <h2 className="section-title">Açık <br /><span className="gradient-accent">Geliştirme.</span></h2>
                </div>

                <div className="blog-container">
                    <div className="blog-feature glass-card bento-card">
                        <div className="blog-header">
                            <span className="live-badge mono">YAZILAR</span>
                            <h3 className="blog-h3">{BLOG_CONTENT.title}</h3>
                        </div>

                        <div className="blog-topics-grid">
                            {BLOG_CONTENT.topics.map((topic, i) => (
                                <motion.div
                                    className="topic-pill mono"
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {topic}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="blog-mission bento-card">
                        <span className="mission-title">Amaç:</span>
                        <h2>"{BLOG_CONTENT.mission}"</h2>
                        <div className="mission-footer">
                            <p>Öğrendiklerimi ve tecrübelerimi inşa sürecimde açıkça paylaşıyorum.</p>
                            <a href="mailto:oguzhantrkmn077@gmail.com" className="read-btn mono" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                İletişime Geç <Mail size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
