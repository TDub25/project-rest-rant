const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>Home</h1>
              <div>     
                <img src="/images/lily-banse--YHSwy6uqvk-unsplash.jpg" alt="Restaurant Cuisine" />
                <img src="/images/thai-food.jpg" alt="Thai food" />
                <img src="/images/cafe-food.jpg" alt="Cafe Food" />
              </div>
              <p>
                <a href="/places">
                    <button className="btn-primary" id='placeBtn'> Places Page</button>
                </a>
              </p>
          </main>
      </Def>
    )
  }

module.exports = home