import React, { useCallback } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { actionLogIn } from '../../state/auth/action/log-in.action'
import { actionLogOut } from '../../state/auth/action/log-out.action'

import LogoSVG from '../../logo.svg'
import './nav.css'

const MENU_LIST = [
  {
    id: 1,
    text: 'Home',
  },
  {
    id: 2,
    text: 'About',
  },
  {
    id: 3,
    text: 'Contact',
  },
  {
    id: 4,
    text: 'Catalog',
  },
]

const LogoComponent = ({ alt }) => {
  console.log('render LogoComponent')
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
const MenuComponent = ({ menu }) => {
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
          <LogoComponent alt='React App' />
          <MenuComponent menu={MENU_LIST} />
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