"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Play, Star, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const router = useRouter()
  const { t, translations } = useLanguage()

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.to(".hero-bg", {
  //       yPercent: -50,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: heroRef.current,
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: true,
  //       },
  //     })

  //     gsap.fromTo(
  //       titleRef.current,
  //       { y: 100, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 },
  //     )

  //     gsap.fromTo(
  //       subtitleRef.current,
  //       { y: 50, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 },
  //     )

  //     gsap.to(".floating-element-1", {
  //       y: -20,
  //       rotation: 360,
  //       duration: 4,
  //       repeat: -1,
  //       ease: "power2.inOut",
  //       yoyo: true,
  //     })

  //     gsap.to(".floating-element-2", {
  //       y: -15,
  //       x: 10,
  //       duration: 3,
  //       repeat: -1,
  //       ease: "power2.inOut",
  //       yoyo: true,
  //       delay: 1,
  //     })

  //     gsap.fromTo(".stats-container", { opacity: 0 }, { opacity: 1, duration: 1, delay: 1.2 })

  //     gsap.fromTo(".scroll-indicator", { y: 0 }, { y: 10, duration: 2, repeat: -1, yoyo: true })
  //   }, heroRef)

  //   return () => ctx.revert()
  // }, [])

useEffect(() => {
  if (!heroRef.current) return;

  const ctx = gsap.context(() => {
    // Parallax BG scroll
    gsap.to(".hero-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Title fade-in
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 },
    );

    // Subtitle fade-in
    gsap.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 },
    );

    // Floating elements
    gsap.to(".floating-element-1", {
      y: -20,
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "power2.inOut",
      yoyo: true,
    });

    gsap.to(".floating-element-2", {
      y: -15,
      x: 10,
      duration: 3,
      repeat: -1,
      ease: "power2.inOut",
      yoyo: true,
      delay: 1,
    });

    // Stats fade in
    gsap.fromTo(".stats-container", { opacity: 0 }, { opacity: 1, duration: 1, delay: 1.2 });

    // ✨ Scroll indicator: fade in + continuous bounce
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0, yoyo: true });
    tl.fromTo(
      ".scroll-indicator",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 15, duration: 1.5, ease: "power1.inOut" },
    );
  }, heroRef);

  return () => ctx.revert();
}, []);





  return (
    <section
      ref={heroRef}
      className="relative flex justify-center items-center min-h-screen h-screen overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* Video Background - lazy loaded */}
      <video
        className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-center hero-bg z-0"
        src="https://api.ameora.fun/content/comics/hero_section/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 0,
        }}
        poster="/placeholder.svg"
      />

      {/* Overlay for readability */}
      <div className="z-0 absolute inset-0 bg-black/50" />

      {/* Floating Elements */}
      <div className="top-10 left-4 sm:top-20 sm:left-10 z-10 absolute bg-[#FFD93D] opacity-60 rounded-full w-12 h-12 sm:w-16 sm:h-16 floating-element-1" />
      <div className="right-4 bottom-20 sm:right-16 sm:bottom-32 z-10 absolute bg-[#FF4C60] opacity-40 rounded-lg w-8 h-8 sm:w-12 sm:h-12 floating-element-2" />

      {/* Main Content */}
      <div className="z-20 relative mx-auto px-4 sm:px-6 max-w-4xl text-center">
        <div className="mb-4 sm:mb-6">
          <div className="inline-flex justify-center items-center bg-[#FF4C60] comic-shadow rounded-full w-16 h-16 sm:w-20 sm:h-20 animate-pulse-glow">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
        </div>

        <h1
          ref={titleRef}
          className="mb-4 sm:mb-6 font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight px-2 arabic-text"
          style={{
            textShadow: "2px 2px 0px #FF4C60, 4px 4px 0px #1E1E2F",
          }}
        >
          {translations.home.hero.title}
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mb-6 sm:mb-8 max-w-2xl text-[#B0B0B0] text-base sm:text-lg md:text-xl lg:text-2xl px-4 arabic-text"
        >
          {translations.home.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4 rtl:flex-row-reverse">
          <Button
            size="lg"
            className="bg-[#FF4C60] hover:bg-[#FF4C60]/90 comic-shadow px-6 py-3 sm:px-8 sm:py-4 text-white text-base sm:text-lg w-full sm:w-auto transition-all hover:animate-pulse-glow min-h-[48px] arabic-text flex items-center rtl:flex-row-reverse"
            onClick={() => router.push("/library")}
          >
            <Play className="mr-2 rtl:mr-0 rtl:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            {translations.home.hero.cta}
          </Button>
        </div>

        {/* Stats */}
        <div className="gap-4 sm:gap-6 md:gap-8 grid grid-cols-3 mx-auto mt-12 sm:mt-16 max-w-md stats-container px-4">
          <div className="text-center">
            <div className="font-bold text-[#FF4C60] text-2xl sm:text-3xl md:text-4xl">1000+</div>
            <div className="text-[#B0B0B0] text-xs sm:text-sm md:text-base lg:text-xl arabic-text">{translations.home.hero.magazines}</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-[#FFD93D] text-2xl sm:text-3xl md:text-4xl">100+</div>
            <div className="text-[#B0B0B0] text-xs sm:text-sm md:text-base lg:text-xl arabic-text">{translations.home.hero.artists}</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-[#FF4C60] text-2xl sm:text-3xl md:text-4xl">800k+</div>
            <div className="text-[#B0B0B0] text-xs sm:text-sm md:text-base lg:text-xl arabic-text">{translations.home.hero.readers}</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="bottom-8 md:bottom-24 left-1/2 z-20 absolute -translate-x-1/2 scroll-indicator transform">
        <div className="flex justify-center border-[#FFD93D] border-2 rounded-full w-6 h-10">
          <div className="bg-[#FFD93D] mt-2 rounded-full w-1 h-3 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
