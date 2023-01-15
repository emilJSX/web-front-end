import React from "react";
import { Image, MediaQuery, Menu, Box, Text } from '@mantine/core';
import { SettingSection } from "./Settings.Styled";
import { NativeSelect } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';
import { Button } from '@mantine/core';
const SettingsPage = () => {
    return (
        <SettingSection style={{ maxWidth: "500px" }}>
            <div className="top-rule">
                <p>Main {">"} Profile {">"} Settings </p>
                <h1 className="setting-txt">Settings</h1>
            </div>

            <NativeSelect style={{fontFamily: 'Steppe'}}
                label="Service language"
                placeholder="Service language"
                data={['English', 'Turkish', 'Azerbaijan']}
                rightSection={<IconChevronDown size={14} />}
                rightSectionWidth={40}
            />
            <NativeSelect pt={20}
            style={{fontFamily: 'Steppe'}}
                label="Timezone"
                placeholder="UTC+4:00"
                data={['UTC+4:00']}
                rightSection={<IconChevronDown size={14} />}
                rightSectionWidth={40}
            />
            <NativeSelect pt={20}
            style={{fontFamily: 'Steppe'}}
                label="Date format"
                placeholder="DD:MM:YYYY"
                data={['DD:MM:YYYY']}
                rightSection={<IconChevronDown size={14} />}
                rightSectionWidth={40}
            />

            <div style={{ width: "100%" }} className="pt-4">
                <Button style={{background: "#3800B0", color: "white", height: "50px", borderRadius: "10px", fontFamily: 'Steppe !important'}} fullWidth variant="outline">
                    Save
                </Button>
            </div>



        </SettingSection>
    )
}

export default SettingsPage;