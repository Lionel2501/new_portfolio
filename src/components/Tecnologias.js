import ObjectFrontEnd from "@/src/components/ObjectFrontEnd";
import ObjectBackEnd from "@/src/components/ObjectBackEnd";

const Tecnologias = () => {
    return (
      <section>
        <div className="container" style={{ height: "100%"}}>
        <div className="container_carousel">
              <div className="carousel_main">
                <div className="carousel__face"><span></span></div>
                <div className="carousel__face"><span></span></div>
                <div className="carousel__face"><span></span></div>
                <div className="carousel__face"><span></span></div>
                <div className="carousel__face"><span></span></div>
                <div className="carousel__face"><span></span></div>
                <div className="carousel__face"><span></span></div>
                <div className="carousel__face"><span></span></div>
                <div className="carousel__face"><span></span></div>
              </div>
            </div>
          {/* <div className="row sm-m-25px-b m-35px-b" style={{ height: "100%"}}> */}
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="white-color text-uppercase">Tecnologias</h3>
              <p className="text-uppercase small">
                Desarollador Full Stack basado en Argentina
              </p>
            </div>
          </div>
          <div className="col-md-12 tecnologias_box">
            <div className="col-md-6">
              <ObjectFrontEnd />
            </div>
            <div className="col-md-6">
              <ObjectBackEnd />
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default Tecnologias;