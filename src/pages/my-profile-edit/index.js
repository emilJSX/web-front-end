import React, { useState, useEffect } from "react";
import { MultiSelect } from "@mantine/core";
import Calendar from "react-calendar";
import "../../shared/components/Calendar/calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faArrowUpFromBracket,
  faCheck,
  faCalenda,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaApple,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaTwitter,
  FaUpload,
  FaWhatsapp,
} from "react-icons/fa";
import { Tab, Tabs, TabPanel } from "react-tabs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Profile_Picture from "../../assets/images/c041f60c443c14f5849fe6d2a106a7ff.png";
import Cry_Smyle from "../../style/icons/cry_smyle.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imageCompression from "browser-image-compression";
import {
  ProfileEditing,
  LittleContainer,
  Header,
  EditingButtons,
  Section,
  EditingItem,
  ProfilePicture,
  EditingInputs,
  GenderButtons,
  MainInputs,
  PasswordSettings,
  PasswordSettingsInputs,
  Password,
  SosialMediaButtons,
  PictureUpload,
  PictureUploadComponents,
  PictureDropDown,
  StatusPedding,
  Compleated,
  SosialMediaSelection,
  SaveButton,
} from "./MyProfileEdit.styles";
import axios from "axios";
import CustomBreadcrumb from "../../shared/components/breadcrumb";

const SetProfileEditButtonsEvent = () => {
  const edit_buttons = document.querySelectorAll(".editing-buttons");

  for (const iterator of edit_buttons) {
    iterator.addEventListener("click", (e) => {
      OnSetProfileEditPathClick(e.currentTarget);
    });
  }
};

const OnSetProfileEditPathClick = (clicked) => {
  let element_id = clicked.getAttribute("id");

  switch (element_id) {
    case "editing-buttons1":
      document
        .querySelector("#editing-buttons1")
        .setAttribute(
          "style",
          "background: #EBE5F7; border: 2px solid #3800B0; border-radius: 8px;"
        );
      document
        .querySelector("#editing-buttons2")
        .setAttribute("style", "background: white; border: 0;");
      document
        .querySelector("#editing-buttons3")
        .setAttribute("style", "background: white; border: 0;");
      document
        .querySelector("#editing-buttons4")
        .setAttribute("style", "background: white; border: 0;");
      break;
    case "editing-buttons2":
      document
        .querySelector("#editing-buttons1")
        .setAttribute("style", "background: white; border: 0;");
      document
        .querySelector("#editing-buttons2")
        .setAttribute(
          "style",
          "background: #EBE5F7; border: 2px solid #3800B0; border-radius: 8px;"
        );
      document
        .querySelector("#editing-buttons3")
        .setAttribute("style", "background: white; border: 0;");
      document
        .querySelector("#editing-buttons4")
        .setAttribute("style", "background: white; border: 0;");
      break;
    case "editing-buttons3":
      document
        .querySelector("#editing-buttons1")
        .setAttribute("style", "background: white; border: 0;");
      document
        .querySelector("#editing-buttons2")
        .setAttribute("style", "background: white; border: 0;");
      document
        .querySelector("#editing-buttons3")
        .setAttribute(
          "style",
          "background: #EBE5F7; border: 2px solid #3800B0; border-radius: 8px;"
        );
      document
        .querySelector("#editing-buttons4")
        .setAttribute("style", "background: white; border: 0;");
      break;
    case "editing-buttons4":
      document
        .querySelector("#editing-buttons1")
        .setAttribute("style", "background: white; border: 0;");
      document
        .querySelector("#editing-buttons2")
        .setAttribute("style", "background: white; border: 0;");
      document
        .querySelector("#editing-buttons3")
        .setAttribute("style", "background: white; border: 0;");
      document
        .querySelector("#editing-buttons4")
        .setAttribute(
          "style",
          "background: #EBE5F7; border: 2px solid #3800B0; border-radius: 8px;"
        );
      break;
  }
};

const SetGenderButtonsClick = () => {
  let gender_buttuns = document.querySelectorAll(".gender_buttuns");

  for (const iterator of gender_buttuns) {
    iterator.addEventListener("click", (e) => {
      OnGenderButtonClick(e.currentTarget);
    });
  }
};

const SetSaveAndCancelButtonsClick = () => {
  let SaveAndCancel = document.querySelectorAll(".saveAndCancel");

  for (const iterator of SaveAndCancel) {
    iterator.addEventListener("click", (e) => {
      OnClickSaveOrCancelButton(e.currentTarget);
    });
  }
};

const OnClickSaveOrCancelButton = (clicked) => {
  clicked.preventDefault();

  let saveAndCancelid = clicked.getAttribute("id");

  switch (saveAndCancelid) {
    case "save_button":
      document
        .querySelector("#save_button")
        .setAttribute(
          "style",
          "background: #3800B0; border-radius: 8px; color: #FFFFFF;"
        );
      document
        .querySelector("#cancel_button")
        .setAttribute(
          "style",
          "background: #FFFFFF; color: #3800B0; border: 2px solid #3800B0;"
        );
      break;
    case "cancel_button":
      document
        .querySelector("#save_button")
        .setAttribute(
          "style",
          "background: #FFFFFF; color: #3800B0; border: 2px solid #3800B0;"
        );
      document
        .querySelector("#cancel_button")
        .setAttribute(
          "style",
          "background: #3800B0; border-radius: 8px; color: #FFFFFF;"
        );
      break;
  }
};

function MyVerticallyCenteredModal(props) {
  const [password, setPassword] = useState("password");
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete your account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1 className="enter-password-title">
          Enter password to allow deletion
        </h1>
        <Password
          className="info_input"
          placeholder="Password"
          type={password ? "password" : "text"}
        />
        <div className="delete-causes-items-container">
          <p>Reason for deleting the account (optional)</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Reason 1"
                control={<Radio />}
                label="Reason 1"
              />
              <FormControlLabel
                value="Reason 2"
                control={<Radio />}
                label="Reason 2"
              />
              <FormControlLabel
                value="Reason 3"
                control={<Radio />}
                label="Reason 3"
              />
              <FormControlLabel
                value="Other Reson"
                control={<Radio />}
                label="Other Reson"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="reson-text-input">
          <input
            type="text"
            className="info_input"
            placeholder="Describe your reason"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Delete account</Button>
      </Modal.Footer>
    </Modal>
  );
}

const OnGenderButtonClick = (clicked) => {
  let element_id = clicked.getAttribute("id");

  switch (element_id) {
    case "female":
      document
        .querySelector("#female")
        .setAttribute(
          "style",
          " background: #ECEEF7; border: 2px solid #2D3043; border-radius: 8px; z-index: 3;"
        );
      document
        .querySelector("#male")
        .setAttribute(
          "style",
          "background: #FFFFFF; border: 2px solid #ECEEF7; border-radius: 8px; z-index: 0"
        );
      break;
    case "male":
      document
        .querySelector("#male")
        .setAttribute(
          "style",
          " background: #ECEEF7; border: 2px solid #2D3043; border-radius: 8px; z-index: 3"
        );
      document
        .querySelector("#female")
        .setAttribute(
          "style",
          "background: #FFFFFF; border: 2px solid #ECEEF7; border-radius: 8px; z-index: 0"
        );
      break;
  }
};

function DeleteAccountConfirmSmyle(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Account deleted
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="cry-smyle">
          <img src={Cry_Smyle} className="cry-smyle-image" />
        </div>
        <p className="deleted-account-wish-to-user">
          It is a pity that you are leaving us, but we will be glad to see you
          again.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ProfileEdit = () => {
  const [isOpened, SetOpenOrClose] = useState(false);
  const [countryName, SetCountryName] = useState("Select Country");
  const [password, setPassword] = useState("password");
  const [modalShow, setModalShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const OnSeclectCountry = (country) => {
    SetCountryName(country.innerHTML);
    document
      .querySelector(".countries-list")
      .setAttribute("style", "display: none");
    SetOpenOrClose(false);
  };

  const setClickOnOptions = () => {
    const options = document.querySelectorAll(".option");

    for (const iterator of options) {
      iterator.addEventListener("click", (e) => {
        OnSeclectCountry(e.currentTarget);
      });
    }
  };

  useEffect(() => {
    setClickOnOptions();
    SetProfileEditButtonsEvent();
    SetGenderButtonsClick();
    SetSaveAndCancelButtonsClick();
  });

  const data = [
    {
      label: "Travel",
      value: 1,
    },
    {
      label: "Bussness",
      value: 2,
    },
  ];

  const getUserToken = localStorage.getItem("UserToken=");
  // ==============================================UPDATE SOCIAL LINKS===============================================================

  const [SocialInputs, setSocialInputs] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    tiktok: "",
    telegram: "",
    whatsapp: "",
  });
  const [getSocialLinksUser, setGetSocialLinksUser] = useState();

  const UpdateSocialLinkUser = () => {
    axios
      .post(
        "https://api.wishx.me/api/v1/profiles/social/links/update",
        {
          facebook: SocialInputs.facebook,
          instagram: SocialInputs.instagram,
          twitter: SocialInputs.twitter,
          tiktok: SocialInputs.tiktok,
          telegram: SocialInputs.telegram,
          whatsapp: SocialInputs.whatsapp,
        },
        {
          headers: {
            Authorization: `Bearer ${getUserToken}`,
          },
        }
      )
      .then((getResultDataUpdateSocialLinks) => {
        console.log(getResultDataUpdateSocialLinks);
        toast.success("Successfully added social networks ", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch(() => {
        toast.error("Please check your details", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  // =============================================================================================================================

  // ===============================================GET SOCIAL LINKS==============================================================

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    const result = { ...SocialInputs, [name]: value };
    setSocialInputs(result);
  };

  // useEffect(() => {
  //   axios
  //     .get("https://api.wishx.me/api/v1/profiles/social/links", {
  //       headers: {
  //         Authorization: `Bearer ${getUserToken}`,
  //       },
  //     })
  //     .then((getUserSocialLinks) => {
  //       setGetSocialLinksUser(getUserSocialLinks.data.data);
  //     });
  // }, []);

  useEffect(() => {
    const {
      facebook = "",
      instagram = "",
      twitter = "",
      tiktok = "",
      telegram = "",
      whatsapp = "",
    } = getSocialLinksUser || {};
    setSocialInputs({
      facebook,
      instagram,
      twitter,
      tiktok,
      telegram,
      whatsapp,
    });
  }, [getSocialLinksUser]);

  // ============================================================================================================================

  // ===================================================GET USER UPDATE INFO=====================================================

  // avatar, country, birthday, interests, gender
  const [getUserInfoProfile, setUserInfoProfile] = useState({
    full_name: "",
    slug: "",
    country: "",
    about: "",
    avatar: "",
    phone: "",
    email: "",
    interests: [],
  });
  const [getInfoUser, setInfoUser] = useState([]);
  const [getCountryData, setCountryData] = useState("USD");
  const [getGenderId, setGenderId] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectPassport, setselectPassport] = useState(null);
  const [getCountry, setCountry] = useState();

  const handleChangeInputInfo = (e) => {
    const { name, value } = e.target;
    const result = { ...getUserInfoProfile, [name]: value };
    setUserInfoProfile(result);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  console.log(idInterestsApi, "INTERESTS")

  const handleGetPassportFile = (event) => {
    setselectPassport(event.target.files[0]);
  };

  var idInterestsApi = [];
  // useEffect(() => {
  //   axios
  //     .get("https://api.wishx.me/api/v1/profiles/edit", {
  //       headers: {
  //         Authorization: `Bearer ${getUserToken}`,
  //       },
  //     })
  //     .then((getUserUpdateInfo) => {
  //       setInfoUser(getUserUpdateInfo.data.data);
  //       setGenderId(getUserUpdateInfo.data.data.gender.id);
  //       setCountryData(getUserUpdateInfo.data.data.country);
  //       if (getUserUpdateInfo.data.data?.country) {
  //         setCountryNameId(getUserUpdateInfo.data.data.country);
  //       }
  //       getUserUpdateInfo.data.data.interests.map((e) =>
  //         idInterestsApi.push(e.id)
  //       );

  //       const dateStr = getUserUpdateInfo.data.data.dob; // "2019-12-31 00:00:00"
  //       const dateObj = new Date(dateStr);
  //       const month = dateObj.getUTCMonth() + 1; //months from 1-12
  //       const day = dateObj.getUTCDate();
  //       const year = dateObj.getUTCFullYear();

  //       onChange(new Date(year, month, day));
  //     });

  //   // Checked Gender Id for API
  // }, []);

  try {
    if (getGenderId == 1) {
      document
        .querySelector("#male")
        .setAttribute(
          "style",
          " background: #ECEEF7; border: 2px solid #2D3043; border-radius: 8px; z-index: 3"
        );
      document
        .querySelector("#female")
        .setAttribute(
          "style",
          "background: #FFFFFF; border: 2px solid #ECEEF7; border-radius: 8px; z-index: 0"
        );
    } else if (getGenderId == 2) {
      document
        .querySelector("#female")
        .setAttribute(
          "style",
          " background: #ECEEF7; border: 2px solid #2D3043; border-radius: 8px; z-index: 3;"
        );
      document
        .querySelector("#male")
        .setAttribute(
          "style",
          "background: #FFFFFF; border: 2px solid #ECEEF7; border-radius: 8px; z-index: 0"
        );
    }
  } catch {
    console.log(" ");
  }

  useEffect(() => {
    const {
      full_name = "",
      slug = "",
      about = "",
      avatar = "",
      email = "",
      phone = "",
      interests = [],
    } = getInfoUser || {};
    const { country = "" } = getInfoUser?.country?.name || {};
    setUserInfoProfile({
      full_name,
      slug,
      about,
      country,
      avatar,
      email,
      phone,
      interests,
    });
    SetCountryName(getInfoUser?.country?.name);
    // onChange(getInfoUser?.dob)
  }, [getInfoUser]);

  const [getCountryNameId, setCountryNameId] = useState();
  const getCountryId = (e) => {
    const { id } = e.target;
    const result = { id, countryName };
    setCountryNameId(result);
  };

  // Show Country Name take with id API

  useEffect(() => {
    var getname = getCountryData?.name;
    SetCountryName(getname);
  }, []);

  const [getInterestsIdApi, setInterestsIdApi] = useState();
  const getInterestsId = (item) => {
    setInterestsIdApi(item);
  };


  // ============================================================================================================================

  // ===================================================UPDATE PROFILE INFORMATION===============================================
  const handleUpdateInfoProfile = async (event) => {
    console.log(getCountryNameId, "getCountryNameId");
    const getCountryIdState = getCountryNameId?.id;

    event.preventDefault();
    const formUpdateData = new FormData();
    formUpdateData.append(
      "file",
      selectedFile == null ? getUserInfoProfile.avatar : selectedFile
    );
    formUpdateData.append("full_name", getUserInfoProfile.full_name);
    formUpdateData.append("country", getCountryIdState);
    formUpdateData.append("gender", getGenderId);
    formUpdateData.append("dob", moment(value).format("MM.DD.YYYY"));
    formUpdateData.append("username", getUserInfoProfile.slug);
    formUpdateData.append(
      "interests",
      getInterestsIdApi == null ? idInterestsApi : getInterestsIdApi
    );
    formUpdateData.append("about", getUserInfoProfile.about);

    try {
      await axios({
        method: "post",
        url: "https://api.wishx.me/api/v1/profiles/update",
        data: formUpdateData,
        headers: {
          "Access-Control-Allow-Origin": "*",
          xsrfHeaderName: "X-XSRF-TOKEN",
          Authorization: `Bearer ${getUserToken}`,
        },
      }).then((resultUpdate) => {
        toast.success("Successfully updated ", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
    } catch (error) {
      toast.error("Please check your details", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // ============================================================================================================================

  // =======================================================VERIFICATION PASSPORT API============================================

  const handleVerifyPassport = async (event) => {
    event.preventDefault();
    const formGetPassportData = new FormData();
    formGetPassportData.append("file", selectPassport);

    try {
      await axios({
        method: "post",
        url: "https://api.wishx.me/api/v1/profiles/verify",
        data: formGetPassportData,
        headers: {
          "Access-Control-Allow-Origin": "*",
          xsrfHeaderName: "X-XSRF-TOKEN",
          Authorization: `Bearer ${getUserToken}`,
        },
      }).then((data) => {
        console.log(data);
        toast.success("Successfully send passport", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
    } catch (error) {
      toast.error("Please check your details", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // ============================================================================================================================

  // ======================================================= GET COUNTRIES ============================================
  // var getCountryList = [];
  const [getCountryList, setCountryList] = useState([]);

  // useEffect(() => {
  //   try {
  //     axios({
  //       method: "get",
  //       url: "https://api.wishx.me/api/v1/settings/countries/get",
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         xsrfHeaderName: "X-XSRF-TOKEN",
  //         Authorization: `Bearer ${getUserToken}`,
  //       },
  //     }).then((getCountry) => {
  //       setCountryList(getCountry.data.data);
  //     });
  //   } catch (error) {
  //     console.log("");
  //   }
  // }, []);

  // =================================================================================================================
  return (
    <ProfileEditing>
      <LittleContainer>
        <Header>
          {/*<p className="top-buttons">*/}
          {/*  Main {">"} Profile {">"} Edit Profile Information*/}
          {/*</p>*/}
          <p className="top-buttons">
            <CustomBreadcrumb links={[
              {
                title: 'Main',
                to: '/'
              },
              {
                title: 'Profile',
              },
              {
                title: 'Edit Profile Information',
              },
            ]} />
          </p>
          <h1 className="main-page-title">Edit Information</h1>
          <Tabs defaultValue="personalinfo">
            <EditingButtons>
              <div className="insider">
                <Tab value="personalinfo">
                  <button className="editing-buttons" id="editing-buttons1">
                    Personal info
                  </button>
                </Tab>
                <Tab value="passwordlogin">
                  <button className="editing-buttons" id="editing-buttons2">
                    Password and Log In
                  </button>
                </Tab>
                <Tab value="verification">
                  <button className="editing-buttons" id="editing-buttons3">
                    Verification
                  </button>
                </Tab>
                {/* <Tab value="sociallink">
                  <button className="editing-buttons" id="editing-buttons4">
                    Social links
                  </button>
                </Tab> */}
              </div>
            </EditingButtons>
            <TabPanel value="personalinfo">
              <Section>
                <form onSubmit={handleUpdateInfoProfile}>
                  <EditingItem>
                    <ProfilePicture>
                      <figure className="image-figure">
                        <img
                          src={getUserInfoProfile.avatar == null ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png" : `${getUserInfoProfile.avatar}`}
                          className="profile-pucture"
                        />
                      </figure>
                      <div
                        className="content-container"
                        onClick={() => {
                          const dialog =
                            document.querySelector(".file-uploader");
                          dialog.click();
                        }}
                      >
                        <p className="upload-profile-picture">
                          Upload profile photo
                        </p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileSelect}
                          className="file-uploader"
                          style={{ display: "none" }}
                        />
                      </div>
                    </ProfilePicture>
                    <EditingInputs>
                      <input
                        type="text"
                        name="full_name"
                        value={getUserInfoProfile.full_name}
                        onChange={handleChangeInputInfo}
                        placeholder="Full name"
                        className="editing-inputs"
                      ></input>
                    </EditingInputs>
                  </EditingItem>
                  <GenderButtons>
                    <button
                      onClick={OnClickSaveOrCancelButton}
                      className="gender_buttuns female-button"
                      id="female"
                    >
                      Female
                    </button>
                    <button
                      onClick={OnClickSaveOrCancelButton}
                      className="gender_buttuns male-button"
                      id="male"
                    >
                      Male
                    </button>
                  </GenderButtons>
                  <MainInputs>
                    <div className="seclect-container">
                      <div
                        className="country-selection"
                        onClick={() => {
                          if (isOpened == false) {
                            document
                              .querySelector(".countries-list")
                              .setAttribute("style", "display: block");
                            SetOpenOrClose(true);
                          } else {
                            document
                              .querySelector(".countries-list")
                              .setAttribute("style", "display: none");
                            SetOpenOrClose(false);
                          }
                        }}
                      >
                        <h5 className="country-name">{countryName}</h5>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </div>
                      <ul className="countries-list">
                        {getCountryList.map((data) => (
                          <li
                            value={data.name}
                            onClick={getCountryId}
                            id={data.id}
                            className="option"
                          >
                            {data.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="email-container">
                      <input
                        type="email"
                        onChange={handleChangeInputInfo}
                        value={getUserInfoProfile.email}
                        name="email"
                        className="info-input-email"
                        placeholder="Email"
                      ></input>
                      {/* <a href='#' className='change-button'>Change</a> */}
                    </div>
                    <div className="email-container">
                      <input
                        type="tel"
                        onChange={handleChangeInputInfo}
                        value={getUserInfoProfile.phone}
                        name="phone"
                        className="info-input-email"
                        placeholder="Phone Number"
                      ></input>
                      {/* <a href='#' className='change-button'>Change</a> */}
                    </div>
                    <input
                      type="text"
                      value={moment(value).format("DD.MM.YYYY")}
                      readOnly
                      className="info_input"
                      placeholder="Date of birth"
                      onFocus={() => setShowCalendar(true)}
                    ></input>
                    <Calendar
                      locale="en-EN"
                      closeCalendar={true}
                      next2Label={false}
                      prev2Label={false}
                      onChange={onChange}
                      value={value}
                      className={showCalendar ? "" : "hide"}
                    />
                    <div className="wish-me-input-title">
                      <h5 className="wish-me-title">wish.me/</h5>
                      <input
                        type="text"
                        name="slug"
                        value={getUserInfoProfile.slug}
                        onChange={handleChangeInputInfo}
                        className="info_input-small"
                        placeholder="username"
                      />
                    </div>
                    <div className="main-title-container">
                      <p className="main-title">
                        Select your interests so that our partners give you only
                        relevant gifts (maximum 5):
                      </p>
                    </div>
                    <div className="interests-input-container">
                      <div className="multi-select">
                        <MultiSelect
                          className="info_input-multi"
                          data={data}
                          onChange={getInterestsId}
                          placeholder="Interests"
                          defaultValue={idInterestsApi}
                          maxSelectedValues={5}
                        />
                      </div>
                    </div>
                    <div className="text-area-container">
                      <textarea
                        rows={5}
                        cols={5}
                        name="about"
                        value={getUserInfoProfile.about}
                        onChange={handleChangeInputInfo}
                        className="text-area"
                        placeholder="About you"
                      />
                    </div>
                    <div className="buttons-container">
                      <button
                        className="saveAndCancel save-button"
                        type="submit"
                        id="save_button"
                      >
                        Save
                      </button>
                      <button
                        className="saveAndCancel cancel-button"
                        id="cancel_button"
                        onClick={() => setModalShow(true)}
                      >
                        Delete account
                      </button>
                      <ToastContainer />
                    </div>
                  </MainInputs>
                </form>
              </Section>
            </TabPanel>
            <TabPanel value="passwordlogin">
              <PasswordSettings>
                <p className="password-change-title">Change password</p>
                <PasswordSettingsInputs>
                  <Password
                    className="info_input"
                    placeholder="Old Password"
                    type={password ? "password" : "text"}
                  />
                </PasswordSettingsInputs>
                <PasswordSettingsInputs>
                  <Password
                    className="info_input"
                    placeholder="New Password"
                    type={password ? "password" : "text"}
                  />
                </PasswordSettingsInputs>
                <div className="confirm-button">
                  <button className="password-save-button">Save</button>
                </div>
                <h1 className="connetc-sosial-netwok-title">
                  Connect sosial networks
                </h1>
                <SosialMediaButtons>
                  <button className="facebook-button">
                    <FaFacebook className="facebook-icon"></FaFacebook>
                    <h1 className="facebook-title" style={{ margin: "0" }}>
                      Disconnect Facebook
                    </h1>
                  </button>
                  <button className="google-button">
                    <FaGoogle className="google-icon"></FaGoogle>
                    <h1 className="google-title" style={{ margin: "0" }}>
                      Connect Google
                    </h1>
                  </button>
                  <button className="apple-button">
                    <FaApple className="apple-icon"></FaApple>
                    <h1 className="apple-title" style={{ margin: "0" }}>
                      Connect Apple
                    </h1>
                  </button>
                </SosialMediaButtons>
              </PasswordSettings>
            </TabPanel>
            <TabPanel value="verification">
              <PictureUpload>
                <PictureUploadComponents className="picture-upload">
                  <p className="title">
                    To start fundraising for yourself, you need to pass
                    verification. To <br /> do this, just send a photo of your
                    passport.
                  </p>
                  <input
                    type="file"
                    onChange={handleGetPassportFile}
                    name="photo-uploader"
                    id="photo-uploader"
                  />
                  <PictureDropDown>
                    <div
                      className="upload-icon-and-title"
                      onClick={() => {
                        const dialog =
                          document.querySelector("#photo-uploader");
                        dialog.click();
                      }}
                    >
                      <FontAwesomeIcon icon={faArrowUpFromBracket} />
                      <h1 className="upload-picture-title">
                        Upload picture of Passport
                      </h1>
                    </div>
                  </PictureDropDown>
                  <form onSubmit={handleVerifyPassport}>
                    <div className="upload-picture-treams">
                      <h5 className="trems-head-title">The photo must be</h5>
                      <ul className="pictures-upload-treams-list">
                        <li className="pictures-upload-treams-list-item">
                          Original. Do not change or edit.
                        </li>
                        <li className="pictures-upload-treams-list-item">
                          Light. Make sure there is enought light when shooting
                        </li>
                        <li className="pictures-upload-treams-list-item">
                          Clear. All information should be easy to read
                        </li>
                      </ul>
                    </div>
                    <div className="send-btn-passport">
                      <button
                        type="submit"
                        className="save-to-verification"
                        onClick={() => {
                          document
                            .querySelector(".picture-upload")
                            .setAttribute("style", "display: none");
                          document
                            .querySelector(".status-padding")
                            .setAttribute("style", "display: block");
                          window.scrollTo(0, 0);
                        }}
                      >
                        Send to verification
                      </button>
                    </div>
                  </form>
                </PictureUploadComponents>
                <StatusPedding className="status-padding">
                  <h1 className="status-pedding-title">Status pending</h1>
                  <p className="status-pedding-main-title">
                    Your documents have been sent for verification! Moderators
                    will <br />
                    review your application as soon as possible. Thanks for
                    waiting
                  </p>
                  <h5
                    className="contact-administration-title"
                    onClick={() => {
                      document
                        .querySelector(".status-padding")
                        .setAttribute("style", "display: none");
                      document
                        .querySelector(".compleated")
                        .setAttribute("style", "display: block");
                    }}
                  >
                    Contact the administration
                  </h5>
                </StatusPedding>
                <Compleated className="compleated">
                  <div className="compleated-icon">
                    <div className="compleated-icon-item">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  </div>
                  <h1 className="verification-compleated-title">
                    Verification passed successfully
                  </h1>
                  <p className="moderator-compleating">
                    Moderator verificated your info. Thank you!
                  </p>
                  <h5 className="contact-administration-title">
                    Contact the administration
                  </h5>
                </Compleated>
              </PictureUpload>
            </TabPanel>
            <TabPanel value="sociallink">
              <ToastContainer />
              <SosialMediaSelection>
                <div className="sosial-media">
                  <FaFacebook className="facebook"></FaFacebook>
                  <input
                    type="text"
                    name="facebook"
                    value={SocialInputs.facebook}
                    onChange={handleChangeInput}
                    className="sosial-media-intputs"
                    placeholder="Your Facebook link"
                  />
                </div>
                <div className="sosial-media">
                  <FaInstagram className="instagram"></FaInstagram>
                  <input
                    type="text"
                    name="instagram"
                    value={SocialInputs.instagram}
                    onChange={handleChangeInput}
                    className="sosial-media-intputs"
                    placeholder="Your Instagram link"
                  />
                </div>
                <div className="sosial-media">
                  <FaTwitter className="twitter"></FaTwitter>
                  <input
                    type="text"
                    name="twitter"
                    value={SocialInputs.twitter}
                    onChange={handleChangeInput}
                    className="sosial-media-intputs"
                    placeholder="Your Twitter link"
                  />
                </div>
                <div className="sosial-media">
                  <FaTiktok className="tiktok"></FaTiktok>
                  <input
                    type="text"
                    name="tiktok"
                    value={SocialInputs.tiktok}
                    onChange={handleChangeInput}
                    className="sosial-media-intputs"
                    placeholder="Your TikTok link"
                  />
                </div>
                <div className="sosial-media">
                  <FaTelegram className="telegram"></FaTelegram>
                  <input
                    type="text"
                    name="telegram"
                    value={SocialInputs.telegram}
                    onChange={handleChangeInput}
                    className="sosial-media-intputs"
                    placeholder="Your Telegram link"
                  />
                </div>
                <div className="sosial-media">
                  <FaWhatsapp className="whatsapp"></FaWhatsapp>
                  <input
                    type="text"
                    name="whatsapp"
                    value={SocialInputs.whatsapp}
                    onChange={handleChangeInput}
                    className="sosial-media-intputs"
                    placeholder="Your Whatsapp link"
                  />
                </div>
                <SaveButton>
                  <button
                    onClick={UpdateSocialLinkUser}
                    className="save-button"
                  >
                    Save
                  </button>
                </SaveButton>
              </SosialMediaSelection>
            </TabPanel>
          </Tabs>
        </Header>
      </LittleContainer>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {
          setModalShow(false), setConfirm(true);
        }}
      />
      <DeleteAccountConfirmSmyle
        show={confirm}
        onHide={() => setConfirm(false)}
      />
    </ProfileEditing>
  );
};

export default ProfileEdit;