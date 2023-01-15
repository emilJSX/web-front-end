import React from 'react'
import { Link } from 'react-router-dom'
import { CustomAside } from './Aside.Styled'
import { ReactComponent as FishSVG } from '../../../style/icons/fish-in-aside.svg'
import { asideLinks } from '../../../utils/dummy-data/aside-links'
import { Button } from '../../ui/Button'
export const AsideComponent = ({ hidden }) => {
    return (
        <CustomAside hidden={hidden}>
            <div>
                <div className="aside-container">
                    <ul>
                        {
                            asideLinks.map((e, i) => (
                                <li><Link to="/" className="aside-link-element"><p>{e.name}</p></Link></li>
                            ))
                        }
                        <Link to="/" className="aside-log-in"><p> Log in </p></Link>
                    </ul>
                    <FishSVG />
                </div>
            </div>
        </CustomAside>
    )
}
