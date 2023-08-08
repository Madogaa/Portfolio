import React, { useState } from "react";
import Tech from "./Tech";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

function TechContainer({ skills }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const springProps = skills.map((_, index) => {
    const isHovered = hoveredIndex === index;

    return useSpring({
      transform: isHovered ? "scale(1.25)" : "scale(1)",
    });
  });

  return (
    <div className="cursor-pointer flex gap-10 self-center">
      {skills.map((item, index) => (
        <animated.div
          key={index}
          className="cursor-pointer flex gap-10 self-center"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          style={springProps[index]}
        >
          <Tech logo={item.logo} title={item.title} />
        </animated.div>
      ))}
    </div>
  );
}

TechContainer.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default TechContainer;
