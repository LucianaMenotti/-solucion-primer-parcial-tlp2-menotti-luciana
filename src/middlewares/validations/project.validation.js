// * ARCHIVO A COMPLETAR
import { body, param } from "express-validator";
import {
  ProjectModel,
  TechnologyModel,
  UserModel,
} from "../../models/index.js";

export const createProjectValidation = [
  // TODO: 1. Validar code: obligatorio y único (ProjectModel).
  body("code").notEmpty().withMessage("este campo no puee estar vacio"),
  // TODO: 2. Validar name y description como obligatorios.
  body("name").notEmpty().withMessage("este campo no puee estar vacio"),
  body("description").notEmpty().withMessage("este campo no puee estar vacio"),
  // TODO: 3. Validar status: opcional y limitado a los estados permitidos.
  body("status").notEmpty().withMessage("este campo no puee estar vacio"),
  // TODO: 4. Validar start_date como fecha válida y budget como número positivo, ambos obligatorios.
  body("start_date").notEmpty().withMessage("este campo no puee estar vacio"),
  body("budget").notEmpty().withMessage("este campo no puee estar vacio"),
  // TODO: 5. Validar leader_id: debe existir y pertenecer a un usuario activo (UserModel).
  body("leader_id").notEmpty().withMessage("este campo no puee estar vacio"),
  // TODO: 6. Validar technologies: lista de ids que existan (TechnologyModel).
  body("technologies").notEmpty().withMessage("este campo no puee estar vacio"),
  // ? Un usuario eliminado lógicamente no puede ser líder: comprobar que la búsqueda lo deje afuera.
];

export const updateProjectValidation = [
  param("id").notEmpty(),
  // TODO: 7. Validar code como opcional y único, excluyendo el propio proyecto que se edita.
  body("code").optional(),
  // TODO: 8. Validar name y description como opcionales y no vacíos.
  body("name").optional().notEmpty(),
  body("description").optional().notEmpty(),
  // TODO: 9. Validar status, start_date y budget como opcionales, con las mismas reglas que al crear.
  body("status").optional(),
  body("start_date").optional(),
  body("budget").optional(),
  // TODO: 10. Validar leader_id como opcional, existente y de un usuario activo.
  body("leader_id").optional(),
  // TODO: 11. Validar technologies como opcional, con ids que existan.
  body("technologies").optional(),

  // ? Para saber qué proyecto se edita, el id se obtiene de los parámetros de la ruta (req.params).
];
