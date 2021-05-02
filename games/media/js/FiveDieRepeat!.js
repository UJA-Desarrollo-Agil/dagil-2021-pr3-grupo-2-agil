var nombreUsuario;
var claveUsuario;

function ir() {
    window.alert('Para una experiencia mas personalizada, este juego registra usuario y contraseña.\n\
                     Si aun no lo ha hecho, solo le llevara unos segundos...');
}
function ir2() {
    nombreUsuario = document.getElementById('nombre').value;
    claveUsuario = document.getElementById('password').value;
    window.alert('Bienvenido ' + nombreUsuario + ', su nombre y clave han quedado registrados. Acepte y pulse ADELANTE para continuar.');
    return nombreUsuario;
}

/* IDENTIFICADOR UNICO. Principalmente se usa para los juegos largos
 * en los que tienes que guardar la partida, para que se sepa en todo momento
 * quien y por donde va la trama del juego. */
undum.game.id = "be3d95b6-cbc7-48c6-8e6c-49837ba9113e";

/* VERSION DEL JUEGO. Aqui se controlan las partidas guardadas. Evidentemente,
 * una partida guardada, al cambiar la version del juego, si luego la cargas
 * no va a funcionar. */
undum.game.version = "2.0";

/* Variable usada para Web responsive. */
undum.game.mobileHide = 2000;

/* Variable la opcion de velocidad del fade out. */
undum.game.fadeSpeed = 1500;

/* Variable que cambia la velocidad de deslizamiento al pulsar una opcion. */
undum.game.slideUpSpeed = 500;



/* SITUACIONES DEL JUEGO. CADA UNA CON UN UNICO ID. */
undum.game.situations = {
    inicio: new undum.SimpleSituation(
            "<H1><a href='nuevojuego' class='click' onclick='ir()'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
                <span id='span4'></span><center>NUEVO JUEGO</center></a></H1> \
        <H1><a href='cargarjuego' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
                <span id='span4'></span><center>CARGAR JUEGO</center></a></H1> \
        <H1><a href='salir' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
                <span id='span4'></span><center>SALIR</center></p></H1>"
            ),
    nuevojuego: new undum.SimpleSituation(
            "<form name='formulario' action=''>\
            <h3><div><label for='nombre'>Nombre</label><input type='text' name='nom' id='nombre' value= '' class='marco'></label></div></h3>\
            <h3><div><label for='password'>Contraseña</label><input type='password' name='pass' id='password' value= '' class='marco'></label></div></h3>\
            <center><input type='button' value='ACEPTAR' onclick='ir2()' VSPACE='40' class='marco'>\
            </FORM></center>\
            <center><H1><a href='bienvenida' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
                <span id='span4'></span>Adelante</a></H1>",
            {
                heading: "_____Registro_____"
            }
    ),
    bienvenida: new undum.SimpleSituation(
            function ir3() {
                const usu = document.getElementById('nombre').value;
                const pass = document.getElementById('password').value;
                return "<p><h1>Bienvenido " + usu + ", que sepas que tu clave es: " + pass + ", disfruta del juego.</h1></p>\
                        <p>Y pensaba " + usu + "...<a href='nueva' class='marco'>podre cambiar de pagina?</a> estando el\
                        hiperenlace dentro del return de una funcion??</p>";
            }
    ),
    nueva: new undum.SimpleSituation(
            "<p><h1>Pues si!!! Jajajajaja</h1></p>\
             <p>Pero la putada es que cada vez que tengamos que hacer referencia al usu, vamos a tener que meter lo que vayamos\
             a poner de situation dentro del return de una funcion como la go3() xk el scope de la variable es dentro de la funcion\n\
             y no he encontrado la manera de sacarla fuera. Ah, los enlaces con class='marco' estan muy chulos ya estan en el CSS.</p>"
            

            ),
    salir: new undum.SimpleSituation(
            "<h1>Inicio.</h1>",
            {
                enter: function () {
                    location.reload();
                }
            }
    )
};

// ---------------------------------------------------------------------------
/* SITUACION DE INICIO DEL JUEGO. */
undum.game.start = "inicio";


// ---------------------------------------------------------------------------
/*AQUI SE DEFINEN LAS CUALIDADES DEL PERSONAJE. */
undum.game.qualities = {
    interes: new undum.IntegerQuality(
            "Interés", {priority: "0001", group: 'status'}
    ),
    conocimiento: new undum.IntegerQuality(
            "Conocimiento", {priority: "0001", group: 'status'}
    ),
    pasta: new undum.IntegerQuality(
            "Pasta", {priority: "0003", group: 'inventario'}
    ),
    suspenso: new undum.OnOffQuality(
            "Suspenso", {priority: "0001", group: 'progreso', onDisplay: "&#10003;"}
    ),
    aprobado: new undum.OnOffQuality(
            "Aprobado", {priority: "0002", group: 'progreso', onDisplay: "&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* GRUPOS DE CUALIDADES. */
undum.game.qualityGroups = {
    status: new undum.QualityGroup('Habilidades', {priority: "0001"}),
    inventario: new undum.QualityGroup('Inventario', {priority: "0002"}),
    progreso: new undum.QualityGroup('Progreso', {priority: "0003"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function (character, system) {
    character.qualities.interes = 50;
    character.qualities.conocimiento = 0;
    character.qualities.pasta = 200;
    character.qualities.suspenso = 1;
    character.qualities.aprobado = 0;
    system.setCharacterText("<p>Estado del personaje:</p>");
};
