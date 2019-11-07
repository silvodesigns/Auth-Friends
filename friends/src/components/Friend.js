import React from 'react';

function Friend(props){

    const list = props.data;
    console.log(list);
    return(
          <ol>
            {list.map( x => <li>{x.name}</li>)}
         </ol>
    )
}

export default Friend;