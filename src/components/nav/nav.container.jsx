import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionLogIn } from '../../state/auth/action/log-in.action'
import { actionLogOut } from '../../state/auth/action/log-out.action'

import LogoSVG from '../../logo.svg'
import './nav.css'



const LogoComponent = () => {
  const alt = useSelector(state => state.gallery.alt)
  console.log('render LogoComponent', alt)

  return (
    <div className='Logo'>
      <a href='/#' className='Logo__link'>
        <img src={LogoSVG} alt={alt} />
      </a>
      <div>{alt}</div>
    </div>
  )
}
// проверить мемоизацию так как список меню итемов это массив
const MenuComponent = () => {
  const menu = useSelector(state => state.gallery.menu)
  console.log('render MenuComponent')

  return (
    <ul className='Menu__list'>
      {
        menu.map(item => (
          <li className='Menu__item' key={item.id}>
            {item.text}
          </li>))
      }
    </ul>
  )
}

const Nav = () => {
  const dispatch = useDispatch()
  const { isAuth, userName } = useSelector(state => ({
    isAuth: state.auth.isAuth,
    userName: state.auth.userName
  }))

  return (
    <nav className='Nav'>
      <div className='container'>
        <div className='Nav__wrapper'>
          <LogoComponent />
          <MenuComponent />
          {
            !isAuth ? (
              <div className='Nav__wrapper__btn-block'>
                <button className='btn btn--blue' onClick={() => dispatch(actionLogIn())}>Log In</button>
              </div>
            ) : (
                <div className='Nav__profile'>
                  <div className='Nav__icon'></div>
                  <p className='Nav__user-name'>{userName}</p>
                  <button className='btn' onClick={() => dispatch(actionLogOut())}>Log out</button>
                </div>
              )
          }
        </div>
      </div>
    </nav>
  )
}

export default Nav