import React, { lazy } from "react";
const MyWish = lazy(() => import("./pages/wish/MyWish"));

const MyProfile = lazy(() => import("./pages/my-profile"));
const SettingsPage = lazy(() => import("./pages/settings"));
const ContactsPage = lazy(() =>
  import("./pages/contacts/contacts-subscribers")
);
const ProfileEdit = lazy(() => import("./pages/my-profile-edit"));
// const Wish_pages_four = lazy(() => import("./pages/wish-pagess/indexfour"));
const MyWishCompleted = lazy(() => import("./pages/wish/MyWishCompleted"));

const Created_Success_Wish = lazy(() =>
  import("./pages/creating-success-wish")
);
const Created_Wish = lazy(() => import("./pages/creating-wish"));
const Editing_Wish = lazy(() => import("./pages/editing-wish"));
const Calendar = lazy(() => import("./pages/calendar"));
const Wish_pages_three = lazy(() => import("./pages/wish-pagess/indexthree"));
const NewCalendar = lazy(() => import("./pages/new-calendar/index"));

export const routes = [
  {
    path: "/my-profile",
    element: MyProfile,
  },

  {
    path: "/calendar",
    element: NewCalendar,
  },
  //   {
  //     path: "/rating",
  //     element: Rating,
  //   },
  {
    path: "/wish-edit",
    element: Editing_Wish,
  },
  {
    path: "/creating-wish",
    element: Created_Wish,
  },
  {
    path: "/creating-wish-success",
    element: Created_Success_Wish,
  },
  {
    path: "/my-wish-complete",
    element: MyWishCompleted,
  },
  {
    path: "/my-wish",
    element: MyWish,
  },
  {
    path: "/profile-edit",
    element: ProfileEdit,
  },
  {
    path: "/contacts-profile",
    element: ContactsPage,
  },
  {
    path: "/settings",
    element: SettingsPage,
  },
];
