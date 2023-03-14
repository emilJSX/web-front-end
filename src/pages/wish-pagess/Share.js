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
function Share({ slug,page }) {
  const [error, setError] = useState("");
  async function handleCopyLink(link) {
    try {
      await navigator.clipboard.writeText(link);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <SosialN>
      <div
        style={{
          color: "#3800B0",
          fontWeight: "bold",
        }}
      >
        Share
      </div>
      <FacebookShareButton url={`https://dev.wishx.me/${page}/${slug}`}>
        <BsFacebook className="Facebook" />
      </FacebookShareButton>
      <TwitterShareButton url={`https://dev.wishx.me/${page}/${slug}`}>
        <BsTwitter className="twitter" />
      </TwitterShareButton>
      <TelegramShareButton url={`https://dev.wishx.me/${page}/${slug}`}>
        <FaTelegram className="telegram" />
      </TelegramShareButton>
      <WhatsappShareButton url={`https://dev.wishx.me/${page}/${slug}`}>
        <BsWhatsapp className="whatsapp" />
      </WhatsappShareButton>
      <EmailShareButton url={`https://dev.wishx.me/${page}/${slug}`}>
        <IoMailOutline className="mail" />
      </EmailShareButton>
      <a onClick={() => handleCopyLink(`https://dev.wishx.me/${page}/${slug}`)}>
        <RiLinksFill className="link" />
      </a>
    </SosialN>
  );
}

export default Share;
