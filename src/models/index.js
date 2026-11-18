// * ARCHIVO A COMPLETAR
import { UserModel } from "./user.model.js";
import { ProfileModel } from "./profile.model.js";
import { ProjectModel } from "./project.model.js";
import { TechnologyModel } from "./technology.model.js";
import { ProjectTechnologyModel } from "./project_technology.model.js";

// TODO: 1. Definir la relación 1:1 entre User y Profile con los alias profile (en User) y user (en Profile), usando la FK user_id.

// hasOne(tiene uno) define el lado padre de una relacion 1:1
UserModel.hasOne(ProfileModel, {
  foreignKey: "user_id",
  as: "profile",
}); // la clave foranea "user_id" vive en la tabla Profile

//belongsTo(Pertenece a) define el lado hijo en la relacion 1:1 y 1:N
ProfileModel.belongsTo(UserModel, {
  foreignKey: "user_id",
  as: "user",
});

// TODO: 2. Definir la relación 1:N entre User y Project con los alias projects (en User) y leader (en Project), usando la FK leader_id.

//hasMany(Tiene mucho) define el lado padre de una relacion 1:N.
UserModel.hasMany(ProjectModel, {
  foreignKey: "leader_id",
  as: "projects",
});

ProjectModel.belongsTo(UserModel, {
  foreignKey: "leader_id",
  as: "leader",
});

// TODO: 3. Definir la relación N:M entre Project y Technology con los alias technologies y projects, a través de ProjectTechnologyModel y al mismo tiempo configurar la eliminación en cascada para ambos.

// belongsToMany(Pertenece a muchos) define una relacion N:M
ProjectModel.belongsToMany(TechnologyModel, {
  //A traves de: tabla intermedia
  through: ProjectTechnologyModel,
  foreignKey: "project_id",
  as: "technologies",
  onDelete: "CASCADE",
});

TechnologyModel.belongsToMany(ProjectModel, {
  through: ProjectTechnologyModel,
  foreignKey: "technology_id",
  as: "project_id",
  onDelete: "CASCADE",
});

// ? Los controladores base de users y technologies ya consultan estas relaciones por alias: deben coincidir.

export {
  UserModel,
  ProfileModel,
  ProjectModel,
  TechnologyModel,
  ProjectTechnologyModel,
};
