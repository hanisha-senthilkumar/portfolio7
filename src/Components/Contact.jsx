import { Linkedin, Mail, PhoneCall, Send, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import dail from "@/assets/call.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);
  const cardRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "1d12d97d-209d-4a42-a2ea-065bda7ffc28");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setSuccess(true);
      setResult("Message Sent Successfully ✔");
      event.target.reset();
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setResult("Something went wrong ✖");
    }
  };

  // 3D Tilt Effect
  useEffect(() => {
    const card = cardRef.current;
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;
      const rotateX = ((y - midY) / midY) * 8;
      const rotateY = ((x - midX) / midX) * 8;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const handleMouseLeave = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
    };
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Particle Sparks */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="particle" style={{top:'10%', left:'20%'}}></div>
        <div className="particle" style={{top:'40%', left:'80%'}}></div>
        <div className="particle" style={{top:'70%', left:'10%'}}></div>
        <div className="particle" style={{top:'30%', left:'50%'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="flex items-center justify-center">
              <img
                src={dail}
                alt="Call" 
                className="w-72 h-72 md:w-[420px] md:h-[420px] rounded-full object-cover shadow-sm hover:scale-105 transition"
              />
          </div>

          {/* RIGHT FORM */}
          <div ref={cardRef} className="rounded-3xl">
            <div className="contact-card p-8 rounded-3xl bg-transparent shadow-none border border-transparent transition hover:border-blue-400/50">
              {/* Gradient Animated Heading */}
              <h2 className="text-4xl font-bold mb-6 text-white">
                Get In <span className="text-blue-400">Touch</span>
              </h2>

              {/* Contact Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-blue-500/10">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <a href="mailto:haniisenthil@gmail.com" className="text-white/90 hover:text-white">
                    haniisenthil@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-blue-500/10">
                    <PhoneCall className="h-5 w-5 text-blue-400" />
                  </div>
                  <a href="tel:+9345611323" className="text-white/90 hover:text-white">
                    +91 9345611323
                  </a>
                </div>

                <a
                  href="https://www.linkedin.com/in/hanisha-senthilkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white"
                >
                  <Linkedin size={22} /> Connect on LinkedIn
                </a>
              </div>

              {/* FORM */}
              <form onSubmit={onSubmit} className="space-y-4 relative">
                <input type="text" name="name" required placeholder="Your name" className="form-control" />
                <input type="email" name="email" required placeholder="Your email" className="form-control" />
                <textarea name="message" required rows={5} placeholder="Your message" className="form-control resize-none"></textarea>

                <button
                  type="submit"
                  className={`submit-btn flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 border-blue-500/40`}
                >
                  {success ? (
                    <>
                      <CheckCircle size={18} /> Sent
                    </>
                  ) : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
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
