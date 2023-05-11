import { enqueueSnackbar } from "notistack";
import React from "react";
import { myaxiosprivate } from "../../api/myaxios";

function Withdraw({ payoutRequest, id, isMyProfile }) {
  const handleWithdraw = async (id) => {
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
          ? "w-fit p-[9.4px] mb-0 md:p-5 text-sm font-semibold bg-white shadow-md text-[#3800B0]  rounded-md"
          : "w-full bg-white rounded-md p-4 md:p-8 text-center font-semibold flex items-center justify-between mb-4 shadow-md text-[#3800B0]"
      }
    >
      Withdraw
    </button>
  );
}

export default Withdraw;
