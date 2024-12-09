import React, { Fragment, useState } from "react";

function HelloWorld() {
    const [isTrue, setIsTrue] = useState(false)

    return (
         <h1 className="green">Hello, World</h1>
            

    )
}

export default HelloWorld;