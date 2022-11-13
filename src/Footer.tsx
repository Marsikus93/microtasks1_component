
type FooterProps={
    titleForFooter:string
}


const Footer=(props:FooterProps)=>{
    return (
        <div>{props.titleForFooter}</div>
    )
}
export default Footer;