import { Container } from "@mantine/core";
import styled from "styled-components";

export const PaymentBody = styled.div`




    .box-1 {
        max-width: 450px;
        padding: 10px 40px;
        user-select: none;
    }

    .box-1 div .fs-12 {
        font-size: 8px;
        color: white;
    }

    .box-1 div .fs-14 {
        font-size: 15px;
        color: white;
    }

    .box-1 img.pic {
        width: 20px;
        height: 20px;
        object-fit: cover;
    }

    .box-1 img.mobile-pic {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .box-1 .name {
        font-size: 11px;
        font-weight: 600;
    }

    .dis {
        font-size: 14px;
        font-weight: 500;
        color: #212529;
    }

    label.box {
        width: 100%;
        font-size: 12px;
        background: #ddd;
        margin-top: 12px;
        padding: 10px 12px;
        border-radius: 5px;
        cursor: pointer;
        border: 1px solid transparent;
    }

    #one:checked~label.first,
    #two:checked~label.second,
    #three:checked~label.third {
        border-color: #7700ff;
    }

    #one:checked~label.first .circle,
    #two:checked~label.second .circle,
    #three:checked~label.third .circle {
        border-color: #7a34ca;
        background-color: #fff;
    }

    label.box .course {
        width: 100%;
    }

    label.box .circle {
        height: 12px;
        width: 12px;
        background: #ccc;
        border-radius: 50%;
        margin-right: 15px;
        border: 4px solid transparent;
        display: inline-block;
    }

    input[type="radio"] {
        display: none;
    }

    .box-2 {
        max-width: 450px;
        padding: 10px 40px;
    }


    .box-2 .box-inner-2 input.form-control {
        font-size: 12px;
        font-weight: 600;
    }

    .box-2 .box-inner-2 .inputWithIcon {
        position: relative;
    }

    .box-2 .box-inner-2 .inputWithIcon span {
        position: absolute;
        left: 15px;
        top: 8px;
    }

    .box-2 .box-inner-2 .inputWithcheck {
        position: relative;
    }

    .box-2 .box-inner-2 .inputWithcheck span {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: green;
        font-size: 12px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 15px;
        top: 6px;
    }

    .form-control:focus,
    .form-select:focus {
        box-shadow: none;
        outline: none;
        border: 1px solid blue;
    }

    .border:focus-within {
        border: 1px solid #7700ff !important;
    }

    .box-2 .card-atm .form-control {
        border: none;
        box-shadow: none;
    }

    .form-select {
        border-radius: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

    }

    .address .form-control.zip {
        border-radius: 0;
        border-bottom-left-radius: 10px;

    }

    .address .form-control.state {
        border-radius: 0;
        border-bottom-right-radius: 10px;

    }

    .box-2 .box-inner-2 .btn.btn-outline-primary {
        width: 120px;
        padding: 10px;
        font-size: 11px;
        padding: 0% !important;
        display: flex;
        align-items: center;
        border: none;
        border-radius: 0;
        background-color: whitesmoke;
        color: black;
        font-weight: 600;
    }

    .box-2 .box-inner-2 .btn.btn-primary {
        background-color: #7700ff;
        color: whitesmoke;
        font-size: 14px;
        display: flex;
        align-items: center;
        font-weight: 600;
        justify-content: center;
        border: none;
        padding: 10px;
    }

    .box-2 .box-inner-2 .btn.btn-primary:hover {
        background-color: #7a34ca;
    }

    .box-2 .box-inner-2 .btn.btn-primary .fas {
        font-size: 13px !important;
        color: whitesmoke;
    }

    .carousel-indicators [data-bs-target] {
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }

    .carousel-inner {
        width: 100%;
        height: 250px;
    }

    .carousel-item img {
        object-fit: cover;
        height: 100%;
    }

    .carousel-control-prev {
        transform: translateX(-50%);
        opacity: 1;
    }

    .carousel-control-prev:hover .fas.fa-arrow-left {
        transform: translateX(-5px);
    }

    .carousel-control-next {
        transform: translateX(50%);
        opacity: 1;
    }

    .carousel-control-next:hover .fas.fa-arrow-right {
        transform: translateX(5px);
    }

    .fas.fa-arrow-left,
    .fas.fa-arrow-right {
        font-size: 0.8rem;
        transition: all .2s ease;
    }

    .icon {
        width: 30px;
        height: 30px;
        background-color: #f8f9fa;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transform-origin: center;
        opacity: 1;
    }

    .fas,
    .fab {
        color: #6d6c6d;
    }

    ::placeholder {
        font-size: 12px;
    }

    @media (max-width:768px) {
        .container {
            max-width: 700px;
            margin: 10px auto;
        }

        .box-1,
        .box-2 {
            max-width: 600px;
            padding: 20px 90px;
            margin: 20px auto;
        }

    }

    @media (max-width:426px) {

        .box-1,
        .box-2 {
            max-width: 400px;
            padding: 20px 10px;
        }

        ::placeholder {
            font-size: 9px;
        }
    }



    .pay-btn {
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background: #110035;
        padding: 5px;
        display: flex;
        font-size: 25px;
        color: grey;
        border-radius: 7px;
        background: #3304A9;
        padding: 12px 190px 5px 190px;
        width: 100%;

        @media (min-width: 375px) and (max-width: 1200px) {
            padding: 12px 140px 5px 136px;
            width: 100%;
        }
    }


    .apple-title{
        transform: translate(0px, 2px);
        margin-left: 5px;
        font-family: 'Steppe';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 130%;
        letter-spacing: 0.01em;
        font-feature-settings: 'liga' off;
        color: grey;
    }


    .log-in-with-apple-button{
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background: #110035;
        padding: 5px;

        display: flex;
        font-size: 25px;
        color: white;
        border-radius: 7px;
        background: black;
        padding: 12px 180px 5px 180px;
        width: 100%;

        @media (min-width: 375px) and (max-width: 1200px) {
            padding: 12px 140px 5px 136px;
            width: 100%;
        }

        .apple-icon{
           font-size: 25px;
           color: #FFFFFF;
        }

        .apple-title{
           transform: translate(0px, 2px);
           margin-left: 5px;
           font-family: 'Steppe';
           font-style: normal;
           font-weight: 600;
           font-size: 20px;
           line-height: 130%;
           letter-spacing: 0.01em;
           font-feature-settings: 'liga' off;
           color: #FFFFFF;
        }
     }
`

export const InputContainer = styled.div`
    margin: 30px 111px 0px 93px;

    @media (min-width: 375px) and (max-width: 1200px) {
        margin: 0;
    }

    @media (min-width: 1200px) and (max-width: 1700px) {
        margin: 30px 6px 0px 48px;
    }
`

export const PaymentContainer = styled(Container)`
    margin: 0px 106px 0px 106px;
    @media (min-width: 375px) and (max-width: 1200px) {
        margin: 0;
    }
`

export const BlueContainer = styled.div`
    background-color: #3304A9;
    padding-left: 150px;
    padding-top: 50px;

    @media (min-width: 375px) and (max-width: 1200px){
        padding-left: 0px;
        border-radius: 10px;
        padding-top: 20px;
    }

    @media (min-width: 1201px) and (max-width: 1400px) {
        padding-left: 35px;
    }
}
`

export const ArrowWishLogoContainer = styled.div`
    display: flex;
    gap: 10px;
`

export const WishLogo = styled.img`
    background: black;
    padding: 3px;
    border-radius: 32px;
    height: 37px;
    margin-top: -6px;
    width: 39px;
}
`

export const WishXText = styled.span`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
    margin-top: 5px;
`

export const MobileDetailsText = styled.p`
    color: grey;
    font-size: 14px;
    font-weight: 400;
    margin-right: 5px;
    display: none;
    @media (min-width: 375px) and (max-width: 1200px) {
        display: block;
    }
`

export const MobileDetailsArrow = styled.div`
    display: flex;
    justify-content: end;
    margin-top: -27px;
    padding-right: 15px;
    display: none;

    @media (min-width: 375px) and (max-width: 1200px) {
        display: block;
        float: right;
        display: flex;
    }
`

export const PayWishTxt = styled.p`
    color: grey;
    font-weight: 500;
    font-size: 16px;
    padding-top: 30px;
    margin-left: 30px;

    @media (min-width: 375px) and (max-width: 1200px) {
        display: none;
    }
`

export const Cost = styled.p`
    font-size: 36px;
    font-weight: 590;
    color: #FFFFFF;
    margin-left: 30px;

    @media (min-width: 375px) and (max-width: 1200px) {
        display: none;
    }
`

export const WatchImage = styled.img`
    width: 9%;
    margin-left: 30px;
    height: 40px;
`

export const WatchTxtCost = styled.div`
    display: flex;
    gap: 18px;
    padding-top: 30px;

    @media (min-width: 375px) and (max-width: 1200px) {
        display: none;
    }
`

export const WatchTxt = styled.p`
    width: 50%;
    color: #FFFFFF;
    font-weigt: 400;
    font-size: 14px;
`

export const WatchCost = styled.p`
    color: #FFFFFF;
    font-weigt: 400;
    font-size: 14px;
`


export const SubTotalContainer = styled.div`

@media (min-width: 375px) and (max-width: 1200px) {
    display: none;
}
.line {
    width: 64%;
    margin: auto;
    margin-left: 96px;

}
`

export const SubtotalSection = styled.div`
    display: flex;
    padding-top: 25px;
    margin-left: 97px;
    margin-right: -118px;

    @media (min-width: 375px) and (max-width: 1200px) {
        margin-right: 0px;
    }
`

export const SubtotalTxt = styled.p`
    color: white;
    font-weight: 400;
    font-size: 13px;
`

export const SubtotalCost = styled.p`
    margin: auto;
    color: white;
    font-weight: 400;
    font-size: 13px;
`


export const SalestaxTxt = styled.p`
    color: thistle;
    font-weight: 400;
    font-size: 11px;
`

export const SalesTxtCost = styled.p`
    color: thistle;
    font-weight: 400;
    font-size: 10px;
    margin: auto;
`

export const BottomTextSection = styled.div`
    display: flex;
    gap:20px;
    padding-top: 200px;
    padding-bottom: 100px;
    justify-content: center;

    @media (min-width: 375px) and (max-width: 1200px) {
        display: none;
    }

    @media (min-width: 1201px) and (max-width: 1400px) {
        display: flex;
        justify-content: center;
    }
`

export const PoweredStripeTxt = styled.p`
    color: thistle;
    font-size: 12px;
`

export const StripeTxt = styled.span`
    color: thistle;
    font-size: 15px;
    font-weight: bolder;
    
`

export const TermsTxt = styled.p`
    color: thistle;
    font-size: 15px;
`
export const PrivacyTxt = styled.p`
    color: thistle;
    font-size: 15px;
`

export const OrPayWithCardText = styled.p`

`

export const MobileWatchImage = styled.img`
    display: none;

    @media (min-width: 375px) and (max-width: 1200px) {
        display: block;
        margin: auto;
        width: 40%;
        margin-top: 35px;
        border-radius: 10px;
    }
`

export const PayWishMobile = styled.p`
    display: none;
    @media(min-width: 375px) and (max-width: 1200px) {
        display: block;
        color: grey;
        font-size: 16px;
        font-weight: 510;
        text-align: center;
        padding-top: 30px;
    }
`

export const PayWishCostMobile = styled.p`
    display: none;
    @media(min-width: 375px) and (max-width: 1200px) {
        display: block;
        font-size: 27px;
        font-weight: 590;
        color: white;
        text-align: center;
        padding-bottom: 20px;
    }
`


export const PoweredTextMobile = styled.p`
    font-size: 12px;
    color: grey;
    text-align: center;
    padding-top: 65px;
    
    @media (min-width: 1201px) and (max-width:1700px) {
        display: none;
    }
`

export const StripeTxtMobile = styled.span`
    font-size: 15px;
    font-weight: bolder;
    color: grey;
    text-align: center;
`

export const TermsPrivacyContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

    @media (min-width: 1201px) and (max-width: 1700px) {
        display: none;
    }
`

export const TermsTextMobile = styled.p`
    font-size: 12px;
    color: grey;
`

export const PrivacyTextMobile = styled.p`
    font-size: 12px;
    color: grey;
    padding-bottom: 65px;
`