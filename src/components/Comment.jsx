import React from 'react'
import data from '../data/comments'

export const Comment = () => {
    function check(data){
        if(!data.replies) return;
        else{
            console.log(data.replies);
            for(let reply of data.replies) check(reply);
        }
    }
    check(data);
    return (
        <div>
            
        </div>
    )
}
