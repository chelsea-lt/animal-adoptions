const Dislike = (props) => {
  return (
    <div>
      <img className="heart" src="/broken-heart1.png" /> {props.dislike.name}
    </div>
  )
}

export default Dislike
