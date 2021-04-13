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

        "<H1><a href='nuevojuego' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
                <span id='span4'></span><center>NUEVO JUEGO</center></a></H1> \
        <H1><a href='cargarjuego' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
                <span id='span4'></span><center>CARGAR JUEGO</center></a></H1> \
        <H1><a href='salir' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
                <span id='span4'></span><center>SALIR</center></p></H1>"
            ),
    nuevojuego: new undum.SimpleSituation(
            "<h1>Aqui iniciariamos un nuevo juego preguntandole al usuario su nombre.</h1>"
            ),
    cargarjuego: new undum.SimpleSituation(
            "<h1>Aqui cargariamos un juego que previamente se haya guardado.</h1>"
    ),
    salir: new undum.SimpleSituation(
            "<h1>Y aqui se volveria a la pantalla de inicio.</h1>"


    ),

    ir_tutoria: new undum.SimpleSituation(
      "<p>Nuestro estudiante se decidió\
          finalmente por ir a la tutoría. Al terminar la tutoría todo le quedo más claro\
           y pudo completar sin ninguna dificultad sus prácticas. <a href='estudiar'>¿Que hará ahora nuestro estudiante?</a></p>", {
        enter: function(character, system, from) {
          system.animateQuality("interes", character.qualities.interes+10);
          system.animateQuality("conocimiento", character.qualities.conocimiento+10);
        },

        heading: "Ir a tutoría",
        diplayOrder: 3,
        tags: ["tutoria"],

      }
    ),

    no_ir_tutoria: new undum.SimpleSituation(
      "<p>Nuestro estudiante se decicido\
          por no ir a la tutoría e intetar sacar la practica por si solo. Tras mucho tiempo y esfuerzo consigio\
          sacar la practica adelante\
           <a href='estudiar'>¿Que hará ahora nuestro estudiante?</a></p>", {
             enter: function(character, system, from) {
               system.animateQuality("conocimiento", character.qualities.conocimiento+10);
             },

        heading: "Estudiar por mi cuenta",
        diplayOrder: 3,
        tags: ["tutoria"],

      }
    ),


    seguir_estudiando: new undum.SimpleSituation(
      "<p>Después de un día agotador\
        nuestro estudiante quiso seguir estudiando, al llevar todo el dia estudiando y exigirse demasiado no solo no aprendio\
        nada sino que empezo a confudir terminos, al no descansar adecuadamente su rendimiento académico bajo\
        <a href='debo_dejar_practica'>¿Que hará ahora nuestro estudiante?</a></p>", {
        enter: function(character, system, from) {
          system.animateQuality("conocimiento", character.qualities.conocimiento-10);
          system.animateQuality("interes", character.qualities.interes-10);
        },

        heading: "Continuar estudiando",
        diplayOrder: 3,
        tags: ["estudiar"],

      }
    ),

    no_estudiar: new undum.SimpleSituation(
      "<p>Al ver que no rendía más nuestro estudiante decidió dejar de  estudiar\
          e irse temprano a la cama, a la mañana siguiente se sentía más productivo y con ganas de afrontar nuevos\
          retos  <a href='debo_dejar_practica'>¿Que hará ahora nuestro estudiante?</a></p>",

            {
             enter: function(character, system, from) {
               system.animateQuality("interes", character.qualities.interes+10);
             },

        heading: "Descansar",
        diplayOrder: 3,
        tags: ["estudiar"],

      }
    ),

    debo_dejar_practica: new undum.SimpleSituation(
      "<h1 class='transient'>Dejar las practicas</h1>\
      <p>Un compañero de clase te pide las practicas que terminaste la semana pasada, sabes que el profesor advirtio\
      en numerosas ocasiones que la copia de ejercicios esta castigada con un 0 en esa practica, pero tu no quieres que el compañéro\
      suspenda <a href='dejar_practica'>¿Debería dejarsela?</a> o <a href='no_dejar_practica'>¿Debería no dejarsela?</a>  </p>",

        {


        // heading: "Dejar Practica",
        // diplayOrder: 3,
        // tags: ["dejar_practica"],

      }
    ),

    dejar_practica: new undum.SimpleSituation(
      "<p> Asumes un riesgo para que tu compañero pueda aprobar esa practica ¿Te salió rentable? o simplemente \
        echaste a perder todo tu trabajo\
       <a href='tutoria'>¿Debería no dejarsela?</a>  </p>",

        {
          enter: function(character, system, from) {
            var aleatorio = Math.floor(Math.random() * 11);
            if (aleatorio > 5){
                system.animateQuality("interes", character.qualities.interes-20);
                system.setCharacterText("<p>El profesor me puso un 0 por copia</p>");
            }else{
                system.setCharacterText("<p>El profesor no se dio cuenta de que le deje las prácticas</p>");
            }


          },


        // heading: "Dejar Practica",
        // diplayOrder: 3,
        // tags: ["dejar_practica"],

      }
    ),

    no_dejar_practica: new undum.SimpleSituation(
      "<p> Le explicas que lo mejor para los dos es no dejar la practica ya que no ayuda a ningua de las partes\
        y pones en riego el trabajo de tu compañero, el compañero parece que lo entiendo y te pide ayuda para la proximas practicas\
        tu encantado le ayudaras.\
       <a href='tutoria'>¿Debería o no dejarsela?</a>  </p>",

        {


        heading: "Dejar Practica",
        diplayOrder: 3,
        tags: ["dejar_practica"],

      }
    ),
};

// ---------------------------------------------------------------------------
/* SITUACION DE INICIO DEL JUEGO. */

undum.game.start = "tutoria"
/* MODIFICADO RAMA ALBERTO (PRUEBAS) DE INICIO DEL JUEGO. */
//undum.game.start = "inicio";


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
