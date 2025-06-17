import { Link } from "react-router-dom";

export default function ForgotPassword(){
    return(
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form>
                    <h1 className="title p-20">Recuperar senha</h1>
                    <input type="text p-20" placeHolder='E-mail'/>
                    <button className='btn btn-block p-20'>Recuperar</button>
                    <p className='message'>Está Registrado?</p><Link to="/login">Login</Link>
                </form>
            </div>
        </div>
    )
}
