  /* tslint:disable:no-unused-variable */
  var admin = require("firebase-admin");
  import { initializeApp } from 'firebase/app';

  const firebaseConfig = {
      apiKey: "AIzaSyDiN_czXTUr_FG8_3YOv4_dfe-OsRmftaY",
      authDomain: "imper-col.f",
      databaseURL: "https://imper-col-default-rtdb.firebaseio.com",
      projectId: "imper-col",
      storageBucket: "imper-col.appspot.com",
      messagingSenderId: "675023029981",
      appId: "1:675023029981:web:414b8bbdfa647275c03d34",
      /* tslint:disable:no-unused-variable */
      measurementId: "G-L6D5RJ3KME"
          /* tslint:disable:no-unused-variable */

  };
  //initialize firebase


  var serviceAccount = require("path/to/serviceAccountKey.json");

  admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://imper-col-default-rtdb.firebaseio.com"
  });
  firebase.initializeApp(firebaseConfig);
  const database = getFirestore(app);


  //reference from the db

  var contactFormDB = firebase.database().ref("contact-form");

  document.getElementById("#contact-form").addEventListener("submit", submitForm);

  function submitForm(e) {
      e.preventDefault();

      var nombre = getElementVal('nombre');
      var Email = getElementVal('Email');
      var Asunto = getElementVal('Asunto');
      var mensaje = getElementVal('mensaje');

      saveMessages(nombre, Email, Asunto, mensaje);
  }

  const saveMessages = (nombre, Email, Asunto, mensaje) => {
      var newContactForm = contactFormDB.push();


      newContactForm.set({
          nombre: nombre,
          Email: Email,
          Asunto: Asunto,
          mensaje: mensaje,
      });
  }

  function getElementVal(id) {
      return document.getElementById(id).value;
  }