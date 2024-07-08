/* import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Experience from "@/src/components/Experience";
import Tecnologias from "@/src/components/Tecnologias";
import Presentacion from "@/src/components/Presentacion";
import Blog from "@/src/components/Blog";
import Footer from "@/src/layouts/Footer"; */
import CarouselComponent from "@/src/components/CarouselComponent";
import { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const Index1 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <CarouselComponent />
{/*         <Presentacion />*/}
        {/* <Tecnologias />  */}
        {/* <Experience /> */}
        {/* <Skills /> */}
        {/* <About /> */}
        {/* <Work /> */}
        {/* <Testiminails /> */}
        {/* <Blog /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
    </Fragment>
  );
};

export default Index1;
