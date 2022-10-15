import { useState } from "react";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <section className="MOBILE-MENU flex  lg:hidden">
      <div
        className="HAMBURGER-ICON space-y-2"
        onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
      >
        <span className="block h-0.5 w-8 animate-pulse bg-green-500"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-green-500"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-green-500"></span>
      </div>

      <div className={isNavOpen ? "showMenuNav bg-slate-900" : "hideMenuNav"}>
        <div
          className="CROSS-ICON  absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>

        <ul className="MENU-LINK-MOBILE-OPEN flex  flex-col items-center justify-between min-h-[250px]">
          <li className="border-b text-emerald-400 border-emerald-900 my-8 uppercase font-roboto">
            <a href="/">Home</a>
          </li>
          <li className="border-b text-emerald-400 border-emerald-900 my-8 uppercase font-roboto">
            <a href="/about">About</a>
          </li>
          <li className="border-b text-emerald-400 border-emerald-900 my-8 uppercase font-roboto">
            <a href="/posts">Posts</a>
          </li>
          <li className="border-b text-emerald-400 border-emerald-900 my-8 uppercase font-roboto">
            <a href="/contact">Contact me</a>
          </li>
        </ul>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;

        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        
      }
    `}</style>
    </section>
  );
}
