const Dislike = (props) => {
  return (
    <div className="dislikes">
      <img className="heart" src="/broken-heart1.png" />
      <span>{props.dislike.name}</span>
    </div>
  )
}

export default Dislike
