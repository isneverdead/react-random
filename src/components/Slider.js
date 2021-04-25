import React from 'react'
import sliderImage from '../images/coffee.svg'
import rightArrowIcon from '../images/small-icon/right-arrow.svg'
const Slider = () => {
  const styleJumbotron = {
    height: '70vh',
    borderRadius: '0',
    backgroundImage: 'url("' + sliderImage + '")',
    backgroundSize: 'cover',
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div style={styleJumbotron} className='jumbotron col-12'>
          <div className='row'>
            <div className='col'></div>
            <div className='col pt-5'>
              <h2 className='display-5 text-white font-weight-bold'>
                "One should eat to live
              </h2>
              <h2 className='display-5 text-white font-weight-bold'>
                Not live to eat" - <i>Moliere</i>
              </h2>
              <p>
                <div className='btn btn-success'>
                  Pesan Sekarang
                  <img src={rightArrowIcon} alt='' />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
