import './Services.css'
function Service({ imgLink, imgAlt, title, description }) {
    return (
        <>
            <div className="service w-lg-25 text-center shadow-lg px-3 py-5 mb-5 bg-white rounded-3 d-flex flex-column gap-4 justify-content-center">
                <div className="service-header">
                    <img width={90} src={imgLink} alt={imgAlt} className="img-fluid" />
                </div>
                <div className="service-body">
                    <h4 className='font-black'>{title}</h4>
                    <p className='lead text-center'>
                        {description}
                    </p>
                </div>
                <div className="service-footer flex-end">
                    <a className='cta btn-main fw-semibold'>Learn more</a>
                </div>
            </div>
        </>
    )
}

export default Service
