import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import About1 from '../Images/About-1.png';
import About2 from '../Images/About-2.png';
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

const About = () => {

  useGSAP(() => {
    gsap.from(".about .about-1 h1", {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power1",
      scrollTrigger: {
        trigger: ".about h1"
      }
    })

    gsap.from(".about .about-1 .about-me", {
      scale: 0.5,
      delay: 1,
      opacity: 0,
      duration: 0.8,
      ease: "power1",
      scrollTrigger: {
        trigger: ".about .about-1 .about-me"
      }
    })

    gsap.from(".about .about-2 .about-img-1 img", {
      delay: 2,
      duration: 1,
      y: -500,
      ease: "power1",
      scrollTrigger: {
        trigger: ".about .about-2 .about-img-1 img"
      }
    })

    gsap.from(".about .about-2 .about-img-2 img", {
      delay: 3,
      duration: 1,
      y: 500,
      ease: "power1",
      scrollTrigger: {
        trigger: ".about .about-2 .about-img-1 img"
      }
    })
  })


  return (
    <section className="about">
      <div className="about-1">
        <h1>A Little <br /> About Me</h1>
        <div className="about-me">
          <p>I am a front-end developer currently based in Pakistan. I have been working in web development for the past two years, with a strong focus on front-end technologies. In the past two years, I have fully dedicated myself to enhancing my skills in building user-friendly and interactive web applications</p>
          <a href="https://drive.google.com/file/d/1IozOrM8NmzgX5jSNKAQ_kGHeECsk0kpb/view?usp=sharing">DOWNLOAD CV</a>
        </div>
      </div>
      <div className="about-2">
        <div className='about-img-1'>
          <img src={About1} alt="" />
        </div>
        <div className='about-img-2'>
          <img src={About2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
