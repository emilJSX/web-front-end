import { useEffect, useState } from "react";
import LoginSystem from "../Login";
import {
  Main,
  OpacityBlog,
  Container,
  Button1,
  Emails,
  ForgotPassword,
} from "../Login/Login.Styled";
import EmailConfirm from "../PhoneNumber";
import { Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BiX } from "react-icons/bi";
import {
  Againsms,
  Edit,
  Paragraph,
  Second,
  Title,
} from "../PhoneNumber/Phone.Styled";
import OtpInput from "react-otp-input";

import TestImage from "../../../assets/images/50a8343b26e4ea599ea4c76556db95d3.png";

import {
  ButtonSignUp,
  Button2,
  ParagraphChek,
  Facebook,
  Goapp,
  Google,
  Apple,
  FacebookP,
  GoogleP,
  AppleP,
  ButtonOR,
  Dispno,
  Email,
  Password,
  InputChek,
  Username,
} from "../Register/Register.Styled";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { FaApple, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import {
  Calendar,
  Number,
  Options,
  Selects,
} from "../Information/Information.Styled";
import { useRef } from "react";
import {
  Autotravel,
  Interest,
  Notdark,
  Time,
} from "../Interests/Interests.Styled";
import { MultiSelect } from "@mantine/core";
import { CgTrash } from "react-icons/cg";
import {
  ButtonCon,
  ButtonLater,
  DivImg,
  Image,
  List,
  ListtoList,
  MainDiv,
  Upload,
} from "../Pasport/Pasport.Styled";
import { RiFileDownloadLine } from "react-icons/ri";
import { LoginSocialFacebook } from "reactjs-social-login";
import {
  Paragraphs,
  Seconds,
  Send,
} from "../PasswordRecoveryMessage/RecoveryMessage.Styled";
import { loginControll } from "../../../store/slices/counterSlice";
import { myaxios, myaxiosprivate } from "../../../api/myaxios";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../store/slices/authSlice";
import OtpTimer from "./OtpTimer";
export function Login_ConnectionSystem({ setShowes }) {

  const navigate = useNavigate();
  const [changeLoginSystemTab, setLoginSystemTab] = useState(0);

  // Login Modal - 0
  // Recovery Password - 1
  // Password recovery message - 2
  // ============================== LOGIN CONFIG ========================================

  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [showPass, setShowPass] = useState(false);
  const [showViaEmail, setShowViaEmail] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginWithEmail = ({ email, password }) => {
    myaxios.get("sanctum/csrf-cookie").then(() => {
      myaxios
        .post("api/v1/login", { email, password })
        .then((response) => {
          //set response in local storage && redux store
          localStorage.setItem("userData", JSON.stringify(response.data));
          dispatch(setUserData({ userData: response.data }));
          navigate("/my-profile");
        })
        .catch((error) => {
          if (error?.response?.status === 404)
            //response message user not found
            setError("Email or password is wrong");
          else {
            setError("Something went wrong ...");
          }
          setTimeout(() => {
            setError(" ");
          }, 5000);
        });
    });
  };

  const getPasswordRecoveryModal = () => {
    setLoginSystemTab(1);
  };

  // ============================== END LOGIN CONFIG ====================================

  // ============================== RECOVERY PASSWORD CONFIG ============================
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryError, setRecoveryError] = useState(null);
  const [recoverySuccess, setRecoverySuccess] = useState(null);
  const handlePasswordRecovery = async ({ email }) => {
    setRecoveryEmail(email);
    await myaxios
      .get("api/v1/registration/get-code", { params: { email } })
      .then(() => {
        setLoginSystemTab(2);
      })
      .catch((err) => {
        setRecoveryError(
          err?.response?.message != null
            ? err.response.message
            : "Something went wrong..."
        );
      });
  };

  // ============================== END RECOVERY PASSWORD CONFIG ========================

  // ======================= OTP COUNT DOWN CONFIG =============================

  function sendOtpAgain() {
    myaxios
      .get("https://api.wishx.me/api/v1/registration/get-code", {
        params: {
          email: recoveryEmail,
        },
      })
      .then((res) => {
        if (res?.status === 200) setRecoverySuccess("Check your email");
      })
      .catch((err) => {
        setRecoveryError(
          err?.response?.message != null
            ? err.response.message
            : "Something went wrong..."
        );
      });
  }


  // ======================= END OTP COUNT DOWN CONFIG =========================

  return (
    <Tabs selectedIndex={changeLoginSystemTab}>
      {/* ============================= LOGIN MODAL ================================== */}
      <TabPanel>
        <Main>
          <OpacityBlog></OpacityBlog>
          <Container style={{ zIndex: "10" }}>
            <Button1 onClick={() => setShowes(false)}>
              <BiX style={{ fontSize: "25px" }} />
            </Button1>
            <Title>Log in</Title>
            <Paragraph>
              Not a user?
              <Button2 onClick={() => getSignUpModal()}>Sign up</Button2>
            </Paragraph>
            <Facebook>
              <BsFacebook
                style={{
                  fontSize: "22px",
                  color: "white",
                  marginRight: "10px",
                }}
              />
              <LoginSocialFacebook
                appId="488149573514075"
                onResolve={(responseFb) => {
                  console.log(responseFb);
                }}
                onReject={(error) => {
                  console.log(error);
                }}
              >
                <FacebookP>Facebook</FacebookP>
              </LoginSocialFacebook>
            </Facebook>
            <Goapp>
              <Google>
                <FaGoogle
                  style={{
                    fontSize: "22px",
                    marginRight: "10px",
                    color: "#3800B0",
                  }}
                />
                <GoogleP>Google</GoogleP>
              </Google>
              <Apple>
                <FaApple
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginRight: "10px",
                  }}
                />
                <AppleP>Apple</AppleP>
              </Apple>
            </Goapp>
            <ButtonOR onClick={() => setShowViaEmail(!showViaEmail)}>
              Or via email
            </ButtonOR>

            {showViaEmail && (
              <Dispno>
                <form onSubmit={handleSubmit(handleLoginWithEmail)}>
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    {error && (
                      <p className="mx-14 mt-2 text-red-500 text-xs">{error}</p>
                    )}
                    <div className="flex justify-center">
                      <Email
                        placeholder="Email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                    </div>
                    {formState.errors.email && (
                      <p className="mx-14 mt-2 text-red-500 text-xs">
                        {formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div className="relative flex justify-center">
                      <Password
                        placeholder="Password"
                        type={!showPass ? "password" : "text"}
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      <AiOutlineEye
                        className="eye_button cursor-pointer"
                        onClick={() => {
                          setShowPass(!showPass);
                        }}
                        style={{ position: "absolute" }}
                      />
                    </div>
                  </div>

                  {formState.errors.password && (
                    <p className="mx-14 mt-2 text-red-500 text-xs">
                      {formState.errors.password.message}
                    </p>
                  )}

                  <ForgotPassword onClick={getPasswordRecoveryModal}>
                    Forgot password
                  </ForgotPassword>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ButtonSignUp type="submit">Log in</ButtonSignUp>
                  </div>
                </form>
              </Dispno>
            )}
          </Container>
        </Main>
      </TabPanel>
      {/* ============================= END LOGIN MODAL =================================== */}

      {/* =============================== PASSOWORD RECOVERY MODAL ============================== */}
      <TabPanel>
        <Main>
          <OpacityBlog></OpacityBlog>
          <Container style={{ zIndex: "10" }}>
            <Button1 onClick={() => setShowes(false)}>
              <BiX style={{ fontSize: "20px" }} />
            </Button1>
            <Title>Password recovery</Title>
            <Paragraph>Enter your email. We’ll send recovery code</Paragraph>
            <form onSubmit={handleSubmit(handlePasswordRecovery)}>
              {recoveryError && (
                <p className="mx-14 mt-2 text-red-500 text-xs">
                  {recoveryError}
                </p>
              )}
              <div className="flex justify-center">
                <Email
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {formState.errors.email && (
                <p className="mx-14 mt-2 text-red-500 text-xs">
                  {formState.errors.email.message}
                </p>
              )}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <ButtonSignUp type="submit">Continue</ButtonSignUp>
              </div>
            </form>
          </Container>
        </Main>
      </TabPanel>
      {/* =============================== END PASSOWORD RECOVERY MODAL ========================== */}

      {/* =============================== PASSOWORD RECOVERY MESSAGE MODAL ============================== */}
      <TabPanel>
        <Main>
          <OpacityBlog></OpacityBlog>
          <Container style={{ zIndex: "10" }}>
            <Button1
              onClick={() => {
                let body = document.querySelector("body");
                body.setAttribute(
                  "style",
                  "overflow-y: scroll; overflow-x: hidden"
                );
                setShowes(false);
              }}
            >
              <BiX style={{ fontSize: "20px" }} />
            </Button1>
            <Title>We sent recovery code</Title>
            <Paragraph>
              For recovery, please follow the code in your email.
            </Paragraph>
            {recoverySuccess && (
              <p className="mx-12 mb-2 text-green-500 text-xs">
                {recoverySuccess}
              </p>
            )}
            {recoveryError && (
              <p className="mx-12 mb-2 text-red-500 text-xs">{recoveryError}</p>
            )}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ButtonSignUp
                onClick={
                  recoverySuccess ||
                  (!recoveryError &&
                    (() => {
                      navigate("/set-new-password", {
                        state: { recoveryEmail },
                      });
                    }))
                }
              >
                Ok
              </ButtonSignUp>
            </div>
            <Paragraphs>
              Didn’t get an email? <OtpTimer passRecover={sendOtpAgain} />
            </Paragraphs>
          </Container>
        </Main>
      </TabPanel>
      {/* =============================== END PASSOWORD RECOVERY MESSAGE MODAL ========================== */}

      {/* <TabPanel>
                {getRegModal ? <SignUp_ConnectionSystem setregisterModal={setregisterModal} />:null}
            </TabPanel> */}
    </Tabs>
  );
}

export function SignUp_ConnectionSystem({
  setregisterModal,
  setEmailOtpModal,
}) {
  const getUserToken = localStorage.getItem("userData");
  console.log(getUserToken);
  // MODAL CONFIGURATION =============
  const [tabIndex, setTabIndex] = useState(0);

  // 0 - Sign Up
  // 1 - Email OTP
  // 2 - Your Information
  // 3 - Interests
  // 4 - Pasport
  // 5 - Verification Message

  // END MODAL CONFIGURATION ===========

  // =========================== SIGN UP CONFIG ===============================
  const [shower, setShower] = useState(false);
  const [password, setPassword] = useState("password");

  // Register API
  const [getName, setGetName] = useState("");
  const [getEmail, setGetEmail] = useState("");
  const [getPassword, setGetPassword] = useState("");
  const [getUserNameValue, setUserNameValue] = useState();

  // END Register API
  const [emailErrorMessage, setErrorMessage] = useState("");
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [userNameAviableMessage, setUserNameAviableMessage] = useState("");
  const [userNameCheckLength, setUsernameCheckLength] = useState();

  const USERNAME_REGEX = new RegExp("^[A-Za-z0-9]*$");
  const [getUsernameRegex, setUsernameRegex] = useState();

  const navigate = useNavigate();

  const getProfileUrl = () => {
    navigate("/my-profile");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      userName: "",
    },
  });

  const clickEmail = () => {
    setShower(!shower);
  };

  const checkUsername = async () => {
    const controller = new AbortController();
    await myaxios
      .get("/api/v1/username/check", {
        params: { username: String(getUserNameValue) },
        signal: controller.signal,
      })
      .then((res) => {
        if (res.status === 200) {
          setUserNameErrorMessage("");
          setUserNameAviableMessage("Username available");
        }
      })
      .catch((err) => {
        if (err.response.status === 409) {
          setUserNameAviableMessage("");
          setUserNameErrorMessage("Username is already in use");
        } else {
          setUserNameErrorMessage("Something went wrong...");
        }
      });
  };
  // Parsing Extract the Name from an Email Address
  const HandleGetRegister = ({ email, password, username }) => {
    const result_getname = email.split("@")[0];
    console.log(result_getname);
    setGetName(result_getname);
    setGetEmail(email);
    myaxios
      .get("/api/v1/registration/get-code", { params: { email: email } })
      .then(() => {
        setTabIndex(1);
      })
      .catch((err) => {
        setErrorMessage("The email has already been taken.");
      });
  };

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  // check username with debounce
  const debouncedCheckUsername = useRef(debounce(checkUsername, 1000)).current;

  useEffect(() => {
    if (!USERNAME_REGEX.test(getUserNameValue)) {
      setUsernameRegex("In username not be used symbols ");
    } else {
      setUsernameRegex("");
    }
    if (getUserNameValue?.length >= 6) {
      setUsernameCheckLength("");
      setUsernameRegex("");
      checkUsername();
    } else if (getUserNameValue?.length <= 6) {
      setUsernameCheckLength("Username must be 6 symbols");
    } else {
      setUsernameRegex("");
      setUserNameErrorMessage("");
      setUsernameCheckLength("");
    }
  }, [getUserNameValue]);

  // ======================= END SIGN UP CONFIG ================================

  // ======================= YOUR INFORMATION CONFIG ===========================

  const [getCountryList, setCountryList] = useState([]);
  const [getCountryNameId, setCountryNameId] = useState();
  const [getUserPhoneNumber, setUserPhoneNumber] = useState();
  const [getUserBirthday, setUserBirthday] = useState("");
  const [getUserFullName, setUserFullName] = useState("");

  // UPDATE PROFILE API

  const handleUpdateInfoProfile = (e) => {
    e.preventDefault();
    myaxiosprivate
      .post("api/v1/profiles/update", {
        full_name: getUserFullName,
        phone: getUserPhoneNumber,
        country: getCountryNameId,
        dob: getUserBirthday,
      })
      .then((res) => {
        console.log(res);
        setTabIndex(3);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // END UPDATE PROFILE API

  // ======================= END YOUR INFORMATION CONFIG =======================

  // ======================= OTP COUNT DOWN CONFIG =============================
  const INITIAL_COUNT = 20;
  const STATUS = {
    STARTED: "Started",
    STOPPED: "Stopped",
  };
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STOPPED);
  const [getErrOtpRecovery, setErrOtpRecovery] = useState("");

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  function getRequestOtpRecovery() {
    myaxios
      .get("/api/v1/registration/get-code", { params: { email: getEmail } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setErrOtpRecovery("Someting went wrong,please try again later");
      });
  }

  const handleStart = (clickEvent) => {
    clickEvent.preventDefault();
    setStatus(STATUS.STARTED);

    if (status === STATUS.STOPPED ? getRequestOtpRecovery() : null)
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        console.log(getEmail, "EMAIL USER ARE SEND");
        setStatus(STATUS.STOPPED);
        handleReset();
      }
  };

  const handleReset = () => {
    setStatus(STATUS.STOPPED);
    setSecondsRemaining(INITIAL_COUNT);
  };
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
        handleReset();
      }
    },
    status === STATUS.STARTED ? 1000 : null
    // passing null stops the interval
  );

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const twoDigits = (num) => String(num).padStart(2, "0");

  // ======================= END OTP COUNT DOWN CONFIG =========================

  // ======================== OTP EMAIL CONFIG =================================

  const [otpEmailCode, setOtp] = useState();
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showErrorOtpMail, setErrorOtpMail] = useState("");

  const getOtpRegistrationuser = (e) => {
    e.preventDefault();
    myaxios
      .post("api/v1/register", {
        otp: otpEmailCode,
        name: getUserNameValue, //getEmail.split("@")[0]
        email: getEmail,
        password: getPassword,
        confirm_password: getPassword,
      })
      .then((response) => {
        if (response.data.success === true) {
          console.log(response, "OTP SUCCESS REGISTERED!!!");
          const token = Array(response.data.data.token);
          localStorage.setItem("token", JSON.stringify(token));
          setTabIndex(2);
          try {
            myaxiosprivate.get("/api/v1/settings/countries/get").then((res) => {
              console.log(res + "countries");
              setCountryList(res.data.data);
            });
          } catch (error) {
            console.log(error);
          }
        }
      })
      .catch((err) => {
        setErrorOtpMail("OTP code is wrong");
      });
  };

  const handleChange = (otp) => {
    setOtp(otp);
  };

  // ======================== END OTP EMAIL CONFIG =============================

  // ======================== INTERESTS CONFIG =================================

  const [getInterestsIdApi, setInterestsIdApi] = useState();
  const getInterestsId = (item) => {
    setInterestsIdApi(item);
  };

  const handleSendInterestData = async (event) => {
    const formUpdateData = new FormData();

    formUpdateData.append("interests", getInterestsIdApi);
    try {
      await myaxiosprivate
        .post("/api/v1/profiles/update", { data: formUpdateData })
        .then((res) => {
          console.log(res + "result of update");
          setTabIndex(4);
        });
    } catch {
      console.log("");
    }
  };

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

  // ======================== END INTERESTS CONFIG =============================

  // ============================ PASPORT CONFIG ===============================
  const [selectPassport, setselectPassport] = useState(null);
  const handleFileSelect = (e) => {
    setselectPassport(e.target.files[0]);
  };

  const getLaterToNextVerificationModal = () => {
    setTabIndex(5);
  };
  const handleVerifyPassport = async (e) => {
    const formGetPassportData = new FormData();
    formGetPassportData.append("file", selectPassport);

    await myaxiosprivate
      .post("/api/v1/profiles/verify", { data: formGetPassportData })
      .then(() => {
        setTabIndex(5);
      })
      .catch((error) => {});
  };
  // ============================ END PASPORT CONFIG ===============================
  return (
    <Tabs selectedIndex={tabIndex}>
      {/* ================================== SIGN UP ================================== */}
      <TabPanel>
        <Main>
          <OpacityBlog></OpacityBlog>

          <Container style={{ zIndex: "10", overflow: "hidden" }}>
            <ToastContainer />
            <Button1
              onClick={() => {
                let body = document.querySelector("body");
                body.setAttribute(
                  "style",
                  "overflow-y: scroll; overflow-x: hidden"
                );
                localStorage.removeItem("UserToken=");
                setregisterModal(false);
              }}
            >
              <BiX style={{ fontSize: "20px" }} />
            </Button1>
            <Title>Sign Up</Title>
            <Paragraph>
              Already have account?<Button2> Log in</Button2>
            </Paragraph>
            <Facebook>
              <BsFacebook
                style={{
                  marginRight: "10px",
                  fontSize: "22px",
                  color: "white",
                }}
              />
              <FacebookP>Facebook</FacebookP>
            </Facebook>
            <Goapp>
              <Google>
                <FaGoogle
                  style={{
                    fontSize: "22px",
                    color: "#3800B0",
                    marginRight: "10px",
                  }}
                />
                <GoogleP>Google</GoogleP>
              </Google>
              <Apple>
                <FaApple
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginRight: "10px",
                  }}
                />
                <AppleP>Apple</AppleP>
              </Apple>
            </Goapp>
            <ButtonOR onClick={clickEmail}>Or via email</ButtonOR>

            {shower && (
              <Dispno>
                <form onSubmit={handleSubmit(HandleGetRegister)}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Email
                      placeholder="Email"
                      style={{ width: "400px" }}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                  </div>

                  {emailErrorMessage && (
                    <p className="mx-14 mt-2 text-red-500 text-xs">
                      The email has already been taken.
                    </p>
                  )}
                  {errors.email && (
                    <p className="mx-14 mt-2 text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}

                  <Username
                    placeholder="Username"
                    style={{ width: "400px", marginTop: "13px" }}
                    required
                    onChange={debounce((e) => {
                      if (e) setUserNameValue(e.target.value);
                    }, 500)}
                  />
                  {userNameAviableMessage && (
                    <p className="mx-14 mt-2 text-green-500 text-xs">
                      {userNameAviableMessage}
                    </p>
                  )}
                  {getUsernameRegex && (
                    <p className="mx-14 mt-2 text-red-500 text-xs">
                      {getUsernameRegex}
                    </p>
                  )}

                  {userNameCheckLength && (
                    <p className="mx-14 mt-2 text-red-500 text-xs">
                      {userNameCheckLength}
                    </p>
                  )}

                  {userNameErrorMessage && (
                    <p className="mx-14 mt-2 text-red-500 text-xs">
                      {userNameErrorMessage}
                    </p>
                  )}
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Password
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                        min: 5,
                      })}
                      onChange={(get_userpassword) =>
                        setGetPassword(get_userpassword.target.value)
                      }
                      type={password ? "password" : "text"}
                      style={{ width: "400px" }}
                    />
                  </div>
                  <AiOutlineEye
                    className="eye_button"
                    onClick={() => {
                      setPassword(!password);
                    }}
                    style={{ float: "right" }}
                  />
                  {errors.password && (
                    <p className="mx-14 my-2 text-red-500 text-xs">
                      {errors.password.message}
                    </p>
                  )}

                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      paddingLeft: "40px",
                      paddingBottom: "12px",
                      marginTop: "16px",
                    }}
                  >
                    <InputChek type="checkbox" style={{ margin: "0" }} />
                    <Link target="_blank" to="/privacy">
                      <ParagraphChek style={{ marginLeft: "10px" }}>
                        Terms of use
                      </ParagraphChek>
                    </Link>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ButtonSignUp type="submit">Sign Up</ButtonSignUp>
                    {/*onClick={nextstep}*/}
                  </div>
                </form>
              </Dispno>
            )}
          </Container>
        </Main>
      </TabPanel>
      {/* ================================== END SIGN UP ==================================*/}

      {/* ================================== OTP EMAIL ================================== */}
      <TabPanel>
        <Main>
          <OpacityBlog></OpacityBlog>
          <Container style={{ zIndex: "10", overflow: "hidden" }}>
            <form>
              <Button1
                onClick={() => {
                  let body = document.querySelector("body");
                  body.setAttribute(
                    "style",
                    "overflow-y: scroll; overflow-x: hidden"
                  );
                  localStorage.removeItem("UserToken=");
                  setregisterModal(false);
                }}
              >
                <BiX style={{ fontSize: "20px" }} />
              </Button1>
              <Title>Confirm your email </Title>
              <Paragraph>Enter the code we sent to your email </Paragraph>
              <div className="content_container" style={{ height: "60px" }}>
                {/* <Edit className='edit_number'>Edit phone number</Edit> */}
                <Againsms onClick={handleStart} className="send_message">
                  Send SMS Again
                </Againsms>
                <Second className="timer">
                  {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
                </Second>
              </div>
              <div className="otp_input_div">
                <OtpInput
                  className="otp_input"
                  value={otpEmailCode}
                  onChange={handleChange}
                  numInputs={6}
                  separator={<span> </span>}
                />
              </div>
              {showErrorOtpMail && (
                <p className="mx-14 mt-2 mb-3 text-red-500 text-xs">
                  {showErrorOtpMail}
                </p>
              )}
              <div className="otpsend-btn">
                <button onClick={getOtpRegistrationuser}>Confirm</button>
              </div>
            </form>
          </Container>
        </Main>
      </TabPanel>
      {/* ================================== END OTP EMAIL ================================== */}

      {/* ================================= YOUR INFORMATION ============================== */}
      <TabPanel>
        <Main>
          <OpacityBlog></OpacityBlog>
          <Container style={{ zIndex: "10" }}>
            <form>
              <Button1
                onClick={() => {
                  let body = document.querySelector("body");
                  body.setAttribute(
                    "style",
                    "overflow-y: scroll; overflow-x: hidden"
                  );
                  localStorage.removeItem("UserToken=");
                  setregisterModal(false);
                }}
              >
                <BiX style={{ fontSize: "20px" }} />
              </Button1>
              <Title>Your information</Title>
              <Selects onChange={(e) => setCountryNameId(e.target.value)}>
                <Options selected disabled>
                  Select Country
                </Options>
                {getCountryList.map((data) => (
                  <>
                    <Options value={data.id}>{data.name}</Options>
                  </>
                ))}
              </Selects>
              <Number
                id="number"
                type="text"
                required
                onChange={(e) => setUserPhoneNumber(e.target.value)}
                placeholder="Phone number"
              />
              <Number
                id="number"
                type="text"
                required
                onChange={(e) => setUserFullName(e.target.value)}
                placeholder="Full name"
              />
              <Number
                className="mb-3"
                required
                id="number"
                type="text"
                placeholder="Date of birth (expample: 12.09.2023)"
                onChange={(e) => setUserBirthday(String(e.target.value))}
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ButtonSignUp onClick={handleUpdateInfoProfile}>
                  Continue
                </ButtonSignUp>
              </div>
            </form>
          </Container>
        </Main>
      </TabPanel>
      {/* ================================= END YOUR INFORMATION ============================== */}

      {/* ================================= INTERESTS ============================== */}
      <TabPanel>
        <Main>
          <OpacityBlog></OpacityBlog>
          <Container style={{ zIndex: "10" }}>
            <form onSubmit={handleSubmit(handleSendInterestData)}>
              <Button1
                onClick={() => {
                  let body = document.querySelector("body");
                  body.setAttribute(
                    "style",
                    "overflow-y: scroll; overflow-x: hidden"
                  );
                  localStorage.removeItem("UserToken=");
                  setregisterModal(false);
                }}
              >
                <BiX style={{ fontSize: "20px" }} />
              </Button1>
              <Title>Choose your interests</Title>
              <Paragraph>
                Partners will send you gifts based on your interests
                <Time>Max 5</Time>
              </Paragraph>
              <Interest style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="interests-input-container">
                  <div className="multi-select">
                    <MultiSelect
                      className="info_input-multi"
                      data={data}
                      onChange={getInterestsId}
                      placeholder="Interests"
                      required
                      maxSelectedValues={5}
                    />
                  </div>
                </div>
              </Interest>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ButtonSignUp type="submit">Continue</ButtonSignUp>
              </div>
            </form>
          </Container>
        </Main>
      </TabPanel>
      {/* ================================= END INTERESTS ============================== */}

      {/* ================================= Pasport ============================== */}
      <TabPanel>
        <Main>
          <OpacityBlog></OpacityBlog>
          <Container style={{ zIndex: "10" }}>
            <form onSubmit={handleSubmit(handleVerifyPassport)}>
              <Button1
                onClick={() => {
                  let body = document.querySelector("body");
                  body.setAttribute(
                    "style",
                    "overflow-y: scroll; overflow-x: hidden"
                  );
                  localStorage.removeItem("UserToken=");
                  setregisterModal(false);
                }}
              >
                <BiX style={{ fontSize: "20px" }} />
              </Button1>
              <Title>You have successfully registered</Title>
              <Paragraph>
                But in order to start raising funds for yourself, you need to
                pass verification. Just send a photo of your passport.
              </Paragraph>
              <MainDiv
                onClick={() => {
                  const dialog = document.querySelector(".file-uploader");
                  dialog.click();
                }}
              >
                <RiFileDownloadLine
                  className="upload_fiveth"
                  style={{ height: "50px", width: "50px" }}
                />
                <Upload>Upload photo of passport</Upload>
                <input
                  type="file"
                  required
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="file-uploader"
                  style={{ display: "none" }}
                />
              </MainDiv>
              {/* <DivImg>
                                <CgTrash className="trash" />
                                <Image src={TestImage} />
                            </DivImg> */}
              <List>
                The photo must be:
                <ul>
                  <ListtoList> Original. Do not edit or change it;</ListtoList>
                  <ListtoList>
                    Light. Make sure there is enough light when shooting
                  </ListtoList>
                  <ListtoList>
                    Clear. All information should be easy to read.
                  </ListtoList>
                </ul>
              </List>
              <ButtonCon
                type="submit"
                onClick={getLaterToNextVerificationModal}
              >
                Continue
              </ButtonCon>
              <ButtonLater onClick={() => navigate("/my-profile")}>
                Later
              </ButtonLater>
            </form>
          </Container>
        </Main>
      </TabPanel>
      {/* ================================= END Pasport ============================== */}

      {/* ================================= Verification Message ============================== */}
      <TabPanel>
        <Main>
          <OpacityBlog></OpacityBlog>
          <Container style={{ zIndex: "10" }}>
            <Button1
              onClick={() => {
                let body = document.querySelector("body");
                body.setAttribute(
                  "style",
                  "overflow-y: scroll; overflow-x: hidden"
                );
                localStorage.removeItem("UserToken=");
                setregisterModal(false);
              }}
            >
              <BiX style={{ fontSize: "20px" }} />
            </Button1>
            <Title>Verification</Title>
            <Paragraph>
              Thank you, the photo has been sent to the moderators for
              verification. The status will be visible in your account.
            </Paragraph>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ButtonSignUp onClick={getProfileUrl}>Continue</ButtonSignUp>
            </div>
          </Container>
        </Main>
      </TabPanel>

      {/* ================================= END Verification Message ========================== */}
    </Tabs>
  );
}
