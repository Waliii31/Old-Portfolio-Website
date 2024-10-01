import skills from '../Images/skills.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

const Skills = () => {

  const skillList = ["HTML", "CSS", "Javascript", "Typescript", "Reactjs", "Nextjs", "Bootstrap", "Tailwind css", "Github"];

  
  useGSAP(() => {
    gsap.from(".skills .skills-heading img", {
      y: 100,
      duration: 1,
      opacity: 0,
      ease: "power1",
      scrollTrigger: {
        trigger: ".skills .skills-heading img"
      }
    })

    gsap.from(".skills .skills-heading h1", {
      opacity: 0,
      delay: 1,
      duration: 0.5,
      ease: "power1",
      scrollTrigger: {
        trigger: ".skills .skills-heading h1"
      }
    })

    gsap.from(".skills .skills-list h3", {
      opacity: 0,
      y: -50,
      delay: 1.5,
      duration: 1,
      ease: "power1",
      scrollTrigger: {
        trigger: ".skills .skills-heading h3"
      }
    })

    gsap.from(".skills .skills-list p", {
      opacity: 0,
      x: -50,
      delay: 2.5,
      stagger: 0.3,
      duration: 1,
      ease: "power1",
      scrollTrigger: {
        trigger: ".skills .skills-heading p"
      }
    })
  })

  return (

    <section className="skills">
      <div className="skills-heading">
        <h1>Skills & <br /> Expertise</h1>
        <img src={skills} alt="Skills Icon" />
      </div>
      <div className='skills-list'>
        <h3>Web Development</h3>
        {skillList.map((skill, index) => (
          <p key={index}>- {skill}</p>
        ))}
      </div>
    </section>
  )
}

export default Skills;
