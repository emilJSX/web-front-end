import { Aside } from "@mantine/core";
import styled from "styled-components";

export const CustomAside = styled(Aside)`
  position: absolute;
  background-color: #22006a;
  width: 100%;
  padding: 62px 0;
  transition: height 0ms 400ms, opacity 400ms 0ms;
  animation: fadeIn 0.5s;
  z-index: 1000 !important;
  top: 90px;
  bottom: 0;
  height: 100%;
  /* border-radius: -16px -16px 0px 0px ; */

  @media (min-width: 992px) {
    display: none !important;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    margin-bottom: 32px;

    .log-in {
      color: white;
      font-weight: 600;
      border: 1px solid #6e4fc1;
      padding: 10px;
      width: 100px;
      text-align: center;
      border-radius: 3px;
    }

    .sign-out {
      color: white;
      font-weight: 600;
      border: 1px solid #6e4fc1;
      padding: 10px;
      width: 100px;
      text-align: center;
      border-radius: 3px;
    }
  }
  .aside-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content:space-between;
    height: calc(100vh - 150px);
    overflow: auto;

    @media (max-width: 480px) {
      height: calc(100vh - 350px);
    }
  }

  .hr-aside {
    border: 1px solid #eee;
    width: 200px;
  }

  .login-aside-element {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
  }

  .aside-link-element {
    text-decoration: none;

    p {
      color: #fff;
      font-weight: 600;
      font-size: 20px;
    }
  }

  .aside-log-in {
    border: 1px solid ${({ theme }) => theme.colors.grey7};
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    border-radius: 8px;
    padding: 12px 24px;
    margin-bottom: 32px;
  }
`;
