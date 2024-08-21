import React from 'react'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'
import NavBarPages from '../../Components/NavBarsComponents/NavBarPages/NavBarPages'

function RegisterPage() {
  return (
    <>
      <div data-testid="navbar-component">
        <NavBarPages />
      </div>
      <div data-testid="register-form-component">
        <RegisterForm />
      </div>
    </>
  )
}

export default RegisterPage