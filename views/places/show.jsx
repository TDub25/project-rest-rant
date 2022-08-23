const React = require('react')
const Def = require('../default')

function show(data){
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = sumRatings / data.place.comments.length
      rating = (
        <h3>
          {averageRating} stars
        </h3>
      )
          comments = data.place.comments.map(c => {
            return (
              <div className="border">
                <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                <h4>{c.content}</h4>
                <h3>
                  <stong>- {c.author}</stong>
                </h3>
                <h4>Rating: {c.stars}</h4>
              </div>
            )
          })
        }
    return(
    <Def>
        <main>
            <section> 
            <div className='detailpic'><img src={`..${data.place.pic}`} alt="restaurant" width="50%"/>
            </div>
            <div className='info'>
                <h1>{data.place.name}</h1>
                <h2>
                  Rating
                </h2>
                {rating}
                {/* <p>No Ratings Available</p> */}
                <h2>Description</h2>
                <p>{data.place.showEstablished()}</p>
                <p>Serving {data.place.cuisines}</p>
            </div>
            </section>
            <div id="editSec">
                <a href={`/places/${data.place.id}/edit`} className='btn btn-warning' id='editBtn'>Edit</a>
                <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                    <input type='submit' className='btn btn-danger' value="Delete" id="delBtn"/>
                </form>
            </div>    
            <section>
            <div className='rants'>
                <h2>Comments</h2>
                {comments}
            </div>
            </section>
        </main>
    </Def>
)
}

module.exports=show