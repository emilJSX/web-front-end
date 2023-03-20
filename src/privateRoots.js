import { Navigate, Route, Routes } from "react-router-dom";
import Calendar from "./pages/calendar";
import Created_Success_Wish from "./pages/creating-success-wish";
import Created_Wish from "./pages/creating-wish";
import Editing_Wish from "./pages/editing-wish";
import Payment from "./pages/payment";
import Wish_pages_three from "./pages/wish-pagess/indexthree";
import Rating from "./pages/rating";
import Wish_pages_four from "./pages/wish-pagess/indexfour";
import ProfileEdit from "./pages/my-profile-edit";
import ContactsPage from "./pages/contacts/contacts-subscribers";
import Finally from "./pages/set-new-password";
import MyProfile from "./pages/my-profile";
import SettingsPage from "./pages/settings";

const PrivateRoot = ({ userAuth }) => {
  return (
    <>
      {userAuth && (
        <Routes>
          <Route path="/payment" element={<Payment />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/wish-edit" element={<Editing_Wish />} />
          <Route path="/creating-wish" element={<Created_Wish />} />
          <Route
            path="/creating-wish-success"
            element={<Created_Success_Wish />}
          />
          <Route path="/my-wish-complete" element={<Wish_pages_four />} />
          <Route path="/my-wish" element={<Wish_pages_three />} />
          <Route path="/profile-edit" element={<ProfileEdit />} />
          <Route path="/contacts-profile" element={<ContactsPage />} />
          {/*  */}
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      )}
    </>
  );
};

export default PrivateRoot;
