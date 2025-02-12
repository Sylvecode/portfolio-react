Commandes essentielles avec Docker Compose

Démarrer les conteneurs

En mode détaché (en arrière-plan) : docker-compose up -d
En mode interactif (logs visibles) : docker-compose up

Arrêter les conteneurs

Arrêter sans supprimer : docker-compose stop
Arrêter et supprimer les conteneurs + réseaux : docker-compose down
Arrêter et supprimer avec les volumes : docker-compose down -v

Gérer les conteneurs

Voir les conteneurs en cours d’exécution : docker ps
Voir les logs en temps réel : docker-compose logs -f
Redémarrer un service spécifique : docker-compose restart <nom_du_service>
Recréer les conteneurs après modification du code : docker-compose up -d --build
