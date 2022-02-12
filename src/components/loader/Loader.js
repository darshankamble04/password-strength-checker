import React from 'react'
import "./loader.css"
function Loader() {
    return (
        <div style={{backgroundColor:"black",height:"100vh"}} className='text-light d-center flex-column'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
           {/* <h1 className='my-5'>loading...</h1>  */}
        </div>
    )
}

export default Loader
