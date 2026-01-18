"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage("Please fill in all fields");
            setStatus("error");
            return;
        }

        if (!validateEmail(formData.email)) {
            setErrorMessage("Please enter a valid email address");
            setStatus("error");
            return;
        }

        setStatus("submitting");
        setErrorMessage("");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (status === "error") setStatus("idle");
    };

    return (
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                        placeholder="eg.., name@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 resize-none"
                        placeholder="Type your message here. . ."
                    />
                </div>

                {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                        <AlertCircle className="w-4 h-4" />
                        {errorMessage}
                    </div>
                )}

                {status === "success" && (
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                        <CheckCircle className="w-4 h-4" />
                        Message sent successfully!
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${status === "success"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gradient-primary hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-primary-500/25"
                        } disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed`}
                >
                    {status === "submitting" ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : status === "success" ? (
                        <>
                            <CheckCircle className="w-5 h-5" />
                            Sent
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
