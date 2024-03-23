import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import projectsData from "../../../../database/projectsData";
import ProjectsList from "./ProjectsList";

function HorizontalSlider() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0", "-63%"]);

  return (
    <section ref={targetRef} className="h-[150vh] hidden md:block">
      <div className="sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="center flex-row pt-16">
          {projectsData.slice(1, 9).map((project) => {
            return <ProjectsList key={project.id} {...project} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default HorizontalSlider;
