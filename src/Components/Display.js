import React from 'react'

function Display({ filterData }) {

    return (
        <div className='total'>
            <table>
                <tbody>
                    <tr className='th-head'>
                        <th>RANK</th>
                        <th>SYMBOL</th>
                        <th>ID</th>
                        <th>PRICES</th>
                        <th className='capital-head'>MARKET CAPITAL</th>
                    </tr>
                </tbody>
                {
                    filterData.map((element) => {
                        return (
                            <tbody key={element.rank}>
                                <tr className='add-line'>
                                    <td className='rank'>{element.rank}</td>
                                    <td className='id'>{
                                        element.id.toUpperCase()
                                    }</td>
                                    <td className='symbol'>{element.symbol}</td>
                                    <td className='prices'>${parseFloat(element.priceUsd).toFixed(2)}</td>
                                    <td className='capital'>${Math.trunc(element.marketCapUsd)}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
            {
                filterData.length === 0 ? <h1 className='no-data'>NO DATA FOUND</h1> : null
            }
        </div >
    )
}

export default Display