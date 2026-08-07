// ==========================================================
// 🗄️ BASE DE DONNÉES — EXAMEN OFFICIEL (libellés exacts du
// ministère de l'Intérieur : listes CSP/CR + PDF officiel des
// questions de connaissance, naturalisation/réintégration)
// ==========================================================
const DATABASE_OFFICIEL = [

  // ==========================================
  // --- PRINCIPES ET VALEURS DE LA RÉPUBLIQUE ---
  // ==========================================
  {
    id: "OFF_P1", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Complétez les paroles de la Marseillaise : \"Allons enfants de la [...]\"",
    a: ["nation", "patrie", "liberté", "victoire"],
    correct: 1,
    explanation: "« Allons enfants de la patrie, le jour de gloire est arrivé ! » — premier vers de La Marseillaise, composée par Rouget de Lisle en 1792."
  },
  {
    id: "OFF_P2", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Dans le cadre d'un entretien d'embauche, que peut-on demander au candidat ?",
    a: ["Sa religion et ses convictions politiques", "Des questions en lien avec le poste : compétences, expérience, disponibilité", "Son projet d'avoir des enfants", "Sa situation familiale et le nombre d'enfants qu'il souhaite avoir"],
    correct: 1,
    explanation: "Seules des questions en lien direct avec le poste (compétences, expérience, disponibilité) sont autorisées. Les questions relatives à la religion, aux origines, à la vie privée ou aux projets familiaux sont interdites, car discriminatoires."
  },
  {
    id: "OFF_P3", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Déclarer ses revenus aux services fiscaux est :",
    a: ["Facultatif si les revenus sont faibles", "Une obligation légale annuelle pour toute personne résidant en France", "Réservé aux personnes de nationalité française", "Une simple formalité sans conséquence en cas d'omission"],
    correct: 1,
    explanation: "Déclarer ses revenus est une obligation légale annuelle pour toute personne résidant fiscalement en France, quelle que soit sa nationalité. Une fausse déclaration ou une omission peut être sanctionnée."
  },
  {
    id: "OFF_P4", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "En France, les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    a: ["Seuls les Français financent les services publics par l'impôt", "Les impôts financent des services collectifs comme les écoles, les hôpitaux, la sécurité ou les routes", "Les impôts ne financent que les dépenses militaires", "Le paiement des impôts est optionnel dès 65 ans"],
    correct: 1,
    explanation: "Les impôts financent des services collectifs utiles à tous : écoles, hôpitaux, routes, sécurité, justice. Toute personne qui perçoit des revenus ou consomme en France y contribue selon les règles fiscales."
  },
  {
    id: "OFF_P5", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "La liberté d'association est :",
    a: ["Le droit de créer librement une association ou d'y adhérer, sans autorisation préalable de l'État", "Un droit réservé aux associations reconnues d'utilité publique", "Soumise à l'accord du préfet avant toute création", "Limitée aux associations sportives et culturelles"],
    correct: 0,
    explanation: "La liberté d'association, garantie par la loi de 1901, permet à toute personne de créer librement une association ou d'y adhérer, sans autorisation préalable de l'administration — une simple déclaration en préfecture suffit."
  },
  {
    id: "OFF_P6", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "La liberté d'expression sur les réseaux sociaux en France est :",
    a: ["Totale et sans aucune limite, l'anonymat protégeant de toute poursuite", "Garantie, mais encadrée par la loi : injure, diffamation, harcèlement ou incitation à la haine y sont interdits", "Interdite, seuls les médias officiels peuvent s'exprimer en ligne", "Réservée aux personnes majeures de nationalité française"],
    correct: 1,
    explanation: "La liberté d'expression s'applique aussi en ligne, mais dans les limites fixées par la loi : injure, diffamation, harcèlement ou incitation à la haine sont interdits et punissables, même sous pseudonyme."
  },
  {
    id: "OFF_P7", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Lequel de ces prénoms évoque un symbole de la République ?",
    a: ["Clovis", "Marianne", "Vercingétorix", "Charlemagne"],
    correct: 1,
    explanation: "Marianne est le prénom associé au buste symbolisant la République française, présent dans toutes les mairies. Les autres personnages sont des figures historiques, non des symboles républicains."
  },
  {
    id: "OFF_P8", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Lequel de ces symboles représente la République française ?",
    a: ["La fleur de lys", "Marianne", "L'aigle impérial", "La croix de Lorraine"],
    correct: 1,
    explanation: "Marianne, figure féminine coiffée du bonnet phrygien, est le symbole officiel de la République française, représentant la liberté et la raison."
  },
  {
    id: "OFF_P9", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Où peut-on voir la devise de la République ?",
    a: ["Uniquement dans les tribunaux", "Sur les bâtiments publics, les pièces et billets, ainsi que sur les documents officiels", "Uniquement sur le drapeau national", "Uniquement dans les manuels scolaires"],
    correct: 1,
    explanation: "La devise « Liberté, Égalité, Fraternité » est visible sur les bâtiments publics (mairies, préfectures, écoles), sur les pièces et billets de monnaie, et sur les documents officiels de l'État."
  },
  {
    id: "OFF_P10", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Lesquels sont des symboles officiels de la République française ?",
    a: ["Le drapeau tricolore, la Marseillaise, Marianne, la devise et la fête nationale", "La tour Eiffel, la baguette et le vin", "Le château de Versailles et le Louvre", "Le coq gaulois et la fleur de lys"],
    correct: 0,
    explanation: "Les symboles officiels de la République sont : le drapeau tricolore, La Marseillaise (hymne), Marianne, la devise « Liberté, Égalité, Fraternité » et la fête nationale du 14 juillet."
  },
  {
    id: "OFF_P11", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Peut-on brûler publiquement un drapeau français ?",
    a: ["Oui, cela relève de la liberté d'expression", "Non, cet acte constitue une infraction pénale car il porte atteinte à un symbole de la République", "Oui, uniquement lors d'une manifestation déclarée", "Oui, si l'acte est filmé à des fins journalistiques"],
    correct: 1,
    explanation: "Non. Détruire ou dégrader publiquement un drapeau tricolore, notamment lors d'une manifestation sur la voie publique, constitue une infraction pénale, car cet acte porte atteinte à un symbole de la République."
  },
  {
    id: "OFF_P12", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Quand la sécurité sociale a-t-elle été établie en France ?",
    a: ["En 1936", "En 1945", "En 1958", "En 1981"],
    correct: 1,
    explanation: "La Sécurité sociale a été créée par les ordonnances du 4 et 19 octobre 1945, à la Libération, afin de garantir une protection collective contre les risques de maladie, vieillesse et accidents du travail."
  },
  {
    id: "OFF_P13", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Que commémore la fête nationale ?",
    a: ["L'armistice de 1918", "La prise de la Bastille du 14 juillet 1789 et la Fête de la Fédération de 1790", "La fondation de la Ve République", "La libération de Paris en 1944"],
    correct: 1,
    explanation: "Le 14 juillet commémore à la fois la prise de la Bastille (1789), symbole du début de la Révolution, et la Fête de la Fédération (1790), célébrant l'unité nationale."
  },
  {
    id: "OFF_P14", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Que porte Marianne sur la tête ?",
    a: ["Une couronne de laurier", "Un bonnet phrygien", "Un diadème royal", "Un chapeau tricolore"],
    correct: 1,
    explanation: "Marianne porte un bonnet phrygien, symbole de la liberté hérité de la Révolution française, que portaient les esclaves affranchis dans l'Antiquité."
  },
  {
    id: "OFF_P15", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Quel symbole de la République peut-on voir sur les maillots de l'équipe de France de football ?",
    a: ["Marianne", "Le coq gaulois", "La fleur de lys", "Le bonnet phrygien"],
    correct: 1,
    explanation: "Le coq gaulois, symbole traditionnel (bien que non officiel) de la France, figure sur les maillots de l'équipe de France et de nombreux emblèmes sportifs."
  },
  {
    id: "OFF_P16", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Quelle est la devise de la République française ?",
    a: ["Liberté, Égalité, Solidarité", "Liberté, Égalité, Fraternité", "Justice, Unité, Travail", "Paix, Travail, Patrie"],
    correct: 1,
    explanation: "« Liberté, Égalité, Fraternité » est la devise de la République française, inscrite sur les frontons des bâtiments publics."
  },
  {
    id: "OFF_P17", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Qu'est-ce que la liberté d'association ?",
    a: ["Le droit de se regrouper librement pour poursuivre un but commun, sans autorisation préalable de l'État", "L'obligation pour chaque citoyen d'adhérer à une association", "Un droit accordé uniquement aux syndicats", "Le droit exclusif des entreprises de créer des filiales"],
    correct: 0,
    explanation: "La liberté d'association est le droit de se regrouper librement, sans autorisation préalable de l'État, pour poursuivre un but commun (culturel, sportif, solidaire, politique...)."
  },
  {
    id: "OFF_P18", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Qu'est-ce qu'une liberté ?",
    a: ["Le droit de faire tout ce que l'on souhaite sans aucune limite", "La possibilité d'agir, de penser ou de s'exprimer, dans le respect de la loi et des droits d'autrui", "Un privilège accordé uniquement aux citoyens majeurs", "Une règle imposée par l'État à chaque individu"],
    correct: 1,
    explanation: "Une liberté est la possibilité d'agir, de penser ou de s'exprimer, dans le respect de la loi et des droits d'autrui. Elle n'est donc jamais absolue."
  },
  {
    id: "OFF_P19", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Sur quel document peut-on voir Marianne ?",
    a: ["Sur la carte Vitale uniquement", "Sur les timbres, certains documents officiels et pièces de monnaie", "Uniquement sur le passeport", "Sur aucun document, seulement sur des statues"],
    correct: 1,
    explanation: "Marianne figure sur les timbres-poste, certaines pièces de monnaie et documents officiels, ainsi que sous forme de buste dans les mairies."
  },
  {
    id: "OFF_P20", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Une des valeurs de la devise républicaine est l'Égalité. Qu'est-ce que cela signifie ?",
    a: ["Que tous les citoyens gagnent le même salaire", "Que tous les citoyens ont les mêmes droits et les mêmes devoirs devant la loi, sans distinction", "Que chacun doit occuper le même poste dans la société", "Que toutes les opinions ont la même valeur scientifique"],
    correct: 1,
    explanation: "L'égalité signifie que tous les citoyens ont les mêmes droits et les mêmes devoirs devant la loi, sans distinction d'origine, de sexe, de religion ou de condition sociale."
  },
  {
    id: "OFF_P21", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Une personne peut-elle changer librement de religion en France ?",
    a: ["Non, une fois déclarée à l'état civil, la religion ne peut plus changer", "Oui, la liberté de conscience garantit le droit de changer de religion ou de conviction à tout moment", "Oui, mais une seule fois dans sa vie", "Oui, sous réserve d'une autorisation préfectorale"],
    correct: 1,
    explanation: "Oui. La liberté de conscience garantit à chacun le droit de changer de religion ou de conviction à tout moment, sans qu'aucune pression familiale ou communautaire ne puisse légalement s'y opposer."
  },
  {
    id: "OFF_P22", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Que peut faire un usager du service public dans une mairie ?",
    a: ["Demander à être reçu uniquement par un agent de sa propre religion", "Être accueilli et traité de manière égale, sans discrimination, par des agents tenus à la neutralité", "Exiger que les documents lui soient adressés dans sa langue d'origine uniquement", "Refuser de fournir toute pièce d'identité"],
    correct: 1,
    explanation: "Tout usager d'un service public a le droit d'être accueilli et traité de manière égale, sans discrimination. Les agents publics sont tenus à la neutralité, notamment religieuse, dans l'exercice de leurs fonctions."
  },
  {
    id: "OFF_P23", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "En France, il est possible pour l'État de financer :",
    a: ["Les lieux de culte de toutes les religions, sans distinction", "Des actions d'entretien du patrimoine religieux antérieur à 1905, mais pas l'exercice du culte lui-même", "Uniquement les édifices catholiques", "Le clergé de toutes les religions reconnues"],
    correct: 1,
    explanation: "En vertu de la loi de 1905, l'État ne finance pas les cultes. Il peut toutefois financer l'entretien de bâtiments religieux construits avant 1905 (au titre du patrimoine), mais pas l'exercice du culte lui-même."
  },
  {
    id: "OFF_P24", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?",
    a: ["1789", "1905", "1958", "1946"],
    correct: 1,
    explanation: "La loi du 9 décembre 1905 est le texte fondateur de la laïcité à la française. Elle garantit la liberté de culte tout en interdisant le financement public des religions."
  },
  {
    id: "OFF_P25", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Que dit la loi de 1905 ?",
    a: ["Elle impose une religion d'État", "Elle proclame la séparation des Églises et de l'État, la liberté de conscience et de culte, dans le respect de l'ordre public", "Elle interdit toute pratique religieuse", "Elle réserve le financement public au culte catholique"],
    correct: 1,
    explanation: "La loi du 9 décembre 1905 proclame la séparation des Églises et de l'État, garantit la liberté de conscience et le libre exercice des cultes, dans le respect de l'ordre public, sans qu'aucun culte ne soit reconnu ou financé par l'État."
  },
  {
    id: "OFF_P26", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Que garantit le principe de laïcité ?",
    a: ["L'interdiction de toute religion sur le territoire", "La neutralité de l'État envers toutes les religions et la liberté de croire ou de ne pas croire", "La primauté d'une religion officielle sur les autres", "L'obligation pour chacun de choisir une religion à sa majorité"],
    correct: 1,
    explanation: "Le principe de laïcité garantit la neutralité de l'État envers toutes les religions et la liberté de croire ou de ne pas croire, dans le respect de l'ordre public."
  },
  {
    id: "OFF_P27", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Quel jour célèbre-t-on officiellement la laïcité en France ?",
    a: ["Le 9 décembre", "Le 14 juillet", "Le 1er mai", "Le 8 mai"],
    correct: 0,
    explanation: "La journée nationale de la laïcité est célébrée le 9 décembre, en référence à la date d'adoption de la loi de 1905 sur la séparation des Églises et de l'État."
  },
  {
    id: "OFF_P28", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Quel symbole religieux peut être porté dans une école publique dans le respect de la laïcité ?",
    a: ["Aucun signe religieux ostensible ne peut être porté par les élèves, enseignants ou agents", "Tous les signes religieux sont autorisés librement", "Seuls les signes chrétiens sont tolérés", "Uniquement les bijoux religieux discrets, quels qu'ils soient"],
    correct: 0,
    explanation: "La loi du 15 mars 2004 interdit le port de signes ou tenues manifestant ostensiblement une appartenance religieuse dans les écoles, collèges et lycées publics."
  },
  {
    id: "OFF_P29", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Quel terme désigne précisément la haine ou les préjugés contre les Juifs ?",
    a: ["La xénophobie", "L'antisémitisme", "L'islamophobie", "Le racisme"],
    correct: 1,
    explanation: "L'antisémitisme désigne précisément la haine ou les préjugés à l'encontre des Juifs. C'est une forme de discrimination et un délit puni par la loi."
  },
  {
    id: "OFF_P30", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Quel texte est considéré comme le texte fondateur de la laïcité ?",
    a: ["La Déclaration des Droits de l'Homme et du Citoyen de 1789", "La loi du 9 décembre 1905 relative à la séparation des Églises et de l'État", "La Constitution de 1958", "Le Code civil de 1804"],
    correct: 1,
    explanation: "La loi du 9 décembre 1905 relative à la séparation des Églises et de l'État est le texte fondateur de la laïcité en France."
  },
  {
    id: "OFF_P31", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Quelle institution française doit rester neutre en matière de religion ?",
    a: ["Les associations culturelles privées", "L'État et les services publics", "Les entreprises privées", "Les partis politiques"],
    correct: 1,
    explanation: "L'État et les services publics doivent rester neutres en matière de religion : ils ne favorisent ni ne s'opposent à aucun culte, et leurs agents ne peuvent exprimer de conviction religieuse dans l'exercice de leurs fonctions."
  },
  {
    id: "OFF_P32", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Qu'est-ce que la laïcité ?",
    a: ["L'interdiction de toute pratique religieuse en France", "Le principe de séparation des institutions publiques et des religions, garantissant la neutralité de l'État et la liberté de conscience", "L'obligation de choisir une religion reconnue par l'État", "La reconnaissance du catholicisme comme religion historique de la France"],
    correct: 1,
    explanation: "La laïcité est le principe de séparation des institutions publiques et des religions. Elle garantit la neutralité de l'État et la liberté de conscience de chacun, qu'il croie ou non."
  },
  {
    id: "OFF_P33", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "À l'école, la charte de la laïcité permet de :",
    a: ["Interdire l'enseignement de l'histoire des religions", "Rappeler les principes de laïcité et de neutralité qui garantissent à chaque élève la liberté de conscience", "Imposer une religion commune à tous les élèves", "Autoriser les cours confessionnels dans le cadre scolaire"],
    correct: 1,
    explanation: "La charte de la laïcité, affichée dans tous les établissements scolaires publics, rappelle les principes de laïcité et de neutralité qui garantissent à chaque élève la liberté de conscience et le respect mutuel."
  },
  {
    id: "OFF_P34", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Qui doit respecter et veiller à la neutralité religieuse dans les services publics ?",
    a: ["Uniquement les usagers", "Les agents publics dans l'exercice de leurs fonctions", "Uniquement les élus locaux", "Personne, la neutralité n'est pas une obligation légale"],
    correct: 1,
    explanation: "Les agents publics doivent respecter et veiller à la neutralité religieuse dans l'exercice de leurs fonctions : ils ne peuvent exprimer de conviction religieuse ni porter de signe religieux visible au travail."
  },
  {
    id: "OFF_P35", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Une personne déclare ne croire en aucun dieu. On peut dire :",
    a: ["Qu'elle est en infraction avec la loi française", "Qu'elle est athée, ce qui est un choix protégé par la liberté de conscience", "Qu'elle doit se déclarer sans religion auprès de la mairie", "Qu'elle ne peut pas exercer de fonction publique"],
    correct: 1,
    explanation: "Une personne qui ne croit en aucun dieu est athée. L'athéisme est un choix pleinement protégé par la liberté de conscience garantie par la laïcité, au même titre que la croyance religieuse."
  },
  {
    id: "OFF_P36", theme: "Principes et valeurs de la République", macro: "Principes et valeurs de la République",
    q: "Selon la Constitution, la France est une République...",
    a: ["fédérale, laïque et démocratique", "indivisible, laïque, démocratique et sociale", "monarchique et parlementaire", "confédérale et décentralisée"],
    correct: 1,
    explanation: "« La France est une République indivisible, laïque, démocratique et sociale » — article 1er de la Constitution de 1958."
  },

  // ==========================================
  // --- SYSTÈME INSTITUTIONNEL ET POLITIQUE ---
  // ==========================================
  {
    id: "OFF_I1", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Comment est désigné le Premier ministre ?",
    a: ["Il est élu directement par les citoyens", "Il est nommé par le Président de la République", "Il est élu par les députés de l'Assemblée nationale", "Il est désigné par le Conseil constitutionnel"],
    correct: 1,
    explanation: "Le Premier ministre est nommé par le Président de la République. Il dirige le gouvernement et est responsable devant l'Assemblée nationale."
  },
  {
    id: "OFF_I2", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qui peut se présenter aux élections présidentielles ?",
    a: ["Tout résident majeur, quelle que soit sa nationalité", "Tout citoyen français, majeur, jouissant de ses droits civiques et remplissant les conditions légales (dont les parrainages)", "Uniquement les membres du gouvernement en exercice", "Toute personne âgée de plus de 16 ans"],
    correct: 1,
    explanation: "Peut se présenter tout citoyen français, majeur, jouissant de ses droits civiques et politiques, et remplissant les conditions légales, notamment l'obtention de 500 parrainages d'élus."
  },
  {
    id: "OFF_I3", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "À qui appartient la souveraineté nationale ?",
    a: ["Au président de la République seul", "Au peuple, qui l'exerce par ses représentants et par référendum", "Au Parlement uniquement", "Au Conseil constitutionnel"],
    correct: 1,
    explanation: "L'article 3 de la Constitution dispose que la souveraineté nationale appartient au peuple, qui l'exerce par ses représentants (élus) et par la voie du référendum."
  },
  {
    id: "OFF_I4", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qui est élu lors des élections municipales ?",
    a: ["Le préfet", "Le conseil municipal, qui élit ensuite le maire en son sein", "Les députés du département", "Le président du conseil régional"],
    correct: 1,
    explanation: "Les élections municipales permettent d'élire le conseil municipal, qui élit ensuite en son sein le maire, chargé de diriger la commune."
  },
  {
    id: "OFF_I5", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "L'inscription sur les listes électorales est :",
    a: ["Facultative et sans intérêt pour voter", "Obligatoire pour pouvoir participer aux élections", "Réservée aux personnes propriétaires d'un logement", "Automatique dès la naissance, sans démarche"],
    correct: 1,
    explanation: "L'inscription sur les listes électorales est obligatoire pour pouvoir voter. Elle est automatique à 18 ans pour les jeunes déjà recensés, mais reste nécessaire en cas de déménagement ou d'acquisition de la nationalité."
  },
  {
    id: "OFF_I6", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quelle condition est nécessaire pour voter aux élections présidentielles ?",
    a: ["Être résident en France depuis au moins 10 ans", "Être de nationalité française, avoir 18 ans et être inscrit sur les listes électorales", "Payer des impôts en France", "Posséder un diplôme reconnu par l'État"],
    correct: 1,
    explanation: "Pour voter à l'élection présidentielle, il faut être de nationalité française, avoir 18 ans révolus et être inscrit sur les listes électorales."
  },
  {
    id: "OFF_I7", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quelle condition faut-il remplir pour être candidat aux élections municipales ?",
    a: ["Être uniquement de nationalité française", "Être majeur, inscrit sur les listes électorales de la commune (ou y payer des impôts), et être citoyen français ou d'un pays de l'UE", "Résider en France depuis plus de 20 ans", "Être propriétaire d'un bien dans la commune"],
    correct: 1,
    explanation: "Pour être candidat aux élections municipales, il faut être majeur, inscrit sur les listes électorales de la commune (ou y payer des impôts), et être citoyen français ou ressortissant d'un autre État membre de l'Union européenne."
  },
  {
    id: "OFF_I8", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Parmi ces autorités, laquelle est élue ?",
    a: ["Le préfet", "Le maire", "Le procureur de la République", "Le directeur général des services de la mairie"],
    correct: 1,
    explanation: "Le maire est élu (par le conseil municipal, lui-même élu par les citoyens). Le préfet, le procureur et le directeur général des services sont nommés, non élus."
  },
  {
    id: "OFF_I9", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quelles sont les fonctions du maire ?",
    a: ["Il vote les lois nationales", "Il dirige l'administration communale, représente l'État en tant qu'officier d'état civil, et assure la sécurité et la salubrité publiques dans sa commune", "Il nomme les préfets de son département", "Il dirige exclusivement la police nationale"],
    correct: 1,
    explanation: "Le maire dirige l'administration de sa commune, agit comme officier d'état civil (mariages, naissances) au nom de l'État, et est responsable de la sécurité et de la salubrité publiques sur le territoire communal."
  },
  {
    id: "OFF_I10", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Une personne, n'ayant pas d'accès à internet, veut s'inscrire sur les listes électorales pour pouvoir voter aux prochaines élections politiques. Où peut-elle s'inscrire ?",
    a: ["Uniquement en ligne, aucune autre option n'existe", "À la mairie de son domicile", "Au commissariat de police", "Auprès de son employeur"],
    correct: 1,
    explanation: "En l'absence d'accès à internet, il est possible de s'inscrire sur les listes électorales directement à la mairie de son domicile, muni d'une pièce d'identité et d'un justificatif de domicile."
  },
  {
    id: "OFF_I11", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "À quel âge peut-on devenir électeur ?",
    a: ["16 ans", "18 ans", "21 ans", "20 ans"],
    correct: 1,
    explanation: "18 ans. L'inscription sur les listes électorales devient possible, et généralement automatique, dès la majorité."
  },
  {
    id: "OFF_I12", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "En France, est-ce obligatoire de voter ?",
    a: ["Oui, sous peine d'amende", "Non, le vote n'est pas obligatoire, mais c'est un droit et un devoir civique important", "Oui, uniquement pour l'élection présidentielle", "Oui, depuis une réforme de 2022"],
    correct: 1,
    explanation: "Non, le vote n'est pas obligatoire en France, contrairement à certains pays (comme la Belgique). C'est néanmoins considéré comme un droit fondamental et un devoir civique essentiel à la vie démocratique."
  },
  {
    id: "OFF_I13", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "A-t-on le droit de ne pas respecter une loi ?",
    a: ["Oui, en cas de désaccord personnel avec son contenu", "Non, la loi s'impose à tous, sans exception", "Oui, si l'on est de nationalité étrangère", "Oui, pendant la première année de résidence en France"],
    correct: 1,
    explanation: "Non. La loi s'impose à tous, sans exception, y compris à l'État. Tout manquement expose à des sanctions pénales ou civiles."
  },
  {
    id: "OFF_I14", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Comment sont désignés les députés ?",
    a: ["Ils sont nommés par le Président de la République", "Ils sont élus au suffrage universel direct dans leur circonscription", "Ils sont désignés par les conseils régionaux", "Ils sont tirés au sort parmi les citoyens"],
    correct: 1,
    explanation: "Les 577 députés sont élus au suffrage universel direct, chacun dans sa circonscription, pour un mandat de 5 ans."
  },
  {
    id: "OFF_I15", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qui vote les lois ?",
    a: ["Le Président de la République seul", "Le Parlement (Assemblée nationale et Sénat)", "Le gouvernement", "Le Conseil constitutionnel"],
    correct: 1,
    explanation: "Le Parlement, composé de l'Assemblée nationale et du Sénat, vote les lois. En cas de désaccord entre les deux chambres, l'Assemblée nationale a le dernier mot."
  },
  {
    id: "OFF_I16", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
    a: ["Le pouvoir national, local et européen", "Le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire", "Le pouvoir présidentiel, préfectoral et municipal", "Le pouvoir religieux, civil et militaire"],
    correct: 1,
    explanation: "Le pouvoir exécutif (Président + gouvernement), le pouvoir législatif (Parlement) et le pouvoir judiciaire (magistrats), dont la séparation garantit l'équilibre démocratique."
  },
  {
    id: "OFF_I17", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qu'est-ce que l'État de droit ?",
    a: ["Un régime où seul le gouvernement décide des règles sans contrôle", "Le principe selon lequel toutes les personnes et institutions, y compris l'État, sont soumises à la loi", "Un régime où la Constitution peut être suspendue en cas de crise", "Un système réservé aux citoyens nationaux"],
    correct: 1,
    explanation: "L'État de droit signifie que toutes les personnes et institutions, y compris l'État lui-même, sont soumises à la loi. Il garantit les droits fondamentaux et l'indépendance de la justice."
  },
  {
    id: "OFF_I18", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quelles sont les durées du mandat du conseil municipal et du maire ?",
    a: ["4 ans", "6 ans", "5 ans", "3 ans"],
    correct: 1,
    explanation: "6 ans. Le conseil municipal, qui élit le maire en son sein, est renouvelé tous les 6 ans lors des élections municipales."
  },
  {
    id: "OFF_I19", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qui est élu lors des élections législatives ?",
    a: ["Le Président de la République", "Les députés à l'Assemblée nationale", "Les sénateurs", "Les maires"],
    correct: 1,
    explanation: "Les élections législatives permettent d'élire les 577 députés qui siègent à l'Assemblée nationale."
  },
  {
    id: "OFF_I20", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quelle est la durée du mandat du Président de la République française ?",
    a: ["4 ans", "5 ans", "7 ans", "6 ans"],
    correct: 1,
    explanation: "5 ans (quinquennat), renouvelable une fois consécutivement depuis la révision constitutionnelle de 2000."
  },
  {
    id: "OFF_I21", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quelle est la durée du mandat des députés ?",
    a: ["3 ans", "5 ans", "6 ans", "7 ans"],
    correct: 1,
    explanation: "5 ans, sauf dissolution anticipée de l'Assemblée nationale par le Président de la République."
  },
  {
    id: "OFF_I22", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quelle est la durée du mandat des sénateurs ?",
    a: ["4 ans", "6 ans", "9 ans", "5 ans"],
    correct: 1,
    explanation: "6 ans, renouvelable par moitié tous les 3 ans. Les sénateurs sont élus au suffrage universel indirect par les grands électeurs."
  },
  {
    id: "OFF_I23", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qui dirige l'action du gouvernement ?",
    a: ["Le président de l'Assemblée nationale", "Le Premier ministre", "Le président du Sénat", "Le président de la République seul"],
    correct: 1,
    explanation: "Le Premier ministre dirige l'action du gouvernement, coordonne le travail des ministres et est responsable devant l'Assemblée nationale."
  },
  {
    id: "OFF_I24", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "En France, est-ce possible d'adhérer à un parti politique ?",
    a: ["Non, seuls les élus peuvent adhérer à un parti", "Oui, toute personne est libre d'adhérer à un parti politique de son choix, dans le cadre de la loi", "Oui, mais uniquement pour les personnes de nationalité française", "Non, les partis politiques sont réservés aux professionnels de la politique"],
    correct: 1,
    explanation: "Oui, la liberté d'adhérer à un parti politique découle de la liberté d'association, garantie par la loi. Toute personne, y compris les résidents étrangers, peut en principe y adhérer, sauf restrictions spécifiques à certaines fonctions."
  },
  {
    id: "OFF_I25", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qui sanctionne l'auteur d'un vol ?",
    a: ["Le maire de la commune", "Un juge (tribunal)", "Le commissaire de police", "Le préfet du département"],
    correct: 1,
    explanation: "Un juge, au sein d'un tribunal (tribunal correctionnel pour les délits comme le vol simple), sanctionne l'auteur d'une infraction."
  },
  {
    id: "OFF_I26", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qui gère les collèges publics ?",
    a: ["La commune", "Le département", "La région", "L'État seul, sans collectivité territoriale"],
    correct: 1,
    explanation: "Le département a la charge de la construction, de l'entretien et du fonctionnement matériel des collèges publics, tandis que l'État gère les enseignants et les programmes."
  },
  {
    id: "OFF_I27", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qui gère les écoles primaires et maternelles publiques ?",
    a: ["La région", "La commune", "Le département", "L'État seul"],
    correct: 1,
    explanation: "La commune a la charge des écoles primaires et maternelles publiques : locaux, équipements, personnel technique, tandis que l'État gère les enseignants et les programmes scolaires."
  },
  {
    id: "OFF_I28", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Comment sont désignés les maires ?",
    a: ["Ils sont élus au suffrage universel direct par tous les citoyens", "Ils sont élus par le conseil municipal, en son sein, après les élections municipales", "Ils sont nommés par le préfet", "Ils sont désignés par le président de la République"],
    correct: 1,
    explanation: "Le maire est élu par les conseillers municipaux, en leur sein, lors de la première réunion du conseil municipal suivant les élections municipales."
  },
  {
    id: "OFF_I29", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quelle collectivité territoriale est responsable des transports régionaux ?",
    a: ["La commune", "La région", "Le département", "L'État"],
    correct: 1,
    explanation: "La région est responsable de l'organisation des transports régionaux, notamment des trains express régionaux (TER)."
  },
  {
    id: "OFF_I30", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quelle est l'une des voies possibles pour modifier la Constitution ?",
    a: ["Un simple vote de l'Assemblée nationale à la majorité simple", "Un référendum, ou un vote du Congrès (Assemblée nationale et Sénat réunis) à la majorité des trois cinquièmes", "Un décret du Président de la République", "Une décision du Conseil constitutionnel seul"],
    correct: 1,
    explanation: "La révision de la Constitution nécessite un vote des deux chambres en termes identiques, puis une adoption par référendum, ou par le Congrès (Assemblée nationale et Sénat réunis) à la majorité des trois cinquièmes."
  },
  {
    id: "OFF_I31", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qui assure l'intérim du président de la République en cas de décès ?",
    a: ["Le Premier ministre", "Le président du Sénat", "Le président de l'Assemblée nationale", "Le président du Conseil constitutionnel"],
    correct: 1,
    explanation: "En cas de vacance de la présidence (décès, démission, empêchement), c'est le président du Sénat qui assure l'intérim, dans l'attente d'une nouvelle élection présidentielle."
  },
  {
    id: "OFF_I32", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quel est le rôle du Conseil constitutionnel ?",
    a: ["Voter les lois à la place du Parlement", "Veiller à la conformité des lois à la Constitution et contrôler la régularité des élections", "Diriger l'action du gouvernement", "Nommer les préfets et les ambassadeurs"],
    correct: 1,
    explanation: "Le Conseil constitutionnel veille à la conformité des lois à la Constitution et contrôle la régularité des élections présidentielles, législatives et des référendums."
  },
  {
    id: "OFF_I33", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quelle condition est obligatoire pour se présenter à l'élection présidentielle ?",
    a: ["Avoir déjà été élu à un mandat local", "Recueillir au moins 500 parrainages d'élus habilités", "Être membre d'un parti politique représenté au Parlement", "Avoir résidé au moins 10 ans à l'étranger"],
    correct: 1,
    explanation: "Tout candidat à l'élection présidentielle doit recueillir au moins 500 parrainages (signatures) d'élus habilités, provenant d'au moins 30 départements ou collectivités différents."
  },
  {
    id: "OFF_I34", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Combien y a-t-il de départements en France ?",
    a: ["96 départements", "101 départements", "89 départements", "88 départements"],
    correct: 1,
    explanation: "101 départements au total : 96 en métropole et 5 départements d'outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte)."
  },
  {
    id: "OFF_I35", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Comment est organisé le découpage administratif de la France ?",
    a: ["En un seul échelon centralisé, sans collectivités locales", "En communes, départements et régions, chacun disposant de compétences propres", "En provinces héritées de l'Ancien Régime", "En cantons autonomes indépendants de l'État"],
    correct: 1,
    explanation: "La France est organisée en trois niveaux de collectivités territoriales : les communes, les départements et les régions, chacun avec des compétences propres, aux côtés des services déconcentrés de l'État."
  },
  {
    id: "OFF_I36", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qui représente l'État dans un département ?",
    a: ["Le maire de la plus grande ville", "Le préfet", "Le président du conseil départemental", "Le procureur de la République"],
    correct: 1,
    explanation: "Le préfet, nommé par le gouvernement, représente l'État dans un département. Il veille à l'application des lois et à l'ordre public."
  },
  {
    id: "OFF_I37", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quel est le rôle du Président de la République ?",
    a: ["Voter les lois à la place du Parlement", "Garantir le respect de la Constitution, assurer la continuité de l'État et être chef des armées", "Trancher directement les litiges judiciaires privés", "Diriger les débats à l'Assemblée nationale"],
    correct: 1,
    explanation: "Le Président garantit le respect de la Constitution, assure la continuité de l'État, nomme le Premier ministre, préside le Conseil des ministres et est chef des armées."
  },
  {
    id: "OFF_I38", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quel est le rôle du Premier ministre ?",
    a: ["Remplacer les juges de la Cour de cassation", "Diriger l'action du gouvernement, coordonner les ministres et appliquer les lois votées par le Parlement", "Présider toutes les séances du Sénat", "Nommer les préfets sans consultation du gouvernement"],
    correct: 1,
    explanation: "Le Premier ministre dirige l'action du gouvernement, coordonne le travail des ministres, applique les lois votées par le Parlement et rend compte de son action devant l'Assemblée nationale."
  },
  {
    id: "OFF_I39", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quel est le rôle du Défenseur des droits ?",
    a: ["Défendre l'État français devant les instances internationales", "Défendre les personnes dont les droits ne sont pas respectés et lutter contre les discriminations", "Rédiger les contrats de travail de la fonction publique", "Nommer les magistrats"],
    correct: 1,
    explanation: "Le Défenseur des droits défend les personnes dont les droits ne sont pas respectés, lutte contre les discriminations, et peut être saisi gratuitement par toute personne."
  },
  {
    id: "OFF_I40", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "En quelle année la citoyenneté européenne a-t-elle été créée ?",
    a: ["1957", "1992", "2002", "1951"],
    correct: 1,
    explanation: "La citoyenneté européenne a été créée par le traité de Maastricht en 1992, qui a également créé l'Union européenne."
  },
  {
    id: "OFF_I41", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qui a composé l'hymne de l'Union européenne ?",
    a: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Claude Debussy", "Johann Sebastian Bach"],
    correct: 1,
    explanation: "L'hymne européen est tiré de « l'Ode à la joie », thème choral de la 9e Symphonie de Ludwig van Beethoven."
  },
  {
    id: "OFF_I42", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quand est célébrée la journée de l'Europe ?",
    a: ["Le 1er mai", "Le 9 mai", "Le 14 juillet", "Le 5 mai"],
    correct: 1,
    explanation: "Le 9 mai, en commémoration de la déclaration Schuman du 9 mai 1950, considérée comme l'acte fondateur de la construction européenne."
  },
  {
    id: "OFF_I43", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Où est le siège de la Banque centrale européenne ?",
    a: ["À Bruxelles", "À Francfort", "À Strasbourg", "À Luxembourg"],
    correct: 1,
    explanation: "Le siège de la Banque centrale européenne (BCE) est situé à Francfort, en Allemagne."
  },
  {
    id: "OFF_I44", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Où est le siège de la Commission européenne ?",
    a: ["À Rome", "À Bruxelles", "À Strasbourg", "À Luxembourg"],
    correct: 1,
    explanation: "La Commission européenne a son siège à Bruxelles, en Belgique."
  },
  {
    id: "OFF_I45", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qui siège au Parlement européen ?",
    a: ["Des ministres désignés par chaque gouvernement national", "Des députés européens élus au suffrage universel direct par les citoyens de l'Union", "Des fonctionnaires nommés par la Commission", "Des représentants des entreprises européennes"],
    correct: 1,
    explanation: "Le Parlement européen est composé de députés européens, élus au suffrage universel direct par les citoyens des États membres, tous les 5 ans."
  },
  {
    id: "OFF_I46", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?",
    a: ["15 États membres", "27 États membres", "32 États membres", "28 États membres"],
    correct: 1,
    explanation: "27 États membres composent l'Union européenne depuis le départ du Royaume-Uni (Brexit) en 2020."
  },
  {
    id: "OFF_I47", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "En quelle année le traité de Maastricht, qui marque la fondation de l'Union européenne, a-t-il été signé ?",
    a: ["1957", "1992", "2005", "1951"],
    correct: 1,
    explanation: "Le traité de Maastricht a été signé en 1992. Il a créé l'Union européenne, la citoyenneté européenne et posé les bases de l'euro."
  },
  {
    id: "OFF_I48", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quel traité concerne la construction de l'Union européenne ?",
    a: ["Le traité de Versailles", "Le traité de Maastricht", "Le traité de Paris de 1815", "Le traité de Vienne"],
    correct: 1,
    explanation: "Le traité de Maastricht (1992) a créé l'Union européenne. D'autres traités (Rome 1957, Lisbonne 2007) ont également marqué la construction européenne."
  },
  {
    id: "OFF_I49", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quel État a quitté l'Union Européenne en 2020 ?",
    a: ["L'Italie", "Le Royaume-Uni", "L'Espagne", "La Belgique"],
    correct: 1,
    explanation: "Le Royaume-Uni a quitté l'Union européenne le 31 janvier 2020 (Brexit)."
  },
  {
    id: "OFF_I50", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quel est l'hymne de l'Union Européenne ?",
    a: ["La Marseillaise", "L'Ode à la joie (9e Symphonie de Beethoven)", "Le Chant des partisans", "L'hymne à l'amour"],
    correct: 1,
    explanation: "L'hymne européen est l'Ode à la joie, tirée de la 9e Symphonie de Beethoven."
  },
  {
    id: "OFF_I51", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "De quoi est composé le drapeau européen ?",
    a: ["D'un nombre d'étoiles variant selon le nombre d'États membres", "D'un cercle de 12 étoiles jaunes sur fond bleu, symbole d'unité", "D'étoiles rouges sur fond blanc", "D'une étoile unique dorée sur fond bleu"],
    correct: 1,
    explanation: "Le drapeau européen comporte un cercle de 12 étoiles jaunes sur fond bleu. Le nombre 12 est fixe et symbolise la perfection et l'unité, indépendamment du nombre d'États membres."
  },
  {
    id: "OFF_I52", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Qui élit les députés européens ?",
    a: ["Les parlements nationaux", "Les citoyens européens, au suffrage universel direct", "Le Conseil des ministres européen", "Les gouvernements nationaux"],
    correct: 1,
    explanation: "Les citoyens des États membres de l'Union européenne élisent les députés européens au suffrage universel direct, tous les 5 ans."
  },
  {
    id: "OFF_I53", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Où est le siège du Parlement européen ?",
    a: ["À Paris", "À Strasbourg", "À Berlin", "À Bruxelles"],
    correct: 1,
    explanation: "Le siège officiel du Parlement européen est à Strasbourg, en France, avec des sessions de commissions à Bruxelles et un secrétariat au Luxembourg."
  },
  {
    id: "OFF_I54", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quel est le dernier État à avoir intégré l'Union Européenne en 2013 ?",
    a: ["La Croatie", "La Roumanie", "Chypre", "La Bulgarie"],
    correct: 0,
    explanation: "La Croatie est devenue le 28e État membre de l'Union européenne le 1er juillet 2013, le dernier pays à y avoir adhéré à ce jour."
  },
  {
    id: "OFF_I55", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Les citoyens de l'Union européenne peuvent-ils voter aux élections locales dans un autre État de l'Union ?",
    a: ["Non, seul le pays de nationalité permet de voter, même aux élections locales", "Oui, tout citoyen européen peut voter (et être candidat) aux élections municipales et européennes dans son pays de résidence au sein de l'UE", "Oui, mais uniquement aux élections européennes, jamais aux élections locales", "Non, ce droit n'existe que pour les élections présidentielles"],
    correct: 1,
    explanation: "Grâce à la citoyenneté européenne, tout ressortissant d'un État membre de l'UE peut voter et se présenter aux élections municipales et européennes dans son pays de résidence, même s'il n'en a pas la nationalité."
  },
  {
    id: "OFF_I56", theme: "Système institutionnel et politique", macro: "Système institutionnel et politique",
    q: "Quelle est la devise de l'Union européenne ?",
    a: ["Liberté, Égalité, Fraternité", "Unie dans la diversité", "Paix, Progrès et Solidarité", "Plus forts ensemble"],
    correct: 1,
    explanation: "« Unie dans la diversité » est la devise officielle de l'Union européenne, adoptée en 2000."
  },

  // ==========================================
  // --- DROITS ET DEVOIRS ---
  // ==========================================
  {
    id: "OFF_D1", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "À quoi sert le droit de grève ?",
    a: ["À obtenir automatiquement une augmentation de salaire", "À permettre aux salariés de cesser collectivement le travail pour défendre leurs intérêts professionnels", "À justifier une absence non rémunérée sans préavis", "À remplacer les négociations avec l'employeur"],
    correct: 1,
    explanation: "Le droit de grève, garanti par la Constitution, permet aux travailleurs de cesser collectivement le travail pour défendre leurs intérêts professionnels, dans un cadre légal encadré."
  },
  {
    id: "OFF_D2", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Au nom de quoi l'État justifie-t-il la restriction des droits ?",
    a: ["Au nom de la volonté personnelle du président", "Au nom de l'ordre public, de la santé, de la sécurité ou des droits d'autrui, dans un cadre proportionné fixé par la loi", "Au nom de considérations religieuses officielles", "Au nom de la seule opinion majoritaire exprimée dans les sondages"],
    correct: 1,
    explanation: "L'État justifie la restriction de certains droits au nom de l'ordre public, de la santé publique, de la sécurité ou des droits d'autrui, de manière proportionnée et encadrée par la loi, sous le contrôle du juge."
  },
  {
    id: "OFF_D3", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'Homme et du Citoyen de 1789 ?",
    a: ["« Le peuple est souverain et gouverne directement sans représentants »", "« Les hommes naissent et demeurent libres et égaux en droits »", "« La religion catholique est religion d'État »", "« La propriété est un privilège réservé à la noblesse »"],
    correct: 1,
    explanation: "L'article 1er de la DDHC de 1789 énonce : « Les hommes naissent et demeurent libres et égaux en droits. »"
  },
  {
    id: "OFF_D4", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "L'article 4 de la Déclaration des droits de l'homme et du citoyen affirme que \"la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui\". Qu'est-ce que cela signifie ?",
    a: ["Que l'on peut agir sans aucune limite tant qu'on n'est pas dénoncé", "Que la liberté de chacun s'arrête là où commence celle des autres, et là où la loi fixe des limites nécessaires", "Que seules les lois pénales limitent la liberté individuelle", "Que la liberté est un droit réservé aux personnes majeures et de nationalité française"],
    correct: 1,
    explanation: "Cela signifie que la liberté de chacun s'arrête là où commence celle des autres : on peut agir librement tant que cela ne nuit pas à autrui, dans les limites déterminées par la loi."
  },
  {
    id: "OFF_D5", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Que dit l'article 1er de la Constitution française ?",
    a: ["Il fixe la durée du mandat présidentiel", "Il affirme que la France est une République indivisible, laïque, démocratique et sociale, assurant l'égalité devant la loi", "Il définit la composition du gouvernement", "Il établit la liste des ministères"],
    correct: 1,
    explanation: "L'article 1er affirme que la France est une République indivisible, laïque, démocratique et sociale, qui assure l'égalité devant la loi de tous les citoyens sans distinction."
  },
  {
    id: "OFF_D6", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Que garantit la liberté de la presse ?",
    a: ["Le droit pour l'État de relire les articles avant publication", "Le droit des journalistes et des médias d'informer, d'enquêter et de publier librement, sans censure préalable", "L'obligation pour chaque citoyen d'acheter un journal", "Le droit pour l'État de subventionner uniquement la presse favorable au gouvernement"],
    correct: 1,
    explanation: "La liberté de la presse garantit le droit des journalistes et des médias d'informer, d'enquêter et de publier librement, sans censure préalable de l'État, dans les limites fixées par la loi (diffamation, secret-défense...)."
  },
  {
    id: "OFF_D7", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Que permet la liberté de circulation ?",
    a: ["De franchir n'importe quelle frontière sans document", "De se déplacer et de s'installer librement sur le territoire, dans le respect des lois", "D'occuper tout logement vacant sans autorisation", "De circuler sans respecter le code de la route"],
    correct: 1,
    explanation: "La liberté de circulation permet à toute personne de se déplacer et de s'installer librement sur le territoire, dans le respect des lois. Pour les étrangers, l'entrée et le séjour restent encadrés par les règles relatives aux titres de séjour."
  },
  {
    id: "OFF_D8", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Que signifie être citoyen d'un État ?",
    a: ["Être uniquement né sur le territoire de cet État", "Appartenir juridiquement à cet État, avec les droits (vote, protection) et les devoirs (respect des lois, impôts) qui en découlent", "Payer des impôts dans plusieurs pays à la fois", "Résider dans cet État sans en avoir la nationalité"],
    correct: 1,
    explanation: "Être citoyen d'un État signifie y appartenir juridiquement (par la nationalité), avec les droits qui en découlent (vote, protection consulaire, accès à certains emplois) et les devoirs correspondants (respect des lois, contribution fiscale...)."
  },
  {
    id: "OFF_D9", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Que sont les droits fondamentaux ?",
    a: ["Des avantages accordés uniquement aux fonctionnaires", "Des droits essentiels garantis à toute personne par la Constitution et les textes internationaux, comme la liberté d'expression ou le droit à un procès équitable", "Des droits réservés aux citoyens nés en France", "Des règles fixées librement par chaque employeur"],
    correct: 1,
    explanation: "Les droits fondamentaux sont des droits essentiels garantis à toute personne par la Constitution et les textes internationaux : liberté d'expression, de conscience, droit à un procès équitable, à l'éducation, à la santé..."
  },
  {
    id: "OFF_D10", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Quel droit protège une personne contre une arrestation arbitraire ?",
    a: ["Le droit de grève", "Le droit à la sûreté", "La liberté d'association", "Le droit de vote"],
    correct: 1,
    explanation: "Le droit à la sûreté, reconnu par la DDHC de 1789, protège chacun contre les arrestations et détentions arbitraires : nul ne peut être arrêté ou détenu que dans les cas et selon les formes prévus par la loi."
  },
  {
    id: "OFF_D11", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Quel est le texte fondateur établissant les droits et les devoirs de chaque citoyen ?",
    a: ["Le Code civil", "La Déclaration des Droits de l'Homme et du Citoyen (DDHC) de 1789", "Le Code du travail", "Le Traité de Versailles"],
    correct: 1,
    explanation: "La Déclaration des Droits de l'Homme et du Citoyen (DDHC) de 1789, qui a valeur constitutionnelle, est le texte fondateur des droits et devoirs des citoyens en France."
  },
  {
    id: "OFF_D12", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Quel texte affirme que tous les hommes naissent libres et égaux en droits ?",
    a: ["La Constitution de 1958", "La Déclaration des Droits de l'Homme et du Citoyen de 1789", "Le Code civil de 1804", "La Charte de l'environnement de 2004"],
    correct: 1,
    explanation: "L'article 1er de la DDHC de 1789 affirme : « Les hommes naissent et demeurent libres et égaux en droits. »"
  },
  {
    id: "OFF_D13", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Quelle situation est une atteinte à la dignité humaine ?",
    a: ["Le fait de refuser une augmentation de salaire", "Le fait de soumettre une personne à des traitements humiliants ou dégradants", "Le fait de perdre une élection", "Le fait de refuser un cadeau"],
    correct: 1,
    explanation: "Soumettre une personne à des traitements humiliants ou dégradants (esclavage moderne, exploitation, humiliations répétées) constitue une atteinte à la dignité humaine, principe protégé par la Constitution."
  },
  {
    id: "OFF_D14", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Qu'est-ce que la liberté d'expression ?",
    a: ["Le droit d'insulter publiquement autrui en cas de désaccord", "Le droit de chaque personne d'exprimer ses opinions librement, dans les limites fixées par la loi", "Une liberté réservée aux membres du gouvernement", "Le droit de publier sans jamais être identifié"],
    correct: 1,
    explanation: "Le droit de chaque personne d'exprimer ses opinions, ses idées et ses convictions librement, dans les limites fixées par la loi (pas d'incitation à la haine, à la violence, ni de diffamation)."
  },
  {
    id: "OFF_D15", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Suite à une interpellation par la police, il est possible de :",
    a: ["Refuser toute vérification d'identité sans justification", "Demander à connaître le motif du contrôle et, en cas de garde à vue, être informé de ses droits (avocat, médecin...)", "Résister physiquement si l'on juge le contrôle injustifié", "Refuser systématiquement de décliner son identité"],
    correct: 1,
    explanation: "Une personne interpellée peut demander à connaître le motif du contrôle. En cas de garde à vue, elle doit être informée de ses droits (assistance d'un avocat, examen médical, droit de prévenir un proche)."
  },
  {
    id: "OFF_D16", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Tous les citoyens français ont-ils une religion ?",
    a: ["Oui, la loi impose une affiliation religieuse à tout citoyen", "Non, chacun est libre de croire ou de ne pas croire, en vertu de la liberté de conscience", "Oui, sauf dérogation accordée par le préfet", "Non, uniquement les personnes nées après 1905"],
    correct: 1,
    explanation: "Non. La liberté de conscience garantit à chacun le droit de croire ou de ne pas croire, sans obligation d'affiliation religieuse."
  },
  {
    id: "OFF_D17", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "À quel âge est la majorité numérique en France ?",
    a: ["13 ans", "15 ans", "16 ans", "18 ans"],
    correct: 1,
    explanation: "La majorité numérique est fixée à 15 ans en France : en dessous de cet âge, l'inscription sur un réseau social nécessite l'autorisation d'un parent ou tuteur."
  },
  {
    id: "OFF_D18", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Dans lequel de ces endroits est-on autorisé à fumer ?",
    a: ["Dans un restaurant fermé", "En extérieur, en dehors des espaces publics où c'est expressément interdit (abords des écoles, plages...)", "Dans les transports en commun", "Dans un bureau partagé avec des collègues"],
    correct: 1,
    explanation: "Il est interdit de fumer dans les lieux publics fermés (restaurants, bureaux, transports). Fumer reste possible en extérieur, sauf dans les zones où cela est expressément interdit (abords des écoles, certaines plages, parcs)."
  },
  {
    id: "OFF_D19", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "En France, la conduite sans permis d'une moto est :",
    a: ["Autorisée si le conducteur est majeur", "Une infraction pénale, sanctionnée par une amende et pouvant aller jusqu'à une peine de prison", "Tolérée pour de courts trajets", "Autorisée uniquement le week-end"],
    correct: 1,
    explanation: "Conduire un véhicule à moteur sans permis est une infraction pénale, sanctionnée par une amende pouvant être élevée et, en cas de récidive, par une peine d'emprisonnement."
  },
  {
    id: "OFF_D20", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "En quoi consiste le devoir de solidarité ?",
    a: ["L'obligation de donner de l'argent à toute personne qui le demande", "La contribution de chacun, notamment par l'impôt et les cotisations sociales, à l'aide et à la protection des membres les plus vulnérables de la société", "L'obligation d'héberger des personnes sans domicile", "Un principe purement moral, sans traduction légale"],
    correct: 1,
    explanation: "Le devoir de solidarité se traduit notamment par la contribution de chacun, via l'impôt et les cotisations sociales, au financement de la protection sociale et de l'aide aux personnes les plus vulnérables."
  },
  {
    id: "OFF_D21", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Est-ce légal d'être marié à plusieurs personnes en même temps ?",
    a: ["Oui, si le premier conjoint donne son accord écrit", "Non, la polygamie est interdite en France", "Oui, si le mariage a été célébré à l'étranger", "Oui, pour les résidents de nationalité étrangère uniquement"],
    correct: 1,
    explanation: "Non. La polygamie est interdite en France. Le mariage ne peut être contracté qu'entre deux personnes, et la bigamie est un délit pénalement sanctionné."
  },
  {
    id: "OFF_D22", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Est-ce obligatoire de déclarer ses impôts chaque année en France ?",
    a: ["Non, uniquement si les revenus dépassent un certain seuil élevé", "Oui, chaque foyer fiscal doit déclarer ses revenus chaque année, même en l'absence d'impôt à payer", "Non, seuls les salariés doivent le faire", "Oui, mais uniquement tous les deux ans"],
    correct: 1,
    explanation: "Oui, chaque foyer fiscal doit remplir une déclaration de revenus chaque année, même lorsque le montant de l'impôt dû est nul."
  },
  {
    id: "OFF_D23", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Est-il obligatoire de porter secours à une personne en danger ?",
    a: ["Non, c'est un acte volontaire sans conséquence légale", "Oui, la non-assistance à personne en danger est une infraction pénale", "Oui, uniquement pour les professionnels de santé", "Non, seuls les témoins directs d'un accident y sont tenus"],
    correct: 1,
    explanation: "Oui. En France, la non-assistance à personne en danger est une infraction pénale : chacun a l'obligation d'agir ou d'alerter les secours face à une personne en péril, sans se mettre soi-même en danger."
  },
  {
    id: "OFF_D24", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Être juré d'assises est :",
    a: ["Facultatif, chacun peut refuser sans motif", "Une obligation civique, sauf motif légitime d'excuse", "Réservé aux personnes titulaires d'un diplôme de droit", "Une fonction rémunérée comme un emploi salarié"],
    correct: 1,
    explanation: "Être juré d'assises est une obligation civique. Toute personne tirée au sort et remplissant les conditions légales doit y répondre, sauf motif légitime d'excuse accepté par le président de la cour d'assises."
  },
  {
    id: "OFF_D25", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Que doit faire un citoyen s'il est appelé à être juré dans un procès d'assises ?",
    a: ["Il peut refuser librement sans justification", "Il doit en principe répondre à la convocation, sauf motif légitime d'excuse reconnu", "Il doit payer une taxe pour être exempté", "Il ne peut être appelé qu'une seule fois dans sa vie"],
    correct: 1,
    explanation: "Un citoyen convoqué comme juré d'assises doit en principe répondre à cette obligation civique, sauf s'il présente un motif légitime d'excuse, apprécié par le président de la cour d'assises."
  },
  {
    id: "OFF_D26", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Qui peut être appelé à faire partie d'un jury d'assises en France ?",
    a: ["Uniquement les personnes ayant fait des études de droit", "Tout citoyen français majeur, jouissant de ses droits civiques, tiré au sort sur les listes électorales", "Uniquement les fonctionnaires", "Toute personne résidant en France, quelle que soit sa nationalité"],
    correct: 1,
    explanation: "Tout citoyen français majeur, jouissant de ses droits civiques et politiques, peut être tiré au sort sur les listes électorales pour être juré d'une cour d'assises."
  },
  {
    id: "OFF_D27", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "La vente d'alcool en France est interdite aux personnes de moins de :",
    a: ["16 ans", "18 ans", "21 ans", "16 ans pour la bière, 18 ans pour le reste"],
    correct: 1,
    explanation: "La vente d'alcool est interdite aux mineurs de moins de 18 ans, quel que soit le type de boisson alcoolisée."
  },
  {
    id: "OFF_D28", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Le non-respect du code de la route est :",
    a: ["Toléré tant qu'il n'y a pas d'accident", "Une infraction (contravention, délit ou crime selon la gravité) passible de sanctions", "Sans conséquence pour les résidents étrangers", "Puni uniquement par un simple avertissement oral"],
    correct: 1,
    explanation: "Le non-respect du code de la route constitue une infraction, dont la gravité varie (contravention, délit, voire crime en cas d'homicide routier), passible d'amendes, de retrait de points, voire de peines de prison."
  },
  {
    id: "OFF_D29", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Lequel de ces crimes ou délits peut entraîner la privation des droits civils et politiques par un juge ?",
    a: ["Un simple excès de vitesse", "Une corruption ou un crime grave (meurtre, terrorisme...)", "Le fait de changer plusieurs fois d'emploi", "Le fait de ne pas voter à une élection"],
    correct: 1,
    explanation: "Certains crimes ou délits graves, comme la corruption ou des crimes graves, peuvent entraîner une peine complémentaire de privation des droits civils et politiques (droit de vote, d'éligibilité...), prononcée par un juge."
  },
  {
    id: "OFF_D30", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Une personne est privée de ses droits civils et politiques pendant 5 ans suite à une condamnation. Parmi ces propositions laquelle est correcte ? Pendant 5 ans, ...",
    a: ["elle perd également sa nationalité française", "elle ne peut notamment pas voter ni être candidate à une élection", "elle ne peut plus travailler dans le secteur privé", "elle doit obligatoirement quitter le territoire français"],
    correct: 1,
    explanation: "La privation des droits civils et politiques empêche notamment de voter et de se présenter à une élection pendant la durée fixée par le juge. Elle n'entraîne ni perte de nationalité, ni interdiction de travailler dans le privé."
  },
  {
    id: "OFF_D31", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Pour obtenir une carte d'identité, il faut :",
    a: ["Être uniquement majeur", "Être de nationalité française et fournir les pièces justificatives demandées (état civil, domicile, photo...)", "Payer une taxe annuelle renouvelable", "Résider en France depuis plus de 5 ans"],
    correct: 1,
    explanation: "Pour obtenir une carte nationale d'identité, il faut être de nationalité française et fournir les pièces justificatives requises (acte de naissance, justificatif de domicile, photo d'identité conforme)."
  },
  {
    id: "OFF_D32", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Pour quel motif peut-on limiter la liberté d'expression ?",
    a: ["Uniquement si l'auteur des propos est étranger", "Pour protéger l'ordre public, empêcher l'incitation à la haine ou à la violence, et protéger la réputation d'autrui", "Dès lors que les propos critiquent une décision du gouvernement", "Jamais : la liberté d'expression est absolue en France"],
    correct: 1,
    explanation: "La liberté d'expression peut être limitée pour protéger l'ordre public, empêcher l'incitation à la haine, à la discrimination ou à la violence, et protéger la réputation et les droits d'autrui (diffamation, injure)."
  },
  {
    id: "OFF_D33", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Quel est l'âge de la majorité civile en France ?",
    a: ["16 ans", "18 ans", "21 ans", "20 ans"],
    correct: 1,
    explanation: "L'âge de la majorité civile est fixé à 18 ans. À cet âge, une personne acquiert la pleine capacité juridique."
  },
  {
    id: "OFF_D34", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Quel est l'un des devoirs principaux d'un citoyen français ?",
    a: ["Adhérer obligatoirement à un parti politique", "Respecter la loi et contribuer aux charges publiques (impôts, cotisations)", "Voter à toutes les élections sous peine d'amende", "Effectuer un service militaire d'un an"],
    correct: 1,
    explanation: "Parmi les devoirs principaux d'un citoyen figurent le respect de la loi et la contribution aux charges publiques, notamment par le paiement des impôts."
  },
  {
    id: "OFF_D35", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Quelle est l'infraction la plus grave ?",
    a: ["La contravention", "Le crime", "Le délit", "L'irrégularité administrative"],
    correct: 1,
    explanation: "Le crime (ex : meurtre, viol, terrorisme) est l'infraction la plus grave. Les crimes sont jugés par la cour d'assises ou une cour criminelle."
  },
  {
    id: "OFF_D36", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Qu'est-ce que la citoyenneté numérique ?",
    a: ["Le droit de voter en ligne à toutes les élections", "L'ensemble des droits et responsabilités liés à l'usage d'internet : respect d'autrui, protection des données, lutte contre la désinformation", "Un statut réservé aux entreprises du numérique", "Le droit d'accéder gratuitement à internet"],
    correct: 1,
    explanation: "La citoyenneté numérique désigne l'ensemble des droits et responsabilités liés à l'usage d'internet et des réseaux sociaux : respect d'autrui en ligne, protection de ses données personnelles, esprit critique face à la désinformation."
  },
  {
    id: "OFF_D37", theme: "Droits et devoirs", macro: "Droits et devoirs",
    q: "Qu'est-ce que le devoir de mémoire ?",
    a: ["L'obligation d'apprendre par cœur les dates historiques", "L'obligation morale et collective de se souvenir des grands drames de l'histoire (guerres, génocides) pour honorer les victimes et prévenir leur répétition", "Un devoir réservé aux historiens professionnels", "L'obligation de visiter chaque année un monument aux morts"],
    correct: 1,
    explanation: "Le devoir de mémoire est l'obligation morale et collective de se souvenir des grands drames de l'histoire (guerres, génocides comme la Shoah) afin d'honorer les victimes et de prévenir la répétition de ces tragédies."
  },

  // ==========================================
  // --- HISTOIRE, GÉOGRAPHIE ET CULTURE ---
  // ==========================================
  {
    id: "OFF_H1", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Parmi ces textes, lequel a été adopté sous Napoléon Ier ?",
    a: ["La Déclaration des Droits de l'Homme et du Citoyen", "Le Code civil", "La Constitution de la Ve République", "La loi de séparation des Églises et de l'État"],
    correct: 1,
    explanation: "Le Code civil (dit « Code Napoléon ») a été adopté en 1804 sous Napoléon Ier. Il a unifié le droit civil français et influencé de nombreux systèmes juridiques dans le monde."
  },
  {
    id: "OFF_H2", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui a été président de la Ve République ?",
    a: ["Napoléon Bonaparte", "Charles de Gaulle", "Louis XVI", "Robespierre"],
    correct: 1,
    explanation: "Charles de Gaulle a été le premier président de la Ve République, fondée en 1958, élu en décembre de la même année."
  },
  {
    id: "OFF_H3", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Que signifie la date du 14 juillet pour les Français ?",
    a: ["L'armistice de la Première Guerre mondiale", "La commémoration de la prise de la Bastille en 1789 et la fête nationale", "La fin de la Seconde Guerre mondiale", "La fondation de la Ve République"],
    correct: 1,
    explanation: "Le 14 juillet commémore la prise de la Bastille (1789), symbole du début de la Révolution française, et constitue la fête nationale de la République."
  },
  {
    id: "OFF_H4", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Lequel de ces pays est un pays fondateur de l'Union Européenne ?",
    a: ["L'Espagne", "La France", "La Grèce", "Le Portugal"],
    correct: 1,
    explanation: "La France, l'Allemagne, l'Italie, la Belgique, les Pays-Bas et le Luxembourg sont les 6 membres fondateurs (traité de Rome, 1957)."
  },
  {
    id: "OFF_H5", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Dans quelle région est située une partie des plages du débarquement ayant permis d'engager la libération de la France ?",
    a: ["En Bretagne", "En Normandie", "En Provence uniquement", "Dans les Hauts-de-France"],
    correct: 1,
    explanation: "Les plages du débarquement du 6 juin 1944 sont situées en Normandie. Un second débarquement a eu lieu en Provence en août 1944."
  },
  {
    id: "OFF_H6", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Dans quelle ville les rois de France étaient-ils couronnés ?",
    a: ["À Paris", "À Reims", "À Versailles", "À Chartres"],
    correct: 1,
    explanation: "Les rois de France étaient traditionnellement sacrés dans la cathédrale de Reims, où fut notamment sacré Charles VII en présence de Jeanne d'Arc."
  },
  {
    id: "OFF_H7", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel roi de France a été guillotiné pendant la Révolution française ?",
    a: ["Louis XIV", "Louis XVI", "Louis XV", "Louis XVIII"],
    correct: 1,
    explanation: "Louis XVI a été guillotiné le 21 janvier 1793, place de la Révolution (actuelle place de la Concorde) à Paris."
  },
  {
    id: "OFF_H8", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "En quelle année a débuté la Révolution française ?",
    a: ["1492", "1789", "1914", "1799"],
    correct: 1,
    explanation: "1789. Le 14 juillet 1789, la prise de la Bastille marque le début de la Révolution qui met fin à la monarchie absolue."
  },
  {
    id: "OFF_H9", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "En quelle année Napoléon Ier est-il devenu empereur ?",
    a: ["1799", "1804", "1789", "1815"],
    correct: 1,
    explanation: "En 1804, Napoléon Bonaparte se fait sacrer empereur des Français sous le nom de Napoléon Ier."
  },
  {
    id: "OFF_H10", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Lequel de ces personnages a un lien avec la République française ?",
    a: ["Louis XIV", "Marianne", "Charlemagne", "Clovis"],
    correct: 1,
    explanation: "Marianne est le symbole officiel de la République française. Les autres personnages appartiennent à la période monarchique ou médiévale, antérieure à la République."
  },
  {
    id: "OFF_H11", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "De quand date l'appel à la résistance du général de Gaulle ?",
    a: ["Du 14 juillet 1940", "Du 18 juin 1940", "Du 11 novembre 1940", "Du 8 mai 1940"],
    correct: 1,
    explanation: "Le 18 juin 1940, depuis Londres, le général de Gaulle lance sur les ondes de la BBC un appel à poursuivre le combat contre l'Allemagne nazie."
  },
  {
    id: "OFF_H12", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qu'est-ce que la Shoah ?",
    a: ["Une bataille navale de la Première Guerre mondiale", "Le génocide de six millions de Juifs d'Europe organisé par le régime nazi", "Un traité d'alliance signé entre la France et le Royaume-Uni", "La déportation des résistants français vers l'Allemagne"],
    correct: 1,
    explanation: "Le génocide de six millions de Juifs d'Europe organisé par le régime nazi entre 1941 et 1945. La Shoah est enseignée à l'école pour prévenir toute résurgence de la haine."
  },
  {
    id: "OFF_H13", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel pays a été une colonie française ?",
    a: ["L'Espagne", "L'Algérie", "L'Italie", "La Belgique"],
    correct: 1,
    explanation: "L'Algérie a été une colonie française de 1830 à 1962. D'autres territoires en Afrique, en Asie du Sud-Est et dans les Caraïbes ont également été colonisés par la France."
  },
  {
    id: "OFF_H14", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui a rendu l'école gratuite, laïque et obligatoire ?",
    a: ["Napoléon Bonaparte", "Jules Ferry", "Charles de Gaulle", "Victor Hugo"],
    correct: 1,
    explanation: "Jules Ferry, ministre de l'Instruction publique sous la IIIe République (lois de 1881 et 1882), a fondé l'école républicaine française."
  },
  {
    id: "OFF_H15", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel est l'objectif des lois scolaires de la IIIe République ?",
    a: ["Réserver l'école aux garçons issus de familles aisées", "Rendre l'école gratuite, laïque et obligatoire pour tous les enfants", "Instaurer un enseignement exclusivement religieux", "Confier l'école entièrement à des établissements privés"],
    correct: 1,
    explanation: "Les lois de Jules Ferry (1881-1882) ont rendu l'école primaire publique gratuite, laïque et obligatoire pour tous les enfants, garçons et filles, posant les bases de l'école républicaine."
  },
  {
    id: "OFF_H16", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Depuis quand les Français élisent-ils le président de la République au suffrage universel direct ?",
    a: ["Depuis 1958", "Depuis 1965", "Depuis 1981", "Depuis 1945"],
    correct: 1,
    explanation: "Depuis 1965, à la suite d'une révision constitutionnelle adoptée par référendum en 1962 à l'initiative du général de Gaulle."
  },
  {
    id: "OFF_H17", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "En quelle année l'Union européenne a-t-elle été fondée ?",
    a: ["1957", "1992", "1951", "2002"],
    correct: 1,
    explanation: "L'Union européenne, en tant que telle, a été créée par le traité de Maastricht en 1992, qui a succédé à la Communauté économique européenne (CEE) fondée en 1957."
  },
  {
    id: "OFF_H18", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quand a eu lieu la Seconde guerre mondiale ?",
    a: ["De 1914 à 1918", "De 1939 à 1945", "De 1954 à 1962", "De 1870 à 1871"],
    correct: 1,
    explanation: "De 1939 à 1945. La France a été occupée par l'Allemagne nazie de 1940 à 1944, avant d'être libérée grâce aux Alliés et à la Résistance."
  },
  {
    id: "OFF_H19", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quand a eu lieu la Première guerre mondiale ?",
    a: ["De 1870 à 1871", "De 1914 à 1918", "De 1939 à 1945", "De 1954 à 1962"],
    correct: 1,
    explanation: "De 1914 à 1918. L'armistice a été signé le 11 novembre 1918, mettant fin au conflit."
  },
  {
    id: "OFF_H20", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Sous quel président a été abolie la peine de mort en France ?",
    a: ["Charles de Gaulle", "François Mitterrand", "Valéry Giscard d'Estaing", "Jacques Chirac"],
    correct: 1,
    explanation: "François Mitterrand, élu en 1981. La loi abolissant la peine de mort a été votée le 9 octobre 1981 à l'initiative de son garde des Sceaux, Robert Badinter."
  },
  {
    id: "OFF_H21", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Que célèbre-t-on le 8 mai ?",
    a: ["La prise de la Bastille", "La capitulation de l'Allemagne nazie en 1945, marquant la fin de la Seconde Guerre mondiale en Europe", "La fête du Travail", "L'armistice de 1918"],
    correct: 1,
    explanation: "Le 8 mai commémore la capitulation sans conditions de l'Allemagne nazie en 1945, marquant la fin de la Seconde Guerre mondiale sur le continent européen."
  },
  {
    id: "OFF_H22", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle est la première étape de la construction européenne en 1951 ?",
    a: ["Le traité de Rome créant la CEE", "La création de la Communauté Européenne du Charbon et de l'Acier (CECA)", "Le traité de Maastricht", "La création de l'espace Schengen"],
    correct: 1,
    explanation: "En 1951, le traité de Paris crée la Communauté Européenne du Charbon et de l'Acier (CECA), première étape de la construction européenne."
  },
  {
    id: "OFF_H23", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui était une figure de la Résistance française pendant la Seconde Guerre mondiale ?",
    a: ["Louis Pasteur", "Jean Moulin", "Victor Hugo", "Robert Badinter"],
    correct: 1,
    explanation: "Jean Moulin (1899-1943) fut l'une des grandes figures de la Résistance française, chargé par le général de Gaulle d'unifier les mouvements de résistance. Il est entré au Panthéon en 1964."
  },
  {
    id: "OFF_H24", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Le 11 novembre est un jour férié. À quoi correspond cette date ?",
    a: ["À la fête du travail", "À la commémoration de l'armistice de 1918", "À la célébration de la Constitution", "À la fin de la Seconde Guerre mondiale"],
    correct: 1,
    explanation: "À la commémoration de l'armistice du 11 novembre 1918, qui a mis fin à la Première Guerre mondiale."
  },
  {
    id: "OFF_H25", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Depuis quand l'esclavage a-t-il été aboli en France ?",
    a: ["Depuis 1789", "Depuis 1848", "Depuis 1905", "Depuis 1794"],
    correct: 1,
    explanation: "Depuis 1848, par le décret Schoelcher du 27 avril 1848, sous la IIe République."
  },
  {
    id: "OFF_H26", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui a aboli l'esclavage en France ?",
    a: ["Napoléon Bonaparte", "Victor Schoelcher", "Jules Ferry", "Charles de Gaulle"],
    correct: 1,
    explanation: "Victor Schoelcher, sous-secrétaire d'État à la Marine et aux Colonies, est l'auteur du décret du 27 avril 1848 abolissant définitivement l'esclavage dans les colonies françaises."
  },
  {
    id: "OFF_H27", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Depuis quelle année l'école publique est-elle gratuite ?",
    a: ["1789", "1881", "1945", "1905"],
    correct: 1,
    explanation: "1881 (loi Jules Ferry rendant l'enseignement primaire public gratuit)."
  },
  {
    id: "OFF_H28", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "En 1944, qu'est-ce qui a changé pour les femmes ?",
    a: ["Elles ont obtenu le droit de travailler sans l'accord de leur mari", "Elles ont obtenu le droit de vote et d'éligibilité", "Elles ont obtenu le droit à la contraception", "Elles ont obtenu l'égalité salariale garantie par la loi"],
    correct: 1,
    explanation: "En 1944, l'ordonnance du général de Gaulle accorde aux femmes le droit de vote et d'éligibilité, appliqué pour la première fois lors des élections municipales d'avril 1945."
  },
  {
    id: "OFF_H29", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Simone Veil est une figure importante de l'histoire française. Elle a notamment :",
    a: ["Fondé la Ve République", "Fait adopter la loi légalisant l'interruption volontaire de grossesse (IVG) en 1975, et présidé le premier Parlement européen élu au suffrage universel", "Aboli la peine de mort en France", "Créé la Sécurité sociale en 1945"],
    correct: 1,
    explanation: "Simone Veil, ministre de la Santé, a fait adopter en 1975 la loi légalisant l'IVG. Elle a ensuite présidé le premier Parlement européen élu au suffrage universel direct, en 1979. Elle est entrée au Panthéon en 2018."
  },
  {
    id: "OFF_H30", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle organisation a été créée en 1945 après la Seconde Guerre mondiale ?",
    a: ["L'Union européenne", "L'Organisation des Nations unies (ONU)", "L'OTAN", "L'OMC"],
    correct: 1,
    explanation: "L'Organisation des Nations unies (ONU) a été créée en 1945, pour maintenir la paix et la sécurité internationales après les deux guerres mondiales."
  },
  {
    id: "OFF_H31", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "En quelle année l'euro est-il devenu la monnaie officielle de la France ?",
    a: ["1999 (monnaie scripturale) puis 2002 (pièces et billets)", "1992", "1957", "2010"],
    correct: 0,
    explanation: "L'euro a été introduit comme monnaie scripturale le 1er janvier 1999, puis mis en circulation sous forme de pièces et billets le 1er janvier 2002."
  },
  {
    id: "OFF_H32", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Lors de la seconde guerre mondiale, à quelle date la ville de Paris a-t-elle été libérée ?",
    a: ["Le 6 juin 1944", "Le 25 août 1944", "Le 8 mai 1945", "Le 11 novembre 1944"],
    correct: 1,
    explanation: "Paris a été libérée le 25 août 1944, après une insurrection populaire et l'entrée des troupes de la 2e Division Blindée du général Leclerc."
  },
  {
    id: "OFF_H33", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel était le principal port français impliqué dans la traite négrière au XVIIIe siècle ?",
    a: ["Marseille", "Nantes", "Le Havre", "Bordeaux"],
    correct: 1,
    explanation: "Nantes fut le premier port négrier français au XVIIIe siècle. Bordeaux, Le Havre et La Rochelle furent également des ports importants de la traite atlantique."
  },
  {
    id: "OFF_H34", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel célèbre philosophe des Lumières a dénoncé l'esclavage ?",
    a: ["Voltaire", "Montesquieu", "Napoléon Bonaparte", "Louis XIV"],
    correct: 1,
    explanation: "Montesquieu, dans « De l'esprit des lois » (1748), critique ironiquement l'esclavage. D'autres philosophes des Lumières, comme Condorcet, ont également œuvré pour son abolition."
  },
  {
    id: "OFF_H35", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel peintre est français ?",
    a: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Leonard de Vinci"],
    correct: 1,
    explanation: "Claude Monet (1840-1926) est un peintre français, fondateur de l'impressionnisme, célèbre pour ses séries des Nymphéas et de la cathédrale de Rouen."
  },
  {
    id: "OFF_H36", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel plat est une spécialité de la cuisine française ?",
    a: ["La paëlla", "Le pot-au-feu", "Le couscous", "La pizza"],
    correct: 1,
    explanation: "Le pot-au-feu est un plat traditionnel emblématique de la cuisine française, tout comme le bœuf bourguignon, le cassoulet ou la ratatouille."
  },
  {
    id: "OFF_H37", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui était Marie Curie ?",
    a: ["Une reine de France", "Une physicienne et chimiste, première femme à recevoir un prix Nobel et seule personne à en recevoir deux dans deux disciplines différentes", "Une résistante de la Seconde Guerre mondiale", "Une écrivaine du XIXe siècle"],
    correct: 1,
    explanation: "Marie Curie (1867-1934), physicienne et chimiste d'origine polonaise naturalisée française, fut la première femme à recevoir un prix Nobel (physique, 1903) et la seule personne à en recevoir deux dans deux disciplines différentes (chimie, 1911). Elle repose au Panthéon."
  },
  {
    id: "OFF_H38", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui a peint \"La liberté guidant le peuple\" ?",
    a: ["Claude Monet", "Eugène Delacroix", "Auguste Renoir", "Paul Cézanne"],
    correct: 1,
    explanation: "Eugène Delacroix a peint « La Liberté guidant le peuple » en 1830, en hommage à la révolution de Juillet. Le tableau est exposé au musée du Louvre."
  },
  {
    id: "OFF_H39", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Dans quel grand musée parisien est exposée la Joconde ?",
    a: ["Le musée d'Orsay", "Le musée du Louvre", "Le Centre Pompidou", "Le musée Rodin"],
    correct: 1,
    explanation: "La Joconde de Léonard de Vinci est exposée au musée du Louvre, le plus grand musée du monde et le plus visité."
  },
  {
    id: "OFF_H40", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel château célèbre se trouve près de Paris et symbolise le pouvoir royal de Louis XIV ?",
    a: ["Le château de Chambord", "Le château de Versailles", "Le château de Fontainebleau", "Le château de Chenonceau"],
    correct: 1,
    explanation: "Le château de Versailles, résidence de Louis XIV, symbolise la monarchie absolue et la puissance du « Roi Soleil »."
  },
  {
    id: "OFF_H41", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Où peut-on voir des peintures préhistoriques en France ?",
    a: ["Dans le château de Versailles", "Dans la grotte de Lascaux, en Dordogne", "Dans la cathédrale de Reims", "Dans le musée du Louvre"],
    correct: 1,
    explanation: "La grotte de Lascaux, en Dordogne, abrite des peintures pariétales préhistoriques vieilles d'environ 17 000 ans, découvertes en 1940."
  },
  {
    id: "OFF_H42", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel peintre célèbre a peint les Nymphéas ?",
    a: ["Auguste Renoir", "Claude Monet", "Paul Cézanne", "Eugène Delacroix"],
    correct: 1,
    explanation: "Claude Monet a peint la célèbre série des Nymphéas, exposée notamment au musée de l'Orangerie à Paris."
  },
  {
    id: "OFF_H43", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Pendant quelles journées peut-on visiter gratuitement des lieux culturels en France ?",
    a: ["Les journées du patrimoine, en septembre", "Uniquement le 14 juillet", "Uniquement pendant les vacances scolaires", "Il n'existe pas de journées de gratuité en France"],
    correct: 0,
    explanation: "Les Journées européennes du patrimoine, organisées chaque année en septembre, permettent de visiter gratuitement de nombreux monuments et lieux culturels, parfois habituellement fermés au public."
  },
  {
    id: "OFF_H44", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Que symbolise le 1er mai ?",
    a: ["La fête de la laïcité", "La fête du Travail, en hommage aux luttes ouvrières", "L'armistice de 1918", "La fête de l'Europe"],
    correct: 1,
    explanation: "Le 1er mai est la fête internationale du Travail, en hommage aux luttes ouvrières pour la journée de 8 heures. C'est un jour férié en France, traditionnellement marqué par l'offre de brins de muguet."
  },
  {
    id: "OFF_H45", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui était Monsieur Rouget de Lisle ?",
    a: ["Un roi de France", "L'auteur et compositeur de La Marseillaise", "Un peintre impressionniste", "Un philosophe des Lumières"],
    correct: 1,
    explanation: "Claude Joseph Rouget de Lisle, officier militaire, a composé les paroles et la musique de La Marseillaise en 1792, devenue hymne national en 1879."
  },
  {
    id: "OFF_H46", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "À quelle occasion a été construite la Tour Eiffel ?",
    a: ["Le couronnement de Napoléon III", "L'Exposition universelle de 1889, pour le centenaire de la Révolution française", "La libération de Paris en 1944", "Les Jeux olympiques de 1900"],
    correct: 1,
    explanation: "La Tour Eiffel a été construite par Gustave Eiffel pour l'Exposition universelle de 1889, à l'occasion du centenaire de la Révolution française."
  },
  {
    id: "OFF_H47", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle chaîne de montagnes est située entre la France et l'Italie ?",
    a: ["Les Pyrénées", "Les Alpes", "Le Massif central", "Le Jura"],
    correct: 1,
    explanation: "Les Alpes, avec le Mont-Blanc, point culminant de France et d'Europe occidentale (4 808 m)."
  },
  {
    id: "OFF_H48", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui était Molière ?",
    a: ["Un peintre impressionniste", "Un dramaturge français, auteur de grandes comédies comme Tartuffe ou L'Avare", "Un homme politique de la Révolution", "Un philosophe des Lumières"],
    correct: 1,
    explanation: "Jean-Baptiste Poquelin dit Molière (1622-1673) : dramaturge français, considéré comme le maître de la comédie française."
  },
  {
    id: "OFF_H49", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui était Charles Baudelaire ?",
    a: ["Un compositeur d'opéra", "Un poète français, auteur des Fleurs du Mal", "Un cinéaste de la Nouvelle Vague", "Un romancier réaliste"],
    correct: 1,
    explanation: "Charles Baudelaire (1821-1867) : poète français, auteur des Fleurs du Mal (1857), chef-d'œuvre de la poésie symboliste."
  },
  {
    id: "OFF_H50", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui était George Sand ?",
    a: ["Un homme d'État britannique", "Une romancière française engagée, l'une des premières grandes femmes de lettres", "Une exploratrice", "Une résistante de la Seconde Guerre mondiale"],
    correct: 1,
    explanation: "George Sand (1804-1876), romancière française engagée, défendit les droits des femmes et des travailleurs."
  },
  {
    id: "OFF_H51", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui était Simone de Beauvoir ?",
    a: ["Une reine de France", "Une philosophe et écrivaine française, auteure du Deuxième Sexe", "Une scientifique", "Une chanteuse populaire"],
    correct: 1,
    explanation: "Simone de Beauvoir (1908-1986), philosophe et écrivaine, auteure du Deuxième Sexe (1949), œuvre fondatrice du féminisme moderne."
  },
  {
    id: "OFF_H52", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui était Albert Camus ?",
    a: ["Un sculpteur", "Un écrivain et philosophe français, auteur de L'Étranger et La Peste, prix Nobel de littérature", "Un aviateur", "Un peintre cubiste"],
    correct: 1,
    explanation: "Albert Camus (1913-1960), écrivain et philosophe, prix Nobel de littérature en 1957, figure majeure de la philosophie de l'absurde."
  },
  {
    id: "OFF_H53", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui était Marguerite Yourcenar ?",
    a: ["Une chanteuse populaire", "Une écrivaine, première femme élue à l'Académie française", "Une résistante devenue ministre", "Une exploratrice polaire"],
    correct: 1,
    explanation: "Marguerite Yourcenar (1903-1987), écrivaine, première femme élue à l'Académie française en 1980, auteure des Mémoires d'Hadrien."
  },
  {
    id: "OFF_H54", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui était Paul Cézanne ?",
    a: ["Un ministre des finances", "Un peintre français, précurseur du cubisme", "Un architecte", "Un écrivain naturaliste"],
    correct: 1,
    explanation: "Paul Cézanne (1839-1906), peintre français, précurseur du cubisme, célèbre pour ses natures mortes et ses paysages de Provence."
  },
  {
    id: "OFF_H55", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui était Auguste Rodin ?",
    a: ["Un peintre impressionniste", "Un sculpteur français, auteur du Penseur", "Un architecte du XIXe siècle", "Un écrivain naturaliste"],
    correct: 1,
    explanation: "Auguste Rodin (1840-1917), sculpteur français, considéré comme le père de la sculpture moderne, auteur du Penseur et du Baiser."
  },
  {
    id: "OFF_H56", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui était un célèbre compositeur français ?",
    a: ["Ludwig van Beethoven", "Claude Debussy", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach"],
    correct: 1,
    explanation: "Claude Debussy (1862-1918), compositeur français majeur, précurseur de l'impressionnisme musical, comme Maurice Ravel ou Hector Berlioz."
  },
  {
    id: "OFF_H57", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qui était Auguste Renoir ?",
    a: ["Un sculpteur du XVIIIe siècle", "Un peintre français, figure majeure du mouvement impressionniste", "Un philosophe des Lumières", "Un compositeur d'opéra"],
    correct: 1,
    explanation: "Pierre-Auguste Renoir (1841-1919), peintre français, l'une des figures majeures de l'impressionnisme, connu pour ses scènes de vie lumineuses."
  },
  {
    id: "OFF_H58", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel musée est situé à Paris ?",
    a: ["Le Prado", "Le musée du Louvre", "Le musée des Offices", "Le British Museum"],
    correct: 1,
    explanation: "Le musée du Louvre est situé à Paris ; le Prado est à Madrid, les Offices à Florence, le British Museum à Londres."
  },
  {
    id: "OFF_H59", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel monument historique se trouve sur une île en Normandie ?",
    a: ["Le château de Chambord", "Le Mont-Saint-Michel", "La cathédrale de Chartres", "Le Palais des Papes"],
    correct: 1,
    explanation: "Le Mont-Saint-Michel, îlot rocheux surmonté d'une abbaye, est situé en Normandie (à la frontière avec la Bretagne) et est l'un des monuments les plus visités de France."
  },
  {
    id: "OFF_H60", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle ville française fait partie des 10 plus grandes métropoles du pays ?",
    a: ["Chamonix", "Lyon", "Deauville", "Colmar"],
    correct: 1,
    explanation: "Lyon fait partie des plus grandes métropoles françaises, aux côtés de Paris, Marseille, Toulouse, Nice, Nantes, Strasbourg, Montpellier, Bordeaux et Lille."
  },
  {
    id: "OFF_H61", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle île fait partie des Antilles françaises ?",
    a: ["La Corse", "La Guadeloupe", "La Réunion", "Mayotte"],
    correct: 1,
    explanation: "La Guadeloupe et la Martinique sont les îles françaises des Antilles, situées dans la mer des Caraïbes."
  },
  {
    id: "OFF_H62", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle île est française ?",
    a: ["La Sardaigne", "La Corse", "La Sicile", "Malte"],
    correct: 1,
    explanation: "La Corse est une île française, en mer Méditerranée. La Sardaigne et la Sicile sont italiennes, Malte est un État indépendant."
  },
  {
    id: "OFF_H63", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle est la plus haute montagne de France ?",
    a: ["Le mont Ventoux", "Le Mont-Blanc", "Le Puy de Dôme", "Le pic du Midi"],
    correct: 1,
    explanation: "Le Mont-Blanc, dans les Alpes, culmine à 4 808 m. C'est le point culminant de la France et de l'Europe occidentale."
  },
  {
    id: "OFF_H64", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle île française est située dans l'océan indien ?",
    a: ["La Guadeloupe", "La Réunion", "La Corse", "La Martinique"],
    correct: 1,
    explanation: "La Réunion, ainsi que Mayotte, sont des îles françaises situées dans l'océan Indien."
  },
  {
    id: "OFF_H65", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel département français a une frontière avec le Brésil ?",
    a: ["La Martinique", "La Guyane", "La Guadeloupe", "La Réunion"],
    correct: 1,
    explanation: "La Guyane, département et région d'outre-mer situé en Amérique du Sud, partage une frontière terrestre avec le Brésil et le Suriname."
  },
  {
    id: "OFF_H66", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "De quelle ville française décolle la fusée Ariane ?",
    a: ["Toulouse", "Kourou, en Guyane", "Marseille", "Brest"],
    correct: 1,
    explanation: "Le Centre spatial guyanais, situé à Kourou en Guyane française, est la base de lancement des fusées européennes Ariane."
  },
  {
    id: "OFF_H67", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle mer ou océan borde la France métropolitaine ?",
    a: ["L'océan Pacifique", "L'océan Atlantique et la mer Méditerranée", "La mer Rouge", "L'océan Indien"],
    correct: 1,
    explanation: "La France métropolitaine est bordée par l'océan Atlantique à l'ouest, la Manche et la mer du Nord au nord, et la mer Méditerranée au sud."
  },
  {
    id: "OFF_H68", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle mer se situe entre la France et l'Angleterre ?",
    a: ["La mer Méditerranée", "La Manche", "La mer du Nord", "La mer Baltique"],
    correct: 1,
    explanation: "La Manche sépare la France de l'Angleterre, traversée par le tunnel sous la Manche reliant Calais à Douvres."
  },
  {
    id: "OFF_H69", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle île est un département d'outre-mer français ?",
    a: ["Malte", "La Réunion", "La Sardaigne", "Chypre"],
    correct: 1,
    explanation: "La Réunion, avec la Guadeloupe, la Martinique et Mayotte, est un département et région d'outre-mer (DROM) français."
  },
  {
    id: "OFF_H70", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Qu'est-ce que la France d'outre-mer ?",
    a: ["Des anciennes colonies aujourd'hui indépendantes mais alliées de la France", "Des territoires français situés hors d'Europe (Antilles, Guyane, La Réunion, Mayotte, Pacifique...), soumis à des statuts variés", "Uniquement des territoires militaires", "Un synonyme de l'Union européenne"],
    correct: 1,
    explanation: "La France d'outre-mer regroupe des territoires français situés hors d'Europe, avec des statuts juridiques variés (départements et régions d'outre-mer, collectivités d'outre-mer)."
  },
  {
    id: "OFF_H71", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle est la population approximative de la France en 2025 ?",
    a: ["Environ 40 millions d'habitants", "Environ 68 millions d'habitants", "Environ 100 millions d'habitants", "Environ 55 millions d'habitants"],
    correct: 1,
    explanation: "La France compte environ 68 millions d'habitants en 2025 (métropole et outre-mer), selon les estimations de l'Insee."
  },
  {
    id: "OFF_H72", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel est le principal port maritime de France ?",
    a: ["Le Havre", "Marseille", "Bordeaux", "Nantes-Saint-Nazaire"],
    correct: 1,
    explanation: "Marseille est le premier port de France et de Méditerranée en tonnage global. Le Havre reste le premier port pour le trafic de conteneurs."
  },
  {
    id: "OFF_H73", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Combien y a-t-il de régions en France métropolitaine ?",
    a: ["5 régions", "13 régions", "22 régions", "18 régions"],
    correct: 1,
    explanation: "13 régions métropolitaines, depuis la réforme territoriale de 2016."
  },
  {
    id: "OFF_H74", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle chaîne de montagnes est située entre la France et l'Espagne ?",
    a: ["Les Alpes", "Les Pyrénées", "Le Massif central", "Les Vosges"],
    correct: 1,
    explanation: "Les Pyrénées séparent la France de l'Espagne, sur environ 650 km."
  },
  {
    id: "OFF_H75", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle île française se trouve au sud-est du continent africain ?",
    a: ["La Guadeloupe", "La Réunion", "La Corse", "Saint-Pierre-et-Miquelon"],
    correct: 1,
    explanation: "La Réunion, île française de l'océan Indien, est située à l'est de Madagascar, au sud-est du continent africain."
  },
  {
    id: "OFF_H76", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel est le chef-lieu de la région Auvergne-Rhône-Alpes ?",
    a: ["Clermont-Ferrand", "Lyon", "Grenoble", "Saint-Étienne"],
    correct: 1,
    explanation: "Lyon est le chef-lieu (préfecture de région) d'Auvergne-Rhône-Alpes."
  },
  {
    id: "OFF_H77", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel est le chef-lieu de la région Bretagne ?",
    a: ["Nantes", "Rennes", "Brest", "Quimper"],
    correct: 1,
    explanation: "Rennes est le chef-lieu de la région Bretagne. Nantes, historiquement bretonne, appartient aujourd'hui administrativement aux Pays de la Loire."
  },
  {
    id: "OFF_H78", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel est le chef-lieu de la région Provence-Alpes-Côte d'Azur ?",
    a: ["Nice", "Marseille", "Toulon", "Aix-en-Provence"],
    correct: 1,
    explanation: "Marseille est le chef-lieu de la région Provence-Alpes-Côte d'Azur (PACA)."
  },
  {
    id: "OFF_H79", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel est le 101ème département français depuis 2011 ?",
    a: ["La Corse", "Mayotte", "La Guyane", "Saint-Martin"],
    correct: 1,
    explanation: "Mayotte est devenue le 101e département français le 31 mars 2011, après un référendum local approuvant sa départementalisation."
  },
  {
    id: "OFF_H80", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quelle région française est réputée pour ses stations de ski ?",
    a: ["Les Hauts-de-France", "Auvergne-Rhône-Alpes", "La Bretagne", "La Normandie"],
    correct: 1,
    explanation: "Auvergne-Rhône-Alpes, avec ses massifs des Alpes, abrite de nombreuses stations de ski réputées (Chamonix, Courchevel, Val d'Isère...)."
  },
  {
    id: "OFF_H81", theme: "Histoire, géographie et culture", macro: "Histoire, géographie et culture",
    q: "Quel fleuve traverse Paris ?",
    a: ["La Loire", "La Seine", "Le Rhône", "La Garonne"],
    correct: 1,
    explanation: "La Seine traverse Paris. Elle se jette dans la Manche au Havre, après 777 km."
  },

  // ==========================================
  // --- VIVRE DANS LA SOCIÉTÉ FRANÇAISE ---
  // ==========================================
  {
    id: "OFF_V1", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Où faut-il déclarer la naissance d'un enfant ?",
    a: ["Au commissariat de police", "À la mairie du lieu de naissance, dans les 5 jours", "À la préfecture", "À la Caisse d'allocations familiales uniquement"],
    correct: 1,
    explanation: "La naissance doit être déclarée à la mairie du lieu de naissance, dans les 5 jours suivant l'accouchement."
  },
  {
    id: "OFF_V2", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Quelle action peut réaliser le locataire d'un logement sans l'autorisation du propriétaire ?",
    a: ["Sous-louer le logement à un tiers", "Héberger temporairement un proche ou recevoir des visiteurs", "Réaliser de gros travaux modifiant la structure du logement", "Résilier le bail d'un colocataire à sa place"],
    correct: 1,
    explanation: "Le locataire peut librement héberger un proche ou recevoir des visiteurs, cela relevant de la jouissance paisible du logement. En revanche, la sous-location ou les travaux importants nécessitent l'accord écrit du propriétaire."
  },
  {
    id: "OFF_V3", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Quel mariage est reconnu légalement ?",
    a: ["Le mariage religieux célébré dans un lieu de culte", "Le mariage civil célébré devant un officier d'état civil, en mairie", "Le mariage coutumier célébré selon les traditions du pays d'origine", "Tout engagement mutuel entre deux personnes, sans formalité"],
    correct: 1,
    explanation: "Seul le mariage civil, célébré devant un officier d'état civil en mairie, est reconnu juridiquement en France. Une cérémonie religieuse peut avoir lieu ensuite, mais n'a pas de valeur légale en elle-même."
  },
  {
    id: "OFF_V4", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Le stationnement sur une place réservée aux personnes handicapées :",
    a: ["Est toléré pour un arrêt de moins de 5 minutes", "Est interdit sans carte de stationnement pour personnes handicapées, et passible d'une amende", "Est autorisé le week-end", "Est autorisé si le véhicule met ses feux de détresse"],
    correct: 1,
    explanation: "Le stationnement sur une place réservée aux personnes handicapées est interdit sans carte de stationnement valide, et passible d'une amende, quelle que soit la durée de l'arrêt."
  },
  {
    id: "OFF_V5", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Si une machine à laver est cassée, il est possible de :",
    a: ["La déposer sur le trottoir devant chez soi", "La déposer en déchetterie ou la faire enlever via une collecte d'encombrants organisée par la commune", "La brûler dans son jardin", "La jeter dans une poubelle de tri classique"],
    correct: 1,
    explanation: "Un appareil électroménager cassé doit être déposé en déchetterie, ou faire l'objet d'une collecte d'encombrants organisée par la commune. L'abandon sur la voie publique est une infraction."
  },
  {
    id: "OFF_V6", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Dans quel cas faut-il déclarer son enfant au service d'état civil ?",
    a: ["Uniquement si l'enfant est né à l'hôpital", "Dans tous les cas, quel que soit le lieu de naissance de l'enfant", "Uniquement si les parents sont mariés", "Uniquement pour les enfants de nationalité française"],
    correct: 1,
    explanation: "Toute naissance doit être déclarée à l'état civil, quel que soit le lieu de naissance (hôpital, clinique, domicile) ou la situation des parents."
  },
  {
    id: "OFF_V7", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Quand faut-il déclarer son enfant au service d'état civil ?",
    a: ["Dans le mois suivant la naissance", "Dans les 5 jours suivant la naissance", "Uniquement au moment de sa première rentrée scolaire", "Dans les 3 jours suivant la naissance"],
    correct: 1,
    explanation: "Dans les 5 jours suivant la naissance, auprès de la mairie du lieu de naissance."
  },
  {
    id: "OFF_V8", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Quel numéro d'urgence permet d'appeler la police ?",
    a: ["Le 15", "Le 17", "Le 18", "Le 119"],
    correct: 1,
    explanation: "Le 17 permet d'appeler la police ou la gendarmerie. Le 15 est réservé au SAMU, le 18 aux pompiers, et le 112 est le numéro d'urgence européen."
  },
  {
    id: "OFF_V9", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Quel numéro d'urgence permet d'appeler le SAMU ?",
    a: ["Le 17", "Le 15", "Le 18", "Le 112"],
    correct: 1,
    explanation: "Le 15 (SAMU — Service d'Aide Médicale Urgente)."
  },
  {
    id: "OFF_V10", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Auprès de quelle institution les parents peuvent inscrire leurs enfants à l'école publique ?",
    a: ["Auprès du tribunal judiciaire", "Auprès de la mairie de leur domicile", "Auprès de la préfecture", "Auprès du rectorat uniquement"],
    correct: 1,
    explanation: "Les parents inscrivent leur enfant auprès de la mairie de leur domicile, qui les oriente ensuite vers l'école publique correspondant à leur secteur."
  },
  {
    id: "OFF_V11", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "En cas de divorce, qui exerce l'autorité parentale ?",
    a: ["Automatiquement le père", "En principe, les deux parents continuent à l'exercer conjointement, sauf décision contraire du juge", "Automatiquement la mère si l'enfant a moins de 10 ans", "Elle disparaît dès le prononcé du divorce"],
    correct: 1,
    explanation: "En principe, les deux parents continuent à exercer conjointement l'autorité parentale après le divorce, dans l'intérêt de l'enfant, sauf décision contraire du juge aux affaires familiales."
  },
  {
    id: "OFF_V12", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Quelle aide permet aux personnes qui ont des difficultés financières d'avoir un avocat ?",
    a: ["Le RSA", "L'aide juridictionnelle", "L'Aide Médicale d'État (AME)", "La prime d'activité"],
    correct: 1,
    explanation: "L'aide juridictionnelle permet, sous conditions de ressources, la prise en charge totale ou partielle des frais d'avocat et de justice."
  },
  {
    id: "OFF_V13", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Qui peut demander le divorce de personnes mariées ?",
    a: ["Uniquement l'époux", "L'un des deux époux, ou les deux ensemble d'un commun accord", "Uniquement un tiers, comme un parent", "Uniquement le procureur de la République"],
    correct: 1,
    explanation: "Le divorce peut être demandé par l'un des deux époux, ou par les deux ensemble en cas de consentement mutuel."
  },
  {
    id: "OFF_V14", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?",
    a: ["La préfecture de votre département", "L'Assurance maladie (Sécurité sociale ou CPAM)", "Le ministère du Travail", "La mutuelle uniquement, sans passer par la Sécurité sociale"],
    correct: 1,
    explanation: "L'Assurance maladie (Sécurité sociale ou CPAM). La carte Vitale permet d'accéder au remboursement, complété le cas échéant par une mutuelle."
  },
  {
    id: "OFF_V15", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "La contraception :",
    a: ["Est réservée aux personnes mariées", "Est accessible à toute personne, y compris les mineures, avec un accès facilité et parfois gratuit", "Est interdite aux mineures", "Nécessite l'autorisation d'un parent, quel que soit l'âge"],
    correct: 1,
    explanation: "La contraception est accessible à toute personne en France, y compris les mineures, avec un accès facilité (délivrance sans ordonnance pour certains moyens) et une gratuité pour les mineures et jeunes femmes selon les dispositifs en vigueur."
  },
  {
    id: "OFF_V16", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Qu'est-ce que le principe de confidentialité dans le domaine de la santé ?",
    a: ["L'obligation pour le médecin de transmettre les informations médicales à l'employeur", "Le secret médical, qui protège les informations relatives à la santé d'un patient", "Un droit réservé aux patients de nationalité française", "L'interdiction pour un patient de consulter son propre dossier médical"],
    correct: 1,
    explanation: "Le principe de confidentialité renvoie au secret médical, qui protège les informations relatives à la santé d'un patient et s'impose à tous les professionnels de santé."
  },
  {
    id: "OFF_V17", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "À quoi sert la carte Vitale ?",
    a: ["À voyager gratuitement dans les transports en commun", "À être reconnu par l'Assurance maladie et à faciliter le remboursement automatique des soins", "À prouver son identité lors des élections", "À obtenir des réductions dans les pharmacies"],
    correct: 1,
    explanation: "La carte Vitale permet d'être reconnu par l'Assurance maladie chez le médecin, à la pharmacie ou à l'hôpital, et facilite le remboursement automatique des soins."
  },
  {
    id: "OFF_V18", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "À quoi sert une mutuelle santé ?",
    a: ["À remplacer intégralement la Sécurité sociale", "À rembourser tout ou partie des frais de santé non couverts par l'Assurance maladie", "À payer les médicaments non autorisés en France", "À obtenir un logement social prioritaire"],
    correct: 1,
    explanation: "Une mutuelle (complémentaire santé) rembourse tout ou partie des frais de santé non couverts par l'Assurance maladie (ticket modérateur, dépassements d'honoraires...)."
  },
  {
    id: "OFF_V19", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Qu'est-ce que le tiers payant ?",
    a: ["Un impôt supplémentaire sur les soins", "La dispense d'avance de frais pour le patient, la Sécurité sociale et/ou la mutuelle réglant directement le professionnel de santé", "Une pénalité en cas de retard de paiement chez le médecin", "Un remboursement réservé aux personnes de plus de 65 ans"],
    correct: 1,
    explanation: "Le tiers payant permet au patient de ne pas avancer les frais de santé : l'Assurance maladie et/ou la mutuelle règlent directement le professionnel de santé."
  },
  {
    id: "OFF_V20", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "L'inscription à l'Assurance maladie est :",
    a: ["Facultative pour les personnes ayant une mutuelle privée", "Obligatoire pour toute personne résidant en France de manière stable et régulière", "Réservée aux salariés en CDI", "Payante et optionnelle selon les revenus"],
    correct: 1,
    explanation: "L'affiliation à l'Assurance maladie est obligatoire pour toute personne résidant en France de manière stable et régulière, qu'elle travaille ou non."
  },
  {
    id: "OFF_V21", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "L'avortement est-il possible en France ?",
    a: ["Non, il est totalement interdit", "Oui, l'IVG est un droit garanti, désormais inscrit dans la Constitution française", "Oui, mais uniquement avec l'accord du conjoint", "Oui, uniquement avant 6 semaines de grossesse"],
    correct: 1,
    explanation: "Oui. L'IVG est un droit garanti en France, et depuis mars 2024, la liberté de recourir à l'IVG est inscrite dans la Constitution française."
  },
  {
    id: "OFF_V22", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Travailler sans être déclaré est :",
    a: ["Autorisé pour des missions ponctuelles de moins d'une semaine", "Illégal (travail dissimulé), sanctionné pénalement et privant le salarié de ses droits sociaux", "Légal si l'employeur paie en espèces", "Toléré pour les emplois à domicile"],
    correct: 1,
    explanation: "Travailler sans être déclaré constitue un travail dissimulé, illégal et sanctionné pénalement pour l'employeur comme pour le salarié, qui perd aussi ses droits sociaux."
  },
  {
    id: "OFF_V23", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Qu'est-ce que le SMIC ?",
    a: ["Le système médical d'intervention chirurgicale", "Le Salaire Minimum Interprofessionnel de Croissance (salaire minimum légal)", "Un syndicat de travailleurs indépendants", "Une prime versée aux fonctionnaires uniquement"],
    correct: 1,
    explanation: "Le SMIC est le salaire minimum légal en dessous duquel aucun employeur ne peut rémunérer un salarié en France."
  },
  {
    id: "OFF_V24", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Quelle est la première démarche à réaliser pour chercher un emploi ?",
    a: ["Demander une autorisation écrite au maire", "S'inscrire à France Travail (anciennement Pôle emploi)", "Attendre d'être contacté par une entreprise publique", "Contacter directement la préfecture"],
    correct: 1,
    explanation: "S'inscrire à France Travail (anciennement Pôle emploi) pour bénéficier d'un accompagnement dans la recherche d'emploi et, le cas échéant, des allocations chômage."
  },
  {
    id: "OFF_V25", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Quelle est la durée légale du temps de travail par semaine ?",
    a: ["39 heures", "35 heures", "40 heures", "37 heures"],
    correct: 1,
    explanation: "35 heures par semaine (loi Aubry de 2000). Des heures supplémentaires sont possibles mais encadrées et majorées."
  },
  {
    id: "OFF_V26", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Qui peut demander un congé parental d'éducation ?",
    a: ["Uniquement la mère de l'enfant", "Tout salarié, homme ou femme, ayant un an d'ancienneté, à l'occasion d'une naissance ou d'une adoption", "Uniquement les fonctionnaires titulaires", "Uniquement les parents de plus de trois enfants"],
    correct: 1,
    explanation: "Tout salarié, homme ou femme, justifiant d'un an d'ancienneté dans l'entreprise, peut demander un congé parental d'éducation à l'occasion d'une naissance ou d'une adoption."
  },
  {
    id: "OFF_V27", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Une personne étrangère, en situation régulière, peut créer son entreprise :",
    a: ["Non, la création d'entreprise est réservée aux Français", "Oui, dans les mêmes conditions qu'un citoyen français", "Oui, mais uniquement sous forme associative", "Oui, mais seulement après 10 ans de résidence"],
    correct: 1,
    explanation: "Oui, dans les mêmes conditions qu'un citoyen français. La nationalité n'est pas un obstacle à la création d'entreprise en France pour une personne en situation régulière."
  },
  {
    id: "OFF_V28", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Une femme peut-elle créer son entreprise ?",
    a: ["Non, il faut l'accord d'un conjoint", "Oui, les femmes ont les mêmes droits que les hommes pour créer et diriger une entreprise", "Oui, mais uniquement dans certains secteurs", "Oui, mais uniquement en tant qu'auto-entrepreneuse"],
    correct: 1,
    explanation: "En France, les femmes ont les mêmes droits que les hommes pour créer et diriger une entreprise, sans autorisation d'un tiers."
  },
  {
    id: "OFF_V29", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Quels sont les textes qui définissent les règles au travail ?",
    a: ["Uniquement les décisions du chef d'entreprise", "Le Code du travail, les conventions collectives et le contrat de travail", "Uniquement le contrat de travail signé", "Le règlement de la mairie de l'entreprise"],
    correct: 1,
    explanation: "Les règles du travail sont définies par le Code du travail (loi), les conventions collectives (accords de branche) et le contrat de travail individuel, qui doivent respecter ce cadre légal."
  },
  {
    id: "OFF_V30", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Quelles sont les affaires traitées par le conseil de prud'hommes ?",
    a: ["Les litiges entre particuliers portant sur un bail locatif", "Les litiges individuels entre un salarié et son employeur, liés au contrat de travail", "Les infractions pénales graves", "Les litiges entre deux entreprises commerciales"],
    correct: 1,
    explanation: "Le conseil de prud'hommes est une juridiction spécialisée qui traite les litiges individuels entre un salarié et son employeur, liés à l'exécution ou à la rupture du contrat de travail."
  },
  {
    id: "OFF_V31", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Qui a le droit de se syndiquer ?",
    a: ["Uniquement les fonctionnaires", "Tout salarié, quel que soit son secteur, sans que l'employeur puisse s'y opposer", "Uniquement les salariés en CDI", "Uniquement les salariés de plus de 25 ans"],
    correct: 1,
    explanation: "Tout salarié a le droit de se syndiquer librement, dans le secteur public comme privé, sans que l'employeur puisse s'y opposer ni le sanctionner pour cela."
  },
  {
    id: "OFF_V32", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Est-il possible de licencier une femme enceinte ou en congé maternité, en raison de sa grossesse ?",
    a: ["Oui, l'employeur en a le droit", "Non, c'est interdit par la loi, qui protège les femmes enceintes contre le licenciement lié à leur grossesse", "Oui, si l'entreprise compte moins de 10 salariés", "Oui, pendant les trois premiers mois de grossesse uniquement"],
    correct: 1,
    explanation: "Non. La loi interdit de licencier une salariée en raison de sa grossesse, pendant la grossesse et le congé maternité, sauf faute grave sans lien avec cet état ou impossibilité de maintenir le contrat pour un motif étranger à la grossesse."
  },
  {
    id: "OFF_V33", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "L'instruction des enfants est obligatoire de :",
    a: ["6 à 16 ans", "3 à 16 ans", "6 à 18 ans", "5 à 16 ans"],
    correct: 1,
    explanation: "Depuis la loi de 2019, l'instruction est obligatoire de 3 à 16 ans en France."
  },
  {
    id: "OFF_V34", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Des parents ne respectent pas l'obligation d'instruction pour leurs enfants. Quelle sanction maximale risquent-ils ?",
    a: ["Une simple lettre d'avertissement", "Des poursuites pénales pouvant aller jusqu'à une amende et une peine d'emprisonnement", "La perte automatique de l'autorité parentale sans procédure", "Aucune sanction n'est prévue"],
    correct: 1,
    explanation: "Le non-respect de l'obligation d'instruction peut entraîner des poursuites pénales, avec des sanctions pouvant aller jusqu'à une amende et une peine d'emprisonnement, après un accompagnement préalable des familles."
  },
  {
    id: "OFF_V35", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Quelle est la définition de l'autorité parentale ?",
    a: ["Le droit exclusif du père de décider pour l'enfant", "L'ensemble des droits et devoirs des parents visant à protéger l'enfant, sa santé, sa sécurité, sa moralité et son éducation", "Le droit de choisir la future carrière professionnelle de l'enfant", "Un statut qui disparaît dès que l'enfant entre au collège"],
    correct: 1,
    explanation: "L'autorité parentale est l'ensemble des droits et devoirs qu'ont les parents envers leur enfant mineur, afin de protéger sa sécurité, sa santé, sa moralité et d'assurer son éducation."
  },
  {
    id: "OFF_V36", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Quel motif d'absence est accepté par l'école ?",
    a: ["Un départ en vacances hors des périodes scolaires", "Une maladie de l'enfant, justifiée le cas échéant par un certificat médical", "Un désaccord des parents avec un enseignant", "Une simple convenance personnelle sans justificatif"],
    correct: 1,
    explanation: "La maladie de l'enfant, justifiée le cas échéant par un certificat médical, est un motif d'absence accepté par l'école."
  },
  {
    id: "OFF_V37", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Jusqu'à quel âge l'école est-elle obligatoire ?",
    a: ["14 ans", "16 ans", "18 ans", "15 ans"],
    correct: 1,
    explanation: "Jusqu'à 16 ans. L'instruction est obligatoire de 3 à 16 ans."
  },
  {
    id: "OFF_V38", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "À quel âge commence l'instruction obligatoire des enfants ?",
    a: ["À 6 ans", "À 3 ans", "À 5 ans", "À 4 ans"],
    correct: 1,
    explanation: "Depuis la loi « pour une école de la confiance » de 2019, l'instruction est obligatoire dès l'âge de 3 ans."
  },
  {
    id: "OFF_V39", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Comment s'appellent les établissements scolaires que les élèves intègrent après l'école élémentaire ?",
    a: ["Les lycées", "Les collèges", "Les universités", "Les écoles maternelles"],
    correct: 1,
    explanation: "Après l'école élémentaire (primaire), les élèves intègrent le collège (de la 6e à la 3e), puis le lycée."
  },
  {
    id: "OFF_V40", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "En tant que parent d'élève, il est possible de :",
    a: ["Choisir librement les enseignants de son enfant", "Être informé de la scolarité de son enfant et participer à la vie de l'établissement, via des représentants élus", "Assister à toutes les classes sans en informer l'établissement", "Modifier soi-même le contenu des programmes scolaires"],
    correct: 1,
    explanation: "Les parents d'élève ont le droit d'être informés de la scolarité de leur enfant et de participer à la vie de l'établissement, notamment via des représentants élus au conseil d'école ou d'administration."
  },
  {
    id: "OFF_V41", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Quelle instruction est prévue pour les enfants qui ne parlent pas français ?",
    a: ["Ils sont refusés à l'école tant qu'ils ne maîtrisent pas la langue", "Ils sont accueillis dans les écoles publiques avec des dispositifs spéciaux (UPE2A) pour apprendre le français", "Ils doivent s'inscrire dans des écoles privées payantes", "Ils doivent redoubler une classe en attendant de progresser"],
    correct: 1,
    explanation: "Les enfants non francophones sont accueillis dans les écoles publiques françaises. Des dispositifs spéciaux (classes UPE2A) existent pour les aider à apprendre le français tout en suivant leur scolarité."
  },
  {
    id: "OFF_V42", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "S'agissant de l'accueil des enfants en situation de handicap à l'école, laquelle des propositions est vraie ?",
    a: ["Ils ne peuvent pas être scolarisés en milieu ordinaire", "Ils ont le droit d'être scolarisés, si possible en milieu ordinaire, avec les aménagements et accompagnements nécessaires (AESH...)", "Ils doivent obligatoirement être scolarisés dans un établissement spécialisé privé", "Ils n'ont accès à l'instruction qu'à partir de 6 ans"],
    correct: 1,
    explanation: "Un enfant en situation de handicap a le droit d'être scolarisé, en priorité en milieu ordinaire, avec les aménagements et accompagnements nécessaires (AESH, matériel adapté...), conformément au principe d'école inclusive."
  },
  {
    id: "OFF_V43", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Depuis le 1er juillet 2021, quelle est la durée du congé paternité ?",
    a: ["11 jours", "25 jours (dont 4 obligatoires), portés à 32 jours en cas de naissances multiples", "3 jours", "16 semaines, comme le congé maternité"],
    correct: 1,
    explanation: "Depuis le 1er juillet 2021, le congé paternité et d'accueil de l'enfant est passé à 25 jours (dont 4 obligatoires), porté à 32 jours en cas de naissances multiples."
  },
  {
    id: "OFF_V44", theme: "Vivre dans la société française", macro: "Vivre dans la société française",
    q: "Est-ce possible de punir physiquement ses enfants ?",
    a: ["Oui, dans une mesure raisonnable, en tant que droit des parents", "Non, la loi de 2019 interdit toute violence physique ou psychologique envers les enfants dans le cadre de l'éducation", "Oui, uniquement en cas de faute grave de l'enfant", "Oui, jusqu'à l'âge de 10 ans"],
    correct: 1,
    explanation: "Non. La loi du 10 juillet 2019 interdit expressément toute violence physique ou psychologique envers les enfants dans le cadre de l'éducation, consacrant le droit de l'enfant à une éducation sans violence."
  },

];

// ==========================================
// ⚙️ GESTION DU SYSTÈME ET DU JEU — EXAMEN OFFICIEL
// Suivi indépendant de l'entraînement thématique (clés localStorage distinctes)
// ==========================================
let examQuestions = [];
let current = 0;
let score = 0;
let time = 900;
let timer;
let currentMode = "";

let sessionErrors = [];

let difficulte = "standard";
const REGLAGES_DIFFICULTE = {
  standard:  { tempsGlobal: 900, tempsParQuestion: 0  },
  difficile: { tempsGlobal: 600, tempsParQuestion: 20 }
};

let qTimer = null;
let qTimeLeft = 0;

window.onload = function() {
  calculerEtAfficherStats();
  setDifficulte("standard");
};

function setDifficulte(niveau) {
  difficulte = niveau;
  let btnStd = document.getElementById("diff-standard-btn");
  let btnDif = document.getElementById("diff-difficile-btn");
  if (btnStd && btnDif) {
    btnStd.classList.toggle("active", niveau === "standard");
    btnDif.classList.toggle("active", niveau === "difficile");
  }
}

function startExam(mode) {
  currentMode = mode;
  current = 0;
  score = 0;
  sessionErrors = [];

  let reglages = REGLAGES_DIFFICULTE[difficulte];
  time = reglages.tempsGlobal;

  let vus = JSON.parse(localStorage.getItem('civique_off_vus')) || [];
  let erreursGlobales = JSON.parse(localStorage.getItem('civique_off_erreurs')) || [];

  if (mode === 'suivi') {
    let nonVues = DATABASE_OFFICIEL.filter(q => !vus.includes(q.id));

    if (nonVues.length === 0) {
      alert("🎉 Félicitations ! Vous avez traité 100% des questions officielles. Utilisez le bouton en bas pour réinitialiser la mémoire et tout refaire.");
      return;
    }

    nonVues.sort(() => Math.random() - 0.5);
    examQuestions = nonVues.slice(0, 40);

  } else if (mode === 'flash') {
    let copieBase = [...DATABASE_OFFICIEL];
    copieBase.sort(() => Math.random() - 0.5);
    examQuestions = copieBase.slice(0, 40);

  } else if (mode === 'erreurs') {
    examQuestions = DATABASE_OFFICIEL.filter(q => erreursGlobales.includes(q.id));
    examQuestions.sort(() => Math.random() - 0.5);
  }

  document.getElementById("score-bon").innerText = 0;
  document.getElementById("score-faux").innerText = 0;
  document.getElementById("score-repondu").innerText = 0;
  document.getElementById("current-total-q").innerText = examQuestions.length;
  document.getElementById("timer").innerText = time;

  let badge = document.getElementById("diff-badge");
  if (badge) {
    badge.style.display = difficulte === "difficile" ? "inline-block" : "none";
  }

  document.getElementById("home-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";

  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = time;
    if (time <= 0) {
      clearInterval(timer);
      clearInterval(qTimer);
      finDeLExamen();
    }
  }, 1000);

  showQuestion();
}

function showQuestion() {
  let q = examQuestions[current];

  document.getElementById("progress").innerText = `Question ${current + 1} / ${examQuestions.length}`;

  let themeTag = document.getElementById("theme-tag");
  if (themeTag) themeTag.innerText = q.theme || q.macro || "";

  document.getElementById("question").innerText = q.q;
  document.getElementById("feedback").style.display = "none";
  document.getElementById("next-btn").style.display = "none";

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  let reponsesMelangees = q.a.map((reponse, index) => {
    return { texte: reponse, estBonne: index === q.correct };
  });

  reponsesMelangees.sort(() => Math.random() - 0.5);

  let dejaRepondu = false;

  function traiterReponse(item, btnCliqué) {
    if (dejaRepondu) return;
    dejaRepondu = true;
    arreterChronoQuestion();

    let allButtons = answersDiv.querySelectorAll("button");
    allButtons.forEach(b => b.disabled = true);

    if (item && item.estBonne) {
      score++;
      btnCliqué.classList.add("correct-ans");
    } else {
      if (btnCliqué) btnCliqué.classList.add("wrong-ans");
      reponsesMelangees.forEach((recherche, indexRecherche) => {
        if (recherche.estBonne) {
          allButtons[indexRecherche].classList.add("correct-ans");
        }
      });
      sessionErrors.push(q.id);
    }

    if (currentMode === 'suivi') {
      let vus = JSON.parse(localStorage.getItem('civique_off_vus')) || [];
      if (!vus.includes(q.id)) {
        vus.push(q.id);
        localStorage.setItem('civique_off_vus', JSON.stringify(vus));
      }
    }

    document.getElementById("score-bon").innerText = score;
    document.getElementById("score-faux").innerText = sessionErrors.length;
    document.getElementById("score-repondu").innerText = current + 1;

    let fb = document.getElementById("feedback");
    if (item && item.estBonne) {
      fb.innerHTML = `<div class="fb-title">✅ Bonne réponse</div><p>${q.explanation}</p>`;
      fb.className = "feedback-box fb-success";
    } else if (!item) {
      fb.innerHTML = `<div class="fb-title">⏱️ Temps écoulé — considéré comme faux</div><p>${q.explanation}</p>`;
      fb.className = "feedback-box fb-error";
    } else {
      fb.innerHTML = `<div class="fb-title">❌ Mauvaise réponse</div><p>${q.explanation}</p>`;
      fb.className = "feedback-box fb-error";
    }
    fb.style.display = "block";
    document.getElementById("next-btn").style.display = "block";
  }

  reponsesMelangees.forEach((item) => {
    let btn = document.createElement("button");
    btn.innerText = item.texte;
    btn.classList.add("answer-btn");
    btn.onclick = () => traiterReponse(item, btn);
    answersDiv.appendChild(btn);
  });

  demarrerChronoQuestion(REGLAGES_DIFFICULTE[difficulte].tempsParQuestion, () => traiterReponse(null, null));
}

function demarrerChronoQuestion(secondes, onTimeout) {
  clearInterval(qTimer);
  let wrap = document.getElementById("qtimer-wrap");
  let bar = document.getElementById("qtimer-bar");

  if (!secondes || secondes <= 0) {
    if (wrap) wrap.style.display = "none";
    return;
  }

  qTimeLeft = secondes;
  if (wrap) wrap.style.display = "block";
  if (bar) {
    bar.style.transition = "none";
    bar.style.width = "100%";
    bar.classList.remove("qtimer-low");
    void bar.offsetWidth;
    bar.style.transition = `width ${secondes}s linear`;
    bar.style.width = "0%";
  }

  qTimer = setInterval(() => {
    qTimeLeft--;
    if (bar && qTimeLeft <= 5) bar.classList.add("qtimer-low");
    if (qTimeLeft <= 0) {
      clearInterval(qTimer);
      onTimeout();
    }
  }, 1000);
}

function arreterChronoQuestion() {
  clearInterval(qTimer);
}

function nextQuestion() {
  current++;
  if (current >= examQuestions.length) {
    clearInterval(timer);
    finDeLExamen();
  } else {
    showQuestion();
  }
}

function quitterEnCoursExamen() {
  if (confirm("Voulez-vous vraiment quitter l'examen ? Vos réponses actuelles seront sauvegardées (sauf si vous êtes en mode aléatoire).")) {
    clearInterval(timer);
    clearInterval(qTimer);

    if (currentMode === 'suivi' || currentMode === 'erreurs') {
      let erreursGlobales = JSON.parse(localStorage.getItem('civique_off_erreurs')) || [];

      sessionErrors.forEach(id => {
        if (!erreursGlobales.includes(id)) erreursGlobales.push(id);
      });

      if (currentMode === 'erreurs') {
        for (let k = 0; k <= current; k++) {
          let qTraitee = examQuestions[k];
          if (qTraitee && !sessionErrors.includes(qTraitee.id)) {
            erreursGlobales = erreursGlobales.filter(id => id !== qTraitee.id);
          }
        }
      }
      localStorage.setItem('civique_off_erreurs', JSON.stringify(erreursGlobales));
    }

    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("home-screen").style.display = "block";
    calculerEtAfficherStats();
  }
}

function finDeLExamen() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("result-screen").style.display = "block";

  document.getElementById("final-score").innerText = score;
  document.getElementById("final-total").innerText = examQuestions.length;

  if (currentMode === 'suivi' || currentMode === 'erreurs') {
    let erreursGlobales = JSON.parse(localStorage.getItem('civique_off_erreurs')) || [];

    sessionErrors.forEach(id => {
      if (!erreursGlobales.includes(id)) erreursGlobales.push(id);
    });

    if (currentMode === 'erreurs') {
      examQuestions.forEach(q => {
        if (!sessionErrors.includes(q.id)) {
          erreursGlobales = erreursGlobales.filter(id => id !== q.id);
        }
      });
    }

    localStorage.setItem('civique_off_erreurs', JSON.stringify(erreursGlobales));
  }

  let retryBtn = document.getElementById("retry-errors-now");
  if (sessionErrors.length > 0) {
    retryBtn.style.display = "block";
  } else {
    retryBtn.style.display = "none";
  }
}

function refaireErreursImmediatement() {
  examQuestions = DATABASE_OFFICIEL.filter(q => sessionErrors.includes(q.id));
  current = 0;
  score = 0;
  sessionErrors = [];

  document.getElementById("score-bon").innerText = 0;
  document.getElementById("score-faux").innerText = 0;
  document.getElementById("score-repondu").innerText = 0;
  document.getElementById("current-total-q").innerText = examQuestions.length;

  document.getElementById("result-screen").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";

  showQuestion();
}

function retourAccueil() {
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("home-screen").style.display = "block";
  calculerEtAfficherStats();
}

function calculerEtAfficherStats() {
  let vus = JSON.parse(localStorage.getItem('civique_off_vus')) || [];
  let erreurs = JSON.parse(localStorage.getItem('civique_off_erreurs')) || [];
  let total = DATABASE_OFFICIEL.length;

  document.getElementById("global-vus").innerText = vus.length;
  document.getElementById("global-total").innerText = total;
  document.getElementById("global-restant").innerText = Math.max(0, total - vus.length);
  document.getElementById("global-erreurs").innerText = erreurs.length;

  let btnErreurs = document.getElementById("mode-erreurs-btn");
  if (erreurs.length > 0) {
    btnErreurs.innerText = `🔄 Réviser la boîte à erreurs (${erreurs.length} questions)`;
    btnErreurs.style.display = "block";
  } else {
    btnErreurs.style.display = "none";
  }
}

function resetToutLeCode() {
  if (confirm("Êtes-vous sûr de vouloir vider l'historique de l'examen officiel ? Cela effacera toutes les questions mémorisées ainsi que votre boîte à erreurs.")) {
    localStorage.removeItem('civique_off_vus');
    localStorage.removeItem('civique_off_erreurs');
    calculerEtAfficherStats();
  }
}
