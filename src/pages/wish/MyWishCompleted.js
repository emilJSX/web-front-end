import React, { useEffect, useRef, useState } from "react";
import {
  BsFillHandThumbsUpFill,
  BsHandThumbsUp,
  BsThreeDots,
} from "react-icons/bs";
import DonutIcon from "../../assets/svg/donut.svg";
import SweetIcon from "../../assets/svg/sweet.svg";
import BurgerIcon from "../../assets/svg/burger.svg";
import FlowersIcon from "../../assets/svg/flowers.svg";
import CoffeeIcon from "../../assets/svg/coffee.svg";
import { HiOutlineFilter } from "react-icons/hi";
import { useLocation, useParams } from "react-router-dom";
import { myaxios, myaxiosprivate } from "../../api/myaxios";
import Share from "../wish-pagess/Share";
import { Menu } from "@mantine/core";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoImageOutline } from "react-icons/io5";
import StampIcon from "../../assets/svg/stamp.svg";
import WishConfetti from "../../assets/svg/wish-confetti.svg";
import Confetti from "react-confetti";
import moment from "moment";
import Comment from "./components/Comment";

const MyWishCompleted = () => {
  const [wisherVisibility, setWisherVisibility] = useState("public");
  const [congratsVisibility, setCongratsVisibility] = useState("public");
  const [giftAmountVisibility, setGiftAmountVisibility] = useState("public");
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [getCategoryId, setCategoryId] = useState(null);
  const [comments, setComments] = useState([]);
  const { slug } = useParams();
  const [GetUserWishDataResult, setGetUserData] = useState([]);
  const [getAllWishData, setAllWishData] = useState([]);
  const { state } = useLocation();
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const [selectFiles, setSelectFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [giftAmounts, setGiftAmounts] = useState([]);
  console.log(GetUserWishDataResult);
  const handleFileSelect = (e) => {
    let images = [];

    for (let i = 0; i < e.target.files.length; i++) {
      images.push(URL.createObjectURL(e.target.files[i]));
    }

    setSelectFiles(e.target.files);
    setImagePreviews(images);
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = [...selectFiles];
    updatedFiles.splice(index, 1);
    setSelectFiles(updatedFiles);

    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);
  };
  const handleClickGetIDCategory = (event) => {
    setCategoryId(event.currentTarget.id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    myaxios
      .get("/api/v1/wish/slug/", {
        params: {
          slug: state ? state : slug,
        },
      })
      .then(({ data }) => {
        setGetUserData(data?.data);
      })
      .catch((err) => {
        setError(err.message);
      });

    myaxiosprivate
      .get("/api/v1/wish/list", {
        params: {
          skip: 0,
          ...(getCategoryId && { category_id: +getCategoryId }),
        },
      })
      .then(({ data }) => {
        setAllWishData(data.data.results);
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
            wish_id: GetUserWishDataResult.id,
            sort_type: "abc",
          },
        })
        .then(({ data }) => setComments(data.data))
        .catch((err) => setError(err.message));
  }, [GetUserWishDataResult.id]);
  useEffect(() => {
    myaxios
      .get("/api/v1/settings/payment_types/get")
      .then(({ data }) => {
        setGiftAmounts(data.data);
      })
      .catch((err) => setError(err.message));
  }, []);
  //   Get WISH IMAGE API
  const WishCreationImage = GetUserWishDataResult.image;
  const UserGetCreationImgWish = `${process.env.REACT_APP_API_URL}${WishCreationImage}`;
  //   END

  return (
    <div className="pt-10 bg-[#EBE5F7]">
      <Confetti />
      <div className="container">
        <div className="md:flex mb-[72px] relative">
          <div className="flex-[1.2] md:mr-6 mb-6 md:sticky md:top-4 md:z-[1] md:sticky-top h-max">
            <div className="rounded-[24px] mb-4 relative">
              <img
                className="rounded-[24px]"
                src={UserGetCreationImgWish}
                alt=""
              />
              <img
                className="absolute top-[2px] right-[2px]"
                src={StampIcon}
                alt=""
              />
            </div>
            <Share page="wish" slug={state ? state : slug} />
            {/* <button className="flex items-center text-[#8866D0]">
              <FiAlertTriangle/>
              <span className="ml-2 font-dynamic font-dynamic--sm text-[#8866D0]" style={{ "--fw": 600 }}>Report</span>
            </button> */}
          </div>
          <div className="flex-[1.5]">
            <div className="rounded-[24px] bg-[#2D008D] p-1">
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
                  <div className="text-white text-xl">
                    <Menu
                      size={"sm"}
                      position="right"
                      classNames={{
                        body: "rounded-[16px]",
                      }}
                      control={
                        <button className="flex items-center text-white">
                          <BsThreeDots />
                        </button>
                      }
                    >
                      <Menu.Item>
                        <button className="flex items-center text-[#3800B0]">
                          <FaPen className="text-sm !text-[#3800B0]" />
                          <span className="ml-2 text-sm leading-[1.3] tracking-[0.01em] !text-[#3800B0]">
                            Edit
                          </span>
                        </button>
                      </Menu.Item>
                      <Menu.Item>
                        <button className="flex items-center text-[#3800B0]">
                          <RiDeleteBin6Line className="text-sm !text-[#3800B0]" />
                          <span className="ml-2 text-sm leading-[1.3] tracking-[0.01em] !text-[#3800B0]">
                            Delete
                          </span>
                        </button>
                      </Menu.Item>
                    </Menu>
                    {/*<IoNotificationsOutline/>*/}
                  </div>
                </div>
                <h2 className="text-[28px] lg:text-[40px] leading-[1.2] font-semibold text-white mr-3 mb-4">
                  {GetUserWishDataResult?.title}
                </h2>
                <p className="leading-[1.6] font-regular text-[#EBE5F7]">
                  {GetUserWishDataResult?.description}
                </p>
              </div>
              <div className="rounded-[20px] bg-[#3800B0] p-6 lg:p-12 flex justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <p className="text-[#00FF9E] leading-[1.4] font-semibold mr-2">
                      $2 542 total raised
                    </p>
                    <p className="text-sm leading-[1.4] font-semibold text-white">
                      120%
                    </p>
                  </div>
                  <p className="text-sm leading-[1.4] font-semibold text-white">
                    {GetUserWishDataResult?.user?.name} reached his goal ($
                    {GetUserWishDataResult?.donate?.target}) and now he can get
                    the gift he dreamed of.
                  </p>
                </div>
                <img className="ml-[24px] md:ml-12" src={WishConfetti} alt="" />
              </div>
              <div className="rounded-[20px] bg-[#fff] mt-1 p-6 lg:p-12">
                <div className="flex md:flex-row flex-col">
                  <img
                    className="mr-2 object-fill rounded-full w-6 h-6 flex-shrink-0 md:mb-0 mb-[8px]"
                    src={GetUserWishDataResult?.user?.image}
                    alt=""
                  />
                  {/* <p className="text-[20px] leading-[28px] font-semibold text-[#8E93AF]">
                    Thank your friends and show the report
                  </p> */}
                  <input
                    className="p-1 text-start w-full h-[35px] leading-[28px] font-semibold text-[#8e93af]"
                    placeholder="Thank your friends and show the report"
                  />
                </div>
                <div className="mt-12 flex justify-between flex-wrap">
                  <div className="bg-[#F7F8FA] rounded-[8px] flex items-center justify-between py-[16px] px-[18px] h-max mb-2">
                    <div className="flex items-center">
                      <IoImageOutline className="text-[#3800B0] mr-2" />
                      <p
                        className="text-[14px] leading-[1.4] font-semibold text-[#3800B0] cursor-pointer"
                        onClick={() => inputRef.current.click()}
                      >
                        Attach a photo
                      </p>
                      <input
                        type="file"
                        disabled={imagePreviews.length > 3}
                        onChange={handleFileSelect}
                        className="hidden"
                        ref={inputRef}
                        multiple
                        accept="image/*"
                      />
                    </div>
                    <div className="ml-3 flex items-center">
                      {imagePreviews.length > 0 &&
                        imagePreviews.map((image, i) => (
                          <div
                            key={i}
                            className="relative w-10 h-10 rounded-[4px] flex-shrink-0 mr-2"
                          >
                            <img
                              className="w-full h-full rounded-[4px]"
                              src={image}
                              alt=""
                            />
                            <button
                              className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ECEEF7] flex items-center justify-center"
                              onClick={() => handleDeleteFile(i)}
                            >
                              <RiDeleteBin6Line className="text-[#3800B0] text-sm" />
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                  <button className="px-6 py-4 bg-[#3800B0] text-sm leading-[18px] font-semibold text-white rounded-[8px]">
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-7">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center mr-2">
                  <p className="leading-[1.4] font-semibold text-[#1A1C29] mr-2">
                    All congratulations
                  </p>
                  <span className="leading-[1.4] font-semibold text-[#8E93AF]">
                    {comments.length}
                  </span>
                </div>
                <button className="mr-2 text-[#3800B0] text-lg">
                  <HiOutlineFilter />
                </button>
              </div>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <Comment
                    key={comment.id}
                    props={comment}
                    giftTypes={giftAmounts.map(({ id, icon }) => ({
                      id,
                      icon,
                    }))}
                    myWish={GetUserWishDataResult?.user?.image}
                  />
                ))
              ) : (
                <p>There is no comment to your wish </p>
              )}
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
        </div>
      </div> */}
    </div>
  );
};

export default MyWishCompleted;
