// Verifica si la variable 'google' está definida
if (typeof google !== 'undefined') {
                    // Inicializa la biblioteca de Google Sign-In
                   // Inicializa Google Identity Services y configura la función de devolución de llamada
                    google.accounts.id.initialize({
                        client_id: '968114407319-ra479qdn3rgnnsr07n34rjjqhbvv26c7.apps.googleusercontent.com',
                        callback: handleCredentialResponse,
                        cancel_on_tap_outside: false,
                    });
                }
//maneja la respuesta despues de una autenticacion
function handleCredentialResponse(response) {
    if (response.credential) {
    // Si hay una credencial en la respuesta
      var credential = response.credential;
      var profile = response.profileObj;
      // Maneja la información de la credencial como desees
      console.log("ID de usuario:", credential.id);
      console.log("Nombre:", credential.name);
      console.log("Email:", credential.email);
      console.log(response);
      // Redirige a una URL específica después de manejar la respuesta
      window.location.href = 'https://www.youtube.com/watch?v=ld4nzao5XAc'
    }
  }
function handleSignOut() {
                    // Cerrar sesión usando GSI
                    google.accounts.id.disableAutoSelect();
                    google.accounts.id.prompt();
                }
// Verifica si la variable 'google' está definida
if (typeof google !== 'undefined') {
                    // Renderiza el botón de inicio de sesión
                    google.accounts.id.renderButton(document.querySelector('.g_id_signin'));
                }
  
