import React, { useState, useEffect } from 'react'

const useMyApi = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json)
            }
            );

    }, [url]);
    return [data]
}

export default useMyApi
