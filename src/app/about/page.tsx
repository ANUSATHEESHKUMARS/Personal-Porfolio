"use client";

import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
    Full Stack Developer with 9 months of hands-on training experience, specializing in MERN stack development.
Acquired practical experience through real-world projects involving both frontend and backend, working closely with teams to build scalable web applications. Proficient in React, Node.js, Express, MongoDB, and modern UI design principles.
Enthusiastic about contributing to dynamic development teams and committed to continuous growth as a developer.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React </li>
              {/* <li>TypeScript</li> */}
              <li>Javascript</li>
              <li>E-JS</li>
              {/* <li>Jinja</li> */}
              {/* <li>Material UI</li>
              <li>Chakra UI</li> */}
              <li>Tailwind CSS</li>
              <li>Styled Components</li>
              <li>HTML5 / SASS (SCSS)</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              {/* <li>Python</li> */}
              {/* <li>Django</li>
              <li>Django Rest Framework</li>
              <li>PostgreSQL</li> */}
              <li>Sql</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              {/* <li>Cuberneties</li> */}
              <li>Postman</li>
              <li>Cloud</li>
              <li>AWS</li>
              <li>Vercel</li>
              {/* <li>Render</li>
              <li>Shopify</li> */}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Full Stack DEVELOPER (TRAINING)
            </h3>
            <p className="text-primary mb-2">
              BROTOTYPE • 12-OCTOBER-2024 to 10-MAY-2025.
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Utilized DSA and problem-solving skills to tackle real-world coding challenges at PureCode AI, improving development efficiency and code quality.
              </li>
              <li>
         Developed strong communication and collaboration skills by working closely with team members, participating in daily stand-ups, and contributing to a positive and productive team environment. Demonstrated adaptability, accountability, and problem-solving throughout the development process.
              </li>
              <li>
           Contributed to building scalable and modular web applications by
            developing backend APIs using Node.js and Express, and managing data 
            storage and retrieval with MongoDB. Applied strong problem-solving and DSA skills
             to optimize backend logic and system performance.


              </li>
              <li>
                Tackled real-world challenges using strong problem-solving
                skills, including performance optimization and component
                abstraction.
              </li>
              <li>
              Gained leadership experience by mentoring peers and taking ownership of core modules.
               Full Stack Developer with 9 months of training experience at Brototype,
                specializing in MERN stack development. Gained hands-on experience in real-world projects across frontend and backend,
                 collaborating closely with teams to build scalable web applications. Skilled in React, Node.js, Express, MongoDB, 
                 and modern UI design. Eager to contribute to dynamic development teams and continuously grow as a developer. 
                 Strengthened skills and teamwork capabilities through direct collaboration with stakeholders.


              </li>
            </ul>
          </motion.div>

          {/* <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              FULL STACK DEVELOPER TRAINEE
            </h3>
            <p className="text-primary mb-2">BROTOTYPE • Oct 2024 - May 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Completed an intensive 7-month full stack development bootcamp
                focused on hands-on project building, real-world problem solving
                and communication.
              </li>
              <li>
                Strengthened technical proficiency in MERN stack and full
                lifecycle project development through practical sessions and
                code challenges
              </li>
              <li>
                Demonstrated leadership through code reviews and team-based
                tasks
              </li>
              <li>
                Practiced client communication in simulated global meetings.
              </li>
              <li>
                {" "}
                Built full-scale applications with a product-focused approach.
              </li>
            </ul>
          </motion.div> */}
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              BOOTCAMP PROGRAM TRIVANDRUM
            </h3>
            <p className="text-primary mb-2">Brototype • 2024 - 2025</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Completed an intensive 7-month full stack development bootcamp
                focused on hands-on project building, real-world problem solving
                and communication.
              </li>
              <li>
                Strengthened technical proficiency in MERN stack and full
                lifecycle project development through practical sessions and
                code challenges
              </li>
              <li>
                Demonstrated leadership through code reviews and team-based
                tasks
              </li>
              <li>
                Practiced client communication in simulated global meetings.
              </li>
              <li>
                {" "}
                Built full-scale applications with a product-focused approach.
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 mt-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              st jhons hss Nalanchira
            </h3>
            <p className="text-primary mb-2">st jhons • 2022 - 2024</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Higher secondary certificate in Science</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
