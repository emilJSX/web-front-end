import React, { useState } from "react";
import { Image, MediaQuery, Menu, Box, Text } from "@mantine/core";
import { SettingSection } from "./Settings.Styled";
import { NativeSelect } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import { Button } from "@mantine/core";
import { useEffect } from "react";
import CustomBreadcrumb from "../../shared/components/breadcrumb";
import { myaxiosprivate } from "../../api/myaxios";
import { enqueueSnackbar } from "notistack";

const SettingsPage = () => {
  const [locale, setLocale] = useState("en");

  const localeArr = [
    {
      label: "English",
      value: "en",
    },
    {
      label: "Turkish",
      value: "tr",
    },
    {
      label: "Russian",
      value: "ru",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSave = async () => {
    await myaxiosprivate
      .get(`/api/v1/settings/locale/set?locale=${locale}`)
      .then(({ data }) => {
        enqueueSnackbar(data.message);
      })
      .catch((err) => enqueueSnackbar(err.message));
  };
  return (
    <SettingSection style={{ maxWidth: "500px" }}>
      <div className="top-rule">
        {/*<p>Main {">"} Profile {">"} Settings </p>*/}
        <CustomBreadcrumb
          margins="my-0"
          links={[
            {
              title: "Main",
              to: "/",
            },
            {
              title: "Profile",
              to: "/my-profile",
            },
            {
              title: "Settings",
              to: "/settings",
            },
          ]}
        />
        <h1 className="setting-txt">Settings</h1>
      </div>

      <NativeSelect
        style={{ fontFamily: "Steppe" }}
        label="Service language"
        placeholder="Service language"
        data={localeArr}
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        rightSection={<IconChevronDown size={14} />}
        rightSectionWidth={40}
        className="selection"
      />
      {/* <NativeSelect
        pt={20}
        style={{ fontFamily: "Steppe" }}
        label="Timezone"
        placeholder="UTC+4:00"
        data={["UTC+4:00"]}
        rightSection={<IconChevronDown size={14} />}
        rightSectionWidth={40}
        className="selection"
      />
      <NativeSelect
        pt={20}
        style={{ fontFamily: "Steppe" }}
        label="Date format"
        placeholder="DD:MM:YYYY"
        data={["DD:MM:YYYY"]}
        className="selection"
        rightSection={<IconChevronDown size={14} />}
        rightSectionWidth={40}
      /> */}

      <div style={{ width: "100%" }} className="pt-4">
        <Button
          onClick={handleSave}
          style={{
            background: "#3800B0",
            color: "white",
            height: "50px",
            borderRadius: "10px",
            fontFamily: "Steppe !important",
          }}
          fullWidth
          variant="outline"
        >
          Save
        </Button>
      </div>
    </SettingSection>
  );
};

export default SettingsPage;
