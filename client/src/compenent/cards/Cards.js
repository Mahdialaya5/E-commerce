import React from 'react'

function Cards({el}) {
  return (<>
    <div className="card" style={{width: '18rem',background:" rgb(147, 214, 191)",borderRadius:'2%',backgroundColor: "rgb(148 135 177)"}}>
   <div className="card-body">
    <img src='' alt='..'  style={{width: '18px'}}  />
    <h5 className="card-title">DEll</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h5>price</h5>
    </div>
</div>
</>
  )
}

export default Cards