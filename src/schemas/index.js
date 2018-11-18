/* Importaciones */
import api from '../api/api';
import { schema, normalize } from "normalizr";
// defino un esquema de mis habilidades
const skill = new schema.Entity("skill", {}, {
    "idAttribute": "id",
    "processStrategy": ( value, parent, key ) => ({ ...value, "person": parent.id })
});
// defino un esquema de mis certificaciones
const certification = new schema.Entity("certification", {}, {
    "idAttribute": "id",
    "processStrategy": (value, parent, key) => ({ ...value, "person": parent.id })
});
// defino el esquema de la persona que conecta las habilidades y las certificaciones con la informacion personal
const person = new schema.Entity("personalInformation", {
    "skills": new schema.Array(skill),
    "certifications": new schema.Array(certification)
});
// conecta todo
const personalInformation = { "person": new schema.Object(person) };
// normalizo los datos
const normalizedData = normalize(api, personalInformation);
// exporto los datos normalizados
export default normalizedData;


