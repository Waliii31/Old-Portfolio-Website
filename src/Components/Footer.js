import footer1 from '../Images/footer1.png'
import footer2 from '../Images/footer2.png'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

const Footer = () => {


  useGSAP(()=>{
    gsap.from(".footer .non-special",{
      x: 100,
      duration: 1,
      opacity: 0,
      ease: "power1",
      scrollTrigger: {
        trigger: ".footer .non-special",
        start: "top 50%",
        end: "bottom 50%"
      }
    })

    gsap.from(".footer .special",{
      x: -100,
      duration: 1,
      opacity: 0,
      ease: "power1",
      scrollTrigger: {
        trigger: ".footer .special",
        start: "top 50%",
        end: "bottom 50%"
      }
    })

    gsap.from(".footer img",{
      scale: 0,
      duration: 1,
      delay: 1,
      opacity: 0,
      ease: "power1",
      scrollTrigger: {
        trigger: ".footer .special",
        start: "top 50%",
        end: "bottom 50%"
      }
    })

  })

  return (
    <footer className="footer">
        <h1 className='non-special'>I was</h1>
        <div className="d-flex justify-content-center align-items-center">
            <h1 className='special'>created</h1>
            <img src={footer1} alt="" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <img src={footer2} alt="" />
            <h1 className='non-special'>to create</h1>
        </div>
    </footer>
  )
}

export default Footer
