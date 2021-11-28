import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";
import "./Complain.scss";
import { CircularProgress } from "@material-ui/core";

function Complain() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(form.current);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLETE_ID,
        form.current,
        process.env.REACT_APP_USERID_ID
      )
      .then(
        (result) => {
          setLoading(false);
          enqueueSnackbar("Email have been Successfully Delivered", {
            variant: "success",
          });
        },
        (error) => {
          setLoading(false);
          enqueueSnackbar("Something went wrong please try after sometime", {
            variant: "error",
          });
        }
      );

    e.target.reset();
  };
  return (
    <div className="complain_main_container">
      <div className="container">
          <h2 className="heading_contact">Contact Me</h2>
        <div className="row">
          <div className="col-lg-12 form_compalin_container">
            <form
              ref={form}
              className="form_container"
              onSubmit={sendEmail}
            >
              <h4>Let's do some business</h4>

              <div className="row ">
                <div className="col">
                  <input
                    required
                    type="text"
                    name="fullName"
                    className="form-control input_text form-control-lg input_text_complain"
                    placeholder="Name"
                  />
                </div>
                <div className="col">
                  <input
                    required
                    type="email"
                    name="emailId"
                    className="form-control input_text form-control-lg input_text_complain"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="row ">
                <div className="col">
                  <input
                    type="number"
                    required
                    name="phoneNumber"
                    className="form-control input_text form-control-lg input_text_complain "
                    placeholder="Phone"
                  />
                </div>
                <div className="col">
                  <input
                    required
                    type="text"
                    name="subject"
                    className="form-control input_text form-control-lg input_text_complain"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div className="input_text">
                <div className="form-group">
                  <textarea
                    required
                    className="form-control"
                    placeholder="Let's Talk"
                    type="text"
                    name="emailBody"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div className="spinner_container" hidden={!loading}>
                <CircularProgress />
              </div>
              <button
                className="mail_button btn btn-primary form-control"
                type="submit"
              >
                Send 
              </button>
            </form>
          </div>

       
        </div>
      </div>
    </div>
  );
}

export default Complain;
