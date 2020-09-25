import React, { useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'


import LogoSVG from '../../logo.svg'
import './nav.css'
import { actionLogIn } from '../../state/auth/action/log-in.action'
import { actionLogOut } from '../../state/auth/action/log-out.action'


const LogoComponent = React.memo(({ alt }) => {
  console.log('render LogoComponent')

  return (
    <div className='Logo'>
      <a href='/#' className='Logo__link'>
        <img src={LogoSVG} alt={alt} />
      </a>
      <div>{alt}</div>
    </div>
  )
})
// проверить мемоизацию так как список меню итемов это массив
const MenuComponent = React.memo(({ menu }) => {
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
})

const Auth = React.memo(({ isAuth, userName, onLogInClick, onLogOutClick }) => {
  console.log('render Auth')

  return (
    <>
      {
        !isAuth ? (
          <div className='Nav__wrapper__btn-block'>
            <button className='btn btn--blue' onClick={onLogInClick}>Log In</button>
          </div>
        ) : (
            <div className='Nav__profile'>
              <div className='Nav__icon'></div>
              <p className='Nav__user-name'>{userName}</p>
              <button className='btn' onClick={onLogOutClick}>Log out</button>
            </div>
          )
      }
    </>
  )
})

const Nav = () => {
  const { isAuth, userName, menu, alt } = useSelector(state => ({
    isAuth: state.auth.isAuth,
    userName: state.auth.userName,
    menu: state.gallery.menu,
    alt: state.gallery.alt
  }), shallowEqual)

  const dispatch = useDispatch()

  const handleLogInClick = useCallback(() => dispatch(actionLogIn()), [dispatch])
  const handleLogOutClick = useCallback(() => dispatch(actionLogOut()), [dispatch])

  return (
    <nav className='Nav'>
      <div className='container'>
        <div className='Nav__wrapper'>
          <LogoComponent alt={alt} />
          <MenuComponent menu={menu} />
          <Auth isAuth={isAuth} userName={userName} onLogInClick={handleLogInClick} onLogOutClick={handleLogOutClick} />
        </div>
      </div>
    </nav>
  )
}

export default Nav