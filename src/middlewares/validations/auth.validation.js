// * ARCHIVO A COMPLETAR
import { body } from "express-validator";
import { UserModel, ProfileModel } from "../../models/index.js";

export const registerValidation = [
  // TODO: 1. Validar username: obligatorio, entre 3 y 20 caracteres y único (UserModel).
  body("username").notEmpty().withMessage(""),
  // TODO: 2. Validar email: obligatorio, con formato válido y único.
  body("email").notEmpty().withMessage(""),
  // TODO: 3. Validar password: obligatoria, con mínimo de 8 caracteres.
  body("password").notEmpty().withMessage(""),
  // TODO: 4. Validar role: opcional y limitado a los roles permitidos.
  body("role").notEmpty().withMessage(""),
  // TODO: 5. Validar profile.employee_number: obligatorio y único (ProfileModel).
  body("profile.employee_number").notEmpty().withMessage(""),
  // TODO: 6. Validar profile.first_name y profile.last_name como obligatorios, y profile.phone como opcional.
  body("profile.first_name").notEmpty().withMessage(""),
  body("profile.last_name").notEmpty().withMessage(""),
  body("profile.phone").notEmpty().withMessage(""),
  // ? Las unicidades requieren una validación personalizada asíncrona.
];

export const loginValidation = [
  // TODO: 7. Validar email: obligatorio y con formato válido.
  // TODO: 8. Validar password: obligatoria.
];
