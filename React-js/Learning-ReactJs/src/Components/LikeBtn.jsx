import { useState } from "react";

function LikeBtn(){
        const [like ,setLike] = useState(true)
        function changeLike(){
            setLike(pre => !pre)
        }
    return (
        <>
            <button className="like" onClick={changeLike}>{like ? "Like" : "Liked....."}</button>
        </>
    )
}

export default LikeBtn;