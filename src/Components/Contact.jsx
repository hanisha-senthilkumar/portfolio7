import { Linkedin, Mail, PhoneCall, Send } from "lucide-react";
import ContactImg from "../assets/contact3.png"; 

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto border border-primary/40 rounded-3xl p-10 bg-black/60 shadow-[0_0_25px_rgba(139,93,246,0.35)] hover:shadow-[0_0_40px_rgba(139,93,246,0.6)] transition-all duration-500">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={ContactImg}
              alt="contact"
              className="w-80 md:w-[380px] animate-bounce-slow drop-shadow-[0_0_15px_rgba(139,93,246,0.5)]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary text-center md:text-left">
              Get In <span className="text-primary">Touch</span>
            </h2>
            

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <a href="mailto:haniisenthil@gmail.com" className="hover:text-primary transition-colors">
                  haniisenthil@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <PhoneCall className="h-6 w-6 text-primary" />
                </div>
                <a href="tel:+9345611323" className="hover:text-primary transition-colors">
                  +91  9345611323
                </a>
              </div>

              <div className="pt-4">
                <a
                  href="https://www.linkedin.com/in/hanisha-senthilkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 hover:text-primary transition"
                >
                  <Linkedin size={30} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-md border border-primary/40 bg-black/40 focus:ring-2 focus:ring-primary outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-md border border-primary/40 bg-black/40 focus:ring-2 focus:ring-primary outline-none"
              />
              <textarea
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-md border border-primary/40 bg-black/40 focus:ring-2 focus:ring-primary resize-none outline-none"
              />

              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.6)] hover:scale-105 active:scale-95 mx-auto md:mx-0"
              >
                Send <Send size={16}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
