import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#label", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div
        id="label"
        className="bg-zinc-100 p-6 1:p-5 w-full flex justify-center opacity-0"
      >
        <article className="text-white leading-4 md:leading-5 sm:w-1/2 lg:w-1/2 xl:w-1/3 text-sm md:text-lg text-center">
          Get $170–$620 in credit toward iPhone 15 Pro when you trade in iPhone
          11 or higher.*{" "}
          <a className="text-blue" href="#">
            Buy
          </a>
        </article>
      </div>
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-8/12 w-8/12">
          <video
            className="pointer-events-nonqe"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">
          From $999 or $41.62/mo. for 24 mo.1
        </p>
      </div>
    </section>
  );
};

export default Hero;
