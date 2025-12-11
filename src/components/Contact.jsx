import React, { useRef, useState } from 'react';
import { Mail, Linkedin, Github, User, MessageSquare, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSubmitStatus('success');
                setIsSubmitting(false);
                formRef.current.reset();
                setTimeout(() => setSubmitStatus(null), 5000);
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error');
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-16 md:py-20 px-4 bg-gradient-to-b from-transparent to-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 flex items-center justify-center gap-3">
                    <span className="text-cyan-500">10.</span> Let's Connect
                </h2>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I'm looking for internships or junior developer roles. I'm eager to learn and contribute to your team.
                        </p>
                        <div className="space-y-4">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=developerohann@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg text-[#EA4335] group-hover:bg-white/10 transition-colors shrink-0"><Mail size={20} /></div>
                                <span className="text-sm xs:text-base break-all">developerohann@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/iamrohannpatel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg text-[#0077B5] group-hover:bg-white/10 transition-colors shrink-0"><Linkedin size={20} /></div>
                                <span className="text-sm xs:text-base break-all">www.linkedin.com/in/iamrohannpatel</span>
                            </a>
                            <a href="https://github.com/iamrohannpatel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg text-white group-hover:bg-white/10 transition-colors shrink-0"><Github size={20} /></div>
                                <span className="text-sm xs:text-base break-all">www.github.com/iamrohannpatel</span>
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-4 md:p-8 rounded-2xl border border-white/10 backdrop-blur-md relative">
                        <div className="relative group">
                            <User className="absolute left-4 top-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
                            <input
                                type="text"
                                name="user_name"
                                required
                                placeholder="Name"
                                className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                            />
                        </div>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
                            <input
                                type="email"
                                name="user_email"
                                required
                                placeholder="Email"
                                className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                            />
                        </div>
                        <div className="relative group">
                            <MessageSquare className="absolute left-4 top-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
                            <textarea
                                name="message"
                                required
                                rows="4"
                                placeholder="Message"
                                className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all resize-none"
                            />
                        </div>

                        <button
                            disabled={isSubmitting}
                            className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-600/50 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 group"
                        >
                            {isSubmitting ? (
                                <>Sending... <Loader2 size={18} className="animate-spin" /></>
                            ) : (
                                <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>

                        {submitStatus === 'success' && (
                            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-center p-6 animate-fade-in-up">
                                <CheckCircle2 size={48} className="text-green-500 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon.</p>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="absolute bottom-4 left-0 right-0 mx-auto w-max bg-red-500/90 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                                <AlertCircle size={16} />
                                Failed to send message. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
