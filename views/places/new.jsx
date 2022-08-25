const React = require('react')
const Def = require('../default')

/* let sumRatings = data.place.comments.reduce((tot, c) => {
    return tot + c.stars
  }, 0)
  let averageRating = sumRatings / data.place.comments.length
  rating = (
    <h3>
    {Math.round(averageRating)} stars
    </h3>
  )   */

function new_form() {
    return (
    <Def>
        <main>
         <div className="newform">
            <form method="POST" action="/places">
            <h1> Add a New Place</h1>
            <div className='row'>
                <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" id="name" name="name" required />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" id="pic" name="pic"/>
                </div>
            </div>    
            <div className='row'>
                <div className="form-group col-sm-6">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city" name="city" />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="state">State</label>
                    <input className="form-control" id="state" name="state" />
                </div>
            </div> 
            <div className='row'>   
                <div className="form-group col-sm-6">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control" id="cuisines" name="cuisines" required />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="founded">Founded Year</label>
                    <input className="form-control" id="founded" name="founded"/>
                </div>
            </div>    
                <input className="btn btn-primary" type="submit" name="submit" value="Add Place" />
            </form>
         </div>   
        </main>
    </Def>
    )
}

module.exports = new_form