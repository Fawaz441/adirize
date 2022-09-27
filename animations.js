gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

gsap.to(".hero-svg", {
  y: 30,
  yoyo: true,
  duration: 2,
  ease: "power2.inOut",
  repeat: -1,
});

gsap.to(".cta-btn", {
  duration: 2,
  scale: 1,
  ease: "elastic.inOut(1, 0.3)",
  //   scrollTrigger: {
  //     trigger: ".bonuscontainer",
  //     toggleActions: "play reverse reverse reverse",
  //   },
});

gsap.from(".cta-text", {
  duration: 2,
  opacity: 0,
  x: 20,
  ease: "power1.inOut",
});

gsap.from([".hero-logo", ".hero-header", ".hero-description"], {
  y: -100,
  opacity: 0,
  ease: "elastic.inOut(1, 0.3)",
  duration: 2,
});

gsap.to([".countdown-svg", ".countdown-container"], {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "circ.inOut",
  scrollTrigger: {
    trigger: ".countdown",
    toggleActions: "play play restart reverse",
  },
});

gsap.to(".token-text", {
  x: 0,
  duration: 1,
  opacity: 1,
  ease: "circ.inOut",
  scrollTrigger: {
    trigger: ".token-text",
    toggleActions: "play play restart reverse",
  },
});

gsap.from("#coin1", {
  scale: 0,
  duration: 0.7,
  ease: "elastic.out(1, 0.3)",
  scrollTrigger: {
    trigger: ".token-svg",
    toggleActions: "play play restart reverse",
  },
});

gsap.from("#coin1_copy", {
  scale: 0,
  duration: 0.7,
  delay: 0.1,
  ease: "elastic.out(1, 0.3)",
  scrollTrigger: {
    trigger: ".token-svg",
    toggleActions: "play play restart reverse",
  },
});

gsap.from("#Layer_30_copy", {
  scale: 0,
  duration: 0.7,
  delay: 0.2,
  ease: "elastic.out(1, 0.3)",
  scrollTrigger: {
    trigger: ".token-svg",
    toggleActions: "play play restart reverse",
  },
});

gsap.from("#Layer_30", {
  scale: 0,
  duration: 0.7,
  delay: 0.3,
  ease: "elastic.out(1, 0.3)",
  scrollTrigger: {
    trigger: ".token-svg",
    toggleActions: "play play restart reverse",
  },
});

gsap.from(["#Layer_36 g"], {
  opacity: 0,
  duration: 0.7,
  delay: 0.4,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".token-svg",
    toggleActions: "play play restart reverse",
  },
});

gsap.from(["#Layer_40", "#Layer_39 path"], {
  opacity: 0,
  duration: 0.7,
  delay: 0.3,
  scale: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".token-svg",
    toggleActions: "play play restart reverse",
  },
});

// governance
gsap.to(".governance-text h1", {
  text: "$ADI Governance Model",
  duration: 1,
  scrollTrigger: {
    trigger: ".governance-text h1",
  },
});

gsap.from(".governance-text p", {
  duration: 0.8,
  delay: 0.8,
  opacity: 0,
  scrollTrigger: {
    trigger: ".governance-text p",
  },
});

gsap.from(".governance-img svg", {
  opacity: 0,
  y: 100,
  duration: 0.7,
  ease: "elastic.out(1, 0.3)",
  delay: 0.7,
  scrollTrigger: {
    trigger: ".governance-img",
  },
});

// stable coin
gsap.to(".stable-text h1", {
  text: "Is ADI a Stable Coin?",
  duration: 1,
  scrollTrigger: {
    trigger: ".stable-text h1",
  },
});

gsap.from(".stable-text p", {
  duration: 0.8,
  delay: 0.8,
  opacity: 0,
  scrollTrigger: {
    trigger: ".stable-text p",
  },
});

gsap.from(".stable-img svg", {
  opacity: 0,
  y: 100,
  duration: 0.7,
  ease: "elastic.out(1, 0.3)",
  delay: 0.7,
  scrollTrigger: {
    trigger: ".stable-img",
  },
});

// how does it work
gsap.to(".work-text h1", {
  text: "How Does it Work?",
  duration: 1,
  scrollTrigger: {
    trigger: ".work-text h1",
  },
});

gsap.from(".work-text p", {
  duration: 0.8,
  delay: 0.8,
  opacity: 0,
  scrollTrigger: {
    trigger: ".work-text p",
  },
});

gsap.from(".work-img svg", {
  opacity: 0,
  y: 100,
  duration: 0.7,
  ease: "elastic.out(1, 0.3)",
  delay: 0.7,
  scrollTrigger: {
    trigger: ".work-img",
  },
});

// how does it work svg animation

gsap.to(
  [
    ".work-img svg #Layer_63_copy",
    ".work-img svg #Layer_25_copy_2",
    ".work-img svg #coin_copy",
    ".work-img svg #Layer_27_copy_2",
    ".work-img svg #coin1_copy_2",
  ],
  {
    duration: 1,
    delay: 1.4,
    yoyo: true,
    repeat: -1,
    ease: "power2.inOut",
    y: 10,
    scrollTrigger: {
      trigger: ".work-img",
    },
  }
);

gsap.to([".work-img svg #Layer_69 g"], {
  opacity: 0.5,
  delay: 1.4,
  yoyo: true,
  repeat: -1,
  duration: 1.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".work-img",
  },
});
