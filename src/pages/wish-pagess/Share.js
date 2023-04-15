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

function Share({ slug, page }) {
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
    <SosialN className="bg-white rounded-[24px] p-4 md:p-8 flex items-center justify-between mb-4">
      <div
        className="font-dynamic font-dynamic--sm text-xl text-[#3800B0]"
        style={{ "--fw": 600 }}
      >
        Share
      </div>
      <FacebookShareButton url={`https://dev.wishx.me/${page}/${slug}`}>
        <BsFacebook className="text-[#3800B0] text-xl md:text-2xl" />
      </FacebookShareButton>
      <TwitterShareButton url={`https://dev.wishx.me/${page}/${slug}`}>
        <BsTwitter className="text-[#3800B0] text-xl md:text-2xl" />
      </TwitterShareButton>
      <TelegramShareButton url={`https://dev.wishx.me/${page}/${slug}`}>
        <FaTelegram className="text-[#3800B0] text-xl md:text-2xl" />
      </TelegramShareButton>
      <WhatsappShareButton url={`https://dev.wishx.me/${page}/${slug}`}>
        <BsWhatsapp className="text-[#3800B0] text-xl md:text-2xl" />
      </WhatsappShareButton>
      <EmailShareButton url={`https://dev.wishx.me/${page}/${slug}`}>
        <IoMailOutline className="text-[#3800B0] text-xl md:text-2xl" />
      </EmailShareButton>
      <button
        onClick={() => handleCopyLink(`https://dev.wishx.me/${page}/${slug}`)}
      >
        <RiLinksFill className="text-[#3800B0] text-xl md:text-2xl" />
      </button>
    </SosialN>
  );
}

export default Share;
