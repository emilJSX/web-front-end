import { AppShell, MediaQuery } from '@mantine/core'
import React, { useState } from 'react'
import { AsideComponent } from '../aside'
import { Footer } from '../footer'
import { Header } from '../header'
import { useLocation } from 'react-router-dom';
import HeaderLoginAuth from '../HeaderLogin'
import HeaderShared from '../HeaderShared'
import { useDispatch, useSelector } from 'react-redux'
import { drawerControll } from '../../../store/slices/counterSlice'

export const Layout = ({ children }) => {
    // const [toggleOpen, setToggleOpen] = useState(false)
    const {toggle} = useSelector(state=>state.counter);
    const { pathname } = useLocation();
//flase -> active


    return (
        <AppShell
            padding="0"
            style={{ backgroundColor: toggle ? '#22006a' : '#fff' }}
            header={(pathname !== "/" && pathname !== "/home") && <HeaderShared />}
            footer={<Footer />}
            asideOffsetBreakpoint="sm"
            aside={
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <div>
                        <AsideComponent hidden={!toggle} hiddenBreakpoint="sm" />
                    </div>
                </MediaQuery >
            }
        >
            {children}
        </AppShell >
    )
}
