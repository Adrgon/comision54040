import { useEffect, useRef } from "react";

const Button = () => {
    const buttonRef = useRef();
    //console.log(buttonRef)
    //buttonRef.current = 10;
    //console.log(buttonRef)
    
    useEffect(()=>{
        const handleClick = () => {
          console.log("Hice click");
        };
        /* const btn = document.getElementById('boton');
        console.log(btn);
        btn.addEventListener('click', handleClick ) // acabo de hacer una optimizacion // FA5679Ef */
        const boton = buttonRef.current
        boton.addEventListener('click', handleClick)

        return ()  => {
            boton.removeEventListener('click', handleClick)
        }
    }, [])
    
    return (
        <button ref={buttonRef} >Boton</button>
    )

}

export default Button
