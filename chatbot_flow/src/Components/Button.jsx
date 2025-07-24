import React from "react";

const Button = ({
    placeHolder = '',
    className = '',
    id = '',
    ...props
})=>
{
   return (

    <button className={className} {...props}></button>

   )
}

export default Button;