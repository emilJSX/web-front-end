import styled from "styled-components";
import { Header } from "@mantine/core";

export const HeaderContainer = styled(Header)`
  height: 88px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(38, 33, 48, 0.06),
    0px 0px 16px -8px rgba(38, 33, 48, 0.06);
  border-radius: 0px 0px 16px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  overflow: hidden;
  .dots-icon {
    display: flex;
    gap: 28px;

    @media (max-width: 992px) {
      position: absolute;
      right: 15px;
      top: 31px;
    }
  }
  .menu {
    display: flex;
    @media (max-width: 992px) {
      display: none;
    }
  }
  .all-wishes-btn {
    color: #3800b0;
    font-weight: 600;
    font-size: 14px;
    @media (min-width: 768px) and (max-width: 828px) {
      width: 100px;
    }
    a {
      color: #3800b0;
    }
    a:hover {
      color: #3800b0;
      text-decoration: none;
    }
  }

  section {
    display: flex;
    align-items: center;
  }

  .create-wish-btn {
    @media (max-width: 1050px) {
      display: none;
    }
  }

  .container-mobile-menu {
    display: flex;
    margin-right: 340px;

    @media (min-width: 992px) and (max-width: 1050px) {
      margin-right: 155px;
    }
  }

  .logoSection {
    gap: 32px;
    ul {
      display: flex;
      list-style-type: none;
      gap: 32px;
      @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
        display: none;
      }
    }

    li {
      button {
        color: ${({ theme }) => theme.colors.grey7};
      }
    }

    svg {
      cursor: pointer;
    }
  }

  .log-in-out-Section {
    gap: 32px;
    @media screen and (max-width: ${({ theme }) => theme.breakPoints.sm}) {
      display: none;
    }
    @media (max-width: 992px) {
      display: none;
    }
  }
`;

export const Card = styled.div`
  position: absolute;
  right: 0;
  float: right;
  width: 202px;
  height: 45px;
  display: block;

  @media (max-width: 992px) {
    display: none;
  }

  .dropdown-menu-logined {
    width: 85%;
    background: #ffffff;
    border-radius: 16px;
    position: absolute;
    top: 70px;
    padding: 5px 15px !important;

    li {
      list-style: none;
      text-align: center;
      margin-top: 10px;
      cursor: pointer;
    }
  }

  .edit-personal-info-btn {
    color: #3800b0;
    font-weight: bold;
    font-size: 14px;
  }

  .settings-btn {
    color: #3800b0;
    font-weight: bold;
    font-size: 14px;
  }

  .sign-out-btn {
    color: #8866d0;
    font-weight: bold;
    font-size: 14px;
  }
`;
export const ProfilP = styled.span`
  float: left;
  width: 45px;
  height: 45px;
  background: #ebe5f7;
  color: #8866d0;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  border-radius: 50%;
  padding-top: 10px;
`;
export const ProfilName = styled.span`
  float: left;
  width: 145px;
  height: 22px;
  font-size: 14px;
  font-weight: 600;
  margin-left: 12px;
`;
export const ProfilWish = styled.span`
  float: left;
  width: 110px;
  height: 22px;
  font-size: 12px;
  font-weight: 400;
  margin-left: 5px;
  color: #5d627d;
  text-align: center;
`;
export const CardIcon = styled.div`
  // float: left;
  margin: 0px -470px 0 -200px;
  width: 202px;
  height: 45px;

  @media (max-width: 992px) {
    margin: 0px -691px 0 -200px;
    position: absolute;
    top: 20px;
    right: 743px;
  }
`;

export const CreateWishBtn = styled.button`
  background-color: #3800b0;
  border: 1px solid #3800b0;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: 0.2s all;
  cursor: pointer;
  font-feature-settings: "liga" off;
  font-weight: 600;
  position: absolute;
  padding: 11px;

  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 1050px) {
    display: none;
  }
`;
