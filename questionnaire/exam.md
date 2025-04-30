# Questionnaire 

### Objectif des tests unitaires
Quel est l'objectif principal des tests unitaires ?
   - B) Vérifier le comportement d'une unité de code isolée

### Utilisation de Gherkin
Gherkin est principalement utilisé pour :
   - B) Décrire le comportement attendu dans un format compréhensible par tous

### Principe d'isolation
Expliquez en quoi consiste le principe d'isolation dans les tests unitaires et pourquoi il est important.

L'isolation signifie qu'une unité de code est testée indépendamment de ses dépendances, souvent à l'aide de mocks. Cela permet de garantir que les tests échouent uniquement à cause de cette unité et non d’un autre composant.

### Origine du BDD
Le BDD est une extension du :
   - B) Test Driven Development

### Fonction des tests d'intégration
Les tests d'intégration vérifient principalement :
   - B) L'interaction entre différents composants ou modules

### Structure Gherkin
Expliquez la structure d'un scénario Gherkin et donnez un exemple concret.

Feature: Connexion utilisateur  
  Scenario: Connexion avec des identifiants valides  
    Given un utilisateur avec un email valide  
    When il saisit ses identifiants et clique sur "Connexion"  
    Then il est redirigé vers la page d’accueil


### Mocks en tests unitaires
Dans le contexte des tests unitaires, que sont les "mocks" ?
   - B) Des objets qui simulent le comportement de dépendances réelles

### Objectif des tests end-to-end
Les tests end-to-end visent à :
   - B) Tester l'application de bout en bout du point de vue de l'utilisateur

### Cycle TDD
Expliquez en détail le cycle Red-Green-Refactor du TDD et ce qui se passe à chaque étape.

Le cycle Red-Green-Refactor est le cœur du Test-Driven Development :

Red : On écrit un test qui échoue, car la fonctionnalité n’existe pas encore.
Green : On écrit le minimum de code pour que le test passe.
Refactor : Une fois le test vert, on améliore le code sans changer son comportement.

Ce cycle garantit un développement progressif, un code fiable et une meilleure qualité logicielle.

### Caractéristiques d'un bon test unitaire
Quelle est la caractéristique idéale d'un bon test unitaire ?
    - B) Il doit être rapide à exécuter, isolé et répétable

### Mots-clés de Gherkin
Quels sont les mots-clés principaux de Gherkin ?
    - C) Feature, Scenario, Given, When, Then

### Tests unitaires vs tests d'intégration
Quelles sont les principales différences entre les tests unitaires et les tests d'intégration ?

Les tests unitaires vérifient une seule unité isolée, rapidement, tandis que les tests d’intégration vérifient les interactions entre plusieurs unités et sont plus lents et complexes.

### Nom du cycle TDD
Le cycle TDD classique est connu sous le nom de :
    - B) Red-Green-Refactor

### Focus des tests fonctionnels
Les tests fonctionnels se concentrent sur :
    - C) Le comportement du système par rapport aux spécifications

### BDD et communication d'équipe
Comment le BDD peut-il améliorer la communication entre les équipes techniques et les équipes métier ?

Le BDD permet à toutes les parties prenantes (développeurs, PO, testeurs) de discuter autour des scénarios compréhensibles, ce qui aligne les attentes métier et techniques.

### Avantage principal du TDD
Quel est l'avantage principal du TDD ?
    - C) Il favorise un design modulaire et des interfaces claires

### Avantages et défis des tests end-to-end
Quels sont les avantages et les défis spécifiques liés aux tests end-to-end par rapport aux autres types de tests ?

Avantages : testent l'application comme un utilisateur réel.
Défis : lents, sensibles aux changements UI, maintenance coûteuse, sources d’erreurs flakys.

### Format des scénarios BDD
Quel est le format typique d'un scénario BDD ?
    - B) Étant donné-Quand-Alors

### Avantages et limites des tests unitaires
Décrivez les avantages et les limites des tests unitaires dans un projet de développement logiciel.

Avantages : rapides, fiables, faciles à maintenir, détectent les erreurs tôt.
Limites : ne couvrent pas les intégrations ni les comportements globaux.

### Fonctionnalité de réutilisation dans Gherkin
Quelle est la fonctionnalité de Gherkin qui permet de réutiliser des étapes communes à plusieurs scénarios ?
    - B) Background

### Responsabilité des tests fonctionnels
Qui est généralement responsable de l'écriture et de l'exécution des tests fonctionnels ?
    - C) Les développeurs et les testeurs QA

### Moment d'écriture du code en TDD
Dans le TDD, à quel moment écrit-on le code de production ?
    - C) Après avoir exécuté les tests et constaté leur échec

### Outils pour tests end-to-end
Quel outil est couramment utilisé pour les tests end-to-end d'applications web ?
    - C) Playwright

### Différences entre BDD et TDD
En quoi le BDD diffère-t-il du TDD en termes d'approche et d'objectifs ?

TDD se concentre sur le code et sa structure, BDD sur le comportement attendu du point de vue métier. BDD est souvent écrit en langage naturel et collaboratif.

### Défis des tests d'intégration
Quels défis sont fréquemment rencontrés lors de la mise en place de tests d'intégration ?
    - D) Toutes les réponses ci-dessus

### Caractéristiques d'un bon test end-to-end
Quelle est la caractéristique d'un bon test end-to-end ?
    - B) Il doit simuler avec précision le comportement réel des utilisateurs

### Défis de l'adoption du TDD
Quels sont les défis couramment rencontrés lors de l'adoption du TDD dans une équipe, et comment pourriez-vous les surmonter ?

Les développeurs peuvent résister au changement, le rythme de développement semble plus lent au début, il faut discipline, expérience et temps pour écrire de bons tests. Formation et accompagnement sont clés.

### Frameworks de tests unitaires
Lequel de ces frameworks n'est PAS utilisé pour les tests unitaires ?
    - C) Selenium

### Rôles dans le processus BDD
Quels rôles sont généralement impliqués dans le processus BDD ?
    - D) Développeurs, testeurs, product owners et parties prenantes métier

### Maintenance des tests end-to-end
Comment géreriez-vous la maintenance des tests end-to-end pour une application qui évolue rapidement ?

Impliquer des tests stables, prioriser les flux critiques, utiliser des selecteurs robustes, faire une revue fréquente, automatiser la maintenance, et modulariser les tests.

### Inconvénients des tests fonctionnels
Quel est le principal inconvénient des tests fonctionnels ?
    - B) Ils sont généralement lents et coûteux à exécuter

### Intégration de Gherkin en agile
Comment intégreriez-vous Gherkin dans un processus de développement agile ? Quels seraient les avantages ?

Intégrer Gherkin dès la phase de rédaction des User Stories en collaboration avec PO et testeurs. Cela aide à aligner les attentes, automatiser les scénarios et améliorer la qualité.

### Principes du TDD
Lequel des principes suivants n'est PAS associé au TDD ?
    - D) Écrire tous les tests à la fin du développement

### Différences entre tests fonctionnels et autres tests
En quoi les tests fonctionnels diffèrent-ils des tests unitaires et d'intégration en termes d'approche et d'objectifs ?

Les tests fonctionnels valident le comportement métier par rapport aux spécifications, contrairement aux tests unitaires (composant isolé) et d'intégration (interactions techniques).

### Approche combinant TDD, BDD et Gherkin
Quelle approche combine naturellement TDD, BDD et Gherkin ?
    - B) Specification By Example

### Organisation des tests fonctionnels
Décrivez comment vous organiseriez les tests fonctionnels pour une application web de e-commerce.

Organiser par fonctionnalités métiers (par exemple : panier, paiement, recherche), automatiser les cas critiques, maintenir les scénarios à jour, structurer par features files avec tags pour filtrer les tests.

### Pyramide de tests
Quelle est la pyramide de tests classique, du bas vers le haut ?
    - B) Tests unitaires, Tests d'intégration, Tests fonctionnels, Tests E2E

### Stratégie de test optimale
Comment détermineriez-vous la stratégie de test optimale pour un projet, en considérant les différents types de tests abordés dans ce questionnaire ?

Tests unitaires pour fiabilité rapide

Tests d’intégration pour interactions

Tests fonctionnels pour comportements métier

Tests E2E pour validation globale
Adapter selon le contexte, risques, et priorités métiers

### Quelle est l'erreur récurente qui peut être faite lors de test end 2 end ? (Je l'ai répété pas mal de fois)

Faire trop de tests end-to-end et négliger les tests unitaires ou d'intégration, ce qui entraîne des tests lents, fragiles et difficiles à maintenir.
