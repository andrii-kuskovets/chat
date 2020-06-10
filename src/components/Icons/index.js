import React from 'react'
import icons from '../../assets/icons/icons-sprite.svg'

const Icon = ({name, ...props}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <use xlinkHref={`${icons}#${name}`} />
        </svg>
    )
}

export default Icon
