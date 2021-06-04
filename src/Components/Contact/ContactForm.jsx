import React from 'react'
import { TextField } from '@material-ui/core'

const ContactForm = ({
    handleSubmit,
    handleChange,
    data
}) => (
    <form className="contact_form" onSubmit={handleSubmit}>
        <div className="contact_form-group">
            <TextField onChange={handleChange} value={data.email} name='email' label="Your email" type='email' classes={{root: 'contact_input_root'}} />
            <TextField onChange={handleChange} value={data.subject} name='subject' label="Subject" type='text' classes={{root: 'contact_input_root'}} />
        </div>
        <TextField onChange={handleChange} value={data.message} name='message' label="Message here..." type='text' multiline={true} rows={3} classes={{root: 'contact_input_root'}} />
        <input type="submit" className='btn-red' value="Send Message" />
    </form>
)

export default ContactForm