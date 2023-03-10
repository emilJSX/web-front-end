import { useEffect, useState } from "react";
import LoginSystem from "../Login";
import {
  Main,
  OpacityBlog,
  Container,
  Button1,
  ForgotPassword,
} from "../Login/Login.Styled";
import { Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BiX } from "react-icons/bi";
import {
  Paragraph,
  Second,
  Title,
} from "../PhoneNumber/Phone.Styled";
import OtpInput from "react-otp-input";
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
  Number,
  Options,
  Selects,
} from "../Information/Information.Styled";
import {
  Interest,
  Time,
} from "../Interests/Interests.Styled";
import { MultiSelect } from "@mantine/core";
import {
  ButtonCon,
  ButtonLater,
  List,
  ListtoList,
  MainDiv,
  Upload,
} from "../Pasport/Pasport.Styled";
import { RiFileDownloadLine } from "react-icons/ri";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
// import { FacebookLoginButton } from "react-social-login-buttons";
import {
  Paragraphs,
  Seconds,
  Send,
} from "../PasswordRecoveryMessage/RecoveryMessage.Styled";
import { myaxios, myaxiosprivate, updateToken } from "../../../api/myaxios";
import { useDispatch, useSelector } from "react-redux";
import OtpTimer from "./OtpTimer";
import { setUserToken } from "../../../store/slices/authSlice";
import { setmodalToggle } from "../../../store/slices/modalSlice";

export function Login_ConnectionSystem({ setShowes, reg }) {
  const navigate = useNavigate();
  const [changeLoginSystemTab, setLoginSystemTab] = useState(0);

  // Login Modal - 0
  // Recovery Password - 1
  // Password recovery message - 2
  // ============================== LOGIN CONFIG ========================================
  const modalToggle = useSelector((state) => state.modal.modalToggleOption)
  const dispatch = useDispatch();
  const [selectIndexModal, setSelectIndexModal] = useState(0)
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

  console.log(modalToggle, "MODAL TOGGLE IS >>>>>>>>>>>>> ")

  const handleLoginWithEmail = ({ email, password }) => {
    setError("");
    myaxios.get("sanctum/csrf-cookie").then(() => {
      myaxios
        .post("api/v1/login", { email, password })
        .then((res) => {
          //set response in local storage
          const token = res?.data?.data?.token;
          localStorage.setItem("token", JSON.stringify(token));
          updateToken(token);
          setShowes(false);
          dispatch(setUserToken(token));
          navigate("/my-profile");
          window.location.reload();
        })
        .catch((err) => {
          setError(err.message);
          setTimeout(() => {
            setError(" ");
          }, 5000);
        });
    });
  };

  // ============================== END LOGIN CONFIG ====================================

  // ============================== RECOVERY PASSWORD CONFIG ============================
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryError, setRecoveryError] = useState(null);
  const [recoverySuccess, setRecoverySuccess] = useState(null);

  const handlePasswordRecovery = async ({ email }) => {
    setRecoveryError("");
    setRecoveryEmail(email);
    await myaxios
      .get("api/v1/registration/get-code", { params: { email } })
      .then(() => {
        setLoginSystemTab(2);
      })
      .catch((err) => {
        setRecoveryError(err.message);
      });
  };

  // ============================== END RECOVERY PASSWORD CONFIG ========================

  // ======================= OTP COUNT DOWN CONFIG =============================

  const sendOtpAgain = async () => {
    setRecoveryError("");
    await myaxios
      .get("api/v1/registration/get-code", {
        params: {
          email: recoveryEmail,
        },
      })
      .then((res) => {
        if (res?.status === 200) setRecoverySuccess("Check your email");
      })
      .catch((err) => {
        setRecoveryError(err.message);
      });
  };

  const handleSocialLogin = async (data) => {
    setError("");
    const provider_id = process.env.REACT_APP_PROVIDER_ID;

    if (data) {
      const { email, name, picture } = data.data;
      const { provider } = data;

      const formData = new FormData();
      formData.append("email", email);
      formData.append("full_name", name);
      formData.append("avatar", picture.data.url);
      formData.append("provider", provider);
      formData.append("provider_id", provider_id);

      await myaxiosprivate
        .post("/api/v1/auth/social?", formData)
        .then((res) => {
          const token = res?.data?.data?.token;
          localStorage.setItem("token", JSON.stringify(token));
          setShowes(false);
          dispatch(setUserToken(token));
          navigate("/my-profile");
          window.location.reload();
        })
        .catch((err) => setError(err.message));
    }
  };
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
              <Button2 onClick={() => setShowes(false)}>Sign up</Button2>
            </Paragraph>
            <Facebook className="cursor-pointer">
              <BsFacebook
                style={{
                  fontSize: "22px",
                  color: "white",
                  marginRight: "10px",
                }}
              />
              <LoginSocialFacebook
                appId={process.env.REACT_APP_FB_APP_ID}
                redirect_uri={"https://localhost:3000/my-profile"}
                onResolve={handleSocialLogin}
                onReject={(error) => {
                  setError(error.message);
                }}
              >
                <FacebookP>Facebook</FacebookP>
              </LoginSocialFacebook>
            </Facebook>
            <Goapp>
              <LoginSocialGoogle
                client_id={process.env.REACT_APP_GOOGLE_APP_ID}
                onResolve={handleSocialLogin}
                onReject={(err) => setError(error.message)}
              >
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
              </LoginSocialGoogle>

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
                  <ForgotPassword onClick={() => setLoginSystemTab(1)}>
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
  setShow,
  setregisterModal,
  login,
}) {
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
  });
  useEffect(() => {
    const username = getUserNameValue?.length;

    setUsernameCheckLength("");
    setUsernameRegex("");
    setUserNameAviableMessage("");
    setUserNameErrorMessage("");

    if (!USERNAME_REGEX.test(getUserNameValue)) {
      setUserNameAviableMessage("");
      setUsernameRegex("In username not be used symbols ");
    }

    if (username === 0) {
      setUserNameErrorMessage("Please enter a username");
    } else if (username < 6) {
      setUsernameCheckLength("Username must be 6 symbols");
    } else {
      tabIndex === 0 && checkUsername();
    }
  }, [getUserNameValue]);

  const checkUsername = async () => {
    const controller = new AbortController();
    await myaxios
      .get("/api/v1/username/check", {
        params: { username: String(getUserNameValue) },
        signal: controller.signal,
      })
      .then((res) => {
        setUserNameAviableMessage(getUserNameValue ? res.data.message : null);
      })
      .catch((err) => {
        setUserNameErrorMessage(err.message);
        setUserNameAviableMessage("");
      });
  };
  // Parsing Extract the Name from an Email Address
  const handleRegisterOtp = async ({ email }) => {
    setGetEmail(email);
    await myaxios
      .get("/api/v1/registration/get-code", { params: { email: email } })
      .then((res) => {
        setTabIndex(1);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  // ======================= END SIGN UP CONFIG ================================

  // ======================= YOUR INFORMATION CONFIG ===========================
  const [profileErr, setProfileErr] = useState(null);
  const [getCountryList, setCountryList] = useState([]);
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    dob: "",
    country: "",
    interests: [],
    file: null,
  });

  // UPDATE PROFILE API

  const handleUpdateInfoProfile = async (e) => {
    e.preventDefault();
    await myaxiosprivate
      .post("api/v1/profiles/update", {
        full_name: formData.full_name,
        phone: formData.phone,
        dob: formData.dob,
        country: formData.country,
      })
      .then(() => {
        setTabIndex(3);
      })
      .catch((err) => {
        setProfileErr(err.message);
      });
  };

  // END UPDATE PROFILE API

  // ======================= END YOUR INFORMATION CONFIG =======================

  // ======================= OTP COUNT DOWN CONFIG =============================
  const [recoveryError, setRecoveryError] = useState(null);
  const [recoverySuccess, setRecoverySuccess] = useState(null);

  const sendOtpAgain = async () => {
    await myaxios
      .get("api/v1/registration/get-code", {
        params: {
          email: getEmail,
        },
      })
      .then((res) => {
        if (res?.status === 200) setRecoverySuccess("Check your email");
      })
      .catch((err) => {
        setRecoveryError(
          err?.message != null ? err.message : "Something went wrong..."
        );
      });
  };

  // ======================= END OTP COUNT DOWN CONFIG =========================

  // ======================== OTP EMAIL CONFIG =================================

  const [otp, setOtp] = useState();
  const [otpError, setOtpError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await myaxios
      .post("api/v1/register", {
        otp: otp,
        name: getUserNameValue, //getEmail.split("@")[0]
        email: getEmail,
        password: getPassword,
        confirm_password: getPassword,
      })
      .then((res) => {
        if (res.data.success === true) {
          const token = res.data.data.token;
          localStorage.setItem("token", JSON.stringify(token));
          updateToken(token);
          setTabIndex(2);
          try {
            myaxiosprivate.get("/api/v1/settings/countries/get").then((res) => {
              setCountryList(res.data.data);
            });
          } catch (error) {
            setOtpError("Something went wrong...");
          }
        }
      })
      .catch(() => {
        setOtpError("OTP code is wrong");
      });
  };

  // ======================== END OTP EMAIL CONFIG =============================

  // ======================== INTERESTS CONFIG =================================

  const [interestErr, setInterestErr] = useState(null);

  const handleSendInterestData = async () => {
    await myaxiosprivate
      .post("/api/v1/profiles/update", {
        interests: String(formData.interests),
      })
      .then(() => {
        setTabIndex(4);
      })
      .catch(() => {
        setInterestErr("Something went wrong ...");
      });
  };

  const data = [
    {
      label: "Travel",
      value: "1",
    },
    {
      label: "Bussiness",
      value: "2",
    },
  ];

  // ======================== END INTERESTS CONFIG =============================

  // ============================ PASPORT CONFIG ===============================
  const [selectPassport, setselectPassport] = useState();
  const [passportErr, setPassportErr] = useState(null);
  const handleVerifyPassport = async (e) => {
    const formData = new FormData();

    formData.append("file", selectPassport);
    await myaxiosprivate
      .post("/api/v1/profiles/verify", formData)
      .then(() => {
        setTabIndex(5);
      })
      .catch((err) => {
        setPassportErr(err.message);
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
                localStorage.removeItem("token");
                setregisterModal(false);
              }}
            >
              <BiX style={{ fontSize: "20px" }} />
            </Button1>
            <Title>Sign Up</Title>
            <Paragraph>
              Already have account?<Button2 onClick={ () => setShow(true) }> Log in</Button2>
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
            <ButtonOR onClick={() => setShower(!shower)}>Or via email</ButtonOR>

            {shower && (
              <Dispno>
                <form onSubmit={handleSubmit(handleRegisterOtp)}>
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
                  localStorage.removeItem("token");
                  setregisterModal(false);
                }}
              >
                <BiX style={{ fontSize: "20px" }} />
              </Button1>
              <Title>Confirm your email </Title>
              <Paragraph>Enter the code we sent to your email </Paragraph>
              <div className="content_container" style={{ height: "60px" }}>
                {/* <Edit className='edit_number'>Edit phone number</Edit> */}
                <OtpTimer passRecover={sendOtpAgain} />
              </div>
              <div className="otp_input_div">
                <OtpInput
                  className="otp_input"
                  value={otp}
                  onChange={(e) => setOtp(e)}
                  numInputs={6}
                  separator={<span> </span>}
                />
              </div>
              {otpError && (
                <p className="mx-14 mt-2 mb-3 text-red-500 text-xs">
                  {otpError}
                </p>
              )}
              <div className="otpsend-btn">
                <button onClick={handleRegister}>Confirm</button>
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
                  localStorage.removeItem("token");
                  setregisterModal(false);
                }}
              >
                <BiX style={{ fontSize: "20px" }} />
              </Button1>
              <Title>Your information</Title>
              {profileErr && (
                <p className="mx-14 my-2 text-red-500 text-xs">{profileErr}</p>
              )}
              <Selects
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    country: e.target.value,
                  })
                }
              >
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
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                placeholder="Phone number"
              />
              <Number
                id="number"
                type="text"
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    full_name: e.target.value,
                  })
                }
                placeholder="Full name"
              />
              <Number
                className="mb-3"
                required
                id="number"
                type="text"
                placeholder="Date of birth (expample: 12.09.2023)"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    dob: String(e.target.value),
                  })
                }
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
                  localStorage.removeItem("token");
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
              {interestErr && (
                <p className="mx-14 mt-2 mb-3 text-red-500 text-xs">
                  {interestErr}
                </p>
              )}
              <Interest style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="interests-input-container">
                  <div className="multi-select">
                    <MultiSelect
                      className="info_input-multi"
                      data={data}
                      value={formData.interests}
                      onChange={(e) =>
                        setFormData({
                          interests: e,
                        })
                      }
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
                  localStorage.removeItem("token");
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
                {passportErr && (
                  <p className="mx-14 mt-2 mb-3 text-red-500 text-xs">
                    {passportErr}
                  </p>
                )}
                <Upload>Upload photo of passport</Upload>
                <input
                  type="file"
                  required
                  accept="image/*"
                  onChange={(e) => setselectPassport(e.target.files[0])}
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
              <ButtonCon type="submit" onClick={() => setTabIndex(5)}>
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
                localStorage.removeItem("token");
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
