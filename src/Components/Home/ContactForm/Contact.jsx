import { useState } from 'react';
import './Contact.css'
import emailjs from 'emailjs-com'

function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        request: ''
    })

    const sendMail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0v0fafl', 'template_f5zlc2q', e.target, 'IuyIuum3tjXJRmw_j')
        setTimeout(() => {
            setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                request: ''
            })
        }, 1500);
    }

    return (
        <div className="container contact-form m-top">
            <div className="row">
                <div className="col-md-6">
                    <div className="image-md">
                        <img src="https://ucarecdn.com/6550d529-9a12-465f-a64f-aefd343f8aef/MorccanLogo.svg" alt="Logo Moroccan Developer"
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div className="col-md-6 py-5">
                    <form onSubmit={sendMail}>
                        <h6 className="display-5 fw-semibold text-main">Contact US</h6>
                        <div className="form-group my-4">
                            <label htmlFor="fullName" className="form-label fs-5">Full Name <span className="text-danger">*</span> </label>
                            <input
                                type="text"
                                className="form-contact" id='fullName'
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                name='userName' />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="email" className="form-label fs-5">Email <span className="text-danger">*</span> </label>
                            <input
                                type="email"
                                className="form-contact"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                id='email' name='userEmail' va />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="phoneNumber" className="form-label fs-5">Your phone number <span className="text-danger">*</span> </label>
                            <input
                                name='phoneNumber' type="text"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                className="form-contact" id='phoneNumber' />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="message" className='form-label fs-5'>Your request <span className="text-danger">*</span> </label>
                            <textarea className='form-area'
                                value={formData.request}
                                onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                                name='message'></textarea>
                        </div>
                        <div className="form-group my-4">
                            <button className="cta btn-main px-5 fw-bold">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
