import React, { useState } from 'react'
import { Button } from '../../ui/Button'
// import { ReactComponent as BinIcon } from '../../../style/icons/binIcon.svg'
import { HeaderContainer } from './Header.Styled'
import { ReactComponent as WishLogo } from '../../../style/icons/wish-x-logo-1.svg'
import { headerLists } from '../../../utils/dummy-data/header-list'
import { SearchInput } from '../search-bar'
import { Box, Burger, MediaQuery } from '@mantine/core'
import { DotsToggle } from '../../ui/dots-toggle-menu'
import { ReactComponent as StarsIcon } from '../../../style/icons/small-stars.svg'
import { ReactComponent as GridIcon } from '../../../style/icons/grid-icon.svg'
import { Link } from 'react-router-dom'

export const Header = ({ toggle }) => {
    const [opened, setOpened] = useState(false)

    return (
        <HeaderContainer>
            <section className='logoSection'>
                <WishLogo />
                <SearchInput iconHave={true} size='xl' />
                <ul>
                    {
                        headerLists.map(e => (
                            <li><Button variant='white'><Link to={e.href}>{e.name}</Link></Button></li>
                        ))
                    }
                </ul>
            </section>
            <section className='log-in-out-Section'>
                <Button variant='white'><Link to='/log-in'>Log in</Link></Button>
                <Button><Link to='/create-wish'>Create a wish</Link></Button>
            </section>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Box>
                    <Button icon={<StarsIcon />} >Create a wish</Button>
                </Box>
            </MediaQuery>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <div>
                    <div style={{ display: 'flex', gap: 28 }}>
                        <GridIcon />
                        <DotsToggle toggleDots={toggle.open} setToggleDots={toggle.setOpen} />
                    </div>
                </div>
            </MediaQuery>
        </HeaderContainer >
    )
}
