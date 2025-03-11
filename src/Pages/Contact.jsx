import React from 'react'
import CommonBanner from '../Components/CommonBanner'
import CommonQuality from '../Components/CommonQuality'
import WithUs from '../Components/Contact/WithUs'

const Contact = () => {
  return (
    <>
        <CommonBanner title={'Contact'}/>
        <WithUs/>
        <CommonQuality/>
    </>
  )
}

export default Contact