"use client";
import "./styles.css";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/forgot-password", label: "Forgot Password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [input ,setInput] = React.useState("");
  const pathname = usePathname();

  return (
    <div className="auth-layout">
      <nav>
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");

          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? "active-link" : "default-link"}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <main>{children}</main>

      <div>
        <input value={input} onChange={e=> setInput(e.target.value)} />
      </div>
    </div>
  );
}
