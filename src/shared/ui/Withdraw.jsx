import { enqueueSnackbar } from "notistack";
import React from "react";
import { myaxiosprivate } from "../../api/myaxios";
import { ReactComponent as ArrowUp } from "./arrowUp.svg";
import { BsArrowUpCircle } from "react-icons/bs";
function Withdraw({ payoutRequest, id, isMyProfile }) {
  const handleWithdraw = async () => {
    await myaxiosprivate
      .post("/api/v1/wish/payout-request", {
        wish_id: id,
      })
      .then(({ data }) => enqueueSnackbar("Your request is sent to moderation"))
      .catch((err) => enqueueSnackbar(err.message));
  };

  return (
    <button
      onClick={() =>
        !payoutRequest?.status
          ? enqueueSnackbar(
              "Please note that you are unable to request a withdrawal until your birthday date has passed. Once your birthday has finished, you will be able to submit your withdrawal request."
            )
          : handleWithdraw()
      }
      className={
        isMyProfile
          ? "md:flex hidden md:w-[130px]  h-[40px] p-[8px] md:mt-2 mb-0 ml-1 md:py-[12px] md:mr-2 md:px-[16px] border-[1px] border-[#6033C0] text-[13px]  shadow-md text-[white] hover:shadow-md hover:!bg-[#2D008D]  rounded-md"
          : "w-full bg-white rounded-md p-4 md:p-8 text-center font-semibold flex items-center mb-4 shadow-md text-[#3800B0]"
      }
    >
      <BsArrowUpCircle className="md:mr-2 text-[14px]" />
      <span className={isMyProfile ? "md:block hidden" : "block ml-1"}>
        {" "}
        Withdraw
      </span>
    </button>
  );
}

export default Withdraw;
