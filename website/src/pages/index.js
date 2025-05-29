import React, { useEffect, useRef, useState } from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
      <script defer src="https://umami.puxxbu.my.id/script.js" data-website-id="b3df8c6e-5e7b-4f52-bee1-05c740c749dd"></script>
        <div
          className={styles.heroBannerWrapper}
          style={{
            minHeight: bannerHeight,
            display: isLoading ? "none" : "block",
          }}
        >
          {/* TODO need improve some eject for about self*/}
          <p>Hi, my name is</p>
          <h1 className="text-primary-800">Valerino Gozen.</h1>
          <p>
            As a <span className="text-warning">Back-End Developer</span>, I
            enjoy channeling my passion for technology into various{" "}
            <span className="text-danger">homelab projects</span>.
          </p>
          <SocialLinks />
          <p>
            <a href="#main">
              <button className="border-0 rounded p-2 pl-4 pr-0 bg-primary-900 hover:bg-primary-600 transition text-white text-lg cursor-pointer">
                whoami<span className="pl-1 animate-pulse">▎</span>
              </button>
            </a>
          </p>
        </div>
      </header>
      <main id="main" ref={mainRef} hidden={true}>
        <div className={styles.aboutHeader}>
          <h2 className="border-0 border-b-4 border-solid border-success">
            Who am I
          </h2>
        </div>
        <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/profilepic.jpg")}
            />
          </div>
          <div className={styles.aboutText}>
            <h2>Hi</h2>
            <p>
              I am Vano, a Backend Developer and Self hosting enthusiast in Jogja.
            </p>
            <p>
              I love building cool and meaningful things with tech like{" "}
              <Link to={useBaseUrl("projects/")}>
                websites 🌐, homelab & self-hosting 🧪
              </Link>
              .
            </p>

            <p>
            👨‍💻 Currently working in {" "}
              <a href="https://www.comp.nus.edu.sg/programmes/ug/cs/">
                Berijalan
              </a>{" "}
              as a{" "}
              <a >
                Backend Spring Boot Developer
              </a>{" "}
              since 2024
            </p>

            <p>
              🎒 I was a{" "}
              <a href="https://www.comp.nus.edu.sg/programmes/ug/cs/">
                Computer Science major
              </a>{" "}
              at the{" "}
              <a href="https://www.comp.nus.edu.sg/">
                Atma Jaya Yogyakarta University
              </a>{" "}
              from 2020 to 2024.
            </p>
            <p>
              🧑‍🏫 Back then, I was a{" "}
              <a href="https://github.com/puxxbu/CS1010-Tutorial-C09">
                Teaching Assistant
              </a>{" "}
              for Basic Programming and Object Oriented Programming (OOP).
            </p>
          </div>
        </div>
        <section className={styles.directory}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link className="pagination-nav__link" to={useBaseUrl("blog/")}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My blog</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                  <div className="pagination-nav__sublabel">Refer to</div>
                  <div className="pagination-nav__label">My docs</div>
                </Link>
              </div>
            </nav>
            <nav className="pt-4 pagination-nav">
              <div className="pagination-nav__item">
                <Link
                  className="pagination-nav__link"
                  to={useBaseUrl("projects/")}
                >
                  <div className="pagination-nav__sublabel">Check out</div>
                  <div className="pagination-nav__label">My projects</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <a
                  className="pagination-nav__link"
                  href={useBaseUrl("pdf/resume.pdf")}
                >
                  <div className="pagination-nav__sublabel">Download</div>
                  <div className="pagination-nav__label">My resume</div>
                </a>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
