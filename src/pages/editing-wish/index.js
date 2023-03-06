import React, { useState } from "react";
import { Loader, MultiSelect } from "@mantine/core";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Glasses from "../../style/icons/glass.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import { MainContainer, Container, Hedaer, Section } from "./Main.Styles";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import CustomBreadcrumb from "../../shared/components/breadcrumb";
import { myaxios, myaxiosprivate } from "../../api/myaxios";

const Editing_Wish = () => {
  const { state } = useLocation();
  const [isVisibleSetter, setVisibleSetter] = useState(false);
  const [isVisible, setVisible] = useState("none");
  const [getUpdateWishData, setUpdateWishData] = useState({
    title: "",
    price: "",
    currency_id: "",
    image: "",
    description: "",
  });
  const [selectedCash, setSelectedCash] = useState(
    String(state?.currency?.name == null)
      ? "USD"
      : String(state?.currency?.name),
    getUpdateWishData.currency_id == null
      ? state?.currency?.id
      : getUpdateWishData.currency_id
  );
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, defaultValue },
    setValue,
    values,
  } = useForm({
    reValidateMode: "onChange",
    mode: "all",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const getProfileUrl = () => {
    navigate("/my-profile");
  };
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h4
            style={{
              width: "100%",
              textAlign: "center",
              color: "#110035",
              fontFamily: "Steppe",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "120%",
            }}
          >
            The request has been sent to the moderators for verification
          </h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={getProfileUrl}>Go to profile</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = useState(false);
  const CashItems = ({ item, id }) => {
    return (
      <li
        className="cash-selection-block-list-item"
        onClick={() => {
          setSelectedCash(item);
          // setSelectedCash(item);
          setVisible("none");
          setVisibleSetter(false);
          setUpdateValuteWish(id);
        }}
      >
        {item}
      </li>
    );
  };

  const onCashSelectPush = () => {
    if (isVisibleSetter == false) {
      setVisible("block");
      setVisibleSetter(true);
    } else {
      setVisible("none");
      setVisibleSetter(false);
    }
  };

  const cash = ["USD"];

  // const data = [
  //   {
  //     label: "Travel",
  //     value: 1,
  //   },
  //   {
  //     label: "Bussiness",
  //     value: 2,
  //   },
  // ];
  const [data, setData] = useState([]);
  const [UpdateValuteWish, setUpdateValuteWish] = useState(1);
  const [initialValues, setInitialValues] = useState();
  const [loading, setLoading] = useState(true);
  const [interestId, setInterestId] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    setError("");
    myaxios
      .get("/api/v1/wish/categories/get")
      .then(({ data }) => {
        const transformedData = data.data.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        });
        setData(transformedData);
      })
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    setError("");
    myaxiosprivate
      .get(`/api/v1/wish/edit?wish_id=${state}`)
      .then(({ data }) => {
        setInitialValues(data.data);
        data.data.categories.forEach((item) =>
          setInterestId((prevInterestId) => [...prevInterestId, item.id])
        );
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  // getUpdateWishData.currency_id == null ? +state.currency.id : getUpdateWishData.currency_id

  useEffect(() => {
    if (initialValues) {
      setValue("title", initialValues.title);
      setValue("description", initialValues.description);
      setValue("date", initialValues.date);
      setValue("occasion", initialValues.occasion);
      setValue("access", initialValues.access);
      setValue("price", initialValues.price);
      setValue("interests", interestId);
    }
  }, [initialValues, setValue]);

  const wishImg = `${process.env.REACT_APP_API_URL}${initialValues?.image}`;
  const updateWish = async ({
    description,
    date,
    occasion,
    access,
    price,
    title,
    interests,
  }) => {
    const formData = new FormData();
    formData.append("wish_id", initialValues?.id);
    formData.append("file", selectedImg ? selectedImg : initialValues.image);
    formData.append("currency_id", initialValues.currency?.id);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("occasion", occasion);
    formData.append("access", access);
    formData.append("price", price);
    formData.append("title", title);
    formData.append("categories", interests);

    await myaxiosprivate
      .post("/api/v1/wish/update", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        //successfull message
        toast.success("Successfully updated ", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) =>
        toast.error("Please check your details", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader size="xl" />
      </div>
    );
  }

  return (
    <MainContainer>
      <Container>
        <div className="container-insider">
          <Hedaer>
            <p className="path-title">
              <CustomBreadcrumb
                links={[
                  {
                    title: "Main",
                    to: "/",
                  },
                  {
                    title: "Edit Wish",
                  },
                ]}
              />
            </p>
            <h1 className="edit-wish-title">Edit the wish</h1>
          </Hedaer>
          <Section>
            <h5 className="description-title">{initialValues?.title}</h5>
            <form onSubmit={handleSubmit(updateWish)}>
              <div className="wish-name">
                <input
                  type="text"
                  name="title"
                  defaultValue={initialValues?.title}
                  placeholder="Enter Wish Name"
                  {...register("title", {
                    required: "Wish title is required!",
                  })}
                />
              </div>
              {errors.title ? (
                <p className="mx-14 -mt-2 text-red-500 text-xs">
                  {errors.title.message}
                </p>
              ) : null}
              <div className="cash-set-container">
                <div className="cash-set-container-insider">
                  <div className="cash-quantity-container">
                    <input
                      type="text"
                      name="price"
                      defaultValue={initialValues.price}
                      placeholder="Enter Quantity"
                      {...register("price", { required: "Price is required!" })}
                    />
                  </div>
                  <div className="cash-type-container">
                    <div className="cash-selection">
                      {/* onClick={onCashSelectPush} */}
                      <label className="cash-type">{selectedCash}</label>
                      {/* <div className='icon'>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div> */}

                      <div
                        className="cash-selection-block"
                        style={{ display: isVisible }}
                      >
                        <ul className="cash-selection-block-list">
                          {cash.map((item, index) => (
                            <CashItems key={item} item={item} id={index} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {errors.price ? (
                <p className="mx-14 -mt-2 text-red-500 text-xs">
                  {errors.price.message}
                </p>
              ) : null}
              <div className="text-area">
                <textarea
                  className="text-area-container"
                  name="description"
                  defaultValue={initialValues?.description}
                  placeholder="Description"
                  {...register("description", {
                    required: "Description is required!",
                  })}
                ></textarea>
              </div>
              {errors.description ? (
                <p className="mx-14 -mt-2 text-red-500 text-xs">
                  {errors.description.message}
                </p>
              ) : null}
              <div className="multi-select">
                <div className="multi-select-insider">
                  <Controller
                    name="interests"
                    control={control}
                    rules={{ required: "Category are required!" }}
                    render={({ field }) => (
                      <MultiSelect
                        className="multiselect-interest"
                        data={data}
                        placeholder="Category"
                        {...field}
                      />
                    )}
                  />
                </div>
              </div>
              {errors.interests ? (
                <p className="mx-14 -mt-2 text-red-500 text-xs">
                  {errors.interests.message}
                </p>
              ) : null}
              <div className="aviable-group">
                <FormControl>
                  <RadioGroup defaultValue={initialValues?.access || false}>
                    <FormControlLabel
                      value={true}
                      name="access"
                      control={<Radio />}
                      label="Available to everyone"
                      {...register("access")}
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label="Only available by link"
                      {...register("access")}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </form>
          </Section>
        </div>
        <div className="container-insider-sm">
          <div className="content-container">
            <img
              src={initialValues.image ? wishImg : selectedImg}
              className="glasses-img"
            />
            <div className="change-photo-button-container">
              <input
                type="file"
                onChange={(e) => setSelectedImg(e.target.files[0])}
                className="file-uploader"
                style={{ display: "none" }}
              />
              <button
                className="change-photo-button"
                onClick={(e) => {
                  e.preventDefault();
                  const dialog = document.querySelector(".file-uploader");
                  dialog.click();
                }}
              >
                change photo
              </button>
            </div>
            <div className="change-photo-button-container">
              <button type="button" className="delete-photo">
                Delete
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="save-changes-button-container">
          <Button
            variant="primary"
            className="save-changes-button"
            type="submit"
            onClick={handleSubmit(updateWish)}
          >
            Save changes
          </Button>
        </div>
        <ToastContainer />
      </Container>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </MainContainer>
  );
};

export default Editing_Wish;
