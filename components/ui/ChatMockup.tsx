"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const MESSAGES: Message[] = [
  {
    role: "user",
    content: "Which requirements are not covered by any code component?",
  },
  {
    role: "assistant",
    content:
      "3 requirements from PRD-v2.pdf have no linked code components:\n\n• Payment retry logic (Section 4.2)\n• Session timeout handling (Section 6.1)\n• Multi-currency display (Section 8.3)\n\nSources: PRD-v2.pdf, codebase/src/payments, codebase/src/auth",
  },
  {
    role: "user",
    content: "How many concepts are in the ontology?",
  },
  {
    role: "assistant",
    content:
      "Your ontology currently contains 87 concepts across 12 domains, with 243 relationships mapped. 94% have been AI-validated.",
  },
];

export function ChatMockup() {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.3 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const showNext = () => {
      if (indexRef.current >= MESSAGES.length) return;
      const msg = MESSAGES[indexRef.current];
      if (msg.role === "assistant") setIsTyping(true);
      const delay = msg.role === "assistant" ? 1200 : 400;
      setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, msg]);
        indexRef.current += 1;
        if (indexRef.current < MESSAGES.length) {
          setTimeout(showNext, 800);
        }
      }, delay);
    };

    setTimeout(showNext, 500);
  }, [hasStarted]);

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden border border-white/10"
      style={{ background: "#111827" }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3 border-b border-white/10"
        style={{ background: "#0B0F1A" }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
          style={{ background: "linear-gradient(135deg, #4F6EF7, #7B96FF)" }}
        >
          A
        </div>
        <div>
          <p className="text-sm font-semibold text-white">AskyDoc</p>
          <p className="text-xs" style={{ color: "#64748B" }}>
            Your organization&apos;s AI assistant
          </p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
          <span className="text-xs" style={{ color: "#22C55E" }}>
            Online
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-4 min-h-[280px]">
        {visibleMessages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                style={{ background: "linear-gradient(135deg, #4F6EF7, #7B96FF)" }}
              >
                A
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-xl px-3 py-2 text-sm leading-relaxed whitespace-pre-line ${
                msg.role === "user"
                  ? "text-white"
                  : "text-[#F1F5F9]"
              }`}
              style={{
                background:
                  msg.role === "user"
                    ? "linear-gradient(135deg, #4F6EF7, #7B96FF)"
                    : "#1a2332",
                border: msg.role === "assistant" ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
              style={{ background: "linear-gradient(135deg, #4F6EF7, #7B96FF)" }}
            >
              A
            </div>
            <div
              className="rounded-xl px-4 py-3"
              style={{ background: "#1a2332", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                      background: "#4F6EF7",
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-4 pb-4">
        <div
          className="flex items-center gap-3 rounded-xl px-4 py-3 border border-white/10"
          style={{ background: "#0B0F1A" }}
        >
          <span className="text-sm flex-1" style={{ color: "#64748B" }}>
            Ask anything about your docs...
          </span>
          <button
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #4F6EF7, #7B96FF)" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
