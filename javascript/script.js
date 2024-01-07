function handleCredentialResponse(response) {
    if (response.credential) {
      var credential = response.credential;
      var profile = response.profileObj;
      // Maneja la información de la credencial como desees
      console.log("ID de usuario:", credential.id);
      console.log("Nombre:", credential.name);
      console.log("Email:", credential.email);
      console.log(response);
    }
  }
  
  // Inicializa Google Identity Services y configura la función de devolución de llamada
  google.accounts.id.initialize({
    client_id: '968114407319-ra479qdn3rgnnsr07n34rjjqhbvv26c7.apps.googleusercontent.com',
    callback: handleCredentialResponse,
    cancel_on_tap_outside: false,
  });
 function handleSignOut() {
                    // Cerrar sesión usando GSI
                    google.accounts.id.disableAutoSelect();
                    google.accounts.id.prompt();
                }
  
  // Renderiza el botón de Inicio de Sesión de Google
  google.accounts.id.renderButton(document.querySelector('.g_id_signin'));
  
