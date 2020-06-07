import React from 'react'

export default function Pagination({gotoNextPage, gotoPrevPage}) {
    // console.log(gotoNextPage ,gotoPrePage);
    return (
        <div className="navigation">
           { gotoPrevPage && <a onClick={gotoPrevPage}>Previous</a>} |
           { gotoNextPage && <a onClick={gotoNextPage}>Next</a>}
        </div>
    )
}
