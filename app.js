/* ═══════════════════════════════════════════════════════
   LEXICON PRO — app.js
   Modos: Vocabulario · Traducción · Tiempos Verbales
═══════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────
   BANCO 1 · VOCABULARIO (100 palabras C1-C2)
───────────────────────────────────────────────────── */
const VOCAB = [
  {word:"Abstruse",     pron:"/æbˈstruːs/",     type:"adjective", meanings:["abstruso","difícil de entender","oscuro","incomprensible"], hint:"Describe algo muy difícil de comprender", example:"His abstruse theories confused even seasoned academics."},
  {word:"Acrimony",     pron:"/ˈækrɪməni/",     type:"noun",      meanings:["acritud","amargura","hostilidad"], hint:"Amargura o resentimiento en el trato", example:"The divorce was filled with acrimony that lasted for years."},
  {word:"Alacrity",     pron:"/əˈlækrɪti/",     type:"noun",      meanings:["presteza","prontitud","diligencia","entusiasmo"], hint:"Rapidez y entusiasmo al hacer algo", example:"She accepted the challenge with alacrity."},
  {word:"Ambivalent",   pron:"/æmˈbɪvələnt/",   type:"adjective", meanings:["ambivalente","indeciso","con sentimientos contradictorios"], hint:"Tener sentimientos contradictorios hacia algo", example:"She felt ambivalent about leaving her hometown."},
  {word:"Anachronism",  pron:"/əˈnækrənɪzəm/",  type:"noun",      meanings:["anacronismo","algo fuera de su época"], hint:"Algo que no pertenece a su tiempo", example:"Using a typewriter in 2024 is a charming anachronism."},
  {word:"Anathema",     pron:"/əˈnæθɪmə/",      type:"noun",      meanings:["anatema","maldición","algo detestado"], hint:"Algo que se odia o rechaza intensamente", example:"Dishonesty was anathema to her strict moral code."},
  {word:"Antipathy",    pron:"/ænˈtɪpəθi/",     type:"noun",      meanings:["antipatía","aversión","hostilidad"], hint:"Sentimiento de rechazo o aversión", example:"His antipathy toward authority was evident from a young age."},
  {word:"Arcane",       pron:"/ɑːrˈkeɪn/",      type:"adjective", meanings:["arcano","misterioso","esotérico","secreto"], hint:"Conocido solo por unos pocos", example:"The ritual involved arcane symbols understood only by initiates."},
  {word:"Arduous",      pron:"/ˈɑːrdʒuəs/",     type:"adjective", meanings:["arduo","difícil","laborioso","agotador"], hint:"Que requiere mucho esfuerzo", example:"The arduous climb took them three days to complete."},
  {word:"Assiduous",    pron:"/əˈsɪdjuəs/",     type:"adjective", meanings:["asiduo","diligente","perseverante"], hint:"Que trabaja de forma constante y cuidadosa", example:"His assiduous efforts finally paid off with the promotion."},
  {word:"Banal",        pron:"/bəˈnɑːl/",       type:"adjective", meanings:["banal","trivial","vulgar","ordinario"], hint:"Tan común que resulta aburrido", example:"The film offered only banal observations about modern life."},
  {word:"Bellicose",    pron:"/ˈbelɪkəʊs/",     type:"adjective", meanings:["belicoso","agresivo","combativo"], hint:"Inclinado a pelear o provocar conflictos", example:"His bellicose rhetoric alarmed the neighboring states."},
  {word:"Bombastic",    pron:"/bɒmˈbæstɪk/",    type:"adjective", meanings:["bombástico","grandilocuente","pomposo"], hint:"Lenguaje inflado y pretencioso", example:"His bombastic speech failed to impress the audience."},
  {word:"Capricious",   pron:"/kəˈprɪʃəs/",     type:"adjective", meanings:["caprichoso","voluble","impredecible"], hint:"Que cambia de opinión sin razón aparente", example:"The capricious weather ruined their picnic plans."},
  {word:"Caustic",      pron:"/ˈkɔːstɪk/",      type:"adjective", meanings:["cáustico","mordaz","sarcástico"], hint:"Dicho que quema o hiere con ironía", example:"Her caustic wit intimidated her colleagues."},
  {word:"Chicanery",    pron:"/ʃɪˈkeɪnəri/",    type:"noun",      meanings:["trampas","engaños","artimañas"], hint:"Engaño mediante trucos astutos", example:"The lawyer was disbarred for chicanery in the courtroom."},
  {word:"Circumspect",  pron:"/ˈsɜːkəmspekt/",  type:"adjective", meanings:["circunspecto","cauteloso","prudente"], hint:"Muy cuidadoso antes de actuar", example:"He was circumspect about sharing his personal views."},
  {word:"Clandestine",  pron:"/klænˈdestɪn/",   type:"adjective", meanings:["clandestino","secreto","encubierto"], hint:"Hecho en secreto, a escondidas", example:"They held clandestine meetings in the basement."},
  {word:"Cogent",       pron:"/ˈkəʊdʒənt/",     type:"adjective", meanings:["convincente","sólido","contundente"], hint:"Argumentación lógica y convincente", example:"She made a cogent case for reforming the policy."},
  {word:"Compunction",  pron:"/kəmˈpʌŋkʃən/",  type:"noun",      meanings:["remordimiento","escrúpulo","arrepentimiento"], hint:"Sentimiento de culpa o remordimiento", example:"He fired his staff without a shred of compunction."},
  {word:"Contemptuous", pron:"/kənˈtemptʃuəs/", type:"adjective", meanings:["despectivo","desdeñoso","altanero"], hint:"Que muestra desprecio hacia alguien", example:"She gave him a contemptuous look and walked away."},
  {word:"Convoluted",   pron:"/ˈkɒnvəluːtɪd/",  type:"adjective", meanings:["complicado","enrevesado","intrincado"], hint:"Excesivamente complicado o difícil de seguir", example:"The plot of the novel was too convoluted to follow."},
  {word:"Cupidity",     pron:"/kjuːˈpɪdɪti/",   type:"noun",      meanings:["codicia","avaricia","ambición desmedida"], hint:"Deseo excesivo de riqueza o poder", example:"Corporate cupidity led to the financial collapse."},
  {word:"Dauntless",    pron:"/ˈdɔːntləs/",     type:"adjective", meanings:["intrépido","audaz","sin miedo"], hint:"Que no se intimida ante el peligro", example:"The dauntless explorer ventured into uncharted territory."},
  {word:"Decorum",      pron:"/dɪˈkɔːrəm/",     type:"noun",      meanings:["decoro","decencia","comportamiento apropiado"], hint:"Comportamiento apropiado a las normas sociales", example:"The ceremony was conducted with great decorum."},
  {word:"Deleterious",  pron:"/ˌdelɪˈtɪəriəs/", type:"adjective", meanings:["deletéreo","perjudicial","dañino"], hint:"Que causa daño, especialmente a la salud", example:"Smoking has deleterious effects on lung health."},
  {word:"Denigrate",    pron:"/ˈdenɪɡreɪt/",    type:"verb",      meanings:["denigrar","difamar","menospreciar"], hint:"Criticar injustamente para dañar la reputación", example:"He denigrated his rival's achievements at every opportunity."},
  {word:"Duplicity",    pron:"/djuːˈplɪsɪti/",  type:"noun",      meanings:["duplicidad","doblez","engaño"], hint:"Comportamiento engañoso con doble intención", example:"His duplicity was eventually exposed by the investigation."},
  {word:"Ebullient",    pron:"/ɪˈbʊliənt/",     type:"adjective", meanings:["eufórico","efusivo","exuberante"], hint:"Lleno de energía y entusiasmo", example:"The team's ebullient celebration filled the stadium."},
  {word:"Effrontery",   pron:"/ɪˈfrʌntəri/",    type:"noun",      meanings:["descaro","desvergüenza","insolencia"], hint:"Atrevimiento con total falta de vergüenza", example:"He had the effrontery to ask for a raise after missing deadlines."},
  {word:"Ennui",        pron:"/ɒnˈwiː/",        type:"noun",      meanings:["hastío","tedio","aburrimiento profundo"], hint:"Aburrimiento existencial, sensación de vacío", example:"A profound ennui settled over the idle aristocrats."},
  {word:"Ephemeral",    pron:"/ɪˈfem.ər.əl/",   type:"adjective", meanings:["efímero","fugaz","pasajero"], hint:"Que dura muy poco tiempo", example:"The beauty of cherry blossoms is ephemeral."},
  {word:"Equivocate",   pron:"/ɪˈkwɪvəkeɪt/",  type:"verb",      meanings:["evasiva","hablar con ambigüedad","ser equívoco"], hint:"Usar lenguaje vago para evitar comprometerse", example:"The politician equivocated when asked about his past."},
  {word:"Erudite",      pron:"/ˈerʊdaɪt/",      type:"adjective", meanings:["erudito","ilustrado","culto","sabio"], hint:"Que tiene mucho conocimiento adquirido por estudio", example:"Her erudite commentary enriched the lecture series."},
  {word:"Esoteric",     pron:"/ˌesəˈterɪk/",    type:"adjective", meanings:["esotérico","hermético","para iniciados"], hint:"Conocido solo por un grupo selecto", example:"The book dealt with esoteric branches of philosophy."},
  {word:"Evanescent",   pron:"/ˌevəˈnesənt/",   type:"adjective", meanings:["evanescente","fugaz","que se desvanece"], hint:"Que desaparece rápidamente como el humo", example:"The evanescent mist lifted as the sun rose."},
  {word:"Fallacious",   pron:"/fəˈleɪʃəs/",     type:"adjective", meanings:["falaz","engañoso","erróneo"], hint:"Basado en razonamiento incorrecto", example:"The argument rested on a fallacious assumption."},
  {word:"Fastidious",   pron:"/fæˈstɪdiəs/",    type:"adjective", meanings:["quisquilloso","meticuloso","exigente"], hint:"Muy cuidadoso y exigente con los detalles", example:"She was fastidious about the cleanliness of her workspace."},
  {word:"Furtive",      pron:"/ˈfɜːtɪv/",       type:"adjective", meanings:["furtivo","sigiloso","a escondidas"], hint:"Que actúa tratando de no ser visto", example:"He cast a furtive glance toward the exit."},
  {word:"Garrulous",    pron:"/ˈɡærʊləs/",      type:"adjective", meanings:["gárrulo","parlanchín","charlatán"], hint:"Que habla demasiado sobre cosas sin importancia", example:"The garrulous taxi driver talked the entire journey."},
  {word:"Gratuitous",   pron:"/ɡrəˈtjuːɪtəs/", type:"adjective", meanings:["gratuito","innecesario","sin justificación"], hint:"Hecho sin necesidad ni razón válida", example:"The film contained gratuitous violence that shocked viewers."},
  {word:"Gregarious",   pron:"/ɡrɪˈɡeəriəs/",  type:"adjective", meanings:["gregario","sociable","extrovertido"], hint:"Que disfruta de la compañía de otros", example:"She was gregarious and loved attending social events."},
  {word:"Hegemony",     pron:"/hɪˈdʒeməni/",    type:"noun",      meanings:["hegemonía","dominio","liderazgo político"], hint:"Dominación de un grupo o nación sobre otros", example:"The empire maintained its hegemony for three centuries."},
  {word:"Hubris",       pron:"/ˈhjuːbrɪs/",     type:"noun",      meanings:["hubris","arrogancia","soberbia excesiva"], hint:"Orgullo que lleva a la caída", example:"His hubris blinded him to the consequences of his decisions."},
  {word:"Iconoclast",   pron:"/aɪˈkɒnəklæst/", type:"noun",      meanings:["iconoclasta","rebelde","que desafía tradiciones"], hint:"Persona que desafía creencias establecidas", example:"Darwin was an iconoclast whose ideas transformed biology."},
  {word:"Implacable",   pron:"/ɪmˈplækəbəl/",  type:"adjective", meanings:["implacable","inflexible","inexorable"], hint:"Que no puede ser aplacado o calmado", example:"He faced an implacable opponent who refused to compromise."},
  {word:"Inchoate",     pron:"/ɪnˈkəʊeɪt/",    type:"adjective", meanings:["incipiente","rudimentario","sin desarrollar"], hint:"Apenas comenzado, no del todo formado", example:"His ideas were still inchoate and needed refinement."},
  {word:"Indolent",     pron:"/ˈɪndələnt/",     type:"adjective", meanings:["indolente","perezoso","holgazán"], hint:"Que es excesivamente perezoso", example:"The indolent student barely passed his exams."},
  {word:"Insipid",      pron:"/ɪnˈsɪpɪd/",     type:"adjective", meanings:["insípido","soso","sin interés"], hint:"Sin sabor, interés o vida", example:"The soup was insipid and needed more seasoning."},
  {word:"Intransigent", pron:"/ɪnˈtrænsɪdʒənt/",type:"adjective",meanings:["intransigente","inflexible","que no cede"], hint:"Que se niega completamente a cambiar de postura", example:"The intransigent negotiators stalled the peace talks."},
  {word:"Irascible",    pron:"/ɪˈræsɪbəl/",    type:"adjective", meanings:["irascible","irritable","de mal genio"], hint:"Que se enfada fácilmente", example:"The irascible professor terrorized first-year students."},
  {word:"Laconic",      pron:"/ləˈkɒnɪk/",     type:"adjective", meanings:["lacónico","conciso","de pocas palabras"], hint:"Que usa muy pocas palabras para expresarse", example:"His laconic reply—'no'—ended the discussion."},
  {word:"Lassitude",    pron:"/ˈlæsɪtjuːd/",   type:"noun",      meanings:["lasitud","cansancio","languidez"], hint:"Sensación de cansancio o falta de energía", example:"A deep lassitude came over her after the long journey."},
  {word:"Lugubrious",   pron:"/luːˈɡjuːbriəs/",type:"adjective", meanings:["lúgubre","triste","sombrío"], hint:"Que expresa tristeza exagerada o profunda", example:"The lugubrious music was entirely appropriate for the funeral."},
  {word:"Magnanimous",  pron:"/mæɡˈnænɪməs/",  type:"adjective", meanings:["magnánimo","generoso","noble"], hint:"Generoso y noble, sin rencor", example:"The magnanimous victor offered aid to the defeated nation."},
  {word:"Mendacious",   pron:"/menˈdeɪʃəs/",    type:"adjective", meanings:["mendaz","mentiroso","falso"], hint:"Que miente habitualmente", example:"The mendacious politician was eventually exposed."},
  {word:"Mercurial",    pron:"/mɜːˈkjʊəriəl/",  type:"adjective", meanings:["mercurial","voluble","impredecible","cambiante"], hint:"Con cambios rápidos e impredecibles de humor", example:"His mercurial temperament made him difficult to work with."},
  {word:"Misanthrope",  pron:"/ˈmɪzənθrəʊp/",  type:"noun",      meanings:["misántropo","persona que odia a la humanidad"], hint:"Persona que desconfía y evita a los demás", example:"The old misanthrope refused all social invitations."},
  {word:"Mitigate",     pron:"/ˈmɪtɪɡeɪt/",    type:"verb",      meanings:["mitigar","atenuar","reducir","aliviar"], hint:"Reducir la gravedad o intensidad de algo", example:"Trees help mitigate the effects of urban heat."},
  {word:"Munificent",   pron:"/mjuːˈnɪfɪsənt/", type:"adjective", meanings:["munificente","muy generoso","espléndido"], hint:"Extremadamente generoso", example:"The munificent donor funded an entire hospital wing."},
  {word:"Nefarious",    pron:"/nɪˈfeəriəs/",    type:"adjective", meanings:["nefario","malvado","criminal"], hint:"Que implica maldad extrema o criminalidad", example:"The nefarious scheme was uncovered by investigators."},
  {word:"Obdurate",     pron:"/ˈɒbdjʊrɪt/",    type:"adjective", meanings:["obstinado","terco","empedernido"], hint:"Que se niega a cambiar sin importar la presión", example:"Despite all appeals, he remained obdurate."},
  {word:"Obsequious",   pron:"/əbˈsiːkwiəs/",  type:"adjective", meanings:["servil","adulador","obsequioso"], hint:"Excesivamente deferente o adulador", example:"The obsequious waiter hovered constantly over them."},
  {word:"Onerous",      pron:"/ˈɒnərəs/",      type:"adjective", meanings:["oneroso","gravoso","pesado"], hint:"Que implica una carga o dificultad grande", example:"The onerous regulations stifled small businesses."},
  {word:"Opprobrium",   pron:"/əˈprəʊbriəm/",  type:"noun",      meanings:["oprobio","ignominia","deshonra pública"], hint:"Vergüenza pública o deshonra severa", example:"His actions brought opprobrium upon the institution."},
  {word:"Parsimonious", pron:"/ˌpɑːsɪˈməʊniəs/",type:"adjective",meanings:["parsimonioso","tacaño","mezquino"], hint:"Que gasta lo menos posible", example:"The parsimonious landlord refused to replace the broken heating."},
  {word:"Perfidious",   pron:"/pəˈfɪdiəs/",    type:"adjective", meanings:["pérfido","traicionero","desleal"], hint:"Que traiciona la confianza", example:"The perfidious ally changed sides at the crucial moment."},
  {word:"Perfunctory",  pron:"/pəˈfʌŋktəri/",  type:"adjective", meanings:["perfunctorio","superficial","hecho sin interés"], hint:"Hecho rápido y sin cuidado, solo por cumplir", example:"He gave the report a perfunctory glance before signing."},
  {word:"Pervasive",    pron:"/pəˈveɪsɪv/",    type:"adjective", meanings:["omnipresente","generalizado","que lo impregna todo"], hint:"Que se extiende por todas partes", example:"There was a pervasive smell of smoke after the fire."},
  {word:"Petulant",     pron:"/ˈpetʃʊlənt/",   type:"adjective", meanings:["petulante","malhumorado","quejumbroso"], hint:"Irascible de forma infantil", example:"The petulant child sulked when he didn't get his way."},
  {word:"Platitude",    pron:"/ˈplætɪtjuːd/",  type:"noun",      meanings:["lugar común","tópico","frase hecha"], hint:"Comentario tan trillado que ya no tiene significado", example:"His speech was full of platitudes and empty rhetoric."},
  {word:"Pragmatic",    pron:"/præɡˈmætɪk/",   type:"adjective", meanings:["pragmático","práctico","realista"], hint:"Que prioriza lo práctico sobre lo teórico", example:"She took a pragmatic approach to solving the crisis."},
  {word:"Precocious",   pron:"/prɪˈkəʊʃəs/",   type:"adjective", meanings:["precoz","adelantado","superdotado"], hint:"Que muestra habilidades avanzadas para su edad", example:"The precocious child was reading novels at age five."},
  {word:"Prevaricate",  pron:"/prɪˈværɪkeɪt/", type:"verb",      meanings:["evadir","hablar con rodeos","evitar la verdad"], hint:"Evitar decir la verdad directamente", example:"Stop prevaricating and give me a straight answer."},
  {word:"Proclivity",   pron:"/prəˈklɪvɪti/",  type:"noun",      meanings:["proclividad","tendencia","inclinación natural"], hint:"Tendencia natural o habitual hacia algo", example:"He had a proclivity for taking unnecessary risks."},
  {word:"Prosaic",      pron:"/prəʊˈzeɪɪk/",   type:"adjective", meanings:["prosaico","mundano","aburrido"], hint:"Sin imaginación, ordinario y aburrido", example:"He led a prosaic life with no adventure or excitement."},
  {word:"Pugnacious",   pron:"/pʌɡˈneɪʃəs/",  type:"adjective", meanings:["pugnaz","peleador","agresivo"], hint:"Que busca pelea o es combativo", example:"The pugnacious lawyer loved confrontation in the courtroom."},
  {word:"Quixotic",     pron:"/kwɪkˈsɒtɪk/",  type:"adjective", meanings:["quijotesco","idealista","romántico pero irreal"], hint:"Idealista de forma impráctica, como Don Quijote", example:"His quixotic plan to end poverty overnight charmed but alarmed."},
  {word:"Rancorous",    pron:"/ˈræŋkərəs/",    type:"adjective", meanings:["rencoroso","amargo","lleno de resentimiento"], hint:"Con mucho resentimiento acumulado", example:"The rancorous debate continued for years after the split."},
  {word:"Recondite",    pron:"/ˈrekəndaɪt/",   type:"adjective", meanings:["recóndito","poco conocido","abstruso"], hint:"Concierne a conocimiento muy oscuro y especializado", example:"His thesis explored recondite corners of medieval history."},
  {word:"Reticent",     pron:"/ˈretɪsənt/",    type:"adjective", meanings:["reticente","reservado","callado"], hint:"Que no habla mucho sobre sus pensamientos", example:"She was reticent about her past and rarely spoke of it."},
  {word:"Salient",      pron:"/ˈseɪliənt/",    type:"adjective", meanings:["saliente","sobresaliente","principal"], hint:"Lo más importante o notable de algo", example:"The report highlighted the salient points of the proposal."},
  {word:"Sanguine",     pron:"/ˈsæŋɡwɪn/",    type:"adjective", meanings:["optimista","esperanzado","confiado"], hint:"Optimista, especialmente en situaciones difíciles", example:"She remained sanguine about the company's prospects."},
  {word:"Sardonic",     pron:"/sɑːˈdɒnɪk/",   type:"adjective", meanings:["sardónico","irónico","burlón"], hint:"Humor cínico y ligeramente cruel", example:"He gave a sardonic smile at the irony of the situation."},
  {word:"Soporific",    pron:"/ˌsɒpəˈrɪfɪk/", type:"adjective", meanings:["soporífero","que induce sueño","aburrido"], hint:"Que provoca somnolencia o aburrimiento extremo", example:"The soporific lecture put half the audience to sleep."},
  {word:"Stoic",        pron:"/ˈstəʊɪk/",      type:"adjective", meanings:["estoico","impasible","que no se queja"], hint:"Que aguanta el dolor o la adversidad sin quejarse", example:"She faced her illness with a stoic acceptance."},
  {word:"Sycophant",    pron:"/ˈsɪkəfænt/",   type:"noun",      meanings:["sicofante","adulador","pelota"], hint:"Persona que adula servilmente para ganar favor", example:"The executive was surrounded by sycophants who never challenged him."},
  {word:"Taciturn",     pron:"/ˈtæsɪtɜːn/",   type:"adjective", meanings:["taciturno","callado","reservado"], hint:"Que habla muy poco por naturaleza", example:"The taciturn detective revealed little of his thinking."},
  {word:"Tenacious",    pron:"/tɪˈneɪʃəs/",   type:"adjective", meanings:["tenaz","perseverante","firme"], hint:"Que se aferra a algo con persistencia", example:"Her tenacious spirit kept her going through the hardships."},
  {word:"Torpid",       pron:"/ˈtɔːpɪd/",     type:"adjective", meanings:["torpe","letárgico","amodorrado"], hint:"Lento y sin energía", example:"He felt torpid after the huge meal."},
  {word:"Truculent",    pron:"/ˈtrʌkjʊlənt/", type:"adjective", meanings:["truculento","agresivo","belicoso"], hint:"Pronto a discutir o pelear", example:"The truculent employee was dismissed after multiple complaints."},
  {word:"Umbrage",      pron:"/ˈʌmbrɪdʒ/",   type:"noun",      meanings:["ofensa","resentimiento","disgusto"], hint:"Sentirse ofendido u resentido", example:"She took umbrage at his dismissive remark."},
  {word:"Unctuous",     pron:"/ˈʌŋktʃuəs/",  type:"adjective", meanings:["untuoso","zalamero","adulador exagerado"], hint:"Demasiado liso y adulador, poco sincero", example:"The unctuous salesman made everyone uncomfortable."},
  {word:"Vacuous",      pron:"/ˈvækjuəs/",    type:"adjective", meanings:["vacuo","vacío","superficial","sin contenido"], hint:"Sin contenido intelectual o expresión", example:"The celebrity's vacuous interviews revealed nothing of substance."},
  {word:"Verbose",      pron:"/vɜːˈbəʊs/",    type:"adjective", meanings:["verboso","parlanchín","prolijo"], hint:"Que usa más palabras de las necesarias", example:"The verbose report could have been summarized in one page."},
  {word:"Vindictive",   pron:"/vɪnˈdɪktɪv/",  type:"adjective", meanings:["vengativo","rencoroso"], hint:"Que busca venganza cuando cree haber sido agraviado", example:"The vindictive ex-partner made her life miserable."},
  {word:"Vitriolic",    pron:"/ˌvɪtriˈɒlɪk/", type:"adjective", meanings:["vitriólico","mordaz","sumamente crítico"], hint:"Crítica extremadamente cruel y amarga", example:"The vitriolic review demolished the author's reputation."},
  {word:"Vociferous",   pron:"/vəˈsɪfərəs/",  type:"adjective", meanings:["vociferante","ruidoso","que protesta en voz alta"], hint:"Que expresa opiniones en voz alta y con fuerza", example:"The vociferous protesters blocked the entrance for hours."},
  {word:"Wanton",       pron:"/ˈwɒntən/",     type:"adjective", meanings:["caprichoso","sin razón","deliberadamente cruel"], hint:"Causado de forma deliberada sin justificación", example:"The wanton destruction of the ancient site shocked historians."},
  {word:"Whimsical",    pron:"/ˈwɪmzɪkəl/",  type:"adjective", meanings:["caprichoso","fantasioso","extravagante"], hint:"Que tiene un humor curioso y fantasioso", example:"Her whimsical illustrations charmed children and adults alike."},
];

/* ─────────────────────────────────────────────────────
   BANCO 2 · TRADUCCIÓN (60 oraciones)
───────────────────────────────────────────────────── */
const TRANSLATE = [
  {en:"The committee's decision to postpone the vote was met with widespread consternation among party members.",       es:"La decisión del comité de posponer la votación fue recibida con gran consternación entre los miembros del partido.",  hint:"committee = comité · postpone = posponer · consternation = consternación",  context:"Ámbito político"},
  {en:"Her predilection for Baroque music was evident in the way she organized her entire record collection.",          es:"Su predilección por la música barroca era evidente en la forma en que organizaba toda su colección de discos.",       hint:"predilection = predilección · evident = evidente · Baroque = barroco",      context:"Música y cultura"},
  {en:"Despite the acrimony of their separation, they managed to raise their children in a civil manner.",              es:"A pesar de la acritud de su separación, lograron criar a sus hijos de manera civilizada.",                            hint:"acrimony = acritud · separation = separación · civil = civilizado",          context:"Relaciones personales"},
  {en:"The prosecutor argued that the defendant's mendacious testimony had irreparably damaged the case.",              es:"El fiscal argumentó que el testimonio mentiroso del acusado había dañado el caso de forma irreparable.",              hint:"mendacious = mentiroso · testimony = testimonio · irreparably = irreparablemente", context:"Ámbito legal"},
  {en:"Centuries of hegemony had left the empire complacent, unable to adapt to changing geopolitical realities.",      es:"Siglos de hegemonía habían dejado al imperio complaciente, incapaz de adaptarse a las cambiantes realidades geopolíticas.", hint:"hegemony = hegemonía · complacent = complaciente · geopolitical = geopolítico", context:"Historia"},
  {en:"The artist's whimsical sculptures juxtaposed everyday objects with surreal, dreamlike imagery.",                 es:"Las esculturas caprichosas del artista yuxtaponían objetos cotidianos con imágenes surrealistas y oníricas.",           hint:"whimsical = caprichoso · juxtaposed = yuxtaponía · surreal = surrealista",   context:"Arte"},
  {en:"His seemingly sanguine outlook concealed a deep-seated anxiety about the future of the company.",               es:"Su aparente optimismo ocultaba una profunda ansiedad sobre el futuro de la empresa.",                                  hint:"sanguine = optimista · concealed = ocultaba · deep-seated = profundamente arraigado", context:"Negocios"},
  {en:"The academic's recondite knowledge of ancient dialects proved invaluable during the excavation.",                es:"El conocimiento recóndito del académico sobre dialectos antiguos resultó invaluable durante la excavación.",              hint:"recondite = recóndito · dialects = dialectos · excavation = excavación",     context:"Arqueología"},
  {en:"She found his obsequious manner deeply unsettling, preferring straightforward honesty above all else.",          es:"Su manera servil le resultaba profundamente inquietante; ella prefería la honestidad directa sobre todo lo demás.",      hint:"obsequious = servil · unsettling = inquietante · straightforward = directo",  context:"Carácter personal"},
  {en:"The deleterious effects of prolonged screen exposure on adolescent mental health are now well documented.",       es:"Los efectos perjudiciales de la exposición prolongada a pantallas en la salud mental adolescente están ya bien documentados.", hint:"deleterious = perjudicial · prolonged = prolongado · adolescent = adolescente", context:"Salud"},
  {en:"His laconic response to the journalist's probing questions only fuelled further speculation.",                   es:"Su lacónica respuesta a las incisivas preguntas del periodista no hizo más que alimentar más especulaciones.",            hint:"laconic = lacónico · probing = incisivo · speculation = especulación",       context:"Medios de comunicación"},
  {en:"The manifesto was a cogent argument for restructuring the entire taxation system from the ground up.",           es:"El manifiesto era un argumento convincente para reestructurar todo el sistema tributario desde sus cimientos.",          hint:"manifesto = manifiesto · cogent = convincente · taxation = tributación",     context:"Política económica"},
  {en:"A pervasive sense of ennui had settled over the town ever since the factory closed its doors.",                  es:"Un omnipresente sentimiento de hastío se había apoderado del pueblo desde que la fábrica cerró sus puertas.",           hint:"pervasive = omnipresente · ennui = hastío · settled over = se apoderó de",   context:"Vida social"},
  {en:"The capricious nature of the funding committee made long-term project planning virtually impossible.",            es:"La naturaleza caprichosa del comité de financiación hacía que la planificación de proyectos a largo plazo fuera prácticamente imposible.", hint:"capricious = caprichoso · funding = financiación · virtually = prácticamente", context:"Investigación"},
  {en:"Driven by cupidity, the executive approved contracts that were deeply detrimental to the company.",              es:"Impulsado por la codicia, el directivo aprobó contratos que resultaron muy perjudiciales para la empresa.",             hint:"cupidity = codicia · executive = directivo · detrimental = perjudicial",     context:"Negocios"},
  {en:"The stoic manner in which she endured the ordeal earned her the admiration of everyone who witnessed it.",       es:"La manera estoica en que soportó la prueba le ganó la admiración de todos los que la presenciaron.",                    hint:"stoic = estoico · endured = soportó · ordeal = prueba difícil",             context:"Adversidad personal"},
  {en:"Critics dismissed the film as a vacuous spectacle designed solely to generate box-office revenue.",              es:"Los críticos tacharon la película de espectáculo vacuo diseñado únicamente para generar ingresos en taquilla.",          hint:"vacuous = vacuo · spectacle = espectáculo · box-office = taquilla",         context:"Cine"},
  {en:"The treaty's onerous conditions were widely seen as a humiliation rather than a genuine peace settlement.",      es:"Las onerosas condiciones del tratado fueron vistas ampliamente como una humillación más que como un acuerdo de paz genuino.", hint:"onerous = oneroso · humiliation = humiliación · settlement = acuerdo",       context:"Diplomacia"},
  {en:"Her assiduous research over three decades culminated in a landmark publication on cognitive neuroscience.",       es:"Su asidua investigación durante tres décadas culminó en una publicación innovadora sobre neurociencia cognitiva.",          hint:"assiduous = asiduo · culminated = culminó · landmark = innovador/hito",     context:"Ciencia"},
  {word:"The duplicity of the informant was not discovered until long after the operation had concluded.",              es:"La duplicidad del informante no fue descubierta hasta mucho después de que la operación hubiera concluido.",             hint:"duplicity = duplicidad · informant = informante · concluded = concluido",   context:"Inteligencia"},
  {en:"Mitigating the impact of climate change will require unprecedented cooperation across borders and industries.",   es:"Mitigar el impacto del cambio climático requerirá una cooperación sin precedentes a través de fronteras e industrias.",   hint:"mitigating = mitigar · unprecedented = sin precedentes · cooperation = cooperación", context:"Medio ambiente"},
  {en:"The philanthropist's munificent donation transformed the struggling museum into a world-class institution.",      es:"La munificente donación del filántropo transformó el museo en dificultades en una institución de clase mundial.",         hint:"munificent = munificente · philanthropist = filántropo · institution = institución", context:"Filantropía"},
  {en:"His bellicose statements ahead of the summit threatened to derail months of careful diplomatic preparation.",    es:"Sus belicosas declaraciones antes de la cumbre amenazaron con hacer descarrilar meses de cuidadosa preparación diplomática.", hint:"bellicose = belicoso · summit = cumbre · derail = hacer descarrilar",       context:"Diplomacia"},
  {en:"The evanescent nature of fame became painfully clear to her within just a few years of retirement.",             es:"La naturaleza evanescente de la fama se le hizo dolorosamente evidente apenas unos años después de su retirada.",        hint:"evanescent = evanescente · retirement = retirada/jubilación · painfully = dolorosamente", context:"Vida pública"},
  {en:"Despite being an iconoclast by reputation, her later work was surprisingly conventional in both form and content.", es:"A pesar de ser una iconoclasta de reputación, su obra posterior fue sorprendentemente convencional tanto en forma como en contenido.", hint:"iconoclast = iconoclasta · conventional = convencional · reputation = reputación", context:"Arte y cultura"},
  {en:"The garrulous professor would often lose his train of thought mid-sentence, much to his students' amusement.",   es:"El gárrulo profesor solía perder el hilo de sus pensamientos a mitad de una frase, para gran diversión de sus alumnos.", hint:"garrulous = gárrulo · train of thought = hilo de pensamiento · amusement = diversión", context:"Educación"},
  {en:"Faced with the irascible client, the account manager resorted to every diplomatic tool at her disposal.",        es:"Ante el irascible cliente, la gestora de cuentas recurrió a todas las herramientas diplomáticas a su disposición.",      hint:"irascible = irascible · disposal = disposición · resorted = recurrió",      context:"Servicio al cliente"},
  {en:"The opprobrium heaped upon the disgraced minister forced his resignation within forty-eight hours.",             es:"El oprobio vertido sobre el ministro caído en desgracia le obligó a dimitir en cuarenta y ocho horas.",                  hint:"opprobrium = oprobio · disgraced = caído en desgracia · resignation = dimisión", context:"Política"},
  {en:"The convoluted legal proceedings confused jurors and spectators alike throughout the lengthy trial.",            es:"El enrevesado proceso legal confundió a los jurados y espectadores por igual durante el largo juicio.",                   hint:"convoluted = enrevesado · proceedings = proceso · throughout = durante",    context:"Derecho"},
  {en:"Her fastidious attention to typographical detail set the publication apart from its rivals.",                    es:"Su meticulosa atención al detalle tipográfico diferenciaba a la publicación de sus rivales.",                           hint:"fastidious = meticuloso · typographical = tipográfico · rivals = rivales",   context:"Edición"},
];

/* ─────────────────────────────────────────────────────
   BANCO 3 · TIEMPOS VERBALES (60 oraciones)
───────────────────────────────────────────────────────
   tenses disponibles (se muestran como botones):
   Simple Present · Present Continuous · Present Perfect
   Simple Past · Past Continuous · Past Perfect
   Simple Future · Future Continuous · Future Perfect
   Conditional · Present Perfect Continuous · Past Perfect Continuous
───────────────────────────────────────────────────── */
const TENSES_DATA = [
  // Simple Present
  {sentence:"She {reads} academic journals every evening before bed.",                verb:"reads",       tense:"Simple Present",           explain:"'Reads' expresa una acción habitual o rutinaria en el presente."},
  {sentence:"The committee {meets} every second Thursday to review proposals.",       verb:"meets",       tense:"Simple Present",           explain:"'Meets' describe un hecho regular y repetido."},
  {sentence:"He {rarely acknowledges} the contributions of his colleagues.",          verb:"rarely acknowledges", tense:"Simple Present",   explain:"Hábito con adverbio de frecuencia."},
  {sentence:"Water {boils} at 100 degrees Celsius at sea level.",                    verb:"boils",       tense:"Simple Present",           explain:"Verdad científica universal → Simple Present."},
  // Present Continuous
  {sentence:"The researchers {are currently investigating} a novel approach to vaccine development.", verb:"are currently investigating", tense:"Present Continuous", explain:"'Are investigating' indica una acción en progreso en este momento."},
  {sentence:"She {is drafting} the annual report and cannot be disturbed.",           verb:"is drafting", tense:"Present Continuous",       explain:"Acción temporal en progreso."},
  {sentence:"The company {is expanding} its operations into Southeast Asia this year.", verb:"is expanding", tense:"Present Continuous",    explain:"Proceso en desarrollo en el período actual."},
  // Present Perfect
  {sentence:"The government {has introduced} several sweeping reforms since taking office.", verb:"has introduced", tense:"Present Perfect", explain:"'Has introduced' conecta el pasado con el presente relevante."},
  {sentence:"She {has never encountered} such blatant mendacity in her years of practice.", verb:"has never encountered", tense:"Present Perfect", explain:"Experiencia acumulada hasta el presente."},
  {sentence:"The committee {has already reached} a preliminary consensus on the matter.", verb:"has already reached", tense:"Present Perfect", explain:"Acción completada con relevancia presente."},
  {sentence:"They {have been colleagues} for nearly two decades.",                    verb:"have been",   tense:"Present Perfect",          explain:"Estado que comenzó en el pasado y continúa ahora."},
  // Present Perfect Continuous
  {sentence:"The engineers {have been working} on this prototype for eighteen months.", verb:"have been working", tense:"Present Perfect Continuous", explain:"Acción iniciada en el pasado que continúa hasta el presente."},
  {sentence:"She {has been advocating} for systemic reform long before it became fashionable.", verb:"has been advocating", tense:"Present Perfect Continuous", explain:"Acción continua con duración desde el pasado."},
  // Simple Past
  {sentence:"The delegation {arrived} in Geneva three days before the scheduled negotiations.", verb:"arrived", tense:"Simple Past",        explain:"Evento completado en un momento definido del pasado."},
  {sentence:"His acrimonious departure {left} a lasting mark on the institution's culture.", verb:"left",    tense:"Simple Past",           explain:"Acción pasada concluida."},
  {sentence:"The auditors {uncovered} several instances of financial malfeasance.",   verb:"uncovered",   tense:"Simple Past",              explain:"Hecho puntual ocurrido en el pasado."},
  {sentence:"She {resigned} without explanation, leaving her colleagues in consternation.", verb:"resigned", tense:"Simple Past",           explain:"Acción pasada terminada."},
  {sentence:"The philosopher {published} his seminal work at the age of thirty-two.", verb:"published",   tense:"Simple Past",              explain:"Evento histórico puntual."},
  // Past Continuous
  {sentence:"The board {was deliberating} behind closed doors when the news broke.",  verb:"was deliberating", tense:"Past Continuous",      explain:"Acción en progreso en un momento del pasado interrumpida o en curso."},
  {sentence:"While the inspector {was examining} the documents, a key piece of evidence disappeared.", verb:"was examining", tense:"Past Continuous", explain:"Acción pasada en progreso cuando ocurrió otra cosa."},
  {sentence:"They {were negotiating} the terms of the agreement throughout most of October.", verb:"were negotiating", tense:"Past Continuous", explain:"Proceso en desarrollo durante un período pasado."},
  // Past Perfect
  {sentence:"By the time the reinforcements arrived, the unit {had already retreated} to a defensible position.", verb:"had already retreated", tense:"Past Perfect", explain:"Acción completada antes de otro punto en el pasado."},
  {sentence:"She realized she {had misinterpreted} his intentions from the very beginning.", verb:"had misinterpreted", tense:"Past Perfect", explain:"Evento anterior a otro pasado."},
  {sentence:"The document confirmed what the investigators {had long suspected}.",    verb:"had long suspected", tense:"Past Perfect",         explain:"Estado que ya existía antes del momento de referencia pasado."},
  // Past Perfect Continuous
  {sentence:"He {had been pursuing} this line of research for a decade before securing adequate funding.", verb:"had been pursuing", tense:"Past Perfect Continuous", explain:"Acción continua que ocurrió antes de un punto de referencia en el pasado."},
  {sentence:"The glacier {had been retreating} for fifty years before scientists began to document the process.", verb:"had been retreating", tense:"Past Perfect Continuous", explain:"Proceso duradero anterior a un punto pasado."},
  // Simple Future (will)
  {sentence:"The introduction of automation {will fundamentally alter} the landscape of manufacturing.", verb:"will fundamentally alter", tense:"Simple Future",  explain:"'Will + infinitive' para predicciones o decisiones espontáneas sobre el futuro."},
  {sentence:"The committee {will convene} at nine o'clock sharp tomorrow morning.",   verb:"will convene", tense:"Simple Future",           explain:"Evento futuro programado con will."},
  {sentence:"Historians {will likely reassess} his legacy once passions have subsided.", verb:"will likely reassess", tense:"Simple Future",  explain:"Predicción futura."},
  // Future Continuous
  {sentence:"By noon tomorrow, the delegates {will be finalizing} the draft agreement.", verb:"will be finalizing", tense:"Future Continuous", explain:"Acción que estará en progreso en un momento futuro específico."},
  {sentence:"This time next year, she {will be leading} an entirely new division.",   verb:"will be leading", tense:"Future Continuous",      explain:"Acción en desarrollo en un momento futuro concreto."},
  // Future Perfect
  {sentence:"By the end of the decade, the initiative {will have transformed} public health infrastructure.", verb:"will have transformed", tense:"Future Perfect", explain:"Acción que se habrá completado antes de un punto futuro."},
  {sentence:"By the time you read this, the verdict {will have been announced}.",     verb:"will have been announced", tense:"Future Perfect", explain:"Acción completada antes de un momento futuro de referencia."},
  // Conditional
  {sentence:"If the funding were secured, the team {would accelerate} the trial to meet the deadline.", verb:"would accelerate", tense:"Conditional",       explain:"'Would + infinitive' en oración condicional tipo II (hipotético)."},
  {sentence:"She {would have declined} the offer had she known the full implications.", verb:"would have declined", tense:"Conditional",         explain:"Condicional tipo III: situación hipotética en el pasado."},
  {sentence:"A more pragmatic leader {would have sought} compromise rather than confrontation.", verb:"would have sought", tense:"Conditional",      explain:"Condicional pasado con 'would have + participio'."},
  // Extras para variedad
  {sentence:"The data {suggests} a strong correlation between socioeconomic status and educational attainment.", verb:"suggests", tense:"Simple Present",  explain:"Simple Present para datos/hechos establecidos."},
  {sentence:"Over the past century, the permafrost {has been thawing} at an accelerating rate.", verb:"has been thawing", tense:"Present Perfect Continuous", explain:"Proceso continuo desde el pasado con relevancia presente."},
  {sentence:"The minister {had already tendered} her resignation before the vote of no confidence.", verb:"had already tendered", tense:"Past Perfect",    explain:"Acción anterior a otra acción pasada."},
  {sentence:"Scientists {are mapping} the entire ocean floor using autonomous submersibles.", verb:"are mapping", tense:"Present Continuous",               explain:"Proyecto en curso en el momento presente."},
  {sentence:"The architect {designed} each element of the building to evoke a sense of ephemerality.", verb:"designed", tense:"Simple Past",               explain:"Acción creativa concluida en el pasado."},
  {sentence:"By 2030, renewable energy {will have surpassed} fossil fuels as the primary global energy source.", verb:"will have surpassed", tense:"Future Perfect", explain:"Logro que se habrá alcanzado antes de 2030."},
  {sentence:"The tribunal {was still deliberating} when the defendant collapsed in the courtroom.", verb:"was still deliberating", tense:"Past Continuous",  explain:"Acción pasada en progreso interrumpida."},
  {sentence:"She {had been corresponding} with the historian for years before they finally met in person.", verb:"had been corresponding", tense:"Past Perfect Continuous", explain:"Actividad continua anterior a un punto pasado."},
  {sentence:"The policy {will affect} millions of households across the country.",     verb:"will affect",  tense:"Simple Future",            explain:"Predicción futura con 'will'."},
  {sentence:"The board {has appointed} an independent auditor to review the accounts.", verb:"has appointed", tense:"Present Perfect",          explain:"Decisión reciente con efecto presente."},
  {sentence:"If she {had pursued} a different strategy, the outcome would have been far more favorable.", verb:"had pursued", tense:"Conditional",          explain:"Condicional tipo III, cláusula 'if' en Past Perfect."},
  {sentence:"Next spring, the foundation {will be celebrating} its centenary with a series of exhibitions.", verb:"will be celebrating", tense:"Future Continuous", explain:"Evento que estará ocurriendo en un momento futuro."},
  {sentence:"The report {contradicts} several widely held assumptions about urban migration patterns.", verb:"contradicts", tense:"Simple Present",           explain:"Simple Present para hallazgos de informes que se consideran vigentes."},
];

/* ════════════════════════════════════════════════════
   TIEMPOS (botones del modo tense)
════════════════════════════════════════════════════ */
const ALL_TENSES = [
  "Simple Present","Present Continuous","Present Perfect",
  "Present Perfect Continuous","Simple Past","Past Continuous",
  "Past Perfect","Past Perfect Continuous","Simple Future",
  "Future Continuous","Future Perfect","Conditional",
];

/* ════════════════════════════════════════════════════
   STATE
════════════════════════════════════════════════════ */
let cfg = { timeLimit:20, qty:20, mode:"vocab" };
let queue      = [];
let qIndex     = 0;
let current    = null;
let streak     = 0;
let maxStreak  = 0;
let correct    = 0;
let errors     = 0;
let missed     = [];
let timerInt   = null;
let timeLeft   = 20;
let tenseAnswered = false;

// desglose por modo
let breakdown  = { vocab:{c:0,e:0}, translate:{c:0,e:0}, tense:{c:0,e:0} };

/* ════════════════════════════════════════════════════
   DOM
════════════════════════════════════════════════════ */
const $  = id => document.getElementById(id);
const screens = {
  home:     $("s-home"),
  game:     $("s-game"),
  feedback: $("s-feedback"),
  summary:  $("s-summary"),
};

// Config
const timeSel   = $("time-sel");
const qtySel    = $("qty-sel");

// Game
const modeBadge = $("mode-badge");
const progFill  = $("prog-fill");
const progTxt   = $("prog-txt");
const gCorrect  = $("g-correct");
const gErrors   = $("g-errors");
const gStreak   = $("g-streak");
const timerWrap = $("timer-wrap");
const timerFill = $("timer-fill");
const timerNum  = $("timer-num");

const qVocab    = $("q-vocab");
const qTranslate= $("q-translate");
const qTense    = $("q-tense");

const vcType    = $("vc-type");
const vcWord    = $("vc-word");
const vcPron    = $("vc-pron");
const vocabHintBtn = $("vocab-hint-btn");
const vocabHintTxt = $("vocab-hint-txt");

const trSentence= $("tr-sentence");
const trContext = $("tr-context");
const trHintBtn = $("tr-hint-btn");
const trHintTxt = $("tr-hint-txt");

const teSentence= $("te-sentence");
const teVerb    = $("te-verb");
const tenseGrid = $("tense-grid");

const answerArea= $("answer-area");
const ansInput  = $("ans-input");
const btnSubmit = $("btn-submit");
const btnSkip   = $("btn-skip");

// Feedback
const fbIcon    = $("fb-icon");
const fbTitle   = $("fb-title");
const fbCorrect = $("fb-correct");
const fbYours   = $("fb-yours");
const fbYoursBlock = $("fb-yours-block");
const fbExtra   = $("fb-extra");
const fbExtraBlock = $("fb-extra-block");
const fbExtraLbl= $("fb-extra-lbl");
const btnContinue = $("btn-continue");

// Summary
const sumGrade  = $("sum-grade");
const sumScore  = $("sum-score");
const ssCorrect = $("ss-correct");
const ssErrors  = $("ss-errors");
const ssStreak  = $("ss-streak");
const ssPct     = $("ss-pct");
const sumBkGrid = $("sum-bk-grid");
const sumMissed = $("sum-missed");
const sumMissedList = $("sum-missed-list");
const btnAgain  = $("btn-again");
const btnHome   = $("btn-home");

/* ════════════════════════════════════════════════════
   HELPERS
════════════════════════════════════════════════════ */
function showScreen(name){
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

function shuffle(arr){ return [...arr].sort(() => Math.random()-.5) }

function norm(s){
  return s.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/[^a-z0-9\s]/g,"").trim();
}

function checkVocab(given, item){
  const g = norm(given);
  if(!g) return false;
  for(const m of item.meanings){
    const mn = norm(m);
    if(mn === g) return true;
    if(mn.includes(g) || g.includes(mn)) return true;
    const mw = mn.split(/\s+/).filter(t=>t.length>=4);
    const gw = g.split(/\s+/).filter(t=>t.length>=4);
    if(mw.some(t=>gw.includes(t))) return true;
  }
  return false;
}

function checkTranslate(given, item){
  const g = norm(given);
  if(!g || g.length < 5) return false;
  const ans = norm(item.es);
  // palabras clave de la traducción (sin stopwords)
  const stop = new Set(["de","la","el","en","que","y","a","un","una","los","las","se","su","con","por","para","es","son","del","al","lo","le","me","te","nos","os","fue","era","han","hay","como","pero","si","no","ya"]);
  const keywords = ans.split(/\s+/).filter(w => w.length >= 5 && !stop.has(w));
  const hits = keywords.filter(k => g.includes(k) || g.includes(k.slice(0,-1)));
  return hits.length >= Math.max(2, Math.floor(keywords.length * 0.35));
}

/* ════════════════════════════════════════════════════
   TIMER
════════════════════════════════════════════════════ */
function startTimer(){
  if(!cfg.timeLimit) return;
  stopTimer();
  timeLeft = cfg.timeLimit;
  timerNum.textContent = timeLeft;
  timerFill.style.transition = "none";
  timerFill.style.width = "100%";
  timerFill.classList.remove("urgent");
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    timerFill.style.transition = `width ${cfg.timeLimit}s linear`;
    timerFill.style.width = "0%";
  }));
  timerInt = setInterval(()=>{
    timeLeft--;
    timerNum.textContent = timeLeft;
    if(timeLeft <= Math.ceil(cfg.timeLimit * 0.25)) timerFill.classList.add("urgent");
    if(timeLeft <= 0){ stopTimer(); handleResult(false, null, "⏱ Tiempo agotado"); }
  }, 1000);
}

function stopTimer(){ clearInterval(timerInt); timerInt = null; }

/* ════════════════════════════════════════════════════
   QUEUE BUILDER
════════════════════════════════════════════════════ */
function buildQueue(mode, qty){
  if(mode === "vocab"){
    return shuffle(VOCAB).slice(0, qty).map(w => ({type:"vocab", data:w}));
  }
  if(mode === "translate"){
    const pool = TRANSLATE.filter(t => t.en || t.word); // guard
    return shuffle(pool).slice(0, qty).map(t => ({type:"translate", data:t}));
  }
  if(mode === "tense"){
    return shuffle(TENSES_DATA).slice(0, qty).map(t => ({type:"tense", data:t}));
  }
  // mix: distribute evenly
  const third = Math.floor(qty/3);
  const rem   = qty - third*3;
  const vq = shuffle(VOCAB).slice(0, third + (rem>0?1:0)).map(w=>({type:"vocab",data:w}));
  const tq = shuffle(TRANSLATE.filter(t=>t.en||t.word)).slice(0, third + (rem>1?1:0)).map(t=>({type:"translate",data:t}));
  const eq = shuffle(TENSES_DATA).slice(0, third).map(t=>({type:"tense",data:t}));
  return shuffle([...vq,...tq,...eq]);
}

/* ════════════════════════════════════════════════════
   GAME START
════════════════════════════════════════════════════ */
function startGame(){
  cfg.timeLimit = parseInt(timeSel.querySelector(".tog.active")?.dataset.val ?? 20);
  cfg.qty       = parseInt(qtySel.querySelector(".tog.active")?.dataset.val ?? 20);

  queue = buildQueue(cfg.mode, cfg.qty);
  qIndex = 0; streak = 0; maxStreak = 0; correct = 0; errors = 0; missed = [];
  breakdown = {vocab:{c:0,e:0}, translate:{c:0,e:0}, tense:{c:0,e:0}};

  timerWrap.classList.toggle("hidden", !cfg.timeLimit);
  showScreen("game");
  showQuestion();
}

/* ════════════════════════════════════════════════════
   SHOW QUESTION
════════════════════════════════════════════════════ */
function showQuestion(){
  current = queue[qIndex];
  tenseAnswered = false;

  // Progress
  const pct = (qIndex / queue.length)*100;
  progFill.style.width = pct + "%";
  progTxt.textContent  = `${qIndex}/${queue.length}`;
  gCorrect.textContent = correct;
  gErrors.textContent  = errors;
  gStreak.textContent  = streak;

  // Hide all question panels
  [qVocab, qTranslate, qTense].forEach(el => el.classList.add("hidden"));
  answerArea.style.display = "";

  // Reset input
  ansInput.value = "";
  ansInput.classList.remove("flash-ok","flash-err");

  // Reset hint visibility
  vocabHintTxt.classList.add("hidden"); vocabHintBtn.textContent="💡 Ver pista";
  trHintTxt.classList.add("hidden");    trHintBtn.textContent="💡 Ver pista";

  const t = current.type;
  const d = current.data;

  // Badge
  const badgeMap = {vocab:"VOCABULARIO",translate:"TRADUCCIÓN",tense:"TIEMPO VERBAL"};
  modeBadge.textContent = badgeMap[t];
  modeBadge.className   = `mode-badge ${t}`;

  if(t === "vocab"){
    qVocab.classList.remove("hidden");
    vcType.textContent = d.type;
    vcWord.textContent = d.word;
    vcPron.textContent = d.pron;
    vocabHintTxt.textContent = d.hint;
    // re-trigger animation
    vcWord.style.animation="none"; void vcWord.offsetWidth; vcWord.style.animation="";
  }
  else if(t === "translate"){
    qTranslate.classList.remove("hidden");
    const src = d.en || d.word || "";
    trSentence.textContent = src;
    trContext.textContent  = d.context ? `Contexto: ${d.context}` : "";
    trHintTxt.textContent  = d.hint || "";
  }
  else if(t === "tense"){
    qTense.classList.remove("hidden");
    answerArea.style.display = "none"; // tense uses buttons, not input

    // Build sentence with highlight
    const raw = d.sentence;
    const verbLiteral = d.verb;
    // wrap verb in highlight span
    const highlighted = raw.replace(/\{([^}]+)\}/g,
      (_,v) => `<span class="highlight">${v}</span>`
    );
    teSentence.innerHTML = highlighted;
    teVerb.textContent   = verbLiteral.replace(/[{}]/g,"");

    // Build tense buttons
    tenseGrid.innerHTML = "";
    const shuffledTenses = shuffle(ALL_TENSES);
    shuffledTenses.forEach(tn => {
      const btn = document.createElement("button");
      btn.className   = "tense-btn";
      btn.textContent = tn;
      btn.dataset.tense = tn;
      btn.addEventListener("click", () => handleTenseClick(btn, tn));
      tenseGrid.appendChild(btn);
    });
  }

  startTimer();
  if(t !== "tense") setTimeout(()=>ansInput.focus(), 50);
}

/* ════════════════════════════════════════════════════
   ANSWER HANDLERS
════════════════════════════════════════════════════ */
function submitTextAnswer(){
  const given = ansInput.value.trim();
  if(!given) return;
  stopTimer();
  const t = current.type;
  const d = current.data;
  let ok = false;
  if(t === "vocab")     ok = checkVocab(given, d);
  if(t === "translate") ok = checkTranslate(given, d);
  handleResult(ok, given);
}

function handleTenseClick(btn, chosen){
  if(tenseAnswered) return;
  tenseAnswered = true;
  stopTimer();
  const correct_tense = current.data.tense;
  const ok = chosen === correct_tense;

  // Disable all buttons and highlight
  tenseGrid.querySelectorAll(".tense-btn").forEach(b => {
    b.disabled = true;
    if(b.dataset.tense === correct_tense) b.classList.add("reveal-correct");
  });
  if(!ok) btn.classList.add("selected-wrong");

  setTimeout(() => handleResult(ok, chosen), 700);
}

function skipQuestion(){
  stopTimer();
  missed.push(current);
  handleResult(false, null, null);
}

function handleResult(isOk, givenStr, overrideMsg){
  const t  = current.type;
  const d  = current.data;
  const bk = breakdown[t];

  if(isOk){
    streak++; if(streak > maxStreak) maxStreak = streak;
    correct++; bk.c++;
  } else {
    streak = 0; errors++; bk.e++;
    if(!missed.includes(current)) missed.push(current);
  }

  // Populate feedback screen
  const cls = isOk ? "ok" : givenStr === null && !overrideMsg ? "skip" : "err";
  fbIcon.className = `fb-icon ${cls}`;
  fbIcon.textContent = isOk ? "✓" : givenStr === null && !overrideMsg ? "→" : "✗";
  fbTitle.className = `fb-title ${cls}`;
  fbTitle.textContent = isOk ? "¡Correcto!" : givenStr === null && !overrideMsg ? "Saltada" : "Incorrecto";

  // Correct answer
  if(t === "vocab")      fbCorrect.textContent = d.meanings[0] + (d.meanings.length>1 ? ` · ${d.meanings[1]}` : "");
  if(t === "translate")  fbCorrect.textContent = d.es;
  if(t === "tense")      fbCorrect.textContent = d.tense;

  // Your answer
  if(overrideMsg){
    fbYoursBlock.style.display = "block";
    fbYours.textContent = overrideMsg;
  } else if(givenStr === null){
    fbYoursBlock.style.display = "none";
  } else {
    fbYoursBlock.style.display = "block";
    fbYours.textContent = `Tu respuesta: "${givenStr}"`;
  }

  // Extra note
  if(t === "vocab"){
    fbExtraLbl.textContent = "EJEMPLO DE USO";
    fbExtra.textContent    = d.example;
    fbExtraBlock.style.display = "block";
  } else if(t === "translate"){
    fbExtraLbl.textContent = "PISTA / VOCABULARIO";
    fbExtra.textContent    = d.hint || "";
    fbExtraBlock.style.display = d.hint ? "block" : "none";
  } else if(t === "tense"){
    fbExtraLbl.textContent = "¿POR QUÉ?";
    fbExtra.textContent    = d.explain;
    fbExtraBlock.style.display = "block";
  }

  showScreen("feedback");
}

/* ════════════════════════════════════════════════════
   CONTINUE
════════════════════════════════════════════════════ */
function continueGame(){
  qIndex++;
  if(qIndex >= queue.length){ showSummary(); return; }
  showScreen("game");
  showQuestion();
}

/* ════════════════════════════════════════════════════
   SUMMARY
════════════════════════════════════════════════════ */
function showSummary(){
  const total = queue.length;
  const pct   = Math.round((correct / total)*100);

  let grade = "Por mejorar 📖";
  if(pct >= 90) grade = "¡Sobresaliente! 🏆";
  else if(pct >= 75) grade = "Muy bien ⭐";
  else if(pct >= 55) grade = "Bien 👍";
  else if(pct >= 40) grade = "Regular 📚";

  sumGrade.textContent = grade;
  sumScore.textContent = `${correct} de ${total} correctas · ${pct}% de precisión`;
  ssCorrect.textContent = correct;
  ssErrors.textContent  = errors;
  ssStreak.textContent  = maxStreak;
  ssPct.textContent     = pct + "%";

  // Breakdown bars
  sumBkGrid.innerHTML = "";
  const modeLabels = {vocab:"Vocabulario", translate:"Traducción", tense:"Tiempos verbales"};
  Object.entries(breakdown).forEach(([key, val])=>{
    const tot = val.c + val.e;
    if(tot === 0) return;
    const p   = Math.round((val.c/tot)*100);
    const row = document.createElement("div");
    row.className = "bk-row";
    row.innerHTML = `
      <span class="bk-mode">${modeLabels[key]}</span>
      <div class="bk-bar-wrap"><div class="bk-bar" style="width:0%" data-pct="${p}"></div></div>
      <span class="bk-num">${val.c}/${tot}</span>`;
    sumBkGrid.appendChild(row);
    setTimeout(()=>{ row.querySelector(".bk-bar").style.width = p+"%" }, 50);
  });

  // Missed list
  sumMissedList.innerHTML = "";
  if(missed.length > 0){
    sumMissed.style.display = "block";
    missed.forEach(q=>{
      const d = q.data;
      const chip = document.createElement("span");
      chip.className = "missed-chip";
      chip.textContent = d.word || (d.en||d.word||"").slice(0,40)+"…" || d.sentence?.slice(0,35)+"…";
      if(d.meanings) chip.title = d.meanings.join(" · ");
      if(d.es) chip.title = d.es;
      if(d.tense) chip.title = "Correcto: " + d.tense;
      sumMissedList.appendChild(chip);
    });
  } else {
    sumMissed.style.display = "none";
  }

  showScreen("summary");
}

/* ════════════════════════════════════════════════════
   EVENTS — configuración
════════════════════════════════════════════════════ */
[timeSel, qtySel].forEach(group=>{
  group.addEventListener("click", e=>{
    const btn = e.target.closest(".tog");
    if(!btn) return;
    group.querySelectorAll(".tog").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Mode cards
document.querySelectorAll(".mode-card").forEach(card=>{
  card.addEventListener("click", ()=>{
    cfg.mode = card.dataset.mode;
    startGame();
  });
});

// Game controls
btnSubmit.addEventListener("click", submitTextAnswer);
ansInput.addEventListener("keydown", e=>{ if(e.key==="Enter"){ e.preventDefault(); submitTextAnswer(); } });
btnSkip.addEventListener("click", skipQuestion);
$("btn-quit").addEventListener("click", ()=>{ stopTimer(); showScreen("home"); });

// Hint toggles
function makeHintToggle(btn, txt){
  let shown = false;
  btn.addEventListener("click", ()=>{
    shown = !shown;
    txt.classList.toggle("hidden", !shown);
    btn.textContent = shown ? "🙈 Ocultar pista" : "💡 Ver pista";
  });
}
makeHintToggle(vocabHintBtn, vocabHintTxt);
makeHintToggle(trHintBtn, trHintTxt);

// Feedback continue
btnContinue.addEventListener("click", continueGame);

// Summary
btnAgain.addEventListener("click", startGame);
btnHome.addEventListener("click",  ()=>showScreen("home"));

// Global keyboard shortcuts
document.addEventListener("keydown", e=>{
  const active = document.querySelector(".screen.active");
  if(!active) return;
  if(active === screens.feedback && e.key === "Enter"){ e.preventDefault(); continueGame(); }
  if(active === screens.summary  && e.key === "Enter"){ e.preventDefault(); startGame(); }
  if(e.key === "Escape"){ stopTimer(); showScreen("home"); }
});

/* ════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════ */
showScreen("home");