import emailjs from "emailjs-com";
import { useState } from "react";

const FormEmail = () => {
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
    );
};

export default FormEmail;
