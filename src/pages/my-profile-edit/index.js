import React, { useState, useEffect } from "react";
import { Loader, MultiSelect } from "@mantine/core";
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
import CustomBreadcrumb from "../../shared/components/breadcrumb";
import { myaxios, myaxiosprivate, updateToken } from "../../api/myaxios";
import { useForm } from "react-hook-form";
import { logout } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";
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

// const OnClickSaveOrCancelButton = (clicked) => {
//   clicked.preventDefault();
//   let saveAndCancelid = clicked.getAttribute("id");

//   switch (saveAndCancelid) {
//     case "save_button":
//       document
//         .querySelector("#save_button")
//         .setAttribute(
//           "style",
//           "background: #3801B0; border-radius: 8px; color: #FFFFFF;"
//         );
//       document
//         .querySelector("#cancel_button")
//         .setAttribute(
//           "style",
//           "background: #FFFFFF; color: #3800B0; border: 2px solid #3800B0;"
//         );
//       break;
//     case "cancel_button":
//       document
//         .querySelector("#save_button")
//         .setAttribute(
//           "style",
//           "background: #FFFFFF; color: #3800B0; border: 2px solid #3800B0;"
//         );
//       document
//         .querySelector("#cancel_button")
//         .setAttribute(
//           "style",
//           "background: #3800B0; border-radius: 8px; color: #FFFFFF;"
//         );
//       break;
//   }
// };

function MyVerticallyCenteredModal(props) {
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [reason, setReason] = useState();
  const [reasons, setReasons] = useState([]);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setError("");
    myaxios
      .get("/api/v1/settings/reasons/get")
      .then(({ data }) => {
        setReasons(data.data);
      })
      .catch((err) => setError(err.message));
  }, []);
  const handleDelete = async () => {
    props.onHide();
    await myaxiosprivate
      .get("/api/v1/profiles/delete?", {
        params: {
          type: reason,
          // password,
          comment,
        },
      })
      .then((res) => {
        localStorage.clear();
        dispatch(logout());
        updateToken(null);
        navigate("/");
        window.location.reload();
      })
      .catch((err) => setError(err.message));
  };

  if (error) {
    return <div className="flex justify-center items-center h-96">{error}</div>;
  }
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
        {/* <h1 className="enter-password-title">
          Enter password to allow deletion
        </h1>
        <Password
          className="info_input"
          placeholder="Password"
          value={password}
          type={password ? "password" : "text"}
          onChange={(e) => setPassword(e.target.value)}
        /> */}
        <div className="delete-causes-items-container">
          <p>Reason for deleting the account (optional)</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            >
              {reasons?.map((item) => (
                <FormControlLabel
                  value={item.id}
                  control={<Radio />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
        <div className="reson-text-input">
          <input
            type="text"
            className="info_input"
            placeholder="Describe your reason"
            disabled={reason !== "Other"}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDelete}>Delete account</Button>
      </Modal.Footer>
    </Modal>
  );
}

// const OnGenderButtonClick = (clicked) => {
//   let element_id = clicked.getAttribute("id");

//   switch (element_id) {
//     case "female":
//       document
//         .querySelector("#female")
//         .setAttribute(
//           "style",
//           " background: #ECEEF7; border: 2px solid #2D3043; border-radius: 8px; z-index: 3;"
//         );
//       document
//         .querySelector("#male")
//         .setAttribute(
//           "style",
//           "background: #FFFFFF; border: 2px solid #ECEEF7; border-radius: 8px; z-index: 0"
//         );
//       break;
//     case "male":
//       document
//         .querySelector("#male")
//         .setAttribute(
//           "style",
//           " background: #ECEEF7; border: 2px solid #2D3043; border-radius: 8px; z-index: 3"
//         );
//       document
//         .querySelector("#female")
//         .setAttribute(
//           "style",
//           "background: #FFFFFF; border: 2px solid #ECEEF7; border-radius: 8px; z-index: 0"
//         );
//       break;
//   }
// };

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
      label: "Bussiness",
      value: 2,
    },
  ];

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
    myaxiosprivate
      .post("/api/v1/profiles/social/links/update", {
        facebook: SocialInputs.facebook,
        instagram: SocialInputs.instagram,
        twitter: SocialInputs.twitter,
        tiktok: SocialInputs.tiktok,
        telegram: SocialInputs.telegram,
        whatsapp: SocialInputs.whatsapp,
      })
      .then((res) => {
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

  useEffect(() => {
    setError("");
    myaxiosprivate
      .get("/api/v1/profiles/social/links")
      .then((res) => {
        setGetSocialLinksUser(res.data.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

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
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    reValidateMode: "onChange",
    mode: "all",
  });
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [dateValue, setDateValue] = useState(new Date());
  const [file, setFile] = useState(null);
  const [allCountries, setAllCountries] = useState([]);
  const [error, setError] = useState(""); //error use in ui
  const [interestId, setInterestId] = useState([]);
  const [clicked, setClicked] = useState(userInfo?.gender?.id);
  useEffect(() => {
    const fetchCountryAndUserData = async () => {
      setLoading(true);
      setError("");
      await myaxiosprivate
        .get("/api/v1/settings/countries/get")
        .then((res) => {
          setAllCountries(res.data.data);
        })
        .catch((err) => {
          setError(err.message);
        });
      setError("");
      await myaxiosprivate
        .get("/api/v1/profiles/edit")
        .then(({ data }) => {
          setUserInfo(data.data);
          data.data.interests?.forEach((item) =>
            setInterestId((prevInterestId) => [...prevInterestId, item.id])
          );
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
        });
    };
    fetchCountryAndUserData();
  }, []);
  useEffect(() => {
    if (userInfo) {
      setValue("full_name", userInfo.full_name);
      setValue("email", userInfo.email);
      setValue(
        "country",
        userInfo?.country?.id ? userInfo.country.id : userInfo.country
      );
      setValue("dob", userInfo.dob);
      setValue("number", userInfo.number);
      setValue("about", userInfo.about);
    }
  }, [userInfo]);
  const handleCalendarChange = (e) => {
    setDateValue(new Date(e));
    setShowCalendar(!showCalendar);
  };
  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };
  const handleChangeUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    setUserInfo({ ...userInfo, dob: dateValue });
  }, [dateValue]);
  const countryFinder = () => {
    const countryName = allCountries.filter(
      (item) => item.id === userInfo.country
    );
    return countryName[0]?.name;
  };
  const handleGenderSelect = (e) => {
    setClicked(e);
    if (e === "male") {
      setUserInfo({ ...userInfo, gender: 1 });
    } else {
      setUserInfo({ ...userInfo, gender: 2 });
    }
  };
  // ============================================================================================================================

  // ===================================================UPDATE PROFILE INFORMATION===============================================

  const handleUpdateInfoProfile = async ({
    full_name,
    country,
    email,
    number,
    slug,
    about,
  }) => {
    // e.preventDefault();
    const uniqueArr = [
      ...new Set(
        typeof userInfo.interests[0] === "object"
          ? interestId
          : userInfo.interests
      ),
    ];
    const formData = new FormData();
    formData.append("full_name", full_name);
    formData.append("email", email);
    formData.append("username", slug);
    formData.append("phone", number);
    formData.append("about", about);
    formData.append(
      "dob",
      moment(userInfo.dob || dateValue).format("DD.MM.YYYY")
    );
    formData.append("interests", uniqueArr.length ? uniqueArr : " ");
    formData.append("file", file);
    formData.append("country", userInfo.country?.id ?? country);
    formData.append("gender", userInfo.gender?.id ?? userInfo.gender);

    await myaxiosprivate
      .post("/api/v1/profiles/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success("Successfully updated");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // ============================================================================================================================
  // =======================================================VERIFICATION PASSPORT API============================================
  const [selectPassport, setSelectPassport] = useState(null);
  const handleVerifyPassport = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectPassport);
    try {
      await myaxiosprivate
        .post("/api/v1/profiles/verify", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
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

  const breadCrumb = [
    {
      title: "Main",
      to: "/",
    },
    {
      title: "Profile",
      to: "/my-profile",
    },
    {
      title: "Edit Profile Information",
    },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader size="xl" />
      </div>
    );
  }
  // =================================================================================================================
  return (
    <ProfileEditing>
      <LittleContainer>
        <Header>
          {/*<p className="top-buttons">*/}
          {/*  Main {">"} Profile {">"} Edit Profile Information*/}
          {/*</p>*/}
          <p className="top-buttons">
            <CustomBreadcrumb links={breadCrumb} />
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
                <form onSubmit={handleSubmit(handleUpdateInfoProfile)}>
                  <EditingItem>
                    <ProfilePicture>
                      <figure className="image-figure">
                        <img
                          src={
                            !userInfo.avatar
                              ? "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                              : `${userInfo.avatar}`
                          }
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
                    {errors.full_name && (
                      <p className="mx-14 mt-2 text-red-500 text-xs">
                        {errors.full_name.message}
                      </p>
                    )}
                    <EditingInputs>
                      <input
                        type="text"
                        name="full_name"
                        // value={getUserInfoProfile.full_name}
                        defaultValue={userInfo.full_name}
                        // onChange={handleChangeUserInfo}
                        placeholder="Full name"
                        className="editing-inputs"
                        {...register("full_name", {
                          required: "Full name is required",
                          min: 8,
                        })}
                      />
                    </EditingInputs>
                  </EditingItem>
                  <GenderButtons>
                    <button
                      type="button"
                      onClick={(e) => handleGenderSelect(e.target.id)}
                      className={
                        userInfo.gender.id === 2 || clicked === "female"
                          ? "clicked gender_buttuns female-button"
                          : "gender_buttuns female-button"
                      }
                      id="female"
                    >
                      Female
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleGenderSelect(e.target.id)}
                      className={
                        userInfo.gender.id === 1 || clicked === "male"
                          ? "clicked gender_buttuns male-button"
                          : "gender_buttuns male-button"
                      }
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
                        {errors.country && (
                          <p className="mx-10 mb-1 text-red-500 text-xs">
                            {errors.country.message}
                          </p>
                        )}
                        <h5 className="country-name">
                          {userInfo.country.name
                            ? userInfo.country.name
                            : countryFinder()}
                        </h5>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </div>
                      <ul className="countries-list">
                        {allCountries.map((country) => (
                          <li
                            key={country.id}
                            value={country.name}
                            onClick={(e) =>
                              setUserInfo({
                                ...userInfo,
                                country: country.id,
                              })
                            }
                            id={country.id}
                            className="option"
                          >
                            {country.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {errors.email && (
                      <p className="mx-10 mt-2 text-red-500 text-xs">
                        {errors.email.message}
                      </p>
                    )}
                    <div className="email-container">
                      <input
                        type="email"
                        defaultValue={userInfo.email}
                        {...register("email", {
                          required: "Email is required",
                        })}
                        name="email"
                        className="info-input-email"
                        placeholder="Email"
                      />

                      {/* <a href='#' className='change-button'>Change</a> */}
                    </div>
                    <div className="email-container">
                      <input
                        type="tel"
                        // onChange={handleChangeUserInfo}
                        // value={getUserInfoProfile.number}
                        defaultValue={userInfo.number}
                        name="number"
                        className="info-input-email"
                        placeholder="Phone Number"
                        {...register("number")}
                      />
                      {/* <a href='#' className='change-button'>Change</a> */}
                    </div>
                    <input
                      type="text"
                      value={moment(userInfo.dob).format("DD.MM.YYYY")}
                      readOnly
                      className="info_input"
                      placeholder="Date of birth"
                      onFocus={() => setShowCalendar(true)}
                    />
                    <Calendar
                      defaultValue={userInfo.dob}
                      locale="en-EN"
                      closeCalendar={true}
                      next2Label={false}
                      prev2Label={false}
                      onChange={handleCalendarChange}
                      value={dateValue}
                      className={showCalendar ? "" : "hide"}
                    />
                    {errors.slug && (
                      <p className="mx-14 mt-2 text-red-500 text-xs">
                        {errors.slug.message}
                      </p>
                    )}
                    <div className="wish-me-input-title">
                      <h5 className="wish-me-title">wish.me/</h5>
                      <input
                        type="text"
                        name="slug"
                        // value={getUserInfoProfile.slug}
                        defaultValue={userInfo.slug}
                        // onChange={handleChangeUserInfo}
                        className="info_input-small"
                        placeholder="username"
                        {...register("slug", {
                          required: "Username is required",
                        })}
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
                          defaultValue={[...new Set(interestId)]}
                          onChange={(e) =>
                            setUserInfo({ ...userInfo, interests: e })
                          }
                          placeholder="Interests"
                          maxSelectedValues={data.length}
                        />
                      </div>
                    </div>
                    {errors.about && (
                      <p className="mx-10 mt-2 text-red-500 text-xs">
                        {errors.about}
                      </p>
                    )}
                    <div className="text-area-container">
                      <textarea
                        rows={5}
                        cols={5}
                        name="about"
                        // value={getUserInfoProfile.about}
                        defaultValue={userInfo.about}
                        // onChange={handleChangeUserInfo}
                        {...register("about", {
                          required: "About is required",
                          min: 10,
                        })}
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
                        type="button"
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
                {/* <PasswordSettingsInputs> */}
                <Password
                  className="info_input"
                  placeholder="Old Password"
                  type={password ? "password" : "text"}
                />
                {/* </PasswordSettingsInputs> */}
                {/* <PasswordSettingsInputs> */}
                <Password
                  className="info_input"
                  placeholder="New Password"
                  type={password ? "password" : "text"}
                />
                {/* </PasswordSettingsInputs> */}
                <div className="confirm-button">
                  <button className="password-save-button">Save</button>
                </div>
                <h1 className="connetc-sosial-netwok-title">
                  Connect sosial networks
                </h1>
                <SosialMediaButtons>
                  <button className="facebook-button">
                    <FaFacebook className="facebook-icon" />
                    <h1 className="facebook-title" style={{ margin: "0" }}>
                      Disconnect Facebook
                    </h1>
                  </button>
                  <button className="google-button">
                    <FaGoogle className="google-icon" />
                    <h1 className="google-title" style={{ margin: "0" }}>
                      Connect Google
                    </h1>
                  </button>
                  <button className="apple-button">
                    <FaApple className="apple-icon" />
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
                  <form onSubmit={handleVerifyPassport}>
                    <p className="title">
                      To start fundraising for yourself, you need to pass
                      verification. To <br /> do this, just send a photo of your
                      passport.
                    </p>
                    <input
                      type="file"
                      onChange={(e) => setSelectPassport(e.target.files[0])}
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
