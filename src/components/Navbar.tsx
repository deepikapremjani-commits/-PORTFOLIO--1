'use client';

import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
            style={{
                background: scrolled
                    ? 'rgba(18, 18, 18, 0.95)'
                    : 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
                backdropFilter: 'blur(10px)',
                borderBottom: scrolled ? '1px solid rgba(198,164,126,0.2)' : 'none',
            }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">

                {/* Logo */}
                <a href="#home" className="text-white font-bold text-lg tracking-widest uppercase">
                    Deepika <span style={{ color: '#c6a47e' }}>Premjani</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (

                        key = { link.name }
              href = { link.href }
              className = "text-white/70 hover:text-white text-sm tracking-widest uppercase transition-colors duration-300"
              style = {{ fontWeight: 500 }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c6a47e')}
                    onMouseLeave={e => (e.currentTarget.style.color = '')}
            >
                    {link.name}
                </a>
          ))}
            </div>

            {/* Hire Me Button */}

            href="#contact"
            className="hidden md:block text-sm font-bold tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-300"
            style={{ border: '1px solid #c6a47e', color: '#c6a47e' }}
            onMouseEnter={e => {
                e.currentTarget.style.background = '#c6a47e';
                e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#c6a47e';
            }}
        >
            Hire Me
        </a>

        {/* Mobile Hamburger */ }
    <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
    >
        <span className="w-6 h-0.5 bg-white block transition-all"></span>
        <span className="w-6 h-0.5 bg-white block transition-all"></span>
        <span className="w-6 h-0.5 bg-white block transition-all"></span>
    </button>
      </div >

    {/* Mobile Menu */ }
{
    menuOpen && (
        <div className="md:hidden bg-[#121212] border-t border-white/10 px-6 py-6 flex flex-col gap-6">
            {links.map((link) => (

                key = { link.name }
              href = { link.href }
              onClick = {() => setMenuOpen(false)}
            className="text-white/70 text-sm tracking-widest uppercase"
            style={{ color: '#c6a47e' }}
            >
            {link.name}
        </a>
    ))
}

href = "#contact"
onClick = {() => setMenuOpen(false)}
className = "text-center text-sm font-bold tracking-widest uppercase px-6 py-3 rounded-full"
style = {{ border: '1px solid #c6a47e', color: '#c6a47e' }}
          >
    Hire Me
          </a >
        </div >
      )}
    </nav >
  );
};

export default Navbar;