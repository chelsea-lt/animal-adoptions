import Like from './Like'
import Dislike from './Dislike'

const Animal = (props) => {
  return (
    <div className="card">
      <h2>
        {props.animal.name}, {props.animal.age.years} years and{' '}
        {props.animal.age.months} months
      </h2>
      <p>{props.animal.description}</p>
      <div className="stats">
        <img className="picture" src={props.animal.image} />
        <div>
          <div>Animal Type: {props.animal.type}</div>
          <div>Breed: {props.animal.breed}</div>
          <div>Sex: {props.animal.sex}</div>
          <div>
            {props.animal.colour.length > 1 ? (
              <>
                Colour: {props.animal.colour[0]} / {props.animal.colour[1]}
              </>
            ) : (
              <>Colour: {props.animal.colour[0]}</>
            )}
          </div>
          <div>Animal ID: {props.animal.guid}</div>
        </div>
      </div>
      <div className="sentiments">
        <div>
          <h3>Likes</h3>
          {props.animal.likes.map((like) => (
            <Like key={like.id} like={like} />
          ))}
        </div>
        <div>
          <h3>Dislikes</h3>
          {props.animal.dislikes.map((dislike) => (
            <Dislike key={dislike.id} dislike={dislike} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Animal
