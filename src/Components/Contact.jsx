import { Linkedin, Mail, PhoneCall, Send } from "lucide-react";
import { useState } from "react";
import callImg from "../assets/call.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1d12d97d-209d-4a42-a2ea-065bda7ffc28"); // your Web3Forms access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Message Sent Successfully ✔" : "Something went wrong ✖");
    if (data.success) event.target.reset();
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* LEFT: Image */}
          <div className="flex items-center justify-center">
            <img
              src={callImg}
              alt="call"
              className="left-image w-80 h-80 md:w-[420px] md:h-[420px] rounded-full shadow-2xl object-cover"
            />
          </div>

          {/* RIGHT: Contact Details + Form */}
          <div className="p-8">
            <div className="contact-card p-8 rounded-3xl bg-white/5 backdrop-blur-md">
              <h2 className="text-3xl font-bold text-white mb-4">
                Get In <span className="text-primary">Touch</span>
              </h2>

              <div className="space-y-5 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <a href="mailto:haniisenthil@gmail.com" className="text-white/90 hover:text-white">
                    haniisenthil@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <PhoneCall className="h-5 w-5 text-primary" />
                  </div>
                  <a href="tel:+9345611323" className="text-white/90 hover:text-white">
                    +91 9345611323
                  </a>
                </div>

                <div>
                  <a
                    href="https://www.linkedin.com/in/hanisha-senthilkumar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white"
                  >
                    <Linkedin size={22} /> Connect on LinkedIn
                  </a>
                </div>
              </div>

              {/* FORM — Web3Forms */}
              <form onSubmit={onSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="form-control"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="form-control"
                />
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your message"
                  className="form-control resize-none"
                ></textarea>

                <button type="submit" className="submit-btn flex items-center gap-2">
                  Send Message <Send size={14} />
                </button>

                <p className="text-white/70 text-sm h-4 mt-1">{result}</p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
