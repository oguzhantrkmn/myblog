import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { ArrowRight, Terminal } from 'lucide-react';
import { HERO_DATA } from '../data';

// A minimal random float generator for the stars
const generateSpherePoints = (count, radius) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
};

const StarBackground = () => {
  const ref = useRef();
  const [sphere] = useState(() => generateSpherePoints(3000, 2));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#a855f7"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

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

const ModernHero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#050505] pt-32 lg:pt-40 pb-16">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarBackground />
        </Canvas>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none"></div>

      <div className="container relative z-10 max-w-7xl mx-auto px-6 w-full mt-12 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text & Profile */}
          <motion.div
            style={{ y: y1 }}
            className="flex flex-col items-start space-y-8"
          >


            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6 w-full"
            >
              <div className="relative w-48 h-[240px] sm:w-56 sm:h-[280px] md:w-64 md:h-[320px] lg:w-[280px] lg:h-[350px] group mt-16 mb-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 rounded-3xl blur-md opacity-30 group-hover:opacity-70 group-hover:blur-xl transition-all duration-500"></div>
                <div className="absolute inset-0 bg-[#050505] rounded-3xl p-1.5 border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                  <img
                    src="/blog.jpeg"
                    alt="Oğuzhan Türkmen"
                    className="w-full h-full rounded-[1.4rem] object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg md:text-xl text-cyan-400/90 font-medium font-mono">
                  {HERO_DATA.greeting.split('Oğuzhan')[0]}
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
                  <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                    Oğuzhan Türkmen
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-400 font-medium flex items-center gap-3 font-mono mt-2">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  {HERO_DATA.role}
                </h2>
              </div>

              <p className="text-lg text-gray-300 max-w-xl leading-relaxed mt-4">
                {HERO_DATA.description}. Kodlarken sadece modülleri değil, uçtan uca mimariyi tasarlayan bir problem çözücü.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                className="group relative px-6 py-3.5 rounded-xl overflow-hidden font-medium text-white flex items-center gap-2 shadow-lg shadow-indigo-500/20"
              >
                <div className="absolute inset-0 w-full h-full bg-indigo-600 transition-all duration-300 ease-out group-hover:bg-indigo-700"></div>
                <div className="absolute inset-0 w-0 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative flex items-center gap-2 font-mono text-sm uppercase tracking-wider">
                  Projeleri Gör <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <div className="flex gap-3">
                {HERO_DATA.socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md shadow-lg"
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Code Window */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="perspective-1000 relative mt-10 lg:mt-0"
          >
            {/* Neon Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>

            {/* Glass Code Card */}
            <div className="relative rounded-2xl bg-[#0a0a0a]/70 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden hover:border-white/20 transition-colors">
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 text-xs font-mono text-gray-400">
                  <Terminal className="w-3 h-3" /> developer.js
                </div>
                <div className="w-12"></div>
              </div>
              <div className="p-6 overflow-x-auto text-[13px] md:text-sm lg:text-base font-mono leading-relaxed text-gray-300">
                <pre>
                  <code>
                    <TypewriterText text={codeSnippet.trim()} />
                    <span className="animate-pulse text-cyan-400 text-lg font-bold ml-1">|</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-2xl opacity-20 blur-xl pointer-events-none"
            />
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 -top-8 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl pointer-events-none"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ModernHero;
