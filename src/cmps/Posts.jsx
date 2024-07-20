
/* eslint-disable react/prop-types */
function Posts({post}){

    return(
        <div className="post">
            <div>
            <p>title:{post.title}</p>
            <p>body: {post.body}</p>
            </div>
        </div>
    )
}

export default Posts