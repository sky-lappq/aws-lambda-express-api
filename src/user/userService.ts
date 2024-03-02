import Joi from "joi";

const userCreateSchema = Joi.object({
  username: Joi.string().required().max(40),
  age: Joi.number().required()
})

const test = () => {
  console.log("User service test function");
}

const validate = (data: any): boolean => {
  const { error } = userCreateSchema.validate(data);
  return !!error
}

export default {
  test,
  validate
}