const Contact = () => {

    console.log("Formspree Key:", process.env.FORMSPREE_KEY);

    return (
        <section className="contact">
            <div className="contact-description">
                <div className="description">
                    <h4>Wali Zafri</h4>
                    <h1>
                        talk <br /> with Me
                    </h1>
                    <div className="links">
                        <a target="_blank" rel="noreferrer" href="https://github.com/Waliii31">Github: Waliii31</a><br />
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/wali-zafri-profile/">Linkedin: Wali Zafri</a><br />
                        <a target="_blank" rel="noreferrer" href="waliizafri@gmail.com">Email: waliizafri@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <form action="https://formspree.io/f/xrbznjqj" method="POST" className="inputs">
                    <div className="row mb-3">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                aria-label="name"
                                name="name"
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Subject"
                                aria-label="subject"
                                name="subject"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Email"
                            name="email"
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            placeholder="How can i help you?"
                            className="form-control"
                            name="message"
                            id="exampleFormControlTextarea1"
                            rows="8"
                        ></textarea>
                    </div>
                    <button type="submit" className="send-button">Send Messge</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;