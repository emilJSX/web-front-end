import { Menu } from "@mantine/core";
import { enqueueSnackbar } from "notistack";
import React, { useRef, useState } from "react";
import {
  BsFillHandThumbsUpFill,
  BsHandThumbsUp,
  BsThreeDots,
} from "react-icons/bs";
import { CgTrash } from "react-icons/cg";
import { FaPen } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { myaxiosprivate } from "../../../api/myaxios";

function ThanksComment({ user, congrats, id }) {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(congrats.text);
  const [edit, setEdit] = useState(false);
  let [likeCount, setLikeCount] = useState(congrats.likes.count);
  const [like, setLike] = useState(congrats.likes.userLiked);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [images, setImages] = useState(congrats.files);
  const [imagePreviews, setImagePreviews] = useState([]);
  const handleEdit = () => {
    setEdit(true);
    setInputDisabled(false);
    inputRef.current?.focus();
  };
  const handleLike = async () => {
    await myaxiosprivate
      .post("/api/v1/wish/comments/congratulations-like", {
        response_id: congrats.response_id,
      })
      .then(({ data }) => {
        setLike(!like);
        data.message === "system.congratulations_response.unliked"
          ? setLikeCount((likeCount -= 1))
          : setLikeCount((likeCount += 1));

        enqueueSnackbar(data.message);
      })
      .catch((err) => enqueueSnackbar(err.message));
  };
  const handleFileSelect = (e) => {
    let imagesArr = [];

    for (let i = 0; i < e.target.files.length; i++) {
      imagesArr.push(URL.createObjectURL(e.target.files[i]));
    }

    setImages(e.target.files);
    setImagePreviews(imagesArr);
  };
  const handleDeleteFile = (index) => {
    const updatedFiles = [...images];
    updatedFiles.splice(index, 1);
    setImages(updatedFiles);

    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);
  };
  const handleSaveChanges = async () => {
    const formData = new FormData();
    formData.append("wish_id", id);
    formData.append("text", inputValue);
    for (let i = 0; i < images.length; i++) {
      formData.append(`files[]`, images[i]);
    }
    // formData.append("files[]", images);

    // images.forEach((image) => {
    //   formData.append("files[]", image);
    // });
    await myaxiosprivate
      .post("/api/v1/wish/comments/congratulations-response", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => enqueueSnackbar(data.message))
      .catch((err) => enqueueSnackbar(err.message));
  };
  const handleFileDelete = async (id) => {
    const index = images.findIndex((img) => img.id === id);
    if (index !== -1) {
      images.splice(index, 1);
    }
    await myaxiosprivate
      .post("/api/v1/wish/comments/congratulations-response-file-delete", {
        response_id: congrats.response_id,
        file_id: id,
      })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="rounded-[20px] bg-[#fff] mt-1 p-6 lg:p-12">
      <div className="flex md:flex-row flex-col">
        <div className="flex justify-between w-full">
          <div className="flex">
            {" "}
            <img
              className="mr-2 object-fill rounded-full w-6 h-6 flex-shrink-0 md:mb-0 mb-[8px]"
              src={user?.image}
              alt=""
            />
            <p className="text-[14px] leading-[28px] font-semibold text-[#8E93AF]">
              <span className="text-black font-bold">{user?.name}</span> thanks
              congratulators
            </p>
          </div>
          <div className="text-xl">
            <Menu
              size={"sm"}
              position="right"
              classNames={{
                body: "rounded-[16px]",
              }}
              control={
                <button className="flex items-center text-[#3800B0]">
                  <BsThreeDots />
                </button>
              }
            >
              <Menu.Item>
                <button
                  className="flex items-center text-[#3800B0]"
                  onClick={handleEdit}
                >
                  <FaPen className="text-sm !text-[#3800B0]" />
                  <span className="ml-2 text-sm leading-[1.3] tracking-[0.01em] !text-[#3800B0]">
                    Edit
                  </span>
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  className="flex items-center text-[#3800B0]"
                  onClick={() =>
                    enqueueSnackbar("You can not delete response at this time.")
                  }
                >
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
      </div>

      <div className="my-1">
        <div className="flex justify-between">
          <input
            disabled={inputDisabled}
            className="p-1 text-start w-full h-[35px] leading-[28px] font-semibold text-[black]"
            placeholder="Thank your friends and show the report"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="flex items-center text-[#2D008D]">
            <span className="text-[13px] leading-[1.4] font-medium text-[#2D008D] mr-[6px]">
              {likeCount}
            </span>
            {like ? (
              <BsFillHandThumbsUpFill onClick={handleLike} />
            ) : (
              <BsHandThumbsUp className="mb-2" onClick={handleLike} />
            )}
          </button>
        </div>
        <div className="flex  items-center flex-wrap">
          {congrats.files.length > 0 &&
            images.map((file, i) => (
              <div className="relative" key={i}>
                {edit && (
                  <CgTrash
                    onClick={() => handleFileDelete(file.id)}
                    className="absolute text-[#2D008D] bg-slate-200 w-[24px] h-[24px] right-2 top-2 rounded-full"
                  />
                )}
                <img
                  src={file.url}
                  className="w-[100px] h-[80px] md:w-[200px] md:h-[160px] rounded-md m-1"
                />
              </div>
            ))}
        </div>
        {edit && (
          <>
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
                  name="files[]"
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
            <button
              onClick={handleSaveChanges}
              className="bg-[#2D008D] text-white rounded-md p-3 shadow-md"
            >
              Save changes
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ThanksComment;
