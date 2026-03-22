'use client';

import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
];

function LogoMark() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 28 28"
      fill="none"
      aria-label="VizaiLabs logo mark"
    >
      <rect width="28" height="28" rx="7" fill="#4F6EF7" fillOpacity="0.15" />
      <path
        d="M7 8L13 20L14 17.5L15 20L21 8H18L14 17L10 8H7Z"
        fill="#4F6EF7"
      />
      <path
        d="M14 17.5L15 20L21 8H18L14 17.5Z"
        fill="#7B96FF"
        fillOpacity="0.6"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-30"
        animate={{
          backgroundColor: scrolled
            ? 'rgba(11, 15, 26, 0.85)'
            : 'rgba(11, 15, 26, 0)',
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'blur(0px)',
          borderBottomColor: scrolled
            ? 'rgba(79, 110, 247, 0.12)'
            : 'rgba(79, 110, 247, 0)',
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
        }}
      >
        <nav
          className="mx-auto flex items-center justify-between px-6 py-4 max-w-7xl"
          aria-label="Main navigation"
        >
          {/* ── Left: Brand ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="DokyDoc by VizaiLabs — home"
          >
            <LogoMark />

            <span
              className="font-semibold text-[15px] tracking-tight transition-colors duration-150"
              style={{ color: '#F1F5F9' }}
            >
              VizaiLabs
            </span>

            {/* Separator */}
            <span
              className="w-px h-4 shrink-0"
              style={{ background: 'rgba(241, 245, 249, 0.2)' }}
              aria-hidden="true"
            />

            {/* Product name */}
            <span
              className="font-semibold text-[15px] tracking-tight"
              style={{ color: '#4F6EF7' }}
            >
              DokyDoc
            </span>
          </Link>

          {/* ── Center: Desktop nav links ── */}
          <ul
            className="hidden md:flex items-center gap-1"
            role="list"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150 inline-block"
                  style={{ color: 'rgba(241, 245, 249, 0.65)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#F1F5F9';
                    e.currentTarget.style.background = 'rgba(79, 110, 247, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(241, 245, 249, 0.65)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Right: CTA buttons ── */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Log In — ghost */}
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150"
              style={{
                color: 'rgba(241, 245, 249, 0.75)',
                background: 'transparent',
                border: '1px solid rgba(241, 245, 249, 0.12)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F1F5F9';
                e.currentTarget.style.borderColor = 'rgba(241, 245, 249, 0.25)';
                e.currentTarget.style.background = 'rgba(241, 245, 249, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(241, 245, 249, 0.75)';
                e.currentTarget.style.borderColor = 'rgba(241, 245, 249, 0.12)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Log In
            </Link>

            {/* Start Free Trial — filled gradient */}
            <Link
              href="/signup"
              className="px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200"
              style={{
                color: '#F1F5F9',
                background: 'linear-gradient(135deg, #4F6EF7 0%, #7B96FF 100%)',
                boxShadow: '0 2px 16px rgba(79, 110, 247, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(79, 110, 247, 0.5)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(79, 110, 247, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Start Free Trial
            </Link>
          </div>

          {/* ── Mobile: Hamburger ── */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-150"
            style={{ background: 'rgba(241, 245, 249, 0.06)' }}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgba(241, 245, 249, 0.1)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'rgba(241, 245, 249, 0.06)')
            }
          >
            <Menu size={20} color="#F1F5F9" />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu rendered outside header to avoid stacking-context issues */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
