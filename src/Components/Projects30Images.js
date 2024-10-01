import one from '../Images/1.png';
import two from '../Images/2.png';
import three from '../Images/3.png';
import four from '../Images/4.png';
import five from '../Images/5.png';
import six from '../Images/6.png';
import seven from '../Images/7.png';
import eight from '../Images/8.png';
import nine from '../Images/9.png';
import ten from '../Images/10.png';
import eleven from '../Images/11.png';
import twelve from '../Images/12.png';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

const Projects30Images = () => {


    useGSAP(()=>{
        gsap.from(".MiniProject a", {
          y:500,
          stagger: 0.2,
          scale: 0,
          opacity: 0,
          ease: "power2",
          scrollTrigger: {
            trigger: ".MiniProject a",
            start: "2500",
          }
        })
      })

    const arrayOfObjects = [
        {Image: one, URL: "https://password-generator-neon-nu-13.vercel.app/"},
        {Image: two, URL: "https://weather-widget-app-snowy.vercel.app/"},
        {Image: three, URL: "https://digital-clock-app-pi.vercel.app/"},
        {Image: four, URL: "https://simple-calculator-app-eight.vercel.app/"},
        {Image: five, URL: "https://random-joke-generator-app-two.vercel.app/"},
        {Image: six, URL: "https://unit-converter-app-weld.vercel.app/"},
        {Image: seven, URL: "https://bmi-calculator-nu-nine.vercel.app/"},
        {Image: eight, URL: "https://expense-tracker-app-teal-ten.vercel.app/"},
        {Image: nine, URL: "https://time-art-three.vercel.app/"},
        {Image: ten, URL: "https://birthday-wish-app-pied.vercel.app/"},
        {Image: eleven, URL: "https://html-previewer-app.vercel.app/"},
        {Image: twelve, URL: "https://color-picker-app-iota.vercel.app/"},
    ];

    return (
        <section className="MiniProject">
            {arrayOfObjects.map((arr, index) => (
                <a href={arr.URL} key={index} target="_blank" rel="noopener noreferrer">
                    <img src={arr.Image} alt={`Project ${index + 1}`} />
                </a>
            ))}
        </section>
    );
};

export default Projects30Images;
