import React, { useState } from 'react'
import NewsForm from '../../Components/NewsComponents/NewsForm/NewsForm'
import NavBarPages from '../../Components/NavBarsComponents/NavBarPages/NavBarPages'
import DonationForm from '../../Components/DonationComponents/DonationForm/DonationForm'
import NewsAdmin from '../../Components/NewsComponents/NewsAdmin/NewsAdmin'
import DonationsAdmin from '../../Components/DonationComponents/DonationsAdmin/DonationsAdmin'



function AdminPage() {


const [reload, setReload] = useState(false)

  
  return (
    <>


      <div data-testid="navbar-component">
        <NavBarPages />
      </div>
      <div className="flex flex-wrap md:flex-nowrap mt-10">
        <div className=" w-5/6 mx-auto" data-testid="news-form-component">
          <NewsForm setReload={setReload}/>
        </div>
        <div className="w-5/6 mx-auto">
          <DonationForm  setReload={setReload}/>
        </div>
      </div>
      <div className='flex justify-center w-5/6 mx-auto'>
        <DonationsAdmin reload={reload} setReload={setReload}/>
      </div>
      <div>
        <NewsAdmin reload={reload} setReload={setReload}/>
      </div>


    </>
  )
}

export default AdminPage