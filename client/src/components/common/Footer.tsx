import React from "react";
import Link from "next/link";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <Link href={"/"}> About Us</Link>
          <Link href={"/events"}> Events</Link>
          <Link href={"/teams"}>Our Teams</Link>
          <Link href={"/Blog"}>Blog</Link>
          <Link href={"/activities"}>Activities</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/innovator_club_ldce/">
              <FaInstagram />
            </a>
            <a href=" mailto:innovatorclubldce@gmail.com">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UC8GdFKUpYRT9Ij-8EF7hemg/featured">
              <FaYoutube />
            </a>
          </div>
        </nav>
        <aside>
          <p>© 2022 Copyright:Innovator Club</p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
