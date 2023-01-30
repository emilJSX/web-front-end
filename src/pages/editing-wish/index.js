import React, { useState } from 'react';
import { MultiSelect } from '@mantine/core';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';;
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Glasses from '../../style/icons/glass.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import {
    MainContainer,
    Container,
    Hedaer,
    Section
} from './Main.Styles';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Controller, useForm } from "react-hook-form";

const GetUserTokenCreationWish = localStorage.getItem("UserToken=")

const Editing_Wish = () => {
    const { state } = useLocation()
    const [isVisibleSetter, setVisibleSetter] = useState(false);
    const [getCurrencyName, setCurrencyName] = useState("")
    const [isVisible, setVisible] = useState('none');
    const [getUpdateWishData, setUpdateWishData] = useState({ title: "", price: "", currency_id: "", image: "", description: ""})
    const [selectedCash, setSelectedCash] = useState(String(state?.currency?.name == null) ? "USD" : String(state?.currency?.name), 
    getUpdateWishData.currency_id == null ? state?.currency?.id : getUpdateWishData.currency_id );

    var idInterestsApi = []

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        reValidateMode: "onChange",
        mode: "all",
    });

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const handleChangeUpdateWish = (e) => {
        const {name, value} = e.target
        const result = {...getUpdateWishData, [name]: value}
        setUpdateWishData(result)
    }
    const navigate = useNavigate()

    const getProfileUrl =()=> {
        navigate("/my-profile")
    }

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={
                        {
                            width: '100%', 
                            textAlign: 'center',
                            color: '#110035',
                            fontFamily: 'Steppe',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '24px',
                            lineHeight: '120%'
                        }}>The request has been sent to the moderators for verification</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={getProfileUrl}>Go to profile</Button>
                </Modal.Footer>
            </Modal>
        );
    }
    

    useEffect(() => {
        const {title="", price="", currency_id="", image="", description=""} = state || {}
        setUpdateWishData({title, price, currency_id, image, description})
    }, [state])

    const [modalShow, setModalShow] = useState(false);

    const CashItems = ({ item, id }) => {
        return (
            <li className='cash-selection-block-list-item'
                onClick={() => {
                    setSelectedCash(item);
                    // setSelectedCash(item);
                    setVisible('none');
                    setVisibleSetter(false)
                    setUpdateValuteWish(id)
                }}
            >
                {item}
            </li>
        )
    }

    const onCashSelectPush = () => {
        if (isVisibleSetter == false) {
            setVisible('block');
            setVisibleSetter(true);
        } else {
            setVisible('none');
            setVisibleSetter(false);
        }
    }

    const cash = ['USD'];

    const data = [
        {
            label: 'Travel',
            value: 1,
        },
    ]
    const editWishEditImage = state?.image
    const GetEditWishImage = `https://api.wishx.me${editWishEditImage}`
    const GetEditWishProfile = `https://api.wishx.me${getUpdateWishData.image}`

    const [UpdateFile, setUpdateFile] = useState(null);
    const [UpdateTitleWish, setUpdateTitleWish] = useState("")
    const [UpdatePriceWish, setUpdatePriceWish] = useState("")
    const [UpdateValuteWish, setUpdateValuteWish] = useState(1)
    const [UpdateCategoriesWish, setUpdateCategoriesWish] = useState()
    const [UpdateDateWish, setUpdateDateWish] = useState("11.20.22")
    const [UpdateOccasionWish, setUpdateOccasionWish] = useState("11-th Birtday")
    const [CheckedUpdateUrlPublicWish, setUpdateCheckedPublikWish] = useState()

    const handleFileSelect = (event) => {
        event.preventDefault()
        setUpdateFile(event.target.files[0])
    }

    useEffect(() => {
        axios.get("https://api.wishx.me/api/v1/wish/edit", {
            params: {
                wish_id: state
            },
            headers: { 'Access-Control-Allow-Origin': '*',  xsrfHeaderName: 'X-XSRF-TOKEN', 'Authorization': `Bearer ${GetUserTokenCreationWish}`}
        }).then((resultWishEditProfile) => {
            const {title="", price="", image="", description="" } = resultWishEditProfile?.data?.data || {}

            const currencyId = resultWishEditProfile?.data?.data.currency.id
            setCurrencyName(resultWishEditProfile?.data?.data.currency.name)
            resultWishEditProfile.data.data.categories.map((e) => (
                idInterestsApi.push(e.id)
             ))

            const {currency_id} = currencyId || {}

            setUpdateWishData({title, price, currency_id, image, description})
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    
    // getUpdateWishData.currency_id == null ? +state.currency.id : getUpdateWishData.currency_id

    const handleSubmitUpdateWish = async(event) => {
        event.preventDefault()
        const formData = new FormData();
        // selectedFile == null ? getUserInfoProfile.avatar : selectedFile
        formData.append("wish_id", state.id == null ? state : state.id)
        formData.append("file", UpdateFile == null ? getUpdateWishData.image : UpdateFile );
        formData.append("title", getUpdateWishData.title)
        formData.append("price", getUpdateWishData.price)
        // getUpdateWishData.currency_id == null ? state.currency.id : getUpdateWishData.currency_id
        formData.append("currency_id", 1)
        formData.append("categories",UpdateCategoriesWish)
        formData.append("date", "11.20.22")
        formData.append("occasion", UpdateOccasionWish)
        formData.append("description", getUpdateWishData.description == null ? state.description : getUpdateWishData.description)
        formData.append("access", CheckedUpdateUrlPublicWish == null ? state.access : CheckedUpdateUrlPublicWish)
        
        try {
          const response = await axios({
            method: "post",
            url: "https://api.wishx.me/api/v1/wish/store",
            data: formData,
            headers: { 'Access-Control-Allow-Origin': '*',  xsrfHeaderName: 'X-XSRF-TOKEN', 'Authorization': `Bearer ${GetUserTokenCreationWish}`, },
          }).then((result) => {
            console.log(result)
            setModalShow(true)
            toast.success('Successfully updated ', {
                position: toast.POSITION.TOP_RIGHT
            });
          });
        } catch(error) {
            toast.error('Please check your details', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
      }

      const getInterestsId  = (item) => {
        setUpdateCategoriesWish(item)
      }
    return (

        <MainContainer>
            <Container>
                <div className='container-insider'>
                    <Hedaer>
                        <p className='path-title'>Main {'>'} Edit Wish</p>
                        <h1 className='edit-wish-title'>Edit the wish</h1>
                    </Hedaer>
                    <Section>
                        <h5 className='description-title'>{getUpdateWishData.title}</h5>
                        <form onSubmit={handleSubmit(handleSubmitUpdateWish)}>
                            <div className='wish-name'>
                                <input type='text' name='title' value={getUpdateWishData.title} onChange={handleChangeUpdateWish} placeholder='Enter Wish Name'
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
                            <div className='cash-set-container'>
                                <div className='cash-set-container-insider'>
                                    <div className='cash-quantity-container'>
                                        <input type='text' name='price' value={getUpdateWishData.price} onChange={handleChangeUpdateWish}  placeholder='Enter Quantity'
                                               {...register("price", { required: "Price is required!" })}
                                        />
                                    </div>
                                    <div className='cash-type-container'>
                                        <div className='cash-selection' >
                                            {/* onClick={onCashSelectPush} */}
                                            <label className='cash-type'>{selectedCash}</label>
                                            {/* <div className='icon'>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div> */}

                                            <div className='cash-selection-block' style={{ display: isVisible }}>
                                                <ul className='cash-selection-block-list'>
                                                    {cash.map((item, index) => <CashItems key={item} item={item} id={index} />)}
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
                            <div className='text-area'>
                                <textarea className='text-area-container' name='description' onChange={handleChangeUpdateWish} value={getUpdateWishData.description} placeholder='Description'
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
                            <div className='multi-select'>
                                <div className='multi-select-insider'>
                                    <Controller
                                      name="interests"
                                      control={control}
                                      rules={{ required: "Interests are required!" }}
                                      defaultValue={idInterestsApi}
                                      render={({ field }) => (
                                        <MultiSelect
                                          className="multiselect-interest"
                                          data={data}
                                          onChange={getInterestsId}
                                          defaultValue={idInterestsApi}
                                          placeholder="Interests"
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
                            <div className='aviable-group'>
                                <FormControl>
                                    <RadioGroup
                                      aria-labelledby="demo-radio-buttons-group-label"
                                      defaultValue="female"
                                      name="radio-buttons-group"
                                    >

                                        <FormControlLabel {...CheckedUpdateUrlPublicWish ? checked=true : ""} value="female" onChange={()=> setUpdateCheckedPublikWish(true)} control={<Radio />} label="Available to everyone" />
                                        <FormControlLabel {...!CheckedUpdateUrlPublicWish ? "" : checked=true} value="male" onChange={()=> setUpdateCheckedPublikWish(false)} control={<Radio />} label="Only available by link" />

                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </form>
                    </Section>
                </div>
                <div className='container-insider-sm'>
                    <div className='content-container'>
                        <img src={GetEditWishProfile == null ? GetEditWishImage : GetEditWishProfile } className='glasses-img' />
                        <div className='change-photo-button-container'>
                            <input type='file' onChange={handleFileSelect} className='file-uploader' style={{display: 'none'}}/>
                            <button className='change-photo-button' onClick={(e) => {
                                e.preventDefault()
                      const dialog = document.querySelector('.file-uploader');
                       dialog.click();
                    }}>change photo</button>
                        </div>
                        <div className='change-photo-button-container'>
                            <button type='button' className='delete-photo'>Delete</button>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='save-changes-button-container'>
                <Button variant="primary" className='save-changes-button' type='submit' onClick={
                    handleSubmit(handleSubmitUpdateWish)
                    }>
                 Save changes
                </Button>
                </div>
                <ToastContainer />
            </Container>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </MainContainer>
    )
}

export default Editing_Wish