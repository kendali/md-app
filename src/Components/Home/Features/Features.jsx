import Feature from "./Feature"


function Features() {
  return (
    <div className="features container px-4 m-top p-5">
      <div className="features-header text-center">
        <h2 className="font-black">Weaving innovation, design, and code into the fabric of the internet</h2>
        <p className="lead d-none d-lg-block">
          Web development encompasses the creation and maintenance of websites and web applications, utilizing technologies like HTML, CSS, JavaScript, and server-side scripting to deliver interactive and engaging online experiences.
        </p>
      </div>
      <div className="features-body mt-md-5">
        <div className="row bg-body-tertiary p-5 rounded-3 gap-4 justify-content-center align-content-center">
          {/* <div className="col-md-4 p-5 rounded-4 bg-white">
            <div className="feature-header">
              <img src="https://ucarecdn.com/772484aa-5905-4f96-bbb4-eb49f4a8c1ae/undraw_design_tools_42tf.svg" 
              alt="UI & UX"
              className="img-fluid"
              width={250}
              />
            </div>
            <div className="feature-body">
              <div className="feature-title text-center my-4 font-black">
                <h3>UI & UX</h3>
              </div>
              <div className="feature-description text-center">
                <p className="lead">
                User interface design and user experience are essential in a web application because they make the final product easy to use and attract all categories
                </p>
              </div>
            </div>
          </div> */}
          <Feature imgLink='https://ucarecdn.com/772484aa-5905-4f96-bbb4-eb49f4a8c1ae/undraw_design_tools_42tf.svg'
            imgAlt='UI & UX' title='UI & UX'
            description='User interface design and user experience are essential in a web application because they make the final product easy to use and attract all categories' />
          <Feature imgLink='https://ucarecdn.com/c9196de6-2723-4cab-81c1-81f604ab5357/undraw_laravel_and_vue_59tp.svg'
            imgAlt='Full Stack' title='Full Stack Development'
            description='full stack development entails building a complete software feature, encompassing both front-end and back-end aspects, to deliver a self-contained functionality within a larger application.' />
          <Feature imgLink='https://ucarecdn.com/1c8f42aa-17d9-49c1-8a17-bde14985f258/undraw_connecting_teams_re_hno7.svg'
            imgAlt='Support' title='Support 24/7' size='200' 
            description='24/7 refers to round-the-clock assistance and service availability, ensuring customers can seek help or access support at any time of day or night.' />
        </div>
      </div>

    </div>
  )
}

export default Features

