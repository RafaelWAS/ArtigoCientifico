import { Link } from "react-router-dom";

export default function UpdatePassword(){
    return(
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form>
                    <h1 className="title p-20">Alterar senha</h1>

                    <input type="password" placeHolder='Senha'/>
                    <input type="password" placeHolder='Confirme Senha'/>
                    <button className='btn btn-block p-20'>Salvar</button>
                    <p className='message'>Acesso ao sistema<Link to="/login">Login</Link></p>
                </form>

            </div>
        </div>
    )
}
