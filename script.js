// ==========================================
// 🗄️ BASE DE DONNÉES DE TOUTES LES QUESTIONS
// ==========================================
// C'est ici que nous ajouterons les thématiques au fur et à mesure !
const DATABASE_QUESTIONS = [
  // --- La devise, les symboles et les grands principes ---
  {
    id: "T1_Q1",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "Quelle est la devise de la République française ?",
    a: ["Liberté, Égalité, Solidarité", "Liberté, Égalité, Fraternité", "Justice, Unité, Travail", "Liberté, Égalité, Unité"],
    correct: 1,
    explanation: "Liberté, Égalité, Fraternité."
  },
  {
    id: "T1_Q2",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "Quelle est la langue officielle de la République française ?",
    a: ["Le français et l'anglais", "Le français", "Le français et les langues régionales", "Le français, le breton et l'occitan à égalité"],
    correct: 1,
    explanation: "Le français. Il est la seule langue officielle selon l'article 2 de la Constitution. Toutes les lois, actes administratifs et décisions de justice sont rédigés en français."
  },
  {
    id: "T1_Q3",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "Quel est le nom de l'hymne national ?",
    a: ["Le Chant des Partisans", "La Marseillaise", "L'Ode à la Joie", "Le Chant du Départ"],
    correct: 1,
    explanation: "La Marseillaise. Elle a été composée en 1792 par Rouget de Lisle et est devenue hymne national officiel en 1879."
  },
  {
    id: "T1_Q4",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "Quelles sont les couleurs du drapeau français ?",
    a: ["Bleu, blanc, rouge", "Rouge, blanc, bleu", "Vert, blanc, rouge", "Blanc, bleu, rouge"],
    correct: 0,
    explanation: "Bleu, blanc, rouge — dans cet ordre de la hampe (gauche) vers le côté libre (droite). Il est le symbole de la Révolution française depuis 1789."
  },
  {
    id: "T1_Q5",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "Quel symbole de la République française est tricolore ?",
    a: ["La Marianne", "Le drapeau français", "Le coq gaulois", "Le Panthéon"],
    correct: 1,
    explanation: "Le drapeau français."
  },
  {
    id: "T1_Q6",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "Qui est Marianne ?",
    a: ["Une reine historique", "Le symbole officiel de la République française représentant la liberté et la raison", "La première femme présidente", "L'épouse symbolique du président de la République"],
    correct: 1,
    explanation: "Marianne est le symbole officiel de la République française. Elle représente la liberté et la raison. Son buste figure dans toutes les mairies et préfectures de France."
  },
  {
    id: "T1_Q7",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "Lequel de ces symboles représente officiellement la République française ?",
    a: ["La fleur de lys", "Marianne (figure féminine symbolisant la République)", "La croix de Lorraine", "La Statue de la Liberté"],
    correct: 1,
    explanation: "Marianne (figure féminine symbolisant la République)."
  },
  {
    id: "T1_Q8",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "Quels sont des symboles officiels de la République française ?",
    a: ["Le drapeau tricolore, la Marseillaise, Marianne, la devise, et le coq gaulois", "Le château de Versailles, le vin et le fromage", "La tour Eiffel, la baguette et la haute couture", "Le drapeau tricolore, la Marseillaise et le Panthéon"],
    correct: 0,
    explanation: "Le drapeau tricolore (bleu, blanc, rouge), la Marseillaise (hymne national), Marianne (buste), la devise « Liberté, Égalité, Fraternité », et le coq gaulois (symbole non officiel mais traditionnel)."
  },
  {
    id: "T1_Q9",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "Quel animal est un symbole de la France ?",
    a: ["L'aigle impérial", "Le coq gaulois", "Le lion britannique", "L'ours des Pyrénées"],
    correct: 1,
    explanation: "Le coq gaulois. Symbole traditionnel de la France, il figure sur de nombreux emblèmes sportifs et officiels."
  },
  {
    id: "T1_Q10",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "À quelle date est la fête nationale française ?",
    a: ["Le 1er mai", "Le 14 juillet", "Le 11 novembre", "Le 8 mai"],
    correct: 1,
    explanation: "Le 14 juillet. Elle commémore la prise de la Bastille en 1789, symbole du début de la Révolution française."
  },
  {
    id: "T1_Q11",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "Qu'est-ce qui est traditionnellement organisé sur les Champs-Élysées le 14 juillet ?",
    a: ["Une course cycliste internationale", "Un défilé militaire", "Un grand marché de nuit", "Un feu d'artifice uniquement, sans défilé"],
    correct: 1,
    explanation: "Un défilé militaire, suivi d'un feu d'artifice le soir sur le Trocadéro. C'est le plus grand défilé militaire d'Europe."
  },
  {
    id: "T1_Q12",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "Le régime de la France est :",
    a: ["Une Monarchie constitutionnelle", "Une République", "Un État fédéral", "Une République parlementaire"],
    correct: 1,
    explanation: "Une République. La France est une République indivisible, laïque, démocratique et sociale selon l'article 1er de la Constitution."
  },
  {
    id: "T1_Q13",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "De quand date la Constitution de la Ve République ?",
    a: ["Du 14 juillet 1789", "Du 4 octobre 1958", "Du 8 mai 1945", "Du 5 octobre 1958"],
    correct: 1,
    explanation: "Du 4 octobre 1958."
  },
  {
    id: "T1_Q14",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "\"La France est une République indivisible, ..., démocratique et sociale\". Complétez :",
    a: ["fédérale", "laïque", "décentralisée", "unitaire"],
    correct: 1,
    explanation: "« La France est une République indivisible, laïque, démocratique et sociale. » — Article 1er de la Constitution de 1958."
  },
  {
    id: "T1_Q15",
    theme: "La devise, les symboles et les grands principes", macro: "Thème 1 — Symboles et principes",
    q: "Où peut-on voir la devise de la République ?",
    a: ["Uniquement sur les documents du Parlement", "Sur les bâtiments publics, les pièces et billets de monnaie, ainsi que sur les documents officiels", "Uniquement à l'intérieur des tribunaux", "Uniquement sur le drapeau national"],
    correct: 1,
    explanation: "Sur les bâtiments publics (mairies, préfectures, tribunaux, écoles), sur les pièces et billets de monnaie, ainsi que sur les documents officiels de l'État."
  },

  // --- Les grandes libertés ---
  {
    id: "T1_Q16",
    theme: "Les grandes libertés", macro: "Thème 1 — Symboles et principes",
    q: "Que signifie la liberté ?",
    a: ["Le droit de faire tout ce que l'on veut sans limites légales", "Le droit de faire tout ce qui ne nuit pas à autrui et qui n'est pas interdit par la loi", "Le droit d'ignorer les décisions de justice", "Le droit accordé uniquement aux citoyens de nationalité française"],
    correct: 1,
    explanation: "La liberté est le droit de faire tout ce qui ne nuit pas à autrui et qui n'est pas interdit par la loi. Elle comprend la liberté d'expression, de conscience, de religion, d'association, de circulation et de la presse."
  },
  {
    id: "T1_Q17",
    theme: "Les grandes libertés", macro: "Thème 1 — Symboles et principes",
    q: "Quelle liberté permet à chacun d'exprimer ses idées ?",
    a: ["La liberté d'association", "La liberté d'expression", "La liberté de circulation", "La liberté de réunion"],
    correct: 1,
    explanation: "La liberté d'expression. Elle garantit le droit d'exprimer ses opinions oralement, par écrit ou par tout autre moyen, dans les limites fixées par la loi."
  },
  {
    id: "T1_Q18",
    theme: "Les grandes libertés", macro: "Thème 1 — Symboles et principes",
    q: "Quelle proposition est correcte ? La liberté d'expression :",
    a: ["Est absolue et permet les insultes haineuses et menaces", "Permet d'exprimer ses idées librement, mais ne protège pas les propos incitant à la haine, à la discrimination ou à la violence", "N'existe pas pour les simples citoyens", "Permet de dire ce que l'on veut à condition de rester anonyme"],
    correct: 1,
    explanation: "Permet d'exprimer ses idées librement, mais ne protège pas les propos incitant à la haine, à la discrimination ou à la violence."
  },
  {
    id: "T1_Q19",
    theme: "Les grandes libertés", macro: "Thème 1 — Symboles et principes",
    q: "Que signifie l'égalité ?",
    a: ["Que tout le monde doit percevoir le même revenu exact", "Que tous les citoyens ont les mêmes droits et les mêmes devoirs devant la loi, sans distinction", "Que toutes les opinions ont la même valeur scientifique", "Que chacun doit occuper le même poste dans la société"],
    correct: 1,
    explanation: "L'égalité signifie que tous les citoyens ont les mêmes droits et les mêmes devoirs devant la loi, sans distinction d'origine, de sexe, de religion ou de condition sociale."
  },
  {
    id: "T1_Q20",
    theme: "Les grandes libertés", macro: "Thème 1 — Symboles et principes",
    q: "Qu'est-ce que l'égalité ?",
    a: ["C'est le principe selon lequel tous les individus sont traités de la même façon par la loi et les institutions, quelles que soient leurs différences", "Une règle obligeant la population à consommer les mêmes biens", "Un système où la loi s'applique différemment selon la richesse", "Un principe qui ne s'applique qu'aux élections nationales"],
    correct: 0,
    explanation: "C'est le principe selon lequel tous les individus sont traités de la même façon par la loi et les institutions, quelles que soient leurs différences."
  },
  {
    id: "T1_Q21",
    theme: "Les grandes libertés", macro: "Thème 1 — Symboles et principes",
    q: "Que signifie le mot \"fraternité\" dans la devise française ?",
    a: ["L'obligation de vivre en communauté familiale", "La fraternité exprime le devoir de solidarité entre les membres de la société", "Le droit d'accéder gratuitement aux transports publics", "Le devoir de venir en aide financièrement à sa famille uniquement"],
    correct: 1,
    explanation: "La fraternité exprime le devoir de solidarité entre les membres de la société. Elle fonde l'aide mutuelle, la protection sociale et l'assistance aux personnes en difficulté."
  },
  {
    id: "T1_Q22",
    theme: "Les grandes libertés", macro: "Thème 1 — Symboles et principes",
    q: "Quel est l'un des rôles des associations ?",
    a: ["Remplacer les forces de l'ordre locales", "Permettre aux citoyens de se regrouper pour défendre des intérêts communs, mener des actions solidaires, culturelles, sportives ou politiques", "Modifier les lois de la République de manière autonome", "Collecter des impôts pour le compte de l'État"],
    correct: 1,
    explanation: "Les associations permettent aux citoyens de se regrouper pour défendre des intérêts communs, mener des actions solidaires, culturelles, sportives ou politiques. Elles sont un pilier de la vie démocratique française."
  },
  {
    id: "T1_Q23",
    theme: "Les grandes libertés", macro: "Thème 1 — Symboles et principes",
    q: "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est différent (handicap, apparence physique, sexe...) ?",
    a: ["Oui, cela relève de la liberté d'expression", "Non. Les insultes et propos discriminatoires sont interdits par la loi et constituent des infractions pénales", "Oui, mais uniquement dans le cadre privé", "Non, uniquement si la victime porte plainte dans les 24 heures"],
    correct: 1,
    explanation: "Non. Les insultes et propos discriminatoires fondés sur le handicap, l'apparence physique, le sexe, l'origine ou la religion sont interdits par la loi et constituent des infractions pénales."
  },
  {
    id: "T1_Q24",
    theme: "Les grandes libertés", macro: "Thème 1 — Symboles et principes",
    q: "Certains métiers peuvent-ils être réservés aux hommes ?",
    a: ["Oui, les métiers considérés comme particulièrement pénibles", "Non. Le principe d'égalité homme-femme interdit toute discrimination à l'embauche fondée sur le sexe", "Oui, les postes de haute direction dans la fonction publique", "Oui, uniquement les métiers de la sécurité et de la défense"],
    correct: 1,
    explanation: "Non. En France, le principe d'égalité homme-femme interdit toute discrimination à l'embauche fondée sur le sexe. Tous les métiers sont accessibles aux femmes et aux hommes dans les mêmes conditions."
  },

  // --- La laïcité ---
  {
    id: "T1_Q25",
    theme: "La laïcité", macro: "Thème 1 — Symboles et principes",
    q: "Qu'est-ce que la laïcité ?",
    a: ["L'interdiction de toute pratique religieuse en France", "La séparation des institutions publiques et des organisations religieuses, la neutralité de l'État et la liberté de conscience", "L'obligation de choisir une religion d'État approuvée par le gouvernement", "La reconnaissance officielle du catholicisme comme religion historique de la France"],
    correct: 1,
    explanation: "La laïcité est un principe fondamental de la République française issu de la loi du 9 décembre 1905. Elle garantit la séparation des institutions publiques et des organisations religieuses, la neutralité de l'État vis-à-vis de toutes les religions, et la liberté de conscience de chaque individu."
  },
  {
    id: "T1_Q26",
    theme: "La laïcité", macro: "Thème 1 — Symboles et principes",
    q: "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?",
    a: ["En 1789", "En 1905", "En 1958", "En 1875"],
    correct: 1,
    explanation: "En 1905. La loi du 9 décembre 1905 est le texte fondateur de la laïcité à la française. Elle met fin au Concordat napoléonien et garantit la liberté de culte tout en interdisant le financement public des religions."
  },
  {
    id: "T1_Q27",
    theme: "La laïcité", macro: "Thème 1 — Symboles et principes",
    q: "Que permet le principe de laïcité ?",
    a: ["D'interdire l'accès aux lieux de culte", "La laïcité permet à chaque personne de croire ou de ne pas croire librement", "D'imposer une philosophie d'État obligatoire", "D'organiser des cérémonies religieuses dans les mairies"],
    correct: 1,
    explanation: "La laïcité permet à chaque personne de croire ou de ne pas croire librement, sans que l'État ou les institutions publiques n'imposent ou ne défavorisent aucune religion."
  },
  {
    id: "T1_Q28",
    theme: "La laïcité", macro: "Thème 1 — Symboles et principes",
    q: "Quel droit est garanti par la laïcité ?",
    a: ["Le droit à l'exemption de devoirs civiques", "La liberté de conscience : chaque personne a le droit de choisir sa religion, d'en changer ou de n'en avoir aucune", "Le droit de ne pas respecter le code de la route", "Le droit de pratiquer sa religion uniquement en privé, jamais en public"],
    correct: 1,
    explanation: "La liberté de conscience : chaque personne a le droit de choisir sa religion, d'en changer ou de n'en avoir aucune."
  },
  {
    id: "T1_Q29",
    theme: "La laïcité", macro: "Thème 1 — Symboles et principes",
    q: "Pourquoi le principe de laïcité doit-il être respecté à l'école ?",
    a: ["Pour harmoniser les uniformes scolaires", "Parce que l'école publique est un lieu de la République, neutre et commun à tous. Elle doit garantir un cadre d'apprentissage libre", "Pour supprimer l'enseignement de l'histoire des religions", "Pour permettre aux enseignants de choisir librement le programme religieux"],
    correct: 1,
    explanation: "Parce que l'école publique est un lieu de la République, neutre et commun à tous. Elle doit accueillir tous les enfants sans distinction de religion et garantir un cadre d'apprentissage libre de toute pression religieuse."
  },
  {
    id: "T1_Q30",
    theme: "La laïcité", macro: "Thème 1 — Symboles et principes",
    q: "Un enfant peut-il refuser d'aller à l'école pour une raison religieuse ?",
    a: ["Oui, sur demande écrite des tuteurs légaux", "Non. L'instruction est obligatoire pour tous les enfants de 3 à 16 ans", "Oui, mais uniquement dans l'enseignement secondaire", "Oui, à condition d'obtenir une dérogation du maire"],
    correct: 1,
    explanation: "Non. L'instruction est obligatoire pour tous les enfants de 3 à 16 ans. Aucune raison religieuse ne permet à un enfant (ou à ses parents) de se soustraire à cette obligation."
  },
  {
    id: "T1_Q31",
    theme: "La laïcité", macro: "Thème 1 — Symboles et principes",
    q: "Une personne a-t-elle le droit de ne pas croire en une religion ?",
    a: ["Non, la loi impose une affiliation confessionnelle spirituelle", "Oui. La liberté de conscience garantie par la laïcité inclut le droit à l'athéisme et à l'agnosticisme", "Oui, mais uniquement si elle possède la nationalité française", "Non, la loi impose de déclarer une religion à l'état civil"],
    correct: 1,
    explanation: "Oui. La liberté de conscience garantie par la laïcité inclut le droit à l'athéisme et à l'agnosticisme. Personne ne peut être contraint de pratiquer une religion."
  },
  {
    id: "T1_Q32",
    theme: "La laïcité", macro: "Thème 1 — Symboles et principes",
    q: "Une personne peut-elle changer librement de religion ?",
    a: ["Non, c'est interdit une fois l'état civil enregistré", "Oui. La liberté de conscience garantit le droit de changer de religion ou de conviction à tout moment", "Oui, sous réserve d'une validation par un tribunal administratif", "Oui, mais une seule fois dans sa vie"],
    correct: 1,
    explanation: "Oui. La liberté de conscience garantit le droit de changer de religion ou de conviction à tout moment. Aucune pression familiale ou communautaire ne peut légalement s'y opposer en France."
  }, 
  
  // ==========================================
  // --- THÉMATIQUE 2 : SYSTÈME INSTITUTIONNEL ET POLITIQUE ---
  // ==========================================
  
  // --- Les institutions de la République ---
  {
    id: "T2_Q1",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Qui réside au palais de l'Élysée ?",
    a: ["Le Premier ministre", "Le Président de la République", "Le Président de l'Assemblée nationale", "Le maire de Paris"],
    correct: 1,
    explanation: "Le Président de la République."
  },
  {
    id: "T2_Q2",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Qui est élu lors des élections présidentielles ?",
    a: ["Le Premier ministre", "Le Président de la République", "Les députés", "Les ministres du gouvernement"],
    correct: 1,
    explanation: "Le Président de la République, élu au suffrage universel direct pour 5 ans (quinquennat), renouvelable une fois."
  },
  {
    id: "T2_Q3",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Pour combien de temps est élu le Président de la République ?",
    a: ["4 ans", "5 ans", "7 ans", "6 ans"],
    correct: 1,
    explanation: "5 ans. Le quinquennat a été instauré par référendum en 2000."
  },
  {
    id: "T2_Q4",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Qui nomme le Premier ministre ?",
    a: ["Le peuple français", "Le Président de la République", "Le Président du Sénat", "L'Assemblée nationale"],
    correct: 1,
    explanation: "Le Président de la République. Le Premier ministre dirige le gouvernement et est responsable devant l'Assemblée nationale."
  },
  {
    id: "T2_Q5",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Qui possède le pouvoir exécutif ?",
    a: ["Le Parlement uniquement", "Le Président de la République et le gouvernement", "Les juges et magistrats", "Le Parlement et le Conseil constitutionnel"],
    correct: 1,
    explanation: "Le Président de la République et le gouvernement (Premier ministre et ministres)."
  },
  {
    id: "T2_Q6",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Qu'est-ce que le pouvoir exécutif ?",
    a: ["Le pouvoir qui vote les lois et le budget", "Le pouvoir qui met en œuvre les lois et dirige l'action de l'État au quotidien", "Le pouvoir qui juge les infractions et tranche les litiges", "Le pouvoir qui nomme les juges et dirige les tribunaux"],
    correct: 1,
    explanation: "Le pouvoir qui met en œuvre les lois et dirige l'action de l'État au quotidien. Il est exercé par le Président de la République et le gouvernement."
  },
  {
    id: "T2_Q7",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Qui possède le pouvoir législatif ?",
    a: ["Le Président de la République", "Le Parlement (Assemblée nationale et Sénat)", "Le Conseil constitutionnel", "Le gouvernement et ses ministres"],
    correct: 1,
    explanation: "Le Parlement, composé de l'Assemblée nationale et du Sénat."
  },
  {
    id: "T2_Q8",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Qui vote les lois ?",
    a: ["Le Premier ministre seul", "Le Parlement (l'Assemblée nationale et le Sénat)", "Les préfets", "Le Conseil constitutionnel"],
    correct: 1,
    explanation: "Le Parlement (l'Assemblée nationale et le Sénat). En cas de désaccord entre les deux chambres, l'Assemblée nationale a le dernier mot."
  },
  {
    id: "T2_Q9",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Le Parlement est composé :",
    a: ["Du Président de la République et des ministres", "De l'Assemblée nationale (577 députés) et du Sénat (348 sénateurs)", "Du Conseil d'État et des tribunaux", "De l'Assemblée nationale (577 députés) et du Conseil d'État"],
    correct: 1,
    explanation: "De l'Assemblée nationale (577 députés élus pour 5 ans) et du Sénat (348 sénateurs élus pour 6 ans)."
  },
  {
    id: "T2_Q10",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Quel est le rôle du Parlement ?",
    a: ["Nommer les hauts fonctionnaires et ambassadeurs", "Voter les lois, contrôler le gouvernement et adopter le budget de l'État", "Rendre la justice et appliquer les sanctions pénales", "Nommer directement les ministres du gouvernement"],
    correct: 1,
    explanation: "Voter les lois, contrôler le gouvernement et adopter le budget de l'État."
  },
  {
    id: "T2_Q11",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Qui est élu lors des élections législatives ?",
    a: ["Le Président de la République", "Les députés à l'Assemblée nationale", "Les maires", "Les sénateurs"],
    correct: 1,
    explanation: "Les députés à l'Assemblée nationale."
  },
  {
    id: "T2_Q12",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Combien de députés composent l'Assemblée nationale ?",
    a: ["348 députés", "577 députés", "600 députés", "500 députés"],
    correct: 1,
    explanation: "577 députés, élus pour 5 ans au scrutin uninominal majoritaire à deux tours."
  },
  {
    id: "T2_Q13",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Quel est le rôle des députés ?",
    a: ["Diriger les ministères et administrations publiques", "Représenter les citoyens, voter les lois et contrôler l'action du gouvernement", "Nommer le préfet de leur département", "Juger les affaires pénales en appel"],
    correct: 1,
    explanation: "Représenter les citoyens, voter les lois et contrôler l'action du gouvernement."
  },
  {
    id: "T2_Q14",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Quand sont élus les sénateurs ?",
    a: ["Tous les 5 ans au suffrage direct", "Tous les 3 ans (par moitié) par les grands électeurs", "Tous les 6 ans par le Président", "Tous les 5 ans au suffrage universel direct"],
    correct: 1,
    explanation: "Tous les 3 ans (par moitié), par les grands électeurs (maires, conseillers municipaux, départementaux et régionaux)."
  },
  {
    id: "T2_Q15",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Pour combien de temps sont élus les sénateurs ?",
    a: ["4 ans", "6 ans", "9 ans", "5 ans"],
    correct: 1,
    explanation: "6 ans, renouvelables."
  },
  {
    id: "T2_Q16",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Pour combien de temps sont élus les députés ?",
    a: ["3 ans", "5 ans", "7 ans", "6 ans"],
    correct: 1,
    explanation: "5 ans."
  },
  {
    id: "T2_Q17",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "La séparation des pouvoirs : quels sont les trois pouvoirs concernés ?",
    a: ["Le pouvoir régional, départemental et communal", "Le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire", "Le pouvoir présidentiel, gouvernemental et préfectoral", "Le pouvoir national, le pouvoir local et le pouvoir européen"],
    correct: 1,
    explanation: "Le pouvoir exécutif (Président + gouvernement), le pouvoir législatif (Parlement) et le pouvoir judiciaire (magistrats, tribunaux). Cette séparation garantit l'équilibre démocratique et empêche l'abus de pouvoir."
  },
  {
    id: "T2_Q18",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Est-ce que le Président de la République a tous les pouvoirs ?",
    a: ["Oui, c'est le chef absolu de l'État", "Non. Les pouvoirs sont séparés entre l'exécutif, le législatif et le judiciaire", "Oui, mais uniquement en cas de crise majeure", "Oui, mais seulement pendant la durée de son mandat"],
    correct: 1,
    explanation: "Non. Les pouvoirs sont séparés entre l'exécutif, le législatif et le judiciaire. Le Président ne peut pas voter les lois ni rendre la justice."
  },
  {
    id: "T2_Q19",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Quel est le rôle de l'autorité judiciaire ?",
    a: ["Proposer de nouvelles lois au Parlement", "Appliquer la loi, juger les infractions, trancher les litiges et protéger les droits et libertés", "Gérer l'administration et le budget des mairies", "Voter le budget de l'État chaque année"],
    correct: 1,
    explanation: "Appliquer la loi, juger les infractions, trancher les litiges et protéger les droits et libertés des individus."
  },
  {
    id: "T2_Q20",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Quel pouvoir détient un juge ?",
    a: ["Le pouvoir exécutif", "Le pouvoir judiciaire", "Le pouvoir législatif", "Le pouvoir exécutif et législatif à la fois"],
    correct: 1,
    explanation: "Le pouvoir judiciaire. Les juges sont indépendants du gouvernement et de l'Assemblée nationale."
  },
  {
    id: "T2_Q21",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "L'autorité judiciaire est exercée par :",
    a: ["Les députés et sénateurs", "Les magistrats (juges et procureurs)", "La police et la gendarmerie", "Le ministre de la Justice seul"],
    correct: 1,
    explanation: "Les magistrats (juges et procureurs), qui rendent la justice au nom du peuple français."
  },
  {
    id: "T2_Q22",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Qui sanctionne l'auteur d'un vol ?",
    a: ["Le maire de la commune", "Un juge (tribunal)", "Le commissaire de police", "Le préfet du département"],
    correct: 1,
    explanation: "Un juge (tribunal correctionnel pour les délits, cour d'assises pour les crimes)."
  },
  {
    id: "T2_Q23",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "A-t-on le droit de ne pas respecter une loi ?",
    a: ["Oui, si l'on a une justification personnelle majeure", "Non. La loi s'impose à tous, sans exception", "Oui, les étrangers n'y sont pas soumis", "Oui, en cas de désaccord politique avec le gouvernement"],
    correct: 1,
    explanation: "Non. La loi s'impose à tous, sans exception. Toute personne qui ne respecte pas la loi s'expose à des sanctions pénales ou civiles."
  },
  {
    id: "T2_Q24",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    a: ["Il bénéficie d'une immunité totale et définitive", "Il peut être poursuivi et jugé comme tout citoyen", "Il est uniquement démis de ses fonctions sans procès", "Il ne peut être jugé que par ses pairs à l'Assemblée nationale"],
    correct: 1,
    explanation: "Il peut être poursuivi et jugé comme tout citoyen. En France, nul n'est au-dessus des lois, y compris les membres du gouvernement."
  },
  {
    id: "T2_Q25",
    theme: "Les institutions de la République", macro: "Thème 2 — Institutions et politique",
    q: "Qui doit respecter la loi ?",
    a: ["Uniquement les citoyens de nationalité française", "Tout le monde : les citoyens, les résidents étrangers, les entreprises et l'État lui-même", "Uniquement les personnes majeures", "Uniquement les personnes titulaires d'un casier judiciaire vierge"],
    correct: 1,
    explanation: "Tout le monde : les citoyens, les résidents étrangers, les entreprises et l'État lui-même."
  },

  // --- Les élections et la démocratie ---
  {
    id: "T2_Q26",
    theme: "Les élections et la démocratie", macro: "Thème 2 — Institutions et politique",
    q: "À partir de quel âge a-t-on le droit de voter ?",
    a: ["16 ans", "18 ans", "21 ans", "20 ans"],
    correct: 1,
    explanation: "18 ans."
  },
  {
    id: "T2_Q27",
    theme: "Les élections et la démocratie", macro: "Thème 2 — Institutions et politique",
    q: "Qui peut voter aux élections en France ?",
    a: ["Tous les résidents ayant un titre de séjour valide", "Les citoyens français majeurs inscrits sur les listes électorales", "Uniquement les propriétaires d'un bien immobilier", "Tous les résidents étrangers installés depuis plus de 5 ans"],
    correct: 1,
    explanation: "Les citoyens français majeurs (18 ans et plus) inscrits sur les listes électorales."
  },
  {
    id: "T2_Q28",
    theme: "Les élections et la démocratie", macro: "Thème 2 — Institutions et politique",
    q: "Quelle condition est nécessaire pour voter aux élections ?",
    a: ["Avoir travaillé au moins 3 ans en France", "Être de nationalité française, avoir 18 ans et être inscrit sur les listes électorales", "Avoir un casier judiciaire totalement vierge de toute amende", "Être de nationalité française et avoir 16 ans"],
    correct: 1,
    explanation: "Être de nationalité française, avoir 18 ans et être inscrit sur les listes électorales."
  },
  {
    id: "T2_Q29",
    theme: "Les élections et la démocratie", macro: "Thème 2 — Institutions et politique",
    q: "Que signifie « suffrage universel » ?",
    a: ["Que le vote est payant pour financer les élections", "Que tout citoyen majeur a le droit de voter, sans distinction", "Que les votes comptent double pour les personnes diplômées", "Que seuls les hommes majeurs peuvent voter"],
    correct: 1,
    explanation: "Que tout citoyen majeur a le droit de voter, quelle que soit son origine, sa religion, son sexe ou sa condition sociale."
  },
  {
    id: "T2_Q30",
    theme: "Les élections et la démocratie", macro: "Thème 2 — Institutions et politique",
    q: "Qui est élu lors des élections municipales ?",
    a: ["Le préfet et ses secrétaires", "Le conseil municipal et le maire", "Les députés du département", "Le préfet et les conseillers départementaux"],
    correct: 1,
    explanation: "Le conseil municipal et le maire, qui dirigent la commune."
  },
  {
    id: "T2_Q31",
    theme: "Les élections et la démocratie", macro: "Thème 2 — Institutions et politique",
    q: "Qui dirige la commune ?",
    a: ["Le député de la circonscription", "Le maire", "Le gouverneur de région", "Le conseil régional"],
    correct: 1,
    explanation: "Le maire, élu par le conseil municipal lors des élections municipales tous les 6 ans."
  },
  {
    id: "T2_Q32",
    theme: "Les élections et la démocratie", macro: "Thème 2 — Institutions et politique",
    q: "Concernant les partis politiques, quelle proposition est correcte ?",
    a: ["Ils doivent être autorisés chaque année par décret présidentiel", "En France, les partis politiques sont libres de se créer et d'exprimer leurs idées dans le cadre de la loi", "Il n'existe qu'un seul parti légal en France", "Ils doivent obtenir l'agrément du Conseil constitutionnel avant toute activité"],
    correct: 1,
    explanation: "En France, les partis politiques sont libres de se créer et d'exprimer leurs idées dans le cadre de la loi. Ils contribuent à l'expression du suffrage universel."
  },
  {
    id: "T2_Q33",
    theme: "Les élections et la démocratie", macro: "Thème 2 — Institutions et politique",
    q: "Quel est le régime politique de la France aujourd'hui ?",
    a: ["Une Monarchie parlementaire", "Une République démocratique", "Un Régime d'assemblée unique", "Une Fédération de régions autonomes"],
    correct: 1,
    explanation: "Une République démocratique. La Ve République, fondée en 1958, est un régime semi-présidentiel où le Président est élu directement par les citoyens."
  },

  // --- Les collectivités territoriales et l'État ---
  {
    id: "T2_Q34",
    theme: "Les collectivités territoriales et l'État", macro: "Thème 2 — Institutions et politique",
    q: "Combien y a-t-il de départements en France ?",
    a: ["50 départements", "101 départements", "150 départements", "89 départements"],
    correct: 1,
    explanation: "101 départements (96 en métropole + 5 départements d'outre-mer)."
  },
  {
    id: "T2_Q35",
    theme: "Les collectivités territoriales et l'État", macro: "Thème 2 — Institutions et politique",
    q: "Qui représente l'État dans un département ?",
    a: ["Le maire de la plus grande ville", "Le préfet", "Le président du conseil départemental", "Le procureur de la République"],
    correct: 1,
    explanation: "Le préfet."
  },
  {
    id: "T2_Q36",
    theme: "Les collectivités territoriales et l'État", macro: "Thème 2 — Institutions et politique",
    q: "Qui est le préfet ?",
    a: ["Un élu local responsable des routes", "Le représentant de l'État dans un département ou une région, nommé par le gouvernement", "Un magistrat chargé de juger les litiges financiers", "Un juge nommé par le Conseil supérieur de la magistrature"],
    correct: 1,
    explanation: "Le préfet est le représentant de l'État dans un département ou une région. Il est nommé par le gouvernement. Il veille à l'application des lois, gère les situations de crise et instruit les demandes de titres de séjour."
  },

  // --- L'Union Européenne ---
  {
    id: "T2_Q37",
    theme: "L'Union Européenne", macro: "Thème 2 — Institutions et politique",
    q: "Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?",
    a: ["15 États membres", "27 États membres", "32 États membres", "28 États membres"],
    correct: 1,
    explanation: "27 États membres."
  },
  {
    id: "T2_Q38",
    theme: "L'Union Européenne", macro: "Thème 2 — Institutions et politique",
    q: "Quel État n'est pas membre de l'Union européenne ?",
    a: ["L'Italie", "Le Royaume-Uni", "L'Espagne", "La Belgique"],
    correct: 1,
    explanation: "Le Royaume-Uni (qui a quitté l'UE le 31 janvier 2020 — Brexit). La Suisse, la Norvège ou la Turquie sont aussi des exemples de pays non-membres."
  },
  {
    id: "T2_Q39",
    theme: "L'Union Européenne", macro: "Thème 2 — Institutions et politique",
    q: "Quel pays est un pays fondateur de l'Union européenne ?",
    a: ["L'Espagne", "La France", "La Grèce", "Le Portugal"],
    correct: 1,
    explanation: "La France, l'Allemagne, l'Italie, la Belgique, les Pays-Bas et le Luxembourg sont les 6 membres fondateurs (traité de Rome, 1957)."
  },
  {
    id: "T2_Q40",
    theme: "L'Union Européenne", macro: "Thème 2 — Institutions et politique",
    q: "Quelle est la monnaie utilisée en France ?",
    a: ["Le Franc français", "L'euro (€)", "Le Dollar européen", "Le Franc CFA"],
    correct: 1,
    explanation: "L'euro (€), depuis le 1er janvier 2002."
  },
  {
    id: "T2_Q41",
    theme: "L'Union Européenne", macro: "Thème 2 — Institutions et politique",
    q: "Qui élit les députés européens ?",
    a: ["Les parlements nationaux de chaque pays", "Les citoyens européens au suffrage universel direct", "Le Conseil des ministres européen", "Les gouvernements nationaux"],
    correct: 1,
    explanation: "Les citoyens européens (ressortissants de l'UE résidant dans un pays membre) au suffrage universel direct, tous les 5 ans."
  },
  {
    id: "T2_Q42",
    theme: "L'Union Européenne", macro: "Thème 2 — Institutions et politique",
    q: "À quelle fréquence les élections européennes sont-elles organisées ?",
    a: ["Tous les 3 ans", "Tous les 5 ans", "Tous les 6 ans", "Tous les 4 ans"],
    correct: 1,
    explanation: "Tous les 5 ans."
  },
  {
    id: "T2_Q43",
    theme: "L'Union Européenne", macro: "Thème 2 — Institutions et politique",
    q: "Quelle condition est nécessaire pour voter aux élections européennes ?",
    a: ["Être né sur le continent européen", "Être citoyen d'un État membre de l'UE, avoir 18 ans et être inscrit sur les listes électorales", "Payer des impôts dans au moins deux pays de l'Union", "Être de nationalité française uniquement, la citoyenneté européenne ne suffit pas"],
    correct: 1,
    explanation: "Être citoyen d'un État membre de l'UE, avoir 18 ans et être inscrit sur les listes électorales."
  },
  {
    id: "T2_Q44",
    theme: "L'Union Européenne", macro: "Thème 2 — Institutions et politique",
    q: "Quand célèbre-t-on la journée de l'Europe ?",
    a: ["Le 1er mai", "Le 9 mai", "Le 14 juillet", "Le 5 mai"],
    correct: 1,
    explanation: "Le 9 mai. Cette date commémore la déclaration Schuman du 9 mai 1950, considérée comme l'acte fondateur de la construction européenne."
  },

  // ==========================================
  // --- THÉMATIQUE 3 : DROITS ET DEVOIRS ---
  // ==========================================
  
  // --- La Constitution et les textes fondamentaux ---
  {
    id: "T3_Q1",
    theme: "La Constitution et les textes fondamentaux", macro: "Thème 3 — Droits et devoirs",
    q: "Comment s'appelle la Constitution actuelle de la France ?",
    a: ["La Constitution de la IVe République", "La Constitution de la Ve République", "La Charte des droits républicains", "La Constitution de 1946"],
    correct: 1,
    explanation: "La Constitution de la Ve République, adoptée le 4 octobre 1958."
  },
  {
    id: "T3_Q2",
    theme: "La Constitution et les textes fondamentaux", macro: "Thème 3 — Droits et devoirs",
    q: "Comment s'appelle le texte qui énonce les droits et devoirs des personnes résidant en France ?",
    a: ["Le Code de la route", "La Déclaration des Droits de l'Homme et du Citoyen (DDHC)", "Le Traité de Versailles", "Le Préambule de la Constitution de 1946 uniquement"],
    correct: 1,
    explanation: "La Déclaration des Droits de l'Homme et du Citoyen (DDHC) de 1789, qui a valeur constitutionnelle."
  },
  {
    id: "T3_Q3",
    theme: "La Constitution et les textes fondamentaux", macro: "Thème 3 — Droits et devoirs",
    q: "De quelle année date la Déclaration des droits de l'homme et du citoyen ?",
    a: ["1789", "1905", "1945", "1848"],
    correct: 0,
    explanation: "1789. Elle a été adoptée le 26 août 1789 par l'Assemblée nationale constituante, pendant la Révolution française."
  },
  {
    id: "T3_Q4",
    theme: "La Constitution et les textes fondamentaux", macro: "Thème 3 — Droits et devoirs",
    q: "Quel texte a été adopté pendant la Révolution française ?",
    a: ["Le Code civil", "La Déclaration des Droits de l'Homme et du Citoyen (DDHC)", "La Constitution de la Ve République", "Le Code Napoléon"],
    correct: 1,
    explanation: "La Déclaration des Droits de l'Homme et du Citoyen (DDHC), le 26 août 1789."
  },
  {
    id: "T3_Q5",
    theme: "La Constitution et les textes fondamentaux", macro: "Thème 3 — Droits et devoirs",
    q: "Parmi ces textes, lequel garantit les droits et libertés en France ?",
    a: ["La charte de la commune", "La Déclaration des Droits de l'Homme et du Citoyen (DDHC) de 1789", "Le décret sur la presse de 1810", "Le Code du travail de 1910"],
    correct: 1,
    explanation: "La Déclaration des Droits de l'Homme et du Citoyen (DDHC) de 1789, qui fait partie du « bloc de constitutionnalité »."
  },
  {
    id: "T3_Q6",
    theme: "La Constitution et les textes fondamentaux", macro: "Thème 3 — Droits et devoirs",
    q: "Quel est le texte fondateur établissant en France les droits et devoirs de chaque citoyen ?",
    a: ["La Déclaration des Droits de l'Homme et du Citoyen (DDHC) de 1789, complétée par le Préambule de 1946 et la Charte de l'environnement", "Le règlement intérieur du Parlement", "La Déclaration d'indépendance nationale", "La Constitution de la Ve République seule"],
    correct: 0,
    explanation: "La DDHC de 1789, complétée par le Préambule de la Constitution de 1946 et la Charte de l'environnement de 2004."
  },

  // --- Les droits fondamentaux ---
  {
    id: "T3_Q7",
    theme: "Les droits fondamentaux", macro: "Thème 3 — Droits et devoirs",
    q: "Lequel de ces droits est un droit fondamental ?",
    a: ["La liberté d'expression, de conscience, le droit à un procès équitable, à l'éducation et à la santé", "Le droit d'accès gratuit aux cinémas et théâtres d'État", "Le droit de s'affranchir de l'impôt sur le revenu", "Le droit de vote dès la naissance"],
    correct: 0,
    explanation: "La liberté d'expression, la liberté de conscience, le droit à un procès équitable, le droit à l'éducation, le droit à la santé — tous sont des droits fondamentaux garantis par la Constitution."
  },
  {
    id: "T3_Q8",
    theme: "Les droits fondamentaux", macro: "Thème 3 — Droits et devoirs",
    q: "Qu'est-ce que la liberté d'expression ?",
    a: ["Le droit d'insulter publiquement ses voisins en cas de désaccord", "Le droit de chaque personne d'exprimer ses opinions librement, dans les limites fixées par la loi", "Une liberté réservée exclusivement aux membres du gouvernement", "Le droit de publier sans jamais être identifié"],
    correct: 1,
    explanation: "Le droit de chaque personne d'exprimer ses opinions, ses idées et ses convictions librement, par écrit, oralement ou par tout autre moyen, dans les limites fixées par la loi (pas d'incitation à la haine ou à la violence)."
  },
  {
    id: "T3_Q9",
    theme: "Les droits fondamentaux", macro: "Thème 3 — Droits et devoirs",
    q: "Quel droit permet à une personne de se défendre devant la justice ?",
    a: ["Le droit à la défense", "Le droit de veto judiciaire", "La liberté d'association", "La présomption d'innocence"],
    correct: 0,
    explanation: "Le droit à la défense, qui garantit que toute personne poursuivie peut bénéficier d'un avocat et présenter ses arguments devant un tribunal."
  },
  {
    id: "T3_Q10",
    theme: "Les droits fondamentaux", macro: "Thème 3 — Droits et devoirs",
    q: "Quelle liberté permet à une personne de ne pas avoir de religion ?",
    a: ["La liberté de réunion", "La liberté de conscience (ou liberté de pensée)", "Le droit à l'anonymat public", "La liberté d'expression"],
    correct: 1,
    explanation: "La liberté de conscience (ou liberté de pensée), garantie par la laïcité : chaque personne est libre de croire ou de ne pas croire."
  },
  {
    id: "T3_Q11",
    theme: "Les droits fondamentaux", macro: "Thème 3 — Droits et devoirs",
    q: "Que permet la citoyenneté française ?",
    a: ["De voyager sans titre de transport sur le territoire national", "De voter aux élections, d'être élu, d'accéder à certains emplois publics et de bénéficier de la protection consulaire", "D'obtenir l'exemption définitive des obligations fiscales civiques", "D'être exempté de tout impôt local"],
    correct: 1,
    explanation: "De voter aux élections, d'être élu, d'accéder à certains emplois publics, de bénéficier de la protection consulaire à l'étranger."
  },
  {
    id: "T3_Q12",
    theme: "Les droits fondamentaux", macro: "Thème 3 — Droits et devoirs",
    q: "Concernant les droits individuels, quelle proposition est correcte ?",
    a: ["Ils s'appliquent de manière arbitraire selon les régions de France", "Ils sont garantis par la Constitution et s'exercent librement tant qu'ils ne nuisent pas à autrui", "Ils remplacent les devoirs fiscaux de l'individu", "Ils ne s'appliquent qu'aux personnes nées en France"],
    correct: 1,
    explanation: "Les droits individuels sont garantis par la Constitution et les lois. Ils peuvent être exercés librement tant qu'ils ne portent pas atteinte aux droits d'autrui ni à l'ordre public."
  },

  // --- Les droits sur la vie privée et la famille ---
  {
    id: "T3_Q13",
    theme: "Les droits sur la vie privée et la famille", macro: "Thème 3 — Droits et devoirs",
    q: "Une femme peut-elle avorter en France ?",
    a: ["Non, c'est totalement interdit par la législation nationale", "Oui, le droit à l'IVG est légal et inscrit dans la Constitution française", "Oui, mais cela nécessite un accord écrit d'un tribunal", "Oui, mais seulement jusqu'à 12 semaines de grossesse"],
    correct: 1,
    explanation: "Oui. L'interruption volontaire de grossesse (IVG) est légale en France. Depuis 2024, le droit à l'IVG est inscrit dans la Constitution française."
  },
  {
    id: "T3_Q14",
    theme: "Les droits sur la vie privée et la famille", macro: "Thème 3 — Droits et devoirs",
    q: "Est-il toujours possible de divorcer ?",
    a: ["Non, le divorce est interdit sauf motif religieux spécifique", "Oui, toute personne peut demander le divorce", "Oui, mais seulement après l'accord du maire de la commune", "Oui, mais seulement après 5 ans de mariage minimum"],
    correct: 1,
    explanation: "Oui. En France, toute personne peut demander le divorce. Il peut être prononcé par consentement mutuel (amiable) ou de manière contentieuse."
  },
  {
    id: "T3_Q15",
    theme: "Les droits sur la vie privée et la famille", macro: "Thème 3 — Droits et devoirs",
    q: "La peine de mort est :",
    a: ["Suspendue temporairement", "Abolie en France", "Autorisée uniquement pour les crimes d'État", "Réservée aux crimes de terrorisme"],
    correct: 1,
    explanation: "Abolie en France. Elle a été supprimée par la loi du 9 octobre 1981, sous la présidence de François Mitterrand, à l'initiative du ministre de la Justice Robert Badinter."
  },
  {
    id: "T3_Q16",
    theme: "Les droits sur la vie privée et la famille", macro: "Thème 3 — Droits et devoirs",
    q: "En France, est-ce légal d'être marié à plusieurs personnes en même temps ?",
    a: ["Oui, c'est autorisé pour l'ensemble des résidents majeurs", "Non, la polygamie est interdite en France", "Oui, si le premier conjoint fournit une décharge écrite", "Oui, si le mariage a été célébré à l'étranger"],
    correct: 1,
    explanation: "Non. La polygamie est interdite en France. Le mariage ne peut être contracté qu'entre deux personnes."
  },

  // --- Les devoirs et les infractions ---
  {
    id: "T3_Q17",
    theme: "Les devoirs et les infractions", macro: "Thème 3 — Droits et devoirs",
    q: "Que risque une personne qui ne respecte pas la loi ?",
    a: ["Une simple réprimande morale de la part des forces de l'ordre", "Des sanctions pénales (amende, prison) ou civiles selon la gravité de l'infraction", "Rien, la loi n'étant qu'une recommandation indicative", "Une obligation de service civique de six mois"],
    correct: 1,
    explanation: "Des sanctions pénales (amende, peine de prison) ou civiles (dommages et intérêts) selon la gravité de l'infraction."
  },
  {
    id: "T3_Q18",
    theme: "Les devoirs et les infractions", macro: "Thème 3 — Droits et devoirs",
    q: "Qu'est-ce qu'une infraction ?",
    a: ["Une démarche administrative obligatoire auprès de la préfecture", "Un acte interdit par la loi, classé en contravention, délit ou crime", "Une autorisation d'exercer un métier commercial", "Un différend réglé uniquement par voie amiable"],
    correct: 1,
    explanation: "Un acte interdit par la loi. Il existe trois catégories : les contraventions (les moins graves), les délits (ex: vol, agression), et les crimes (les plus graves : meurtre, viol)."
  },
  {
    id: "T3_Q19",
    theme: "Les devoirs et les infractions", macro: "Thème 3 — Droits et devoirs",
    q: "Quelle est l'infraction la plus grave ?",
    a: ["Le délit", "Le crime", "La contravention", "L'irrégularité administrative"],
    correct: 1,
    explanation: "Le crime (ex: meurtre, viol, terrorisme). Les crimes sont jugés par la cour d'assises."
  },
  {
    id: "T3_Q20",
    theme: "Les devoirs et les infractions", macro: "Thème 3 — Droits et devoirs",
    q: "Quel est le rôle de la police ?",
    a: ["Rédiger de nouvelles lois pour le Parlement national", "Maintenir l'ordre public, protéger les personnes et les biens, et réprimer les infractions", "Trancher définitivement les litiges civils financiers", "Rendre des jugements en tribunal correctionnel"],
    correct: 1,
    explanation: "Maintenir l'ordre public, protéger les personnes et les biens, prévenir et réprimer les infractions, et appliquer les décisions de justice."
  },
  {
    id: "T3_Q21",
    theme: "Les devoirs et les infractions", macro: "Thème 3 — Droits et devoirs",
    q: "Quel est le rôle de la gendarmerie ?",
    a: ["Elle est une milice privée sous l'autorité des maires uniquement", "Elle exerce les mêmes missions que la police dans les zones rurales et péri-urbaines", "Elle est uniquement active à l'étranger dans les conflits internationaux", "Elle dépend exclusivement du ministère de la Défense pour toutes ses missions"],
    correct: 1,
    explanation: "La gendarmerie exerce les mêmes missions que la police dans les zones rurales et péri-urbaines. Elle dépend du ministère de l'Intérieur."
  },
  {
    id: "T3_Q22",
    theme: "Les devoirs et les infractions", macro: "Thème 3 — Droits et devoirs",
    q: "Que doit faire une personne en cas d'accident ?",
    a: ["Poursuivre sa route immédiatement pour ne pas gêner", "S'arrêter, porter secours si possible, appeler les secours et ne pas quitter les lieux", "Appeler un média d'information avant les numéros d'urgence", "Attendre l'arrivée spontanée des secours sans intervenir"],
    correct: 1,
    explanation: "S'arrêter, porter secours si possible, appeler les secours (15 pour le SAMU, 18 pour les pompiers, 17 pour la police), et ne pas quitter les lieux sans avoir échangé ses coordonnées (en cas d'accident de la route)."
  },
  {
    id: "T3_Q23",
    theme: "Les devoirs et les infractions", macro: "Thème 3 — Droits et devoirs",
    q: "Que doit faire une victime de violences ?",
    a: ["Attendre que l'infraction disparaisse d'elle-même", "Appeler la police (17) ou la gendarmerie, se rendre aux urgences si nécessaire, et déposer plainte", "Garder le secret par crainte de complications administratives", "Contacter uniquement un avocat avant toute autre démarche"],
    correct: 1,
    explanation: "Appeler la police (17) ou la gendarmerie, se rendre aux urgences si nécessaire, et déposer une plainte. Des associations d'aide aux victimes (comme les CIDFF) peuvent accompagner dans ces démarches."
  },
  {
    id: "T3_Q24",
    theme: "Les devoirs et les infractions", macro: "Thème 3 — Droits et devoirs",
    q: "Faut-il réduire ses déchets ?",
    a: ["Non, l'État gère l'élimination sans limites de volume", "Oui, la réduction des déchets est une obligation environnementale et civique", "Non, le tri est facultatif pour les particuliers", "Non, le recyclage est réservé aux entreprises"],
    correct: 1,
    explanation: "Oui. La réduction des déchets est une obligation environnementale et civique. La France applique le principe du pollueur-payeur et des règles strictes sur le tri et l'élimination des déchets."
  },
  {
    id: "T3_Q25",
    theme: "Les devoirs et les infractions", macro: "Thème 3 — Droits et devoirs",
    q: "Jeter une bouteille dans la rue est :",
    a: ["Toléré par l'administration municipale", "Un acte interdit (contravention) puni d'une amende", "Un acte libre sur la voie publique", "Autorisé si la bouteille est en verre recyclable"],
    correct: 1,
    explanation: "Un acte interdit (contravention) puni d'une amende. Jeter des déchets sur la voie publique est une infraction au Code de l'environnement."
  },
  {
    id: "T3_Q26",
    theme: "Les devoirs et les infractions", macro: "Thème 3 — Droits et devoirs",
    q: "Déposer une machine à laver cassée sur le trottoir est :",
    a: ["Autorisé s'il s'agit d'un objet métallique", "Interdit. Les encombrants doivent être déposés en déchetterie ou signalés à la mairie", "Légal à n'importe quelle heure de la journée", "Toléré si un mot est laissé pour prévenir les voisins"],
    correct: 1,
    explanation: "Interdit. Les encombrants doivent être déposés dans les déchetteries ou signalés à la mairie pour enlèvement. Un abandon sur la voie publique est passible d'amende."
  },
  {
    id: "T3_Q27",
    theme: "Les devoirs et les infractions", macro: "Thème 3 — Droits et devoirs",
    q: "En quoi consiste la traite des êtres humains ?",
    a: ["Un accord d'immigration légal supervisé par l'État", "Le recrutement ou l'accueil de personnes par contrainte à des fins d'exploitation (travail forcé, prostitution)", "Un système de recrutement de la fonction publique", "Un délit mineur puni d'une simple amende"],
    correct: 1,
    explanation: "C'est le recrutement, le transport ou l'accueil de personnes par la violence, la tromperie ou la contrainte à des fins d'exploitation (travail forcé, prostitution, etc.). C'est un crime sévèrement puni."
  },
  // ==========================================
  // --- THÉMATIQUE 4 : HISTOIRE, GÉOGRAPHIE ET CULTURE ---
  // ==========================================
  
  // --- Les grandes dates de l'histoire de France ---
  {
    id: "T4_Q1",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "En quelle année a débuté la Révolution française ?",
    a: ["1492", "1789", "1914", "1799"],
    correct: 1,
    explanation: "1789. Le 14 juillet 1789, la prise de la Bastille marque le début de la Révolution qui met fin à la monarchie absolue et proclame les droits de l'Homme."
  },
  {
    id: "T4_Q2",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui était le roi de France au moment de la Révolution française ?",
    a: ["Louis XIV", "Louis XVI", "Henri IV", "Louis XV"],
    correct: 1,
    explanation: "Louis XVI. Il fut guillotiné le 21 janvier 1793."
  },
  {
    id: "T4_Q3",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui était Napoléon Ier ?",
    a: ["Un roi de la dynastie des Capétiens", "Un général de la Révolution devenu Consul puis Empereur des Français", "Le premier Président de la République française", "Le dernier roi de France avant la Révolution"],
    correct: 1,
    explanation: "Napoléon Bonaparte (1769-1821) : général de la Révolution devenu Consul (1799) puis Empereur des Français (1804-1814/1815). Il a créé le Code civil, la Légion d'honneur, les lycées et la Banque de France."
  },
  {
    id: "T4_Q4",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui a rendu l'école gratuite, laïque et obligatoire ?",
    a: ["Napoléon Bonaparte", "Jules Ferry", "Charles de Gaulle", "Victor Hugo"],
    correct: 1,
    explanation: "Jules Ferry, ministre de l'Instruction publique sous la IIIe République (lois de 1881 et 1882). Ces lois ont fondé l'école républicaine française."
  },
  {
    id: "T4_Q5",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Depuis quelle année l'école publique est-elle gratuite ?",
    a: ["1789", "1881", "1945", "1905"],
    correct: 1,
    explanation: "1881 (loi Jules Ferry)."
  },
  {
    id: "T4_Q6",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Quand a eu lieu la Première Guerre mondiale ?",
    a: ["De 1870 à 1871", "De 1914 à 1918", "De 1939 à 1945", "De 1954 à 1962"],
    correct: 1,
    explanation: "De 1914 à 1918. La France a combattu aux côtés des Alliés contre l'Allemagne et l'Autriche-Hongrie. L'armistice a été signé le 11 novembre 1918."
  },
  {
    id: "T4_Q7",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Quelle guerre a eu lieu entre 1914 et 1918 ?",
    a: ["La guerre de Cent Ans", "La Première Guerre mondiale", "La Seconde Guerre mondiale", "La guerre franco-prussienne"],
    correct: 1,
    explanation: "La Première Guerre mondiale (aussi appelée la « Grande Guerre »)."
  },
  {
    id: "T4_Q8",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Le 11 novembre est un jour férié. À quoi correspond cette date ?",
    a: ["À la fête du travail", "À la commémoration de l'armistice de 1918", "À la célébration de la Constitution", "À la fin de la Seconde Guerre mondiale"],
    correct: 1,
    explanation: "À la commémoration de l'armistice du 11 novembre 1918, qui a mis fin à la Première Guerre mondiale."
  },
  {
    id: "T4_Q9",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Quand a eu lieu la Seconde Guerre mondiale ?",
    a: ["De 1914 à 1918", "De 1939 à 1945", "De 1954 à 1962", "De 1870 à 1871"],
    correct: 1,
    explanation: "De 1939 à 1945. La France a été occupée par l'Allemagne nazie de 1940 à 1944. Elle a été libérée grâce aux Alliés et à la Résistance."
  },
  {
    id: "T4_Q10",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qu'est-ce que la Shoah ?",
    a: ["Une bataille navale de la Première Guerre mondiale", "Le génocide de six millions de Juifs d'Europe organisé par le régime nazi", "Un traité d'alliance signé entre la France et le Royaume-Uni", "La déportation des résistants français vers l'Allemagne"],
    correct: 1,
    explanation: "Le génocide de six millions de Juifs d'Europe organisé par le régime nazi entre 1941 et 1945. En France, le régime de Vichy a collaboré à ces déportations. La Shoah est enseignée à l'école pour que cela ne se reproduise jamais."
  },
  {
    id: "T4_Q11",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "En quelle année l'esclavage a-t-il été aboli définitivement en France ?",
    a: ["En 1789", "En 1848", "En 1905", "En 1794"],
    correct: 1,
    explanation: "En 1848, par le décret Schoelcher du 27 avril 1848, sous la IIe République."
  },
  {
    id: "T4_Q12",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "En quelle année a été créée la Communauté Économique Européenne (CEE) ?",
    a: ["En 1945", "En 1957", "En 1992", "En 1951"],
    correct: 1,
    explanation: "En 1957, par le traité de Rome. La France en est membre fondateur."
  },
  {
    id: "T4_Q13",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui a fondé la Ve République ?",
    a: ["Napoléon Bonaparte", "Le général Charles de Gaulle", "François Mitterrand", "Georges Pompidou"],
    correct: 1,
    explanation: "Le général Charles de Gaulle. La Constitution de la Ve République a été adoptée le 4 octobre 1958."
  },
  {
    id: "T4_Q14",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui a été le premier Président élu sous la Ve République ?",
    a: ["Georges Pompidou", "Charles de Gaulle", "Valéry Giscard d'Estaing", "René Coty"],
    correct: 1,
    explanation: "Charles de Gaulle, élu en décembre 1958."
  },
  {
    id: "T4_Q15",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Pourquoi l'année 1958 est-elle importante pour la France ?",
    a: ["Parce qu'elle marque la fin de la Seconde Guerre mondiale", "Parce que la Constitution de la Ve République a été adoptée", "Parce que l'école est devenue gratuite cette année-là", "Parce que la France a rejoint l'Union européenne cette année-là"],
    correct: 1,
    explanation: "Parce que la Constitution de la Ve République a été adoptée le 4 octobre 1958, fondant le régime politique actuel de la France."
  },
  {
    id: "T4_Q16",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Combien y a-t-il eu de républiques en France ?",
    a: ["3 républiques", "5 républiques", "7 républiques", "4 républiques"],
    correct: 1,
    explanation: "5 républiques : Ire (1792), IIe (1848), IIIe (1870), IVe (1946), Ve (1958 — actuelle)."
  },
  {
    id: "T4_Q17",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Dans quelle République est-on aujourd'hui ?",
    a: ["La IIIe République", "La Ve République", "La VIe République", "La IVe République"],
    correct: 1,
    explanation: "La Ve République, founded en 1958."
  },
  {
    id: "T4_Q18",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Que célèbre-t-on le 14 juillet ?",
    a: ["La signature de la Constitution actuelle", "La prise de la Bastille", "L'armistice de la Première Guerre mondiale", "La victoire de Napoléon à Austerlitz"],
    correct: 1,
    explanation: "La prise de la Bastille (1789), symbole de la Révolution française et de la victoire du peuple contre l'absolutisme royal."
  },
  {
    id: "T4_Q19",
    theme: "Les grandes dates de l'histoire de France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Quel pays ou région du monde a été colonisé par la France ?",
    a: ["L'Europe centrale", "L'Afrique (Maghreb, Afrique subsaharienne), l'Asie du Sud-Est, les Amériques et l'Océanie", "L'Amérique du Nord britannique uniquement", "L'Amérique du Sud dans son intégralité"],
    correct: 1,
    explanation: "L'Afrique (Maghreb, Afrique subsaharienne), l'Asie du Sud-Est (Indochine), les Amériques (Haïti, Guyane) et l'Océanie. La colonisation française a été l'une des plus importantes au monde."
  },

  // --- La géographie de la France ---
  {
    id: "T4_Q20",
    theme: "La géographie de la France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Quelle est la capitale de la France ?",
    a: ["Lyon", "Paris", "Marseille", "Bruxelles"],
    correct: 1,
    explanation: "Paris."
  },
  {
    id: "T4_Q21",
    theme: "La géographie de la France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qu'est-ce que Paris ?",
    a: ["Une région administrative autonome d'outre-mer", "La capitale de la France, siège du gouvernement et ville la plus peuplée", "Un port maritime majeur du nord de la France", "Une ville portuaire du sud de la France"],
    correct: 1,
    explanation: "La capitale de la France, siège du gouvernement et des principales institutions, ainsi que la ville la plus peuplée du pays avec environ 2,1 millions d'habitants (12 millions avec l'agglomération)."
  },
  {
    id: "T4_Q22",
    theme: "La géographie de la France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Quel fleuve coule en France ?",
    a: ["Le Danube", "La Seine, la Loire, le Rhône, la Garonne et le Rhin", "Le Nil", "Le Tibre"],
    correct: 1,
    explanation: "Plusieurs fleuves : la Seine (Paris), la Loire (le plus long, 1013 km), le Rhône, la Garonne et le Rhin. La Seine traverse Paris."
  },
  {
    id: "T4_Q23",
    theme: "La géographie de la France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Sur quel continent se situe la France métropolitaine ?",
    a: ["En Amérique du Nord", "En Europe", "En Afrique", "En Asie"],
    correct: 1,
    explanation: "En Europe (Europe occidentale)."
  },
  {
    id: "T4_Q24",
    theme: "La géographie de la France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Quel océan borde la côte ouest française ?",
    a: ["L'océan Pacifique", "L'océan Atlantique", "L'océan Indien", "La mer du Nord"],
    correct: 1,
    explanation: "L'océan Atlantique."
  },
  {
    id: "T4_Q25",
    theme: "La géographie de la France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Quelle est la mer au sud de la France métropolitaine ?",
    a: ["La mer Rouge", "La mer Méditerranée", "La mer Baltique", "La mer Adriatique"],
    correct: 1,
    explanation: "La mer Méditerranée."
  },
  {
    id: "T4_Q26",
    theme: "La géographie de la France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Quelle chaîne de montagnes est située entre la France et l'Italie ?",
    a: ["Les Pyrénées", "Les Alpes", "Le Massif central", "Le Jura"],
    correct: 1,
    explanation: "Les Alpes (avec le Mont-Blanc, point culminant de France et d'Europe occidentale à 4 808 m)."
  },
  {
    id: "T4_Q27",
    theme: "La géographie de la France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Combien y a-t-il de régions en France métropolitaine ?",
    a: ["5 régions", "13 régions métropolitaines", "22 régions", "18 régions"],
    correct: 1,
    explanation: "13 régions métropolitaines (depuis la réforme territoriale de 2016)."
  },
  {
    id: "T4_Q28",
    theme: "La géographie de la France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Quelle île ou territoire est un département d'outre-mer français ?",
    a: ["La Corse et la Sardaigne", "La Martinique, la Guadeloupe, La Réunion, Mayotte et la Guyane", "Madagascar et Haïti", "La Nouvelle-Calédonie et la Polynésie française"],
    correct: 1,
    explanation: "La Martinique, la Guadeloupe, La Réunion, Mayotte et la Guyane (sur le continent américain) sont les 5 départements et régions d'outre-mer (DROM)."
  },
  {
    id: "T4_Q29",
    theme: "La géographie de la France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Où se situe la Corse ?",
    a: ["Dans l'océan Atlantique", "En mer Méditerranée", "Dans la mer de la Manche", "Dans le golfe de Gascogne"],
    correct: 1,
    explanation: "En mer Méditerranée, au sud-est de la France. C'est la plus grande île française."
  },
  {
    id: "T4_Q30",
    theme: "La géographie de la France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Quelle ville est française ?",
    a: ["Bruxelles et Genève", "Paris, Lyon, Marseille, Bordeaux, Toulouse, Lille", "Montréal et Casablanca", "Barcelone et Turin"],
    correct: 1,
    explanation: "Paris, Lyon, Marseille, Bordeaux, Toulouse, Lille, Nantes, Strasbourg, Nice... sont toutes des grandes villes françaises."
  },
  {
    id: "T4_Q31",
    theme: "La géographie de la France", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Quelle ville est un grand port maritime ?",
    a: ["Paris et Lyon", "Marseille, Le Havre, Bordeaux, Nantes-Saint-Nazaire", "Strasbourg et Toulouse", "Dijon et Grenoble"],
    correct: 1,
    explanation: "Marseille (premier port de France et de Méditerranée), Le Havre (premier port pour le commerce), Bordeaux, Nantes-Saint-Nazaire."
  },

  // --- Le patrimoine culturel ---
  {
    id: "T4_Q32",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui était Molière ?",
    a: ["Un peintre impressionniste célèbre", "Un dramaturge français, auteur de grandes comédies", "Un homme politique de la Révolution", "Un philosophe des Lumières"],
    correct: 1,
    explanation: "Jean-Baptiste Poquelin dit Molière (1622-1673) : dramaturge français, auteur de grandes comédies comme Le Bourgeois gentilhomme, Tartuffe, L'Avare. Il est considéré comme le maître de la comédie française."
  },
  {
    id: "T4_Q33",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui était Jean de la Fontaine ?",
    a: ["Un amiral de la marine royale", "Un poète français célèbre pour ses Fables", "Un architecte ayant construit les châteaux de la Loire", "Un dramaturge du XXe siècle"],
    correct: 1,
    explanation: "Jean de La Fontaine (1621-1695) : poète français célèbre pour ses Fables, recueil de poèmes moraux illustrés par des animaux (Le corbeau et le renard, La cigale et la fourmi...)."
  },
  {
    id: "T4_Q34",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui était Charles Baudelaire ?",
    a: ["Un compositeur de musique d'opéra", "Un poète français, auteur des Fleurs du Mal", "Un cinéaste de la Nouvelle Vague", "Un romancier réaliste du XIXe siècle"],
    correct: 1,
    explanation: "Charles Baudelaire (1821-1867) : poète français, auteur des Fleurs du Mal (1857), chef-d'œuvre de la poésie symboliste française."
  },
  {
    id: "T4_Q35",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui était George Sand ?",
    a: ["Un homme d'État britannique ami de la France", "Une romancière française engagée, l'une des premières grandes femmes de lettres", "Une exploratrice du continent africain", "Une résistante de la Seconde Guerre mondiale"],
    correct: 1,
    explanation: "George Sand (Amantine Aurore Lucile Dupin, 1804-1876) : romancière française engagée, l'une des premières grandes femmes de lettres françaises. Elle défendit les droits des femmes et des travailleurs."
  },
  {
    id: "T4_Q36",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui était Simone de Beauvoir ?",
    a: ["Une reine de France au Moyen Âge", "Une philosophe et écrivaine française, auteure du Deuxième Sexe", "Une scientifique ayant découvert le radium", "Une chanteuse populaire des années 1960"],
    correct: 1,
    explanation: "Simone de Beauvoir (1908-1986) : philosophe et écrivaine française, auteure du Deuxième Sexe (1949), œuvre fondatrice du féminisme moderne."
  },
  {
    id: "T4_Q37",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui était Albert Camus ?",
    a: ["Un sculpteur français de l'époque moderne", "Un écrivain et philosophe français, auteur de L'Étranger et La Peste", "Un aviateur héroïque de la Première Guerre mondiale", "Un peintre cubiste du XXe siècle"],
    correct: 1,
    explanation: "Albert Camus (1913-1960) : écrivain et philosophe français, auteur de L'Étranger et La Peste. Prix Nobel de littérature en 1957. Figure majeure de la philosophie de l'absurde."
  },
  {
    id: "T4_Q38",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui était Paul Cézanne ?",
    a: ["Un ministre des finances sous Louis XIV", "Un peintre français, précurseur du cubisme", "Un architecte des monuments parisiens", "Un écrivain naturaliste du XIXe siècle"],
    correct: 1,
    explanation: "Paul Cézanne (1839-1906) : peintre français, précurseur du cubisme. Il a profondément influencé l'art moderne avec ses natures mortes et ses paysages de Provence."
  },
  {
    id: "T4_Q39",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui était Marc Chagall ?",
    a: ["Un musicien classique virtuose", "Un peintre d'origine biélorusse naturalisé français, connu pour ses œuvres poétiques", "Un poète du mouvement romantique", "Un sculpteur classique du XVIIIe siècle"],
    correct: 1,
    explanation: "Marc Chagall (1887-1985) : peintre d'origine biélorusse naturalisé français, connu pour ses œuvres poétiques mêlant folklore juif et surréalisme (plafond de l'Opéra de Paris)."
  },
  {
    id: "T4_Q40",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui était Joséphine Baker ?",
    a: ["Une femme politique française ministre de la santé", "Une artiste américaine naturalisée française, danseuse, chanteuse et résistante", "La première avocate inscrite au barreau de Paris", "Une scientifique franco-américaine"],
    correct: 1,
    explanation: "Joséphine Baker (1906-1975) : artiste américaine naturalisée française, danseuse, chanteuse et résistante. Entrée au Panthéon en 2021, première femme noire à recevoir cet honneur."
  },
  {
    id: "T4_Q41",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qui était une chanteuse française célèbre ?",
    a: ["Marie Curie", "Édith Piaf", "George Sand", "Simone Veil"],
    correct: 1,
    explanation: "Édith Piaf (La Môme, auteure de La Vie en rose), mais aussi Joséphine Baker, Barbara, Françoise Hardy sont des chanteuses françaises célèbres."
  },
  {
    id: "T4_Q42",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Qu'est-ce que le Louvre ?",
    a: ["Le palais où siège le Sénat français actuellement", "Le plus grand musée du monde et le plus visité, situé à Paris", "Une cathédrale gothique du nord de la France", "Un ancien palais royal jamais ouvert au public"],
    correct: 1,
    explanation: "Le musée du Louvre à Paris est le plus grand musée du monde et le plus visité. Il abrite notamment la Joconde de Léonard de Vinci et la Vénus de Milo."
  },
  {
    id: "T4_Q43",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Dans quelle ville se trouve la tour Eiffel ?",
    a: ["Marseille", "Paris", "Lyon", "Nice"],
    correct: 1,
    explanation: "À Paris. Construite par Gustave Eiffel pour l'Exposition universelle de 1889, elle est le monument le plus visité au monde."
  },
  {
    id: "T4_Q44",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Quand célèbre-t-on Noël ?",
    a: ["Le 14 juillet", "Le 25 décembre", "Le 1er janvier", "Le 6 janvier"],
    correct: 1,
    explanation: "Le 25 décembre. C'est une fête chrétienne qui est aussi un jour férié pour tous en France."
  },
  {
    id: "T4_Q45",
    theme: "Le patrimoine culturel", macro: "Thème 4 — Histoire, géographie, culture",
    q: "Lequel de ces personnages historiques est français ?",
    a: ["Abraham Lincoln", "Napoléon Bonaparte", "Christopher Columbus", "Vincent van Gogh"],
    correct: 1,
    explanation: "Napoléon Bonaparte, Charles de Gaulle, Victor Hugo, Marie Curie, Jeanne d'Arc — tous sont des personnages historiques français majeurs."
  },

  // ==========================================
  // --- THÉMATIQUE 5 : VIVRE DANS LA SOCIÉTÉ FRANÇAISE ---
  // ==========================================
  
  // --- La santé ---
  {
    id: "T5_Q1",
    theme: "La santé", macro: "Thème 5 — Vivre en société",
    q: "En cas de problème de santé non urgent, à qui faut-il s'adresser en premier ?",
    a: ["Directement aux urgences hospitalières", "Au médecin traitant (médecin généraliste)", "À un médecin spécialiste sans ordonnance", "Directement à la pharmacie la plus proche"],
    correct: 1,
    explanation: "Au médecin traitant (médecin généraliste). C'est le médecin que vous avez choisi et déclaré à l'Assurance maladie. Il coordonne votre parcours de soins."
  },
  {
    id: "T5_Q2",
    theme: "La santé", macro: "Thème 5 — Vivre en société",
    q: "Quel est le rôle du médecin traitant ?",
    a: ["Assurer uniquement les opérations chirurgicales complexes", "Assurer le suivi médical régulier, orienter vers des spécialistes et coordonner les soins", "Gérer l'administration des hôpitaux publics", "Prescrire uniquement des arrêts de travail"],
    correct: 1,
    explanation: "Assurer le suivi médical régulier, orienter vers des spécialistes si nécessaire, et coordonner les soins du patient. Le consulter en premier permet de bénéficier d'un meilleur remboursement."
  },
  {
    id: "T5_Q3",
    theme: "La santé", macro: "Thème 5 — Vivre en société",
    q: "Dans quelles situations doit-on se rendre aux urgences de l'hôpital ?",
    a: ["Pour un renouvellement d'ordonnance ou un rhume léger", "En cas d'urgence médicale grave (accident, perte de connaissance, AVC...)", "Pour obtenir un certificat médical de sport de routine", "Pour un simple certificat médical scolaire"],
    correct: 1,
    explanation: "En cas d'urgence médicale grave : accident, douleur intense, perte de connaissance, difficultés respiratoires, signes d'AVC. Pour les situations non urgentes, le médecin traitant est préférable."
  },
  {
    id: "T5_Q4",
    theme: "La santé", macro: "Thème 5 — Vivre en société",
    q: "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?",
    a: ["La préfecture de votre département", "L'Assurance maladie (Sécurité sociale ou CPAM)", "Le ministère du Travail", "La mutuelle uniquement, sans passer par la Sécurité sociale"],
    correct: 1,
    explanation: "L'Assurance maladie (aussi appelée Sécurité sociale ou CPAM — Caisse Primaire d'Assurance Maladie). La carte Vitale permet d'accéder aux remboursements."
  },
  {
    id: "T5_Q5",
    theme: "La santé", macro: "Thème 5 — Vivre en société",
    q: "À quoi sert la carte Vitale ?",
    a: ["À voyager gratuitement dans les transports en commun", "Elle permet d'être reconnu par l'Assurance maladie et facilite le remboursement automatique des soins", "À prouver son identité lors des élections de manière officielle", "À obtenir des réductions dans les pharmacies partenaires"],
    correct: 1,
    explanation: "Elle permet d'être reconnu par l'Assurance maladie chez le médecin, à la pharmacie ou à l'hôpital, et facilite le remboursement automatique des soins."
  },
  {
    id: "T5_Q6",
    theme: "La santé", macro: "Thème 5 — Vivre en société",
    q: "À quoi sert une mutuelle santé ?",
    a: ["À remplacer intégralement la Sécurité sociale", "Elle rembourse tout ou partie des frais de santé non couverts par l'Assurance maladie", "À payer les médicaments non autorisés en France", "À obtenir un logement social prioritaire"],
    correct: 1,
    explanation: "Une mutuelle (ou complémentaire santé) rembourse tout ou partie des frais de santé non couverts par l'Assurance maladie (ticket modérateur, dépassements d'honoraires...)."
  },
  {
    id: "T5_Q7",
    theme: "La santé", macro: "Thème 5 — Vivre en société",
    q: "Quel est l'objectif des vaccinations obligatoires ?",
    a: ["Financer les laboratoires pharmaceutiques publics", "Protéger chaque individu contre des maladies graves ET protéger la collectivité", "Permettre aux enfants de sauter des classes", "Obtenir un certificat obligatoire pour voyager à l'étranger"],
    correct: 1,
    explanation: "Protéger chaque individu contre certaines maladies graves ET protéger la collectivité en empêchant la propagation des épidémies (immunité collective). Certains vaccins sont obligatoires pour les enfants en France."
  },
  {
    id: "T5_Q8",
    theme: "La santé", macro: "Thème 5 — Vivre en société",
    q: "Quel numéro d'urgence permet d'appeler le SAMU ?",
    a: ["Le 17", "Le 15", "Le 18", "Le 112"],
    correct: 1,
    explanation: "Le 15 (SAMU — Service d'Aide Médicale Urgente)."
  },
  {
    id: "T5_Q9",
    theme: "La santé", macro: "Thème 5 — Vivre en société",
    q: "Quel numéro d'urgence permet d'appeler les pompiers ?",
    a: ["Le 15", "Le 18", "Le 17", "Le 112"],
    correct: 1,
    explanation: "Le 18. Le 112 est le numéro d'urgence européen, utilisable depuis n'importe quel pays de l'UE."
  },
  {
    id: "T5_Q10",
    theme: "La santé", macro: "Thème 5 — Vivre en société",
    q: "Qu'est-ce qu'un numéro d'urgence ?",
    a: ["Un numéro surtaxé réservé aux administrations", "Un numéro de téléphone gratuit accessible 24h/24 pour contacter rapidement les secours", "Une ligne directe avec le maire de la commune", "Un numéro réservé aux professionnels de santé"],
    correct: 1,
    explanation: "Un numéro de téléphone gratuit accessible 24h/24 pour contacter rapidement les secours en cas d'urgence (15 SAMU, 17 police, 18 pompiers, 112 urgences européennes)."
  },
  {
    id: "T5_Q11",
    theme: "La santé", macro: "Thème 5 — Vivre en société",
    q: "Concernant l'accès aux soins, quelle proposition est correcte ?",
    a: ["L'accès aux soins est réservé exclusivement aux citoyens français", "Toute personne résidant en France, quelle que soit sa situation, a accès aux soins d'urgence", "Les hôpitaux refusent les personnes en situation précaire", "Seules les personnes en situation régulière depuis plus de 3 ans y ont droit"],
    correct: 1,
    explanation: "Toute personne résidant en France, quelle que soit sa nationalité ou sa situation administrative, a accès aux soins d'urgence. Les personnes en situation précaire peuvent bénéficier de l'Aide Médicale d'État (AME)."
  },

  // --- Le travail et l'emploi ---
  {
    id: "T5_Q12",
    theme: "Le travail et l'emploi", macro: "Thème 5 — Vivre en société",
    q: "Quelle est la durée légale du temps de travail par semaine ?",
    a: ["39 heures", "35 heures", "40 heures", "37 heures"],
    correct: 1,
    explanation: "35 heures par semaine (loi Aubry de 2000). Des heures supplémentaires sont possibles mais encadrées et majorées."
  },
  {
    id: "T5_Q13",
    theme: "Le travail et l'emploi", macro: "Thème 5 — Vivre en société",
    q: "Qu'est-ce que le SMIC ?",
    a: ["Le système médical d'intervention chirurgicale", "Le Salaire Minimum Interprofessionnel de Croissance (salaire minimum légal)", "Un syndicat de travailleurs indépendants", "Une prime versée uniquement aux fonctionnaires"],
    correct: 1,
    explanation: "Le SMIC est le Salaire Minimum Interprofessionnel de Croissance : c'est le salaire minimum légal en dessous duquel aucun employeur ne peut rémunérer un salarié en France."
  },
  {
    id: "T5_Q14",
    theme: "Le travail et l'emploi", macro: "Thème 5 — Vivre en société",
    q: "Que doit faire un employeur pour fixer un salaire ?",
    a: ["Fixer librement le montant sans aucune contrainte légale", "Respecter le SMIC et les éventuelles conventions collectives applicables", "Proposer un salaire inférieur au minimum si l'employé est d'accord", "Négocier librement en dessous du SMIC pour les contrats courts"],
    correct: 1,
    explanation: "Respecter le SMIC (salaire minimum légal) et les éventuelles conventions collectives applicables à son secteur d'activité."
  },
  {
    id: "T5_Q15",
    theme: "Le travail et l'emploi", macro: "Thème 5 — Vivre en société",
    q: "Le travail non déclaré est :",
    a: ["Autorisé pour les emplois de courte durée", "Illégal et privé de droits sociaux (retraite, chômage, maladie)", "Légal si l'employé paie une taxe forfaitaire", "Toléré si la durée ne dépasse pas un mois"],
    correct: 1,
    explanation: "Illégal. Le travail non déclaré (ou travail au noir) est sanctionné par des amendes et des redressements pour l'employeur ET le salarié. Il prive aussi le salarié de ses droits sociaux (retraite, chômage, maladie)."
  },
  {
    id: "T5_Q16",
    theme: "Le travail et l'emploi", macro: "Thème 5 — Vivre en société",
    q: "Quelle est la première démarche à réaliser pour chercher un emploi ?",
    a: ["Demander une autorisation écrite au maire", "S'inscrire à France Travail (anciennement Pôle emploi)", "Attendre d'être contacté par une entreprise publique", "Contacter directement la préfecture"],
    correct: 1,
    explanation: "S'inscrire à France Travail (anciennement Pôle emploi) pour bénéficier d'un accompagnement dans la recherche d'emploi et, le cas échéant, des allocations chômage."
  },
  {
    id: "T5_Q17",
    theme: "Le travail et l'emploi", macro: "Thème 5 — Vivre en société",
    q: "Qui est aidé par France Travail ?",
    a: ["Uniquement les grandes entreprises commerciales étrangères", "Les personnes à la recherche d'un emploi, les demandeurs d'emploi indemnisés et les employeurs", "Uniquement les fonctionnaires de l'État", "Uniquement les jeunes diplômés de moins de 25 ans"],
    correct: 1,
    explanation: "Les personnes à la recherche d'un emploi, les demandeurs d'emploi indemnisés, mais aussi les employeurs dans leur recherche de candidats."
  },
  {
    id: "T5_Q18",
    theme: "Le travail et l'emploi", macro: "Thème 5 — Vivre en société",
    q: "Une personne étrangère en situation régulière peut-elle créer son entreprise ?",
    a: ["Non, la création d'entreprise est réservée aux nationaux", "Oui, dans les mêmes conditions qu'un citoyen français", "Oui, mais uniquement sous forme d'association à but non lucratif", "Oui, mais seulement après 10 ans de résidence"],
    correct: 1,
    explanation: "Oui, dans les mêmes conditions qu'un citoyen français. La nationalité n'est pas un obstacle à la création d'entreprise en France."
  },
  {
    id: "T5_Q19",
    theme: "Le travail et l'emploi", macro: "Thème 5 — Vivre en société",
    q: "Une femme peut-elle créer son entreprise ?",
    a: ["Non, il faut obligatoirement l'accord d'un conjoint", "Oui, les femmes ont les mêmes droits que les hommes pour créer et diriger une entreprise", "Oui, mais uniquement dans certains secteurs réglementés", "Oui, mais uniquement en tant qu'auto-entrepreneuse"],
    correct: 1,
    explanation: "En France, les femmes ont les mêmes droits que les hommes pour créer et diriger une entreprise."
  },
  {
    id: "T5_Q20",
    theme: "Le travail et l'emploi", macro: "Thème 5 — Vivre en société",
    q: "À partir de quel âge un mineur peut-il travailler ?",
    a: ["14 ans", "16 ans", "18 ans", "15 ans"],
    correct: 1,
    explanation: "À partir de 16 ans (fin de la scolarité obligatoire), dans le cadre de contrats adaptés. Des règles strictes encadrent le travail des mineurs."
  },
  {
    id: "T5_Q21",
    theme: "Le travail et l'emploi", macro: "Thème 5 — Vivre en société",
    q: "Après avoir obtenu le permis de conduire, que faut-il faire pour conduire sa voiture ?",
    a: ["Conduire directement sans autre formalité", "Assurer son véhicule (responsabilité civile obligatoire) et vérifier le contrôle technique et l'immatriculation", "Attendre une homologation de la préfecture régionale", "Attendre un an avant de pouvoir conduire seul"],
    correct: 1,
    explanation: "Assurer son véhicule (assurance responsabilité civile obligatoire), et s'assurer que le véhicule est en règle (contrôle technique à jour, immatriculation)."
  },

  // --- L'école et la famille ---
  {
    id: "T5_Q22",
    theme: "L'école et la famille", macro: "Thème 5 — Vivre en société",
    q: "Jusqu'à quel âge l'école est-elle obligatoire ?",
    a: ["14 ans", "16 ans", "18 ans", "15 ans"],
    correct: 1,
    explanation: "Jusqu'à 16 ans. L'instruction est obligatoire de 3 à 16 ans."
  },
  {
    id: "T5_Q23",
    theme: "L'école et la famille", macro: "Thème 5 — Vivre en société",
    q: "Pour qui l'école est-elle obligatoire ?",
    a: ["Uniquement pour les enfants de nationalité française", "Pour tous les enfants résidant en France de 3 à 16 ans, quelle que soit leur nationalité", "Uniquement pour les enfants dont les parents travaillent", "Uniquement pour les enfants inscrits avant l'âge de 6 ans"],
    correct: 1,
    explanation: "Pour tous les enfants résidant en France de 3 à 16 ans, quelle que soit leur nationalité ou leur situation administrative."
  },
  {
    id: "T5_Q24",
    theme: "L'école et la famille", macro: "Thème 5 — Vivre en société",
    q: "L'autorité parentale prévoit l'obligation :",
    a: ["De choisir la future carrière professionnelle de l'enfant de manière stricte", "Pour les parents d'assurer l'instruction de leurs enfants, de veiller à leur santé, sécurité et éducation", "D'héberger les enfants jusqu'à l'âge de 30 ans", "D'inscrire l'enfant dans l'établissement scolaire le plus proche uniquement"],
    correct: 1,
    explanation: "Pour les parents d'assurer l'instruction de leurs enfants, de veiller à leur santé, leur sécurité et d'assurer leur éducation."
  },
  {
    id: "T5_Q25",
    theme: "L'école et la famille", macro: "Thème 5 — Vivre en société",
    q: "Dans quels établissements scolaires vont les élèves après l'école élémentaire ?",
    a: ["Directement à l'université publique", "Au collège puis au lycée", "Dans des centres de formation uniquement manuels", "Au lycée directement, sans passer par le collège"],
    correct: 1,
    explanation: "Au collège (de la 6e à la 3e, de 11 à 15 ans), puis au lycée (de la 2nde à la Terminale, de 15 à 18 ans)."
  },
  {
    id: "T5_Q26",
    theme: "L'école et la famille", macro: "Thème 5 — Vivre en société",
    q: "Quel diplôme obtient-on à la fin du lycée ?",
    a: ["Le Brevet des collèges", "Le baccalauréat (le « bac »)", "La Licence universitaire", "Le diplôme national du brevet (DNB)"],
    correct: 1,
    explanation: "Le baccalauréat (le « bac »). Il est nécessaire pour poursuivre des études supérieures."
  },
  {
    id: "T5_Q27",
    theme: "L'école et la famille", macro: "Thème 5 — Vivre en société",
    q: "Les enfants qui ne parlent pas français :",
    a: ["Sont refusés à l'école tant qu'ils ne maîtrisent pas la langue", "Sont accueillis dans les écoles publiques avec des dispositifs spéciaux (UPE2A) pour apprendre", "Doivent obligatoirement s'inscrire dans des écoles privées payantes", "Doivent redoubler une classe en attendant de progresser"],
    correct: 1,
    explanation: "Sont accueillis dans les écoles publiques françaises. Des dispositifs spéciaux (classes UPE2A) existent pour les aider à apprendre le français tout en suivant leur scolarité."
  },
  {
    id: "T5_Q28",
    theme: "L'école et la famille", macro: "Thème 5 — Vivre en société",
    q: "Un enfant inscrit à l'école :",
    a: ["Peut s'absenter librement selon le choix des parents", "Doit y être présent régulièrement, les absences répétées non justifiées étant sanctionnées", "N'est obligé de venir que les jours d'examens régionaux", "Peut être retiré de l'école par les parents à tout moment sans justification"],
    correct: 1,
    explanation: "Doit y être présent régulièrement. Les absences doivent être justifiées. Les absences répétées sans justification peuvent entraîner des sanctions pour les parents."
  },
  {
    id: "T5_Q29",
    theme: "L'école et la famille", macro: "Thème 5 — Vivre en société",
    q: "À quelles conditions un mariage est-il reconnu juridiquement ?",
    a: ["Il suffit d'organiser une cérémonie religieuse traditionnelle", "Il doit être célébré devant un officier d'état civil (mairie) entre deux personnes majeures libres et consentantes", "Il doit obtenir la validation par un décret préfectoral", "Il suffit d'une déclaration commune faite devant notaire"],
    correct: 1,
    explanation: "Il doit être célébré devant un officier d'état civil (mairie) en France. La cérémonie religieuse seule n'a pas de valeur juridique. Les deux personnes doivent être majeures, libres (pas déjà mariées) et consentir librement."
  },
  {
    id: "T5_Q30",
    theme: "L'école et la famille", macro: "Thème 5 — Vivre en société",
    q: "Quand faut-il déclarer son enfant au service d'état civil de la mairie ?",
    a: ["Dans le mois suivant la naissance", "Dans les 5 jours suivant la naissance", "Uniquement au moment de sa première rentrée scolaire", "Dans les 3 jours suivant la naissance"],
    correct: 1,
    explanation: "Dans les 5 jours suivant la naissance."
  },

  // ==========================================
  // --- QUESTIONS SUPPLÉMENTAIRES : NIVEAU CARTE DE RÉSIDENT (CR) ---
  // ==========================================
  
  // --- L'État de droit et la démocratie approfondie ---
  {
    id: "T_CR1",
    theme: "L'État de droit et la démocratie approfondie", macro: "Thème 6 — Niveau carte de résident",
    q: "Qu'est-ce que l'État de droit ?",
    a: ["Un système où seul le gouvernement choisit les règles sans contrôle", "Le principe selon lequel toutes les personnes et institutions, y compris l'État, sont soumises à la loi", "Un régime où la loi ne s'applique qu'aux citoyens de nationalité française", "Un régime où la Constitution peut être suspendue en cas de crise"],
    correct: 1,
    explanation: "L'État de droit signifie que toutes les personnes et institutions — y compris l'État lui-même — sont soumises à la loi. Personne n'est au-dessus des lois. Les droits fondamentaux des citoyens sont garantis et protégés par la Constitution et les tribunaux."
  },
  {
    id: "T_CR2",
    theme: "L'État de droit et la démocratie approfondie", macro: "Thème 6 — Niveau carte de résident",
    q: "Que garantit l'État de droit ?",
    a: ["La gratuité totale de tous les services marchands du pays", "L'égalité de tous devant la loi, l'indépendance de la justice et le contrôle des actes du gouvernement", "L'accès aux postes ministériels sans condition d'âge", "La gratuité de la justice pour tous les litiges, sans exception"],
    correct: 1,
    explanation: "L'égalité de tous devant la loi, la protection des droits fondamentaux, l'indépendance de la justice, et le contrôle des actes du gouvernement par des juridictions indépendantes."
  },
  {
    id: "T_CR3",
    theme: "L'État de droit et la démocratie approfondie", macro: "Thème 6 — Niveau carte de résident",
    q: "La loi est l'expression de :",
    a: ["La volonté exclusive du Président de la République", "La volonté générale", "Uniquement des souhaits des hauts fonctionnaires", "La volonté du Conseil constitutionnel"],
    correct: 1,
    explanation: "La volonté générale (selon Rousseau et l'article 6 de la DDHC). La loi est votée par le Parlement, représentant du peuple souverain."
  },
  {
    id: "T_CR4",
    theme: "L'État de droit et la démocratie approfondie", macro: "Thème 6 — Niveau carte de résident",
    q: "Pourquoi séparer les trois pouvoirs dans une démocratie ?",
    a: ["Pour ralentir l'adoption des textes administratifs", "Pour éviter qu'une seule personne ou institution concentre tous les pouvoirs, ce qui conduirait à la tyrannie", "Pour réduire les coûts budgétaires des ministères", "Pour permettre une meilleure coordination entre les ministères"],
    correct: 1,
    explanation: "Pour éviter qu'une seule personne ou institution concentre tous les pouvoirs, ce qui pourrait conduire à la tyrannie. La séparation garantit l'équilibre, le contrôle mutuel et la protection des libertés."
  },
  {
    id: "T_CR5",
    theme: "L'État de droit et la démocratie approfondie", macro: "Thème 6 — Niveau carte de résident",
    q: "Est-ce que le vote est obligatoire en France ?",
    a: ["Oui, sous peine d'une amende forfaitaire", "Non, le vote n'est pas obligatoire en France", "Oui, mais uniquement pour les élections présidentielles", "Oui, depuis une réforme récente, sous peine d'amende"],
    correct: 1,
    explanation: "Non, le vote n'est pas obligatoire en France. Mais il est un droit et un devoir civique important. S'abstenir, c'est ne pas participer aux choix qui concernent tous."
  },
  {
    id: "T_CR6",
    theme: "L'État de droit et la démocratie approfondie", macro: "Thème 6 — Niveau carte de résident",
    q: "Une personne peut-elle voter à la place d'une autre ?",
    a: ["Oui, si elle possède une simple lettre signée à la main", "Non, le vote est personnel et secret", "Oui, l'accès à l'urne est libre pour les membres d'une même famille", "Oui, avec une procuration signée devant notaire uniquement"],
    correct: 1,
    explanation: "Non. Le vote est personnel et secret. Il est interdit de voter à la place d'une autre personne, même avec une procuration non officielle."
  },
  {
    id: "T_CR7",
    theme: "L'État de droit et la démocratie approfondie", macro: "Thème 6 — Niveau carte de résident",
    q: "Qu'est-ce que l'Hôtel de Matignon ?",
    a: ["Le siège du ministère des Affaires étrangères", "La résidence officielle et le lieu de travail du Premier ministre", "Le palais où se réunit le Conseil constitutionnel", "Le siège du ministère de l'Intérieur"],
    correct: 1,
    explanation: "C'est la résidence officielle et le lieu de travail du Premier ministre, situé à Paris (7e arrondissement)."
  },
  {
    id: "T_CR8",
    theme: "L'État de droit et la démocratie approfondie", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel est le rôle du Président de la République ?",
    a: ["Voter les lois à la place du Parlement", "Garantir le respect de la Constitution, assurer la continuité de l'État et être chef des armées", "Trancher directement les conflits judiciaires privés", "Diriger directement les débats à l'Assemblée nationale"],
    correct: 1,
    explanation: "Garantir le respect de la Constitution, assurer la continuité de l'État, nommer le Premier ministre, présider le Conseil des ministres, être chef des armées et représenter la France à l'étranger."
  },
  {
    id: "T_CR9",
    theme: "L'État de droit et la démocratie approfondie", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel est le rôle du Premier ministre ?",
    a: ["Remplacer les juges de la Cour de cassation", "Diriger l'action du gouvernement, coordonner les ministres et appliquer les lois", "Présider obligatoirement toutes les séances du Sénat", "Nommer les préfets sans consultation du gouvernement"],
    correct: 1,
    explanation: "Diriger l'action du gouvernement, coordonner les ministres, appliquer les lois votées par le Parlement et rendre compte de son action devant l'Assemblée nationale."
  },
  {
    id: "T_CR10",
    theme: "L'État de droit et la démocratie approfondie", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel est le rôle du gouvernement ?",
    a: ["Élire le Président de la République", "Définir et conduire la politique de la Nation, préparer les lois et gérer les services publics", "Sanctionner pénalement les infractions routières", "Rédiger la Constitution et ses révisions"],
    correct: 1,
    explanation: "Définir et conduire la politique de la Nation, préparer les lois, gérer les services publics et appliquer les décisions du Parlement."
  },
  {
    id: "T_CR11",
    theme: "L'État de droit et la démocratie approfondie", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel est le rôle du Défenseur des droits ?",
    a: ["Défendre l'État français devant les instances internationales", "Défendre les personnes dont les droits ne sont pas respectés et lutter contre les discriminations", "Rédiger les contrats de travail de la fonction publique", "Nommer les magistrats du siège"],
    correct: 1,
    explanation: "Défendre les personnes dont les droits ne sont pas respectés, lutter contre les discriminations, protéger les lanceurs d'alerte et les droits de l'enfant. Il peut être saisi gratuitement par toute personne."
  },

  // --- L'UE approfondie — niveau CR ---
  {
    id: "T_CR12",
    theme: "L'UE approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel traité concerne la construction de l'Union européenne ?",
    a: ["Le traité de Versailles", "Le traité de Maastricht", "Le traité de Paris de 1815", "Le traité de Vienne"],
    correct: 1,
    explanation: "Le traité de Maastricht (1992), qui a créé l'Union Européenne, la citoyenneté européenne et posé les bases de l'euro."
  },
  {
    id: "T_CR13",
    theme: "L'UE approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "En quelle année le traité de Maastricht a-t-il été signé ?",
    a: ["1789", "1992", "2005", "1957"],
    correct: 1,
    explanation: "1992."
  },
  {
    id: "T_CR14",
    theme: "L'UE approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel État a quitté l'Union européenne en 2020 ?",
    a: ["La France", "Le Royaume-Uni", "La Suisse", "L'Irlande"],
    correct: 1,
    explanation: "Le Royaume-Uni (Brexit, effectif le 31 janvier 2020)."
  },
  {
    id: "T_CR15",
    theme: "L'UE approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle est la devise de l'Union européenne ?",
    a: ["Liberté, Égalité, Fraternité", "Unie dans la diversité", "Paix, Progrès et Solidarité", "Plus forts ensemble"],
    correct: 1,
    explanation: "« Unie dans la diversité »."
  },
  {
    id: "T_CR16",
    theme: "L'UE approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel est l'hymne de l'Union européenne ?",
    a: ["La Marseillaise", "L'Ode à la joie (9e Symphonie de Beethoven)", "Le Chant des partisans", "Le Chant du Départ"],
    correct: 1,
    explanation: "L'Ode à la joie, tirée de la 9e Symphonie de Beethoven."
  },
  {
    id: "T_CR17",
    theme: "L'UE approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "De quelle couleur est le drapeau européen ?",
    a: ["Fond blanc avec un cercle d'étoiles bleues", "Fond bleu avec un cercle de 12 étoiles jaunes/dorées", "Un drapeau tricolore vertical vert, blanc, rouge", "Fond bleu avec un nombre d'étoiles correspondant aux États membres"],
    correct: 1,
    explanation: "Fond bleu avec un cercle de 12 étoiles jaunes/dorées."
  },
  {
    id: "T_CR18",
    theme: "L'UE approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Où est le siège du Parlement européen ?",
    a: ["À Paris", "À Strasbourg", "À Berlin", "À Bruxelles"],
    correct: 1,
    explanation: "À Strasbourg (France), avec des bureaux à Bruxelles (Belgique) et Luxembourg."
  },
  {
    id: "T_CR19",
    theme: "L'UE approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Où est le siège de la Commission européenne ?",
    a: ["À Rome", "À Bruxelles", "À Strasbourg", "À Luxembourg"],
    correct: 1,
    explanation: "À Bruxelles, en Belgique."
  },
  {
    id: "T_CR20",
    theme: "L'UE approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Depuis quand l'euro est-il la monnaie unique sous forme de pièces et billets ?",
    a: ["Depuis le 1er janvier 1990", "Depuis le 1er janvier 2002", "Depuis le 1er janvier 2010", "Depuis le 1er janvier 1999"],
    correct: 1,
    explanation: "Depuis le 1er janvier 2002 (mise en circulation des billets et pièces). L'euro avait été introduit comme monnaie scripturale le 1er janvier 1999."
  },

  // --- Droits spécifiques — niveau CR ---
  {
    id: "T_CR21",
    theme: "Droits spécifiques — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Que garantit la liberté de la presse ?",
    a: ["Le droit pour l'État de relire et modifier les articles avant publication", "Le droit des journalistes et des médias d'informer, d'enquêter et de publier librement", "L'obligation pour chaque citoyen d'acheter un journal", "Le droit pour l'État de subventionner uniquement la presse qui lui est favorable"],
    correct: 1,
    explanation: "Le droit des journalistes et des médias d'informer, d'enquêter et de publier librement, sans censure préalable de l'État. La liberté de la presse est un pilier de la démocratie."
  },
  {
    id: "T_CR22",
    theme: "Droits spécifiques — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Que prévoit la Charte de l'environnement ?",
    a: ["L'interdiction totale de l'usage des voitures en zone urbaine", "Elle reconnaît le droit à un environnement sain et fait de sa protection un devoir", "L'obligation de posséder un jardin privatif", "L'obligation pour chaque foyer de produire sa propre énergie renouvelable"],
    correct: 1,
    explanation: "Adoptée en 2004 et intégrée au bloc constitutionnel, elle reconnaît le droit de chaque personne à vivre dans un environnement sain et fait de la protection de l'environnement un devoir pour tous."
  },
  {
    id: "T_CR23",
    theme: "Droits spécifiques — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Que signifie la dignité humaine ?",
    a: ["Une distinction honorifique accordée par la présidence", "Le droit de chaque être humain à être respecté et traité avec considération", "Une obligation de détenir des titres académiquesélevés", "Un principe qui ne s'applique qu'aux personnes de nationalité française"],
    correct: 1,
    explanation: "Le droit de chaque être humain à être respecté et traité avec considération, quelles que soient ses origines, sa condition ou ses actes. Elle est inviolable et protégée par la Constitution."
  },
  {
    id: "T_CR24",
    theme: "Droits spécifiques — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Qu'est-ce que le droit de grève ?",
    a: ["Le droit de ne jamais payer ses cotisations d'assurance", "Le droit pour les travailleurs de cesser collectivement le travail pour défendre leurs intérêts", "Une autorisation d'absence non justifiée accordée par la mairie", "Le droit de refuser toute forme d'autorité hiérarchique"],
    correct: 1,
    explanation: "Le droit pour les travailleurs de cesser collectivement le travail pour défendre leurs intérêts professionnels. Il est garanti par la Constitution française."
  },
  {
    id: "T_CR25",
    theme: "Droits spécifiques — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Parmi les actions citoyennes, laquelle constitue une participation citoyenne ?",
    a: ["Regarder la télévision publique nationale", "Voter, participer à une manifestation légale, s'engager dans une association", "Effectuer ses démarches d'achats commerciaux courants", "Payer ses impôts dans les délais"],
    correct: 1,
    explanation: "Voter, participer à une manifestation légale, signer une pétition, s'engager dans une association, contacter un élu — toutes sont des formes de participation citoyenne."
  },
  {
    id: "T_CR26",
    theme: "Droits spécifiques — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "La répudiation de sa femme est :",
    a: ["Autorisée si le mariage a été contracté à l'étranger", "Interdite en France car contraire au principe du consentement mutuel", "Légale après accord du conseil municipal", "Tolérée si elle est prévue par la loi du pays d'origine des époux"],
    correct: 1,
    explanation: "Interdite in France. La répudiation (dissolution unilatérale du mariage par le mari) est contraire au droit français qui exige le consentement des deux parties pour le divorce."
  },
  {
    id: "T_CR27",
    theme: "Droits spécifiques — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "À l'école publique, qui peut porter des signes religieux très visibles ?",
    a: ["Les enseignants uniquement", "Personne (ni les élèves, ni les enseignants, ni les agents)", "Les élèves uniquement", "Les élèves majeurs uniquement"],
    correct: 1,
    explanation: "Personne (ni les élèves, ni les enseignants, ni les agents). La loi de 2004 interdit le port de signes religieux ostensibles dans les établissements scolaires publics."
  },
  {
    id: "T_CR28",
    theme: "Droits spécifiques — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Selon le principe de laïcité, que signifie la neutralité de l'État ?",
    a: ["Que l'État finance en priorité la religion la plus pratiquée", "Que l'État ne favorise ni ne s'oppose à aucune religion et que ses agents ne doivent exprimer aucune conviction", "Que les cultes sont gérés directement par les préfectures", "Que l'État reconnaît le catholicisme comme religion historique tout en finançant les autres cultes"],
    correct: 1,
    explanation: "Que l'État ne favorise ni ne s'oppose à aucune religion. Les agents publics et les institutions ne doivent exprimer aucune conviction religieuse dans l'exercice de leurs fonctions."
  },

  // ==========================================
  // --- QUESTIONS OFFICIELLES SUPPLÉMENTAIRES — NIVEAU CARTE DE RÉSIDENT (CR) ---
  // Basées sur la liste officielle du ministère de l'Intérieur
  // ==========================================

  // --- Principes et valeurs de la République (approfondi) ---
  {
    id: "T_CR29",
    theme: "Les libertés approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "À quoi sert un titre de séjour ?",
    a: ["Il remplace la carte Vitale pour l'accès aux soins", "Il autorise et atteste la régularité du séjour d'un étranger en France, selon la durée et les droits qu'il précise", "Il donne automatiquement le droit de vote aux élections locales", "Il équivaut juridiquement à la nationalité française"],
    correct: 1,
    explanation: "Le titre de séjour autorise et atteste la régularité du séjour d'une personne étrangère en France. Sa nature (carte de séjour temporaire, pluriannuelle, carte de résident) détermine sa durée de validité et les droits associés (travail, regroupement familial...)."
  },
  {
    id: "T_CR30",
    theme: "Les libertés approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "La liberté de circulation permet à toute personne de :",
    a: ["Franchir n'importe quelle frontière sans aucun document, y compris hors de l'espace Schengen", "Se déplacer et s'installer librement sur le territoire, dans le respect des lois et, pour les étrangers, des règles relatives au séjour", "Occuper tout logement vacant sans autorisation du propriétaire", "Circuler à toute heure sans respecter le code de la route"],
    correct: 1,
    explanation: "La liberté de circulation permet à toute personne de se déplacer et de s'installer librement sur le territoire, dans le respect des lois. Pour les étrangers, l'entrée et le séjour restent encadrés par les règles relatives aux titres de séjour."
  },
  {
    id: "T_CR31",
    theme: "Les libertés approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Qu'est-ce que la liberté d'association ?",
    a: ["L'obligation pour chaque citoyen d'adhérer à un syndicat", "Le droit de créer librement une association ou d'y adhérer, sans autorisation préalable de l'État", "Un droit réservé aux associations reconnues d'utilité publique", "L'obligation de faire valider les statuts d'une association par le Parlement"],
    correct: 1,
    explanation: "La liberté d'association, garantie depuis la loi de 1901, permet à toute personne de créer librement une association ou d'y adhérer, sans autorisation préalable de l'administration — une simple déclaration en préfecture suffit."
  },
  {
    id: "T_CR32",
    theme: "Les libertés approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "En application de la liberté individuelle, quelle proposition est correcte ? Une personne peut :",
    a: ["Faire tout ce qu'elle souhaite sans aucune restriction, la liberté individuelle étant absolue", "Agir librement dès lors qu'elle ne porte pas atteinte aux droits d'autrui ni à l'ordre public, dans les limites fixées par la loi", "Refuser de se soumettre à toute décision de justice si elle la juge injuste", "S'affranchir des lois si elle invoque une conviction personnelle"],
    correct: 1,
    explanation: "Une personne peut agir librement dès lors qu'elle ne porte pas atteinte aux droits d'autrui ni à l'ordre public, dans les limites fixées par la loi. La liberté individuelle n'est donc jamais absolue."
  },
  {
    id: "T_CR33",
    theme: "Les libertés approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Concernant la pratique de la religion, quelle proposition est correcte ?",
    a: ["Elle est interdite dans tout espace accessible au public", "Chacun peut pratiquer la religion de son choix, dans un cadre privé ou associatif, dans le respect de l'ordre public", "Elle nécessite une autorisation préalable de la préfecture", "Seules les religions reconnues par le Concordat de 1801 peuvent être pratiquées"],
    correct: 1,
    explanation: "Chacun peut pratiquer librement la religion de son choix, notamment dans un cadre privé ou associatif (lieux de culte), dans le respect de l'ordre public et de la loi. La pratique religieuse n'est pas autorisée dans les services publics en raison de la neutralité de l'État."
  },
  {
    id: "T_CR34",
    theme: "Les libertés approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "En tant que parent, peut-on refuser que son enfant participe aux cours de sport à l'école car ils sont mixtes ?",
    a: ["Oui, sur simple lettre justifiant une conviction religieuse ou personnelle", "Non. La mixité est un principe de l'école publique et l'éducation physique fait partie des enseignements obligatoires", "Oui, à condition que l'enfant ait plus de 10 ans", "Oui, si un certificat médical le demande"],
    correct: 1,
    explanation: "Non. La mixité est un principe fondamental de l'école publique et l'éducation physique et sportive fait partie des enseignements obligatoires du programme, au même titre que les autres matières."
  },
  {
    id: "T_CR35",
    theme: "Les libertés approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?",
    a: ["Seuls les citoyens de nationalité française sont soumis à l'impôt en France", "Toute personne qui perçoit des revenus ou consomme en France contribue, selon les règles fiscales, au financement des services publics (écoles, hôpitaux, routes...)", "Les impôts financent exclusivement le budget de la Défense", "Le paiement de l'impôt est facultatif au-delà d'un certain âge"],
    correct: 1,
    explanation: "Toute personne qui perçoit des revenus ou qui consomme en France contribue, selon les règles fiscales en vigueur, au financement des services publics : écoles, hôpitaux, routes, sécurité, justice, etc. Cela concerne aussi bien les Français que les résidents étrangers."
  },
  {
    id: "T_CR36",
    theme: "Les libertés approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Peut-on brûler publiquement un drapeau français ?",
    a: ["Oui, cela relève entièrement de la liberté d'expression", "Non, cet acte constitue une infraction pénale car il porte atteinte à un symbole de la République", "Oui, uniquement lors d'une manifestation déclarée en préfecture", "Oui, si l'acte est filmé et diffusé à des fins journalistiques"],
    correct: 1,
    explanation: "Non. Le fait de détruire ou de dégrader publiquement un drapeau tricolore dans le cadre d'une manifestation organisée sur la voie publique est une infraction pénale, car cet acte porte atteinte à un symbole de la République."
  },
  {
    id: "T_CR37",
    theme: "Les libertés approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Que fait l'État pour lutter contre les discriminations ?",
    a: ["Il laisse les employeurs libres de choisir leurs critères de recrutement", "Il interdit par la loi les discriminations (origine, sexe, religion, handicap...) et permet des recours devant la justice ou le Défenseur des droits", "Il n'intervient que si la victime est de nationalité française", "Il se limite à des campagnes de communication sans effet juridique"],
    correct: 1,
    explanation: "L'État interdit par la loi les discriminations fondées sur l'origine, le sexe, la religion, le handicap, l'orientation sexuelle, etc. Toute victime peut saisir la justice ou le Défenseur des droits, qui peut instruire gratuitement les réclamations."
  },
  {
    id: "T_CR38",
    theme: "Les libertés approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Un employeur refuse d'embaucher des femmes dans son entreprise. Que dit la loi ?",
    a: ["C'est autorisé s'il s'agit d'un métier physiquement exigeant", "C'est une discrimination interdite par la loi, punie pénalement, car le sexe ne peut fonder un refus d'embauche", "C'est autorisé pour les entreprises de moins de 10 salariés", "C'est autorisé si le règlement intérieur le prévoit"],
    correct: 1,
    explanation: "Refuser d'embaucher une personne en raison de son sexe est une discrimination interdite par la loi et pénalement sanctionnée. Le principe d'égalité professionnelle entre hommes et femmes s'applique à tous les employeurs, quel que soit le secteur."
  },
  {
    id: "T_CR39",
    theme: "Les libertés approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Complétez ces paroles de la Marseillaise : \"Allons enfants de la [...]\"",
    a: ["nation", "patrie", "liberté", "victoire"],
    correct: 1,
    explanation: "« Allons enfants de la patrie, le jour de gloire est arrivé ! » — premier vers de La Marseillaise, composée par Rouget de Lisle en 1792."
  },
  {
    id: "T_CR40",
    theme: "Les libertés approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Complétez ces paroles de la Marseillaise : \"Aux armes [...] ! Formez vos bataillons\"",
    a: ["soldats", "citoyens", "Français", "guerriers"],
    correct: 1,
    explanation: "« Aux armes, citoyens ! Formez vos bataillons, marchons, marchons ! » — refrain de La Marseillaise."
  },
  {
    id: "T_CR41",
    theme: "Les libertés approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'Homme et du Citoyen de 1789 ?",
    a: ["« Le peuple est souverain et gouverne directement sans représentants »", "« Les hommes naissent et demeurent libres et égaux en droits »", "« La religion catholique est religion d'État »", "« La propriété est un privilège réservé à la noblesse »"],
    correct: 1,
    explanation: "L'article 1er de la DDHC de 1789 énonce : « Les hommes naissent et demeurent libres et égaux en droits. » C'est l'un des fondements des principes républicains français."
  },

  // --- Système institutionnel et politique (approfondi) ---
  {
    id: "T_CR42",
    theme: "Institutions approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Le président de la République a commis un crime. Quelle proposition est correcte ?",
    a: ["Il bénéficie d'une immunité totale et définitive, y compris après son mandat", "Il bénéficie d'une immunité limitée pendant son mandat, mais peut être jugé par la Haute Cour en cas de manquement grave, et poursuivi comme tout citoyen après son mandat", "Il ne peut jamais être jugé, quelle que soit la gravité des faits", "Seul le Conseil constitutionnel peut décider de sa culpabilité, sans procès"],
    correct: 1,
    explanation: "Pendant son mandat, le président bénéficie d'une immunité qui suspend les poursuites judiciaires ordinaires, sauf destitution prononcée par la Haute Cour en cas de manquement grave à ses devoirs. Une fois son mandat achevé, il peut être poursuivi et jugé comme tout citoyen."
  },
  {
    id: "T_CR43",
    theme: "Institutions approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle est la durée du mandat du conseil municipal et du maire ?",
    a: ["4 ans", "6 ans", "5 ans", "3 ans"],
    correct: 1,
    explanation: "6 ans. Le conseil municipal, qui élit le maire en son sein, est renouvelé lors des élections municipales organisées tous les 6 ans."
  },
  {
    id: "T_CR44",
    theme: "Institutions approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "À la fin de son mandat, le président de la République peut-il décider de rester au pouvoir ?",
    a: ["Oui, s'il estime que la situation politique le justifie", "Non. Il doit quitter ses fonctions et, s'il souhaite continuer, se représenter à une nouvelle élection", "Oui, pour une durée maximale de six mois supplémentaires", "Oui, si le Parlement le lui demande formellement"],
    correct: 1,
    explanation: "Non. À la fin de son mandat, le président doit quitter ses fonctions. S'il souhaite rester au pouvoir, il doit se présenter comme candidat à une nouvelle élection présidentielle et être réélu par les citoyens."
  },
  {
    id: "T_CR45",
    theme: "Institutions approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Qui dirige l'action du Gouvernement ?",
    a: ["Le président de l'Assemblée nationale", "Le Premier ministre", "Le président du Sénat", "Le président de la République seul"],
    correct: 1,
    explanation: "Le Premier ministre dirige l'action du Gouvernement, coordonne le travail des ministres et est responsable de cette action devant l'Assemblée nationale."
  },
  {
    id: "T_CR46",
    theme: "Institutions approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle est l'organisation administrative de la France ?",
    a: ["L'État est organisé en un seul échelon centralisé, sans collectivités locales", "L'État est organisé en communes, départements et régions, qui disposent chacun de compétences propres", "L'État est organisé exclusivement en cantons autonomes", "L'État est organisé en provinces héritées de l'Ancien Régime"],
    correct: 1,
    explanation: "La France est organisée en collectivités territoriales : les communes, les départements et les régions, chacune disposant de compétences propres (urbanisme pour la commune, collèges et action sociale pour le département, lycées et développement économique pour la région), aux côtés des services de l'État."
  },
  {
    id: "T_CR47",
    theme: "Institutions approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel est le rôle principal des communes ?",
    a: ["Voter les lois nationales et le budget de l'État", "Gérer les services de proximité : état civil, écoles primaires, urbanisme, voirie locale", "Nommer les préfets de région", "Organiser les élections présidentielles"],
    correct: 1,
    explanation: "Les communes gèrent les services de proximité : état civil (naissances, mariages), écoles primaires et maternelles, urbanisme, voirie locale, et les principaux équipements publics du quotidien."
  },
  {
    id: "T_CR48",
    theme: "Institutions approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel est le rôle principal du département ?",
    a: ["Voter les lois relatives au droit du travail", "Gérer l'action sociale (aide aux personnes âgées, protection de l'enfance, RSA), les collèges et une partie de la voirie", "Gérer exclusivement les universités", "Nommer les ministres du Gouvernement"],
    correct: 1,
    explanation: "Le département gère principalement l'action sociale (aide aux personnes âgées et handicapées, protection de l'enfance, RSA), les collèges, ainsi qu'une partie de la voirie et des transports scolaires."
  },
  {
    id: "T_CR49",
    theme: "Institutions approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Combien de communes environ existe-t-il en France ?",
    a: ["Environ 5 000", "Environ 35 000", "Environ 100 000", "Environ 500"],
    correct: 1,
    explanation: "Environ 35 000 communes, ce qui fait de la France le pays d'Europe comptant le plus grand nombre de communes."
  },
  {
    id: "T_CR50",
    theme: "Institutions approfondies — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Combien y a-t-il de régions en France (métropole et outre-mer compris) ?",
    a: ["13 régions au total", "18 régions au total (13 en métropole et 5 outre-mer)", "27 régions au total", "22 régions au total"],
    correct: 1,
    explanation: "18 régions au total : 13 régions en métropole (depuis la réforme de 2016) et 5 régions d'outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte)."
  },
  {
    id: "T_CR51",
    theme: "UE approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "De quoi est composé le drapeau européen ?",
    a: ["D'un cercle d'étoiles dont le nombre varie selon les adhésions de nouveaux États", "D'un cercle de 12 étoiles jaunes sur fond bleu, symbolisant l'unité et non le nombre d'États membres", "D'étoiles rouges disposées en carré sur fond blanc", "D'une étoile unique dorée au centre d'un fond bleu"],
    correct: 1,
    explanation: "Le drapeau européen est composé d'un cercle de 12 étoiles jaunes sur fond bleu. Le nombre 12 est fixe et symbolise la perfection et l'unité, il n'évolue pas avec le nombre d'États membres."
  },

  // --- Droits et devoirs (approfondi) ---
  {
    id: "T_CR52",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Que signifie PMA ?",
    a: ["Protection Maladie Assurée", "Procréation Médicalement Assistée", "Programme Ministériel d'Accompagnement", "Prestation Mensuelle d'Aide"],
    correct: 1,
    explanation: "PMA signifie Procréation Médicalement Assistée : ensemble des techniques médicales (insémination, fécondation in vitro...) permettant à des personnes de procréer avec une assistance médicale."
  },
  {
    id: "T_CR53",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "À quelle liberté la PMA fait-elle référence ?",
    a: ["À la liberté de circulation", "À la liberté de disposer de son corps et de fonder une famille", "À la liberté d'expression", "À la liberté d'association"],
    correct: 1,
    explanation: "La PMA se rattache à la liberté de disposer de son corps et au droit de fonder une famille. Depuis la loi de bioéthique de 2021, elle est ouverte à tous les couples et aux femmes seules, sous conditions."
  },
  {
    id: "T_CR54",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Le recours à l'avortement est-il autorisé ?",
    a: ["Non, sauf en cas de danger vital pour la mère", "Oui. L'interruption volontaire de grossesse (IVG) est un droit garanti, désormais inscrit dans la Constitution française", "Oui, mais uniquement avec l'accord du conjoint", "Oui, uniquement avant 6 semaines de grossesse"],
    correct: 1,
    explanation: "Oui. L'IVG est un droit garanti en France, et depuis mars 2024, la liberté de recourir à l'IVG est inscrite dans la Constitution française — une première mondiale."
  },
  {
    id: "T_CR55",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Qui peut demander à avorter ?",
    a: ["Uniquement les femmes majeures de nationalité française", "Toute femme enceinte qui le souhaite, quelle que soit sa nationalité, dans les délais légaux", "Uniquement les femmes mariées avec l'accord de leur époux", "Uniquement les femmes ayant déjà un enfant"],
    correct: 1,
    explanation: "Toute femme enceinte qui le souhaite, quelle que soit sa nationalité ou sa situation, peut demander à avorter en France, dans les délais légaux prévus par la loi."
  },
  {
    id: "T_CR56",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Une femme majeure de nationalité française a-t-elle le droit de voter aux élections ?",
    a: ["Oui, depuis la Révolution française de 1789", "Oui, depuis l'ordonnance de 1944, appliquée pour la première fois en 1945", "Non, uniquement aux élections locales", "Oui, mais seulement depuis les années 1970"],
    correct: 1,
    explanation: "Oui. Les femmes ont obtenu le droit de vote et d'éligibilité en France par l'ordonnance du 21 avril 1944, appliqué pour la première fois lors des élections municipales de 1945."
  },
  {
    id: "T_CR57",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Que contient la Constitution ?",
    a: ["Uniquement le programme du gouvernement en place", "L'organisation des pouvoirs publics (exécutif, législatif, judiciaire) et les grands principes fondamentaux de la République", "La liste détaillée de toutes les lois en vigueur", "Le budget annuel de l'État"],
    correct: 1,
    explanation: "La Constitution organise les pouvoirs publics (exécutif, législatif, judiciaire), fixe leurs relations, et pose les grands principes fondamentaux de la République (souveraineté, droits et libertés)."
  },
  {
    id: "T_CR58",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel texte est le plus difficile à modifier en droit français ?",
    a: ["Une loi ordinaire votée par le Parlement", "La Constitution, qui nécessite une procédure de révision spécifique (Congrès ou référendum)", "Un décret gouvernemental", "Un arrêté préfectoral"],
    correct: 1,
    explanation: "La Constitution est le texte le plus difficile à modifier : sa révision nécessite une procédure spécifique, avec un vote des deux chambres du Parlement en termes identiques, puis une adoption par référendum ou par le Congrès (Assemblée nationale et Sénat réunis) à la majorité des trois cinquièmes."
  },
  {
    id: "T_CR59",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Que signifie le droit de manifester ?",
    a: ["Le droit de bloquer n'importe quelle voie publique sans formalité", "Le droit de se réunir et d'exprimer collectivement une opinion sur la voie publique, dans le cadre légal (déclaration préalable, respect de l'ordre public)", "Le droit d'organiser un rassemblement sans limite de durée ni de lieu", "Le droit réservé aux organisations syndicales uniquement"],
    correct: 1,
    explanation: "Le droit de manifester permet de se réunir et d'exprimer collectivement une opinion sur la voie publique. Il s'exerce dans un cadre légal : les manifestations doivent en général être déclarées en préfecture ou en mairie, et respecter l'ordre public."
  },
  {
    id: "T_CR60",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Pour quel motif peut-on limiter la liberté d'expression ?",
    a: ["Uniquement si l'auteur des propos est étranger", "Pour protéger l'ordre public, empêcher l'incitation à la haine ou à la violence, et protéger la réputation d'autrui", "Dès lors que les propos critiquent une décision du gouvernement", "Jamais : la liberté d'expression est absolue en France"],
    correct: 1,
    explanation: "La liberté d'expression peut être limitée pour protéger l'ordre public, empêcher l'incitation à la haine, à la discrimination ou à la violence, et protéger la réputation et les droits d'autrui (diffamation, injure)."
  },
  {
    id: "T_CR61",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "L'État peut-il limiter les droits et libertés ?",
    a: ["Non, jamais, les droits fondamentaux sont absolus et intouchables", "Oui, dans des cas précis et proportionnés, pour protéger l'ordre public, la santé publique ou les droits d'autrui", "Oui, à tout moment et sans justification", "Oui, uniquement en période électorale"],
    correct: 1,
    explanation: "Oui. L'État peut limiter certains droits et libertés, mais uniquement dans des cas précis, de manière proportionnée et encadrée par la loi : pour protéger l'ordre public, la santé publique, la sécurité ou les droits d'autrui."
  },
  {
    id: "T_CR62",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel exemple illustre une limitation de liberté pour protéger l'intérêt général ?",
    a: ["L'obligation de porter la ceinture de sécurité en voiture", "L'interdiction de voter pour les personnes de plus de 70 ans", "L'obligation de posséder un diplôme pour se marier", "L'interdiction de changer de religion"],
    correct: 0,
    explanation: "L'obligation de porter la ceinture de sécurité limite la liberté individuelle mais vise à protéger la santé et la vie, dans l'intérêt général. D'autres exemples : port du casque à moto, limitations de vitesse, interdiction de fumer dans les lieux publics."
  },
  {
    id: "T_CR63",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle proposition représente un exemple de crime ?",
    a: ["Un excès de vitesse de 20 km/h", "Un meurtre", "Un vol de bicyclette non aggravé", "Un stationnement gênant"],
    correct: 1,
    explanation: "Un meurtre est un crime, l'infraction la plus grave, jugé par la cour d'assises. Le vol simple ou l'excès de vitesse relèvent généralement du délit ou de la contravention selon les circonstances."
  },
  {
    id: "T_CR64",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle proposition représente un exemple de délit ?",
    a: ["Un vol simple", "Un stationnement interdit", "Un meurtre", "Un crime contre l'humanité"],
    correct: 0,
    explanation: "Un vol simple est un délit, jugé par le tribunal correctionnel. Le stationnement interdit est une contravention ; le meurtre et les crimes contre l'humanité sont des crimes, jugés par la cour d'assises ou une cour criminelle."
  },
  {
    id: "T_CR65",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Que doit-on faire face aux ordres des policiers ou gendarmes ?",
    a: ["On peut les ignorer si l'on n'est pas d'accord avec la demande", "On doit s'y conformer ; en cas de désaccord, il est possible de le contester ensuite par les voies légales (plainte, réclamation)", "On peut y résister physiquement si l'on estime le contrôle injustifié", "On doit obéir uniquement si l'agent est en uniforme complet"],
    correct: 1,
    explanation: "On doit se conformer aux ordres légitimes des forces de l'ordre. En cas de désaccord ou d'abus supposé, la contestation doit se faire par les voies légales a posteriori (plainte, saisine du Défenseur des droits), et non par la résistance sur le moment."
  },
  {
    id: "T_CR66",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel est un exemple d'assistance à personne en danger ?",
    a: ["Filmer une personne en train de se noyer sans intervenir ni alerter les secours", "Prévenir les secours (15, 17 ou 18) en voyant une personne inconsciente sur la voie publique", "Continuer sa route sans s'arrêter en cas d'accident de la route", "Ignorer un appel à l'aide pour ne pas être impliqué"],
    correct: 1,
    explanation: "Prévenir les secours en voyant une personne en danger constitue une assistance à personne en danger. En France, la non-assistance à personne en danger est une infraction pénale : chacun a l'obligation d'agir ou d'alerter les secours."
  },
  {
    id: "T_CR67",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle est l'attitude à avoir lorsqu'on est témoin de violences ?",
    a: ["Ne pas s'en mêler pour éviter tout ennui", "Alerter les secours ou la police (17), et, si possible, porter assistance sans se mettre en danger", "Attendre que la victime porte plainte elle-même avant d'agir", "Filmer la scène pour la publier sur les réseaux sociaux sans prévenir personne"],
    correct: 1,
    explanation: "Il faut alerter les secours ou la police (17) et, si possible, porter assistance sans se mettre soi-même en danger. Rester passif face à des violences peut constituer une non-assistance à personne en danger."
  },
  {
    id: "T_CR68",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Concernant l'utilisation des réseaux sociaux, quelle proposition est correcte ?",
    a: ["Tout y est permis car l'anonymat protège des poursuites", "Les mêmes règles qu'ailleurs s'appliquent : injure, diffamation, harcèlement ou incitation à la haine y sont interdits et punissables", "Les publications sur les réseaux sociaux ne peuvent jamais être utilisées comme preuve en justice", "Seuls les mineurs peuvent être sanctionnés pour leurs publications"],
    correct: 1,
    explanation: "Les mêmes règles de droit qu'ailleurs s'appliquent sur les réseaux sociaux : injure, diffamation, harcèlement en ligne ou incitation à la haine sont interdits et punissables, même sous pseudonyme, l'anonymat n'étant pas une protection juridique."
  },
  {
    id: "T_CR69",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Jeter un mégot par terre est :",
    a: ["Toléré s'il est complètement éteint", "Une infraction (contravention) passible d'une amende, notamment en raison de son impact environnemental", "Autorisé dans les grandes villes uniquement", "Un simple manquement civique sans sanction"],
    correct: 1,
    explanation: "Jeter un mégot sur la voie publique est une infraction passible d'une amende, en raison de son impact sur l'environnement (pollution des sols et de l'eau, risque d'incendie)."
  },
  {
    id: "T_CR70",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Pourquoi doit-on trier ses déchets ?",
    a: ["Pour respecter une simple tradition locale sans valeur légale", "Pour permettre le recyclage, réduire la pollution, et parce que c'est une obligation environnementale et civique", "Uniquement pour réduire sa propre facture de gaz", "Le tri n'est utile qu'en zone rurale"],
    correct: 1,
    explanation: "Le tri des déchets permet leur recyclage et réduit la pollution. C'est une obligation environnementale et civique : chacun contribue ainsi à la protection de l'environnement, un droit et un devoir reconnus par la Charte de l'environnement."
  },
  {
    id: "T_CR71",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Parmi ces actions, laquelle permet d'adopter une attitude respectueuse de l'environnement ?",
    a: ["Laisser couler l'eau inutilement", "Trier ses déchets et limiter sa consommation d'énergie et d'eau", "Jeter les déchets électroniques avec les ordures ménagères", "Utiliser systématiquement la voiture pour de très courts trajets"],
    correct: 1,
    explanation: "Trier ses déchets et limiter sa consommation d'énergie et d'eau sont des gestes simples qui respectent l'environnement, conformément au devoir de protection de l'environnement reconnu par la Charte de l'environnement de 2004."
  },
  {
    id: "T_CR72",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle obligation concerne toutes les personnes résidant en France, quelle que soit leur nationalité ?",
    a: ["L'obligation de voter aux élections locales", "L'obligation de respecter la loi française", "L'obligation d'adhérer à un parti politique", "L'obligation de posséder un compte bancaire français"],
    correct: 1,
    explanation: "L'obligation de respecter la loi française s'applique à toute personne résidant en France, quelle que soit sa nationalité. Nul ne peut s'en exonérer, même temporairement."
  },
  {
    id: "T_CR73",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle proposition constitue une obligation, et non un droit ?",
    a: ["Le droit de vote", "L'instruction des enfants de 3 à 16 ans", "La liberté d'expression", "Le droit à un procès équitable"],
    correct: 1,
    explanation: "L'instruction des enfants de 3 à 16 ans est une obligation légale pour les parents. Le droit de vote, la liberté d'expression et le droit à un procès équitable sont, eux, des droits."
  },
  {
    id: "T_CR74",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "S'agissant des déchets, quelle proposition est correcte ?",
    a: ["Chaque foyer peut les brûler librement dans son jardin", "Ils doivent être triés et déposés dans les circuits prévus (poubelles, points de tri, déchetteries) selon les règles fixées par la commune", "Ils peuvent être abandonnés sur la voie publique s'ils sont peu encombrants", "Leur gestion est facultative pour les résidents de moins d'un an"],
    correct: 1,
    explanation: "Les déchets doivent être triés et déposés dans les circuits prévus (poubelles, points de tri, déchetteries), selon les règles fixées par chaque commune. Le brûlage à l'air libre ou l'abandon sur la voie publique sont interdits et passibles d'amende."
  },
  {
    id: "T_CR75",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Au nom de quoi l'État justifie-t-il la restriction des droits ?",
    a: ["Au nom de la volonté personnelle du président de la République", "Au nom de l'ordre public, de la protection de la santé, de la sécurité ou des droits d'autrui, et toujours dans un cadre proportionné fixé par la loi", "Au nom de considérations religieuses officielles", "Au nom de la seule opinion majoritaire exprimée dans les sondages"],
    correct: 1,
    explanation: "L'État justifie la restriction de certains droits au nom de l'ordre public, de la protection de la santé publique, de la sécurité ou des droits d'autrui. Ces restrictions doivent rester proportionnées et être prévues par la loi, sous le contrôle du juge."
  },
  {
    id: "T_CR76",
    theme: "Droits et devoirs approfondis — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Concernant le droit de se marier, quelle proposition est correcte ?",
    a: ["Le mariage est ouvert à deux personnes majeures, libres et consentantes, quel que soit leur sexe, depuis la loi du 17 mai 2013", "Le mariage entre personnes du même sexe est interdit en France", "Le consentement d'un seul des deux futurs époux suffit si l'autre est mineur", "Le mariage n'est reconnu que s'il est célébré religieusement"],
    correct: 0,
    explanation: "Depuis la loi du 17 mai 2013 (dite « mariage pour tous »), le mariage est ouvert à deux personnes majeures, libres et consentantes, quel que soit leur sexe. Seul le mariage célébré devant un officier d'état civil a une valeur juridique en France."
  },

  // --- Histoire, géographie et culture (approfondi) ---
  {
    id: "T_CR77",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel était le surnom de Louis XIV ?",
    a: ["Le Roi Soleil", "Le Roi de Fer", "Le Bien-Aimé", "Le Grand Monarque"],
    correct: 0,
    explanation: "Louis XIV (1638-1715) était surnommé « le Roi Soleil », symbole de la monarchie absolue française. Il régna 72 ans, la plus longue durée de règne de l'histoire de France."
  },
  {
    id: "T_CR78",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel roi de France a été exécuté pendant la Révolution française ?",
    a: ["Louis XIV", "Louis XVI", "Louis XV", "Louis XVIII"],
    correct: 1,
    explanation: "Louis XVI a été guillotiné le 21 janvier 1793, place de la Révolution (actuelle place de la Concorde) à Paris."
  },
  {
    id: "T_CR79",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "En quelle année Napoléon Ier est-il devenu empereur ?",
    a: ["1799", "1804", "1789", "1815"],
    correct: 1,
    explanation: "En 1804, Napoléon Bonaparte se fait sacrer empereur des Français sous le nom de Napoléon Ier. Il était devenu Premier Consul dès 1799 après le coup d'État du 18 Brumaire."
  },
  {
    id: "T_CR80",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "De quand date l'appel à la résistance du général de Gaulle ?",
    a: ["Du 14 juillet 1940", "Du 18 juin 1940", "Du 11 novembre 1940", "Du 8 mai 1940"],
    correct: 1,
    explanation: "Le 18 juin 1940, depuis Londres, le général de Gaulle lance sur les ondes de la BBC un appel à poursuivre le combat contre l'Allemagne nazie, fondateur de la Résistance française."
  },
  {
    id: "T_CR81",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Pourquoi la Shoah est-elle étudiée à l'école ?",
    a: ["Pour se concentrer uniquement sur l'histoire militaire de la Seconde Guerre mondiale", "Pour transmettre la mémoire de ce génocide, comprendre ses mécanismes et prévenir toute résurgence de la haine et de l'antisémitisme", "Parce que c'est une exigence imposée par une organisation internationale sans lien avec l'histoire nationale", "Uniquement dans le cadre de cours d'histoire des religions"],
    correct: 1,
    explanation: "La Shoah est étudiée à l'école pour transmettre la mémoire de ce génocide, en comprendre les mécanismes, et prévenir toute résurgence de la haine, de l'antisémitisme et des idéologies totalitaires."
  },
  {
    id: "T_CR82",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Depuis quand les Français élisent-ils le président de la République au suffrage universel direct ?",
    a: ["Depuis 1958", "Depuis 1965", "Depuis 1981", "Depuis 1945"],
    correct: 1,
    explanation: "Depuis 1965, à la suite d'une révision constitutionnelle adoptée par référendum en 1962 à l'initiative du général de Gaulle. Charles de Gaulle avait été élu en 1958 par un collège de grands électeurs."
  },
  {
    id: "T_CR83",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle est la première étape de la construction européenne en 1951 ?",
    a: ["Le traité de Rome créant la CEE", "La création de la Communauté Européenne du Charbon et de l'Acier (CECA)", "Le traité de Maastricht", "La création de l'espace Schengen"],
    correct: 1,
    explanation: "En 1951, le traité de Paris crée la Communauté Européenne du Charbon et de l'Acier (CECA), première étape de la construction européenne, réunissant six pays dont la France et l'Allemagne."
  },
  {
    id: "T_CR84",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Durant le mandat de quel président la peine de mort a-t-elle été abolie ?",
    a: ["Charles de Gaulle", "François Mitterrand", "Valéry Giscard d'Estaing", "Jacques Chirac"],
    correct: 1,
    explanation: "François Mitterrand, élu en 1981. La loi abolissant la peine de mort a été votée le 9 octobre 1981 à l'initiative de son garde des Sceaux, Robert Badinter."
  },
  {
    id: "T_CR85",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel régime politique a été mis en place pendant la Révolution française en 1792 ?",
    a: ["La Ire République", "La monarchie constitutionnelle", "L'Empire", "La IIe République"],
    correct: 0,
    explanation: "La Ire République est proclamée le 22 septembre 1792, après l'abolition de la monarchie. Elle marque la fin du règne de Louis XVI et le début du régime républicain en France."
  },
  {
    id: "T_CR86",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "En 1944, qu'est-ce qui a changé pour les femmes ?",
    a: ["Elles ont obtenu le droit de travailler sans l'accord de leur mari", "Elles ont obtenu le droit de vote et d'éligibilité", "Elles ont obtenu le droit à la contraception", "Elles ont obtenu l'égalité salariale garantie par la loi"],
    correct: 1,
    explanation: "En 1944, l'ordonnance du général de Gaulle accorde aux femmes le droit de vote et d'éligibilité, appliqué pour la première fois lors des élections municipales d'avril 1945."
  },
  {
    id: "T_CR87",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle organisation internationale a été créée en 1945 après la Seconde Guerre mondiale ?",
    a: ["L'Union européenne", "L'Organisation des Nations unies (ONU)", "L'OTAN", "L'OMC"],
    correct: 1,
    explanation: "L'Organisation des Nations unies (ONU) a été créée en 1945, avec pour objectif de maintenir la paix et la sécurité internationales après les deux guerres mondiales."
  },
  {
    id: "T_CR88",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Où a eu lieu le débarquement des forces alliées en 1944 ?",
    a: ["En Provence uniquement", "En Normandie, le 6 juin 1944", "En Bretagne", "Dans le Nord-Pas-de-Calais"],
    correct: 1,
    explanation: "Le débarquement allié a eu lieu en Normandie le 6 juin 1944 (« D-Day »), marquant le début de la libération de la France occupée. Un second débarquement a eu lieu en Provence en août 1944."
  },
  {
    id: "T_CR89",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Que fête-t-on le 8 mai ?",
    a: ["La prise de la Bastille", "La capitulation de l'Allemagne nazie en 1945, marquant la fin de la Seconde Guerre mondiale en Europe", "La fête du Travail", "L'armistice de 1918"],
    correct: 1,
    explanation: "Le 8 mai commémore la capitulation sans conditions de l'Allemagne nazie en 1945, marquant la fin de la Seconde Guerre mondiale sur le continent européen."
  },
  {
    id: "T_CR90",
    theme: "Histoire approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel continent a été le plus concerné par la décolonisation française après la Seconde Guerre mondiale ?",
    a: ["L'Amérique du Sud", "L'Afrique et l'Asie", "L'Océanie exclusivement", "L'Europe de l'Est"],
    correct: 1,
    explanation: "L'Afrique (Maghreb, Afrique subsaharienne) et l'Asie (Indochine) ont été les continents les plus concernés par la décolonisation française, principalement entre les années 1950 et 1960."
  },
  {
    id: "T_CR91",
    theme: "Géographie approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel pays a une frontière terrestre avec la France métropolitaine au nord-est ?",
    a: ["L'Espagne", "La Belgique et l'Allemagne", "L'Italie", "Le Portugal"],
    correct: 1,
    explanation: "Au nord-est, la France métropolitaine partage des frontières terrestres avec la Belgique, le Luxembourg et l'Allemagne. L'Espagne se trouve au sud-ouest, et l'Italie au sud-est."
  },
  {
    id: "T_CR92",
    theme: "Géographie approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Lequel de ces pays partage une frontière terrestre avec la France métropolitaine ?",
    a: ["Le Portugal", "La Suisse", "Les Pays-Bas", "Le Royaume-Uni"],
    correct: 1,
    explanation: "La Suisse partage une frontière terrestre avec la France, tout comme la Belgique, le Luxembourg, l'Allemagne, l'Italie, l'Espagne, Andorre et Monaco. Le Royaume-Uni est séparé de la France par la Manche."
  },
  {
    id: "T_CR93",
    theme: "Géographie approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle mer se situe entre la France et l'Angleterre ?",
    a: ["La mer Méditerranée", "La Manche", "La mer du Nord", "La mer Baltique"],
    correct: 1,
    explanation: "La Manche sépare la France de l'Angleterre. Elle est traversée par le tunnel sous la Manche, qui relie Calais à Douvres."
  },
  {
    id: "T_CR94",
    theme: "Géographie approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle chaîne de montagnes est située entre la France et l'Espagne ?",
    a: ["Les Alpes", "Les Pyrénées", "Le Massif central", "Les Vosges"],
    correct: 1,
    explanation: "Les Pyrénées séparent la France de l'Espagne, sur environ 650 km. La principauté d'Andorre est également située dans cette chaîne de montagnes."
  },
  {
    id: "T_CR95",
    theme: "Géographie approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Qu'est-ce que la France d'outre-mer ?",
    a: ["Des anciennes colonies aujourd'hui indépendantes mais alliées de la France", "Des territoires français situés hors d'Europe (Antilles, Guyane, La Réunion, Mayotte, Pacifique...), soumis à des statuts variés", "Uniquement des territoires militaires sans population civile", "Un synonyme de l'Union européenne"],
    correct: 1,
    explanation: "La France d'outre-mer regroupe des territoires français situés hors d'Europe : départements et régions d'outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte) et collectivités d'outre-mer (Polynésie française, Nouvelle-Calédonie...), avec des statuts juridiques variés."
  },
  {
    id: "T_CR96",
    theme: "Géographie approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle île française se trouve dans l'océan Indien ?",
    a: ["La Corse", "La Réunion", "La Guadeloupe", "La Nouvelle-Calédonie"],
    correct: 1,
    explanation: "La Réunion, ainsi que Mayotte, sont des îles françaises situées dans l'océan Indien. La Corse est en Méditerranée, la Guadeloupe dans les Caraïbes, et la Nouvelle-Calédonie dans le Pacifique."
  },
  {
    id: "T_CR97",
    theme: "Géographie approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle est la population approximative de la France en 2025 ?",
    a: ["Environ 40 millions d'habitants", "Environ 68 millions d'habitants", "Environ 100 millions d'habitants", "Environ 55 millions d'habitants"],
    correct: 1,
    explanation: "La France compte environ 68 millions d'habitants en 2025 (métropole et outre-mer), selon les estimations de l'Insee."
  },
  {
    id: "T_CR98",
    theme: "Géographie approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel fleuve traverse Paris ?",
    a: ["La Loire", "La Seine", "Le Rhône", "La Garonne"],
    correct: 1,
    explanation: "La Seine traverse Paris. Elle prend sa source en Bourgogne et se jette dans la Manche au Havre, après 777 km."
  },
  {
    id: "T_CR99",
    theme: "Géographie approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Où habite la majorité des Français ?",
    a: ["Dans des zones rurales isolées", "Dans des zones urbaines et périurbaines", "Principalement en montagne", "Principalement sur les côtes uniquement"],
    correct: 1,
    explanation: "La majorité des Français vit dans des zones urbaines et périurbaines. L'Île-de-France (région parisienne) est la région la plus peuplée du pays."
  },
  {
    id: "T_CR100",
    theme: "Géographie approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle région française est la plus peuplée ?",
    a: ["Provence-Alpes-Côte d'Azur", "L'Île-de-France", "L'Occitanie", "Les Hauts-de-France"],
    correct: 1,
    explanation: "L'Île-de-France (région parisienne) est la région la plus peuplée de France, avec plus de 12 millions d'habitants."
  },
  {
    id: "T_CR101",
    theme: "Culture approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle cathédrale célèbre a été en partie détruite par un incendie en 2019 ?",
    a: ["La cathédrale de Reims", "La cathédrale Notre-Dame de Paris", "La basilique du Sacré-Cœur", "La cathédrale de Chartres"],
    correct: 1,
    explanation: "La cathédrale Notre-Dame de Paris a été gravement endommagée par un incendie le 15 avril 2019. Elle a été restaurée et rouverte au public en décembre 2024."
  },
  {
    id: "T_CR102",
    theme: "Culture approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Qui était Auguste Rodin ?",
    a: ["Un peintre impressionniste français", "Un sculpteur français, auteur du Penseur", "Un architecte du XIXe siècle", "Un écrivain naturaliste"],
    correct: 1,
    explanation: "Auguste Rodin (1840-1917) : sculpteur français, considéré comme le père de la sculpture moderne, auteur d'œuvres célèbres comme Le Penseur ou Le Baiser."
  },
  {
    id: "T_CR103",
    theme: "Culture approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Qui était Auguste Renoir ?",
    a: ["Un sculpteur du XVIIIe siècle", "Un peintre français, figure majeure du mouvement impressionniste", "Un philosophe des Lumières", "Un compositeur d'opéra"],
    correct: 1,
    explanation: "Pierre-Auguste Renoir (1841-1919) : peintre français, l'une des figures majeures du mouvement impressionniste, connu pour ses scènes de vie et ses portraits lumineux."
  },
  {
    id: "T_CR104",
    theme: "Culture approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Qui était Marguerite Yourcenar ?",
    a: ["Une chanteuse populaire du XXe siècle", "Une écrivaine française, première femme élue à l'Académie française", "Une résistante devenue ministre", "Une exploratrice polaire"],
    correct: 1,
    explanation: "Marguerite Yourcenar (1903-1987) : écrivaine, première femme élue à l'Académie française en 1980, auteure notamment des Mémoires d'Hadrien."
  },
  {
    id: "T_CR105",
    theme: "Culture approfondie — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel est le classement de la langue française parmi les langues les plus parlées dans le monde ?",
    a: ["Elle figure parmi les cinq langues les plus parlées au monde", "Elle n'est parlée que dans un seul pays", "Elle est la langue la plus parlée au monde", "Elle est parlée uniquement en Europe"],
    correct: 0,
    explanation: "Le français figure parmi les cinq langues les plus parlées au monde, en tenant compte du nombre de locuteurs répartis sur les cinq continents grâce à la Francophonie."
  },

  // --- Vivre dans la société française (approfondi) ---
  {
    id: "T_CR106",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel mariage est reconnu par l'État ?",
    a: ["Uniquement le mariage religieux célébré dans un lieu de culte", "Uniquement le mariage civil célébré devant un officier d'état civil, en mairie", "Le mariage coutumier célébré selon les traditions du pays d'origine", "Tout engagement mutuel entre deux personnes, sans formalité"],
    correct: 1,
    explanation: "Seul le mariage civil, célébré devant un officier d'état civil en mairie, est reconnu juridiquement par l'État français. Une cérémonie religieuse peut avoir lieu ensuite, mais elle n'a pas de valeur légale en elle-même."
  },
  {
    id: "T_CR107",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Auprès de quelle institution les parents peuvent-ils inscrire leur enfant à l'école publique ?",
    a: ["Auprès du tribunal judiciaire", "Auprès de la mairie de leur domicile", "Auprès de la préfecture", "Auprès du rectorat uniquement"],
    correct: 1,
    explanation: "Les parents inscrivent leur enfant auprès de la mairie de leur domicile, qui les oriente ensuite vers l'école publique correspondant à leur secteur."
  },
  {
    id: "T_CR108",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "En cas de divorce, qui exerce l'autorité parentale ?",
    a: ["Automatiquement le père", "En principe, les deux parents continuent à l'exercer conjointement, sauf décision contraire du juge", "Automatiquement la mère si l'enfant a moins de 10 ans", "Elle disparaît dès le prononcé du divorce"],
    correct: 1,
    explanation: "En principe, les deux parents continuent à exercer conjointement l'autorité parentale après le divorce, dans l'intérêt de l'enfant, sauf décision contraire du juge aux affaires familiales."
  },
  {
    id: "T_CR109",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle aide permet aux personnes ayant des difficultés financières d'avoir un avocat ?",
    a: ["Le RSA", "L'aide juridictionnelle", "L'Aide Médicale d'État (AME)", "La prime d'activité"],
    correct: 1,
    explanation: "L'aide juridictionnelle permet, sous conditions de ressources, la prise en charge totale ou partielle des frais d'avocat et de justice pour les personnes disposant de faibles revenus."
  },
  {
    id: "T_CR110",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Où faut-il déclarer la naissance d'un enfant ?",
    a: ["Au commissariat de police", "À la mairie du lieu de naissance, dans les 5 jours", "À la préfecture", "À la Caisse d'allocations familiales uniquement"],
    correct: 1,
    explanation: "La naissance doit être déclarée à la mairie du lieu de naissance, dans les 5 jours suivant l'accouchement, afin d'établir l'acte de naissance."
  },
  {
    id: "T_CR111",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle est l'une des conditions pour passer l'examen du permis de conduire ?",
    a: ["Être titulaire d'un diplôme universitaire", "Avoir suivi une formation dans une auto-école agréée et réussir l'épreuve théorique (code) puis pratique (conduite)", "Posséder déjà un véhicule immatriculé à son nom", "Avoir un casier judiciaire totalement vierge"],
    correct: 1,
    explanation: "Il faut suivre une formation dans une auto-école agréée, réussir l'épreuve théorique générale (le « code »), puis l'épreuve pratique de conduite."
  },
  {
    id: "T_CR112",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Un bail locatif est valide s'il est :",
    a: ["Uniquement un accord oral entre les deux parties", "Écrit et signé par le propriétaire et le locataire, précisant les conditions de la location", "Signé uniquement par le locataire", "Validé par la mairie avant toute signature"],
    correct: 1,
    explanation: "Un bail locatif doit être écrit et signé par le propriétaire (bailleur) et le locataire, précisant la durée, le loyer et les conditions de la location, conformément à la loi."
  },
  {
    id: "T_CR113",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Où peut-on déposer un lave-vaisselle cassé ?",
    a: ["Sur le trottoir devant son domicile", "Dans une déchetterie, ou le faire enlever via un service de collecte des encombrants", "Dans une poubelle de tri classique", "Dans une benne à verre"],
    correct: 1,
    explanation: "Un appareil électroménager cassé doit être déposé dans une déchetterie, ou faire l'objet d'une collecte d'encombrants organisée par la commune. L'abandon sur la voie publique est une infraction."
  },
  {
    id: "T_CR114",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel numéro d'urgence permet d'appeler la police ?",
    a: ["Le 15", "Le 17", "Le 18", "Le 119"],
    correct: 1,
    explanation: "Le 17 permet d'appeler la police ou la gendarmerie. Le 15 est réservé au SAMU, le 18 aux pompiers, et le 112 est le numéro d'urgence européen unique."
  },
  {
    id: "T_CR115",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "À qui est accessible la contraception en France ?",
    a: ["Uniquement aux personnes mariées", "À toute personne, y compris les mineures, avec un accès facilité et parfois gratuit selon l'âge", "Uniquement aux personnes majeures", "Uniquement sur autorisation parentale, quel que soit l'âge"],
    correct: 1,
    explanation: "La contraception est accessible à toute personne en France, y compris les mineures, avec un accès facilité (délivrance sans ordonnance pour certains moyens) et une gratuité pour les mineures et les jeunes femmes selon les dispositifs en vigueur."
  },
  {
    id: "T_CR116",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Qu'est-ce que le principe de confidentialité dans le domaine de la santé ?",
    a: ["L'obligation pour le médecin de transmettre les informations médicales à l'employeur", "Le secret médical, qui protège les informations relatives à la santé d'un patient et s'impose aux professionnels de santé", "Un droit réservé aux patients de nationalité française", "L'interdiction pour un patient de consulter son propre dossier médical"],
    correct: 1,
    explanation: "Le principe de confidentialité renvoie au secret médical, qui protège les informations relatives à la santé d'un patient. Il s'impose à tous les professionnels de santé et ne peut être levé que dans des cas très encadrés par la loi."
  },
  {
    id: "T_CR117",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "L'inscription à l'Assurance maladie est :",
    a: ["Facultative pour les personnes ayant une mutuelle privée", "Obligatoire pour toute personne résidant en France de manière stable et régulière", "Réservée aux salariés en contrat à durée indéterminée", "Payante et optionnelle selon les revenus"],
    correct: 1,
    explanation: "L'affiliation à l'Assurance maladie (Sécurité sociale) est obligatoire pour toute personne résidant en France de manière stable et régulière, qu'elle travaille ou non."
  },
  {
    id: "T_CR118",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Qui peut demander un congé parental d'éducation ?",
    a: ["Uniquement la mère de l'enfant", "Tout salarié, homme ou femme, ayant un an d'ancienneté, à l'occasion d'une naissance ou d'une adoption", "Uniquement les fonctionnaires titulaires", "Uniquement les parents de plus de trois enfants"],
    correct: 1,
    explanation: "Tout salarié, homme ou femme, justifiant d'un an d'ancienneté dans l'entreprise, peut demander un congé parental d'éducation à l'occasion d'une naissance ou d'une adoption."
  },
  {
    id: "T_CR119",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelles sont les affaires traitées par le conseil de prud'hommes ?",
    a: ["Les litiges entre particuliers portant sur un bail locatif", "Les litiges individuels entre un salarié et son employeur, liés au contrat de travail", "Les infractions pénales graves", "Les litiges entre deux entreprises commerciales"],
    correct: 1,
    explanation: "Le conseil de prud'hommes est une juridiction spécialisée qui traite les litiges individuels entre un salarié et son employeur, liés à l'exécution ou à la rupture du contrat de travail."
  },
  {
    id: "T_CR120",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Travailler sans être déclaré est :",
    a: ["Autorisé pour des missions ponctuelles de moins d'une semaine", "Illégal (travail dissimulé), sanctionné pénalement et privant le salarié de ses droits sociaux", "Légal si l'employeur paie l'employé en espèces", "Toléré pour les emplois à domicile"],
    correct: 1,
    explanation: "Travailler sans être déclaré constitue un travail dissimulé, illégal et sanctionné pénalement pour l'employeur comme pour le salarié. Cela prive aussi ce dernier de ses droits sociaux (retraite, chômage, maladie, accident du travail)."
  },
  {
    id: "T_CR121",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Lorsqu'un employeur veut qu'un salarié travaille plus longtemps que la durée prévue dans le contrat de travail :",
    a: ["Il peut l'imposer librement et sans compensation", "Il doit respecter les règles encadrant les heures supplémentaires (accord du salarié le cas échéant, majoration de salaire ou repos compensateur)", "Le salarié n'a aucun recours possible", "Cela ne concerne que les cadres, non les autres salariés"],
    correct: 1,
    explanation: "Les heures supplémentaires sont encadrées par la loi : elles doivent en général respecter des limites, donner lieu à une majoration de salaire ou à un repos compensateur, dans les conditions prévues par le Code du travail ou la convention collective."
  },
  {
    id: "T_CR122",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelle est la mission de France Travail ?",
    a: ["Fixer le montant du SMIC chaque année", "Accompagner les demandeurs d'emploi, verser les allocations chômage et aider les employeurs à recruter", "Délivrer les titres de séjour", "Gérer exclusivement la formation des fonctionnaires"],
    correct: 1,
    explanation: "France Travail (anciennement Pôle emploi) accompagne les personnes en recherche d'emploi, verse les allocations chômage aux ayants droit, et aide les employeurs dans leurs recrutements."
  },
  {
    id: "T_CR123",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Dans une entreprise, le droit syndical permet :",
    a: ["Aux salariés de se regrouper au sein d'un syndicat pour défendre collectivement leurs intérêts professionnels", "Uniquement à l'employeur de créer un syndicat", "De remplacer le contrat de travail individuel", "D'obtenir automatiquement une augmentation de salaire"],
    correct: 0,
    explanation: "Le droit syndical permet aux salariés de se regrouper librement au sein d'un syndicat pour défendre collectivement leurs intérêts professionnels, négocier des accords et être représentés face à l'employeur."
  },
  {
    id: "T_CR124",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Dans une entreprise, le droit de grève autorise :",
    a: ["Les salariés à cesser collectivement le travail pour défendre leurs revendications professionnelles, dans un cadre légal", "Les salariés à ne plus jamais revenir travailler après l'arrêt", "L'employeur à licencier immédiatement les grévistes", "Uniquement les cadres à interrompre leur activité"],
    correct: 0,
    explanation: "Le droit de grève, garanti par la Constitution, autorise les salariés à cesser collectivement le travail pour défendre des revendications professionnelles, dans un cadre légal encadré (notamment un préavis dans certains secteurs)."
  },
  {
    id: "T_CR125",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quelles sont les conditions pour toucher les allocations chômage ?",
    a: ["Il suffit d'être majeur et résider en France", "Avoir travaillé un nombre minimum d'heures ou de jours, être inscrit comme demandeur d'emploi et rechercher activement un travail", "Avoir été licencié pour faute grave", "Ne jamais avoir travaillé auparavant"],
    correct: 1,
    explanation: "Pour toucher les allocations chômage, il faut avoir travaillé un nombre minimum d'heures ou de jours sur une période de référence, être inscrit comme demandeur d'emploi auprès de France Travail, et rechercher activement un emploi."
  },
  {
    id: "T_CR126",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Qu'est-ce que l'école maternelle ?",
    a: ["Un mode de garde payant réservé aux enfants de cadres", "Le premier niveau de l'enseignement scolaire, accueillant les enfants dès 3 ans, devenu obligatoire depuis 2019", "Un établissement facultatif réservé aux enfants en situation de handicap", "Un service géré uniquement par des associations privées"],
    correct: 1,
    explanation: "L'école maternelle est le premier niveau de l'enseignement scolaire en France. Depuis la loi de 2019, l'instruction est obligatoire dès l'âge de 3 ans, ce qui rend la scolarisation en maternelle obligatoire à partir de cet âge."
  },
  {
    id: "T_CR127",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Comment s'appelle le diplôme passé par les élèves à la fin du collège ?",
    a: ["Le baccalauréat", "Le diplôme national du brevet (DNB)", "Le certificat d'études primaires", "Le CAP"],
    correct: 1,
    explanation: "Le diplôme national du brevet (DNB), plus couramment appelé « brevet des collèges », est passé par les élèves en classe de 3e, à la fin du collège."
  },
  {
    id: "T_CR128",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Les parents d'élève ont le droit de :",
    a: ["Choisir librement les enseignants de leur enfant", "Être informés de la scolarité de leur enfant et de participer, via des représentants élus, à la vie de l'établissement", "Assister à toutes les classes sans en informer l'établissement", "Modifier eux-mêmes le contenu des programmes scolaires"],
    correct: 1,
    explanation: "Les parents d'élève ont le droit d'être informés de la scolarité de leur enfant et de participer à la vie de l'établissement, notamment par l'intermédiaire de représentants élus au conseil d'école ou au conseil d'administration."
  },
  {
    id: "T_CR129",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Qui peut manger à la cantine scolaire ?",
    a: ["Uniquement les enfants de nationalité française", "Tout enfant scolarisé dans l'établissement, sous réserve des places disponibles et des règles fixées par la collectivité", "Uniquement les enfants dont les deux parents travaillent", "Uniquement les enfants du primaire, jamais ceux du collège"],
    correct: 1,
    explanation: "Tout enfant scolarisé dans l'établissement peut en principe accéder à la cantine scolaire, sous réserve des places disponibles et des modalités d'inscription fixées par la commune ou la collectivité gestionnaire."
  },
  {
    id: "T_CR130",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "À quel âge commence l'instruction obligatoire des enfants en France ?",
    a: ["À 6 ans", "À 3 ans", "À 5 ans", "À 4 ans"],
    correct: 1,
    explanation: "Depuis la loi « pour une école de la confiance » de 2019, l'instruction est obligatoire dès l'âge de 3 ans, et non plus 6 ans comme auparavant."
  },
  {
    id: "T_CR131",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel est l'âge de la majorité en France ?",
    a: ["16 ans", "18 ans", "21 ans", "20 ans"],
    correct: 1,
    explanation: "L'âge de la majorité légale est fixé à 18 ans en France. À cet âge, une personne acquiert la pleine capacité juridique (vote, contrats, responsabilité pénale majeure, etc.)."
  },
  {
    id: "T_CR132",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "À l'école, il est interdit aux parents de :",
    a: ["S'inscrire aux réunions d'information organisées par l'établissement", "Intervenir directement pour régler un différend entre enfants au sein de l'établissement, sans passer par l'équipe éducative", "Voter aux élections des représentants de parents d'élèves", "Demander un rendez-vous avec un enseignant"],
    correct: 1,
    explanation: "Il est interdit aux parents d'intervenir directement au sein de l'établissement pour régler un différend entre enfants : toute difficulté doit être signalée à l'équipe éducative, seule habilitée à intervenir."
  },
  {
    id: "T_CR133",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Quel motif d'absence est accepté par l'école ?",
    a: ["Un départ en vacances hors des périodes scolaires pour éviter la foule", "Une maladie de l'enfant, justifiée par un certificat médical si nécessaire", "Un désaccord des parents avec un enseignant", "Une simple convenance personnelle sans justificatif"],
    correct: 1,
    explanation: "La maladie de l'enfant, justifiée le cas échéant par un certificat médical, est un motif d'absence accepté par l'école. Les absences pour convenance personnelle ne sont en principe pas autorisées."
  },
  {
    id: "T_CR134",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "Des parents ne respectent pas l'obligation d'instruction pour leurs enfants. Quelle sanction maximale risquent-ils ?",
    a: ["Une simple lettre d'avertissement sans autre conséquence", "Des poursuites pénales pouvant aller jusqu'à une amende et une peine d'emprisonnement", "La perte automatique de l'autorité parentale sans procédure", "Aucune sanction n'est prévue par la loi"],
    correct: 1,
    explanation: "Le non-respect de l'obligation d'instruction peut entraîner des poursuites pénales, avec des sanctions pouvant aller jusqu'à une amende et une peine d'emprisonnement, en plus d'un accompagnement social préalable des familles."
  },
  {
    id: "T_CR135",
    theme: "Vivre en société approfondi — niveau CR", macro: "Thème 6 — Niveau carte de résident",
    q: "À l'école, un enfant en situation de handicap :",
    a: ["Ne peut pas être scolarisé dans une école ordinaire", "A le droit d'être scolarisé, si possible en milieu ordinaire, avec les aménagements et accompagnements nécessaires", "Doit obligatoirement être scolarisé dans un établissement spécialisé privé", "N'a accès à l'instruction qu'à partir de 6 ans"],
    correct: 1,
    explanation: "Un enfant en situation de handicap a le droit d'être scolarisé, en priorité en milieu ordinaire, avec les aménagements et accompagnements nécessaires (AESH, matériel adapté...), conformément au principe d'école inclusive."
  },

];

// ==========================================
// ⚙️ GESTION DU SYSTÈME ET DU JEU
// ==========================================
let examQuestions = []; 
let current = 0;
let score = 0;
let time = 900; // chrono global
let timer;
let currentMode = ""; 

let sessionErrors = []; 

// --- Niveau de difficulté ---
// Les 2 niveaux utilisent désormais les 4 choix rédigés à la main pour
// chaque question dans DATABASE_QUESTIONS. Seule différence : le mode
// "difficile" ajoute un chrono par question et réduit le temps global.
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

  let vus = JSON.parse(localStorage.getItem('civique_vus')) || [];
  let erreursGlobales = JSON.parse(localStorage.getItem('civique_erreurs')) || [];

  if (mode === 'suivi') {
    let nonVues = DATABASE_QUESTIONS.filter(q => !vus.includes(q.id));
    
    if (nonVues.length === 0) {
      alert("🎉 Félicitations ! Vous avez traité 100% des questions du code. Utilisez le bouton en bas pour réinitialiser la mémoire et tout refaire.");
      return;
    }
    
    nonVues.sort(() => Math.random() - 0.5);
    examQuestions = nonVues.slice(0, 40);

  } else if (mode === 'flash') {
    let copieBase = [...DATABASE_QUESTIONS];
    copieBase.sort(() => Math.random() - 0.5);
    examQuestions = copieBase.slice(0, 40);

  } else if (mode === 'erreurs') {
    examQuestions = DATABASE_QUESTIONS.filter(q => erreursGlobales.includes(q.id));
    examQuestions.sort(() => Math.random() - 0.5);

  } else if (mode === 'cr') {
    // Questions avancées, spécifiques au niveau carte de résident
    let poolCR = DATABASE_QUESTIONS.filter(q => q.macro === "Thème 6 — Niveau carte de résident");
    poolCR.sort(() => Math.random() - 0.5);
    examQuestions = poolCR.slice(0, 40);
  }

  // Initialisation des éléments de l'affichage détaillé des compteurs
  document.getElementById("score-bon").innerText = 0;
  document.getElementById("score-faux").innerText = 0;
  document.getElementById("score-repondu").innerText = 0;
  document.getElementById("current-total-q").innerText = examQuestions.length;
  document.getElementById("timer").innerText = time;

  let badge = document.getElementById("diff-badge");
  if (badge) {
    if (mode === "cr") {
      badge.innerText = difficulte === "difficile" ? "Niveau CR · Chrono" : "Niveau CR";
      badge.style.display = "inline-block";
    } else if (difficulte === "difficile") {
      badge.innerText = "Mode difficile";
      badge.style.display = "inline-block";
    } else {
      badge.style.display = "none";
    }
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

  // 🔀 Créer un tableau d'objets pour mélanger les 4 réponses sans perdre l'index de la bonne
  let reponsesMelangees = q.a.map((reponse, index) => {
    return { texte: reponse, estBonne: index === q.correct };
  });

  // Secouer l'ordre des réponses au hasard
  reponsesMelangees.sort(() => Math.random() - 0.5);

  let dejaRepondu = false;

  // Fonction commune : traite une réponse (clic réel OU temps écoulé)
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
      // Colorer la bonne réponse, où qu'elle se trouve
      reponsesMelangees.forEach((recherche, indexRecherche) => {
        if (recherche.estBonne) {
          allButtons[indexRecherche].classList.add("correct-ans");
        }
      });
      sessionErrors.push(q.id);
    }

    // Sauvegarde en direct (Mode Suivi Continu)
    if (currentMode === 'suivi') {
      let vus = JSON.parse(localStorage.getItem('civique_vus')) || [];
      if (!vus.includes(q.id)) {
        vus.push(q.id);
        localStorage.setItem('civique_vus', JSON.stringify(vus));
      }
    }

    // Mise à jour des compteurs visuels
    document.getElementById("score-bon").innerText = score;
    document.getElementById("score-faux").innerText = sessionErrors.length;
    document.getElementById("score-repondu").innerText = current + 1;

    // Affichage du feedback
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

  // Générer les boutons avec l'ordre aléatoire
  reponsesMelangees.forEach((item) => {
    let btn = document.createElement("button");
    btn.innerText = item.texte;
    btn.classList.add("answer-btn");
    btn.onclick = () => traiterReponse(item, btn);
    answersDiv.appendChild(btn);
  });

  // Chrono par question (mode difficile uniquement)
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
    // forcer le reflow pour que la transition suivante reparte bien de 100%
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
    
    if (currentMode === 'suivi' || currentMode === 'erreurs' || currentMode === 'cr') {
      let erreursGlobales = JSON.parse(localStorage.getItem('civique_erreurs')) || [];

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
      localStorage.setItem('civique_erreurs', JSON.stringify(erreursGlobales));
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

  if (currentMode === 'suivi' || currentMode === 'erreurs' || currentMode === 'cr') {
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
