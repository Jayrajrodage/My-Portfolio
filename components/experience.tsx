"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-bold text-2xl capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <>
                <p className="!mt-1 !font-normal text-gray-800 dark:text-white/90">
                  {item.Workp1}{" "}
                </p>
                <p className="!mt-1 !font-normal text-gray-800 dark:text-white/90">
                  {item.Workp2}{" "}
                </p>
                <p className="!mt-1 !font-normal text-gray-800 dark:text-white/90">
                  {item.Workp3}
                </p>{" "}
                <p className="!mt-1 !font-normal text-gray-800 dark:text-white/90">
                  {item.Workp4}
                </p>{" "}
                <p className="!mt-1 !font-normal text-gray-800 dark:text-white/90">
                  {item.Workp5}
                </p>{" "}
                <p className="!mt-1 !font-normal text-gray-800 dark:text-white/90">
                  {item.Workp6}
                </p>{" "}
              </>

              <p className="!mt-1 !font-normal text-gray-800 dark:text-white/90">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
