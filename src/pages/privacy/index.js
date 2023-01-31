import React, {useState} from "react";
import { PrivacyTopContainer, Privacy_policy_text, Terms_text, Shipping_text } from "./Privacy.Styled";
import { Image, MediaQuery, Menu, Box, Text } from '@mantine/core';
import { display } from "styled-system";
import axios from "axios";
import { useEffect } from "react";
import CustomBreadcrumb from "../../shared/components/breadcrumb";
const Privacy = () => {
    const [TitleNumberOne, setTitleOne] = useState("")
    const [TitleNumberTwo, setTitleTwo] = useState("")
    const [ContentNumberOne, setContentOne] = useState("")
    const [ContentNumberTwo, setContentTwo] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    axios.get("https://api.wishx.me/api/v1/static_pages/terms/get").then((response_terms) => {
        setTitleOne(response_terms.data.data[0].title)
        setTitleTwo(response_terms.data.data[1].title)
        setContentOne(response_terms.data.data[0].content)
        setContentTwo(response_terms.data.data[1].content)
    })
    return (
        <PrivacyTopContainer>
            <div className="topsection">
                {/*<p>Main {">"} Privacy Policy</p>*/}
                <CustomBreadcrumb margins="my-0" links={[
                  {
                    title: 'Main',
                    to: '/'
                  },
                  {
                    title: 'Privacy Policy',
                  },
                ]} />
            </div>
            <Privacy_policy_text>
                <p>Privacy Policy</p>
            </Privacy_policy_text>
            <Terms_text>
                <p>{TitleNumberOne}</p>
            </Terms_text>
            <div className="text_section">
                <p>{ContentNumberOne}</p>
            </div>
            <Shipping_text>
                <p>{TitleNumberTwo}</p>
            </Shipping_text>
                <div className="shipping_bgtext">
                    <p>{ContentNumberTwo}</p>
                </div>
        </PrivacyTopContainer>
    )
}

export default Privacy;