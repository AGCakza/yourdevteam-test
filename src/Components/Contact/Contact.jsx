import React, { useState } from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    const [data, setData] = useState({
        email: '',
        subject: '',
        message: ''
    })
    const handleChange = e => setData(prev => ({...prev, [e.target.name]: e.target.value}))
    const handleSubmit = e => {
        e.preventDefault()
        alert(`email: ${data.email}, subject: ${data.subject}, message: ${data.message}`)
    }
    return(
        <div className="contact" id='contact'>
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact__sub sub_text uppercase">
                        Contact us
                    </div>
                    <div className="contact__title title_text">
                        Contact us
                    </div>
                    <ContactForm handleChange={handleChange} handleSubmit={handleSubmit} data={data} />
                </div>
            </div>
        </div>
    )
}

export default Contact