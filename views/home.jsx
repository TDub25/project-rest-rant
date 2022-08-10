const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/lily-banse--YHSwy6uqvk-unsplash.jpg" alt="" />
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
             </a>
               
          </main>
      </Def>
    )
  }

module.exports = home