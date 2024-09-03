import emailjs from "emailjs-com";
import { useState } from "react";
import FormEmail from "./FormEmail";
import ContactDatos from "./ContactDatos";
import { Height } from "@mui/icons-material";

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
      <div className="container contact_main" style={{ height: "100%"}}>
        {/* <div className="row full- p-10px-tb" style={{ height: "80%"}}> */}
        <div className="col-md-12 m-15px-tb contact_title">
          <div className="section-title">
            <h3 className="white-color text-uppercase">CONTACTAR</h3>
            <p className="text-uppercase small">
              Desarollador Full Stack basado en Argentina
            </p>
          </div>
        </div>  
        <div className="col-md-12 contact_box">
          <div className="col-lg-7 m-15px-tb contact_mensaje">
            <div className="contact-form box-shadow">
              <h4 className="white-color font-alt m-20px-b">Mensaje</h4>
              <FormEmail />
            </div>
          </div>
          <div className="col-lg-5 m-15px-tb contact_datos">
            <div className="contact-form box-shadow">
              <ContactDatos /> 
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};
export default Contact;
