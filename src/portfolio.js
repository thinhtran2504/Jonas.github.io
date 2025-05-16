import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

function Portfolio() {
  const skills = ["React", "JavaScript", "CSS", "Framer Motion"];
  const projects = [
    { name: "Project One", desc: "A cool project" },
    { name: "Project Two", desc: "Another cool project" },
  ];

  return (
    <motion.div
      className="portfolio-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ maxWidth: 700, margin: "auto", padding: 20 }}
    >
      <motion.h1 variants={itemVariants} custom={0}>
        Hi, I'm Jonas Tran
      </motion.h1>
      <motion.p variants={itemVariants} custom={1}>
        I'm a Game Designer and Product Owner passionate about retention-first
        mobile gameplay.
      </motion.p>

      <motion.h2 variants={itemVariants} custom={2} style={{ marginTop: 40 }}>
        Skills
      </motion.h2>
      <ul>
        {skills.map((skill, i) => (
          <motion.li key={skill} variants={itemVariants} custom={3 + i}>
            {skill}
          </motion.li>
        ))}
      </ul>

      <motion.h2 variants={itemVariants} custom={3 + skills.length} style={{ marginTop: 40 }}>
        Projects
      </motion.h2>
      <ul>
        {projects.map((p, i) => (
          <motion.li key={p.name} variants={itemVariants} custom={4 + skills.length + i}>
            <strong>{p.name}</strong>: {p.desc}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Portfolio;
