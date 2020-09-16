import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionChangeLogoAlt } from '../../state/gallery/action/change-logo-alt.action'
import { actionResetLogoAlt } from '../../state/gallery/action/reset-logo-alt.action'
import { actionAddMenuItem } from '../../state/gallery/action/add-menu-item.action'
import { actionRemoveMenuItem } from '../../state/gallery/action/remove-menu-item.action'

import './gallery.css'

const Gallery = () => {
  const dispatch = useDispatch()
  const menu = useSelector(state => state.gallery.menu)

  const handleChangeLogoAltClick = () => dispatch(actionChangeLogoAlt())
  const handleResetLogoAltClick = () => dispatch(actionResetLogoAlt())
  const handleAddMenuItemClick = () => dispatch(actionAddMenuItem(menu))
  const handleRemoveMenuItemClick = () => dispatch(actionRemoveMenuItem(menu))

  return (
    <div className='Gallery'>
      <h2 className='Gallery__title'>Gallery</h2>
      <div className='box'>
        <h3>Change logo alt</h3>
        <button className='btn' onClick={handleChangeLogoAltClick}>Change Logo Alt</button>
        <button className='btn' onClick={handleResetLogoAltClick}>Reset Logo Alt</button>
      </div>
      <div className='box'>
        <h3>Add menu Item</h3>
        <button className='btn' onClick={handleAddMenuItemClick}>Add menu item</button>
        <button className='btn' onClick={handleRemoveMenuItemClick}>Remove menu item</button>
      </div>
    </div>
  )
}

export default Gallery