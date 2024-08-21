import React from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import NavBarPages from '../../Components/NavBarsComponents/NavBarPages/NavBarPages'

function LoginPage() {
  return (
    <>
      <div data-testid="navbar-component">
        <NavBarPages />
      </div>
      <div data-testid="login-form-component">
        <LoginForm />
      </div>
    </>
  )
}

export default LoginPage