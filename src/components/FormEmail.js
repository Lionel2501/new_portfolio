import emailjs from "emailjs-com";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const FormEmail = ({ t }) => {
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
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setError(true);
            setOpen(true);
            setMensaje("Los campos nombre, email y mensaje son obligatorios");
            setSeverity("info");
            setTimeout(() => {
                setOpen(false);
            }, 5000);
        } else {
            const templateParams = {
                from_name: name,          
                from_email: email,        
                to_email: 'lionelcassar92@gmail.com',
                subject: subject,
                message: message,
            };

            emailjs.send(
                "service_rdh8q6a", // service id
                "template_l1pralx", // template id
                templateParams,
                "eimAjeWf2xtoSBMGD" // public api
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
    const [severity, setSeverity] = useState("success");
    const [open, setOpen] = useState(false);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if(success){
            setOpen(true);
            setMensaje("El mensaje se mando corectamente !");
            setSeverity("success");
        }else {
            setOpen(false)
        }
    }, [success])

    return (
        <>
        <Snackbar
            open={open}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert severity={severity} sx={{ width: "100%" }}>{mensaje}</Alert>
        </Snackbar>
        <form onSubmit={(e) => onSubmit(e)} className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <input
                        name="name"
                        onChange={(e) => onChange(e)}
                        value={name}
                        id="name"
                        placeholder={t("contact.name")}
                        className={`form-control ${error ? (name.length !== 0 ? "" : "invalid") : ""}`}
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
                        placeholder={t("contact.email")}
                        className={`form-control ${error ? (email.length !== 0 ? "" : "invalid") : ""}`}
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
                        placeholder={t("contact.subjet")}
                        className="form-control"
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
                        placeholder={t("contact.message")}
                        rows={3}
                        style={{ background: 'white'/* , height: '250px' */}}
                        className={`form-control ${error ? (message.length !== 0 ? "" : "invalid") : ""}`}
                    />
                    <span className="input-focus-effect theme-bg" />
                </div>
            </div>
            <div className="col-md-12">
                <div className="send">
                    <button className="m-btn enviarButton" type="submit" value="Send">{t("contact.button_send")}</button>
                </div>
            </div>
        </form>
        </>
    );
};

export default FormEmail;
