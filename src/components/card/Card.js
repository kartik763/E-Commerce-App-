import React from 'react'
import test from '../../images/test.jpg'
import './card.css'

const Card = ()=>(

    <div class="card">
  <img src={test} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">NIKE</h5>
    <p className="card-text">$9.99</p>
    <a href="#" className="btn btn-primary">Add to bag</a>
  </div>
</div>
);

export default Card;