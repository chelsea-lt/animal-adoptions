const Like = (props) => {
  return (
    <div>
      <img className="heart" src="/heart1.png" />
      {props.like.name}
    </div>
  )
}

export default Like
