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

        "<H1><a href='iniciohistoria' class='click'><span id='span1'></span><span id='span2'></span><span id='span3'></span> \
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

	iniciohistoria: new undum.SimpleSituation(
      "<p><img src='media/img/curso.png' class='float_right'>Tienes las pilas recargadas tras unas increibles vacaciones de tres días. ¡Qué rápido pasa el tiempo!  \
	  Este cuatrimestre cursas la asignatura más difícil de la carrera. </p><p>Tienes que hacer todo lo por aprobar y tomar las decisiones correctas. Una tercera matrícula duele mucho.</p><p><a href='biblioteca'> Comenzar el cuatrimestre</a></p>", {
        enter: function(character, system, from) {
			system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
			);

        },
			heading: "Fin de las vacaciones",

      }
    ),
	iniciohistoria2: new undum.SimpleSituation(
      "<p><img src='media/img/curso.png' class='float_right'>Tienes las pilas recargadas tras unas increibles vacaciones de... ¡Un momento, esto ya lo has vivido!  \
	  Acabas de viajar al pasado tras suspender el examen. </p><p>Tienes que hacer todo lo por aprobar y tomar las decisiones correctas. Una tercera matrícula duele mucho.  No debes desaprovechar esta oportunidad</p><p><a href='biblioteca'> Volver a comenzar el cuatrimestre</a></p>", {
        enter: function(character, system, from) {
			system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
			);

        },
			heading: "Fin de las vacaciones",

      }
    ),
    ir_tutoria: new undum.SimpleSituation(
      "<p><img src='media/img/duda.png' class='float_right' style=\"max-width: 40%;\"> Nuestro estudiante se decidió\
          finalmente por ir a la tutoría. Al terminar la tutoría todo le quedo más claro\
           y pudo completar sin ninguna dificultad sus prácticas. <a href='estudiar'>¿Que hará ahora nuestro estudiante?</a></p>", {
        enter: function(character, system, from) {
			system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
			);
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
				 system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
               system.animateQuality("conocimiento", character.qualities.conocimiento+10);
             },

        heading: "Estudiar por mi cuenta",
        diplayOrder: 3,
        tags: ["tutoria"],

      }
    ),


    seguir_estudiando: new undum.SimpleSituation(
      "<p><img src='media/img/descansar.gif' class='float_right' style=\"max-width: 70%;\">Después de un día agotador\
        nuestro estudiante quiso seguir estudiando, al llevar todo el día estudiando y exigirse demasiado no solo no aprendió\
        nada sino que empezó a confundir términos, al no descansar adecuadamente su rendimiento académico bajo\
        a la mañana siguiente se despertó con varios <a href='debo_dejar_practica'>mensajes de un compañero</a></p>", {
        enter: function(character, system, from) {
		  system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
			);
          system.animateQuality("conocimiento", character.qualities.conocimiento-10);
          system.animateQuality("interes", character.qualities.interes-10);
        },

        heading: "Continuar estudiando",
        diplayOrder: 3,
        tags: ["estudiar"],

      }
    ),

    no_estudiar: new undum.SimpleSituation(
      "<p><img src='media/img/descansar.png' class='float_right' style=\"max-width: 45%;\">Al ver que no rendía más nuestro estudiante decidió dejar de  estudiar\
          e irse temprano a la cama, a la mañana siguiente se sentía más productivo y con ganas de afrontar nuevos\
          retos, al mirar el móvil tenia varios <a href='debo_dejar_practica'>mensajes de un compañero</a></p>",

            {
             enter: function(character, system, from) {
				 system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
               system.animateQuality("interes", character.qualities.interes+10);
             },

        heading: "Descansar",
        diplayOrder: 3,
        tags: ["estudiar"],

      }
    ),

    debo_dejar_practica: new undum.SimpleSituation(
      "<h1 class='transient'>Dejar las practicas</h1>\
      <p><img src='media/img/compañero.png' class='float_right' style=\"max-width: 45%;\">Un compañero de clase te pide las prácticas que terminaste la semana pasada, sabes que el profesor advirtió\
      en numerosas ocasiones que la copia de ejercicios esta castigada con un 0 en esa practica, pero tu no quieres que el compañéro\
      suspenda <a href='dejar_practica'>¿Debería dejársela?</a> o <a href='no_dejar_practica'>¿Debería no dejársela?</a>  </p>",

        {
			enter: function(character, system, from) {
				 system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
			},

        // heading: "Dejar Practica",
        // diplayOrder: 3,
        // tags: ["dejar_practica"],

      }
    ),

    dejar_practica: new undum.SimpleSituation(
      "<p> Asumes un riesgo para que tu compañero pueda aprobar esa practica ¿Te salió rentable? o ¿simplemente \
        echaste a perder todo tu trabajo?\
       <a href='tutoria'>¿Debería no dejarsela?</a>  </p>",

        {
          enter: function(character, system, from) {
			  system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
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
      "<p> Le explicas que lo mejor para los dos es no dejar la practica ya que no ayuda a ninguna de las partes\
        y pones en riego el trabajo de tu compañero, el compañero parece que lo entiendo y te pide ayuda para la próximas practicas\
        tu encantado le ayudaras.\
       <a href='tutoria'>¿Debería o no dejársela?</a>  </p>",

        {
			enter: function(character, system, from) {
				 system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
			},

        heading: "Dejar Practica",
        diplayOrder: 3,
        tags: ["dejar_practica"],

      }
    ),

    biblioteca: new undum.SimpleSituation(
    "<p>Ya que hoy nuestro estudiante decidió\
        ir a la biblioteca con un amigo. \
         </p><p><a href='dudasamigo'>Preguntar dudas que le surgen a su compañero.</a></p> \
         </p><p><a href='bibliomusica'>Ponerse musica para estudiar.</a></p> \
         </p><p><a href='verordenador'>Mirar ordenador un rato.</a></p>", {
      enter: function(character, system, from) {
		  system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
        system.animateQuality("interes", character.qualities.interes+10);
        system.animateQuality("conocimiento", character.qualities.conocimiento+10);
      },

      heading: "Biblioteca con un amigo",
      diplayOrder: 3,
      tags: ["biblioteca"],

    }
  ),

   dudasamigo: new undum.SimpleSituation(
   "<p>Le preguntamos a nuestro amigo por una duda que nos ha surgido mientras estudiabamos, y nos contesta\n\
    que lo que deberia ir es a <a href='particulares'>clases particulares.</a></p>", {
     enter: function(character, system, from) {
		 system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
       system.animateQuality("interes", character.qualities.interes+30);
       system.animateQuality("apuntes", character.qualities.apuntes+1);
       system.animateQuality("conocimiento", character.qualities.conocimiento+50);
     },

     heading: "Un día en la biblioteca",
     diplayOrder: 3,
     tags: ["dudasamigo"],

   }
 ),

 bibliomusica: new undum.SimpleSituation(
 "<p>Nos ponemos musica mientras estudiamos para evitar el murmullo de la <a href='biblioteca'>biblioteca</a></p>", {
   enter: function(character, system, from) {
	   system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
       );
     system.animateQuality("interes", character.qualities.interes-20);
     system.animateQuality("conocimiento", character.qualities.conocimiento+10);
   },

   heading: "Musica en la biblioteca",
   diplayOrder: 3,
   tags: ["bibliomusica"],

 }
),

verordenador: new undum.SimpleSituation(
"<p>Nos distraemos con el ordenador (Viendo Twitter,Memes...)asi que como vemos que esto no nos lleva a ninguna parte\n\
decidimos ir a dar <a href='irparticulares'>clases particulares</a> pero un momento...al entrar en Docencia Virtual un rato\n\
estoy viendo que se puede hacer una entrega de un trabajo <a href='voluntario'>voluntario.</a></p>", {
 enter: function(character, system, from) {
	 system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
   system.animateQuality("interes", character.qualities.interes-80);
   system.animateQuality("conocimiento", character.qualities.conocimiento-20);
 },
 heading: "Perder el tiempo en el PC",
 diplayOrder: 3,
 tags: ["verordenador"],
   }

),

particulares: new undum.SimpleSituation(
"<p>Nuestro estudiante toma la decisión de apuntarse a una academia para afrontar la asignatura.\n\
    pero mientras decide o no...piensa en <a href='verordenador'>distraerse mirando el ordenador.</a></p>", {
 enter: function(character, system, from) {
	 system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
   system.animateQuality("pasta", character.qualities.pasta-150);
 },
 heading: "Clases particulares",
 diplayOrder: 3,
 tags: ["particulares"],
   }

),

irparticulares: new undum.SimpleSituation(
    "<p>Nuestro estudiante se ha levantado productivo y va hacia la academia para mejorar en la asignatura</p>\
        <p><a href='voluntario'>Continuar.</a></p>", {
 enter: function(character, system, from) {
	 system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
   system.animateQuality("interes", character.qualities.interes+80);
   system.animateQuality("conocimiento", character.qualities.conocimiento+50);
 },
 heading: "Asiste a clases particulares",
 diplayOrder: 3,
 tags: ["irparticulares"],
   }

),

noirparticulares: new undum.SimpleSituation(
"<p>Nuestro estudiante se ha levantado vaguete y no va</p>", {
 enter: function(character, system, from) {
	 system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
   system.animateQuality("interes", character.qualities.interes-80);
   system.animateQuality("conocimiento", character.qualities.conocimiento-100);
 },
 heading: "No asiste a clases particulares",
 diplayOrder: 3,
 tags: ["noirparticulares"],
   }

),

    clase: new undum.SimpleSituation(
        "<p><img src='media/img/despertador.gif' class='float_right'>Son las ocho de la mañana y despues de desactivar cuatro alarmas por fín te levantas de la cama. Estás hecho polvo tras trasnochar haciendo la práctica de Desarrollo Ágil.\
        </p><p>Aún es prácticamente de noche, no ha salido apenas el sol. Vas a desayunar y no queda leche. Vaya manera de empezar el día.</p>\
        \
        <p >\Sin embargo, por lo menos parece que va a hacer una buena mañana. Te surje una duda existencial. Debes decidir entre <a href='clase1'>ir andando</a> o <a href='clase2'>ir en autobus</a> a clase.\
        </p> ",
        {
            heading: "Un Día Normal de clase",

            enter: function(character, system, to) {
				system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);

                system.setQuality("interes", character.qualities.interes + 2);
                system.setQuality("pasta", character.qualities.pasta - 30);


            }
        }

    ),
    clase1: new undum.SimpleSituation(
        "<p><img src='media/img/andando.png' class='float_right'>Misteriosamente te apetecía hacer ejercicio y has decidido bajar andando a la Universidad. Cojes la mochila y te aseguras de no olvidarte las llaves antes de salir de casa.</p>\
		<p>Te pegas una larga caminata de media hora hacia la Universidad de Jaén, podrías haberte buscado un piso más cercano. <p>Por el camino te encuentras un autobús de la línea que sueles cojer\
		averiado en mitad de la carretera. Suerte que has decidido ir andando. </p><p>Por fin, has llegado. Entras en el edificio A4 y a tu aula. Hoy explicaban uno de los temas más difíciles.\
       <p><a href='./tomarapuntes'>Tomar apuntes.</a></p> <p><a href='faltar'>Continuar historia.</a></p> ",
        {
            heading: "Decides ir a clase andando",
			enter: function(character, system, to) {
				system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);

                system.setQuality("interes", character.qualities.interes - 2);

            },
            actions: {
                "tomarapuntes": function (character, system, action) {
                    system.setCharacterText(
                        "<p>Objeto: Apuntes del tema 2.</p>"
                    );
                    system.setQuality("conocimiento", character.qualities.conocimiento + 10);
                    system.setQuality("interes", character.qualities.interes + 5);
                    system.setQuality("tema2", character.qualities.tema2 + 1);

                }
            },


        }

    ),

    clase2: new undum.SimpleSituation(
        "<p><img src='media/img/bus.png' class='float_right'>Has decidido ir en autobús, no te apetecía andar media hora hacia la Universidad. Cojes la mochila y te aseguras de no olvidarte las llaves antes de salir de casa.</p>\
		<p>Te dirijes hacia la parada de autobús mas cercana. Aunque vas escuchando música la espera se te hace infinita. Es bus ha llegado veinte minutos tarde. </p>\
		<p>Por fin estas dentro. Te sientas en el último asiento, cerca del motor. Tras dos minutos de trayecto se oye como un crujido en el motor y se detiene súbitamente.</p>\
		<p>El conductor dice que no puede arreglaro, te has quedao plantado en mitad de camino. El próximo bus de la línea llega en una hora. Solo te queda bajar andando. </p>\<p>Por fin llegas ha clase pero solo te da tiempo a dar 20 minutos de clase. Prácticamente como si no hubieras ido.\
           <p><a href='faltar'>Continuar historia.</a></p>",

		{
            heading: "Has decidido ir a clase andando",
            enter: function(character, system, to) {
				system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
                system.setCharacterText(
                    "<p>No has podido tomar apuntes del tema 2.</p>"
                );
                system.setQuality("conocimiento", character.qualities.conocimiento - 10);
                system.setQuality("pasta", character.qualitiespasta - 1);


            }

        }

    ),

     faltar: new undum.SimpleSituation(
         "<p><img src='media/img/pensar.png' class='float_right'>No te has planificado nada bien. Se te han juntado la práctica de Desarrollo Ágil con la de Concurrentes y Calidad del Software. Debes decicir entre <a href='faltar1'>faltar el miércoles</a> o <a href='faltar2'> faltar el jueves</a> para tener tiempo a hacer todas las prácticas.\
            </p><p>Ninguna de las dos es una buena decisión pero no te queda otra.</p>",
        {
            heading: "Tienes que faltar un día a clase",
            enter: function (character, system, to) {
				system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);

                system.setQuality("interes", character.qualities.interes - 3);
                system.setQuality("pasta", character.qualities.pasta - 10);


            }


        }

    ),
    faltar1: new undum.SimpleSituation(
        "<p>Hablando por WhatsApp con tu amigo Manolo te dice que el profesor ha explicado uno de los temas más difíciles. Además, han pasado lista.</p>\
          <p><a href='./pedirapuntes'>Pedir que te pase los apuntes.</a></p>\
          <p><a href='ir_tutoria'>Ir a la tutoría de mañana.</a></p>\
            <p><a href='no_ir_tutoria'>No ir a la tutoría de mañana.</a></p>",
        {
            heading: "Decides faltar el miércoles ",
			enter: function(character, system, to) {
				system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
                system.setCharacterText(
                    "<p>Han pasado lista y han hecho ejercicios.</p>"
                );
                system.setQuality("conocimiento", character.qualities.conocimiento - 15);
                system.setQuality("interes", character.qualities.interes - 5);


            },
            actions: {
                "pedirapuntes": function (character, system, action) {
                    system.setCharacterText(
                        "<p>Le has pedido apuntes del Tema 8 a Manolo.</p>"
                    );
                    system.setQuality("conocimiento", character.qualities.conocimiento + 5);
                    system.setQuality("interes", character.qualities.interes + 5);
                    system.setQuality("tema8", character.qualities.tema8 + 1);

                }
            }



        }

    ),
    faltar2: new undum.SimpleSituation(
        "<p>Hablando por WhatsApp con tu amigo Manolo te dice que se ha puesto a leer diapositivas y no te has perdido gran cosa.</p>\
        <p><a href='./pedirapuntes'>Pedir que te pase los apuntes.</a></p>\
          <p><a href='voluntario'>Continuar historia.</a></p>",
        {
            heading: "Decides faltar el jueves",
			enter: function(character, system, to) {
				system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
                system.setCharacterText(
                    "<p>No te has perdido gran cosa.</p>"
                );
                system.setQuality("conocimiento", character.qualities.conocimiento - 1);
                system.setQuality("interes", character.qualities.interes - 1);


            },
            actions: {
                "pedirapuntes": function (character, system, action) {
                    system.setCharacterText(
                        "<p>Le has pedido apuntes del Tema 9 a Manolo.</p>"
                    );
                    system.setQuality("conocimiento", character.qualities.conocimiento + 2);
                    system.setQuality("interes", character.qualities.interes + 3);
                    system.setQuality("tema9", character.qualities.tema9 + 1);

                }
            }


        }

    ),

    voluntario: new undum.SimpleSituation(
        "<p><img src='media/img/libro.png' class='float_right'>Estabas mirando Docencia Virtual tranquilamente y observas que hay una entrega de actividad voluntaria para dentro de cinco horas.\
        <p>Te surje la duda sobre si es obligatorio o no entregarla. Este tipo de actividades casi nunca tienen valor y además pone que es voluntaria.\
        <p>\ <p><a href='voluntario2'>Entregar el ejercicio.</a> </p><p><a href='voluntario1'>No entregar el ejercicio</a>. </p><p><a href='guia'>Mirar detalladamente</a> en la guía docente para salir de dudas.</p></p > ",
        {
            heading: "Decisión ejercicio voluntario",
            enter: function (character, system, to) {
				system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);


                system.setQuality("pasta", character.qualities.pasta - 10);


            },


        }

    ),

    guia: new undum.SimpleSituation(
        "<p>Realización de trabajos, casos o ejercicios | Realización de trabajos casos o ejercicios | Entrega de ejercicios 5.0%</p>\
        <p>Se te presenta una difícil decisión: <a href='voluntario2'>Entregar el ejercicio</a> o <a href='voluntario1'>No entregar el ejercicio</a>.</p>",
        {
            heading: "Guía docente de la asignatura",
            enter: function (character, system, to) {
				system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);
                system.setCharacterText(
                    "<p>No te has perdido gran cosa.</p>"
                );
                system.setQuality("conocimiento", character.qualities.conocimiento + 1);


            }


        }

    ),

    voluntario1: new undum.SimpleSituation(
        "<p>Para hacer el ejercicio a prisa prefieres no entregar nada. En más de una asignatura has acabado suspendiendo a pesar de haber entregado los ejercicios voluntarios.</p><p>Además el profesor podría haber avisado.</p>\
        <p><a href='clase'>Continuar.</a></p>",
        {
            heading: "Decides no entregar ejercicio voluntario",
            enter: function (character, system, to) {
				system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);

                system.setQuality("conocimiento", character.qualities.conocimiento - 5);
                system.setQuality("interes", character.qualities.interes - 5);


            }


        }

    ),

    voluntario2: new undum.SimpleSituation(
        "<p>Aunque queda poco y habías quedado para ir al cine decides ponerte a hacer el ejercicio.</p>\
        <p>Aprobar esta asignatura es el pricipal objetivo este año, harás todo lo que esté en tu mano.</p>\
        <p>Quizás si el profesor ve que has entregado todos los ejercicios volutarios te aprueba en caso de duda.</p>\
        <p><a href='clase'>Continuar.</a></p>",
        {
            heading: "Decides entregar ejercicio voluntario",
            enter: function (character, system, to) {
				system.setCharacterText(
                    "<p>Progreso del juego 0%</p>"
				);

                system.setQuality("conocimiento", character.qualities.conocimiento + 5);
                system.setQuality("interes", character.qualities.interes + 1);


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
    ),
    tema2: new undum.OnOffQuality(
        "Apuntes del Tema 2", { priority: "0003", group: 'progreso', onDisplay: "&#10003;" }
    ),
    tema8: new undum.OnOffQuality(
        "Apuntes del Tema 8", { priority: "0004", group: 'progreso', onDisplay: "&#10003;" }
    ),
    tema9: new undum.OnOffQuality(
        "Apuntes del Tema 9", { priority: "0004", group: 'progreso', onDisplay: "&#10003;" }
    ),
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
    character.qualities.tema2 = 0;
    character.qualities.tema8 = 0;
    character.qualities.tema9 = 0;
    system.setCharacterText("<p>Estado del personaje:</p>");
};
