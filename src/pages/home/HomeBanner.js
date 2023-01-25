import {
  Image,
  MediaQuery,
  Menu,
  Box,
  Text,
  Grid,
  Container,
  Progress,
} from "@mantine/core";
import { Button } from "../../shared/ui/Button";
import {
  HomeCenter,
  HomeConatiner,
  HomeTop,
  GifwRAP,
  Gifname,
  GifDesc,
  GifImg,
  GridCutoms,
  GifHeader,
  WishesText,
  WishesBtn,
  CardSections,
  InsiderContainer,
  PartnersText,
  Item,
  WishCreationInput,
  WishCreationButton,
  ButtonDefault,
} from "./Home.Styled";
import { Link, useLocation, useNavigate } from "react-router-dom";

import WhiteLogo from "../../assets/svg/wishx-logo-white.svg";
import { ReactComponent as ArrowDownIcon } from "../../style/icons/button-icons/arrow-down.svg";
import { ReactComponent as GridIcon } from "../../assets/svg/grid-white.svg";

const HomeBanner = ({ showLoginModal, showSignUpModal, createWish }) => {
  const navigate = useNavigate();

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("slideShowContainer");

    nextSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="banner__bg">
      <div className="banner__mobile__shape--top"></div>
      <div className="banner__mobile__shape--bottom"></div>
      <div className="banner__right__content--top"></div>
      <div className="banner__right__content--bottom"></div>
      <div className="banner__left__content--top"></div>
      <div className="banner__left__content--shape"></div>
      <div className="banner__left__content--bottom"></div>
      <div className="banner__container">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-[26px]">
            <Link to="/">
              <img src={WhiteLogo} alt="" />
            </Link>
            <Link to="/faq" className="mt-[20px] hidden md:flex">
              <span className="tracking-[0.01em] text-[14px] leading-[1.3] font-semibold text-white">
                How it works
              </span>
            </Link>
          </div>
          <Link
            to="/wish-list"
            class="md:hidden flex items-center gap-2.5 mt-3"
          >
            <GridIcon />
            <span className="text-[14px] leading-[18px] mt-1 font-semibold text-white tracking-[0.01em]">
              All wishes
            </span>
          </Link>
          <div className="md:hidden flex mt-3">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Menu className="head-menu nav__dropdown">
                <Menu.Item>
                  <Button variant="white" className="log-buttons">
                    <ButtonDefault
                      onClick={showLoginModal}
                      style={{
                        border: "0",
                        // background: "#EBE5F7",
                        color: "#3800B0",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Log In
                    </ButtonDefault>
                  </Button>
                </Menu.Item>
                <Menu.Item>
                  <Button variant="white" className="log-buttons">
                    <ButtonDefault
                      onClick={showSignUpModal}
                      style={{
                        border: "0",
                        // background: "#EBE5F7",
                        color: "#3800B0",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Sign Up
                    </ButtonDefault>
                  </Button>
                </Menu.Item>
              </Menu>
            </MediaQuery>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button
              className="tracking-[0.01em] text-white text-[14px] leading-[18px] font-semibold bg-transparent px-1"
              onClick={showLoginModal}
            >
              Log in
            </button>
            <button
              className="tracking-[0.01em] text-white text-[14px] leading-[18px] font-semibold bg-transparent px-1"
              onClick={showSignUpModal}
            >
              Sign up
            </button>
          </div>
        </nav>
        <div className="flex flex-1 flex-col items-center justify-content-center mt-[4vh] md:mt-[8vh]">
          <div className="flex flex-col md:mb-[30px] -mt-16 md:mt-0 items-center justify-center align-self-center justify-self-center">
            <h1 className="banner__title max-w-[520px]">
              Everything starts with a Wish
            </h1>
            <div className="flex flex-wrap items-center gap-8 mt-4 md:mt-8 md:px-0 px-12">
              <button
                className="tracking-[0.01em] flex-1 flex-shrink-0 min-w-max border border-solid border-white rounded-[40px] bg-white py-3 md:py-6 px-14 text-[16px] leading-[1.4] text-[#2D008D] font-semibold"
                onClick={createWish}
              >
                Create a wish
              </button>
              <button
                className="tracking-[0.01em] flex-1 flex-shrink-0 min-w-max !border !border-solid !border-[#6033C0] rounded-[40px] bg-transparent py-3 md:py-6 px-14 text-[16px] leading-[1.4] text-white font-semibold"
                onClick={() => navigate("/wish-list")}
              >
                View all wishes
              </button>
            </div>
          </div>
          <div className="mt-auto hidden md:flex items-center gap-2">
            <button
              className="h-[40px]tracking-[0.01em] text-[13px] leading-[1.3] font-semibold text-white bg-transparent px-2.5 py-3 rounded-[8px] border border-solid"
              onClick={scrollToNextSection}
            >
              <ArrowDownIcon width={20} height={20} />
            </button>
            <button className="h-[40px]tracking-[0.01em] text-[13px] leading-[1.3] font-semibold text-white bg-transparent px-4 py-3 rounded-[8px] border border-solid">
              Recent
            </button>
            <button className="h-[40px]tracking-[0.01em] text-[13px] leading-[1.3] font-semibold text-white bg-transparent px-4 py-3 rounded-[8px] border border-solid">
              Popular
            </button>
            <button className="h-[40px]tracking-[0.01em] text-[13px] leading-[1.3] font-semibold text-white bg-transparent px-4 py-3 rounded-[8px] border border-solid">
              Info
            </button>
            <button className="tracking-[0.01em] text-[13px] leading-[1.3] font-semibold text-white bg-transparent px-4 py-3 rounded-[8px] border border-solid">
              FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
