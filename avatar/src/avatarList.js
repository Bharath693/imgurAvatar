import React from 'react'

function AvatarList(props){
    return(
        <div className="avatarstyle ma4 bg-light-purple dib">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar"></img>
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}
export default AvatarList;