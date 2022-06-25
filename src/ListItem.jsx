import React from "react";

function ListItem(props){
    return(
        <>
            <li>
                <button className="remove"
                onClick={()=>{
                    props.onclick(props.id);
                }} 
                id={props.id}><i class="fas fa-times"></i></button>
                {" "+props.text}
            </li>
        </>
    );
}

export default ListItem;
