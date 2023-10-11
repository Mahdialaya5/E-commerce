import React from 'react'
import{useSelector} from 'react-redux'
import Cards from "../cards/Cards"
const CardList = () => {
    //const list=useSelector((state)=>state.product)
    const list=[1,2,3,4,5,6,7,8,9,5,4,8]

 return (
<div className='cards' >
{list.map((el)=><Cards
    key={el._id}
    el={el}
    />)}
    </div>
  )
}

export default CardList