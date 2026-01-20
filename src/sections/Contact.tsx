import { Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_5mbyekn",
                "template_a6wh8kz",
                formRef.current,
                "tVNc4JmmPklOaGOw-"
            )
            .then(() => {
                alert("Message sent successfully!");
                formRef.current?.reset();
            })
            .catch(() => {
                alert("Failed to send message.");
            });
    };

    return (
        <section className="min-h-screen py-20 bg-gray-50 dark:bg-slate-900 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden shadow-2xl">
                    {/* LEFT SIDE - FULL HEIGHT PHOTO SECTION */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 to-slate-900 dark:from-slate-900 dark:to-black p-8 lg:p-12 relative">
                        {/* Photo Container */}
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>

                                <div className="mb-8">
                                    <div className=" bg-white relative h-64 lg:h-96 w-full rounded-xl overflow-hidden border-4 border-white/20 shadow-2xl dark:bg-slate-900">
                                        <img
                                            src="/logo.png"
                                            alt="Sundar Chhetri"
                                            className="absolute inset-0 w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_1280.jpg";
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-emerald-300">Email</p>
                                            <a
                                                href="mailto:sundarchhetri@example.com"
                                                className="text-white hover:text-emerald-300 transition-colors"
                                            >
                                                sundarchhetri@example.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-emerald-300">Location</p>
                                            <p className="text-white">Myagdi, Nepal</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-emerald-300">Phone</p>
                                            <a
                                                href="tel:+9779800000000"
                                                className="text-white hover:text-emerald-300 transition-colors"
                                            >
                                                +977-98XXXXXXXX
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social/Footer Note */}
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-emerald-200/80 text-sm text-center">
                                    Typically respond within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - FORM SECTION */}
                    <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-8 lg:p-12">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="max-w-lg mx-auto space-y-8"
                        >
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 text-center dark:text-white mb-3">
                                    Send a Message
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Fill out the form below and I'll get back to you as soon as possible.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="form_name"
                                        placeholder="John Doe"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="reply_to"
                                        placeholder="john@example.com"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Tell me about your project..."
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="group flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                                >
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    Send Message
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;