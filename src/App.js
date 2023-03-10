import React from "react";
import AppProvider from "./provider/AppProvider";
import { redirect, Route, Routes } from "react-router-dom";
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
import SettingsPage from "./pages/settings";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import "./style/pages/home.css";
import MyProfile from "./pages/my-profile";
import Finally from "./pages/set-new-password";
import OtherUserProfile from "./pages/OtherUserProfile";
import Search from "./pages/search";
import Onlysearch from "./pages/search/Onlysearch";
import ProfileEdit from "./pages/my-profile-edit/";
import WishList from "./pages/wishes-list";
import Wish_pages_second from "./pages/wish-pagess/indexsecond";
import Wish_pages from "./pages/wish-pagess";
import Wish_pages_four from "./pages/wish-pagess/indexfour";
import Wish_pages_three from "./pages/wish-pagess/indexthree";
import Created_Success_Wish from "./pages/creating-success-wish";
import Created_Wish from "./pages/creating-wish";
import Editing_Wish from "./pages/editing-wish";
import Rating from "./pages/rating";
import Calendar from "./pages/calendar";
import Payment from "./pages/payment";
import ContactsPage from "./pages/contacts/contacts-subscribers";
import PartnersPage from "./pages/partners/partners-page";
import { useAuthSelector } from "./store/slices/authSlice";
import { useSelector } from "react-redux";
import PrivateRoot from "./privateRoots";

const App = () => {
  const isAuth = useSelector(useAuthSelector);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppProvider>
        <PrivateRoot userAuth={isAuth} />

        <Routes>
          <Route
            path="/other-user-wish-complete"
            element={<Wish_pages_second />}
          />
          <Route path="/wish/:slug" element={<Wish_pages />} />
          <Route path="/wish-list" element={<WishList />} /> {/* + */}
          <Route path="/only-search" element={<Onlysearch />} />
          {/* + */}
          <Route path="/search" element={<Search />} /> {/* + */}
          <Route path="/profile/:slug" element={<OtherUserProfile />} />
          <Route path="/blog-post" element={<BlogPost />} />
          <Route
            path="/blog-search-result-notfound"
            element={<BlogSRNotFound />}
          />
          <Route path="/blog-search-result" element={<BlogSearchResult />} />
          <Route path="/blog-category" element={<BlogCategory />} /> {/* - */}
          <Route path="/main-blog" element={<MainBlog />} /> {/* + */}
          <Route path="/privacy" element={<Privacy />} /> {/* + */}
          <Route path="*" element={<ErrorPage />} /> {/* + */}
          <Route path="/faq" element={<FaqPage />} /> {/* + */}
          <Route path="/contact" element={<Contact />} /> {/* + */}
          <Route index element={<Home />} />
          <Route path="/partners-coupon" element={<PartnersPage />} />
          <Route path="home" element={<Home />}></Route>
        </Routes>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
