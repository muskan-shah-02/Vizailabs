'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const menuVariants = {
  hidden: { opacity: 0, y: -16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut" as const,
      staggerChildren: 0.055,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: "easeIn" as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.22, ease: "easeOut" as const },
  },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mobile-menu-backdrop"
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(11, 15, 26, 0.6)', backdropFilter: 'blur(4px)' }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <motion.div
            key="mobile-menu-panel"
            className="fixed top-0 left-0 right-0 z-50 mx-4 mt-4 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(11, 15, 26, 0.96)',
              border: '1px solid rgba(79, 110, 247, 0.18)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(79,110,247,0.08)',
            }}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: '1px solid rgba(79, 110, 247, 0.12)' }}
            >
              {/* Logo */}
              <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  aria-label="VizaiLabs logo"
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
                <span className="font-semibold text-sm" style={{ color: '#F1F5F9' }}>
                  VizaiLabs
                </span>
                <span
                  className="text-xs font-medium px-1.5 py-0.5 rounded"
                  style={{
                    color: '#4F6EF7',
                    background: 'rgba(79, 110, 247, 0.12)',
                    border: '1px solid rgba(79, 110, 247, 0.2)',
                  }}
                >
                  DokyDoc
                </span>
              </Link>

              {/* Close button */}
              <button
                onClick={onClose}
                className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-150"
                style={{ background: 'rgba(241, 245, 249, 0.06)' }}
                aria-label="Close menu"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = 'rgba(241, 245, 249, 0.1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = 'rgba(241, 245, 249, 0.06)')
                }
              >
                <X size={18} color="#F1F5F9" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="px-4 py-4">
              <ul className="flex flex-col gap-1" role="list">
                {navLinks.map((link) => (
                  <motion.li key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-150 group"
                      style={{ color: 'rgba(241, 245, 249, 0.7)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#F1F5F9';
                        e.currentTarget.style.background = 'rgba(79, 110, 247, 0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(241, 245, 249, 0.7)';
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ background: '#4F6EF7', opacity: 0.5 }}
                        aria-hidden="true"
                      />
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="px-4 pb-5 pt-2 flex flex-col gap-3"
              style={{ borderTop: '1px solid rgba(79, 110, 247, 0.1)' }}
            >
              <Link
                href="/login"
                onClick={onClose}
                className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-medium transition-all duration-150"
                style={{
                  color: '#F1F5F9',
                  background: 'rgba(241, 245, 249, 0.06)',
                  border: '1px solid rgba(241, 245, 249, 0.1)',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = 'rgba(241, 245, 249, 0.1)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = 'rgba(241, 245, 249, 0.06)')
                }
              >
                Log In
              </Link>

              <Link
                href="/signup"
                onClick={onClose}
                className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  color: '#F1F5F9',
                  background: 'linear-gradient(135deg, #4F6EF7 0%, #7B96FF 100%)',
                  boxShadow: '0 4px 20px rgba(79, 110, 247, 0.35)',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = '0 6px 28px rgba(79, 110, 247, 0.5)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = '0 4px 20px rgba(79, 110, 247, 0.35)')
                }
              >
                Start Free Trial
              </Link>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
