import React from 'react';
import './avatar.css';
import 'tachyons'
import AvatarList from './avatarList'

function Avatar(){
    const Avatarcards=[{
        id:1,
        name:"Bharath",
        work:"FullStackDeveloper"
    },
    {
        id:2,
        name:"Babai",
        work:"Process Executive"
    },
    {
        id:3,
        name:"Sudheer J",
        work:"L5 engineer"
    },
    {
        id:4,
        name:"Ravi Teja",
        work:"Executive"
    },
]
    const ListOfCards=Avatarcards.map((cardslist,i)=>{
        return <AvatarList id={Avatarcards[i].id} name={Avatarcards[i].name}
                                                  work={Avatarcards[i].work} />
    })
    return(
         <div>
             <h1>Welcome to Avatar World</h1>
             {ListOfCards}
         </div>
    )
}
export default Avatar;