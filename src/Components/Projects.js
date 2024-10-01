import project1 from '../Images/project-1.png';
import project2 from '../Images/project-2.png';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

export default function Projects() {


    useGSAP(() => {
        gsap.from(".custom-projects .custom-projects-heading h1", {
          x: -50,
          duration: 1,
          opacity: 0,
          ease: "power1",
          scrollTrigger: {
            trigger: ".custom-projects .custom-projects-heading h1"
          }
        })

        gsap.from(".custom-projects .custom-projects-heading a", {
            x: -50,
            duration: 1,
            delay: 1,
            opacity: 0,
            ease: "power1",
            scrollTrigger: {
              trigger: ".custom-projects .custom-projects-heading a"
            }
          })

        gsap.from(".custom-projects .custom-project-description a", {
            x: 50,
            duration: 1,
            delay: 1,
            opacity: 0,
            ease: "power1",
            scrollTrigger: {
              trigger: ".custom-projects .custom-project-description a"
            }
          })

          gsap.from(".custom-projects .custom-project-description p", {
            x: 50,
            duration: 1,
            delay: 1,
            opacity: 0,
            ease: "power1",
            scrollTrigger: {
              trigger: ".custom-projects .custom-project-description p"
            }
          })
      })

    return (
        <section className="custom-projects">
            <div className="custom-projects-heading">
                <h1>Frontend <br /> Projects</h1>
                <a rel="noreferrer" href='https://kay-van-hans.netlify.app/' target='_blank' className="custom-container">
                    <img src={project1} alt="KAY.V.H" className="custom-image" />
                    <div className="custom-overlay">
                        <h4>KAY.V.H</h4>
                    </div>
                </a>
            </div>
            <div className="custom-project-description">
                <p>A sample of web interfaces and <br /> components conceptualized, <br /> designed, and developed by me.</p>
                <a rel="noreferrer" target='_blank' href='https://eren-website.netlify.app/' className="custom-container">
                    <img src={project2} alt="EREN" className="custom-image" />
                    <div className="custom-overlay">
                        <h4>EREN</h4>
                    </div>
                </a>
            </div>
        </section>
    );
}
