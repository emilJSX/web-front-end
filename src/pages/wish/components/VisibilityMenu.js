import React from "react";
import { createStyles, Menu } from "@mantine/core";
import { RiEarthFill } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5";
import EarthIcon from "../../../assets/svg/global.svg";
import PeopleIcon from "../../../assets/svg/profile-2user.svg";
import SmilesIcon from "../../../assets/svg/smiles.svg";
import GhostIcon from "../../../assets/svg/ghost.svg";
import menuStyles from "./menu.module.css";
import { useMediaQuery } from "@mantine/hooks";

const useMenuStyles = createStyles((theme) => ({
  body: {
    border: "2px solid #6033C0",
    boxShadow: "0px 8px 32px -8px rgba(38, 33, 48, 0.08)",
    borderRadius: "16px",
    padding: "24px"
  },
  label: {
    fonWeight: 400,
    fonSize: "13px",
    lineHeight: 1.6,
    color: "#110035",
    padding: 5
  },
  item: {
    padding: 0
  },
  itemLabel: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: 24,
    padding: "12px 0",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      backgroundColor: "#EBE5F7",
      padding: "12px 0 12px 6px",
    }
  }
}))

const options = [
  {
    title: "Public",
    subtitle: "All who can see the wish",
    icon: EarthIcon,
    id: "public"
  },
  {
    title: "Friends",
    subtitle: "Only your friends",
    icon: PeopleIcon,
    id: "friends"
  },
  {
    title: "Only you and wisher",
    subtitle: "Strictly between you two",
    icon: SmilesIcon,
    id: "only_you_and_wisher"
  },
  {
    title: "Anonymously",
    subtitle: "Nobody can see, even wisher",
    icon: GhostIcon,
    id: "anonymously"
  }
]

const VisibilityMenu = ({ controlLabel, setVisibility, menuId }) => {
  const { classes: menuClasses } = useMenuStyles();
  const isMobile = useMediaQuery("(max-width: 1000px)")

  const menuClassnames = {
    body: menuClasses.body,
    label: menuClasses.label,
    item: menuClasses.item,
    itemLabel: menuClasses.itemLabel,
  }

  const handleFormChange = (e) => {
    const id = e.target.id;
    const selectedOption = options.find((option) => option.id === id)
    if (selectedOption) {
      setVisibility(selectedOption.title)
    }
  }

  return (
    <Menu
      shadow="md"
      size={isMobile ? 320 : 420}
      trigger="hover"
      closeOnItemClick={false}
      closeOnScroll={false}
      position={isMobile ? "bottom" : "left"}
      classNames={menuClassnames}
      menuId={menuId}
      id={menuId}
      control={
        <button className="flex items-center text-[#3800B0]">
          <img className="w-[14px] h-[14px]" src={options.find((option) => option.title === controlLabel)?.icon || EarthIcon} alt=""/>
          <span
            className="text-[12px] tracking-[0.01em] mx-1 text-[#3800B0] font-semibold leading-[1.3]">{controlLabel}</span>
          <IoChevronDown/>
        </button>
      }>
      <Menu.Label>
        Who can see your name in your congratulation card? Also defines who can see the
        congratulations on your page.
      </Menu.Label>
      <form action="" onChange={handleFormChange}>
        {options.map((option) => (
          <Menu.Item key={option.id}>
            <input className={menuStyles.checkbox} id={option.id} name="wish-visibility" type="radio"/>
            <label className={menuStyles.checkbox_label} htmlFor={option.id}>
              <div className="rounded-full w-12 h-12 bg-[#EBE5F7] flex items-center justify-center mr-3">
                <img src={option.icon} alt=""/>
              </div>
              <div>
                <p
                  className="text-[14px] leading-[1.3] tracking-[0.01em] font-semibold text-[#3800B0]">{option.title}</p>
                <p className="text-[12px] leading-[1.6] font-regular text-[#3800B0]">{option.subtitle}</p>
              </div>
            </label>
          </Menu.Item>
        ))}
      </form>
    </Menu>
  )
}

export default VisibilityMenu;