import React from 'react'
import CvPT from './CvPT'

const CvParser = () => {
  return (
    <div className='cvInputs'>
      <div className='cv'>
        <div>
          <h1>Upload CV</h1>
        </div>
        <div className='pdfParser'>
            <h2>Drop PDF here or browse </h2>
        </div>
      </div>
    </div>
  )
}

export default CvParser