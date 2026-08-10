"use client";

import Image from "next/image";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { ServiceMegaMenu } from "./ServiceMegaMenu";

export function Header() {
  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [serviceQuery, setServiceQuery] =
    useState("");

  const [scrolled, setScrolled] =
    useState(false);

  const closeServices = useCallback(() => {
    setServicesOpen(false);
  }, []);

  const openServices = useCallback(
    (query = "") => {
      setServiceQuery(query);
      setServicesOpen(true);
    },
    []
  );

  useEffect(() => {
    const scroll = () =>
      setScrolled(window.scrollY > 30);

    const open = (event: Event) => {
      const custom =
        event as CustomEvent<{
          query?: string;
        }>;

      openServices(
        custom.detail?.query ?? ""
      );
    };

    scroll();

    window.addEventListener(
      "scroll",
      scroll,
      { passive: true }
    );

    window.addEventListener(
      "lawxygen:open-services",
      open
    );

    return () => {
      window.removeEventListener(
        "scroll",
        scroll
      );

      window.removeEventListener(
        "lawxygen:open-services",
        open
      );
    };
  }, [openServices]);

  return (
    <>
      <header
        className={`v3-header ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="v3-header-inner">
          <a
            href="#"
            className="v3-brand"
            aria-label="LAWXYGEN"
          >
            <Image
              src="/lawxygen-logo.png"
              alt="LAWXYGEN"
              width={180}
              height={100}
              priority
              className="v3-brand-image"
            />
          </a>

          <nav className="v3-desktop-nav">
            <button
              type="button"
              onClick={() =>
                openServices()
              }
            >
              Services
              <span>+</span>
            </button>

            <a href="#business">
              Business
            </a>

            <a href="#compliance">
              Compliance
            </a>

            <a href="#experts">
              Experts
            </a>

            <a href="#resources">
              Resources
            </a>
          </nav>

          <div className="v3-header-actions">
            <button
              type="button"
              className="v3-nav-search"
              onClick={() =>
                openServices()
              }
              aria-label="Search services"
            >
              ⌕
            </button>

            <a
              href="#login"
              className="v3-login"
            >
              Login
            </a>

            <a
              href="#contact"
              className="v3-consult"
            >
              Consult
              <span>↗</span>
            </a>

            <button
              type="button"
              className={`v3-mobile-toggle ${
                menuOpen ? "active" : ""
              }`}
              onClick={() =>
                setMenuOpen(
                  (current) => !current
                )
              }
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`v3-mobile-menu ${
          menuOpen ? "active" : ""
        }`}
      >
        <button
          type="button"
          onClick={() => {
            setMenuOpen(false);
            openServices();
          }}
        >
          <span>01</span>
          <strong>All Services</strong>
          <b>↗</b>
        </button>

        <a
          href="#business"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          <span>02</span>
          <strong>Business</strong>
          <b>↗</b>
        </a>

        <a
          href="#compliance"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          <span>03</span>
          <strong>Compliance</strong>
          <b>↗</b>
        </a>

        <a
          href="#experts"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          <span>04</span>
          <strong>Experts</strong>
          <b>↗</b>
        </a>

        <a href="#login">
          <span>05</span>
          <strong>Login</strong>
          <b>↗</b>
        </a>
      </div>

      <ServiceMegaMenu
        open={servicesOpen}
        initialQuery={serviceQuery}
        onClose={closeServices}
      />
    </>
  );
}