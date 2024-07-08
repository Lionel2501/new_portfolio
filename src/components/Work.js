import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const Work = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-content", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  return (
    <section>
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="white-color text-uppercase">Work</h3>
                <p className="text-uppercase small">
                  Desarollador Full Stack basado en Argentina
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-content lightbox-gallery">

      </div>
    </section>
  );
};
export default Work;
