import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { z } from "zod";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {

  /* =========================
     Zod Schema
  ========================= */
  const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });

  /* =========================
     Refs & State
  ========================= */
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isSending, setIsSending] = useState(false);
  const hasName = formData.name.length > 0;
  const hasEmail = formData.email.length > 0;

  /* =========================
     Real-time Field Validation
  ========================= */
  const validateField = (field: keyof typeof formData, value: string) => {
    const tempData = { ...formData, [field]: value };
    const result = contactSchema.safeParse(tempData);

    if (result.success) return "";

    const fieldErrors = result.error.flatten().fieldErrors;
    return fieldErrors[field]?.[0] ?? "";
  };

  /* =========================
     Handle Change
  ========================= */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const field = name as keyof typeof formData;

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  /* =========================
     Handle Submit
  ========================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      toast.error("Please fix the highlighted errors");
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }

    setErrors({});
    setIsSending(true);

    const toastId = toast.loading("Sending message...");

    try {
      await emailjs.send(
        "service_5mbyekn",      // SERVICE ID
        "template_sd00vmd",     // TEMPLATE ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "tVNc4JmmPklOaGOw-"
      );

      toast.success("Message sent successfully 🚀", { id: toastId });
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error(error);
      toast.error("Failed to send message ❌", { id: toastId });

    } finally {
      setIsSending(false);
    }
  };

  /* =========================
     Contact Info
  ========================= */
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'john@example.com',
      link: 'mailto:john@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: null,
    },
  ];

  /* =========================
     RENDER
  ========================= */
  return (
    <section ref={ref} className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-card rounded-2xl">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
                <div className="relative">
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "var(--primary)" }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 py-4 rounded-lg bg-card text-card-foreground border-2 border-border focus:border-primary focus:outline-none"
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                  <label
                    htmlFor="name"
                    className={`absolute left-4 bg-card px-1 pointer-events-none transition-all duration-200
                      ${hasName ? "-top-2 text-xs text-primary" : "top-1/2 -translate-y-1/2 text-muted-foreground"}
                      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:translate-y-0`}
                  >
                    Your Name
                  </label>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}>
                <div className="relative">
                  <motion.input
                    whileFocus={{ scale: 1.02, borderColor: "var(--primary)" }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full px-4 py-6 rounded-lg bg-card text-card-foreground border-2 border-border focus:border-primary focus:outline-none"
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                  <label
                    htmlFor="email"
                    className={`absolute left-4 bg-card px-1 pointer-events-none transition-all duration-200
                      ${hasEmail ? "-top-2 text-xs text-primary" : "top-1/2 -translate-y-1/2 text-muted-foreground"}
                      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-focus:translate-y-0`}
                  >
                    Your Email
                  </label>
                </div>
              </motion.div>

              {/* Message */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }}>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02, borderColor: "var(--primary)" }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg bg-card text-card-foreground border-2 border-border focus:border-primary focus:outline-none resize-none"
                />
                {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </motion.div>

              {/* Submit */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium"
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-2xl font-bold mb-6 text-card-foreground"
              >
                Contact Information
              </motion.h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0"
                    >
                      <info.icon size={24} />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">{info.title}</h4>
                      {info.link ? (
                        <motion.a
                          whileHover={{ scale: 1.05, x: 5 }}
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </motion.a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="bg-primary rounded-2xl p-8 text-primary-foreground shadow-lg"
            >
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="text-2xl font-bold mb-4"
              >
                Let's Build Something Amazing
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.0 }}
                className="text-primary-foreground/80 leading-relaxed"
              >
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Let's connect and create something extraordinary together!
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
