import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

const Projects30 = () => {
  useGSAP(()=>{
    gsap.from(".projects30 h1", {
      y:30,
      duration: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: ".projects30 h1"
      }
    })

    gsap.from(".projects30 .description30 p", {
      delay: 1,
      opacity: 0,
      ease: "power1",
      scrollTrigger: {
        trigger: ".projects30 .description30 p"
      }
    })
  })
  return (
    <section className="projects30">
      <h1>30 days 30 mini projects <br /> challenge</h1>
      <div className="description30">
        <p>As part of the Governor House IT Initiative, I am currently a Quarter 2 student specializing in Generative AI. In this quarter, I am focusing on mastering Next.js, while in Quarter 1, I learned TypeScript, building a solid foundation in modern web development.</p>
        <p>To sharpen my skills and gain practical experience, I’ve embarked on a 30 Days 30 Projects Challenge, which involves creating one project every day using Next.js, React, Tailwind CSS, and shadcn UI. This challenge, assigned by my instructor Asharib Ali, is not just about completing projects but about deeply understanding the intricacies of front-end development and interactive web design. Each project builds upon the lessons learned, helping me to implement real-world solutions while expanding my expertise in Next.js and React.</p>
        <p>The challenge also provides me with opportunities to showcase my work on GitHub and LinkedIn, where I share the project links and tag my instructor. Through this initiative, I am continuously improving my development skills and enhancing my portfolio with dynamic, fully-functional applications.</p>
      </div>
    </section>
  )
}

export default Projects30
