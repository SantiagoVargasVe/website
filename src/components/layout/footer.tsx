import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "@/data/social";

export function Footer() {
  return (
    <footer className="site-footer shell" id="contact">
      <div className="contact-block">
        <div>
          <p className="eyebrow">Have something in mind?</p>
          <h2>
            Good things start
            <br />
            <span className="serif">with a conversation.</span>
          </h2>
        </div>
        <a
          className="contact-arrow"
          href={socialLinks[2].url}
          aria-label="Email Santiago"
        >
          <ArrowUpRight size={52} strokeWidth={1.3} />
        </a>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Santiago Vargas{" "}
          <span>· Made with care in Bogotá.</span>
        </p>
        <ul aria-label="Social links">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                target={link.icon === "mail" ? undefined : "_blank"}
                rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
              >
                {link.label}
                <ArrowUpRight size={13} />
              </a>
            </li>
          ))}
        </ul>
        <a className="back-top" href="#hero">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
