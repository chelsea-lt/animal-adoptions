const Like = (props) => {
  return (
    <div className="likes">
      <img className="heart" src="/heart1.png" />
      <span>{props.like.name}</span>
    </div>
  )
}

export default Like
