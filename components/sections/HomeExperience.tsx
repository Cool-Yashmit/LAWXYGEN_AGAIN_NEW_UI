"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  CSSProperties,
  useRef,
} from "react";

export function HomeExperience() {
  const journeyRef = useRef<HTMLElement>(null);
  const complianceRef = useRef<HTMLElement>(null);
  const protectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress: journeyProgress } =
    useScroll({
      target: journeyRef,
      offset: ["start end", "end start"],
    });

  const {
    scrollYProgress: complianceProgress,
  } = useScroll({
    target: complianceRef,
    offset: ["start start", "end end"],
  });

  const {
    scrollYProgress: protectionProgress,
  } = useScroll({
    target: protectionRef,
    offset: ["start end", "end start"],
  });

  const journeyX = useTransform(
    journeyProgress,
    [0, 1],
    ["7%", "-10%"]
  );

  const complianceOne = useTransform(
    complianceProgress,
    [0, 1],
    [18, -18]
  );

  const complianceTwo = useTransform(
    complianceProgress,
    [0, 1],
    [34, -8]
  );

  const complianceThree = useTransform(
    complianceProgress,
    [0, 1],
    [50, 4]
  );

  const complianceFour = useTransform(
    complianceProgress,
    [0, 1],
    [65, 15]
  );

  const protectionX = useTransform(
    protectionProgress,
    [0, 1],
    ["3%", "-16%"]
  );

  return (
    <>
      <section
        ref={journeyRef}
        id="business"
        className="v5-journey"
      >
        <div className="v5-section-top">
          <span>YOUR BUSINESS JOURNEY</span>

          <p>
            One clearer experience from start to
            scale.
          </p>
        </div>

        <motion.h2 style={{ x: journeyX }}>
          Start. Manage. Protect. Grow.
        </motion.h2>

        <div className="v5-journey-grid">
          {[
            {
              number: "01",
              title: "Start",
              text:
                "Choose the right structure and build the legal foundation of your business.",
              color: "#2f80ed",
            },
            {
              number: "02",
              title: "Manage",
              text:
                "Keep tax, licences, filings and recurring compliance organised.",
              color: "#16b87a",
            },
            {
              number: "03",
              title: "Protect",
              text:
                "Secure your brand, intellectual property and important agreements.",
              color: "#f39b28",
            },
            {
              number: "04",
              title: "Grow",
              text:
                "Get professional support as your responsibilities and decisions expand.",
              color: "#e95d98",
            },
          ].map((item, index) => (
            <motion.article
              key={item.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.05,
              }}
              style={
                {
                  "--journey-accent": item.color,
                } as CSSProperties
              }
            >
              <i />

              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        ref={complianceRef}
        id="compliance"
        className="v5-compliance"
      >
        <div className="v5-compliance-sticky">
          <div className="v5-compliance-copy">
            <span>TAX & COMPLIANCE</span>

            <h2>
              Stay ready for
              <br />
              what comes next.
            </h2>

            <p>
              GST, income tax, corporate filings,
              payroll and recurring compliance can
              stay organised without becoming
              overwhelming.
            </p>

            <a href="#services">
              Explore compliance
              <b>↗</b>
            </a>
          </div>

          <div className="v5-compliance-stack">
            <motion.article
              style={{ y: complianceOne }}
            >
              <span>GST</span>

              <strong>
                Registration & Returns
              </strong>

              <p>
                Registration · Filing ·
                Reconciliation
              </p>

              <b>↗</b>
            </motion.article>

            <motion.article
              style={{ y: complianceTwo }}
            >
              <span>ROC</span>

              <strong>
                Corporate Compliance
              </strong>

              <p>
                Annual filings · Corporate changes
              </p>

              <b>↗</b>
            </motion.article>

            <motion.article
              style={{ y: complianceThree }}
            >
              <span>TAX</span>

              <strong>
                Income Tax & TDS
              </strong>

              <p>
                Returns · TDS · Tax support
              </p>

              <b>↗</b>
            </motion.article>

            <motion.article
              style={{ y: complianceFour }}
            >
              <span>PAYROLL</span>

              <strong>
                Employee Compliance
              </strong>

              <p>
                PF · ESI · Payroll
              </p>

              <b>↗</b>
            </motion.article>
          </div>
        </div>
      </section>

      <section
        id="experts"
        className="v5-experts"
      >
        <div className="v5-experts-copy">
          <span>EXPERT CONSULTATION</span>

          <h2>
            Some decisions
            deserve a real
            conversation.
          </h2>

          <p>
            Connect with the professional suited
            to the question in front of you.
          </p>
        </div>

        <div className="v5-expert-list">
          {[
            {
              label: "LEGAL",
              title: "Talk to a Lawyer",
              text:
                "Business, agreements, disputes and legal matters.",
              color: "#f05d69",
            },
            {
              label: "TAX",
              title: "Talk to a CA",
              text:
                "Taxation, GST, accounting and financial compliance.",
              color: "#18b87f",
            },
            {
              label: "CORPORATE",
              title: "Talk to a CS",
              text:
                "Governance, ROC and corporate compliance.",
              color: "#795fea",
            },
            {
              label: "IP",
              title: "Talk to an IP Lawyer",
              text:
                "Trademark, copyright and intellectual property.",
              color: "#f69a32",
            },
          ].map((expert, index) => (
            <motion.a
              href="#"
              key={expert.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
              }}
              style={
                {
                  "--expert-accent":
                    expert.color,
                } as CSSProperties
              }
            >
              <i />

              <span>{expert.label}</span>

              <strong>{expert.title}</strong>

              <p>{expert.text}</p>

              <b>↗</b>
            </motion.a>
          ))}
        </div>
      </section>

      <section
        ref={protectionRef}
        className="v5-protection"
      >
        <div className="v5-protection-sticky">
          <div className="v5-protection-intro">
            <span>PROTECT WHAT YOU BUILD</span>

            <h2>
              Protect what
              makes it yours.
            </h2>

            <p>
              Brand, ownership, permissions and
              documentation deserve the same
              attention as growth.
            </p>
          </div>

          <motion.div
            className="v5-protection-ticker"
            style={{
              x: protectionX,
            }}
          >
            TRADEMARK · IP · LICENCES ·
            CERTIFICATIONS · DOCUMENTS ·
            TRADEMARK · IP
          </motion.div>

          <div className="v5-protection-grid">
            <a href="#">
              <span>01</span>

              <strong>
                Protect your brand
              </strong>

              <p>
                Trademark, copyright, patents and
                related IP support.
              </p>

              <b>↗</b>
            </a>

            <a href="#">
              <span>02</span>

              <strong>
                Get licensed
              </strong>

              <p>
                Business licences, registrations
                and permissions.
              </p>

              <b>↗</b>
            </a>

            <a href="#">
              <span>03</span>

              <strong>
                Document it properly
              </strong>

              <p>
                Agreements, policies and legal
                documentation.
              </p>

              <b>↗</b>
            </a>
          </div>
        </div>
      </section>

      <section className="v5-why">
        <div className="v5-why-heading">
          <span>WHY LAWXYGEN</span>

          <h2>
            Complex work.
            <br />
            Clear experience.
          </h2>
        </div>

        <div className="v5-why-list">
          <article>
            <span>01</span>

            <strong>
              Find everything in one place
            </strong>

            <p>
              Move from registrations to
              recurring business requirements
              through one organised service
              experience.
            </p>
          </article>

          <article>
            <span>02</span>

            <strong>
              Find the right expertise
            </strong>

            <p>
              Connect legal, tax, corporate and
              intellectual-property needs with
              the right category.
            </p>
          </article>

          <article>
            <span>03</span>

            <strong>
              Navigate with clarity
            </strong>

            <p>
              Clear service discovery makes
              complicated business work easier
              to understand.
            </p>
          </article>
        </div>
      </section>

      <section id="resources" className="v5-faq">
        <div>
          <span>QUESTIONS</span>

          <h2>
            Before you
            get started.
          </h2>
        </div>

        <div className="v5-faq-list">
          <details>
            <summary>
              How do I find the right service?
              <b>+</b>
            </summary>

            <p>
              Search directly from the homepage
              or browse services by category.
            </p>
          </details>

          <details>
            <summary>
              Can I speak with a professional?
              <b>+</b>
            </summary>

            <p>
              Consultation categories include
              lawyers, CAs, company secretaries
              and IP lawyers.
            </p>
          </details>

          <details>
            <summary>
              Can LAWXYGEN help with recurring
              compliance?
              <b>+</b>
            </summary>

            <p>
              Tax, GST, ROC, payroll, accounting
              and other recurring compliance
              services are included in the
              catalogue.
            </p>
          </details>
        </div>
      </section>

      <section className="v5-end-cta">
        <span>YOUR NEXT STEP</span>

        <h2>
          Start with what
          you need today.
        </h2>

        <div>
          <a href="#services">
            Explore Services
            <b>↗</b>
          </a>

          <a href="#experts">
            Talk to an Expert
            <b>→</b>
          </a>
        </div>
      </section>
    </>
  );
}