"use client";

import { FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  open: boolean;
  onClose: () => void;
};

function GoogleMark() {
  return (
    <svg className="lawx-auth-provider-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-1.99 3.02v2.51h3.23c1.89-1.74 2.98-4.31 2.98-7.38Z" />
      <path fill="#34A853" d="M12 22c2.7 0 4.96-.89 6.62-2.4l-3.23-2.51c-.9.6-2.05.96-3.39.96-2.6 0-4.8-1.76-5.59-4.12H3.08v2.59A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.41 13.93A6.01 6.01 0 0 1 6.1 12c0-.67.12-1.32.31-1.93V7.48H3.08A10 10 0 0 0 2 12c0 1.61.39 3.14 1.08 4.52l3.33-2.59Z" />
      <path fill="#EA4335" d="M12 5.95c1.47 0 2.79.51 3.83 1.5l2.87-2.87C16.95 2.95 14.7 2 12 2a10 10 0 0 0-8.92 5.48l3.33 2.59C7.2 7.71 9.4 5.95 12 5.95Z" />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg className="lawx-auth-provider-icon apple" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M16.7 12.3c0-2.2 1.8-3.3 1.9-3.4a4.1 4.1 0 0 0-3.2-1.7c-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8A4.5 4.5 0 0 0 5.2 9.5c-1.6 2.8-.4 7 1.1 9.2.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.7-.7 3.2-.7s1.9.7 3.2.7c1.3 0 2.2-1.2 2.9-2.3a10 10 0 0 0 1.3-2.7 4 4 0 0 1-3.1-3.7ZM14.5 5.8A4.1 4.1 0 0 0 15.4 3a4.1 4.1 0 0 0-2.7 1.4 3.9 3.9 0 0 0-1 2.7 3.4 3.4 0 0 0 2.8-1.3Z" />
    </svg>
  );
}

function FacebookMark() {
  return (
    <svg className="lawx-auth-provider-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path fill="#fff" d="M13.5 20v-7h2.35l.35-2.74h-2.7V8.51c0-.79.22-1.33 1.36-1.33h1.45V4.73c-.25-.03-1.11-.11-2.11-.11-2.09 0-3.52 1.28-3.52 3.62v2.02H8.32V13h2.36v7h2.82Z" />
    </svg>
  );
}

export function LoginModal({ open, onClose }: Props) {
  const router = useRouter();
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.documentElement.classList.add("lawx-auth-open");
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.classList.remove("lawx-auth-open");
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.width = previous.width;
      body.style.overflow = previous.overflow;
      window.removeEventListener("keydown", onKeyDown);
      window.scrollTo(0, scrollY);
    };
  }, [open, onClose]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
      <button
        type="button"
        className={`lawx-auth-backdrop ${open ? "active" : ""}`}
        aria-label="Close login"
        onClick={onClose}
      />

      <section
        className={`lawx-auth-modal ${open ? "active" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lawx-login-title"
        aria-hidden={!open}
        data-lenis-prevent
      >
        <button type="button" className="lawx-auth-close" onClick={onClose} aria-label="Close login">
          ×
        </button>

        <h2 id="lawx-login-title">Log in or sign up</h2>

        <div className="lawx-auth-socials">
          <button type="button" className="lawx-auth-social-button">
            <GoogleMark />
            <span>Continue with Google</span>
          </button>

          <button type="button" className="lawx-auth-social-button">
            <AppleMark />
            <span>Continue with Apple</span>
          </button>

          <button type="button" className="lawx-auth-social-button">
            <FacebookMark />
            <span>Continue with Facebook</span>
          </button>
        </div>

        <div className="lawx-auth-divider"><span>OR</span></div>

        <form className="lawx-auth-form" onSubmit={submit}>
          <label className="lawx-auth-field">
            <span>Email</span>
            <div>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16v12H4zM4 7l8 6 8-6" />
              </svg>
              <input type="email" aria-label="Email" autoComplete="email" autoFocus={open} />
            </div>
          </label>

          <button type="submit" className="lawx-auth-submit">Continue</button>
        </form>

        <label className="lawx-auth-consent">
          <input type="checkbox" defaultChecked />
          <span>
            I agree to the <button type="button">Terms of Use</button> &amp; <button type="button">Privacy Policy</button>
          </span>
        </label>
      </section>
    </>
  );
}
