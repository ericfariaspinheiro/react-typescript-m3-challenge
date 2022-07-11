import * as Yup from "yup";

const cpfValidation = /^[\d]{3}[\s][\d]{3}[\s][\d]{3}[\s][\d]{2}$/;
const birthDateValidation =
  /^([0][1-9]|[1-2][\d]|[3][0-1])([\s][.][\s])([0][1-9]|[1][0-2])([\s][.][\s])([1][9][\d][\d]|[2][0]([0-1][\d]|[2][0-2]))$/;
const phoneValidation = /^[(][+]?[\d]{2}[)](\s)([\d]{5})([\s])[\d]{4}$/;
const instagramValidation = /^[@].+/;

const pageFrom = Yup.object().shape({
  name: Yup.string().min(2, "Nome inválido").required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatorio"),
  cpf: Yup.string().matches(cpfValidation, "Formato inválido").required("Campo obrigatório"),
  birthDate: Yup.string()
    .matches(birthDateValidation, "Formato inválido")
    .required("Campo obrigatório"),
  phone: Yup.string().matches(phoneValidation, "Formato inválido").required("Campo obrigatório"),
  instagram: Yup.string()
    .matches(instagramValidation, "Formato inválido")
    .required("Campo obrigatorio"),
  usePolicy: Yup.boolean().oneOf([true], "Os termos devem ser aceitos"),
});

const newsletter = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Campo obrigatorio"),
});

export { pageFrom, newsletter };
