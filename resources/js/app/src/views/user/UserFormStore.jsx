import {Fragment} from "react"
import axiosClient from "../../axiosClient";
import { useNavigate, Link } from "react-router-dom";
import { useValidarDadosUsuario } from "../../rules/UserValidationRules";
import Input from "../../components/input/Input";

export default function UserFormStore(){

    const navigate = useNavigate();

    const   {
            model,
            setModel,
            error,
            formValid,
            handleBlurField,
            handleChangeField,
    } = useValidarDadosUsuario();



    const onSubmit = (e) => {

        e.preventDefault();

        if(formValid()){
            axiosClient.post(`/user/store`, model)
                .then(()=>{
                    setModel({});
                    console.log("Usuário incluído com sucesso");
                    navigate('/user/index')
            }).catch((error)=>{
                console.log(error);
            });
        }

    }

    return(
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão do usuário</h1>


                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="p-20">

                            <Input
                                id = "name"
                                type = "text"
                                value = {model.name}
                                placeholder = "Nome do Usuário"
                                handleChangeField = {handleChangeField}
                                handleBlurField = {handleBlurField}
                                error = {error.name}
                                mensagem = {error.nameMensagem}
                            />

                        </div>

                        <div className="p-20">
                            <Input
                                id = "email"
                                type = "text"
                                value = {model.email}
                                placeholder = "E-mail do Usuário"
                                handleChangeField = {handleChangeField}
                                handleBlurField = {handleBlurField}
                                error = {error.email}
                                mensagem = {error.emailMensagem}
                            />
                        </div>

                        <div className="p-20">
                            <Input
                                id = "password"
                                type = "password"
                                value = {model.password}
                                placeholder = "Senha do Usuário"
                                handleChangeField = {handleChangeField}
                                handleBlurField = {handleBlurField}
                                error = {error.password}
                                mensagem = {error.passwordMensagem}
                                name = "password"
                            />
                        </div>

                        <button className="btn btn-add" to="/user/index">
                            Salvar
                        </button>
                        <Link type="button" className="btn btn-cancel" to="/user/index">
                            Cancelar
                        </Link>

                    </form>
                </div>
            </div>
        </Fragment>
    )
}
