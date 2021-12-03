import { useState } from 'react';
import './style.sass';
import Rotas from '../../Routes';
import { Link } from 'react-router-dom';

function FormSignIn() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [showWarningEmail, setShowWarningEmail] = useState(false)
    const [showWarningPassword, setShowWarningPassword] = useState(false)
    const [errorEmailText, setErrorEmailText] = useState('')
    const [errorPasswordText, setErrorPasswordText] = useState('')
    const [borderErrorEmail, setBorderErrorEmail] = useState('')
    const [borderErrorPassword, setBorderErrorPassword] = useState('')

    async function VerifyEmail(param) {
        if(param.email === '' || param.email === undefined ) {
            setShowWarningEmail(true);
            setBorderErrorEmail('error');
            setErrorEmailText('Este campo não pode ser vazio');
        } else {
            setShowWarningEmail(false);
            let a = await ValidateEmail(param.email);
            if (a === false) {
                setShowWarningEmail(true);
                setBorderErrorEmail('error');
                setErrorEmailText('O e-mail está incorreto');
            } else {
                setShowWarningEmail(false);
                setBorderErrorEmail('');
            }
        }

        if (param.password === '' || param.password === undefined) {
            setShowWarningPassword(true);
            setBorderErrorPassword('error');
            setErrorPasswordText('Este campo não pode ser vazio');
        } else {
            setShowWarningPassword(false);
            setBorderErrorPassword('');
        }

    }

    async function ValidateEmail(email){
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

    return (
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
                        <label class="small-letters" for="login">Users name or Email</label>
                        <input class={borderErrorEmail} type="email" value={form.email} onChange={(value) => {setForm({...form,email: value.target.value});}}></input>
                        {
                            showWarningEmail?<p class="error-letters">{errorEmailText}</p>:null
                        }
                        <label class=" small-letters">Password</label>
                        <input class={borderErrorPassword} type="password" value={ form.password} onChange={(value) =>  {setForm({...form, password: value.target.value});}}></input>
                        {
                            showWarningPassword?<p class="error-letters">{errorPasswordText}</p>:null
                        }
                        <div class="div-forgot">
                            <p class="small-letters forgot-pw">Forgot password?</p>
                        </div>
                    </div>
                    <div class="div-sginIn">
                        <button onClick={() => {VerifyEmail(form)}} class="btn-signIn">Sign in</button>
                    </div>
                <div class="div-lines d-flex align-center">
                    <div>
                        <hr class="line" />
                    </div>
                    <div class="div-or">
                        <p class="small-letters">Or</p>
                    </div>
                    <div>
                        <hr class="line" />
                    </div>
                </div>
                <div class="d-flex div-btn-g align-center">
                    <img src="../../assets/Google__G__Logo.svg" alt="" class="btn-g" />
                    <div class="div-m">
                        <p class="phrase-g">Sign in with Google</p>
                    </div>
                </div>
                <div class="d-flex div-new-invision align-center">
                    <div class="d-flex align-center">
                        <p class="xsmall-letters">New</p>
                        <p class="xsmall-letters-bold">Invision</p>
                        <p>?</p>
                    </div>
                    <div>
                        <Link to='/signup'><p class="create-acc">Create Account</p></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    
}



export default FormSignIn;