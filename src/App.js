import React, { useEffect } from "react";
import AppProvider from "./provider/AppProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import GlobalStyle from "./style/global";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import Contact from "./pages/contact";
import ErrorPage from "./pages/404";
import FaqPage from "./pages/faq";
import MainBlog from "./pages/blog/blog-main";
import BlogCategory from "./pages/blog/blog-category";
import BlogSearchResult from "./pages/blog/blog-search-result";
import BlogSRNotFound from "./pages/blog/blogsearch-noResult";
import BlogPost from "./pages/blog/blog-post";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import "./style/pages/home.css";
import OtherUserProfile from "./pages/OtherUserProfile";
import Search from "./pages/search";
import Onlysearch from "./pages/search/Onlysearch";
import WishList from "./pages/wishes-list";
import Wish_pages_second from "./pages/wish-pagess/indexsecond";
import Wish_pages from "./pages/wish-pagess";
import PartnersPage from "./pages/partners/partners-page";
import WishDesign from "./pages/wish/WishDesign";
import Finally from "./pages/set-new-password";
import ProtectedRoute from "./ProtectedRoute";
import MyProfile from "./pages/my-profile";
import SettingsPage from "./pages/settings";
import ContactsPage from "./pages/contacts/contacts-subscribers";
import ProfileEdit from "./pages/my-profile-edit";
import Wish_pages_four from "./pages/wish-pagess/indexfour";
import Created_Success_Wish from "./pages/creating-success-wish";
import Created_Wish from "./pages/creating-wish";
import Editing_Wish from "./pages/editing-wish";
import { Rating } from "@mui/material";
import Calendar from "./pages/calendar";
import Payment from "./pages/payment";
import Wish_pages_three from "./pages/wish-pagess/indexthree";
import { io } from "socket.io-client";
import { myaxios } from "./api/myaxios";
// import Echo from "laravel-echo/dist/echo";

const App = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    let socket = io(`${process.env.REACT_APP_API_URL}/socket.io/`);
    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    // Log when the socket is disconnected
    socket.on("disconnect", (reason) => {
      console.log("Socket disconnected:", reason);
    });

    // Log when the socket encounters an error
    socket.on("error", (error) => {
      console.log("Socket error:", error);
    });

    socket.on("/notifications.90", (data) => {
      console.log(data);
    });
    console.log(socket);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppProvider>
        <Routes>
          <Route
            path="/my-profile"
            element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/calendar"
            element={
              <ProtectedRoute>
                <Calendar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rating"
            element={
              <ProtectedRoute>
                <Rating />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wish-edit"
            element={
              <ProtectedRoute>
                <Editing_Wish />
              </ProtectedRoute>
            }
          />
          <Route
            path="/creating-wish"
            element={
              <ProtectedRoute>
                <Created_Wish />
              </ProtectedRoute>
            }
          />
          <Route
            path="/creating-wish-success"
            element={
              <ProtectedRoute>
                <Created_Success_Wish />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-wish-complete"
            element={
              <ProtectedRoute>
                <Wish_pages_four />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-wish"
            element={
              <ProtectedRoute>
                <Wish_pages_three />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile-edit"
            element={
              <ProtectedRoute>
                <ProfileEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contacts-profile"
            element={
              <ProtectedRoute>
                <ContactsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/other-user-wish-complete"
            element={<Wish_pages_second />}
          />
          <Route path="/set-new-password" element={<Finally />} />
          <Route path="/wish/:slug" element={<WishDesign />} />
          <Route path="/wish-list" element={<WishList />} /> {/* + */}
          <Route path="/only-search" element={<Onlysearch />} />
          {/* + */}
          <Route path="/search" element={<Search />} /> {/* + */}
          <Route path="/profile/:slug" element={<OtherUserProfile />} />
          <Route path="/blog-post/:slug" element={<BlogPost />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route
            path="/blog-search-result-notfound"
            element={<BlogSRNotFound />}
          />
          <Route path="/blog-search-result" element={<BlogSearchResult />} />
          <Route path="/blog-category" element={<BlogCategory />} /> {/* - */}
          <Route path="/main-blog" element={<MainBlog />} /> {/* + */}
          <Route path="/privacy" element={<Privacy />} /> {/* + */}
          <Route path="/faq" element={<FaqPage />} /> {/* + */}
          <Route path="/contact" element={<Contact />} /> {/* + */}
          <Route path="/partners-coupon" element={<PartnersPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
