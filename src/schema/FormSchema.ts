import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().min(2, "Nome inválido").required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatorio"),
  cpf: Yup.string().required("Campo obrigatório"),
  birthDate: Yup.string().required("Campo obrigatório"),
  phone: Yup.string().required("Campo obrigatório"),
  instagram: Yup.string().required("Campo obrigatorio"),
  usePolicy: Yup.boolean().oneOf([true], "Os termos devem ser aceitos"),
});
