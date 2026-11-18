// * ARCHIVO A COMPLETAR
import { matchedData } from "express-validator";
import {
  ProjectModel,
  ProjectTechnologyModel,
  TechnologyModel,
  UserModel,
} from "../models/index.js";

export const createProject = async (req, res) => {
  try {
    // TODO: 1. Crear el project con los datos del body que ya pasaron la validación.

    const { technologies, ...data } = matchedData(req);

    // console.log(technologies);

    const newProject = await ProjectModel.create({ ...data });

    // ? Revisar de dónde debe salir el leader del proyecto.

    // TODO: 2. Asociar al project las technologies recibidas.

    technologies.forEach(async (technology) => {
      await ProjectTechnologyModel.create({
        project_id: newProject.id,
        technology_id: technology,
      });
    });
    // await ProjectTechnologyModel.create

    // TODO: 3. Responder con código 201 y el project con sus technologies y su leader.

    return res.status(201).json({
      message: "se creo correctamente el proyecto",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const getAllProjects = async (req, res) => {
  try {
    // TODO: 1. Listar todos los projects incluyendo su leader (sin la password) y sus technologies, y responder con código 200 y los projects..

    const projects = await ProjectModel.findAll({
      include: [
        {
          model: UserModel,
          as: "leader",
          attributes: { exclude: ["password"] },
        },
        {
          model: TechnologyModel,
          as: "technologies",
          attributes: {
            exclude: ["description", "createdAt", "updatedAt"],
          },
        },
      ],
    });

    return res.status(200).json({ projects });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const getMyProjects = async (req, res) => {
  try {
    // TODO: 1. Listar los projects cuyo leader sea el usuario logueado, incluyendo sus technologies, y responder con código 200 y los projects.
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const updateProject = async (req, res) => {
  try {
    // TODO: 1. Actualizar el project con los datos recibidos.
    const data = matchedData(req, { locations: ["body"] });
    const { id } = matchedData(req, { locations: ["params"] });

    const projectExit = await ProjectModel.findByPk(id);

    if (!projectExit) {
      return res.status(404).json({ message: "no se encontro el proyecto" });
    }

    const project = await projectExit.update(data);
    console.log(ver);
    // TODO: 2. Reemplazar sus technologies si vienen en el body.
    // TODO: 3. Responder con código 200 y el project actualizado, incluyendo su leader y sus technologies.
    return res.status(200).json({ message: "proyecto actualizado" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const deleteProject = async (req, res) => {
  try {
    // TODO: 1. Eliminar el project y responder con código 204 sin devolver ningún mensaje.
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};
