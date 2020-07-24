import React from 'react'
import { useContext } from 'react'
import { AupContext } from '../providers/aup'

export const Part = (props) => {
    const { link, short } = props
    const { hostUrl } = useContext(AupContext)

    return (
        <div className='font-ubuntu row w-2-10 between brb-gray-2 h-7-2 mb-2-5'>
            <div className='column'>
                <label className='c-gray'>Given Link:</label>
                <div className=''>{link}</div>
            </div>
            <div className='column'>
                <label className='c-gray'>Shortened Link:</label>
                <div className='' >{hostUrl}/{short}</div>
            </div>
        </div>
    )
}