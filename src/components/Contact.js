import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const { name, email, subject, message } = mailData;
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
            setMailData({ name: "", email: "", message: "", subject: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  return (
    <section >
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="white-color text-uppercase">Contactar</h3>
              <p className="text-uppercase small">
              Desarollador Full Stack basado en Argentina
              </p>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="row justify-content-center">
          <div className="col-lg-8 m-15px-tb">
            <div className="contact-form box-shadow">
              <h4 className="white-color font-alt m-20px-b">Mensaje</h4>
              <form onSubmit={(e) => onSubmit(e)} className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="name"
                      onChange={(e) => onChange(e)}
                      value={name}
                      id="name"
                      placeholder="Nombre *"
                      className={`form-control ${
                        error ? (name.length !== 0 ? "" : "invalid") : ""
                      }`}
                      type="text"
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="email"
                      onChange={(e) => onChange(e)}
                      value={email}
                      id="email"
                      placeholder="Email *"
                      className={`form-control ${
                        error ? (email.length !== 0 ? "" : "invalid") : ""
                      }`}
                      type="email"
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      name="subject"
                      onChange={(e) => onChange(e)}
                      value={subject}
                      id="subject"
                      placeholder="Asunto"
                      className={`form-control ${
                        error ? (subject.length !== 0 ? "" : "invalid") : ""
                      }`}
                      type="text"
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                      id="message"
                      placeholder="Mensaje *"
                      rows={3}
                      style={{ background: 'white'}}
                      className={`form-control ${
                        error ? (message.length !== 0 ? "" : "invalid") : ""
                      }`}
                    />
                    <span className="input-focus-effect theme-bg" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="send">
                    <button
                      className="m-btn enviarButton"
                      type="submit"
                      value="Send"
                    >
                      {" "}
                      Enviar
                    </button>
                  </div>
                  <span
                    id="suce_message"
                    className="text-success"
                    style={{ display: success ? "block" : "none" }}
                  >
                    El mensaje se envió corectamente
                  </span>
                </div>
              </form>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-lg-4 m-15px-tb" style={{ 
              display: "flex",
              flexDirection: "column", 
              justifyContent: "space-between"
          }}>
            <div className="contact-info media box-shadow">
              <div className="icon">
                <i className="ti-location-pin" />
              </div>
              <div className="media-body">
                <p className="white-color font-alt">Localida: Tandil, Buenos Aires, Argentina (GMT -3)</p>
              </div>
            </div>
            <div className="contact-info media box-shadow">
              <div className="icon">
                <i className="ti-mobile" />
              </div>
              <div className="media-body">
                <p className="white-color font-alt">Telefono: 0054 2494 646 055</p>
              </div>
            </div>
            <div className="contact-info media box-shadow">
              <div className="icon">
                <i className="ti-email" />
              </div>
              <div className="media-body">
                <p className="white-color font-alt">Email: lionelcassar92@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* end form */}
      </div>
    </section>
  );
};
export default Contact;
