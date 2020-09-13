import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionAuth } from '../../state/auth/action/auth-data.action'

import './nav.css'

const Nav = ({ isAuth, userName, actionAuth }) => <nav className='Nav'>
  <div className='container'>
    <div className='Nav__wrapper'>
      {
        !isAuth ? (
          <>
            <button className='btn btn--blue' onClick={
              () => actionAuth()
            }>Log in</button>
            <button className='btn'>Log out</button>
          </>
        ) : (
            <p className='Nav__user-name'>{userName}</p>
          )
      }
    </div>
  </div>
</nav>

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    actionAuth
  },
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Nav)