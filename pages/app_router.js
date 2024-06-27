import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Experience from "@/src/components/Experience";
import Work from "@/src/components/Work";
import Home from "@/src/components/Home";

import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Testiminails from "@/src/components/Testiminails";
import { utils } from "@/src/layouts/utils";
import TypingAnimation from "@/src/components/TypingAnimation";
import dynamic from "next/dynamic";
import HeaderMain from '@/src/components/HeaderMain';

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setTimeout(() => {
      setContent(true);
    }, 1000);
  }, []);

  return (
/*     <Fragment>
      {loading && <Preloader />}
      {content && <Component {...pageProps} />}
    </Fragment> */

    <Fragment>
      {loading && <Preloader />}
      {content && (
        <Router>
          {/* <HeaderMain /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </Router>
      )}
    </Fragment>
  );
}