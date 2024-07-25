import TypingAnimation from "@/src/components/TypingAnimation";
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Presentacion = () => {
    return (
      <section >
        

        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
          <div className="social-icons">
            <a href="https://linkedin.com/in/tu-usuario" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/tu-usuario" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="container">
        
{/*        <div class="code">
            <span class="keyword">const </span> 
            <span class="variable">bienvenida</span> 
            <span class="operator"> = </span> 
            <span class="string">'Hello, World!'</span>
        </div>     */}
          <div className="row full- p-10px-tb">
            <div className="col-md-12">
              <div className="hero-text">
                 <div className="btn-bar go-to">
                  <a className="m-btn m-btn-theme" href="#experience">
                    my work
                  </a>
                  <a className="m-btn m-btn-t-theme" href="#contactus">
                    Hire Me
                  </a>
                </div> 
              </div>
            </div>
            <div className="col-md-6">
              <div className="ht-text">
                <h1>Me llamó Lionel</h1>
                <h1>
                  Soy Desarrllador Full Stack
                </h1>
                <p>
                  The namics 
                </p>
              </div>
            </div> 
            <div className="col-md-6">
              <div className="ht-text">
                <h1>Me llamó Lionel</h1>
                <h1>
                  Soy Desarrllador Full Stack
                </h1>
                <p>
                  The namics 
                </p>
              </div>
            </div> 
            </div>
          </div>    
      </section>
    );
  };
  export default Presentacion;
  