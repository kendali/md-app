
function Feature({imgLink,imgAlt,title,description,size}) {
  return (
    <>
      <div className=" p-5 rounded-4 bg-white">
            <div className="feature-header text-center">
              <img src={imgLink}
              alt={imgAlt}
              className="img-fluid"
              width={size}
              />
            </div>
            <div className="feature-body">
              <div className="feature-title text-center my-4 font-black">
                <h3 className="text-main fw-bold">{title}</h3>
              </div>
              <div className="feature-description text-center">
                <p className="lead">
                {description}
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Feature
