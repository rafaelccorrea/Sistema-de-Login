import * as yup from 'yup';
import { MessagesValidations as messages } from '../constants';

const User = {

  signin: yup.object({
    login: yup
      .string()
      .required(messages.required)
      .min(11, messages.min)
      .max(100, messages.max),
  }),
  signup: yup.object({
    name: yup.string().required(messages.required),
    email: yup.string().required(messages.required),
    cpf: yup.string().required(messages.required).length(11, messages.length),
    cellphone: yup
      .string()
      .required(messages.required)
      .length(11, messages.length),
    password: yup.string().required(messages.required),
  }),
  
  };
  
  export default User;