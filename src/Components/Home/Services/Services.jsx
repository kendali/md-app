import Service from './Service'
import './Services.css'
import Tools from './Tools/Tools'
function Services() {
    return (
        <div className="services m-top container py-5">
            <div className="header bg-light w-75 m-auto rounded-4 shadow-lg p-3 mb-5 bg-white">
                <h2 className='display-5 fs-4 text-center py-4 font-black'><span className='fs-1 text-main fw-bold'>"</span>Building a website is like building a digital storefront. It's not just about creating an online presence; it's about crafting a user experience that leaves a lasting impression.<span className='fs-1 text-main fw-bold'>"</span></h2>
            </div>
            <div className="nos-services m-top">
                <div className="services-header text-center">
                    <h3 className='display-5 fw-semibold text-main'>Nos Services</h3>
                </div>
                <div className="services-section m-top d-flex justify-content-center gap-5 align-items-center flex-wrap ">
                    <Service imgLink="https://ucarecdn.com/e35b4161-435b-4c4f-a48f-c33e9d49c95c/Untitled1.svg"
                        imgAlt="Creation Website image"
                        title="Creation Redesign of Websites"
                        description={<>
                            Website creation <br />
                            Website redesign <br />
                            Showcase site <br />
                            E-commerce site <br />
                            Landing Page <br />
                            SEO Optimization <br />
                        </>}
                    />
                    <Service imgLink="https://ucarecdn.com/230042d8-1fa9-40db-830f-ff9dfe1156d2/Untitled2.svg"
                        imgAlt="Design Branding image"
                        title="Design Branding"
                        description={<>
                            Naming <br />
                            Logotype <br />
                            Visual identity <br />
                            Branding <br />
                            Illustrations - Pictos <br />
                            Iconography <br />
                            Photo editing - Videos <br />
                            Motion design <br />
                        </>}
                    />
                    <Service imgLink="https://ucarecdn.com/f5d79ade-cb64-434e-befc-d0da2f5b6546/Untitled3.svg"
                        imgAlt="Council Training image"
                        title="Council Training"
                        description={<>
                            Front-End training <br />
                            Back-End training <br />
                            Definition of the supply Product <br />
                            Audit - Council <br />
                            WordPress training <br />
                            Hands-taking Elementor Pro <br />
                        </>}
                    />
                </div>
            </div>
            <div className="tools-section m-top">
                <Tools />
            </div>
        </div>
    )
}

export default Services
