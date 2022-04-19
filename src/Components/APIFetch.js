import React, { useEffect, useState, useRef } from 'react'
import axios from "axios";
import Display from './Display';



function APIFetch() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [pagingInit, setPagingTnit] = useState(0);
    const [pagingFinal, setPagingFinal] = useState(20);

    const inputSearch = useRef(null)

    useEffect(() => {
        axios
            .get("https://api.coincap.io/v2/assets")
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log("ERROR", error);
            });
    }, [])

    if (data === "") { return; }

    const handleChange = (e) => {
        setSearch(e.target.value)

    }

    let handleClick = (e) => {
        if (e.target.innerText === "1") {
            setPagingTnit(0)
            setPagingFinal(20)
        } else if (e.target.innerText === "2") {
            setPagingTnit(20)
            setPagingFinal(40)
        } else if (e.target.innerText === "3") {
            setPagingTnit(40)
            setPagingFinal(60)
        } else if (e.target.innerText === "4") {
            setPagingTnit(60)
            setPagingFinal(80)
        } else if (e.target.innerText === "5") {
            setPagingTnit(80)
            setPagingFinal(100)
        }
    }


    const handleSearch = (e) => {
        inputSearch.current.focus()
    }

    let filterData = data.data.slice(pagingInit, pagingFinal).filter((element) => {
        return element
    })

    console.log("Whole Data====", filterData);
    console.log("-------------------------------------------------------------------");

    return (
        <div>
            <div className='input-container'>
                <label className='label-search' onClick={handleSearch}>SEARCH CURRENCY  <i className="fa fa-search"></i></label>
                <input type="text" placeholder='SYMBOL / ID' onChange={handleChange} ref={inputSearch} />
            </div>
            {
                search === "" ?
                    <Display filterData={filterData} /> : <Display filterData={data.data.filter((element) => {
                        return element.id.includes(search.toLowerCase()) || element.symbol.includes(search.toUpperCase())
                    })} />
            }

            <div className='button-container'>
                <button onClick={handleClick}>1</button>
                <button onClick={handleClick}>2</button>
                <button onClick={handleClick}>3</button>
                <button onClick={handleClick}>4</button>
                <button onClick={handleClick}>5</button>
            </div>
            <i className="fa fa-angle-double-right"></i>
        </div >
    )
}

export default APIFetch;
