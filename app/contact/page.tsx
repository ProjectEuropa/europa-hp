'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CyberCard from '@/components/ui/CyberCard';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ContactPage() {
    const router = useRouter();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        file: null as File | null,
    });
    const [showConfirm, setShowConfirm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormState(prev => ({ ...prev, file: e.target.files![0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowConfirm(true);
    };

    const submitToNetlify = async () => {
        setIsSubmitting(true);
        setSubmitError(null);
        try {
            const realForm = document.getElementById('contactForm') as HTMLFormElement;
            const formData = new FormData(realForm);
            const response = await fetch('/contact', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) throw new Error('送信に失敗しました');
            router.push('/contact/success');
        } catch (error) {
            setSubmitError(error instanceof Error ? error.message : '送信中にエラーが発生しました');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">

            <section className="mb-12">
                <CyberCard title="Contact Database">
                    <div className="flex flex-col items-center text-center">
                        <div className="relative inline-block mb-4 md:mb-8 px-6 md:px-0">
                            <span className="hidden md:block absolute top-0 -left-8 text-cyber-blue font-mono text-4xl animate-blink">&gt;</span>
                            <h1 className="text-lg sm:text-xl md:text-4xl font-bold text-cyber-blue tracking-wider font-mono md:animate-typing md:overflow-hidden md:whitespace-nowrap md:border-r-4 md:border-cyber-blue md:pr-1">
                                Contact Us
                            </h1>
                        </div>
                        <p className="text-sm md:text-base text-cyber-light opacity-80 mb-6 font-mono border-b border-cyber-blue/30 pb-2 inline-block">お問い合わせ</p>
                        <p className="leading-relaxed text-foreground/90 max-w-3xl mx-auto">
                            お問い合わせはこちらのフォームからお気軽にどうぞ。ご質問、ご相談など、お待ちしております。
                        </p>
                    </div>
                </CyberCard>
            </section>

            <section className="mb-12">
                <CyberCard title="Message Transmission">
                    <SectionTitle title="Send a Message" subtitle="メッセージを送信" />

                    <form
                        id="contactForm"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        action="/contact/success"
                        encType="multipart/form-data"
                        onSubmit={handleSubmit}
                        className="space-y-6 max-w-2xl mx-auto"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="hidden">
                            <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
                        </p>

                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-cyber-blue font-mono text-sm tracking-wider">
                                NAME <span className="text-xs opacity-70 ml-2">お名前</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="お名前を入力してください"
                                className="w-full bg-cyber-black/50 border border-cyber-blue/30 rounded p-3 text-foreground focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(38,218,253,0.3)] outline-none transition-all duration-300 placeholder:text-gray-600"
                                onChange={handleChange}
                                value={formState.name}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-cyber-blue font-mono text-sm tracking-wider">
                                EMAIL <span className="text-xs opacity-70 ml-2">メールアドレス</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="example@email.com"
                                className="w-full bg-cyber-black/50 border border-cyber-blue/30 rounded p-3 text-foreground focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(38,218,253,0.3)] outline-none transition-all duration-300 placeholder:text-gray-600"
                                onChange={handleChange}
                                value={formState.email}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-cyber-blue font-mono text-sm tracking-wider">
                                MESSAGE <span className="text-xs opacity-70 ml-2">メッセージ</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="お問い合わせ内容をご記入ください"
                                rows={6}
                                className="w-full bg-cyber-black/50 border border-cyber-blue/30 rounded p-3 text-foreground focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(38,218,253,0.3)] outline-none transition-all duration-300 placeholder:text-gray-600 resize-y"
                                onChange={handleChange}
                                value={formState.message}
                            ></textarea>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="file" className="block text-cyber-blue font-mono text-sm tracking-wider">
                                FILE UPLOAD <span className="text-xs opacity-70 ml-2">ファイル添付</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                <label htmlFor="file" className="inline-block px-6 py-2 bg-cyber-blue/10 border border-cyber-blue/50 text-cyber-blue cursor-pointer hover:bg-cyber-blue hover:text-cyber-black transition-all duration-300 text-sm font-mono tracking-wider">
                                    SELECT FILE
                                </label>
                                <span className="ml-4 text-sm text-foreground/70 font-mono">
                                    {formState.file ? formState.file.name : "No file selected"}
                                </span>
                            </div>
                        </div>

                        <div className="pt-4 text-center">
                            <button
                                type="submit"
                                className="inline-block px-10 py-3 bg-cyber-blue/20 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-black transition-all duration-300 font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(38,218,253,0.2)] hover:shadow-[0_0_30px_rgba(38,218,253,0.6)]"
                            >
                                <span className="mr-2">&gt;</span> SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </CyberCard>
            </section>

            {/* Confirmation Modal */}
            {showConfirm && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
                    <div className="w-full max-w-lg mx-4">
                        <CyberCard title="CONFIRM TRANSMISSION">
                            <div className="space-y-6">
                                <h3 className="text-lg font-bold text-cyber-blue text-center mb-4">以下の内容で送信します。確認してください：</h3>

                                <div className="space-y-4 border-t border-b border-cyber-blue/30 py-4 max-h-[60vh] overflow-y-auto">
                                    <div className="grid grid-cols-[100px_1fr] gap-4">
                                        <span className="text-cyber-blue font-mono text-sm">NAME:</span>
                                        <div className="text-foreground text-sm break-words">{formState.name}</div>
                                    </div>
                                    <div className="grid grid-cols-[100px_1fr] gap-4">
                                        <span className="text-cyber-blue font-mono text-sm">EMAIL:</span>
                                        <div className="text-foreground text-sm break-all">{formState.email}</div>
                                    </div>
                                    <div className="grid grid-cols-[100px_1fr] gap-4">
                                        <span className="text-cyber-blue font-mono text-sm">MESSAGE:</span>
                                        <div className="text-foreground text-sm whitespace-pre-wrap break-words max-h-40 overflow-y-auto custom-scrollbar">{formState.message}</div>
                                    </div>
                                    <div className="grid grid-cols-[100px_1fr] gap-4">
                                        <span className="text-cyber-blue font-mono text-sm">FILE:</span>
                                        <div className="text-foreground text-sm break-words">{formState.file ? formState.file.name : "None"}</div>
                                    </div>
                                </div>

                                {submitError && (
                                    <div className="text-red-500 text-sm text-center font-mono border border-red-500/50 bg-red-500/10 p-3 rounded">
                                        {submitError}
                                    </div>
                                )}

                                <div className="flex justify-center gap-6 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirm(false)}
                                        disabled={isSubmitting}
                                        className="px-6 py-2 border border-gray-600 text-gray-400 hover:border-white hover:text-white transition-all duration-300 font-mono text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        CANCEL
                                    </button>
                                    <button
                                        type="button"
                                        onClick={submitToNetlify}
                                        disabled={isSubmitting}
                                        className="px-6 py-2 bg-cyber-blue/20 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-black transition-all duration-300 font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(38,218,253,0.3)] text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="mr-2">&gt;</span> {isSubmitting ? 'TRANSMITTING...' : 'SEND'}
                                    </button>
                                </div>
                            </div>
                        </CyberCard>
                    </div>
                </div>
            )}

        </div>
    );
}
