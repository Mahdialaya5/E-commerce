import React from 'react'
import './admin.css'

function Admin() {
  return (
    <div className='containerAdm'  >
     <h2  className='titlAdm' >Admin</h2>
   < p  className='userlist'  > userlist</p>
  <table>
<tbody>
    <tr   className='tr' >
        <th>name</th>
        <th>category</th>
        <th>Email</th>
    </tr>
    <tr className='tr'  >
        <td>dell</td>
        <td>company</td>
        <td>company</td>
    </tr>
</tbody>
  </table>


    </div>
  )
}

export default Admin