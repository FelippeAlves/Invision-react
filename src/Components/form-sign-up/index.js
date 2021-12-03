import { useState } from 'react';
import './style.sass';
import Rotas from '../../Routes';
import { Link } from 'react-router-dom';

function FormSignUp() {
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: ''
    });

    const [showWarningEmail, setShowWarningEmail] = useState(false)
    const [showWarningName, setShowWarningName] = useState(false)
    const [showWarningPassword, setShowWarningPassword] = useState(false)
    const [borderErrorName, setBorderErrorName] = useState('')
    const [borderErrorEmail, setBorderErrorEmail] = useState('')
    const [borderErrorPassword, setBorderErrorPassword] = useState('')
    const [errorNameText, setErrorNameText] = useState('')
    const [errorEmailText, setErrorEmailText] = useState('')
    const [errorPasswordText, setErrorPasswordText] = useState('')

    function VerifyFields(param){
        if(param.name ==='' || param.name === undefined) {
            setBorderErrorName('error')
            setShowWarningName(true)
            setErrorNameText('Este campo não pode ser vazio')
        } else {
            setBorderErrorName('')
            setShowWarningName(false)
            setErrorNameText('')
        }

        if(param.email ==='' || param.email === undefined) {
            setBorderErrorEmail('error')
            setShowWarningEmail(true)
            setErrorEmailText('Este campo não pode ser vazio')
        } else {
            setBorderErrorEmail('')
            setShowWarningEmail(false)
            setErrorEmailText('')
            let a = ValidateEmail(param.email);
            if (a === false) {
                setShowWarningEmail(true);
                setBorderErrorEmail('error');
                setErrorEmailText('O e-mail está incorreto');
            } else {
                setShowWarningEmail(false);
                setBorderErrorEmail('');
            }
        }

        if(param.password ==='' || param.password === undefined) {
            setBorderErrorPassword('error')
            setShowWarningPassword(true)
            setErrorPasswordText('Este campo não pode ser vazio')
        } else {
            setBorderErrorPassword('')
            setShowWarningPassword(false)
            setErrorPasswordText('')
            if (param.password.length < 6) {
                setBorderErrorPassword('error')
                setShowWarningPassword(true)
                setErrorPasswordText('A senha não pode ter menos de 6 caracteres')
            }
        }
    }

    function ValidateEmail(email){
        let emailVerify = email.split('@');
        if( emailVerify.length > 1) {
            let i = emailVerify[1].includes('.');
            if (i === true) {
              return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    return(
        <>
            <div class="container">
            <div class="div-title-invision">
                <h4 class="title-invision">Invision</h4>
            </div>
            <div class="d-flex f-direc align-center">
                <div>
                    <p class="sub-title">Welcome to Invision</p>
                </div>
                    <div class="form-group d-flex f-direc">
                        <label class="small-letters" for="fullName">Full Name</label>
                        <input class={borderErrorName} value={ form.name} onChange={(value) =>  {setForm({...form, name: value.target.value});}}></input>
                        {
                            showWarningName?<p class="error-letters">{errorNameText}</p>:null
                        }
                        <label class="small-letters" for="login">Users name or Email</label>
                        <input class={borderErrorEmail} value={ form.email} onChange={(value) =>  {setForm({...form, email: value.target.value});}}></input>
                        {
                            showWarningEmail?<p class="error-letters">{errorEmailText}</p>:null
                        }
                        <label class=" small-letters">Create Password</label>
                        <input class={borderErrorPassword} value={ form.password} onChange={(value) =>  {setForm({...form, password: value.target.value});}}></input>
                        {
                            showWarningPassword?<p class="error-letters">{errorPasswordText}</p>:null
                        }
                    </div>
                    <div class="div-sginIn">
                        <button onClick={() => {VerifyFields(form)}} class="btn-signIn">Sign Up</button>
                    </div>
                <div class="div-lines d-flex align-center">
                    <div>
                        <hr class="line"/>
                    </div>
                    <div class="div-or">
                        <p class="small-letters">Or</p>
                    </div>
                    <div>
                        <hr class="line"/>
                    </div>
                </div>
                <div class="d-flex div-btn-g align-center">
                    <img src="../../assets/Google__G__Logo.svg" alt="" class="btn-g"/>
                    <div class="div-m">
                        <p class="phrase-g">Sign up with Google</p>
                    </div>
                </div>
                <div class="d-flex f-direc">
                    <div class="d-flex div-new-invision align-center">
                        <div class="d-flex align-center">
                            <div class="d-flex f-direc align-center">
                                <div class="d-flex ">
                                    <p class="xsmall-letters remove-margin">By signing up, you agree to</p>
                                    <p class="xsmall-letters-bold remove-margin">Invision</p>
                                </div>
                                <div class="d-flex">
                                    <p class="create-acc remove-margin">Terms of Conditions</p>
                                    <p class="xsmall-letters remove-margin">and</p>
                                    <p class="create-acc remove-margin">Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex div-already-invision self-center">
                        <div class="d-flex align-center">
                            <p class="xsmall-letters">Already on</p>
                            <p class="xsmall-letters-bold">Invision</p>
                            <p>?</p>
                        </div>
                        <div>
                            <Link to='/'><p class="create-acc">Log in</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default FormSignUp;