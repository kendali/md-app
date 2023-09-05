
function Tool(props) {
    return (
        <>
            <div className="tool">
                <img src={props.imgLink}
                    alt={props.imgAlt}
                    width={120}
                />
            </div>
        </>
    )
}

export default Tool
