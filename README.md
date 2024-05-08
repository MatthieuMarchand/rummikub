# Rummikub en TS

## Architecture

- [**src/**](src)
  - [**application/**](src/application)
    > Code qui permet de faire tourner une partie, on y gère le déroulement des tours etc tout en applicant les règles du jeu.
    > Le code est ici en "Programmation Orienté Object"
    - [**utils/**](src/domain/utils)
      > Des fonctions globales et utilitaires. Elles ne doivent avoir aucun lien avec les règles du jeu
  - [**domain/**](src/domain)
    > Code relatif au règles Rummikub, c'est le centre de notre application. De ce code dépend le reste (affichage, entrées, IAs, etc.)
    > Le code est ici écrit en "Programmation fonctionnelle" : tout est immuable, les fonctions sont pures et sans effet de bord.
    - [**constants/**](src/domain/constants)
      > Nombre de joueur max, cartes, etc. Pas de fonctions exportées.
    - [**dtos/**](src/domain/dots)
      > Les DataTransferObjects, ce sont les types des entités manipulées.
    - [**gamerules/**](src/domain/gamerules)
      > Fonctions qui régissent le jeu : est-ce qu'un joueur a gagné, est-ce que la suite est valide, etc.
    - [**utils/**](src/domain/utils)
      > Fonctions globales et utilitaires pour le jeu, ex : isJoker(card)
