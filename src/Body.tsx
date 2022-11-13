

type BodyTypes={
    titleForBody:string
}



export const Body=(props:BodyTypes)=>{
    return (
        <div>{props.titleForBody}</div>
    )
}