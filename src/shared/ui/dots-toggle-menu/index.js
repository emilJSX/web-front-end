import React from 'react'
import { ReactComponent as DotsToggleIcon } from '../../../style/icons/3-dots.svg'
import { ReactComponent as XIcon } from '../../../style/icons/x-icon.svg'

export const DotsToggle = ({ toggleDots, setToggleDots }) => {

    return (
        <div onClick={() => setToggleDots(!toggleDots)} display={{ display: 'block' }}>
            {
                toggleDots ? <XIcon /> : <DotsToggleIcon />
            }
        </div>
    )
}
