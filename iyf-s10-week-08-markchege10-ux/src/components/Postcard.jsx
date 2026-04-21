function PostCard({ title, content }) {
    return (
      <div className="post">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  }
  
  export default PostCard;