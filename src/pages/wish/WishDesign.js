import React, { useEffect, useState } from "react";
import WishImage from "../../assets/images/wish.png";
import {
  BsFacebook,
  BsFillHandThumbsUpFill,
  BsHandThumbsUp,
  BsThreeDots,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { IoMailOutline, IoNotificationsOutline } from "react-icons/io5";
import { RiLinksFill } from "react-icons/ri";
import { FiAlertTriangle, FiThumbsUp } from "react-icons/fi";
import VisibilityMenu from "./components/VisibilityMenu";
import DonutIcon from "../../assets/svg/donut.svg";
import SweetIcon from "../../assets/svg/sweet.svg";
import BurgerIcon from "../../assets/svg/burger.svg";
import FlowersIcon from "../../assets/svg/flowers.svg";
import CoffeeIcon from "../../assets/svg/coffee.svg";
import { HiOutlineFilter } from "react-icons/hi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { myaxios, myaxiosprivate } from "../../api/myaxios";
import Share from "../wish-pagess/Share";
import { calculateProgress } from "../new-calendar/CalendarDayItem";
import { LinearProgress } from "@mui/material";
import moment from "moment";
import { useSelector } from "react-redux";
import { useAuthSelector } from "../../store/slices/authSlice";
import {
  Login_ConnectionSystem,
  SignUp_ConnectionSystem,
} from "../../shared/LoginSignUpSystem/ConnectionSystem/connection";
import { enqueueSnackbar } from "notistack";
import Comment from "./components/Comment";

const WishDesign = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(useAuthSelector);
  const [comments, setComments] = useState([]);
  const [wisherVisibility, setWisherVisibility] = useState("Public");
  const [congratsVisibility, setCongratsVisibility] = useState("public");
  const [giftAmountVisibility, setGiftAmountVisibility] = useState("Public");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [paymentType, setPaymentType] = useState(null);
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    comment: "",
  });
  const [getCategoryId, setCategoryId] = useState(null);
  const { slug } = useParams();
  const [GetUserWishDataResult, setGetUserData] = useState([]);
  const [getAllWishData, setAllWishData] = useState([]);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState();
  const [giftAmounts, setGiftAmounts] = useState([]);
  const [paymentData, setPaymentData] = useState({});
  const userInfo = useSelector((state) => state.user.userData);

  useEffect(() => {
    setPaymentData({
      name: userInfo?.info?.full_name
        ? userInfo.info.full_name
        : state?.name
        ? state.name
        : userData.name,
      message: userData.comment,
      wisherVisibility:
        wisherVisibility === "Public"
          ? 1
          : wisherVisibility === "Only you and wisher"
          ? 2
          : wisherVisibility === "Anonymously"
          ? 3
          : " ",

      amount: selectedAmount,
      amountVisibilty:
        giftAmountVisibility === "Public"
          ? 1
          : giftAmountVisibility === "Only you and wisher"
          ? 2
          : giftAmountVisibility === "Anonymously"
          ? 3
          : " ",
      paymentType: paymentType,
      wishData: GetUserWishDataResult,
    });
  }, [
    wisherVisibility,
    giftAmountVisibility,
    userData,
    paymentType,
    GetUserWishDataResult,
  ]);
  const handleCongratulate = () => {
    navigate("/payment", { state: paymentData });
  };
  useEffect(() => {
    const newProgress = calculateProgress(
      +GetUserWishDataResult?.donate?.target,
      +GetUserWishDataResult?.donate?.received
    );
    setProgress(newProgress);
  }, [
    GetUserWishDataResult?.donate?.target,
    GetUserWishDataResult?.donate?.received,
  ]);
  const { state } = useLocation();
  const handleClickGetIDCategory = (event) => {
    setCategoryId(event.currentTarget.id);
  };

  useEffect(() => {
    setError("");

    myaxios
      .get("/api/v1/settings/payment_types/get")
      .then(({ data }) => {
        setGiftAmounts(data.data);
      })
      .catch((err) => setError(err.message));
  }, []);
  useEffect(() => {
    setError("");
    GetUserWishDataResult.id &&
      myaxios
        .get("/api/v1/wish/comments/get", {
          params: {
            skip: null,
            wish_id: GetUserWishDataResult && GetUserWishDataResult.id,
            sort_type: "abc",
          },
        })
        .then(({ data }) => setComments(data.data))
        .catch((err) => setError(err.message));
  }, [GetUserWishDataResult.id]);

  useEffect(() => {
    setError("");
    window.scrollTo(0, 0);
    myaxios
      .get("/api/v1/wish/slug/", {
        params: {
          slug: state ? state.slug : slug,
        },
      })
      .then((res) => {
        setGetUserData(res?.data?.data);
      })
      .catch((err) => {
        setError(err.message);
        navigate("/404", { state: err.message });
      });

    // myaxiosprivate
    //   .get("/api/v1/wish/list", {
    //     params: {
    //       skip: 0,
    //       ...(getCategoryId && { category_id: +getCategoryId }),
    //     },
    //   })
    //   .then(({ data }) => {
    //     setAllWishData(data.data.results);
    //   })
    //   .catch((err) => setError(err.message));
  }, []);
  const [modalShow, setModalShow] = useState(false);
  const [modalReg, setModalReg] = useState(false);

  //   Get WISH IMAGE API
  const WishCreationImage = GetUserWishDataResult.image;
  const UserGetCreationImgWish = `${process.env.REACT_APP_API_URL}${WishCreationImage}`;
  //   END
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const { data } = await myaxiosprivate.get("/api/v1/user/");
  //       setUserName(data.data.info.full_name);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
  //   state?.name === undefined && fetchUserData();
  // }, []);

  if (error) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        {error}
      </div>
    );
  }
  return (
    <>
      {modalShow && (
        <Login_ConnectionSystem
          setShowes={setModalShow}
          showRegister={setModalReg}
        />
      )}
      {modalReg && (
        <SignUp_ConnectionSystem
          setregisterModal={setModalReg}
          setShowes={setModalShow}
        />
      )}
      <div className="pt-10 bg-[#EBE5F7] h-full">
        <div className="container">
          <div className="md:flex mb-[72px] relative">
            <div className="flex-[1.2] md:mr-6 mb-6 md:sticky md:top-4 md:z-[1] md:sticky-top h-max">
              <div className="rounded-[24px] mb-4 relative  ">
                <img
                  className="rounded-[24px] shadow-md"
                  src={UserGetCreationImgWish}
                  alt=""
                />
              </div>
              <Share page="wish" slug={state ? state : slug} />
              {/* <button className="flex items-center text-[#8866D0]">
              <FiAlertTriangle/>
              <span className="ml-2 font-dynamic font-dynamic--sm text-[#8866D0]" style={{ "--fw": 600 }}>Report</span>
            </button> */}
            </div>
            <div className="flex-[1.5] ">
              <div className="rounded-[24px] bg-[#2D008D] p-1 shadow-md">
                <div className="my-6 md:my-10 px-6 lg:px-12">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center mr-3">
                      <img
                        className="rounded-full w-[32px] h-[32px] mr-3"
                        src={
                          GetUserWishDataResult?.user?.image
                            ? GetUserWishDataResult?.user?.image
                            : "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                        }
                        alt=""
                      />
                      <div className="flex items-center flex-wrap">
                        <span className="mr-[6px] text-sm text-white tracking-[0.01em] font-semibold leading-[1.3]">
                          {GetUserWishDataResult?.user?.name}
                        </span>
                        <span className="text-sm text-[#BFACE9] tracking-[0.01em] font-semibold leading-[1.3]">
                          for birthday on{" "}
                          {moment(GetUserWishDataResult?.user?.dob).format(
                            "DD MMMM YYYY"
                          )}
                        </span>
                      </div>
                    </div>
                    <button className="text-white text-xl">
                      <IoNotificationsOutline />
                    </button>
                  </div>
                  <h2 className="text-[28px] lg:text-[40px] leading-[1.2] font-semibold text-white mr-3 mb-4">
                    {GetUserWishDataResult?.title}
                  </h2>
                  <p className="leading-[1.6] font-regular text-[#EBE5F7]">
                    {GetUserWishDataResult?.description}
                  </p>
                </div>
                <div className="rounded-[24px] bg-[#EBE5F7] py-[20px] md:py-10 px-[20px] md:px-6 lg:px-12 mb-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[14px] leading-[1.4] font-semibold text-[#3800B0]">
                      Target: ${GetUserWishDataResult?.donate?.target}
                    </p>
                    <p className="text-[14px] leading-[1.4] font-semibold text-[#3800B0]">
                      Final:{" "}
                      {moment(GetUserWishDataResult?.user?.dob).format(
                        "DD.MM.YYYY"
                      )}
                    </p>
                  </div>
                  <div className="rounded-[48px] bg-[#BFACE9] h-1 my-[16px] md:my-6">
                    <LinearProgress
                      variant="determinate"
                      className="my-4"
                      value={+progress}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[14px] leading-[1.4] font-semibold text-[#3800B0]">
                      <span className="text-[14px] leading-[1.4] font-semibold text-[#3800B0] mr-4">
                        ${GetUserWishDataResult?.donate?.received} raised
                      </span>
                      <span className="text-[14px] leading-[1.4] font-semibold text-[#8866D0]">
                        {progress}%{" "}
                      </span>
                    </p>
                    <p className="text-[14px] leading-[1.4] font-semibold text-[#3800B0]">
                      ${GetUserWishDataResult?.donate?.left} left
                    </p>
                  </div>
                </div>
                <div className="rounded-[24px] bg-white p-[20px] md:py-10 md:px-6 lg:px-12 mb-1">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[13px] leading-[1.4] font-medium text-[#110035]">
                      Your gift amount
                    </p>
                    <div>
                      <VisibilityMenu
                        menuId="gift-amount"
                        controlLabel={giftAmountVisibility}
                        setVisibility={setGiftAmountVisibility}
                      />
                    </div>
                  </div>
                  <div className="flex  !border-[2px] border-solid border-[#EBE5F7] rounded-[8px] h-16 lg:h-20 mb-6">
                    {giftAmounts.map((amount, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedAmount(amount.number),
                            setPaymentType(amount.id);
                        }}
                        className={`flex-1 flex flex-col items-center justify-center hover:bg-[#EBE5F7] 
                      !border-[2px] border-solid transition-all duration-300 ease-in-out
                      rounded-md ${
                        selectedAmount === amount.number
                          ? "bg-[#EBE5F7] border-[#3800B0]"
                          : "border-transparent"
                      }`}
                      >
                        {amount.icon ? (
                          <img
                            className="mb-1"
                            src={`${process.env.REACT_APP_API_URL}/${amount.icon}`}
                            alt=""
                          />
                        ) : null}
                        <span className="text-[13px] leading-[1.3] font-semibold text-[#160046]">
                          ${amount.number}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    {userInfo?.info?.full_name || state?.name ? (
                      <p className="leading-[1.2] font-semibold text-[#0C0E19]">
                        {userInfo?.info?.full_name || state?.name}
                      </p>
                    ) : (
                      <>
                        <input
                          type="text"
                          value={userData.name}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              name: e.target.value,
                            })
                          }
                          className="leading-[1.2] w-8/12 font-semibold  md:h-[60px] text-[#8e93af] px-2"
                          placeholder="Your Name.."
                        />
                        <p
                          className="text-[#3800B0] font-semibold text-[14px] cursor-pointer hover:text-[#3800b077]"
                          onClick={() => setModalShow(true)}
                        >
                          or Login
                        </p>
                      </>
                    )}

                    {/* <p className="leading-[1.2] font-semibold text-[#0C0E19]">
                    Ilya Davidov
                  </p> */}
                    <div>
                      <VisibilityMenu
                        menuId="wisher"
                        controlLabel={wisherVisibility}
                        setVisibility={setWisherVisibility}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    {/* <p className="leading-[1.2] font-semibold text-[#8E93AF]">
                    Your congratulations
                  </p> */}
                    <input
                      type="text"
                      placeholder="Your congratulations"
                      value={userData.comment}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          comment: e.target.value,
                        })
                      }
                      className="leading-[1.2] w-full  font-semibold  md:h-[100px] text-[#8e93af] px-2"
                    />
                    {/* <button>
                    <VisibilityMenu
                      menuId="congrats"
                      controlLabel={congratsVisibility}
                      setVisibility={setCongratsVisibility}
                    />
                  </button> */}
                  </div>
                  <button
                    onClick={
                      !selectedAmount
                        ? () => enqueueSnackbar("Please select gift amount")
                        : handleCongratulate
                    }
                    className="mt-6 md:mt-12 w-full py-3 text-white bg-[#3800B0] rounded-[8px] text-sm leading-[1.3] font-semibold"
                  >
                    Сongratulate
                  </button>
                </div>
              </div>
              <div className="mt-7">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center mr-2">
                    <p className="leading-[1.4] font-semibold text-[#1A1C29] mr-2">
                      All congratulations
                    </p>
                    <span className="leading-[1.4] font-semibold text-[#8E93AF]">
                      {comments?.length}
                    </span>
                  </div>
                  <button className="mr-2 text-[#3800B0] text-lg">
                    <HiOutlineFilter />
                  </button>
                </div>
                {comments.map((comment) => (
                  <Comment
                    key={comment.id}
                    props={comment}
                    giftTypes={giftAmounts.map(({ id, icon }) => ({
                      id,
                      icon,
                    }))}
                    myWish={false}
                  />
                ))}
                {/* <div className="rounded-[24px] p-6 bg-white my-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        className="mr-3 w-6 h-6 rounded-full"
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                      />
                      <p className="text-sm leading-[1.4] font-semibold text-[#0C0E19] mr-[6px]">
                        Eleanor Pena
                      </p>
                      <span className="font-medium leading-[1.4] text-sm text-[#5D627D]">
                        gave a gift
                      </span>
                    </div>
                    <div className="flex items-center">
                      <p className="text-[13px] leading-[1.4] font-medium text-[#8E93AF] mr-3">
                        2 min go
                      </p>
                      <button className="text-[#2D008D] text-md">
                        <BsThreeDots />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between my-6">
                    <p className="text-[20px] leading-[1.4] font-semibold text-[#1A1C29] mr-3">
                      Happy birthday bro!
                    </p>
                    <button className="flex items-center text-[#2D008D]">
                      <span className="text-[13px] leading-[1.4] font-medium text-[#2D008D] mr-[6px]">
                        257
                      </span>
                      <BsHandThumbsUp />
                      {/*<BsFillHandThumbsUpFill />*/}
                {/* </button>
                  </div>
                </div> */}
                {/* <div className="rounded-[24px] p-6 bg-white my-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        className="mr-3 w-6 h-6 rounded-full"
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                      />
                      <p className="text-sm leading-[1.4] font-semibold text-[#0C0E19] mr-[6px]">
                        Eleanor Pena
                      </p>
                      <span className="font-medium leading-[1.4] text-sm text-[#5D627D]">
                        gave a gift
                      </span>
                    </div>
                    <div className="flex items-center">
                      <p className="text-[13px] leading-[1.4] font-medium text-[#8E93AF] mr-3">
                        2 min go
                      </p>
                      <button className="text-[#2D008D] text-md">
                        <BsThreeDots />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between my-6">
                    <div className="relative">
                      <p className="text-[20px] leading-[1.4] blur-sm font-semibold text-[#1A1C29] mr-3">
                        Happy birthday bro!Happy birthday bro!
                      </p>
                      <div
                        className="bg-[#0C0E19] px-4 py-3 text-[13px] text-[#ECEEF7] leading-[1.3] tracking-[0.01em] font-semibold
                        absolute left-1/2 top-1/2 -rotate-2
                      "
                        style={{
                          transform: "translate(-50%,-50%) rotate(-2deg)",
                        }}
                      >
                        Private congratulation
                      </div>
                    </div>
                    <button className="flex items-center text-[#2D008D]">
                      <span className="text-[13px] leading-[1.4] font-medium text-[#2D008D] mr-[6px]">
                        257
                      </span>
                      <BsHandThumbsUp />
                      {/*<BsFillHandThumbsUpFill />*/}
                {/* </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="rounded-[24px] bg-white py-10 md:py-20 relative -bottom-[42px]">
        <div className="container">
          <h3 className="text-[32px] md:text-[40px] leading-[1.2] font-semibold mb-8 md:mb-[64px]">Breadley Cooper’s other wishes</h3>
          <div className="flex overflow-x-auto gap-6">
            <div className="relative shrink-0 min-w-[280px] max-w-[380px] h-max flex-1 rounded-[24px] border border-solid border-[#EBE5F7]">
              <a className="absolute top-0 bottom-0 right-0 left-0" href=""></a>
              <img className="rounded-[24px] object-fill min-h-[240px] max-h-[320px]" src="https://images.unsplash.com/photo-1544569975-8e155329f348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt=""/>
              <div className="p-8">
                <p className="text-[20px] leading-[1.4] font-semibold text-[#110035] mb-8">Light, fluffy, delicious red velvet donuts.</p>
                <div className="flex justify-between">
                  <div className="mr-2">
                    <p className="text-[14px] leading-[1.4] font-semibold text-[#110035]">Wade Warren</p>
                    <p className="text-[13px] leading-[1.6] font-regular text-[#110035]">for birthday on 25 Nov  2022</p>
                  </div>
                  <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>
                </div>
                <div className="rounded-[48px] bg-[#BFACE9] h-1 my-4">
                  <div className="bg-[#3800B0] rounded-[48px] w-1/3 h-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[13px] leading-[1.6] font-regular text-[#110035] opacity-[0.72]">$2,542 raised</p>
                  <p className="text-[13px] leading-[1.6] font-regular text-[#110035] opacity-[0.72]">$8,558 left</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 min-w-[280px] max-w-[380px] h-max flex-1 rounded-[24px] border border-solid border-[#EBE5F7]">
              <a className="absolute top-0 bottom-0 right-0 left-0" href=""></a>
              <img className="rounded-[24px] object-fill min-h-[240px] max-h-[320px]" src="https://images.unsplash.com/photo-1544569975-8e155329f348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt=""/>
              <div className="p-8">
                <p className="text-[20px] leading-[1.4] font-semibold text-[#110035] mb-8">Dollars printed shirt</p>
                <div className="flex justify-between">
                  <div className="mr-2">
                    <p className="text-[14px] leading-[1.4] font-semibold text-[#110035]">Wade Warren</p>
                    <p className="text-[13px] leading-[1.6] font-regular text-[#110035]">for birthday on 25 Nov  2022</p>
                  </div>
                  <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>
                </div>
                <div className="rounded-[48px] bg-[#BFACE9] h-1 my-4">
                  <div className="bg-[#3800B0] rounded-[48px] w-1/3 h-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[13px] leading-[1.6] font-regular text-[#110035] opacity-[0.72]">$2,542 raised</p>
                  <p className="text-[13px] leading-[1.6] font-regular text-[#110035] opacity-[0.72]">$8,558 left</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 min-w-[280px] max-w-[380px] h-max flex-1 rounded-[24px] border border-solid border-[#EBE5F7]">
              <a className="absolute top-0 bottom-0 right-0 left-0" href=""></a>
              <img className="rounded-[24px] object-fill min-h-[240px] max-h-[320px]" src="https://images.unsplash.com/photo-1544569975-8e155329f348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt=""/>
              <div className="p-8">
                <p className="text-[20px] leading-[1.4] font-semibold text-[#110035] mb-8">Vans ULTRARANGE EXO</p>
                <div className="flex justify-between">
                  <div className="mr-2">
                    <p className="text-[14px] leading-[1.4] font-semibold text-[#110035]">Wade Warren</p>
                    <p className="text-[13px] leading-[1.6] font-regular text-[#110035]">for birthday on 25 Nov  2022</p>
                  </div>
                  <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>
                </div>
                <div className="rounded-[48px] bg-[#BFACE9] h-1 my-4">
                  <div className="bg-[#3800B0] rounded-[48px] w-1/3 h-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[13px] leading-[1.6] font-regular text-[#110035] opacity-[0.72]">$2,542 raised</p>
                  <p className="text-[13px] leading-[1.6] font-regular text-[#110035] opacity-[0.72]">$8,558 left</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 min-w-[280px] max-w-[380px] h-max flex-1 rounded-[24px] border border-solid border-[#EBE5F7]">
              <a className="absolute top-0 bottom-0 right-0 left-0" href=""></a>
              <img className="rounded-[24px] object-fill min-h-[240px] max-h-[320px]" src="https://images.unsplash.com/photo-1544569975-8e155329f348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt=""/>
              <div className="p-8">
                <p className="text-[20px] leading-[1.4] font-semibold text-[#110035] mb-8">Light, fluffy, delicious red velvet donuts.</p>
                <div className="flex justify-between">
                  <div className="mr-2">
                    <p className="text-[14px] leading-[1.4] font-semibold text-[#110035]">Wade Warren</p>
                    <p className="text-[13px] leading-[1.6] font-regular text-[#110035]">for birthday on 25 Nov  2022</p>
                  </div>
                  <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>
                </div>
                <div className="rounded-[48px] bg-[#BFACE9] h-1 my-4">
                  <div className="bg-[#3800B0] rounded-[48px] w-1/3 h-full"></div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[13px] leading-[1.6] font-regular text-[#110035] opacity-[0.72]">$2,542 raised</p>
                  <p className="text-[13px] leading-[1.6] font-regular text-[#110035] opacity-[0.72]">$8,558 left</p>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-16 w-full rounded-[8px] px-5 py-3 text-[13px] leading-[1.6] font-regular text-[#3800B0] border border-solid border-[#3800B0]">See more wishes</button>
        </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default WishDesign;
