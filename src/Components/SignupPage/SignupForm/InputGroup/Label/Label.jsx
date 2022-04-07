import React from 'react'

export const Label = ({name,label}) => {
  return (
    <>
    <label className='form-label' htmlFor={name}>{label}</label>
    </>
  )
}
