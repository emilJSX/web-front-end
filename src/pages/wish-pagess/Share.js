import React from "react";
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
function Share({ slug }) {
  async function handleCopyLink(link) {
    try {
      await navigator.clipboard.writeText(link);
      console.log("Link copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
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
      <FacebookShareButton url={`https://wishx.me/${slug}`}>
        <BsFacebook className="Facebook" />
      </FacebookShareButton>
      <TwitterShareButton url={`https://wishx.me/${slug}`}>
        <BsTwitter className="twitter" />
      </TwitterShareButton>
      <TelegramShareButton url={`https://wishx.me/${slug}`}>
        <FaTelegram className="telegram" />
      </TelegramShareButton>
      <WhatsappShareButton url={`https://wishx.me/wish/${slug}`}>
        <BsWhatsapp className="whatsapp" />
      </WhatsappShareButton>
      <EmailShareButton url={`https://wishx.me/wish/${slug}`}>
        <IoMailOutline className="mail" />
      </EmailShareButton>
      <a
        onClick={() =>
          handleCopyLink(`https://wishx.me/wish/${slug}`)
        }
      >
        <RiLinksFill className="link" />
      </a>
    </SosialN>
  );
}

export default Share;
