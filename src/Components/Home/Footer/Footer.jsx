import './Footer.css'

const Footer = () => {
    const allInfoMd = [{ id: 0, title: 'Rabat Morocco' }, { id: 1, title: 'support@moroccandeveloper.com' }]
    const infoMd = allInfoMd.map((info) =>
        <li key={info.id} className='nav-item mb-2'><a href="#" className="text-light">{info.title}</a></li>
    )
    const servicesNav = [
        { id: 1, service: 'Creation Websites' },
        { id: 2, service: 'Design Branding' },
        { id: 3, service: 'Council Training' }
    ]
    const servicesNavItems = servicesNav.map((serviceItem) =>
        <li key={serviceItem.id} className='nav-item mb-2'><a href="#" className="text-light">{serviceItem.service}</a></li>
    )
    const pagesSections = [
        {id:0,pageName:'Home'},
        {id:1,pageName:'Blog'},
        {id:2,pageName:'Forum'},
        {id:2,pageName:'Store'}
    ]
    const pages = pagesSections.map((page)=>
        <li key={page.id} className='nav-item mb-2'><a href="#" className="text-light">{page.pageName}</a></li>
    )
    const socialMediaLinks = [
        {id:0,lien:'https://ucarecdn.com/2f6808d1-5815-4aea-9bbe-0914dee657f7/icons8facebook1.svg',title:'Facebook'},
        {id:1,lien:'https://ucarecdn.com/2f6808d1-5815-4aea-9bbe-0914dee657f7/icons8facebook1.svg',title:'Twitter'},
        {id:2,lien:'https://ucarecdn.com/2f6808d1-5815-4aea-9bbe-0914dee657f7/icons8facebook1.svg',title:'Instagram'},
        {id:3,lien:'https://ucarecdn.com/2f6808d1-5815-4aea-9bbe-0914dee657f7/icons8facebook1.svg',title:'Youtube'}
    ]
    const socialMedia = socialMediaLinks.map((sm)=>(
        <li key={sm.id} className={`${sm.title} nav-item mb-2 `}>
            <a href="">
            <img src={sm.lien} alt={sm.title} width={40} />
            </a>
        </li>
    ))
    return (
        <footer className="footer m-top">
            <div className="container py-5">
                <div className="logo">
                    <img width={50} src="https://ucarecdn.com/91f61d7a-89f0-418d-ac52-28e1f8f868af/whitelogo.svg" alt="Logo Moroccan Developer" />
                </div>
                <div className="d-flex justify-content-evenly flex-column align-items-center flex-lg-row">
                    <div className="info">
                        <ul className="nav py-3">
                            {infoMd}
                        </ul>
                    </div>
                    <div className="pages">
                        <div className="header">
                            <h6 className='text-light fw-semibold'>Pages</h6>
                        </div>
                        <ul className="nav py-2">
                            {pages}
                        </ul>
                    </div>
                    <div className="services">
                        <div className="header">
                            <h6 className='text-light fw-semibold'>Services</h6>
                        </div>
                        <ul className="nav py-2">
                            {servicesNavItems} <br />
                        </ul>
                    </div>
                    <div className='social-links'>
                        <ul className="socialMedia nav d-flex gap-2 flex-lg-column ">
                            {socialMedia}
                        </ul>
                    </div>
                    
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;