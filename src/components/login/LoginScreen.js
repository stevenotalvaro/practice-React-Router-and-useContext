import React, {useContext} from 'react'
import {AuthContext} from '../../auth/AuthContext'
import {types} from '../../types/types'

export const LoginScreen = ({history}) => {
  const {dispatch} = useContext(AuthContext)

  const handleClick = () => {
    dispatch({
      type: types.login,
      payload: {
        name: 'Steven',
      },
    })
    history.replace('/marvel')
  }
  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  )
}
