var nombreUsuario;
function ir() {
    window.alert('Para una experiencia mas personalizada, este juego registra usuario y contraseña. Si aun no lo ha hecho, solo le llevara unos segundos...\n\
                  Si tiene guardada la partida, le llevaré hasta ella!!\n\
 Volvera al principio tras pulsar en el boton Borrar!!');
}
/* IDENTIFICADOR UNICO. Principalmente se usa para los juegos largos
 * en los que tienes que guardar la partida, para que se sepa en todo momento
 * quien y por donde va la trama del juego. Aqui se captura tanto el nombre del usuario
 * como su ID, es decir, en este caso su contraseña. */


function ir2() {
    nombreUsuario = document.getElementById('nombre').value;
    undum.game.id = document.getElementById('password').value;
    window.alert('Bienvenido ' + nombreUsuario + ', su nombre y clave han quedado registrados. Acepte y vaya al Menu del Juego para continuar.');
    return nombreUsuario;
}

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = 1111;

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
            "<form name='formulario' action=''>\
            <h3><div><label for='nombre'>Nombre</label><input type='text' name='nom' id='nombre' value= '' class='marco'></label></div></h3>\
            <h3><div><label for='password'>Contraseña</label><input type='password' name='pass' id='password' value= '' class='marco'></label></div></h3>\
            <center><input type='button' value='ACEPTAR' onclick='ir2()' VSPACE='40' class='marco'>\
            </FORM></center>\
            <center><H1><a href='menu' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
                <span id='span4'></span>Menu del Juego</a></H1>",
            {
                heading: "_____Identificación_____"
            }
    ),
    menu: new undum.SimpleSituation(
            "<H1><a href='bienvenida' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
                <span id='span4'></span><center>NUEVO JUEGO</center></a></H1> \
        <H1><a href='cargarjuego' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
                <span id='span4'></span><center>CARGAR JUEGO</center></a></H1> \
        <H1><a href='salir' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
                <span id='span4'></span><center>SALIR</center></p></H1>"
            ),
    bienvenida: new undum.SimpleSituation(
            function ir3() {
                return "<p><h1>Bienvenido!!</h1></p>\
                        <p><a href='nueva' class='marco'>Cambio de pagina</a></p>";
            }
    ),
    nueva: new undum.SimpleSituation(
            "<p><h1><a href='nueva2' class='marco'>podre cambiar de pagina?</a></h1></p>"
            ),
    nueva2: new undum.SimpleSituation(
            "<p><h1><a href='nueva3' class='marco'>Seguire cambiando de pagina?</a></h1></p>"
            ),
    nueva3: new undum.SimpleSituation(
            "<p><h1><a href='nueva4' class='marco'>JEJEJEJEJEJE</a></h1></p>"
            ),
    cargarjuego: new undum.SimpleSituation(
            "<p><h1>Por aqui te quedastes!!!!</h1></p>",
            {
                enter: function () {
                    var clave = document.getElementById('password').value;
                    if (undum.game.id === clave) {
                        window.alert('No se han encontrado datos guardados.');
                        location.reload();
                    }
                }
            }
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
