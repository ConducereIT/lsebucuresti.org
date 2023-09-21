import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { ControllerUserData } from "../sdk/controllerUserData.sdk";

export default function ContactComponent() {
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 5000); // 5 seconds, you can adjust the duration as needed
  };

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Trimite");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Trimite...");
    const status = await ControllerUserData.sendMessage(
      formDetails.firstName,
      formDetails.lastName,
      formDetails.email,
      formDetails.phone,
      formDetails.message,
    );
    if (status.status) {
      showNotification(status.message);
      setButtonText("Trimite");
      setFormDetails(formInitialDetails);
    }
  };

  return (
    <section className="contact" id="contact">
      {notification && <div className="notification">{notification}</div>}
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <iframe
                    className=" border rounded-lg"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2849.058966064908!2d26.07142839058226!3d44.43195265049182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201db1231a2df%3A0xb91660c987d390a9!2sLiga%20Studen%C8%9Bilor%20Electroni%C8%99ti!5e0!3m2!1sen!2sro!4v1694452963595!5m2!1sen!2sro"
                    allowFullScreen
                    title="Google Maps"
                  ></iframe>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="flex justify-center">
                    <h2 className=" text-blue-600 flex justify-between pt-4 md:pt-0">
                      Contactează-ne
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="Nume"
                          className="border border-black rounded-lg focus:border-blue-600"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                          required={true}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Prenume"
                          className="border border-black rounded-lg focus:border-blue-600"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                          required={true}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Adresă de email"
                          className="border border-black rounded-lg focus:border-blue-600"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                          required={true}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Număr de telefon"
                          className="border border-black rounded-lg focus:border-blue-600"
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                          required={true}
                        />
                      </Col>
                      <Col
                        size={12}
                        className="px-1 flex flex-col items-center  "
                      >
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Mesaj"
                          className="border border-black rounded-lg focus:border-blue-600"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                          required={true}
                        ></textarea>
                        <button type="submit" className=" rounded-lg">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
