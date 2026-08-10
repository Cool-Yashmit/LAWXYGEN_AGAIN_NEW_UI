"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

import {
  CSSProperties,
  useRef,
  useState,
} from "react";

import { serviceCatalog } from "@/data/serviceCatalog";

export function ServiceShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const ghostX = useTransform(
    scrollYProgress,
    [0, 1],
    ["5%", "-18%"]
  );

  const posterY = useTransform(
    scrollYProgress,
    [0, 1],
    [45, -45]
  );

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (value) => {
      const index = Math.min(
        serviceCatalog.length - 1,
        Math.floor(value * serviceCatalog.length)
      );

      setActiveIndex(index);
    }
  );

  const activeGroup = serviceCatalog[activeIndex];

  const jumpToCategory = (index: number) => {
    const section = sectionRef.current;

    if (!section) return;

    const scrollableHeight =
      section.offsetHeight - window.innerHeight;

    const destination =
      section.offsetTop +
      (index / (serviceCatalog.length - 1)) *
        scrollableHeight;

    window.scrollTo({
      top: destination,
      behavior: "smooth",
    });
  };

  const openAllServices = () => {
    window.dispatchEvent(
      new CustomEvent("lawxygen:open-services", {
        detail: {
          query: "",
        },
      })
    );
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="v5-services"
      style={
        {
          "--service-color": activeGroup.accent,
        } as CSSProperties
      }
    >
      <div className="v5-services-sticky">
        <div className="v5-services-grid" />

        <motion.div
          className="v5-services-ghost"
          style={{ x: ghostX }}
        >
          {activeGroup.label}
        </motion.div>

        <div className="v5-services-heading">
          <span>EXPLORE LAWXYGEN</span>

          <p>
            Find the right service for every stage of
            business.
          </p>
        </div>

        <div className="v5-services-layout">
          <nav className="v5-category-list">
            {serviceCatalog.map((group, index) => (
              <button
                type="button"
                key={group.slug}
                className={
                  activeIndex === index ? "active" : ""
                }
                onClick={() => jumpToCategory(index)}
              >
                <i
                  style={{
                    background: group.accent,
                  }}
                />

                <span>{group.label}</span>
              </button>
            ))}
          </nav>

          <div className="v5-services-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup.slug}
                initial={{
                  opacity: 0,
                  y: 55,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -35,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="v5-current-label">
                  CURRENT CATEGORY
                </span>

                <h2>{activeGroup.label}</h2>

                <div className="v5-service-links">
                  {activeGroup.services
                    .slice(0, 6)
                    .map((service, index) => (
                      <motion.a
                        href="#"
                        key={service}
                        initial={{
                          opacity: 0,
                          x: index % 2 === 0 ? -25 : 25,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.42,
                          delay: index * 0.04,
                        }}
                      >
                        <span>
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <strong>{service}</strong>

                        <b>↗</b>
                      </motion.a>
                    ))}
                </div>

                <button
                  type="button"
                  className="v5-all-services"
                  onClick={openAllServices}
                >
                  Browse all services
                  <span>↗</span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="v5-service-poster"
            style={{
              y: posterY,
            }}
          >
            <span>
              {String(activeIndex + 1).padStart(
                2,
                "0"
              )}
            </span>

            <AnimatePresence mode="wait">
              <motion.strong
                key={activeGroup.slug}
                initial={{
                  opacity: 0,
                  scale: 0.75,
                  rotate: -8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.15,
                  rotate: 8,
                }}
              >
                {activeGroup.label[0]}
              </motion.strong>
            </AnimatePresence>

            <i />
          </motion.div>
        </div>

        <div className="v5-mobile-category-strip">
          {serviceCatalog.map((group, index) => (
            <button
              type="button"
              key={group.slug}
              className={
                activeIndex === index ? "active" : ""
              }
              onClick={() => jumpToCategory(index)}
            >
              <i
                style={{
                  background: group.accent,
                }}
              />

              {group.label}
            </button>
          ))}
        </div>

        <motion.div
          className="v5-services-progress"
          style={{
            scaleX: scrollYProgress,
          }}
        />
      </div>
    </section>
  );
}