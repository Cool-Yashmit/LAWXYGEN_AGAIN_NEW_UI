"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useLenis } from "lenis/react";
import Snap from "lenis/snap";
import {
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";
import { serviceCatalog } from "@/data/serviceCatalog";
import { categoryHref, serviceHref } from "@/lib/serviceRoutes";

export function ServiceShowcase() {
  const lenis = useLenis();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 92,
    damping: 28,
    mass: 0.24,
  });

  const ghostX = useTransform(
    smoothProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["4%", "-12%"]
  );

  const ghostY = useTransform(
    smoothProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [14, -14]
  );

  const posterY = useTransform(
    smoothProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [26, -24]
  );

  const posterRotate = useTransform(
    smoothProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-1.4, 1.4]
  );

  const orbY = useTransform(
    smoothProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-28, 36]
  );

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(
      serviceCatalog.length - 1,
      Math.max(0, Math.round(value * (serviceCatalog.length - 1)))
    );

    if (next === activeIndexRef.current) return;

    setDirection(next > activeIndexRef.current ? 1 : -1);
    activeIndexRef.current = next;
    setActiveIndex(next);
  });

  useEffect(() => {
    if (!lenis) return;

    const section = sectionRef.current;
    if (!section) return;

    let snap: Snap | null = null;
    let removers: Array<() => void> = [];
    let resizeTimer: number | undefined;

    const destroySnap = () => {
      removers.forEach((remove) => remove());
      removers = [];
      snap?.destroy();
      snap = null;
    };

    const buildSnap = () => {
      destroySnap();

      if (window.innerWidth <= 850) return;

      const start = section.offsetTop;
      const travel = Math.max(0, section.offsetHeight - window.innerHeight);
      const steps = Math.max(1, serviceCatalog.length - 1);
      const step = travel / steps;

      snap = new Snap(lenis, {
        type: "lock",
        duration: 1.02,
        debounce: 145,
        distanceThreshold: "92%",
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });

      for (let index = 0; index < serviceCatalog.length; index += 1) {
        removers.push(snap.add(start + index * step));
      }
    };

    const onResize = () => {
      if (resizeTimer) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(buildSnap, 180);
    };

    const frame = window.requestAnimationFrame(buildSnap);
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      if (resizeTimer) window.clearTimeout(resizeTimer);
      destroySnap();
    };
  }, [lenis]);

  const activeGroup = serviceCatalog[activeIndex];

  const getCategoryPosition = (index: number) => {
    const section = sectionRef.current;
    if (!section) return 0;

    const travel = Math.max(0, section.offsetHeight - window.innerHeight);
    const steps = Math.max(1, serviceCatalog.length - 1);
    return section.offsetTop + (travel / steps) * index;
  };

  const jumpToCategory = (index: number) => {
    const next = Math.max(0, Math.min(serviceCatalog.length - 1, index));

    if (window.innerWidth <= 850) {
      window.scrollTo({
        top: getCategoryPosition(next),
        behavior: "smooth",
      });
      return;
    }

    lenis?.scrollTo(getCategoryPosition(next), {
      duration: 1.02,
      lock: true,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="v5-services v7-services"
      style={
        {
          "--service-color": activeGroup.accent,
          "--service-count": serviceCatalog.length,
        } as CSSProperties
      }
    >
      <div className="v5-services-sticky">
        <div className="v5-services-grid" />
        <motion.div className="v7-accent-orb" style={{ y: orbY }} />

        <motion.div
          className="v5-services-ghost"
          style={{ x: ghostX, y: ghostY }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={activeGroup.slug}
              initial={{ opacity: 0, y: direction * 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction * -24 }}
              transition={{
                duration: reduceMotion ? 0 : 0.64,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {activeGroup.label}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <div className="v5-services-heading">
          <div>
            <span>EXPLORE LAWXYGEN</span>
            <strong>Services built around every stage of business.</strong>
          </div>
          <p>Scroll through each category, then open the full service library when you are ready.</p>
        </div>

        <div className="v5-services-layout">
          <nav className="v5-category-list" aria-label="Service categories">
            {serviceCatalog.map((group, index) => (
              <button
                type="button"
                key={group.slug}
                className={activeIndex === index ? "active" : ""}
                onClick={() => jumpToCategory(index)}
                aria-current={activeIndex === index ? "step" : undefined}
              >
                <i style={{ background: group.accent }} />
                <span>{group.label}</span>
                <b>{String(index + 1).padStart(2, "0")}</b>
              </button>
            ))}
          </nav>

          <div className="v5-services-content">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeGroup.slug}
                className="v7-service-scene"
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        x: direction * 18,
                        y: 34,
                        scale: 0.988,
                      }
                }
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        x: direction * -14,
                        y: -24,
                        scale: 1.008,
                      }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="v7-stage-meta">
                  <motion.span
                    className="v5-current-label"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.06, duration: 0.34 }}
                  >
                    CURRENT CATEGORY
                  </motion.span>
                  <span className="v7-stage-count">
                    {String(activeIndex + 1).padStart(2, "0")}
                    <i />
                    {String(serviceCatalog.length).padStart(2, "0")}
                  </span>
                </div>

                <motion.h2
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: reduceMotion ? 0 : 0.03,
                    duration: reduceMotion ? 0 : 0.56,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {activeGroup.label}
                </motion.h2>

                <div className="v5-service-links">
                  {activeGroup.services.slice(0, 6).map((service, index) => (
                    <motion.a
                      href={serviceHref(activeGroup.slug, service)}
                      key={service}
                      initial={
                        reduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, x: direction * 12, y: 14 }
                      }
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.42,
                        delay: reduceMotion ? 0 : 0.11 + index * 0.045,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{service}</strong>
                      <b>↗</b>
                    </motion.a>
                  ))}
                </div>

                <motion.a
                  href={categoryHref(activeGroup.slug)}
                  className="v5-all-services"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : 0.32, duration: 0.38 }}
                >
                  Browse all services
                  <span>↗</span>
                </motion.a>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="v5-service-poster"
            style={{ y: posterY, rotate: posterRotate }}
          >
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <em>LAWXYGEN</em>

            <AnimatePresence mode="wait" initial={false}>
              <motion.strong
                key={activeGroup.slug}
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        x: direction * 34,
                        scale: 0.8,
                        rotate: direction * -6,
                      }
                }
                animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        x: direction * -28,
                        scale: 1.08,
                        rotate: direction * 6,
                      }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.56,
                  ease: [0.22, 1, 0.36, 1],
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
              className={activeIndex === index ? "active" : ""}
              onClick={() => jumpToCategory(index)}
            >
              <i style={{ background: group.accent }} />
              {group.label}
            </button>
          ))}
        </div>

        <div className="v7-stage-rail" aria-hidden="true">
          {serviceCatalog.map((group, index) => (
            <span
              key={group.slug}
              className={
                index === activeIndex
                  ? "active"
                  : index < activeIndex
                    ? "passed"
                    : ""
              }
            />
          ))}
        </div>

        <motion.div
          className="v5-services-progress"
          style={{ scaleX: smoothProgress }}
        />
      </div>
    </section>
  );
}
