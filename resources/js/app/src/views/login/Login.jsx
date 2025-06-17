import { createRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../axiosClient";
import { useLogin } from '../../context/ContextProvider'
import { useValidarDadosLogin } from "../../rules/LoginValidationRules";
import MensagemErro from "../../components/mensagens/mensagemErro";


export default function Login(){



    const   {
                model,
                error,
                formValid,
                handleBlurField,
                handleChangeField,
            } = useValidarDadosLogin();

    const navigate = useNavigate();

    const { _setToken, _setUser } = useLogin();

    const [message, setMessage] = useState(null);

    const getInputClass = (error) => {
        if (error){
            return "form-control is-invalid";
        }
        else{
            if(error === false){
                return "form-control is-valid";
            }
        }
        return "form-control";
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(formValid()){

            const login = {
                email: model.email,
                password: model.password,
            }

            axiosClient.post('/login', login)
                .then(({data})=>{
                    console.log(data);
                    _setToken(data.token);
                    _setUser(data.user);
                    navigate('/dashboard');
                })
                .catch((erro)=>{
                    console.log(erro);
                })

            setMessage('login realizado com sucesso');
        }
    }

    return(
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title p-20">Acesso ao Sistema</h1>
                    {
                        message &&
                        <div className="alert">
                            <p>{message}</p>
                        </div>
                    }
                    <div className="p-20">
                        <input  type="text"
                                placeholder='E-mail'
                                className={getInputClass(error.email)}
                                name="email"
                                value={model.email}
                                onChange={handleChangeField}
                                onBlur={handleBlurField}
                                />

                        {
                        <MensagemErro
                            error = {error.email}
                            mensagem = {error.emailMensagem}
                        />

                        /* {
                            error.email ? (
                                <div className="invalid-feedback">
                                    {
                                        error.emailMensagem.map((mens, index) => {
                                            return (
                                                <p key={index}>
                                                    <span style={{ margin: "0", color: "red" }}>{mens}</span>
                                                </p>
                                            );
                                        })
                                    }
                                </div>
                            ) : null }*/
                        }

                    </div>
                    <div className="p-20">
                        <input  type="password"
                                placeholder='Senha'
                                className={getInputClass(error.password)}
                                name="password"
                                value={model.password}
                                onChange={handleChangeField}
                                onBlur={handleBlurField}
                                />

                        {
                        <MensagemErro
                            error = {error.password}
                            mensagem = {error.passwordMensagem}
                        />
                            /*error.password ? (
                                <div className="invalid-feedback">
                                    {
                                        error.passwordMensagem.map((mens, index) => {
                                            return (
                                                <p key={index}>
                                                    <span style={{ margin: "0", color: "red" }}>{mens}</span>
                                                </p>
                                            );
                                        })
                                    }
                                </div>
                            ) : null */
                        }

                    </div>
                    <button type="onSubmit" className='btn btn-block p-20'>Login</button>
                    <p className='message'>Não está Registrado<Link to="/register">Criar nova conta</Link></p>
                </form>

            </div>
        </div>
    )
}
