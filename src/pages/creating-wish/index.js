import React, { useEffect, useState } from "react";
import "react-widgets/styles.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import Brochure from "../../style/icons/img.svg";
import { toast, ToastContainer } from "react-toastify";

import {
  Container,
  Hedaer,
  MainContainer,
  Section,
  Temp,
} from "./MyCreatedWish.Styles";
import axios from "axios";
import { MultiSelect } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import CustomBreadcrumb from "../../shared/components/breadcrumb";

const Created_Wish = () => {
  const [value, setValue] = useState();
  const [isVisibleSetter, setVisibleSetter] = useState(false);
  const [selectedCash, setSelectedCash] = useState("USD", 0);
  const [isVisible, setVisible] = useState("none");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "all",
  });

  // States for creation wish
  const [selectedFile, setSelectedFile] = useState(null);
  const [CreatingTitleWish, setTitleWish] = useState("");
  const [CreationPriceWish, setPriceWish] = useState("");
  const [CreationDescriptionWish, setDescriptionWish] = useState("");
  const [CreationValuteWish, setValuteWish] = useState(1);
  const [CreationCategoriesWish, setCategoriesWish] = useState(1);
  const [CreationDateWish, setDateWish] = useState("11.20.22");
  const [CreationOccasionWish, setOccasionWish] = useState("22-th Birthday");
  const [CheckedUrlPublicWish, setCheckedPublikWish] = useState(undefined);

  // end States

  const navigate = useNavigate();
  useEffect(() => {
    setTitleWish(wishCreationTitleHome?.state);
  }, []);

  const wishCreationTitleHome = useLocation();

  // Get LocalStorage User Token
  const GetUserTokenCreationWish = localStorage.getItem("UserToken=");

  if (!GetUserTokenCreationWish) {
    navigate("/");
  }
  // end token
  const handleChange = (newValue) => {
    setValue(newValue);
    setDateWish(newValue);
  };

  const CashItems = ({ item, id }) => {
    return (
      <li
        id={id}
        className="cash-selection-block-list-item"
        onClick={() => {
          setSelectedCash(item);
          setVisible("none");
          setValuteWish(id);
          setVisibleSetter(false);
        }}
      >
        {item}
      </li>
    );
  };

  const data = [
    {
      label: "Travel",
      value: 1,
    },
  ];

  const testing = (item) => {
    console.log(item);
  };

  const [getInterestsIdApi, setInterestsIdApi] = useState();
  const getInterestsId = (item) => {
    setInterestsIdApi(item);
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

  const HandleClickGeCashId = (cash_id) => {
    console.log(cash_id);
  };

  const handleSubmitCreateWish = async ({ title, price, description }) => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("title", title);
    formData.append("occasion", CreationOccasionWish);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("currency_id", CreationValuteWish);
    formData.append("categories", getInterestsIdApi);
    formData.append("date", "11.20.22");
    formData.append("access", CheckedUrlPublicWish);
    console.log(CheckedUrlPublicWish);

    try {
      await axios({
        method: "post",
        url: "https://api.wishx.me/api/v1/wish/store",
        data: formData,
        headers: {
          "Access-Control-Allow-Origin": "*",
          xsrfHeaderName: "X-XSRF-TOKEN",
          Authorization: `Bearer ${GetUserTokenCreationWish}`,
        },
      }).then((result) => {
        console.log(result);
        var getResultWishId = result?.data?.data?.id;
        if (result.data.success == false) {
          toast.info(result.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.success(result.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
            navigate("/creating-wish-success", { state: getResultWishId });
          }, 3000);
        }

        console.log("True");
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <MainContainer>
      <ToastContainer />
      <Container>
        <div className="container-insider">
          <Hedaer>
            {/*<p className="path-title">Main {">"} Create Wish</p>*/}
            <p className="path-title">
              <CustomBreadcrumb margins="mt-0 mb-8" links={[
                {
                  title: 'Main',
                  to: '/'
                },
                {
                  title: 'Create Wish',
                  to: "/creating-wish"
                }
              ]} />
            </p>
            <h1 className="edit-wish-title">Creating Wish</h1>
          </Hedaer>
          <Temp>
            <div className="promote-block">
              <div className="titles-block">
                <h1 className="main-title">
                  Your sincerity is the key to success!
                </h1>
                <ul>
                  <li>
                    Add as many details as possible and tell why you need the
                    gift.
                  </li>
                  <li>
                    Wish for real things, come true when you yourself are ready
                    for it!
                  </li>
                </ul>
              </div>
              <div className="promote-and-button">
                <div className="brochure">
                  <img src={Brochure} className="brochure-image" />
                </div>
                <div className="button">
                  <button>OK</button>
                </div>
              </div>
            </div>
          </Temp>

          <Section>
            <form onSubmit={handleSubmit(handleSubmitCreateWish)}>
              <h5 className="description-title">Describe a wish</h5>
              <div className="wish-name">
                <input
                  type="text"
                  // onChange={(e) => setTitleWish(e.target.value)}
                  // value={CreatingTitleWish}
                  {...register("title", {
                    required: "Wish title is required!",
                  })}
                  placeholder="Wish Name"
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
                      required
                      onChange={(e) => setPriceWish(e.target.value)}
                      placeholder="Price"
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
                  required
                  onChange={(desc) => setDescriptionWish(desc.target.value)}
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
                    rules={{ required: "Interests are required!" }}
                    render={({ field }) => (
                      <MultiSelect
                        className="multiselect-interest"
                        data={data}
                        onChange={getInterestsId}
                        placeholder="Interests"
                        value={getInterestsIdApi}
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
              {/* <div className='date-fo-birth-container'>
                                <div className='date-fo-birth-container-insider'>

                                    <div className='date'>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <Stack spacing={3} style={{ background: '#F7F8FA', border: '0' }}>
                                                <DesktopDatePicker
                                                    label="Date of Birth"
                                                    inputFormat="MM.DD.YY"
                                                    value={value}
                                                    onChange={handleChange}
                                                    renderInput={(params) => <TextField {...params} />}

                                                />
                                            </Stack>
                                        </LocalizationProvider>
                                    </div>
                                    <div className='date-of-birth'>
                                        <input type='text' onChange={(e) => setOccasionWish(e.target.value)} required={true} placeholder='Occasion (ex: birthday)' />
                                    </div>
                                </div>
                            </div> */}
              <div className="aviable-group">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    onChange={(e) => {
                      console.log(e);
                    }}
                  >
                    <FormControlLabel
                      value="a"
                      onClick={() => setCheckedPublikWish(true)}
                      control={<Radio />}
                      label="Available to everyone"
                    />
                    <FormControlLabel
                      value="b"
                      onClick={() => setCheckedPublikWish(false)}
                      control={<Radio />}
                      label="Only available by link"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </form>
          </Section>
        </div>
        <div className="container-insider-sm ">
          <div className="flex flex-col gap-2 flex-1 w-[90%] ml-6">
            <div
              className="content-container"
              onClick={() => {
                const dialog = document.querySelector(".file-uploader");
                dialog.click();
              }}
            >
              <input
                type="file"
                required
                onChange={handleFileSelect}
                className="file-uploader"
                style={{ display: "none" }}
              />
              {/* onChange={HandleGetImage} */}
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
              <h5>Upload a photo of your wish</h5>
              <p>PNG, JPG or Gif</p>
              <p>Max 5MB</p>
            </div>
            {errors.file ? (
              <p className="mx-14 text-red-500 text-xs">
                {errors.file.message}
              </p>
            ) : null}
          </div>
        </div>
        <div className="if-not-singed-in">
          <h1 className="sing-up-title">Sing Up</h1>
          <div className="aleready-have-account-block">
            <h5 className="aleready-have-account-title">
              Already have account?
            </h5>
            <h5 className="log-in-title">Log In</h5>
          </div>
          <div className="log-in-with-facebook-block">
            <button className="log-in-with-facebook-button">
              <FaFacebook className="facebook-icon" />
              <h5 className="facebook-title">Facebook</h5>
            </button>
          </div>
          <div className="log-in-with-facebook-block">
            <button className="log-in-with-google-button">
              <FaGoogle className="google-icon" />
              <h5 className="google-title">Google</h5>
            </button>
            <button className="log-in-with-apple-button">
              <FaApple className="apple-icon" />
              <h5 className="apple-title">Apple</h5>
            </button>
          </div>
          {/* <div className='or-via-email-block'>
                        <h5 className='or-via-email-title'>
                           Or via email
                        </h5>
                    </div> */}
        </div>
      </Container>
      <Container>
        <div className="save-changes-button-container">
          <Button
            type="submit"
            onClick={handleSubmit(handleSubmitCreateWish)}
            variant="primary"
            className="save-changes-button"
          >
            Create Wish
          </Button>
        </div>
      </Container>
    </MainContainer>
  );
};

export default Created_Wish;
