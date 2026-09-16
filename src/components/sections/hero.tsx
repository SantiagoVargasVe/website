import { ArrowDown, ArrowUpRight } from "lucide-react";
import avatarUrl from "@/assets/avatar.webp";

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-topline">
        <span className="eyebrow">
          <span className="status-dot" /> Software engineer · Bogotá, CO
        </span>
        <span className="edition">A personal corner of the internet</span>
      </div>
      <div className="hero-grid">
        <div>
          <p className="hero-intro">Hey, I’m Santiago.</p>
          <h1>
            Thoughtful software.
            <br />
            <span className="serif">Useful little things.</span>
          </h1>
          <p className="hero-description">
            I build web experiences for work, and tools for the everyday. A mix
            of frontend craft, curiosity, and seeing things through.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowDown size={17} />
            </a>
            <a className="text-link" href="#about">
              A little about me <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="portrait-composition">
          <span className="portrait-spark" aria-hidden="true">
            ✳
          </span>
          <div className="portrait-frame">
            <img
              src={avatarUrl}
              alt="Santiago Vargas"
              width="340"
              height="400"
              fetchPriority="high"
            />
          </div>
          <div className="portrait-note">
            <span className="status-dot" /> Based in Bogotá.
            <br />
            <span>Building for anywhere.</span>
          </div>
          <span className="portrait-caption">ENGINEER / CURIOUS HUMAN</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span>
          Currently a Senior Engineer at <strong>Slalom</strong>
        </span>
        <a href="#projects">
          Scroll to discover <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
