"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Welcome to my
        <span className="font-medium"> portfolio!</span>, I'm a recent college
        graduate with a passion for technology and innovation, specializing in
        both{" "}
        <span className="font-medium">
          Full Stack Development and Blockchain Technology
        </span>
        .{" "}
        <span className="italic">
          My journey has equipped me with a strong foundation in
        </span>{" "}
        computer science, programming languages, and the principles of
        blockchain. As <span className="underline">Full Stack Developer</span> I
        excel in crafting robust and user-friendly websites, handling both{" "}
        <span className="font-medium">front-end and back-end development </span>
        . Simultaneously, my fascination with{" "}
        <span className="underline"> blockchain technology </span> has led me to
        explore{" "}
        <span className="font-medium">
          smart contracts, decentralized applications (DApps), and cryptographic
          security
        </span>{" "}
      </p>

      <p>
        <span className="italic">My vision is to</span>, contribute to
        innovative projects and create meaningful solutions, and I'm actively{" "}
        <span className="font-medium">seeking a full-time position </span> to
        apply my skills and grow as a developer
        <span className="font-medium">
          {" "}
          If you're looking for a dynamic and driven developer to join your
          team,
        </span>{" "}
        let's connect and build the future together!{" "}
      </p>
    </motion.section>
  );
}
