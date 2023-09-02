
function Service({imgLink,imgAlt,title,description}) {
    return (
        <>
            <div className="service w-sm-75 mb-5">
                <div className="icon mb-3">
                    <img src={imgLink} alt={imgAlt} />
                </div>
                <div className="header mb-3">
                    <h5>{title}</h5>
                </div>
                <div className="description">
                    <p className="lead">
                        {description}                    </p>
                </div>
            </div>
        </>
    )
}

export default Service
