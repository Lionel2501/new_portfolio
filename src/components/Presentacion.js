import TypingAnimation from "@/src/components/TypingAnimation";

const Presentacion = () => {
    return (
      <section >
        <div className="container">
          <div className="row full-screen align-items-center p-100px-tb">
            <div className="col-md-6">
              <div className="ht-text">
                <h6>Hello there...</h6>
                <h1>Tony Smith</h1>
                <h2>
                  I Am Passionate <TypingAnimation />
                </h2>
                <p>
                  The namics 
                </p>
                <div className="btn-bar go-to">
                  <a className="m-btn m-btn-theme" href="#work">
                    my work
                  </a>
                  <a className="m-btn m-btn-t-theme" href="#contactus">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>      
        {/*           
          <div className="go-to go-to-next">
            <a href="#experience">
            <span />
            </a>
          </div> 
        */}
      </section>
    );
  };
  export default Presentacion;
  