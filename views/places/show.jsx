const React = require('react')
const Def = require('../default')

function show(data){
  return(
  <Def>
      <main>
          <section> 
          <div className='detailpic'><img src={`..${data.place.pic}`} alt="restaurant" width="50%"/>
          </div>
          <div className='info'>
              <h1>{data.place.name}</h1>
              <h2>Rating</h2>
              <p>No Ratings Available</p>
              <h2>Description</h2>
              <p>Located in {data.place.city},{data.place.state} and serving {data.place.cuisines}</p>
              
          </div>
          </section>
          <div id="editSec">
              <a href={`/places/${data.id}/edit`} className='btn btn-warning' id='editBtn'>Edit</a>
              <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                  <input type='submit' className='btn btn-danger' value="Delete" id="delBtn"/>
              </form>
          </div>    
          <section>
          <div className='rants'>
              <h2>Comments</h2>
              <p>No Comments to show</p>   
          </div>
          </section>
      </main>
  </Def>
)
}

module.exports=show