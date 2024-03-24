import React from 'react'
import Marcee from './Marcee'
function Marcees() {
    var val=[
        ["Shaitaan : 7.6 Imdb","Monkey Man : 7.6 Imdb","Merry Christmas : 7.1 Imdb","Animal : 6.2 Imdb","Murder Mubarak : 6.9 Imdb","12th Fail : 9.0 Imdb","Article 370 : 8.3 Imdb","Yodha : 6.4 Imbd"],
        ["The Gentleman : 8.3 Imdb","Poor Things : 8.0 Imdb","Dune Part Two : 8.8 Imbd","Damsel : 6.1 Imbd","Shogun : 9.2 Imbd","Open Heimer : 8.3 Imbd","Dune Part One : 8.0 Imdb","The Holdovers : 8.0 Imbd"]
    ];
  return (
    <div className='py-20 mt-32 relative overflow-hidden' >
        {val.map((item,index)=> <Marcee key={index} direction={index===0 ? "left" : "right"} valnames={item} />)}
      
    </div>
  )
}

export default Marcees;