const React = require('react')
const Def = require('../default')

function edit_form(data){
    return (
        <Def>
            <main>
            <div className="newform">
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
            <h1> Add a New Place</h1>
            <div className='row'>
                <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" id="editName" name="name" defaultValue={data.place.name} required />
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" id="editPic" name="pic" defaultValue={data.place.pic} />
                </div>
            </div>   
            <div className='row'>
                <div className="form-group col-sm-6">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="editCity" name="city" defaultValue={data.place.city}/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="state">State</label>
                    <input className="form-control" id="editState" name="state" defaultValue={data.place.state}/>
                </div>
            </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control" id="editCuisines" name="cuisines" defaultValue={data.place.cuisines} required />
                </div>
                <input className="btn btn-primary" type="submit" name="saveBtn" id="saveBtn" value="Save Edits" />
            </form>
         </div>   
            </main>
        </Def>
    )
}
module.exports = edit_form