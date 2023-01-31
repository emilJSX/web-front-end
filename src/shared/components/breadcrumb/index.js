import { Link } from "react-router-dom";
import ChevronRight from "../../../assets/svg/chevron-right.svg";
import WhiteChevronRight from "../../../assets/svg/arrow-right-white.svg";

const CustomBreadcrumb = ({ links, color = "", margins = "" }) => {
  return (
    <ul className={`flex items-center gap-2 opacity-40 ${margins ? margins : "mt-10 mb-8"}`}>
      {links.map(({ title, to }, index) => (
        <li className="flex items-center gap-2" key={index}>
          {to ? (
            <Link
              className={`text-[14px] leading-[1.6] font-normal`}
              style={{
                color: color ? color : "#0B0023"
              }}
              to={to}
            >
              {title}
            </Link>
          ) : (
            <span
              className={`text-[14px] leading-[1.6] font-normal`}
              style={{
                color: color ? color : "#0B0023"
              }}
            >
              {title}
            </span>
          )}
          {index !== links.length - 1 && (
            <img
              className="-mt-1"
              src={color ? WhiteChevronRight : ChevronRight}
              alt=""
            />
          )}
        </li>
      ))}
    </ul>
  )
}

export default CustomBreadcrumb;