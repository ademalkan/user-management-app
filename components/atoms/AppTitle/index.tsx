import React from 'react'
interface AppTitleProps {
    barSize?: string
    textSize?: string
}

const AppTitle = (props: AppTitleProps) => {
    const { textSize, barSize } = props
    return (
        <h1 className={`font-bold ${textSize} mb-2 flex items-center`}>
            <div className={`w-1 ${barSize} bg-open-yellow mr-2`}></div>
            MANAGE COURSES
        </h1>
    )
}

export default AppTitle
