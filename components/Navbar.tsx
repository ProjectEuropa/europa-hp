'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home', jp: 'ホーム' },
        { href: '/about', label: 'About', jp: '概要' },
        { href: '/skill', label: 'Skill', jp: 'スキル' },
        { href: '/portfolio', label: 'Portfolio', jp: '実績' },
        { href: '/contact', label: 'Contact', jp: 'お問い合わせ' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-cyber-header/95 shadow-md py-2'
                    : 'bg-cyber-header py-5 shadow-[0_5px_15px_rgba(0,0,0,0.3)]'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-8">
                    {/* Mobile: flex-row with logo left, hamburger right / Desktop: flex-col centered */}
                    <div className="flex flex-row items-center justify-between md:flex-col md:items-center md:justify-center animate-header-appear">

                        {/* Logo */}
                        <div className="flex flex-col items-start md:items-center text-left md:text-center w-auto md:w-full mb-0 md:mb-2">
                            <div className="font-mono text-3xl md:text-5xl font-normal text-cyber-blue tracking-[4px] md:tracking-[6px] uppercase text-shadow-[0_0_12px_#26dafd] mb-1 md:mb-2 h-auto md:h-[60px] leading-normal md:leading-[60px] animate-typing overflow-hidden whitespace-nowrap block">
                                EUROPA
                            </div>
                            <div className="font-sans text-xs md:text-base font-light text-foreground tracking-[1px] md:tracking-[2px] uppercase opacity-80 h-auto md:h-5 leading-normal md:leading-5 animate-typing overflow-hidden whitespace-nowrap block delay-500">
                                Exploration Mission Interface
                            </div>
                        </div>

                        {/* Mobile Menu Button - now in flex flow */}
                        <button
                            className="md:hidden text-cyber-blue p-2 border border-cyber-blue/40 rounded shadow-[0_0_8px_rgba(38,218,253,0.3)] hover:shadow-[0_0_12px_rgba(38,218,253,0.5)] transition-shadow min-w-[44px] min-h-[44px] flex items-center justify-center"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            <span className="text-2xl">☰</span>
                        </button>

                        {/* Separator Line - hidden on mobile */}
                        <div className="hidden md:block w-4/5 h-[1px] bg-gradient-to-r from-transparent via-cyber-blue to-transparent my-3 shadow-[0_0_10px_#26dafd] animate-line-appear" />

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex justify-center mt-2 space-x-4">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative group flex flex-col items-center px-4 py-2 transition-all duration-300 ${pathname === link.href ? 'text-cyber-blue' : 'text-foreground hover:text-cyber-blue'
                                        }`}
                                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                                >
                                    <span className="font-mono text-[13px] tracking-[2px] uppercase">{link.label}</span>
                                    <span className="text-[9px] tracking-[1px] opacity-70 group-hover:opacity-100">{link.jp}</span>

                                    {/* Brackets Effect */}
                                    <span className={`absolute left-0 top-2 opacity-0 transition-opacity duration-300 text-cyber-blue ${pathname === link.href ? 'opacity-100' : 'group-hover:opacity-100'}`}>[</span>
                                    <span className={`absolute right-0 top-2 opacity-0 transition-opacity duration-300 text-cyber-blue ${pathname === link.href ? 'opacity-100' : 'group-hover:opacity-100'}`}>]</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            {mobileMenuOpen && (
                <nav className="fixed inset-0 z-[60] bg-cyber-black/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 animate-frame-appear">
                    <button
                        className="absolute top-5 right-5 text-white text-3xl"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        &times;
                    </button>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex flex-col items-center text-lg ${pathname === link.href ? 'text-cyber-blue' : 'text-foreground'}`}
                        >
                            <span className="font-mono tracking-widest">{link.label}</span>
                            <span className="text-xs opacity-70">{link.jp}</span>
                        </Link>
                    ))}
                </nav>
            )}
        </>
    );
}
