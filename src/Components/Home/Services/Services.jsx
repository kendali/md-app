import Service from './Service'
import './Services.css'
function Services() {
    return (
        <div className="services m-top container-fluid py-5">
            <div className="services-info px-5 ">
                <div className="services-header text-center">
                    <h5 className='text-second fw-bold fs-1'>Moroccan Developer <span className="text-main">Services</span></h5>
                    <p className='lead w-50 d-none m-auto'>We provide all services related to programming upon request in the field of programming, as we have extensive experience in developing private and public web applications
                    </p>
                </div>
                <div className="services-body container m-top py-5 d-flex flex-column">
                    <Service imgLink='https://ucarecdn.com/2f00ea13-cdfd-45c8-9821-91429934e3c9/undraw_code.svg'
                        imgAlt='Special Programming Image' title='Special Programming' description='Creating special web applications as requested by the client that gives him complete control through his control panel'
                    />
                    <Service imgLink='https://ucarecdn.com/21e63588-4956-45ad-8586-7df915ba441d/undraw_commandbutton.svg'
                        imgAlt='Ready Programming Image' title='Ready Programming' description='It is the use of content management plugins such as WordPress and Joomla... These programs are easy to use, but they do not make you control an entire website, as they only use ready-made themes.'
                    />
                    <Service imgLink='https://ucarecdn.com/9ffc08fd-f17c-4f2b-8e3a-5bd5d3deef73/undraw_cloudupload.svg'
                        imgAlt='Technical consultation Image' title='Technical consultation' description='We provide consultation in the field of programming to help and guide you in launching your project on the Internet, from design to programming '
                    />
                </div>
            </div>
        </div>
    )
}

export default Services
