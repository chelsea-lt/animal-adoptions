import Like from './Like'

const Animal = (props) => {
  return (
    <div>
      <h2>
        {props.animal.name}, {props.animal.age.years} years and{' '}
        {props.animal.age.months} months
      </h2>
      <h3>{props.animal.description}</h3>
      <img src={props.animal.image} />
      <div>
        <ul>Animal Type: {props.animal.type}</ul>
        <ul>Breed: {props.animal.breed}</ul>
        <ul>Sex: {props.animal.sex}</ul>
        <ul>
          {props.animal.colour.length > 1 ? (
            <>
              Colour: {props.animal.colour[0]} / {props.animal.colour[1]}
            </>
          ) : (
            <>Colour: {props.animal.colour[0]}</>
          )}
        </ul>
        <ul>Animal ID: {props.animal.id}</ul>
      </div>
      <div>
        {props.animals.likes.map((like) => (
          <Like like={like} />
        ))}
      </div>
      <div>
        Dislikes
        <li>{props.animal.dislikes[0]}</li>
        <li>{props.animal.dislikes[1]}</li>
      </div>
    </div>
  )
}

export default Animal
