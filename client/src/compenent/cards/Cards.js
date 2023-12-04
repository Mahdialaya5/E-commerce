import React from 'react'

function Cards({el}) {
 
  return (<>
    <div className="card"   style={{width: '18rem',background:" rgb(147, 214, 191)",borderRadius:'2%',backgroundColor: "rgb(148 135 177)"}}>
   <div className="card-body">
    <img  src={el.img} alt='..'  style={{width: '80px',height:"80px",margin:"2px",borderRadius:'13%'}}  />
    <h2    className="card-title">{el.name}</h2>
  
  <h3  style={{color:"blue"}}  >company:{el.seller&&el.seller.name} </h3>
    <h5  style={{fontSize:"15px",color:"#7f0d0d",fontWeight:"600px"}}  >price:{el.price} d</h5>
    
    </div>
</div>
</>
  )
}

export default Cards