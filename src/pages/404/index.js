import React from "react";
import { ReactComponent as ErrorFoto } from "../../style/icons/404.svg";
import { Buttons, ErrorImage, ErrorSection } from "./404.Styled";
import { Button } from '@mantine/core';
import FaqSection from "../../shared/components/faq";

const ErrorPage = () => {
    return (
        <ErrorSection fluid>
            <ErrorImage>
                <ErrorFoto />
            </ErrorImage>
            <div className="text">
                <h2>Page not found</h2>
            </div>

            <Buttons>
                <Button style={{ background: "#3800B0" }}>Go to wishes list page</Button>
                <div style={{ width: 162 }}>
                    <Button className="btn" fullWidth variant="outline">
                        Go to main page
                    </Button>
                </div>
            </Buttons>

        </ErrorSection>
    )
}

export default ErrorPage;