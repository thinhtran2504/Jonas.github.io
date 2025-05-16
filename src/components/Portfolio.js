import React from "react";
import { motion } from "framer-motion";
import moliLogo from "../assets/images/moli.jpg";
import gaiaLogo from "../assets/images/logagai.png";
import bluestackLogo from "../assets/images/BlueStacks.png";
import makeupImg from "../assets/images/makeup.webp";
import avtImg from "../assets/images/AVT.webp";
import pokiImg from "../assets/images/POK.webp";
import docMakeup from "../assets/images/DocMakeUp.png";
import docAvt from "../assets/images/Docavt.png";
import docPok from "../assets/images/Docpok.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};
const greeting = {
  username: "Jonas Tran",
  title: "Hi, I'm Jonas, I'm a Game Designer and PO",
  subTitle:
    "Crafting retention-first gameplay for the next generation of mobile players 🚀",
  resumeLink:
    "https://drive.google.com/file/d/14rXm4reaL6w9DYMrWQYiAnKRIxp-kpDn/view?usp=sharing",
};
const skills = [
  "Mobile F2P Game Design",
  "GDD & Feature Specification Documentation",
  "KPI & Behavioral Data Analysis (LTV, ARPU, Retention)",
];
const workExperiences = [
  {
    role: "PRODUCT OWNER ACTING GAME DESIGN",
    company: "Gaia Game Studio",
    logo: gaiaLogo,
    date: "Jan 2023 – Apr 2025",
    desc: "Owned and executed end-to-end product roadmap leveraging player feedback and behavioral data. Led full game design process from concept to launch, tailored for US/EU mobile markets. Designed meta-game systems, live events, and monetization mechanics with continuous optimization.",
    bullets: [
      "Led complete game design cycle from ideation to global mobile launch targeting US/EU markets.",
      "Authored comprehensive Game Design Documents (GDDs), feature specs, economy design, and UX flows.",
    ],
  },
  {
    role: "LEAD OF GAME",
    company: "Moli Studio",
    logo: moliLogo,
    date: "Nov 2019 – Jan 2023",
    desc: "Developed and executed strategic plan for game segment, created sitemaps, user flows, wireframes, gameplay mechanics, and level designs. Managed project timelines and optimized product-market fit through analytics and market research.",
  },
  {
    role: "PRODUCT OPERATIONS MANAGER",
    company: "Bluestack",
    logo: bluestackLogo,
    date: "Jul 2017 – Mar 2018",
    desc: "Analyzed market and user data to identify growth opportunities, collaborated with Vietnamese game publishers on user acquisition campaigns, and coordinated between local publishers and Indian dev teams to optimize app performance.",
  },
];
const projects = [
  {
    name: "Makeover Artist: Makeup Games",
    link: "https://play.google.com/store/apps/details?id=com.makeup.artist.makeover.beauty.diy.stylist&hl=en",
    img: makeupImg,
    doc: docMakeup,
  },
  {
    name: "Princess Dress Up Makeup Games",
    link: "https://play.google.com/store/apps/details?id=com.gaia.anime.magic.princess.avatar.doll.dressup.games&hl=en",
    img: avtImg,
    doc: docAvt,
  },
  {
    name: "Poki Evolution: Hidden planet",
    link: "https://apkpure.com/vn/poki-evolution-hidden-planet/com.moli.f2p.games.free.poke.merge.evolution.casual",
    img: pokiImg,
    doc: docPok,
  },
];

export default function Portfolio() {
  return (
    <motion.div
      className="portfolio-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        maxWidth: 800,
        margin: "auto",
        padding: 24,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fdfdfd",
        borderRadius: 10,
        boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header Section */}
      <motion.h1
        variants={itemVariants}
        custom={0}
        style={{
          borderBottom: "3px solid #007acc",
          paddingBottom: 10,
          fontSize: 28,
        }}
      >
        {greeting.title}
      </motion.h1>
      <motion.p
        variants={itemVariants}
        custom={1}
        style={{ fontSize: 18, marginTop: 10, color: "#555" }}
      >
        {greeting.subTitle}
      </motion.p>
      {greeting.resumeLink && (
        <motion.a
          variants={itemVariants}
          custom={2}
          href={greeting.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 12,
            color: "#007acc",
            fontWeight: "bold",
            textDecoration: "none",
            border: "1px solid #007acc",
            padding: "6px 12px",
            borderRadius: 6,
          }}
        >
          📄 Download Resume
        </motion.a>
      )}
      {/* Skills Section */}
      <motion.h2
        variants={itemVariants}
        custom={3}
        style={{
          marginTop: 40,
          borderBottom: "2px solid #007acc",
          paddingBottom: 6,
        }}
      >
        Skills
      </motion.h2>
      <ul style={{ paddingLeft: 20 }}>
        {skills.map((skill, i) => (
          <motion.li
            key={skill}
            variants={itemVariants}
            custom={4 + i}
            style={{ marginBottom: 6 }}
          >
            ✅ {skill}
          </motion.li>
        ))}
      </ul>
      {/* Work Experience Section */}
      <motion.h2
        variants={itemVariants}
        custom={4 + skills.length}
        style={{
          marginTop: 40,
          borderBottom: "2px solid #007acc",
          paddingBottom: 6,
        }}
      >
        Work Experience
      </motion.h2>
      {workExperiences.map((job, i) => (
        <motion.div
          key={job.company + job.role}
          variants={itemVariants}
          custom={5 + skills.length + i}
          style={{
            marginBottom: 30,
            padding: 16,
            borderLeft: "4px solid #007acc",
            backgroundColor: "#ffffff",
            borderRadius: 8,
            boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              style={{
                width: 40,
                height: 40,
                objectFit: "contain",
                marginRight: 12,
                borderRadius: 4,
                border: "1px solid #ddd",
              }}
            />
            <h3 style={{ marginBottom: 2, fontWeight: "600" }}>
              {job.role} -{" "}
              <span style={{ fontStyle: "italic", color: "#555" }}>{job.company}</span>
            </h3>
          </div>
          <p style={{ fontWeight: "bold", color: "#555", marginBottom: 6 }}>{job.date}</p>
          <p style={{ marginBottom: 8 }}>{job.desc}</p>
          {job.bullets && (
            <ul style={{ paddingLeft: 20 }}>
              {job.bullets.map((b, idx) => (
                <li key={idx}>🔹 {b}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
      {/* Projects Section */}
      <motion.h2
        variants={itemVariants}
        custom={6 + skills.length + workExperiences.length}
        style={{
          marginTop: 40,
          borderBottom: "2px solid #007acc",
          paddingBottom: 6,
          color: "#007acc",
        }}
      >
        🚀 Highlighted Projects
      </motion.h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            variants={itemVariants}
            custom={7 + skills.length + workExperiences.length + i}
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 10,
              boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "#007acc",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: 10,
              }}
            >
              <img
                src={project.img}
                alt={project.name}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                  borderRadius: 8,
                  border: "1px solid #ddd",
                  marginRight: 16,
                }}
              />
              {project.name}
            </a>
            <img
              src={project.doc}
              alt={`GDD for ${project.name}`}
              style={{
                marginTop: 10,
                maxWidth: "100%",
                borderRadius: 8,
                border: "1px solid #ccc",
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
