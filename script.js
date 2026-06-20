// ==========================================
// 🗄️ BASE DE DONNÉES DE TOUTES LES QUESTIONS
// ==========================================
// C'est ici que nous ajouterons les thématiques au fur et à mesure !
const DATABASE_QUESTIONS = [
  // --- La devise, les symboles et les grands principes ---
  {
    id: "T1_Q1",
    q: "Quelle est la devise de la République française ?",
    a: ["Liberté, Égalité, Solidarité", "Liberté, Égalité, Fraternité", "Justice, Unité, Travail"],
    correct: 1,
    explanation: "Liberté, Égalité, Fraternité."
  },
  {
    id: "T1_Q2",
    q: "Quelle est la langue officielle de la République française ?",
    a: ["Le français et l'anglais", "Le français", "Le français et les langues régionales"],
    correct: 1,
    explanation: "Le français. Il est la seule langue officielle selon l'article 2 de la Constitution. Toutes les lois, actes administratifs et décisions de justice sont rédigés en français."
  },
  {
    id: "T1_Q3",
    q: "Quel est le nom de l'hymne national ?",
    a: ["Le Chant des Partisans", "La Marseillaise", "L'Ode à la Joie"],
    correct: 1,
    explanation: "La Marseillaise. Elle a été composée en 1792 par Rouget de Lisle et est devenue hymne national officiel en 1879."
  },
  {
    id: "T1_Q4",
    q: "Quelles sont les couleurs du drapeau français ?",
    a: ["Bleu, blanc, rouge", "Rouge, blanc, bleu", "Vert, blanc, rouge"],
    correct: 0,
    explanation: "Bleu, blanc, rouge — dans cet ordre de la hampe (gauche) vers le côté libre (droite). Il est le symbole de la Révolution française depuis 1789."
  },
  {
    id: "T1_Q5",
    q: "Quel symbole de la République française est tricolore ?",
    a: ["La Marianne", "Le drapeau français", "Le coq gaulois"],
    correct: 1,
    explanation: "Le drapeau français."
  },
  {
    id: "T1_Q6",
    q: "Qui est Marianne ?",
    a: ["Une reine historique", "Le symbole officiel de la République française représentant la liberté et la raison", "La première femme présidente"],
    correct: 1,
    explanation: "Marianne est le symbole officiel de la République française. Elle représente la liberté et la raison. Son buste figure dans toutes les mairies et préfectures de France."
  },
  {
    id: "T1_Q7",
    q: "Lequel de ces symboles représente officiellement la République française ?",
    a: ["La fleur de lys", "Marianne (figure féminine symbolisant la République)", "La croix de Lorraine"],
    correct: 1,
    explanation: "Marianne (figure féminine symbolisant la République)."
  },
  {
    id: "T1_Q8",
    q: "Quels sont des symboles officiels de la République française ?",
    a: ["Le drapeau tricolore, la Marseillaise, Marianne, la devise, et le coq gaulois", "Le château de Versailles, le vin et le fromage", "La tour Eiffel, la baguette et la haute couture"],
    correct: 0,
    explanation: "Le drapeau tricolore (bleu, blanc, rouge), la Marseillaise (hymne national), Marianne (buste), la devise « Liberté, Égalité, Fraternité », et le coq gaulois (symbole non officiel mais traditionnel)."
  },
  {
    id: "T1_Q9",
    q: "Quel animal est un symbole de la France ?",
    a: ["L'aigle impérial", "Le coq gaulois", "Le lion britannique"],
    correct: 1,
    explanation: "Le coq gaulois. Symbole traditionnel de la France, il figure sur de nombreux emblèmes sportifs et officiels."
  },
  {
    id: "T1_Q10",
    q: "À quelle date est la fête nationale française ?",
    a: ["Le 1er mai", "Le 14 juillet", "Le 11 novembre"],
    correct: 1,
    explanation: "Le 14 juillet. Elle commémore la prise de la Bastille en 1789, symbole du début de la Révolution française."
  },
  {
    id: "T1_Q11",
    q: "Qu'est-ce qui est traditionnellement organisé sur les Champs-Élysées le 14 juillet ?",
    a: ["Une course cycliste internationale", "Un défilé militaire", "Un grand marché de nuit"],
    correct: 1,
    explanation: "Un défilé militaire, suivi d'un feu d'artifice le soir sur le Trocadéro. C'est le plus grand défilé militaire d'Europe."
  },
  {
    id: "T1_Q12",
    q: "Le régime de la France est :",
    a: ["Une Monarchie constitutionnelle", "Une République", "Un État fédéral"],
    correct: 1,
    explanation: "Une République. La France est une République indivisible, laïque, démocratique et sociale selon l'article 1er de la Constitution."
  },
  {
    id: "T1_Q13",
    q: "De quand date la Constitution de la Ve République ?",
    a: ["Du 14 juillet 1789", "Du 4 octobre 1958", "Du 8 mai 1945"],
    correct: 1,
    explanation: "Du 4 octobre 1958."
  },
  {
    id: "T1_Q14",
    q: "\"La France est une République indivisible, ..., démocratique et sociale\". Complétez :",
    a: ["fédérale", "laïque", "décentralisée"],
    correct: 1,
    explanation: "« La France est une République indivisible, laïque, démocratique et sociale. » — Article 1er de la Constitution de 1958."
  },
  {
    id: "T1_Q15",
    q: "Où peut-on voir la devise de la République ?",
    a: ["Uniquement sur les documents du Parlement", "Sur les bâtiments publics, les pièces et billets de monnaie, ainsi que sur les documents officiels", "Uniquement à l'intérieur des tribunaux"],
    correct: 1,
    explanation: "Sur les bâtiments publics (mairies, préfectures, tribunaux, écoles), sur les pièces et billets de monnaie, ainsi que sur les documents officiels de l'État."
  },

  // --- Les grandes libertés ---
  {
    id: "T1_Q16",
    q: "Que signifie la liberté ?",
    a: ["Le droit de faire tout ce que l'on veut sans limites légales", "Le droit de faire tout ce qui ne nuit pas à autrui et qui n'est pas interdit par la loi", "Le droit d'ignorer les décisions de justice"],
    correct: 1,
    explanation: "La liberté est le droit de faire tout ce qui ne nuit pas à autrui et qui n'est pas interdit par la loi. Elle comprend la liberté d'expression, de conscience, de religion, d'association, de circulation et de la presse."
  },
  {
    id: "T1_Q17",
    q: "Quelle liberté permet à chacun d'exprimer ses idées ?",
    a: ["La liberté d'association", "La liberté d'expression", "La liberté de circulation"],
    correct: 1,
    explanation: "La liberté d'expression. Elle garantit le droit d'exprimer ses opinions oralement, par écrit ou par tout autre moyen, dans les limites fixées par la loi."
  },
  {
    id: "T1_Q18",
    q: "Quelle proposition est correcte ? La liberté d'expression :",
    a: ["Est absolue et permet les insultes haineuses et menaces", "Permet d'exprimer ses idées librement, mais ne protège pas les propos incitant à la haine, à la discrimination ou à la violence", "N'existe pas pour les simples citoyens"],
    correct: 1,
    explanation: "Permet d'exprimer ses idées librement, mais ne protège pas les propos incitant à la haine, à la discrimination ou à la violence."
  },
  {
    id: "T1_Q19",
    q: "Que signifie l'égalité ?",
    a: ["Que tout le monde doit percevoir le même revenu exact", "Que tous les citoyens ont les mêmes droits et les mêmes devoirs devant la loi, sans distinction", "Que toutes les opinions ont la même valeur scientifique"],
    correct: 1,
    explanation: "L'égalité signifie que tous les citoyens ont les mêmes droits et les mêmes devoirs devant la loi, sans distinction d'origine, de sexe, de religion ou de condition sociale."
  },
  {
    id: "T1_Q20",
    q: "Qu'est-ce que l'égalité ?",
    a: ["C'est le principe selon lequel tous les individus sont traités de la même façon par la loi et les institutions, quelles que soient leurs différences", "Une règle obligeant la population à consommer les mêmes biens", "Un système où la loi s'applique différemment selon la richesse"],
    correct: 0,
    explanation: "C'est le principe selon lequel tous les individus sont traités de la même façon par la loi et les institutions, quelles que soient leurs différences."
  },
  {
    id: "T1_Q21",
    q: "Que signifie le mot \"fraternité\" dans la devise française ?",
    a: ["L'obligation de vivre en communauté familiale", "La fraternité exprime le devoir de solidarité entre les membres de la société", "Le droit d'accéder gratuitement aux transports publics"],
    correct: 1,
    explanation: "La fraternité exprime le devoir de solidarité entre les membres de la société. Elle fonde l'aide mutuelle, la protection sociale et l'assistance aux personnes en difficulté."
  },
  {
    id: "T1_Q22",
    q: "Quel est l'un des rôles des associations ?",
    a: ["Remplacer les forces de l'ordre locales", "Permettre aux citoyens de se regrouper pour défendre des intérêts communs, mener des actions solidaires, culturelles, sportives ou politiques", "Modifier les lois de la République de manière autonome"],
    correct: 1,
    explanation: "Les associations permettent aux citoyens de se regrouper pour défendre des intérêts communs, mener des actions solidaires, culturelles, sportives ou politiques. Elles sont un pilier de la vie démocratique française."
  },
  {
    id: "T1_Q23",
    q: "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est différent (handicap, apparence physique, sexe...) ?",
    a: ["Oui, cela relève de la liberté d'expression", "Non. Les insultes et propos discriminatoires sont interdits par la loi et constituent des infractions pénales", "Oui, mais uniquement dans le cadre privé"],
    correct: 1,
    explanation: "Non. Les insultes et propos discriminatoires fondés sur le handicap, l'apparence physique, le sexe, l'origine ou la religion sont interdits par la loi et constituent des infractions pénales."
  },
  {
    id: "T1_Q24",
    q: "Certains métiers peuvent-ils être réservés aux hommes ?",
    a: ["Oui, les métiers considérés comme particulièrement pénibles", "Non. Le principe d'égalité homme-femme interdit toute discrimination à l'embauche fondée sur le sexe", "Oui, les postes de haute direction dans la fonction publique"],
    correct: 1,
    explanation: "Non. En France, le principe d'égalité homme-femme interdit toute discrimination à l'embauche fondée sur le sexe. Tous les métiers sont accessibles aux femmes et aux hommes dans les mêmes conditions."
  },

  // --- La laïcité ---
  {
    id: "T1_Q25",
    q: "Qu'est-ce que la laïcité ?",
    a: ["L'interdiction de toute pratique religieuse en France", "La séparation des institutions publiques et des organisations religieuses, la neutralité de l'État et la liberté de conscience", "L'obligation de choisir une religion d'État approuvée par le gouvernement"],
    correct: 1,
    explanation: "La laïcité est un principe fondamental de la République française issu de la loi du 9 décembre 1905. Elle garantit la séparation des institutions publiques et des organisations religieuses, la neutralité de l'État vis-à-vis de toutes les religions, et la liberté de conscience de chaque individu."
  },
  {
    id: "T1_Q26",
    q: "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?",
    a: ["En 1789", "En 1905", "En 1958"],
    correct: 1,
    explanation: "En 1905. La loi du 9 décembre 1905 est le texte fondateur de la laïcité à la française. Elle met fin au Concordat napoléonien et garantit la liberté de culte tout en interdisant le financement public des religions."
  },
  {
    id: "T1_Q27",
    q: "Que permet le principe de laïcité ?",
    a: ["D'interdire l'accès aux lieux de culte", "La laïcité permet à chaque personne de croire ou de ne pas croire librement", "D'imposer une philosophie d'État obligatoire"],
    correct: 1,
    explanation: "La laïcité permet à chaque personne de croire ou de ne pas croire librement, sans que l'État ou les institutions publiques n'imposent ou ne défavorisent aucune religion."
  },
  {
    id: "T1_Q28",
    q: "Quel droit est garanti par la laïcité ?",
    a: ["Le droit à l'exemption de devoirs civiques", "La liberté de conscience : chaque personne a le droit de choisir sa religion, d'en changer ou de n'en avoir aucune", "Le droit de ne pas respecter le code de la route"],
    correct: 1,
    explanation: "La liberté de conscience : chaque personne a le droit de choisir sa religion, d'en changer ou de n'en avoir aucune."
  },
  {
    id: "T1_Q29",
    q: "Pourquoi le principe de laïcité doit-il être respecté à l'école ?",
    a: ["Pour harmoniser les uniformes scolaires", "Parce que l'école publique est un lieu de la République, neutre et commun à tous. Elle doit garantir un cadre d'apprentissage libre", "Pour supprimer l'enseignement de l'histoire des religions"],
    correct: 1,
    explanation: "Parce que l'école publique est un lieu de la République, neutre et commun à tous. Elle doit accueillir tous les enfants sans distinction de religion et garantir un cadre d'apprentissage libre de toute pression religieuse."
  },
  {
    id: "T1_Q30",
    q: "Un enfant peut-il refuser d'aller à l'école pour une raison religieuse ?",
    a: ["Oui, sur demande écrite des tuteurs légaux", "Non. L'instruction est obligatoire pour tous les enfants de 3 à 16 ans", "Oui, mais uniquement dans l'enseignement secondaire"],
    correct: 1,
    explanation: "Non. L'instruction est obligatoire pour tous les enfants de 3 à 16 ans. Aucune raison religieuse ne permet à un enfant (ou à ses parents) de se soustraire à cette obligation."
  },
  {
    id: "T1_Q31",
    q: "Une personne a-t-elle le droit de ne pas croire en une religion ?",
    a: ["Non, la loi impose une affiliation confessionnelle spirituelle", "Oui. La liberté de conscience garantie par la laïcité inclut le droit à l'athéisme et à l'agnosticisme", "Oui, mais uniquement si elle possède la nationalité française"],
    correct: 1,
    explanation: "Oui. La liberté de conscience garantie par la laïcité inclut le droit à l'athéisme et à l'agnosticisme. Personne ne peut être contraint de pratiquer une religion."
  },
  {
    id: "T1_Q32",
    q: "Une personne peut-elle changer librement de religion ?",
    a: ["Non, c'est interdit une fois l'état civil enregistré", "Oui. La liberté de conscience garantit le droit de changer de religion ou de conviction à tout moment", "Oui, sous réserve d'une validation par un tribunal administratif"],
    correct: 1,
    explanation: "Oui. La liberté de conscience garantit le droit de changer de religion ou de conviction à tout moment. Aucune pression familiale ou communautaire ne peut légalement s'y opposer en France."
  }, 
  
  // ==========================================
  // --- THÉMATIQUE 2 : SYSTÈME INSTITUTIONNEL ET POLITIQUE ---
  // ==========================================
  
  // --- Les institutions de la République ---
  {
    id: "T2_Q1",
    q: "Qui réside au palais de l'Élysée ?",
    a: ["Le Premier ministre", "Le Président de la République", "Le Président de l'Assemblée nationale"],
    correct: 1,
    explanation: "Le Président de la République."
  },
  {
    id: "T2_Q2",
    q: "Qui est élu lors des élections présidentielles ?",
    a: ["Le Premier ministre", "Le Président de la République", "Les députés"],
    correct: 1,
    explanation: "Le Président de la République, élu au suffrage universel direct pour 5 ans (quinquennat), renouvelable une fois."
  },
  {
    id: "T2_Q3",
    q: "Pour combien de temps est élu le Président de la République ?",
    a: ["4 ans", "5 ans", "7 ans"],
    correct: 1,
    explanation: "5 ans. Le quinquennat a été instauré par référendum en 2000."
  },
  {
    id: "T2_Q4",
    q: "Qui nomme le Premier ministre ?",
    a: ["Le peuple français", "Le Président de la République", "Le Président du Sénat"],
    correct: 1,
    explanation: "Le Président de la République. Le Premier ministre dirige le gouvernement et est responsable devant l'Assemblée nationale."
  },
  {
    id: "T2_Q5",
    q: "Qui possède le pouvoir exécutif ?",
    a: ["Le Parlement uniquement", "Le Président de la République et le gouvernement", "Les juges et magistrats"],
    correct: 1,
    explanation: "Le Président de la République et le gouvernement (Premier ministre et ministres)."
  },
  {
    id: "T2_Q6",
    q: "Qu'est-ce que le pouvoir exécutif ?",
    a: ["Le pouvoir qui vote les lois et le budget", "Le pouvoir qui met en œuvre les lois et dirige l'action de l'État au quotidien", "Le pouvoir qui juge les infractions et tranche les litiges"],
    correct: 1,
    explanation: "Le pouvoir qui met en œuvre les lois et dirige l'action de l'État au quotidien. Il est exercé par le Président de la République et le gouvernement."
  },
  {
    id: "T2_Q7",
    q: "Qui possède le pouvoir législatif ?",
    a: ["Le Président de la République", "Le Parlement (Assemblée nationale et Sénat)", "Le Conseil constitutionnel"],
    correct: 1,
    explanation: "Le Parlement, composé de l'Assemblée nationale et du Sénat."
  },
  {
    id: "T2_Q8",
    q: "Qui vote les lois ?",
    a: ["Le Premier ministre seul", "Le Parlement (l'Assemblée nationale et le Sénat)", "Les préfets"],
    correct: 1,
    explanation: "Le Parlement (l'Assemblée nationale et le Sénat). En cas de désaccord entre les deux chambres, l'Assemblée nationale a le dernier mot."
  },
  {
    id: "T2_Q9",
    q: "Le Parlement est composé :",
    a: ["Du Président de la République et des ministres", "De l'Assemblée nationale (577 députés) et du Sénat (348 sénateurs)", "Du Conseil d'État et des tribunaux"],
    correct: 1,
    explanation: "De l'Assemblée nationale (577 députés élus pour 5 ans) et du Sénat (348 sénateurs élus pour 6 ans)."
  },
  {
    id: "T2_Q10",
    q: "Quel est le rôle du Parlement ?",
    a: ["Nommer les hauts fonctionnaires et ambassadeurs", "Voter les lois, contrôler le gouvernement et adopter le budget de l'État", "Rendre la justice et appliquer les sanctions pénales"],
    correct: 1,
    explanation: "Voter les lois, contrôler le gouvernement et adopter le budget de l'État."
  },
  {
    id: "T2_Q11",
    q: "Qui est élu lors des élections législatives ?",
    a: ["Le Président de la République", "Les députés à l'Assemblée nationale", "Les maires"],
    correct: 1,
    explanation: "Les députés à l'Assemblée nationale."
  },
  {
    id: "T2_Q12",
    q: "Combien de députés composent l'Assemblée nationale ?",
    a: ["348 députés", "577 députés", "600 députés"],
    correct: 1,
    explanation: "577 députés, élus pour 5 ans au scrutin uninominal majoritaire à deux tours."
  },
  {
    id: "T2_Q13",
    q: "Quel est le rôle des députés ?",
    a: ["Diriger les ministères et administrations publiques", "Représenter les citoyens, voter les lois et contrôler l'action du gouvernement", "Nommer le préfet de leur département"],
    correct: 1,
    explanation: "Représenter les citoyens, voter les lois et contrôler l'action du gouvernement."
  },
  {
    id: "T2_Q14",
    q: "Quand sont élus les sénateurs ?",
    a: ["Tous les 5 ans au suffrage direct", "Tous les 3 ans (par moitié) par les grands électeurs", "Tous les 6 ans par le Président"],
    correct: 1,
    explanation: "Tous les 3 ans (par moitié), par les grands électeurs (maires, conseillers municipaux, départementaux et régionaux)."
  },
  {
    id: "T2_Q15",
    q: "Pour combien de temps sont élus les sénateurs ?",
    a: ["4 ans", "6 ans", "9 ans"],
    correct: 1,
    explanation: "6 ans, renouvelables."
  },
  {
    id: "T2_Q16",
    q: "Pour combien de temps sont élus les députés ?",
    a: ["3 ans", "5 ans", "7 ans"],
    correct: 1,
    explanation: "5 ans."
  },
  {
    id: "T2_Q17",
    q: "La séparation des pouvoirs : quels sont les trois pouvoirs concernés ?",
    a: ["Le pouvoir régional, départemental et communal", "Le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire", "Le pouvoir présidentiel, gouvernemental et préfectoral"],
    correct: 1,
    explanation: "Le pouvoir exécutif (Président + gouvernement), le pouvoir législatif (Parlement) et le pouvoir judiciaire (magistrats, tribunaux). Cette séparation garantit l'équilibre démocratique et empêche l'abus de pouvoir."
  },
  {
    id: "T2_Q18",
    q: "Est-ce que le Président de la République a tous les pouvoirs ?",
    a: ["Oui, c'est le chef absolu de l'État", "Non. Les pouvoirs sont séparés entre l'exécutif, le législatif et le judiciaire", "Oui, mais uniquement en cas de crise majeure"],
    correct: 1,
    explanation: "Non. Les pouvoirs sont séparés entre l'exécutif, le législatif et le judiciaire. Le Président ne peut pas voter les lois ni rendre la justice."
  },
  {
    id: "T2_Q19",
    q: "Quel est le rôle de l'autorité judiciaire ?",
    a: ["Proposer de nouvelles lois au Parlement", "Appliquer la loi, juger les infractions, trancher les litiges et protéger les droits et libertés", "Gérer l'administration et le budget des mairies"],
    correct: 1,
    explanation: "Appliquer la loi, juger les infractions, trancher les litiges et protéger les droits et libertés des individus."
  },
  {
    id: "T2_Q20",
    q: "Quel pouvoir détient un juge ?",
    a: ["Le pouvoir exécutif", "Le pouvoir judiciaire", "Le pouvoir législatif"],
    correct: 1,
    explanation: "Le pouvoir judiciaire. Les juges sont indépendants du gouvernement et de l'Assemblée nationale."
  },
  {
    id: "T2_Q21",
    q: "L'autorité judiciaire est exercée par :",
    a: ["Les députés et sénateurs", "Les magistrats (juges et procureurs)", "La police et la gendarmerie"],
    correct: 1,
    explanation: "Les magistrats (juges et procureurs), qui rendent la justice au nom du peuple français."
  },
  {
    id: "T2_Q22",
    q: "Qui sanctionne l'auteur d'un vol ?",
    a: ["Le maire de la commune", "Un juge (tribunal)", "Le commissaire de police"],
    correct: 1,
    explanation: "Un juge (tribunal correctionnel pour les délits, cour d'assises pour les crimes)."
  },
  {
    id: "T2_Q23",
    q: "A-t-on le droit de ne pas respecter une loi ?",
    a: ["Oui, si l'on a une justification personnelle majeure", "Non. La loi s'impose à tous, sans exception", "Oui, les étrangers n'y sont pas soumis"],
    correct: 1,
    explanation: "Non. La loi s'impose à tous, sans exception. Toute personne qui ne respecte pas la loi s'expose à des sanctions pénales ou civiles."
  },
  {
    id: "T2_Q24",
    q: "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    a: ["Il bénéficie d'une immunité totale et définitive", "Il peut être poursuivi et jugé comme tout citoyen", "Il est uniquement démis de ses fonctions sans procès"],
    correct: 1,
    explanation: "Il peut être poursuivi et jugé comme tout citoyen. En France, nul n'est au-dessus des lois, y compris les membres du gouvernement."
  },
  {
    id: "T2_Q25",
    q: "Qui doit respecter la loi ?",
    a: ["Uniquement les citoyens de nationalité française", "Tout le monde : les citoyens, les résidents étrangers, les entreprises et l'État lui-même", "Uniquement les personnes majeures"],
    correct: 1,
    explanation: "Tout le monde : les citoyens, les résidents étrangers, les entreprises et l'État lui-même."
  },

  // --- Les élections et la démocratie ---
  {
    id: "T2_Q26",
    q: "À partir de quel âge a-t-on le droit de voter ?",
    a: ["16 ans", "18 ans", "21 ans"],
    correct: 1,
    explanation: "18 ans."
  },
  {
    id: "T2_Q27",
    q: "Qui peut voter aux élections en France ?",
    a: ["Tous les résidents ayant un titre de séjour valide", "Les citoyens français majeurs inscrits sur les listes électorales", "Uniquement les propriétaires d'un bien immobilier"],
    correct: 1,
    explanation: "Les citoyens français majeurs (18 ans et plus) inscrits sur les listes électorales."
  },
  {
    id: "T2_Q28",
    q: "Quelle condition est nécessaire pour voter aux élections ?",
    a: ["Avoir travaillé au moins 3 ans en France", "Être de nationalité française, avoir 18 ans et être inscrit sur les listes électorales", "Avoir un casier judiciaire totalement vierge de toute amende"],
    correct: 1,
    explanation: "Être de nationalité française, avoir 18 ans et être inscrit sur les listes électorales."
  },
  {
    id: "T2_Q29",
    q: "Que signifie « suffrage universel » ?",
    a: ["Que le vote est payant pour financer les élections", "Que tout citoyen majeur a le droit de voter, sans distinction", "Que les votes comptent double pour les personnes diplômées"],
    correct: 1,
    explanation: "Que tout citoyen majeur a le droit de voter, quelle que soit son origine, sa religion, son sexe ou sa condition sociale."
  },
  {
    id: "T2_Q30",
    q: "Qui est élu lors des élections municipales ?",
    a: ["Le préfet et ses secrétaires", "Le conseil municipal et le maire", "Les députés du département"],
    correct: 1,
    explanation: "Le conseil municipal et le maire, qui dirigent la commune."
  },
  {
    id: "T2_Q31",
    q: "Qui dirige la commune ?",
    a: ["Le député de la circonscription", "Le maire", "Le gouverneur de région"],
    correct: 1,
    explanation: "Le maire, élu par le conseil municipal lors des élections municipales tous les 6 ans."
  },
  {
    id: "T2_Q32",
    q: "Concernant les partis politiques, quelle proposition est correcte ?",
    a: ["Ils doivent être autorisés chaque année par décret présidentiel", "En France, les partis politiques sont libres de se créer et d'exprimer leurs idées dans le cadre de la loi", "Il n'existe qu'un seul parti légal en France"],
    correct: 1,
    explanation: "En France, les partis politiques sont libres de se créer et d'exprimer leurs idées dans le cadre de la loi. Ils contribuent à l'expression du suffrage universel."
  },
  {
    id: "T2_Q33",
    q: "Quel est le régime politique de la France aujourd'hui ?",
    a: ["Une Monarchie parlementaire", "Une République démocratique", "Un Régime d'assemblée unique"],
    correct: 1,
    explanation: "Une République démocratique. La Ve République, fondée en 1958, est un régime semi-présidentiel où le Président est élu directement par les citoyens."
  },

  // --- Les collectivités territoriales et l'État ---
  {
    id: "T2_Q34",
    q: "Combien y a-t-il de départements en France ?",
    a: ["50 départements", "101 départements", "150 départements"],
    correct: 1,
    explanation: "101 départements (96 en métropole + 5 départements d'outre-mer)."
  },
  {
    id: "T2_Q35",
    q: "Qui représente l'État dans un département ?",
    a: ["Le maire de la plus grande ville", "Le préfet", "Le président du conseil départemental"],
    correct: 1,
    explanation: "Le préfet."
  },
  {
    id: "T2_Q36",
    q: "Qui est le préfet ?",
    a: ["Un élu local responsable des routes", "Le représentant de l'État dans un département ou une région, nommé par le gouvernement", "Un magistrat chargé de juger les litiges financiers"],
    correct: 1,
    explanation: "Le préfet est le représentant de l'État dans un département ou une région. Il est nommé par le gouvernement. Il veille à l'application des lois, gère les situations de crise et instruit les demandes de titres de séjour."
  },

  // --- L'Union Européenne ---
  {
    id: "T2_Q37",
    q: "Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?",
    a: ["15 États membres", "27 États membres", "32 États membres"],
    correct: 1,
    explanation: "27 États membres."
  },
  {
    id: "T2_Q38",
    q: "Quel État n'est pas membre de l'Union européenne ?",
    a: ["L'Italie", "Le Royaume-Uni", "L'Espagne"],
    correct: 1,
    explanation: "Le Royaume-Uni (qui a quitté l'UE le 31 janvier 2020 — Brexit). La Suisse, la Norvège ou la Turquie sont aussi des exemples de pays non-membres."
  },
  {
    id: "T2_Q39",
    q: "Quel pays est un pays fondateur de l'Union européenne ?",
    a: ["L'Espagne", "La France", "La Grèce"],
    correct: 1,
    explanation: "La France, l'Allemagne, l'Italie, la Belgique, les Pays-Bas et le Luxembourg sont les 6 membres fondateurs (traité de Rome, 1957)."
  },
  {
    id: "T2_Q40",
    q: "Quelle est la monnaie utilisée en France ?",
    a: ["Le Franc français", "L'euro (€)", "Le Dollar européen"],
    correct: 1,
    explanation: "L'euro (€), depuis le 1er janvier 2002."
  },
  {
    id: "T2_Q41",
    q: "Qui élit les députés européens ?",
    a: ["Les parlements nationaux de chaque pays", "Les citoyens européens au suffrage universel direct", "Le Conseil des ministres européen"],
    correct: 1,
    explanation: "Les citoyens européens (ressortissants de l'UE résidant dans un pays membre) au suffrage universel direct, tous les 5 ans."
  },
  {
    id: "T2_Q42",
    q: "À quelle fréquence les élections européennes sont-elles organisées ?",
    a: ["Tous les 3 ans", "Tous les 5 ans", "Tous les 6 ans"],
    correct: 1,
    explanation: "Tous les 5 ans."
  },
  {
    id: "T2_Q43",
    q: "Quelle condition est nécessaire pour voter aux élections européennes ?",
    a: ["Être né sur le continent européen", "Être citoyen d'un État membre de l'UE, avoir 18 ans et être inscrit sur les listes électorales", "Payer des impôts dans au moins deux pays de l'Union"],
    correct: 1,
    explanation: "Être citoyen d'un État membre de l'UE, avoir 18 ans et être inscrit sur les listes électorales."
  },
  {
    id: "T2_Q44",
    q: "Quand célèbre-t-on la journée de l'Europe ?",
    a: ["Le 1er mai", "Le 9 mai", "Le 14 juillet"],
    correct: 1,
    explanation: "Le 9 mai. Cette date commémore la déclaration Schuman du 9 mai 1950, considérée comme l'acte fondateur de la construction européenne."
  },

  // ==========================================
  // --- THÉMATIQUE 3 : DROITS ET DEVOIRS ---
  // ==========================================
  
  // --- La Constitution et les textes fondamentaux ---
  {
    id: "T3_Q1",
    q: "Comment s'appelle la Constitution actuelle de la France ?",
    a: ["La Constitution de la IVe République", "La Constitution de la Ve République", "La Charte des droits républicains"],
    correct: 1,
    explanation: "La Constitution de la Ve République, adoptée le 4 octobre 1958."
  },
  {
    id: "T3_Q2",
    q: "Comment s'appelle le texte qui énonce les droits et devoirs des personnes résidant en France ?",
    a: ["Le Code de la route", "La Déclaration des Droits de l'Homme et du Citoyen (DDHC)", "Le Traité de Versailles"],
    correct: 1,
    explanation: "La Déclaration des Droits de l'Homme et du Citoyen (DDHC) de 1789, qui a valeur constitutionnelle."
  },
  {
    id: "T3_Q3",
    q: "De quelle année date la Déclaration des droits de l'homme et du citoyen ?",
    a: ["1789", "1905", "1945"],
    correct: 0,
    explanation: "1789. Elle a été adoptée le 26 août 1789 par l'Assemblée nationale constituante, pendant la Révolution française."
  },
  {
    id: "T3_Q4",
    q: "Quel texte a été adopté pendant la Révolution française ?",
    a: ["Le Code civil", "La Déclaration des Droits de l'Homme et du Citoyen (DDHC)", "La Constitution de la Ve République"],
    correct: 1,
    explanation: "La Déclaration des Droits de l'Homme et du Citoyen (DDHC), le 26 août 1789."
  },
  {
    id: "T3_Q5",
    q: "Parmi ces textes, lequel garantit les droits et libertés en France ?",
    a: ["La charte de la commune", "La Déclaration des Droits de l'Homme et du Citoyen (DDHC) de 1789", "Le décret sur la presse de 1810"],
    correct: 1,
    explanation: "La Déclaration des Droits de l'Homme et du Citoyen (DDHC) de 1789, qui fait partie du « bloc de constitutionnalité »."
  },
  {
    id: "T3_Q6",
    q: "Quel est le texte fondateur établissant en France les droits et devoirs de chaque citoyen ?",
    a: ["La Déclaration des Droits de l'Homme et du Citoyen (DDHC) de 1789, complétée par le Préambule de 1946 et la Charte de l'environnement", "Le règlement intérieur du Parlement", "La Déclaration d'indépendance nationale"],
    correct: 0,
    explanation: "La DDHC de 1789, complétée par le Préambule de la Constitution de 1946 et la Charte de l'environnement de 2004."
  },

  // --- Les droits fondamentaux ---
  {
    id: "T3_Q7",
    q: "Lequel de ces droits est un droit fondamental ?",
    a: ["La liberté d'expression, de conscience, le droit à un procès équitable, à l'éducation et à la santé", "Le droit d'accès gratuit aux cinémas et théâtres d'État", "Le droit de s'affranchir de l'impôt sur le revenu"],
    correct: 0,
    explanation: "La liberté d'expression, la liberté de conscience, le droit à un procès équitable, le droit à l'éducation, le droit à la santé — tous sont des droits fondamentaux garantis par la Constitution."
  },
  {
    id: "T3_Q8",
    q: "Qu'est-ce que la liberté d'expression ?",
    a: ["Le droit d'insulter publiquement ses voisins en cas de désaccord", "Le droit de chaque personne d'exprimer ses opinions librement, dans les limites fixées par la loi", "Une liberté réservée exclusivement aux membres du gouvernement"],
    correct: 1,
    explanation: "Le droit de chaque personne d'exprimer ses opinions, ses idées et ses convictions librement, par écrit, oralement ou par tout autre moyen, dans les limites fixées par la loi (pas d'incitation à la haine ou à la violence)."
  },
  {
    id: "T3_Q9",
    q: "Quel droit permet à une personne de se défendre devant la justice ?",
    a: ["Le droit à la défense", "Le droit de veto judiciaire", "La liberté d'association"],
    correct: 0,
    explanation: "Le droit à la défense, qui garantit que toute personne poursuivie peut bénéficier d'un avocat et présenter ses arguments devant un tribunal."
  },
  {
    id: "T3_Q10",
    q: "Quelle liberté permet à une personne de ne pas avoir de religion ?",
    a: ["La liberté de réunion", "La liberté de conscience (ou liberté de pensée)", "Le droit à l'anonymat public"],
    correct: 1,
    explanation: "La liberté de conscience (ou liberté de pensée), garantie par la laïcité : chaque personne est libre de croire ou de ne pas croire."
  },
  {
    id: "T3_Q11",
    q: "Que permet la citoyenneté française ?",
    a: ["De voyager sans titre de transport sur le territoire national", "De voter aux élections, d'être élu, d'accéder à certains emplois publics et de bénéficier de la protection consulaire", "D'obtenir l'exemption définitive des obligations fiscales civiques"],
    correct: 1,
    explanation: "De voter aux élections, d'être élu, d'accéder à certains emplois publics, de bénéficier de la protection consulaire à l'étranger."
  },
  {
    id: "T3_Q12",
    q: "Concernant les droits individuels, quelle proposition est correcte ?",
    a: ["Ils s'appliquent de manière arbitraire selon les régions de France", "Ils sont garantis par la Constitution et s'exercent librement tant qu'ils ne nuisent pas à autrui", "Ils remplacent les devoirs fiscaux de l'individu"],
    correct: 1,
    explanation: "Les droits individuels sont garantis par la Constitution et les lois. Ils peuvent être exercés librement tant qu'ils ne portent pas atteinte aux droits d'autrui ni à l'ordre public."
  },

  // --- Les droits sur la vie privée et la famille ---
  {
    id: "T3_Q13",
    q: "Une femme peut-elle avorter en France ?",
    a: ["Non, c'est totalement interdit par la législation nationale", "Oui, le droit à l'IVG est légal et inscrit dans la Constitution française", "Oui, mais cela nécessite un accord écrit d'un tribunal"],
    correct: 1,
    explanation: "Oui. L'interruption volontaire de grossesse (IVG) est légale en France. Depuis 2024, le droit à l'IVG est inscrit dans la Constitution française."
  },
  {
    id: "T3_Q14",
    q: "Est-il toujours possible de divorcer ?",
    a: ["Non, le divorce est interdit sauf motif religieux spécifique", "Oui, toute personne peut demander le divorce", "Oui, mais seulement après l'accord du maire de la commune"],
    correct: 1,
    explanation: "Oui. En France, toute personne peut demander le divorce. Il peut être prononcé par consentement mutuel (amiable) ou de manière contentieuse."
  },
  {
    id: "T3_Q15",
    q: "La peine de mort est :",
    a: ["Suspendue temporairement", "Abolie en France", "Autorisée uniquement pour les crimes d'État"],
    correct: 1,
    explanation: "Abolie en France. Elle a été supprimée par la loi du 9 octobre 1981, sous la présidence de François Mitterrand, à l'initiative du ministre de la Justice Robert Badinter."
  },
  {
    id: "T3_Q16",
    q: "En France, est-ce légal d'être marié à plusieurs personnes en même temps ?",
    a: ["Oui, c'est autorisé pour l'ensemble des résidents majeurs", "Non, la polygamie est interdite en France", "Oui, si le premier conjoint fournit une décharge écrite"],
    correct: 1,
    explanation: "Non. La polygamie est interdite en France. Le mariage ne peut être contracté qu'entre deux personnes."
  },

  // --- Les devoirs et les infractions ---
  {
    id: "T3_Q17",
    q: "Que risque une personne qui ne respecte pas la loi ?",
    a: ["Une simple réprimande morale de la part des forces de l'ordre", "Des sanctions pénales (amende, prison) ou civiles selon la gravité de l'infraction", "Rien, la loi n'étant qu'une recommandation indicative"],
    correct: 1,
    explanation: "Des sanctions pénales (amende, peine de prison) ou civiles (dommages et intérêts) selon la gravité de l'infraction."
  },
  {
    id: "T3_Q18",
    q: "Qu'est-ce qu'une infraction ?",
    a: ["Une démarche administrative obligatoire auprès de la préfecture", "Un acte interdit par la loi, classé en contravention, délit ou crime", "Une autorisation d'exercer un métier commercial"],
    correct: 1,
    explanation: "Un acte interdit par la loi. Il existe trois catégories : les contraventions (les moins graves), les délits (ex: vol, agression), et les crimes (les plus graves : meurtre, viol)."
  },
  {
    id: "T3_Q19",
    q: "Quelle est l'infraction la plus grave ?",
    a: ["Le délit", "Le crime", "La contravention"],
    correct: 1,
    explanation: "Le crime (ex: meurtre, viol, terrorisme). Les crimes sont jugés par la cour d'assises."
  },
  {
    id: "T3_Q20",
    q: "Quel est le rôle de la police ?",
    a: ["Rédiger de nouvelles lois pour le Parlement national", "Maintenir l'ordre public, protéger les personnes et les biens, et réprimer les infractions", "Trancher définitivement les litiges civils financiers"],
    correct: 1,
    explanation: "Maintenir l'ordre public, protéger les personnes et les biens, prévenir et réprimer les infractions, et appliquer les décisions de justice."
  },
  {
    id: "T3_Q21",
    q: "Quel est le rôle de la gendarmerie ?",
    a: ["Elle est une milice privée sous l'autorité des maires uniquement", "Elle exerce les mêmes missions que la police dans les zones rurales et péri-urbaines", "Elle est uniquement active à l'étranger dans les conflits internationaux"],
    correct: 1,
    explanation: "La gendarmerie exerce les mêmes missions que la police dans les zones rurales et péri-urbaines. Elle dépend du ministère de l'Intérieur."
  },
  {
    id: "T3_Q22",
    q: "Que doit faire une personne en cas d'accident ?",
    a: ["Poursuivre sa route immédiatement pour ne pas gêner", "S'arrêter, porter secours si possible, appeler les secours et ne pas quitter les lieux", "Appeler un média d'information avant les numéros d'urgence"],
    correct: 1,
    explanation: "S'arrêter, porter secours si possible, appeler les secours (15 pour le SAMU, 18 pour les pompiers, 17 pour la police), et ne pas quitter les lieux sans avoir échangé ses coordonnées (en cas d'accident de la route)."
  },
  {
    id: "T3_Q23",
    q: "Que doit faire une victime de violences ?",
    a: ["Attendre que l'infraction disparaisse d'elle-même", "Appeler la police (17) ou la gendarmerie, se rendre aux urgences si nécessaire, et déposer plainte", "Garder le secret par crainte de complications administratives"],
    correct: 1,
    explanation: "Appeler la police (17) ou la gendarmerie, se rendre aux urgences si nécessaire, et déposer une plainte. Des associations d'aide aux victimes (comme les CIDFF) peuvent accompagner dans ces démarches."
  },
  {
    id: "T3_Q24",
    q: "Faut-il réduire ses déchets ?",
    a: ["Non, l'État gère l'élimination sans limites de volume", "Oui, la réduction des déchets est une obligation environnementale et civique", "Non, le tri est facultatif pour les particuliers"],
    correct: 1,
    explanation: "Oui. La réduction des déchets est une obligation environnementale et civique. La France applique le principe du pollueur-payeur et des règles strictes sur le tri et l'élimination des déchets."
  },
  {
    id: "T3_Q25",
    q: "Jeter une bouteille dans la rue est :",
    a: ["Toléré par l'administration municipale", "Un acte interdit (contravention) puni d'une amende", "Un acte libre sur la voie publique"],
    correct: 1,
    explanation: "Un acte interdit (contravention) puni d'une amende. Jeter des déchets sur la voie publique est une infraction au Code de l'environnement."
  },
  {
    id: "T3_Q26",
    q: "Déposer une machine à laver cassée sur le trottoir est :",
    a: ["Autorisé s'il s'agit d'un objet métallique", "Interdit. Les encombrants doivent être déposés en déchetterie ou signalés à la mairie", "Légal à n'importe quelle heure de la journée"],
    correct: 1,
    explanation: "Interdit. Les encombrants doivent être déposés dans les déchetteries ou signalés à la mairie pour enlèvement. Un abandon sur la voie publique est passible d'amende."
  },
  {
    id: "T3_Q27",
    q: "En quoi consiste la traite des êtres humains ?",
    a: ["Un accord d'immigration légal supervisé par l'État", "Le recrutement ou l'accueil de personnes par contrainte à des fins d'exploitation (travail forcé, prostitution)", "Un système de recrutement de la fonction publique"],
    correct: 1,
    explanation: "C'est le recrutement, le transport ou l'accueil de personnes par la violence, la tromperie ou la contrainte à des fins d'exploitation (travail forcé, prostitution, etc.). C'est un crime sévèrement puni."
  },
  // ==========================================
  // --- THÉMATIQUE 4 : HISTOIRE, GÉOGRAPHIE ET CULTURE ---
  // ==========================================
  
  // --- Les grandes dates de l'histoire de France ---
  {
    id: "T4_Q1",
    q: "En quelle année a débuté la Révolution française ?",
    a: ["1492", "1789", "1914"],
    correct: 1,
    explanation: "1789. Le 14 juillet 1789, la prise de la Bastille marque le début de la Révolution qui met fin à la monarchie absolue et proclame les droits de l'Homme."
  },
  {
    id: "T4_Q2",
    q: "Qui était le roi de France au moment de la Révolution française ?",
    a: ["Louis XIV", "Louis XVI", "Henri IV"],
    correct: 1,
    explanation: "Louis XVI. Il fut guillotiné le 21 janvier 1793."
  },
  {
    id: "T4_Q3",
    q: "Qui était Napoléon Ier ?",
    a: ["Un roi de la dynastie des Capétiens", "Un général de la Révolution devenu Consul puis Empereur des Français", "Le premier Président de la République française"],
    correct: 1,
    explanation: "Napoléon Bonaparte (1769-1821) : général de la Révolution devenu Consul (1799) puis Empereur des Français (1804-1814/1815). Il a créé le Code civil, la Légion d'honneur, les lycées et la Banque de France."
  },
  {
    id: "T4_Q4",
    q: "Qui a rendu l'école gratuite, laïque et obligatoire ?",
    a: ["Napoléon Bonaparte", "Jules Ferry", "Charles de Gaulle"],
    correct: 1,
    explanation: "Jules Ferry, ministre de l'Instruction publique sous la IIIe République (lois de 1881 et 1882). Ces lois ont fondé l'école républicaine française."
  },
  {
    id: "T4_Q5",
    q: "Depuis quelle année l'école publique est-elle gratuite ?",
    a: ["1789", "1881", "1945"],
    correct: 1,
    explanation: "1881 (loi Jules Ferry)."
  },
  {
    id: "T4_Q6",
    q: "Quand a eu lieu la Première Guerre mondiale ?",
    a: ["De 1870 à 1871", "De 1914 à 1918", "De 1939 à 1945"],
    correct: 1,
    explanation: "De 1914 à 1918. La France a combattu aux côtés des Alliés contre l'Allemagne et l'Autriche-Hongrie. L'armistice a été signé le 11 novembre 1918."
  },
  {
    id: "T4_Q7",
    q: "Quelle guerre a eu lieu entre 1914 et 1918 ?",
    a: ["La guerre de Cent Ans", "La Première Guerre mondiale", "La Seconde Guerre mondiale"],
    correct: 1,
    explanation: "La Première Guerre mondiale (aussi appelée la « Grande Guerre »)."
  },
  {
    id: "T4_Q8",
    q: "Le 11 novembre est un jour férié. À quoi correspond cette date ?",
    a: ["À la fête du travail", "À la commémoration de l'armistice de 1918", "À la célébration de la Constitution"],
    correct: 1,
    explanation: "À la commémoration de l'armistice du 11 novembre 1918, qui a mis fin à la Première Guerre mondiale."
  },
  {
    id: "T4_Q9",
    q: "Quand a eu lieu la Seconde Guerre mondiale ?",
    a: ["De 1914 à 1918", "De 1939 à 1945", "De 1954 à 1962"],
    correct: 1,
    explanation: "De 1939 à 1945. La France a été occupée par l'Allemagne nazie de 1940 à 1944. Elle a été libérée grâce aux Alliés et à la Résistance."
  },
  {
    id: "T4_Q10",
    q: "Qu'est-ce que la Shoah ?",
    a: ["Une bataille navale de la Première Guerre mondiale", "Le génocide de six millions de Juifs d'Europe organisé par le régime nazi", "Un traité d'alliance signé entre la France et le Royaume-Uni"],
    correct: 1,
    explanation: "Le génocide de six millions de Juifs d'Europe organisé par le régime nazi entre 1941 et 1945. En France, le régime de Vichy a collaboré à ces déportations. La Shoah est enseignée à l'école pour que cela ne se reproduise jamais."
  },
  {
    id: "T4_Q11",
    q: "En quelle année l'esclavage a-t-il été aboli définitivement en France ?",
    a: ["En 1789", "En 1848", "En 1905"],
    correct: 1,
    explanation: "En 1848, par le décret Schoelcher du 27 avril 1848, sous la IIe République."
  },
  {
    id: "T4_Q12",
    q: "En quelle année a été créée la Communauté Économique Européenne (CEE) ?",
    a: ["En 1945", "En 1957", "En 1992"],
    correct: 1,
    explanation: "En 1957, par le traité de Rome. La France en est membre fondateur."
  },
  {
    id: "T4_Q13",
    q: "Qui a fondé la Ve République ?",
    a: ["Napoléon Bonaparte", "Le général Charles de Gaulle", "François Mitterrand"],
    correct: 1,
    explanation: "Le général Charles de Gaulle. La Constitution de la Ve République a été adoptée le 4 octobre 1958."
  },
  {
    id: "T4_Q14",
    q: "Qui a été le premier Président élu sous la Ve République ?",
    a: ["Georges Pompidou", "Charles de Gaulle", "Valéry Giscard d'Estaing"],
    correct: 1,
    explanation: "Charles de Gaulle, élu en décembre 1958."
  },
  {
    id: "T4_Q15",
    q: "Pourquoi l'année 1958 est-elle importante pour la France ?",
    a: ["Parce qu'elle marque la fin de la Seconde Guerre mondiale", "Parce que la Constitution de la Ve République a été adoptée", "Parce que l'école est devenue gratuite cette année-là"],
    correct: 1,
    explanation: "Parce que la Constitution de la Ve République a été adoptée le 4 octobre 1958, fondant le régime politique actuel de la France."
  },
  {
    id: "T4_Q16",
    q: "Combien y a-t-il eu de républiques en France ?",
    a: ["3 républiques", "5 républiques", "7 républiques"],
    correct: 1,
    explanation: "5 républiques : Ire (1792), IIe (1848), IIIe (1870), IVe (1946), Ve (1958 — actuelle)."
  },
  {
    id: "T4_Q17",
    q: "Dans quelle République est-on aujourd'hui ?",
    a: ["La IIIe République", "La Ve République", "La VIe République"],
    correct: 1,
    explanation: "La Ve République, founded en 1958."
  },
  {
    id: "T4_Q18",
    q: "Que célèbre-t-on le 14 juillet ?",
    a: ["La signature de la Constitution actuelle", "La prise de la Bastille", "L'armistice de la Première Guerre mondiale"],
    correct: 1,
    explanation: "La prise de la Bastille (1789), symbole de la Révolution française et de la victoire du peuple contre l'absolutisme royal."
  },
  {
    id: "T4_Q19",
    q: "Quel pays ou région du monde a été colonisé par la France ?",
    a: ["L'Europe centrale", "L'Afrique (Maghreb, Afrique subsaharienne), l'Asie du Sud-Est, les Amériques et l'Océanie", "L'Amérique du Nord britannique uniquement"],
    correct: 1,
    explanation: "L'Afrique (Maghreb, Afrique subsaharienne), l'Asie du Sud-Est (Indochine), les Amériques (Haïti, Guyane) et l'Océanie. La colonisation française a été l'une des plus importantes au monde."
  },

  // --- La géographie de la France ---
  {
    id: "T4_Q20",
    q: "Quelle est la capitale de la France ?",
    a: ["Lyon", "Paris", "Marseille"],
    correct: 1,
    explanation: "Paris."
  },
  {
    id: "T4_Q21",
    q: "Qu'est-ce que Paris ?",
    a: ["Une région administrative autonome d'outre-mer", "La capitale de la France, siège du gouvernement et ville la plus peuplée", "Un port maritime majeur du nord de la France"],
    correct: 1,
    explanation: "La capitale de la France, siège du gouvernement et des principales institutions, ainsi que la ville la plus peuplée du pays avec environ 2,1 millions d'habitants (12 millions avec l'agglomération)."
  },
  {
    id: "T4_Q22",
    q: "Quel fleuve coule en France ?",
    a: ["Le Danube", "La Seine, la Loire, le Rhône, la Garonne et le Rhin", "Le Nil"],
    correct: 1,
    explanation: "Plusieurs fleuves : la Seine (Paris), la Loire (le plus long, 1013 km), le Rhône, la Garonne et le Rhin. La Seine traverse Paris."
  },
  {
    id: "T4_Q23",
    q: "Sur quel continent se situe la France métropolitaine ?",
    a: ["En Amérique du Nord", "En Europe", "En Afrique"],
    correct: 1,
    explanation: "En Europe (Europe occidentale)."
  },
  {
    id: "T4_Q24",
    q: "Quel océan borde la côte ouest française ?",
    a: ["L'océan Pacifique", "L'océan Atlantique", "L'océan Indien"],
    correct: 1,
    explanation: "L'océan Atlantique."
  },
  {
    id: "T4_Q25",
    q: "Quelle est la mer au sud de la France métropolitaine ?",
    a: ["La mer Rouge", "La mer Méditerranée", "La mer Baltique"],
    correct: 1,
    explanation: "La mer Méditerranée."
  },
  {
    id: "T4_Q26",
    q: "Quelle chaîne de montagnes est située entre la France et l'Italie ?",
    a: ["Les Pyrénées", "Les Alpes", "Le Massif central"],
    correct: 1,
    explanation: "Les Alpes (avec le Mont-Blanc, point culminant de France et d'Europe occidentale à 4 808 m)."
  },
  {
    id: "T4_Q27",
    q: "Combien y a-t-il de régions en France métropolitaine ?",
    a: ["5 régions", "13 régions métropolitaines", "22 régions"],
    correct: 1,
    explanation: "13 régions métropolitaines (depuis la réforme territoriale de 2016)."
  },
  {
    id: "T4_Q28",
    q: "Quelle île ou territoire est un département d'outre-mer français ?",
    a: ["La Corse et la Sardaigne", "La Martinique, la Guadeloupe, La Réunion, Mayotte et la Guyane", "Madagascar et Haïti"],
    correct: 1,
    explanation: "La Martinique, la Guadeloupe, La Réunion, Mayotte et la Guyane (sur le continent américain) sont les 5 départements et régions d'outre-mer (DROM)."
  },
  {
    id: "T4_Q29",
    q: "Où se situe la Corse ?",
    a: ["Dans l'océan Atlantique", "En mer Méditerranée", "Dans la mer de la Manche"],
    correct: 1,
    explanation: "En mer Méditerranée, au sud-est de la France. C'est la plus grande île française."
  },
  {
    id: "T4_Q30",
    q: "Quelle ville est française ?",
    a: ["Bruxelles et Genève", "Paris, Lyon, Marseille, Bordeaux, Toulouse, Lille", "Montréal et Casablanca"],
    correct: 1,
    explanation: "Paris, Lyon, Marseille, Bordeaux, Toulouse, Lille, Nantes, Strasbourg, Nice... sont toutes des grandes villes françaises."
  },
  {
    id: "T4_Q31",
    q: "Quelle ville est un grand port maritime ?",
    a: ["Paris et Lyon", "Marseille, Le Havre, Bordeaux, Nantes-Saint-Nazaire", "Strasbourg et Toulouse"],
    correct: 1,
    explanation: "Marseille (premier port de France et de Méditerranée), Le Havre (premier port pour le commerce), Bordeaux, Nantes-Saint-Nazaire."
  },

  // --- Le patrimoine culturel ---
  {
    id: "T4_Q32",
    q: "Qui était Molière ?",
    a: ["Un peintre impressionniste célèbre", "Un dramaturge français, auteur de grandes comédies", "Un homme politique de la Révolution"],
    correct: 1,
    explanation: "Jean-Baptiste Poquelin dit Molière (1622-1673) : dramaturge français, auteur de grandes comédies comme Le Bourgeois gentilhomme, Tartuffe, L'Avare. Il est considéré comme le maître de la comédie française."
  },
  {
    id: "T4_Q33",
    q: "Qui était Jean de la Fontaine ?",
    a: ["Un amiral de la marine royale", "Un poète français célèbre pour ses Fables", "Un architecte ayant construit les châteaux de la Loire"],
    correct: 1,
    explanation: "Jean de La Fontaine (1621-1695) : poète français célèbre pour ses Fables, recueil de poèmes moraux illustrés par des animaux (Le corbeau et le renard, La cigale et la fourmi...)."
  },
  {
    id: "T4_Q34",
    q: "Qui était Charles Baudelaire ?",
    a: ["Un compositeur de musique d'opéra", "Un poète français, auteur des Fleurs du Mal", "Un cinéaste de la Nouvelle Vague"],
    correct: 1,
    explanation: "Charles Baudelaire (1821-1867) : poète français, auteur des Fleurs du Mal (1857), chef-d'œuvre de la poésie symboliste française."
  },
  {
    id: "T4_Q35",
    q: "Qui était George Sand ?",
    a: ["Un homme d'État britannique ami de la France", "Une romancière française engagée, l'une des premières grandes femmes de lettres", "Une exploratrice du continent africain"],
    correct: 1,
    explanation: "George Sand (Amantine Aurore Lucile Dupin, 1804-1876) : romancière française engagée, l'une des premières grandes femmes de lettres françaises. Elle défendit les droits des femmes et des travailleurs."
  },
  {
    id: "T4_Q36",
    q: "Qui était Simone de Beauvoir ?",
    a: ["Une reine de France au Moyen Âge", "Une philosophe et écrivaine française, auteure du Deuxième Sexe", "Une scientifique ayant découvert le radium"],
    correct: 1,
    explanation: "Simone de Beauvoir (1908-1986) : philosophe et écrivaine française, auteure du Deuxième Sexe (1949), œuvre fondatrice du féminisme moderne."
  },
  {
    id: "T4_Q37",
    q: "Qui était Albert Camus ?",
    a: ["Un sculpteur français de l'époque moderne", "Un écrivain et philosophe français, auteur de L'Étranger et La Peste", "Un aviateur héroïque de la Première Guerre mondiale"],
    correct: 1,
    explanation: "Albert Camus (1913-1960) : écrivain et philosophe français, auteur de L'Étranger et La Peste. Prix Nobel de littérature en 1957. Figure majeure de la philosophie de l'absurde."
  },
  {
    id: "T4_Q38",
    q: "Qui était Paul Cézanne ?",
    a: ["Un ministre des finances sous Louis XIV", "Un peintre français, précurseur du cubisme", "Un architecte des monuments parisiens"],
    correct: 1,
    explanation: "Paul Cézanne (1839-1906) : peintre français, précurseur du cubisme. Il a profondément influencé l'art moderne avec ses natures mortes et ses paysages de Provence."
  },
  {
    id: "T4_Q39",
    q: "Qui était Marc Chagall ?",
    a: ["Un musicien classique virtuose", "Un peintre d'origine biélorusse naturalisé français, connu pour ses œuvres poétiques", "Un poète du mouvement romantique"],
    correct: 1,
    explanation: "Marc Chagall (1887-1985) : peintre d'origine biélorusse naturalisé français, connu pour ses œuvres poétiques mêlant folklore juif et surréalisme (plafond de l'Opéra de Paris)."
  },
  {
    id: "T4_Q40",
    q: "Qui était Joséphine Baker ?",
    a: ["Une femme politique française ministre de la santé", "Une artiste américaine naturalisée française, danseuse, chanteuse et résistante", "La première avocate inscrite au barreau de Paris"],
    correct: 1,
    explanation: "Joséphine Baker (1906-1975) : artiste américaine naturalisée française, danseuse, chanteuse et résistante. Entrée au Panthéon en 2021, première femme noire à recevoir cet honneur."
  },
  {
    id: "T4_Q41",
    q: "Qui était une chanteuse française célèbre ?",
    a: ["Marie Curie", "Édith Piaf", "George Sand"],
    correct: 1,
    explanation: "Édith Piaf (La Môme, auteure de La Vie en rose), mais aussi Joséphine Baker, Barbara, Françoise Hardy sont des chanteuses françaises célèbres."
  },
  {
    id: "T4_Q42",
    q: "Qu'est-ce que le Louvre ?",
    a: ["Le palais où siège le Sénat français actuellement", "Le plus grand musée du monde et le plus visité, situé à Paris", "Une cathédrale gothique du nord de la France"],
    correct: 1,
    explanation: "Le musée du Louvre à Paris est le plus grand musée du monde et le plus visité. Il abrite notamment la Joconde de Léonard de Vinci et la Vénus de Milo."
  },
  {
    id: "T4_Q43",
    q: "Dans quelle ville se trouve la tour Eiffel ?",
    a: ["Marseille", "Paris", "Lyon"],
    correct: 1,
    explanation: "À Paris. Construite par Gustave Eiffel pour l'Exposition universelle de 1889, elle est le monument le plus visité au monde."
  },
  {
    id: "T4_Q44",
    q: "Quand célèbre-t-on Noël ?",
    a: ["Le 14 juillet", "Le 25 décembre", "Le 1er janvier"],
    correct: 1,
    explanation: "Le 25 décembre. C'est une fête chrétienne qui est aussi un jour férié pour tous en France."
  },
  {
    id: "T4_Q45",
    q: "Lequel de ces personnages historiques est français ?",
    a: ["Abraham Lincoln", "Napoléon Bonaparte", "Christopher Columbus"],
    correct: 1,
    explanation: "Napoléon Bonaparte, Charles de Gaulle, Victor Hugo, Marie Curie, Jeanne d'Arc — tous sont des personnages historiques français majeurs."
  },

  // ==========================================
  // --- THÉMATIQUE 5 : VIVRE DANS LA SOCIÉTÉ FRANÇAISE ---
  // ==========================================
  
  // --- La santé ---
  {
    id: "T5_Q1",
    q: "En cas de problème de santé non urgent, à qui faut-il s'adresser en premier ?",
    a: ["Directement aux urgences hospitalières", "Au médecin traitant (médecin généraliste)", "À un médecin spécialiste sans ordonnance"],
    correct: 1,
    explanation: "Au médecin traitant (médecin généraliste). C'est le médecin que vous avez choisi et déclaré à l'Assurance maladie. Il coordonne votre parcours de soins."
  },
  {
    id: "T5_Q2",
    q: "Quel est le rôle du médecin traitant ?",
    a: ["Assurer uniquement les opérations chirurgicales complexes", "Assurer le suivi médical régulier, orienter vers des spécialistes et coordonner les soins", "Gérer l'administration des hôpitaux publics"],
    correct: 1,
    explanation: "Assurer le suivi médical régulier, orienter vers des spécialistes si nécessaire, et coordonner les soins du patient. Le consulter en premier permet de bénéficier d'un meilleur remboursement."
  },
  {
    id: "T5_Q3",
    q: "Dans quelles situations doit-on se rendre aux urgences de l'hôpital ?",
    a: ["Pour un renouvellement d'ordonnance ou un rhume léger", "En cas d'urgence médicale grave (accident, perte de connaissance, AVC...)", "Pour obtenir un certificat médical de sport de routine"],
    correct: 1,
    explanation: "En cas d'urgence médicale grave : accident, douleur intense, perte de connaissance, difficultés respiratoires, signes d'AVC. Pour les situations non urgentes, le médecin traitant est préférable."
  },
  {
    id: "T5_Q4",
    q: "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?",
    a: ["La préfecture de votre département", "L'Assurance maladie (Sécurité sociale ou CPAM)", "Le ministère du Travail"],
    correct: 1,
    explanation: "L'Assurance maladie (aussi appelée Sécurité sociale ou CPAM — Caisse Primaire d'Assurance Maladie). La carte Vitale permet d'accéder aux remboursements."
  },
  {
    id: "T5_Q5",
    q: "À quoi sert la carte Vitale ?",
    a: ["À voyager gratuitement dans les transports en commun", "Elle permet d'être reconnu par l'Assurance maladie et facilite le remboursement automatique des soins", "À prouver son identité lors des élections de manière officielle"],
    correct: 1,
    explanation: "Elle permet d'être reconnu par l'Assurance maladie chez le médecin, à la pharmacie ou à l'hôpital, et facilite le remboursement automatique des soins."
  },
  {
    id: "T5_Q6",
    q: "À quoi sert une mutuelle santé ?",
    a: ["À remplacer intégralement la Sécurité sociale", "Elle rembourse tout ou partie des frais de santé non couverts par l'Assurance maladie", "À payer les médicaments non autorisés en France"],
    correct: 1,
    explanation: "Une mutuelle (ou complémentaire santé) rembourse tout ou partie des frais de santé non couverts par l'Assurance maladie (ticket modérateur, dépassements d'honoraires...)."
  },
  {
    id: "T5_Q7",
    q: "Quel est l'objectif des vaccinations obligatoires ?",
    a: ["Financer les laboratoires pharmaceutiques publics", "Protéger chaque individu contre des maladies graves ET protéger la collectivité", "Permettre aux enfants de sauter des classes"],
    correct: 1,
    explanation: "Protéger chaque individu contre certaines maladies graves ET protéger la collectivité en empêchant la propagation des épidémies (immunité collective). Certains vaccins sont obligatoires pour les enfants en France."
  },
  {
    id: "T5_Q8",
    q: "Quel numéro d'urgence permet d'appeler le SAMU ?",
    a: ["Le 17", "Le 15", "Le 18"],
    correct: 1,
    explanation: "Le 15 (SAMU — Service d'Aide Médicale Urgente)."
  },
  {
    id: "T5_Q9",
    q: "Quel numéro d'urgence permet d'appeler les pompiers ?",
    a: ["Le 15", "Le 18", "Le 17"],
    correct: 1,
    explanation: "Le 18. Le 112 est le numéro d'urgence européen, utilisable depuis n'importe quel pays de l'UE."
  },
  {
    id: "T5_Q10",
    q: "Qu'est-ce qu'un numéro d'urgence ?",
    a: ["Un numéro surtaxé réservé aux administrations", "Un numéro de téléphone gratuit accessible 24h/24 pour contacter rapidement les secours", "Une ligne directe avec le maire de la commune"],
    correct: 1,
    explanation: "Un numéro de téléphone gratuit accessible 24h/24 pour contacter rapidement les secours en cas d'urgence (15 SAMU, 17 police, 18 pompiers, 112 urgences européennes)."
  },
  {
    id: "T5_Q11",
    q: "Concernant l'accès aux soins, quelle proposition est correcte ?",
    a: ["L'accès aux soins est réservé exclusivement aux citoyens français", "Toute personne résidant en France, quelle que soit sa situation, a accès aux soins d'urgence", "Les hôpitaux refusent les personnes en situation précaire"],
    correct: 1,
    explanation: "Toute personne résidant en France, quelle que soit sa nationalité ou sa situation administrative, a accès aux soins d'urgence. Les personnes en situation précaire peuvent bénéficier de l'Aide Médicale d'État (AME)."
  },

  // --- Le travail et l'emploi ---
  {
    id: "T5_Q12",
    q: "Quelle est la durée légale du temps de travail par semaine ?",
    a: ["39 heures", "35 heures", "40 heures"],
    correct: 1,
    explanation: "35 heures par semaine (loi Aubry de 2000). Des heures supplémentaires sont possibles mais encadrées et majorées."
  },
  {
    id: "T5_Q13",
    q: "Qu'est-ce que le SMIC ?",
    a: ["Le système médical d'intervention chirurgicale", "Le Salaire Minimum Interprofessionnel de Croissance (salaire minimum légal)", "Un syndicat de travailleurs indépendants"],
    correct: 1,
    explanation: "Le SMIC est le Salaire Minimum Interprofessionnel de Croissance : c'est le salaire minimum légal en dessous duquel aucun employeur ne peut rémunérer un salarié en France."
  },
  {
    id: "T5_Q14",
    q: "Que doit faire un employeur pour fixer un salaire ?",
    a: ["Fixer librement le montant sans aucune contrainte légale", "Respecter le SMIC et les éventuelles conventions collectives applicables", "Proposer un salaire inférieur au minimum si l'employé est d'accord"],
    correct: 1,
    explanation: "Respecter le SMIC (salaire minimum légal) et les éventuelles conventions collectives applicables à son secteur d'activité."
  },
  {
    id: "T5_Q15",
    q: "Le travail non déclaré est :",
    a: ["Autorisé pour les emplois de courte durée", "Illégal et privé de droits sociaux (retraite, chômage, maladie)", "Légal si l'employé paie une taxe forfaitaire"],
    correct: 1,
    explanation: "Illégal. Le travail non déclaré (ou travail au noir) est sanctionné par des amendes et des redressements pour l'employeur ET le salarié. Il prive aussi le salarié de ses droits sociaux (retraite, chômage, maladie)."
  },
  {
    id: "T5_Q16",
    q: "Quelle est la première démarche à réaliser pour chercher un emploi ?",
    a: ["Demander une autorisation écrite au maire", "S'inscrire à France Travail (anciennement Pôle emploi)", "Attendre d'être contacté par une entreprise publique"],
    correct: 1,
    explanation: "S'inscrire à France Travail (anciennement Pôle emploi) pour bénéficier d'un accompagnement dans la recherche d'emploi et, le cas échéant, des allocations chômage."
  },
  {
    id: "T5_Q17",
    q: "Qui est aidé par France Travail ?",
    a: ["Uniquement les grandes entreprises commerciales étrangères", "Les personnes à la recherche d'un emploi, les demandeurs d'emploi indemnisés et les employeurs", "Uniquement les fonctionnaires de l'État"],
    correct: 1,
    explanation: "Les personnes à la recherche d'un emploi, les demandeurs d'emploi indemnisés, mais aussi les employeurs dans leur recherche de candidats."
  },
  {
    id: "T5_Q18",
    q: "Une personne étrangère en situation régulière peut-elle créer son entreprise ?",
    a: ["Non, la création d'entreprise est réservée aux nationaux", "Oui, dans les mêmes conditions qu'un citoyen français", "Oui, mais uniquement sous forme d'association à but non lucratif"],
    correct: 1,
    explanation: "Oui, dans les mêmes conditions qu'un citoyen français. La nationalité n'est pas un obstacle à la création d'entreprise en France."
  },
  {
    id: "T5_Q19",
    q: "Une femme peut-elle créer son entreprise ?",
    a: ["Non, il faut obligatoirement l'accord d'un conjoint", "Oui, les femmes ont les mêmes droits que les hommes pour créer et diriger une entreprise", "Oui, mais uniquement dans certains secteurs réglementés"],
    correct: 1,
    explanation: "En France, les femmes ont les mêmes droits que les hommes pour créer et diriger une entreprise."
  },
  {
    id: "T5_Q20",
    q: "À partir de quel âge un mineur peut-il travailler ?",
    a: ["14 ans", "16 ans", "18 ans"],
    correct: 1,
    explanation: "À partir de 16 ans (fin de la scolarité obligatoire), dans le cadre de contrats adaptés. Des règles strictes encadrent le travail des mineurs."
  },
  {
    id: "T5_Q21",
    q: "Après avoir obtenu le permis de conduire, que faut-il faire pour conduire sa voiture ?",
    a: ["Conduire directement sans autre formalité", "Assurer son véhicule (responsabilité civile obligatoire) et vérifier le contrôle technique et l'immatriculation", "Attendre une homologation de la préfecture régionale"],
    correct: 1,
    explanation: "Assurer son véhicule (assurance responsabilité civile obligatoire), et s'assurer que le véhicule est en règle (contrôle technique à jour, immatriculation)."
  },

  // --- L'école et la famille ---
  {
    id: "T5_Q22",
    q: "Jusqu'à quel âge l'école est-elle obligatoire ?",
    a: ["14 ans", "16 ans", "18 ans"],
    correct: 1,
    explanation: "Jusqu'à 16 ans. L'instruction est obligatoire de 3 à 16 ans."
  },
  {
    id: "T5_Q23",
    q: "Pour qui l'école est-elle obligatoire ?",
    a: ["Uniquement pour les enfants de nationalité française", "Pour tous les enfants résidant en France de 3 à 16 ans, quelle que soit leur nationalité", "Uniquement pour les enfants dont les parents travaillent"],
    correct: 1,
    explanation: "Pour tous les enfants résidant en France de 3 à 16 ans, quelle que soit leur nationalité ou leur situation administrative."
  },
  {
    id: "T5_Q24",
    q: "L'autorité parentale prévoit l'obligation :",
    a: ["De choisir la future carrière professionnelle de l'enfant de manière stricte", "Pour les parents d'assurer l'instruction de leurs enfants, de veiller à leur santé, sécurité et éducation", "D'héberger les enfants jusqu'à l'âge de 30 ans"],
    correct: 1,
    explanation: "Pour les parents d'assurer l'instruction de leurs enfants, de veiller à leur santé, leur sécurité et d'assurer leur éducation."
  },
  {
    id: "T5_Q25",
    q: "Dans quels établissements scolaires vont les élèves après l'école élémentaire ?",
    a: ["Directement à l'université publique", "Au collège puis au lycée", "Dans des centres de formation uniquement manuels"],
    correct: 1,
    explanation: "Au collège (de la 6e à la 3e, de 11 à 15 ans), puis au lycée (de la 2nde à la Terminale, de 15 à 18 ans)."
  },
  {
    id: "T5_Q26",
    q: "Quel diplôme obtient-on à la fin du lycée ?",
    a: ["Le Brevet des collèges", "Le baccalauréat (le « bac »)", "La Licence universitaire"],
    correct: 1,
    explanation: "Le baccalauréat (le « bac »). Il est nécessaire pour poursuivre des études supérieures."
  },
  {
    id: "T5_Q27",
    q: "Les enfants qui ne parlent pas français :",
    a: ["Sont refusés à l'école tant qu'ils ne maîtrisent pas la langue", "Sont accueillis dans les écoles publiques avec des dispositifs spéciaux (UPE2A) pour apprendre", "Doivent obligatoirement s'inscrire dans des écoles privées payantes"],
    correct: 1,
    explanation: "Sont accueillis dans les écoles publiques françaises. Des dispositifs spéciaux (classes UPE2A) existent pour les aider à apprendre le français tout en suivant leur scolarité."
  },
  {
    id: "T5_Q28",
    q: "Un enfant inscrit à l'école :",
    a: ["Peut s'absenter librement selon le choix des parents", "Doit y être présent régulièrement, les absences répétées non justifiées étant sanctionnées", "N'est obligé de venir que les jours d'examens régionaux"],
    correct: 1,
    explanation: "Doit y être présent régulièrement. Les absences doivent être justifiées. Les absences répétées sans justification peuvent entraîner des sanctions pour les parents."
  },
  {
    id: "T5_Q29",
    q: "À quelles conditions un mariage est-il reconnu juridiquement ?",
    a: ["Il suffit d'organiser une cérémonie religieuse traditionnelle", "Il doit être célébré devant un officier d'état civil (mairie) entre deux personnes majeures libres et consentantes", "Il doit obtenir la validation par un décret préfectoral"],
    correct: 1,
    explanation: "Il doit être célébré devant un officier d'état civil (mairie) en France. La cérémonie religieuse seule n'a pas de valeur juridique. Les deux personnes doivent être majeures, libres (pas déjà mariées) et consentir librement."
  },
  {
    id: "T5_Q30",
    q: "Quand faut-il déclarer son enfant au service d'état civil de la mairie ?",
    a: ["Dans le mois suivant la naissance", "Dans les 5 jours suivant la naissance", "Uniquement au moment de sa première rentrée scolaire"],
    correct: 1,
    explanation: "Dans les 5 jours suivant la naissance."
  },

  // ==========================================
  // --- QUESTIONS SUPPLÉMENTAIRES : NIVEAU CARTE DE RÉSIDENT (CR) ---
  // ==========================================
  
  // --- L'État de droit et la démocratie approfondie ---
  {
    id: "T_CR1",
    q: "Qu'est-ce que l'État de droit ?",
    a: ["Un système où seul le gouvernement choisit les règles sans contrôle", "Le principe selon lequel toutes les personnes et institutions, y compris l'État, sont soumises à la loi", "Un régime où la loi ne s'applique qu'aux citoyens de nationalité française"],
    correct: 1,
    explanation: "L'État de droit signifie que toutes les personnes et institutions — y compris l'État lui-même — sont soumises à la loi. Personne n'est au-dessus des lois. Les droits fondamentaux des citoyens sont garantis et protégés par la Constitution et les tribunaux."
  },
  {
    id: "T_CR2",
    q: "Que garantit l'État de droit ?",
    a: ["La gratuité totale de tous les services marchands du pays", "L'égalité de tous devant la loi, l'indépendance de la justice et le contrôle des actes du gouvernement", "L'accès aux postes ministériels sans condition d'âge"],
    correct: 1,
    explanation: "L'égalité de tous devant la loi, la protection des droits fondamentaux, l'indépendance de la justice, et le contrôle des actes du gouvernement par des juridictions indépendantes."
  },
  {
    id: "T_CR3",
    q: "La loi est l'expression de :",
    a: ["La volonté exclusive du Président de la République", "La volonté générale", "Uniquement des souhaits des hauts fonctionnaires"],
    correct: 1,
    explanation: "La volonté générale (selon Rousseau et l'article 6 de la DDHC). La loi est votée par le Parlement, représentant du peuple souverain."
  },
  {
    id: "T_CR4",
    q: "Pourquoi séparer les trois pouvoirs dans une démocratie ?",
    a: ["Pour ralentir l'adoption des textes administratifs", "Pour éviter qu'une seule personne ou institution concentre tous les pouvoirs, ce qui conduirait à la tyrannie", "Pour réduire les coûts budgétaires des ministères"],
    correct: 1,
    explanation: "Pour éviter qu'une seule personne ou institution concentre tous les pouvoirs, ce qui pourrait conduire à la tyrannie. La séparation garantit l'équilibre, le contrôle mutuel et la protection des libertés."
  },
  {
    id: "T_CR5",
    q: "Est-ce que le vote est obligatoire en France ?",
    a: ["Oui, sous peine d'une amende forfaitaire", "Non, le vote n'est pas obligatoire en France", "Oui, mais uniquement pour les élections présidentielles"],
    correct: 1,
    explanation: "Non, le vote n'est pas obligatoire en France. Mais il est un droit et un devoir civique important. S'abstenir, c'est ne pas participer aux choix qui concernent tous."
  },
  {
    id: "T_CR6",
    q: "Une personne peut-elle voter à la place d'une autre ?",
    a: ["Oui, si elle possède une simple lettre signée à la main", "Non, le vote est personnel et secret", "Oui, l'accès à l'urne est libre pour les membres d'une même famille"],
    correct: 1,
    explanation: "Non. Le vote est personnel et secret. Il est interdit de voter à la place d'une autre personne, même avec une procuration non officielle."
  },
  {
    id: "T_CR7",
    q: "Qu'est-ce que l'Hôtel de Matignon ?",
    a: ["Le siège du ministère des Affaires étrangères", "La résidence officielle et le lieu de travail du Premier ministre", "Le palais où se réunit le Conseil constitutionnel"],
    correct: 1,
    explanation: "C'est la résidence officielle et le lieu de travail du Premier ministre, situé à Paris (7e arrondissement)."
  },
  {
    id: "T_CR8",
    q: "Quel est le rôle du Président de la République ?",
    a: ["Voter les lois à la place du Parlement", "Garantir le respect de la Constitution, assurer la continuité de l'État et être chef des armées", "Trancher directement les conflits judiciaires privés"],
    correct: 1,
    explanation: "Garantir le respect de la Constitution, assurer la continuité de l'État, nommer le Premier ministre, présider le Conseil des ministres, être chef des armées et représenter la France à l'étranger."
  },
  {
    id: "T_CR9",
    q: "Quel est le rôle du Premier ministre ?",
    a: ["Remplacer les juges de la Cour de cassation", "Diriger l'action du gouvernement, coordonner les ministres et appliquer les lois", "Présider obligatoirement toutes les séances du Sénat"],
    correct: 1,
    explanation: "Diriger l'action du gouvernement, coordonner les ministres, appliquer les lois votées par le Parlement et rendre compte de son action devant l'Assemblée nationale."
  },
  {
    id: "T_CR10",
    q: "Quel est le rôle du gouvernement ?",
    a: ["Élire le Président de la République", "Définir et conduire la politique de la Nation, préparer les lois et gérer les services publics", "Sanctionner pénalement les infractions routières"],
    correct: 1,
    explanation: "Définir et conduire la politique de la Nation, préparer les lois, gérer les services publics et appliquer les décisions du Parlement."
  },
  {
    id: "T_CR11",
    q: "Quel est le rôle du Défenseur des droits ?",
    a: ["Défendre l'État français devant les instances internationales", "Défendre les personnes dont les droits ne sont pas respectés et lutter contre les discriminations", "Rédiger les contrats de travail de la fonction publique"],
    correct: 1,
    explanation: "Défendre les personnes dont les droits ne sont pas respectés, lutter contre les discriminations, protéger les lanceurs d'alerte et les droits de l'enfant. Il peut être saisi gratuitement par toute personne."
  },

  // --- L'UE approfondie — niveau CR ---
  {
    id: "T_CR12",
    q: "Quel traité concerne la construction de l'Union européenne ?",
    a: ["Le traité de Versailles", "Le traité de Maastricht", "Le traité de Paris de 1815"],
    correct: 1,
    explanation: "Le traité de Maastricht (1992), qui a créé l'Union Européenne, la citoyenneté européenne et posé les bases de l'euro."
  },
  {
    id: "T_CR13",
    q: "En quelle année le traité de Maastricht a-t-il été signé ?",
    a: ["1789", "1992", "2005"],
    correct: 1,
    explanation: "1992."
  },
  {
    id: "T_CR14",
    q: "Quel État a quitté l'Union européenne en 2020 ?",
    a: ["La France", "Le Royaume-Uni", "La Suisse"],
    correct: 1,
    explanation: "Le Royaume-Uni (Brexit, effectif le 31 janvier 2020)."
  },
  {
    id: "T_CR15",
    q: "Quelle est la devise de l'Union européenne ?",
    a: ["Liberté, Égalité, Fraternité", "Unie dans la diversité", "Paix, Progrès et Solidarité"],
    correct: 1,
    explanation: "« Unie dans la diversité »."
  },
  {
    id: "T_CR16",
    q: "Quel est l'hymne de l'Union européenne ?",
    a: ["La Marseillaise", "L'Ode à la joie (9e Symphonie de Beethoven)", "Le Chant des partisans"],
    correct: 1,
    explanation: "L'Ode à la joie, tirée de la 9e Symphonie de Beethoven."
  },
  {
    id: "T_CR17",
    q: "De quelle couleur est le drapeau européen ?",
    a: ["Fond blanc avec un cercle d'étoiles bleues", "Fond bleu avec un cercle de 12 étoiles jaunes/dorées", "Un drapeau tricolore vertical vert, blanc, rouge"],
    correct: 1,
    explanation: "Fond bleu avec un cercle de 12 étoiles jaunes/dorées."
  },
  {
    id: "T_CR18",
    q: "Où est le siège du Parlement européen ?",
    a: ["À Paris", "À Strasbourg", "À Berlin"],
    correct: 1,
    explanation: "À Strasbourg (France), avec des bureaux à Bruxelles (Belgique) et Luxembourg."
  },
  {
    id: "T_CR19",
    q: "Où est le siège de la Commission européenne ?",
    a: ["À Rome", "À Bruxelles", "À Strasbourg"],
    correct: 1,
    explanation: "À Bruxelles, en Belgique."
  },
  {
    id: "T_CR20",
    q: "Depuis quand l'euro est-il la monnaie unique sous forme de pièces et billets ?",
    a: ["Depuis le 1er janvier 1990", "Depuis le 1er janvier 2002", "Depuis le 1er janvier 2010"],
    correct: 1,
    explanation: "Depuis le 1er janvier 2002 (mise en circulation des billets et pièces). L'euro avait été introduit comme monnaie scripturale le 1er janvier 1999."
  },

  // --- Droits spécifiques — niveau CR ---
  {
    id: "T_CR21",
    q: "Que garantit la liberté de la presse ?",
    a: ["Le droit pour l'État de relire et modifier les articles avant publication", "Le droit des journalistes et des médias d'informer, d'enquêter et de publier librement", "L'obligation pour chaque citoyen d'acheter un journal"],
    correct: 1,
    explanation: "Le droit des journalistes et des médias d'informer, d'enquêter et de publier librement, sans censure préalable de l'État. La liberté de la presse est un pilier de la démocratie."
  },
  {
    id: "T_CR22",
    q: "Que prévoit la Charte de l'environnement ?",
    a: ["L'interdiction totale de l'usage des voitures en zone urbaine", "Elle reconnaît le droit à un environnement sain et fait de sa protection un devoir", "L'obligation de posséder un jardin privatif"],
    correct: 1,
    explanation: "Adoptée en 2004 et intégrée au bloc constitutionnel, elle reconnaît le droit de chaque personne à vivre dans un environnement sain et fait de la protection de l'environnement un devoir pour tous."
  },
  {
    id: "T_CR23",
    q: "Que signifie la dignité humaine ?",
    a: ["Une distinction honorifique accordée par la présidence", "Le droit de chaque être humain à être respecté et traité avec considération", "Une obligation de détenir des titres académiquesélevés"],
    correct: 1,
    explanation: "Le droit de chaque être humain à être respecté et traité avec considération, quelles que soient ses origines, sa condition ou ses actes. Elle est inviolable et protégée par la Constitution."
  },
  {
    id: "T_CR24",
    q: "Qu'est-ce que le droit de grève ?",
    a: ["Le droit de ne jamais payer ses cotisations d'assurance", "Le droit pour les travailleurs de cesser collectivement le travail pour défendre leurs intérêts", "Une autorisation d'absence non justifiée accordée par la mairie"],
    correct: 1,
    explanation: "Le droit pour les travailleurs de cesser collectivement le travail pour défendre leurs intérêts professionnels. Il est garanti par la Constitution française."
  },
  {
    id: "T_CR25",
    q: "Parmi les actions citoyennes, laquelle constitue une participation citoyenne ?",
    a: ["Regarder la télévision publique nationale", "Voter, participer à une manifestation légale, s'engager dans une association", "Effectuer ses démarches d'achats commerciaux courants"],
    correct: 1,
    explanation: "Voter, participer à une manifestation légale, signer une pétition, s'engager dans une association, contacter un élu — toutes sont des formes de participation citoyenne."
  },
  {
    id: "T_CR26",
    q: "La répudiation de sa femme est :",
    a: ["Autorisée si le mariage a été contracté à l'étranger", "Interdite en France car contraire au principe du consentement mutuel", "Légale après accord du conseil municipal"],
    correct: 1,
    explanation: "Interdite in France. La répudiation (dissolution unilatérale du mariage par le mari) est contraire au droit français qui exige le consentement des deux parties pour le divorce."
  },
  {
    id: "T_CR27",
    q: "À l'école publique, qui peut porter des signes religieux très visibles ?",
    a: ["Les enseignants uniquement", "Personne (ni les élèves, ni les enseignants, ni les agents)", "Les élèves uniquement"],
    correct: 1,
    explanation: "Personne (ni les élèves, ni les enseignants, ni les agents). La loi de 2004 interdit le port de signes religieux ostensibles dans les établissements scolaires publics."
  },
  {
    id: "T_CR28",
    q: "Selon le principe de laïcité, que signifie la neutralité de l'État ?",
    a: ["Que l'État finance en priorité la religion la plus pratiquée", "Que l'État ne favorise ni ne s'oppose à aucune religion et que ses agents ne doivent exprimer aucune conviction", "Que les cultes sont gérés directement par les préfectures"],
    correct: 1,
    explanation: "Que l'État ne favorise ni ne s'oppose à aucune religion. Les agents publics et les institutions ne doivent exprimer aucune conviction religieuse dans l'exercice de leurs fonctions."
  },
  
];

// ==========================================
// ⚙️ GESTION DU SYSTÈME ET DU JEU
// ==========================================
let examQuestions = []; // Questions de la session en cours
let current = 0;
let score = 0;
let time = 900; // 15 minutes chrono (15 * 60 secondes)
let timer;
let currentMode = ""; // "suivi", "flash", "erreurs"

// Liste des IDs ratés durant la session actuelle
let sessionErrors = []; 

// Au chargement du site, on calcule et affiche l'état de la mémoire du candidat
window.onload = function() {
  calculerEtAfficherStats();
};

function startExam(mode) {
  currentMode = mode;
  current = 0;
  score = 0;
  sessionErrors = [];
  time = 900; // 15 minutes chrono

  // Récupération des données sauvegardées dans la mémoire locale (LocalStorage)
  let vus = JSON.parse(localStorage.getItem('civique_vus')) || [];
  let erreursGlobales = JSON.parse(localStorage.getItem('civique_erreurs')) || [];

  if (mode === 'suivi') {
    // Filtrer les questions pour ne garder que celles JAMAIS vues
    let nonVues = DATABASE_QUESTIONS.filter(q => !vus.includes(q.id));
    
    // Si on a épuisé tout le stock de questions neuves !
    if (nonVues.length === 0) {
      alert("🎉 Félicitations ! Vous avez traité 100% des questions du code. Utilisez le bouton en bas pour réinitialiser la mémoire et tout refaire.");
      return;
    }
    
    // Mélanger les questions non vues
    nonVues.sort(() => Math.random() - 0.5);
    // Prendre un maximum de 40 questions (ou moins s'il en reste moins)
    examQuestions = nonVues.slice(0, 40);

    // Enregistrer immédiatement ces questions comme "vues" dans la mémoire
    examQuestions.forEach(q => { if(!vus.includes(q.id)) vus.push(q.id); });
    localStorage.setItem('civique_vus', JSON.stringify(vus));

  } else if (mode === 'flash') {
    // Mode Flash : 40 questions totalement au hasard dans TOUTE la base, sans distinction
    let copieBase = [...DATABASE_QUESTIONS];
    copieBase.sort(() => Math.random() - 0.5);
    examQuestions = copieBase.slice(0, 40);

  } else if (mode === 'erreurs') {
    // Mode Révision des fautes enregistrées
    examQuestions = DATABASE_QUESTIONS.filter(q => erreursGlobales.includes(q.id));
    examQuestions.sort(() => Math.random() - 0.5);
  }

  // Initialisation de l'affichage détaillé des scores
  document.getElementById("score-bon").innerText = 0;
  document.getElementById("score-faux").innerText = 0;
  document.getElementById("score-repondu").innerText = 0;
  document.getElementById("current-total-q").innerText = examQuestions.length;
  
  // Configuration de l'interface graphique
  document.getElementById("home-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";

  // Lancement du Chronomètre
  clearInterval(timer);
  timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = time;
    if (time <= 0) {
      clearInterval(timer);
      finDeLExamen();
    }
  }, 1000);

  showQuestion();
}

function showQuestion() {
  let q = examQuestions[current];
  document.getElementById("progress").innerText = `Question ${current + 1} / ${examQuestions.length}`;
  document.getElementById("question").innerText = q.q;
  document.getElementById("feedback").style.display = "none";
  document.getElementById("next-btn").style.display = "none";

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.a.forEach((answer, i) => {
    let btn = document.createElement("button");
    btn.innerText = answer;

    btn.onclick = () => {
      let allButtons = answersDiv.querySelectorAll("button");
      allButtons.forEach(b => b.disabled = true);

      if (i === q.correct) {
        score++;
        btn.classList.add("correct-ans");
      } else {
        btn.classList.add("wrong-ans");
        allButtons[q.correct].classList.add("correct-ans");
        // Enregistrer la faute dans la session en cours
        sessionErrors.push(q.id); 
      }

      // Mise à jour de l'affichage détaillé du score en direct
      document.getElementById("score-bon").innerText = score;
      document.getElementById("score-faux").innerText = sessionErrors.length;
      document.getElementById("score-repondu").innerText = current + 1;

      document.getElementById("feedback").innerHTML = `<strong>💡 Explication :</strong> ${q.explanation}`;
      document.getElementById("feedback").style.display = "block";
      document.getElementById("next-btn").style.display = "block";
    };

    answersDiv.appendChild(btn);
  });
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
    
    // Sauvegarde anticipée des données si on n'est pas en mode flash
    if (currentMode === 'suivi' || currentMode === 'erreurs') {
      let erreursGlobales = JSON.parse(localStorage.getItem('civique_erreurs')) || [];

      // Enregistrer les erreurs commises sur les questions répondues
      sessionErrors.forEach(id => {
        if (!erreursGlobales.includes(id)) erreursGlobales.push(id);
      });

      // Si on révisait ses erreurs, on retire celles validées avec succès
      if (currentMode === 'erreurs') {
        for (let k = 0; k <= current; k++) {
          let qTraitee = examQuestions[k];
          if (qTraitee && !sessionErrors.includes(qTraitee.id)) {
            erreursGlobales = erreursGlobales.filter(id => id !== qTraitee.id);
          }
        }
      }
      localStorage.setItem('civique_erreurs', JSON.stringify(erreursGlobales));
    }

    // Retour à l'écran d'accueil
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

  // Traitement de la mémoire persistante en fin d'examen complet
  if (currentMode === 'suivi' || currentMode === 'erreurs') {
    let erreursGlobales = JSON.parse(localStorage.getItem('civique_erreurs')) || [];

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

    localStorage.setItem('civique_erreurs', JSON.stringify(erreursGlobales));
  }

  // Afficher ou masquer le bouton de rattrapage immédiat
  let retryBtn = document.getElementById("retry-errors-now");
  if (sessionErrors.length > 0) {
    retryBtn.style.display = "block";
  } else {
    retryBtn.style.display = "none";
  }
}

function refaireErreursImmediatement() {
  examQuestions = DATABASE_QUESTIONS.filter(q => sessionErrors.includes(q.id));
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

// ==========================================
// 📊 UTILITAIRES DE COMPTAGE ET DE CONFIG
// ==========================================
function calculerEtAfficherStats() {
  let vus = JSON.parse(localStorage.getItem('civique_vus')) || [];
  let erreurs = JSON.parse(localStorage.getItem('civique_erreurs')) || [];
  let total = DATABASE_QUESTIONS.length;

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
  if (confirm("Êtes-vous sûr de vouloir vider l'historique ? Cela effacera toutes les questions mémorisées ainsi que votre boîte à erreurs.")) {
    localStorage.removeItem('civique_vus');
    localStorage.removeItem('civique_erreurs');
    calculerEtAfficherStats();
  }
}
