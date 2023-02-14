import { React } from "react";
import {
  ContactContainer,
  ContactSecondSection,
  Modal,
  ModalOpacity,
  ModalSection,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./Contact.Styled";
import { Grid, Textarea, Input, Button } from "@mantine/core";
import { ReactComponent as Envelope } from "../../style/icons/envelope.svg";
import { CustomInput } from "../../shared/ui/İnput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CatImage from "../../assets/images/cat-face-svgrepo-com.svg";
import { useState } from "react";
import { InputComponentContactUsEmail } from "../../shared/ui/İnput/Input.Styled";
import axios from "axios";
import {
  InputEmailUser,
  InputMessageUser,
} from "../creating-wish/MyCreatedWish.Styles";
import CustomBreadcrumb from "../../shared/components/breadcrumb";
import { myaxios } from "../../api/myaxios";

const ModalWindow = (props) => {
  switch (props.visibility) {
    case "flex":
      document.querySelector("body").setAttribute("style", "overflow: hidden");
      break;
    case "none":
      document
        .querySelector("body")
        .setAttribute("style", "overflow-y: scroll");
      break;
  }

  return (
    <Modal style={{ display: props.visibility }}>
      <ModalOpacity></ModalOpacity>
      <ModalSection>
        <ModalHeader>
          <h5 className="header-title">Message successfully sent</h5>
          <button onClick={props.setVisibilityHiddenFunc}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </ModalHeader>
        <ModalBody>
          <div className="image">
            <img src={CatImage} className="cat-image" />
          </div>
          <div className="title">
            <p className="title-text">
              Our moderators will recieve your message and give response as soon
              as possible. Thank you!
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="close-button"
            onClick={props.setVisibilityHiddenFunc}
          >
            Close
          </button>
        </ModalFooter>
      </ModalSection>
    </Modal>
  );
};

const Contact = () => {
  const [error, setError] = useState(null); //erroru modala otur

  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const HandleClickSendUserInfo = (e) => {
    e.preventDefault();
    myaxios
      .post("/api/v1/static_pages/contacts/request", formData)
      .then((res) => {
        if (res.status === 200) setVisibility("flex");
        else {
          throw new Error();
        }
      })
      .catch(() => {
        setError("Something went wrong ...");
      });
  };

  const [visibility, setVisibility] = useState("none");
  const setVisibilityHidden = () => {
    setVisibility("none");
  };
  return (
    <ContactContainer p={0} fluid>
      <Grid className="grid-contact-top">
        <Grid.Col
          style={{ marginBottom: "8px" }}
          className="contact-top"
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
        >
          <div className="toggle">
            {/*<p>Main {">"} Contact Us</p>*/}
            <p className="flex items-center justify-center">
              <CustomBreadcrumb
                margins="mb-0 mt-10"
                color="#fff"
                links={[
                  {
                    title: "Main",
                    to: "/",
                  },
                  {
                    title: "Contact Us",
                    to: "/contact",
                  },
                ]}
              />
            </p>
          </div>
          <div className="content">
            <h2>Contact us</h2>
          </div>
          <div className="info">
            <p>You can contact us by</p>
            <ul>
              <li>+994 55 814 41 91</li>
              <li>support@wishx.me</li>
            </ul>
          </div>

          <div className="envelope-img">
            <Envelope />
          </div>
        </Grid.Col>
        <Grid.Col
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className="contact-bottom"
        >
          <ContactSecondSection>
            <div className="write_section">
              <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Write us</h2>
            </div>
            <form onSubmit={HandleClickSendUserInfo}>
              <div className="input-section-one">
                <InputEmailUser
                  onChange={handleChange}
                  placeholder={"Your email"}
                  required
                  name="email"
                />
              </div>
              <div className="input-section-two">
                <InputMessageUser
                  name="message"
                  onChange={handleChange}
                  required
                  placeholder={"Write a message"}
                />
              </div>
              <Button
                onClick={HandleClickSendUserInfo}
                type="submit"
                className="send-button"
              >
                Send
              </Button>
            </form>
          </ContactSecondSection>
        </Grid.Col>
      </Grid>
      <ModalWindow
        visibility={visibility}
        setVisibilityHiddenFunc={setVisibilityHidden}
      />
    </ContactContainer>
  );
};

export default Contact;
