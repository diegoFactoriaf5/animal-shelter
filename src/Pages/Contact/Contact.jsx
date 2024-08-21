import React from 'react'
import ContactSocial from '../../Components/ContactSocial/ContactSocial'
import HeaderPages from '../../Components/HeaderComponents/HeaderPages/HeaderPages'


export default function Contact() {
    return (
        <>
            
            <div data-testid="header-component">
                <HeaderPages stateImg={false} />
            </div>
            <div data-testid="contact-social-component">
                <ContactSocial />
            </div>
        </>
    )
}
