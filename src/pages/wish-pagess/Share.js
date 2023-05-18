import React, { useState } from "react";
import { SosialN } from "../my-profile/MyProfile.style";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { RiLinksFill } from "react-icons/ri";
import { enqueueSnackbar } from "notistack";

function Share({ slug, page, isMyProfile }) {
  const [error, setError] = useState("");
  async function handleCopyLink(link) {
    try {
      await navigator.clipboard.writeText(link);
      enqueueSnackbar("Link copied");
    } catch (err) {
      enqueueSnackbar(err.message);
      setError(err.message);
    }
  }

  return (
    <SosialN
      className={`${
        isMyProfile ? "bg-[#E5E5E5] h-[56px] mt-2" : "bg-white"
      } rounded-[24px] p-4 md:p-8 flex items-center justify-between mb-4 border-[#BFACE9] hover:shadow-md hover:shadow-[#3800B052]`}
    >
      <div
        className="font-dynamic font-dynamic--sm text-xl text-[#3800B0]"
        style={{ "--fw": 600 }}
      >
        Share
      </div>
      <FacebookShareButton
        url={`${process.env.REACT_APP_DEV_URL}/${page}/${slug}`}
      >
        <BsFacebook className="text-[#3800B0] text-xl md:text-2xl" />
      </FacebookShareButton>
      <TwitterShareButton
        url={`${process.env.REACT_APP_DEV_URL}/${page}/${slug}`}
      >
        <BsTwitter className="text-[#3800B0] text-xl md:text-2xl" />
      </TwitterShareButton>
      <TelegramShareButton
        url={`${process.env.REACT_APP_DEV_URL}/${page}/${slug}`}
      >
        <FaTelegram className="text-[#3800B0] text-xl md:text-2xl" />
      </TelegramShareButton>
      <WhatsappShareButton
        url={`${process.env.REACT_APP_DEV_URL}/${page}/${slug}`}
      >
        <BsWhatsapp className="text-[#3800B0] text-xl md:text-2xl" />
      </WhatsappShareButton>
      <EmailShareButton
        url={`${process.env.REACT_APP_DEV_URL}/${page}/${slug}`}
      >
        <IoMailOutline className="text-[#3800B0] text-xl md:text-2xl" />
      </EmailShareButton>
      <button
        onClick={() =>
          handleCopyLink(`${process.env.REACT_APP_DEV_URL}/${page}/${slug}`)
        }
      >
        <RiLinksFill className="text-[#3800B0] text-xl md:text-2xl" />
      </button>
    </SosialN>
  );
}

export default Share;
