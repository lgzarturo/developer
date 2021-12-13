import React from "react";
import "./Progress.css";
import { illustration, techStack } from "../../portfolio";
import { Fade } from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Habilidades</h1>
            {techStack.experience.map((exp, i) => {
              const size = exp.progressPercentage ?? 0;
              const progressStyle = {
                width: size,
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  {size !== 0 ? (
                    <div className="meter">
                      <span style={progressStyle}></span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/section-skills.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
