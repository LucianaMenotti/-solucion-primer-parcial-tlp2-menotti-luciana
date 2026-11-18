// * ARCHIVO A COMPLETAR
import { UserModel, ProfileModel } from "../models/index.js";
import { hashPassword, comparePassword } from "../helpers/bcrypt.helper.js";
import { signToken } from "../helpers/jwt.helper.js";
import { matchedData } from "express-validator";

export const register = async (req, res) => {
  try {
    const {profile, password,...data} = matchedData(req)
    // TODO: 1. Hashear la password antes de guardarla (hashPassword).

    const hashedPassword = await hashPassword(password)

    //console.log(hashedPassword)
    // TODO: 2. Crear el user y su profile asociado.

    const newUser = await UserModel.create({...data,password : hashedPassword})

    await ProfileModel.create({...profile,user_id: newUser.id})

    // TODO: 3. Responder con código 201, un mensaje de éxito y devolver el usuario sin la password.
    return res.status(201).json({
      message:"se creo correctamente el usuario",
      user:{username:newUser.username,email:newUser.email, role: newUser.role}
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const login = async (req, res) => {
  try {
    // TODO: 1. Buscar el user por email y comparar la password (comparePassword).
    // TODO: 2. Firmar un JWT con el id y el role del user (signToken).
    // TODO: 3. Guardar el token en una cookie httpOnly llamada "token", responder con código 200 y un mensaje de éxito.
    // ? Considerar qué mensaje devolver ante credenciales inválidas.
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const logout = async (_req, res) => {
  try {
    // TODO: 1. Eliminar la cookie "token" y responder con código 204 sin devolver ningun mensaje.
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};
