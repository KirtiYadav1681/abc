import React from 'react'
import './display.css'

const Displaycar = ({car}) => {
  return (
    <div className='wrapper-2'>
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Model</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {car?.map((car) => { return <tr>
          <td>{car.Brand}</td>
          <td>{car.Model}</td>
          <td>{car.quantity}</td>
        </tr>})}
      </tbody>
    </table>
    </div>
  )
}

export default Displaycar