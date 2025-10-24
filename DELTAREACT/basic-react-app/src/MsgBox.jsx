function MsgBox({username, textColor}){
    // let style= {color: textColor}
    return(
        <h1 style={{color: textColor}}> Hello {username}</h1>
    )
}

export default MsgBox;