import React from 'react'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-50 pr-4'>
        <img className='h-80' src={posterPath} alt='posterpath' />
    </div>
  )
}

export default MovieCard