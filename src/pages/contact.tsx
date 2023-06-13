import { FaPhone, FaWhatsapp, FaLocationArrow } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Contact = () => {

    return (
        <div className="my-16 sm:my-10">
            <div className="contact-me sm:grid-cols-1 sm:w-full md:m-0 md:container sm:container">
                <div className="contact-form sm:m-0 sm:row-start-2 sm:row-end-3">
                    <h1>Get in touch</h1>
                    <form>
                        <div className="group">
                            <input type="text" name="from_name" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Name</label>
                        </div>

                        <div className="group">
                            <input type="email" name="from_email" required />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Email</label>
                        </div>

                        <div className="group">
                            <textarea name="message" required ></textarea>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>message</label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="contact-info bg-dark-blue sm:gap-y-10">
                    <h1>Contact me</h1>
                    <div className="alt-contact">
                        <div className="contact-icon">
                            <FaLocationArrow style={{ fontSize: "22px", zIndex: "99999" }} />
                        </div>
                        <p> <strong>Address:</strong>  Lagos, Nigeria. </p>
                    </div>
                    <div className="alt-contact">
                        <div className="contact-icon">
                            <FaPhone style={{ fontSize: "22px" }} />
                        </div>
                        <p> <strong>Phone:</strong> +2348165960182 </p>
                    </div>
                    <div className="alt-contact">
                        <div className="contact-icon">
                            <SiGmail style={{ fontSize: "22px" }} />
                        </div>
                        <p> <strong>Email:</strong> mosesgeorge323287@gmail.com </p>
                    </div>
                    <div className="alt-contact">
                        <div className="contact-icon">
                            <FaWhatsapp style={{ fontSize: "22px" }} />
                        </div>
                        <p> <strong>Chat:</strong>  08165960182 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;