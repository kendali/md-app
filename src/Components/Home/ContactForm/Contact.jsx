import './Contact.css'


function Contact() {
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
            <form>
                <h6 className="display-5 fw-semibold text-main">Contact US</h6>
                <div className="form-group my-4">
                    <label htmlFor="fullName" className="form-label fs-5">Full Name <span className="text-danger">*</span> </label>
                    <input type="text" className="form-contact" id='fullName' />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="email" className="form-label fs-5">Email <span className="text-danger">*</span> </label>
                    <input type="email" className="form-contact" id='email' />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="phoneNumber" className="form-label fs-5">Your phone number <span className="text-danger">*</span> </label>
                    <input type="text" className="form-contact" id='phoneNumber' />
                </div>
                <div className="form-group my-4">
                    <label htmlFor="message" className='form-label fs-5'>Your request <span className="text-danger">*</span> </label>
                    <textarea className='form-area'></textarea>
                </div>   
                <div className="form-group my-4">
                    <a  className="cta btn-main px-5 fw-bold">Send</a>
                </div> 
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
