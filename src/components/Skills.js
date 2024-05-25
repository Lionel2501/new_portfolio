import { useEffect } from "react";
import { utils } from "../layouts/utils";
import Carousel from "./Carousel";

const Skills = () => {
  useEffect(() => {
    utils.activeSkillProgress();
  }, []);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">Tecnologías</h3>
              <p className="text-uppercase small">
                A Lead UX &amp; UI designer based in Canada
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <Carousel />
        </div>
      </div>
    </section>
  );
};
export default Skills;
