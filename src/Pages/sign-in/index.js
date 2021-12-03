import React, { useEffect, useState} from "react";
import Carousel from "../../Components/carousel";
import FormSignIn from "../../Components/form-sign-in";

export default function SignIn () {
    const screen = window.screen.width

    const [direction, setDirection] = useState('d-flex')

    useEffect(() => {
        if (screen <= 770) {
            setDirection('d-flex f-direc')
        } else {
            setDirection('d-flex')
        }
    }, [direction])
        
    return (
        <div class={direction}>
            <Carousel />
            <FormSignIn />
        </div>
    );
}