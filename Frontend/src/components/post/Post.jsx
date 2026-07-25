import React from 'react';
import './post.css';
import { MoreVert } from '@mui/icons-material';
import profileImg from '../../assets/persons/person1.jpeg';
import { Users } from '../../dummyData';
import { useState } from 'react';
function Post({ post }) {
  const [like, setLike] = useState(post?.like);
  const [isLiked, setIsLiked] = useState(false);
  //   const user = Users.filter((user) => user.id === 1);
  //   console.log(user);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter((user) => user.id === post?.userId)[0]
                  ?.profilePicture
              }
              alt=""
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === post?.userId)[0]?.username}
            </span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImage" src={post?.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/posts/like.jpeg"
              alt=""
              onClick={likeHandler}
            />
            <img
              src="/assets/posts/heart.png"
              alt=""
              className="likeIcon"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
