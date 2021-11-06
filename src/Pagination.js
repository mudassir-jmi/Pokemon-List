import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage}) {
    return (
        <div>
            {gotoPrevPage && <button className="btn btn-primary mx-4 my-4" onClick={gotoPrevPage}>Previous</button>} 
            {gotoNextPage && <button className="btn btn-primary mx-4 my-4" onClick={gotoNextPage}>Next</button>}  
           
        </div>
    )
}
