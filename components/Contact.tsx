"use client"

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner"
import { formFields } from "@/constants/config"

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current!,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
        } finally {
            setLoading(false);
            toast.success("Message sent successfully. I&apos;ll get back to you soon!")
        }
    };

    return (
        <section
            id="contact"
            className="min-h-screen w-full px-8 mt-24 pt-12 flex flex-col items-center justify-center"
        >
            <h3 className="mb-6 text-center text-3xl lg:text-5xl font-semibold bg-gradient-to-b from-white to-[var(--col-4)] text-transparent bg-clip-text uppercase">Get in Touch</h3>
            <p className="text-center mb-12 text-base md:text-lg lg:text-xl">Wanna say <span className="text-[var(--col-7)]">Hello</span> or build something <span className="text-[var(--col-6)]">Awesome</span>?</p>
            <div className="mb-20 w-full md:w-3/4 lg:w-1/2 bg-[var(--col-12)] rounded-xl overflow-hidden p-4 md:p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    {formFields.map((field) =>
                    (<div key={field.id} className="form-group">
                        <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            value={form[field.id as keyof typeof form]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            required
                            className="w-full mb-4 md:mb-6 px-4 py-2 bg-[var(--col-13)] rounded-lg text-base md:text-md border border-[var(--col-14)] focus:outline-none"
                        />
                    </div>))}
                    <div className="form-group">
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            className="w-full min-h-[120px] mb-2 md:mb-6 px-4 py-2 bg-[var(--col-13)] rounded-lg text-base md:text-md border border-[var(--col-14)] focus:outline-none resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        id="submitBtn"
                        disabled={loading}
                        className="w-full font-bold p-2 bg-[var(--col-7)] text-[var(--foreground)] rounded-lg text-base md:text-md cursor-pointer transition-all duration-300 hover:bg-[var(--col-6)] hover:text-[var(--col-12)]"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact