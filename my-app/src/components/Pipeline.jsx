import './Pipeline.css'


export default function Pipeline(props) {
    const {title,img,code,isSelected,onClick} = props;
    return(

        <div className="pipeline">
            <button onClick={onClick}> <img src={img} alt={title} /></button>
            {isSelected && <pre>{code}</pre>}
            
            
        </div>
    )
}