// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//!SI DESEAS TRABAJAR CON MAS SERVICIOS SI POR EJEMPLO: QUISIERAS TRABAJAR CON AUTENTIFICACION VAS A LA DOCUMENTACION Y SEGUIDO A LA IMPORTACION DE LA LINEA DICHO SERVICIO

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};
//* POR MOTIVIOS DE SEGURIDAD NO DEBE QUEDAS DESPROTEGIA LA INFORMACION SENSIBLE QUE TIENES AQUI. POR ESO VAMOS A TRABAJAR CON "variables locales" CREAMOS EN LA RAIZ DE NUESTRO PROYECTO: a)- CREAS UN ARCHIVO LLAMADO ".env.local" ALLÍ VAMOS A CREAR UNA VARIABLES DE ABIENTE QUE VAN A CONTENER LOS VALORES QUE NO QUEREMOS QUE SEAN VISTOS b)- LUEGO COPIAMOS DICHA INFORMACION SENSIBLE Y LAS LLEVAMOS A ".env.local" c)-LUEGO VAS A REAMPLAZAR DICHA INFORMACION SENSIBLE POR LAS VARIABLES QUE CREASTE EN ".env.local"
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//*CREAMOS UN VARIABLE "db" = (base de datos) y llamamos la funcion "getFirestore" y dentro le pasamos nuestra aplicacion (app) con eso ya podremos TRABAJAR CON "firebase" CON DICHA VARIABLE

export const db = getFirestore(app);

//LUEGO EXPORTAMOS DE MANERA DEFAULT "db" COMO SE TRABAJA EN REACT

export default db;
