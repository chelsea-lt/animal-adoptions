import './App.css'
import data from './animals.json'
import Animal from './components/Animal'
// import Background from './public/Background.jpg'

const App = () => {
  console.log(data)
  return (
    <div>
      <h1>Animal Adoptions</h1>
      {/* <background */}
      <div className="list">
        {data.animals.map((animal) => (
          <Animal key={animal.guid} animal={animal} />
        ))}
      </div>
    </div>
  )
}

export default App
