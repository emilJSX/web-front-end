import React, { useState } from "react";
import {
  PrivacyTopContainer,
  Privacy_policy_text,
  Terms_text,
  Shipping_text,
} from "./Privacy.Styled";
import { Image, MediaQuery, Menu, Box, Text } from "@mantine/core";
import { display } from "styled-system";
import { useEffect } from "react";
import CustomBreadcrumb from "../../shared/components/breadcrumb";
import { myaxios } from "../../api/myaxios";
const Privacy = () => {
  const [terms, setTerms] = useState({
    firstTitle: "",
    secondTitle: "",
    firstContent: "",
    secondContent: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    myaxios
      .get("https://api.wishx.me/api/v1/static_pages/terms/get")
      .then((res) => {
        setTerms({
          firstTitle: res.data?.data[0].title,
          secondTitle: res.data?.data[1].title,
          firstContent: res.data?.data[0].content,
          secondContent: res.data.data[1].content,
        });
      });
  }, []);
  return (
    <PrivacyTopContainer>
      <div className="topsection">
        {/*<p>Main {">"} Privacy Policy</p>*/}
        <CustomBreadcrumb
          margins="my-0"
          links={[
            {
              title: "Main",
              to: "/",
            },
            {
              title: "Privacy Policy",
            },
          ]}
        />
      </div>
      <Privacy_policy_text>
        <p>Privacy Policy</p>
      </Privacy_policy_text>
      <Terms_text>
        <p>{terms.firstTitle}</p>
      </Terms_text>
      <div className="text_section">
        <p>{terms.firstContent}</p>
      </div>
      <Shipping_text>
        <p>{terms.secondTitle}</p>
      </Shipping_text>
      <div className="shipping_bgtext">
        <p>{terms.secondContent}</p>
      </div>
    </PrivacyTopContainer>
  );
};

export default Privacy;
