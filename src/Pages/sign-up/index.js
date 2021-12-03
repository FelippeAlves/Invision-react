import React, { useEffect, useState} from "react";
import Carousel from "../../Components/carousel";
import FormSignUp from "../../Components/form-sign-up";
import './style.sass';

export default function SignUp () {
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
            <FormSignUp />
        </div>
    );
}