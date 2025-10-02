const Joi = require("joi"); // ✅ Capital 'J'

exports.createValidator = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  artist: Joi.string().min(3).max(50).required(),
  category: Joi.string().min(3).max(50).required(),
  album: Joi.string().min(3).max(50).required(),
  year: Joi.number().min(1900).max(new Date().getFullYear()).required(),
});

exports.updateValidator = Joi.object({
  title: Joi.string().min(3).max(30).optional(),
  artist: Joi.string().min(3).max(50).optional(),
  category: Joi.string().min(3).max(50).optional(),
  album: Joi.string().min(3).max(50).optional(),
  year: Joi.number().min(1900).max(new Date().getFullYear()).optional(),
});

exports.validate = (schema, data) => {
  const { error, value } = schema.validate(data, { abortEarly: false });
  if (error) {
    return {
      success: false,
      errors: error.details.map((err) => ({
        field: err.path[0],
        message: err.message,
      })),
    };
  }
  return { success: true, value };
};
