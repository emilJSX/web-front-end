import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { drawerControll } from '../../../store/slices/counterSlice'
import { ReactComponent as DotsToggleIcon } from '../../../style/icons/3-dots.svg'
import { ReactComponent as XIcon } from '../../../style/icons/x-icon.svg'

export const DotsToggle = () => {
    const dispatch = useDispatch();
    const {toggle} = useSelector(store => store.counter);
const handleToggle = () =>{
    dispatch(drawerControll());
}
    return (
        <div onClick={handleToggle} display={{ display: 'block' }}>
            {
                 toggle ? <XIcon /> : <DotsToggleIcon />
            }
        </div>
    )
}
