import { useGSAP } from "@gsap/react"
import gsap from "gsap"
gsap.registerPlugin(useGSAP);

const Header = () => {
    const tl = gsap.timeline()
    useGSAP(() => {
        tl.from(".header .container h2", {
            opacity: 0,
            ease: "power1.inOut",
            x: -100,
            duration: 1,
        })

        tl.from(".header .container h1", {
            opacity: 0,
            ease: "power1.inOut",
            x: 100,
            duration: 0.8,
        })

        tl.from(".header .container h6", {
            opacity: 0,
            ease: "power2.Out",
            y: 100,
            duration: 0.6,
        })
    })

    return (
        <section className="header">
            <div className="container">
                <h2>WALI ZAFRI</h2>
                <h1>PORTFOLIO</h1>
                <h6>Frontend Web Developer</h6>
            </div>
        </section>
    )
}

export default Header
