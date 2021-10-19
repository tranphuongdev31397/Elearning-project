import React from 'react'

export default function Button(props) {
    let styleBtn = props.styleBtn
    return (
        <button className={`border-2 px-2 py-1 border-solid border-black ${styleBtn}`}>
           <span className="font-bold">{props.children}</span>
        </button>
    )
}
