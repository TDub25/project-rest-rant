const React = require('react')
const Def = require('../default')

function index (data) {
  console.log("data", "++")
  console.log(data)
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className='col-sm-6'>
        <h2>
          <a href={`/places/${place.id}`}>
            {place.name}
          </a>
        </h2>
        <p className='text-center'> {place.cuisines}</p>
        <img src={place.pic} alt={place.name}/>
        <p className='text-center'> Located in {place.city}, {place.state}</p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Places to Rant and Rave About</h1>
            <div className='row'>
            {placesFormatted}
            </div>
            <p>
                <a href="/places/new">
                    <button id='addBtn'>Add Your Restaurant</button>
                </a>
              </p>
        </main>
    </Def>
)
}

module.exports = index