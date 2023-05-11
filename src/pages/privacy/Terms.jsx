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
const Terms = () => {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    myaxios.get("/api/v1/static_pages/terms/get").then(({ data }) => {
      setTerms(data.data);
    });
  }, []);

  return (
    <PrivacyTopContainer>
      <div className="topsection">
        <p>Main {">"} Terms of Service</p>
        <CustomBreadcrumb
          margins="my-0"
          links={[
            {
              title: "Main",
              to: "/",
            },
            {
              title: "Terms of Service",
            },
          ]}
        />
      </div>
      <Privacy_policy_text>
        <p>Terms of Service</p>
      </Privacy_policy_text>
      {terms.map((term) => (
        <>
          <Terms_text>
            <p>{term.title}</p>
          </Terms_text>
          <div className="text_section">
            <p>{term.content}</p>
          </div>
        </>
      ))}

      {/* <Shipping_text>
        <p>{terms.secondTitle}</p>
      </Shipping_text>
      <div className="shipping_bgtext">
        <p>{terms.secondContent}</p>
      </div> */}
    </PrivacyTopContainer>
  );
};

export default Terms;
