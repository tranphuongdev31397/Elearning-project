import React from 'react'

export default function Button(props) {
    let styleBtn = props.styleBtn
    let type = props.type
    let disable = props.disable
    return (
        <button className={`border-2 px-2 py-1 border-solid border-black ${styleBtn}`} type={type} disabled={disable}>
           <span className="font-bold">{props.children}</span>
        </button>
    )
}
