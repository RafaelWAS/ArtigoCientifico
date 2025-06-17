import { Link } from "react-router-dom";

export default function SignUp(){



    return(
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form>
                    <h1 className="title p-20">Registre sua conta</h1>

                    <input type="text" placeHolder='Nome'/>
                    <input type="text" placeHolder='E-mail'/>
                    <input type="password" placeHolder='Senha'/>
                    <input type="password" placeHolder='Confirme Senha'/>
                    <button className='btn btn-block p-20'>Salvar</button>
                    <p className='message'>Está Registrado?<Link to="/login">Login</Link></p>
                </form>

            </div>
        </div>
    )
}
