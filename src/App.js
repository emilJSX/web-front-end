import React, { lazy, Suspense, useEffect, useState } from "react";
import AppProvider from "./provider/AppProvider";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { Rating } from "@mui/material";

import GlobalStyle from "./style/global";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import "./style/pages/home.css";

const Home = lazy(() => import("./pages/home"));
const Privacy = lazy(() => import("./pages/privacy"));
const Contact = lazy(() => import("./pages/contact"));
const ErrorPage = lazy(() => import("./pages/404"));
const WishList = lazy(() => import("./pages/wishes-list"));
const FaqPage = lazy(() => import("./pages/faq"));
const MainBlog = lazy(() => import("./pages/blog/blog-main"));
const BlogCategory = lazy(() => import("./pages/blog/blog-category"));
const BlogSearchResult = lazy(() => import("./pages/blog/blog-search-result"));
const BlogSRNotFound = lazy(() => import("./pages/blog/blogsearch-noResult"));
const BlogPost = lazy(() => import("./pages/blog/blog-post"));
import { generateRoutes, routes } from "./routes";
import ProtectedRoute from "./ProtectedRoute";
const OtherUserProfile = lazy(() => import("./pages/OtherUserProfile"));
const Search = lazy(() => import("./pages/search"));
const Onlysearch = lazy(() => import("./pages/search/Onlysearch"));
const Wish_pages_second = lazy(() => import("./pages/wish-pagess/indexsecond"));
const PartnersPage = lazy(() => import("./pages/partners/partners-page"));
const WishDesign = lazy(() => import("./pages/wish/WishDesign"));
const Finally = lazy(() => import("./pages/set-new-password"));
const MyWish = lazy(() => import("./pages/wish/MyWish"));
const MyWishCompleted = lazy(() => import("./pages/wish/MyWishCompleted"));
const NewCalendar = lazy(() => import("./pages/new-calendar/index"));
import Loader from "./shared/ui/Loader";
const Payment = lazy(() => import("./pages/payment"));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppProvider>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <ProtectedRoute>
                    <route.element />
                  </ProtectedRoute>
                }
              />
            ))}
            <Route path="/payment" element={<Payment />} />
            <Route
              path="/other-user-wish-complete"
              element={<Wish_pages_second />}
            />
            <Route path="/set-new-password" element={<Finally />} />
            <Route path="/wish/:slug" element={<WishDesign />} />
            {/* <Route path="/my-wish" element={<MyWish />} /> */}
            {/* <Route path="/wish/me/completed" element={<MyWishCompleted />} /> */}
            <Route path="/wish-list" element={<WishList />} /> {/* + */}
            {/* <Route path="/only-search" element={<Onlysearch />} /> */}
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
        </Suspense>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
