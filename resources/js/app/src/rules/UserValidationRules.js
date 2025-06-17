import useValidator from "../hook/useValidator";
import { USER, ERROR_USER } from "../types/User";

const PASSWORD_LENGTH = 8;

const userValidationRules = {

    name:(name)=>{
        let mensagens = [];
        if(!name || name.trim().length === 0) {
            mensagens.push('Obrigatório informar o nome do usuário');
        }

        return mensagens;
    },

    email:(email)=>{
        let mensagens = [];
        if(!email || email.trim().length === 0) {
            mensagens.push('Obrigatório informar um e-mail');
        }

        return mensagens;
    },

    password:(password)=>{
        let mensagens = [];
        if(!password || password.trim().length === 0){
            mensagens.push('Obrigatório informar a senha');
        }

        if(password && password.length < PASSWORD_LENGTH){
            mensagens.push('A senha deve conter no mínimo oito caracteres');
        }

        return mensagens;
    },

}

export const useValidarDadosUsuario = (initialModel, errorModel, validationRules) => {
    return useValidator(USER, ERROR_USER, userValidationRules);
}

