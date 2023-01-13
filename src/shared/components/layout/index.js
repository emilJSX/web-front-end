import { AppShell, MediaQuery } from '@mantine/core'
import React, { useState } from 'react'
import { AsideComponent } from '../aside'
import { Footer } from '../footer'
import { Header } from '../header'
import { useLocation } from 'react-router-dom';
import HeaderLoginAuth from '../HeaderLogin'
import HeaderShared from '../HeaderShared'

export const Layout = ({ children }) => {
    const [toggleOpen, setToggleOpen] = useState(false)
    const { pathname } = useLocation();

    return (
        <AppShell
            padding="0"
            style={{ backgroundColor: toggleOpen ? '#22006a' : '#fff' }}
            header={(pathname !== "/" && pathname !== "/home") && <HeaderShared toggle={{ open: toggleOpen, setOpen: setToggleOpen }} />}
            footer={<Footer />}
            asideOffsetBreakpoint="sm"
            aside={
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <div>
                        <AsideComponent hidden={!toggleOpen} hiddenBreakpoint="sm" />
                    </div>
                </MediaQuery >
            }
        >
            {children}
        </AppShell >
    )
}
