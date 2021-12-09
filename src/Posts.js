import React from 'react'

function Posts({props}) {
    // console.log()
    return (
        <div>
           {props.map((post)=>(
               <li>
                    <div><strong>Title: </strong>{post.title}</div>
                    <div><strong>Author: </strong>{post.author}</div>
                    <div><strong>Desc: </strong>{post.description}</div>
                    <div><strong>Content: </strong>{post.content}</div>
                    <img src={post.urlToImage} style={{height:"100px",width:"100px"}} />
                    <a href={post.url} ><strong>Source: </strong></a>
                    <hr />
               </li>
           ))}
        </div>
    )
}

export default Posts
