import Tool from "./Tool"

function Tools() {
    return (
        <>
            <div className="tools-header">
                <h4 className='display-4 fw-semibold text-main text-center'>Tools</h4>
            </div>
            <div className="tools-body p-5 d-flex justify-content-between gap-4 align-items-center flex-wrap">
                <Tool imgLink="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                      imgAlt="React Logo"
                 />
                 <Tool imgLink="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                      imgAlt="PHP Logo"
                 />
                 <Tool imgLink="https://upload.wikimedia.org/wikipedia/commons/3/36/Logo.min.svg"
                      imgAlt="Laravel Logo"
                 />
                 <Tool imgLink="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
                      imgAlt="Django Logo"
                 />
                 <Tool imgLink="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
                      imgAlt="SQL Logo"
                 />
                 <Tool imgLink="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                      imgAlt="Bootstrap Logo"
                 />
                 <Tool imgLink="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                      imgAlt="MongoDb Logo"
                 />
            </div>
        </>
    )
}

export default Tools
