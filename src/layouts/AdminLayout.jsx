import withLayout from 'hocs/withLayout'
import React from 'react'

function AdminLayout(props) {
    return (
        <>
            {props.children}
        </>
    )
}

export default withLayout(AdminLayout)