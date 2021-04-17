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
            
        "<H1><a href='clase' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
                <span id='span4'></span><center>NUEVO JUEGO</center></a></H1> \
        <H1><a href='faltar' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
                <span id='span4'></span><center>CARGAR JUEGO</center></a></H1> \
        <H1><a href='voluntario' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
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
    ///////////////ESCENAS JUAN///////////////
    clase: new undum.SimpleSituation(
        "<p>Son las ocho de la mañana y despues de desactivar cuatro alarmas por fín te levantas de la cama. Estabas hecho polvo tras trasnochar haciendo la práctica de Desarrollo Ágil\
        </p>Aún es prácticamente denoche, no ha salido apenas el sol. Vas a desayunar y no queda leche. Vaya manera de empezar el día.</p>\
        \
        <p >\Sin embargo, por lo menos parece que va a hacer una buena mañana. Te surje una duda existencial. Debes decidir entre <a href='clase1'>ir andando a clase</a> o <a href='clase2'>ir en autobus a clase</a>.\
        </p>",
        {
            heading: "Un Día Normal de clase",
           
            enter: function(character, system, to) {
                
                 system.setQuality("interes", character.qualities.interes+2);

   
            }
        }

    ),
    clase1: new undum.SimpleSituation(
        "<p>Misteriosamente te apetecía hacer ejercicio y has decidido bajar andando a la Universidad. Cojes la mochila y te aseguras de no olvidarte las llaves antes de salir de casa.</p>\
		Te pegas una larga caminata de media hora hacia la Universidad de Jaén, podrías haberte buscado un piso más cercano. <p>Por el camino te encuentras un autobús de la línea que sueles cojer\
		averiado en mitad de la carretera.<\p> Suerte que has decidido ir andando. <p>Por fin, has llegado. Encima puntual. Entras en el edificio A4 y entras en tu aula. Menos mal que has ido a clase, hoy explicaban uno de los temas más difíciles.",
        {
            heading: "Decides ir a clase andando",
			enter: function(character, system, to) {
                system.setCharacterText(
                    "<p>Has podido tomar apuntes del tema 2.</p>"
                );
                 system.setQuality("conocimiento", character.qualities.conocimiento+10);

   
            }
           
            
        }

    ),

    clase2: new undum.SimpleSituation(
        "<p>Has decidido ir en autobús, no te apetecía andar media hora hacia la Universidad. Cojes la mochila y te aseguras de no olvidarte las llaves antes de salir de casa.</p>\
		<p>Te dirijes hacia la parada de autobús mas cercana. Aunque vas escuchando música la espera se te hace infinita. Es bus ha llegado veinte minutos tarde. </p>\
		<p>Por fin estas dentro. Te sientas en el último asiento, cerca del motor. Tras dos minutos de trayecto se oye como un crujido en el motor y se detiene súbitamente.</p>\
		<p>El conductor dice que no puede arreglaro, te has quedao plantado en mitad de camino. El próximo bus de la línea llega en una hora. Solo te queda bajar andando. </p>\<p>Por fin llegas ha clase pero solo te da tiempo a dar 20 minutos de clase",
		
		{
            heading: "Has decidido ir a clase andando",
            enter: function(character, system, to) {
                system.setCharacterText(
                    "<p>No has podido tomar apuntes del tema 2.</p>"
                );
                system.setQuality("conocimiento", character.qualities.conocimiento - 10);
                system.setQuality("pasta", character.qualitiespasta - 1);

   
            }
            
        }

    ),

     faltar: new undum.SimpleSituation(
        "<p>No te has planificado nada bien. Se te han juntado la práctica de Desarrollo Ágil con la de Concurrentes y Calidad del Software. Debes decicir entre <a href='faltar1'>faltar el miércoles</a> o <a href='faltar2'>faltar el jueves</a>para tener tiempo a hacer todas las prácticas.</p>",
        {
            heading: "Tienes que faltar un día a clase"
           
            
        }

    ),
    faltar1: new undum.SimpleSituation(
        "<p></p>",
        {
            heading: "Decides faltar el miércoles ",
			enter: function(character, system, to) {
                system.setCharacterText(
                    "<p>Han pasado lista y han hecho ejercicios.</p>"
                );
                 system.setQuality("conocimiento", character.qualities.conocimiento-15);

   
            }
           
            
        }

    ),
    faltar2: new undum.SimpleSituation(
        "<p></p>",
        {
            heading: "Decides faltar el jueves",
			enter: function(character, system, to) {
                system.setCharacterText(
                    "<p>No te has perdido gran cosa.</p>"
                );
                 system.setQuality("conocimiento", character.qualities.conocimiento-1);

   
            }
           
            
        }

    ),

    voluntario: new undum.SimpleSituation(
        "<p>Estabas mirando Docencia Virtual tranquilamente y observas que hay una entrega de actividad voluntaria para dentro de cinco horas.\
        <p>Te surje la duda sobre si es obligatorio o no entregarla. Este tipo de actividades casi nunca tienen valor y además pone que es voluntaria.\
        <p>\ <a href='voluntario2'>Entregar el ejercicio</a> o <a href='voluntario1'>No entregar el ejercicio</a>. </p><p><a href='guia'>Mirar detalladamente</a> en la guía docente para salir de dudas.</p></p > ",
        {
            heading: "Decisión ejercicio voluntario"
           
            
        }

    ),

    guia: new undum.SimpleSituation(
        "<p>Realización de trabajos, casos o ejercicios | Realización de trabajos casos o ejercicios | Entrega de ejercicios 5.0%</p>\
        <p>Se te presenta una difícil decisión: <a href='voluntario2'>Entregar el ejercicio</a> o <a href='voluntario1'>No entregar el ejercicio</a>.</p>",
        {
            heading: "Guía docente de la asignatura",
            enter: function (character, system, to) {
                system.setCharacterText(
                    "<p>No te has perdido gran cosa.</p>"
                );
                system.setQuality("conocimiento", character.qualities.conocimiento + 1);


            }


        }

    ),

    voluntario1: new undum.SimpleSituation(
        "<p></p>",
        {
            heading: "Decides no entregar ejercicio voluntario",
            enter: function (character, system, to) {
                system.setCharacterText(
                    "<p>No te has perdido gran cosa.</p>"
                );
                system.setQuality("conocimiento", character.qualities.conocimiento - 5);


            }
           
            
        }

    ),

    voluntario2: new undum.SimpleSituation(
        "<p></p>",
        {
            heading: "Decides entregar ejercicio voluntario",
            enter: function (character, system, to) {
                system.setCharacterText(
                    "<p>No te has perdido gran cosa.</p>"
                );
                system.setQuality("conocimiento", character.qualities.conocimiento + 5);


            }
           
            
        }

    ),

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
