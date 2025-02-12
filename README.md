# 🚀 Commandes Docker essentielles

## 📌 1. Construire et exécuter une image

### **Construire une image à partir du `Dockerfile`**

docker build -t <image-name> .

Lancer un conteneur basé sur cette image : docker run -d --name <image-name> -p 5173:5173 <image-name>

📌 2. Gestion des conteneurs

Lister les conteneurs actifs : docker ps
Arrêter un conteneur : docker stop <container-name>
Relancer un conteneur arrêté : docker start <container-name>
Supprimer un conteneur : docker rm <container-name>

📌 3. Gestion des images

Lister les images disponibles : docker images
Supprimer une image : docker rmi <image-name>

📌 4. Debug et accès au conteneur

Voir les logs d’un conteneur : docker logs <container-name>
Accéder au terminal d’un conteneur : docker exec -it <container-name> powershell

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
