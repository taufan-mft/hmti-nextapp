import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import InsiderHead from "@/components/insider/insiderhead";
import InsiderContent from "@/components/insider/insidercontent";
import InsiderStack from "@/components/insider/insiderstack";

const Insider: NextPage = () => {
  const onConfettiLoad = () => {
    const key = "create-next-stack-hasShownConfetti-hmti-frontend";
    const hasShownConfetti = localStorage.getItem(key);
    if (hasShownConfetti != null) return;

    const duration = 10 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    (function frame() {
      const timeLeft = animationEnd - Date.now();

      (window as any).confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: Math.max(200, 500 * (timeLeft / duration)),
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
        colors: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff",
        ],
        shapes: ["square", "circle"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.8, 1.2),
        drift: randomInRange(-0.1, 0.1),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();

    localStorage.setItem(key, "true");
  };

  return (
    <>
    <Script
      src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.9.3/tsparticles.confetti.bundle.min.js"
      onLoad={onConfettiLoad}
    />
      <Head>
        <title>Behind of Web HMTI</title>
        <meta name="description" content="Temukan siapa yang ada di balik pengembangan website HMTI dan teknologi yang digunakan, seperti Nginx, Next.js, Django, Ubuntu, Gunicorn, Node.js, TypeScript, React, Tailwind CSS, DaisyUI, Swiper, dan Framer."/>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
       <div>
        <section className="sticky top-0 w-full z-[100]">
          <Navbar/>
        </section>
        <section>
          <InsiderHead/>
        </section>
        <section className="my-16">
          <InsiderContent/>
        </section>
        <section>
          <InsiderStack/>
        </section>
        <section className="">
          <Footer/>
        </section>
      </div>
    </>
  );
};

export default Insider;