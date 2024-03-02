import Joi from "joi";
import {sign} from "jsonwebtoken"

interface Login {
  username: string;
  password: string;
}

const adminLoginSchema = Joi.object({
  username: Joi.string().required().max(40),
  password: Joi.string().required()
})

const test = () => {
  console.log("Admin service test function");
}

const validate = (data: any): boolean => {
  const { error } = adminLoginSchema.validate(data);
  return !!error
}

const login = (data: Login) => {
  if (data.username === "admin" && data.password === "123456") {
    return sign({ username: 'admin', exp: Math.floor(Date.now() / 1000) + 60 * 60 }, 'secret-string');
  }
}

export default {
  test,
  validate,
  login,
}