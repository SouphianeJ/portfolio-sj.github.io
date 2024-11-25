new Vue({
    el: '#app',
    data: {
        pedaproject: [
            {
                modalId: 'amcModal',
                title: 'Projet AMC',
                text: 'Mise en place de la correction automatisée de QCM pour les examens papier, avec développement d\'outils en Python et VBA. Ce projet a permis de réduire le temps de correction de 45 jours par session.',
                modalTitle: 'Projet AMC - Auto Multiple Choice',
                modalContent: `
                    <p>Auto Multiple Choice (AMC) est un logiciel open source facilitant la création, la gestion et la correction automatisée de QCM...</p>
                    <h5>Étapes du projet</h5>
                    <ul>
                        <li><strong>Analyse des besoins :</strong> Identification des exigences pédagogiques et contraintes techniques.</li>
                        <li><strong>Installation et configuration :</strong> Déploiement et paramétrage d'AMC selon les besoins spécifiques des utilisateurs.</li>
                        <li><strong>Formation des utilisateurs :</strong> Création de tutoriels et organisation d’ateliers pratiques pour le personnel.</li>
                        <li><strong>Automatisation :</strong> Développement de scripts en Python et VBA pour la génération de QCM et le traitement des résultats.</li>
                        <li><strong>Support et maintenance :</strong> Assistance technique et mise à jour régulière pour assurer une utilisation optimale.</li>
                    </ul>
                    <h5>Résultats obtenus</h5>
                    <ul>
                        <li><strong>Efficacité accrue :</strong> Réduction significative du temps de correction des QCM.</li>
                        <li><strong>Précision améliorée :</strong> Élimination des erreurs humaines, garantissant une évaluation juste des étudiants.</li>
                        <li><strong>Satisfaction des utilisateurs :</strong> Retour positif des enseignants et des étudiants sur la rapidité et la fiabilité du processus.</li>
                    </ul>
                `
            },
            {
                modalId: 'MoodleModal',
                title: 'Création de tutoriels et formation sur Moodle',
                text: 'Création de tutoriels et supports pédagogiques pour la prise en main d’eCampus, utilisés par plus de 80 000 utilisateurs pour renforcer les compétences numériques des enseignants.',
                modalTitle: 'Création de tutoriels et formation sur Moodle',
                modalContent: `
                    <p>
                        Concevoir, organiser, et animer des sessions de formation pour l'utilisation de la plateforme eCampus, le LMS de l’Université Paris-Saclay. L'objectif était de faciliter la prise en main de l'outil par les enseignants et le personnel administratif, afin d’optimiser leurs pratiques pédagogiques numériques et de renforcer la qualité de l’apprentissage en ligne.
                    </p>
                    <h5>Étapes clés du projet</h5>
                    <ul>
                        <li><strong>Analyse des besoins des utilisateurs :</strong> Identification des compétences numériques à renforcer et des fonctionnalités clés d’eCampus nécessitant des tutoriels dédiés.</li>
                        <li><strong>Création de ressources pédagogiques :</strong> Conception de guides et tutoriels PDF et vidéo couvrant des fonctionnalités variées comme la gestion des cours, la création de QCM, et l’utilisation des outils collaboratifs.</li>
                        <li><strong>Organisation de formations :</strong> Mise en place de sessions de formation hebdomadaires, adaptées aux différents niveaux des utilisateurs.</li>
                        <li><strong>Support et assistance continue :</strong> Création d’un espace de support eCampus avec documentation centralisée et FAQ pour une assistance personnalisée.</li>
                        <li><strong>Évaluation et amélioration continue :</strong> Collecte de retours et ajustement des supports en fonction des besoins exprimés.</li>
                    </ul>
                `
            },
            {
                modalId: 'pdfExcelModal',
                title: 'Outils de traitement automatisé pour PDF et Excel',
                text: 'Développement de scripts VBA et Python pour automatiser des actions en lots sur PDF et Excel, optimisant les tâches administratives et pédagogiques répétitives.',
                modalTitle: 'Outils de traitement automatisé pour PDF et Excel',
                modalContent: `
                    <p>
                        Ce projet a consisté à concevoir des scripts et outils personnalisés pour automatiser le traitement de fichiers PDF et Excel, afin de gagner en efficacité dans la gestion des documents administratifs et éducatifs. L’objectif était de simplifier des tâches répétitives, réduire les erreurs humaines, et libérer du temps pour des activités à forte valeur ajoutée.
                    </p>
                    <h5>Étapes clés du projet</h5>
                    <ul>
                        <li><strong>Analyse des besoins spécifiques :</strong> Identification des processus manuels avec PDF et Excel, et des besoins des utilisateurs en matière de traitement de données.</li>
                        <li><strong>Développement de scripts en VBA et Python :</strong> Création de scripts pour automatiser le découpage de PDF, publipostage de notes, et importation en lot dans Apogée.</li>
                        <li><strong>Personnalisation et tests :</strong> Ajustement des scripts pour répondre aux besoins spécifiques des utilisateurs et tests approfondis.</li>
                        <li><strong>Formation des utilisateurs :</strong> Création de guides et sessions de formation pour une utilisation autonome des outils.</li>
                        <li><strong>Support et maintenance continue :</strong> Assistance technique et mises à jour pour répondre aux nouvelles demandes.</li>
                    </ul>
                    <h5>Résultats obtenus</h5>
                    <ul>
                        <li><strong>Gain de temps significatif :</strong> Réduction considérable du temps consacré aux tâches de traitement de fichiers, notamment lors des examens.</li>
                        <li><strong>Réduction des erreurs humaines :</strong> Automatisation des processus, garantissant une précision optimale.</li>
                        <li><strong>Autonomie accrue :</strong> Les utilisateurs peuvent désormais gérer ces tâches de manière indépendante, augmentant ainsi leur productivité.</li>
                    </ul>
                `
            },
            {  modalId: 'videoHycare',
                title: 'Vidéo Projet Hycare',
                text: 'Capsules vidéos de vulgarisation et explications de concepts scientifiques en physiologie',
                modalTitle: 'Capsules vidéos de vulgarisation avec le Rapidmooc',
                modalContent:
               ` <p>
                    Ce projet avait pour objectif de produire une série de capsules vidéo pour les cours de physiologie, permettant aux étudiants de revoir les travaux pratiques (TP) et de mieux comprendre des notions complexes. En intégrant des démonstrations filmées et des animations illustratives, les vidéos visaient à renforcer l’apprentissage en permettant aux étudiants d’observer les procédures des TP, de manière à mieux assimiler les concepts de physiologie.
                </p>
                
                <h5>Étapes clés du projet</h5>
                <ul>
                    <li><strong>Recueil des images et écriture des scripts :</strong> En collaboration avec un doctorant, nous avons rédigé les scripts des vidéos pour structurer chaque concept en fonction des besoins pédagogiques identifiés. L’accent a été mis sur les points critiques, souvent difficiles à aborder en présentiel, afin de cibler les besoins spécifiques des étudiants.</li>
                    
                    <li><strong>Filmage et création de contenu :</strong> J’ai assuré le filmage de démonstrations avec le dispositif Rapidmooc, et j’ai également accompagné le doctorant dans la prise de ses propres vidéos. Rapidmooc, avec son interface simple et ses outils de prompteur intégrés, a facilité la production de vidéos pédagogiques de qualité.</li>
                    
                    <li><strong>Conception des schémas et animations :</strong> J’ai travaillé avec un prestataire pour la réalisation des animations. À partir des schémas que nous avons créés, j’ai défini un cahier des charges précis pour guider le prestataire dans l’animation des concepts physiologiques, afin de renforcer la compréhension visuelle des étudiants.</li>
                    
                    <li><strong>Montage et finalisation des vidéos :</strong> J’ai pris en charge plusieurs étapes du montage avec le logiciel Camtasia, intégrant les éléments animés et filmés pour créer une continuité visuelle et rendre le contenu plus fluide.</li>
                </ul>
                
                <h5>Résultats obtenus</h5>
                <ul>
                    <li><strong>Renforcement de l’apprentissage par l'action :</strong> Les vidéos ont permis aux étudiants de revoir les TP et d’observer les procédures en détail, ce qui a facilité la compréhension des notions plus complexes.</li>
                    <li><strong>Engagement des étudiants :</strong> Le format court et visuel des vidéos a soutenu l’engagement des étudiants, leur offrant la possibilité de réviser les démonstrations à leur rythme.</li>
                    <li><strong>Retour positif des enseignants et étudiants :</strong> Les vidéos ont été bien accueillies comme complément aux cours, et ce type de support a suscité un intérêt pour des initiatives similaires dans d’autres disciplines.</li>
                </ul>
                
                <p>
                    Ce projet a permis d'introduire de nouveaux supports visuels dans les cours de physiologie en s’appuyant sur des outils multimédia. Mon rôle a couvert l’ensemble du processus, de l’écriture des scripts et du filmage, à la supervision des animations et au montage final.
                </p>`
            }
                
            // Ajoutez d'autres projets si nécessaire
        ],
    
  
        techProjects: [
            {
                modalId: 'alphaModal',
                title: 'Projet Alpha',
                text: 'Développement d\'une API en Node.js pour gérer des flux de données complexes avec une sécurité avancée.',
                modalTitle: 'Projet Alpha - Développement d\'une API en Node.js',
                modalContent: `
                    <p>
                        Le Projet Alpha consiste en la création d'une API robuste en Node.js destinée à gérer des flux de données complexes tout en assurant un haut niveau de sécurité.
                    </p>
                    <h5>Caractéristiques principales</h5>
                    <ul>
                        <li><strong>Gestion des flux de données :</strong> Mise en place de mécanismes efficaces pour traiter de grandes quantités de données en temps réel.</li>
                        <li><strong>Sécurité avancée :</strong> Implémentation de protocoles de sécurité tels que OAuth2, JWT, et chiffrement des données sensibles.</li>
                        <li><strong>Scalabilité :</strong> Architecture conçue pour s'adapter à une croissance rapide du volume de données et du nombre d'utilisateurs.</li>
                    </ul>
                    <h5>Technologies utilisées</h5>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>Redis</li>
                    </ul>
                `
            },
            {
                modalId: 'betaModal',
                title: 'Projet Beta',
                text: 'Création d\'une interface utilisateur en React.js avec une optimisation des performances et un design responsive.',
                modalTitle: 'Projet Beta - Interface utilisateur en React.js',
                modalContent: `
                    <p>
                        Le Projet Beta vise à développer une interface utilisateur moderne et responsive en utilisant React.js, en mettant l'accent sur l'optimisation des performances et l'expérience utilisateur.
                    </p>
                    <h5>Points forts du projet</h5>
                    <ul>
                        <li><strong>Design responsive :</strong> Adaptabilité de l'interface à différents types d'écrans (mobile, tablette, desktop).</li>
                        <li><strong>Optimisation des performances :</strong> Utilisation de techniques telles que le code splitting, lazy loading, et optimisation des rendus pour améliorer la vitesse de l'application.</li>
                        <li><strong>Expérience utilisateur :</strong> Création d'une navigation intuitive et interactive pour améliorer l'engagement des utilisateurs.</li>
                    </ul>
                    <h5>Technologies utilisées</h5>
                    <ul>
                        <li>React.js</li>
                        <li>Redux</li>
                        <li>Webpack</li>
                        <li>Sass</li>
                    </ul>
                `
            },
            {
            modalId: 'resamatModal',
                title: 'Développement et déploiement de la plateforme Resamat',
                text: 'Conception et déploiement d’une plateforme en PHP et SQL pour la gestion centralisée des ressources pédagogiques, avec résolution de conflits de réservations et suivi des emprunts.',
                modalTitle: 'Développement et déploiement de la plateforme Resamat',
                modalContent: `
                    <p>
                        Ce projet avait pour objectif de développer et de déployer la plateforme Resamat, une solution en ligne permettant aux enseignants, étudiants et personnels de l’Université Paris-Saclay de gérer la réservation de ressources pédagogiques (salles de cours, matériel spécifique, équipements scientifiques). Conçue en PHP avec une base de données SQL, Resamat offre une interface intuitive pour centraliser la gestion des ressources et prévenir les conflits de réservation.
                    </p>
                    
                    <h5>Étapes clés du projet</h5>
                    <ul>
                        <li><strong>1. Analyse des besoins et spécifications techniques :</strong> Identification des besoins spécifiques des utilisateurs pour définir les fonctionnalités essentielles, telles que les règles de réservation, les restrictions d’accès, et les droits des utilisateurs.</li>
                        
                        <li><strong>2. Développement backend en PHP et SQL avec sécurité renforcée :</strong>
                            <ul>
                                <li>Création d’une structure de base de données en SQL pour stocker les informations relatives aux ressources, utilisateurs et réservations.</li>
                                <li>Stockage sécurisé des éléments d’authentification : Mise en place d’un système de stockage hashé des identifiants et mots de passe des utilisateurs pour garantir la sécurité des données.</li>
                                <li>Développement d’une logique backend pour gérer les règles d’accès, valider la disponibilité des ressources en temps réel, et exécuter des transactions sécurisées pour éviter toute corruption de données.</li>
                            </ul>
                        </li>
                        
                        <li><strong>3. Formulaire de réservation avec gestion des conflits :</strong>
                            <ul>
                                <li>Création d’un formulaire de réservation en ligne permettant aux utilisateurs de choisir leurs ressources et créneaux horaires.</li>
                                <li>Résolution des conflits de disponibilité : Le formulaire vérifie la disponibilité des ressources en temps réel pour éviter les doubles réservations, et propose des créneaux alternatifs en cas de conflit.</li>
                            </ul>
                        </li>
                        
                        <li><strong>4. Suivi des emprunts et processus d’acceptation :</strong>
                            <ul>
                                <li>Suivi détaillé des emprunts de matériels, avec un historique des utilisateurs et des équipements.</li>
                                <li>Processus de validation par e-mail : Après une demande de réservation, un e-mail est automatiquement envoyé au responsable du matériel pour validation. Une fois approuvé, l’utilisateur reçoit une notification par e-mail confirmant la réservation.</li>
                            </ul>
                        </li>
                        
                        <li><strong>5. Interface utilisateur avec vues tableau et calendrier :</strong>
                            <ul>
                                <li>Développement d’une interface intuitive avec vue tableau et calendrier pour faciliter la visualisation des disponibilités et la gestion des emprunts par date, permettant aux utilisateurs de choisir facilement leurs créneaux et d’éviter les conflits de réservation.</li>
                            </ul>
                        </li>
                        
                        <li><strong>6. Formation des utilisateurs et documentation technique :</strong> Rédaction de guides d’utilisation pour les utilisateurs finaux et de documentation technique pour les administrateurs, avec des sessions de formation pour assurer une prise en main rapide de la plateforme.</li>
                    </ul>
                    
                    <h5>Résultats obtenus</h5>
                    <ul>
                        <li><strong>Optimisation de la gestion des ressources :</strong> La structure en SQL et les règles de gestion en PHP ont permis d’optimiser l’utilisation des ressources pédagogiques, en évitant les doubles réservations et en assurant un suivi précis de l’occupation des équipements.</li>
                        <li><strong>Amélioration de l’efficacité et gain de temps :</strong> Grâce aux fonctionnalités de gestion avancée et à l’automatisation du processus de réservation et de validation, les utilisateurs ont pu accéder rapidement aux ressources sans interventions manuelles répétitives.</li>
                        <li><strong>Retour positif et adoption généralisée :</strong> La flexibilité et l’efficacité de Resamat ont encouragé une large adoption parmi les enseignants et étudiants, avec des retours positifs sur la simplicité et la performance de l’interface.</li>
                    </ul>
                    
                    <p>
                        Ce projet a mis en évidence l’importance de l’automatisation et de la centralisation dans la gestion des ressources pédagogiques. Mon rôle a été de superviser le développement en PHP et SQL, de concevoir la base de données, de développer les fonctionnalités backend et frontend, et d’assurer une intégration fluide dans l’infrastructure existante de l’université.
                    </p>
                `
            }
            // Vous pouvez ajouter d'autres projets techniques ici
        ],
    },
    methods: {
        openModal(modalId) {
            $('#' + modalId).modal('show');
        },
        closeModal(modalId) {
            $('#' + modalId).modal('hide');
        }
    }
});
