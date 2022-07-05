import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("Campo obrigatorio"),
  email: Yup.string().required("Campo obrigatorio").email("Email invalido"),
  cpf: Yup.number().required().positive().integer(),
  birthDate: Yup.date(),
  phone: Yup.number().required().positive().integer(),
  instagram: Yup.string().required("Campo obrigatorio"),
});
