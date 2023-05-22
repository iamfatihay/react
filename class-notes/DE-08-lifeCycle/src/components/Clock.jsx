import React, { useState, useEffect } from 'react'
import moment from "moment"

const Clock = () => {
    const [zaman, setZaman] = useState(moment());


    useEffect(() => {
        const time = setInterval(() => {
            setZaman(moment());
            console.log("merhaba");
        }, 1000);

        return () => {
            clearInterval(time)
            console.log("başka sayfaya gidildiği için interval durdu");
        }


        //!sayfa ilk render edildiğinde setInterval başlasın
    }, [])




    return (
        <div>
            {zaman.format("HH")}
            {zaman.format("ss") % 2 === 0 ? ":" : " "}
            {zaman.format("mm")}
            {zaman.format("ss") % 2 === 0 ? ":" : " "}
            {zaman.format("ss")}
        </div>
    );
}

export default Clock