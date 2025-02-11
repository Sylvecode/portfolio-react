# Utiliser une image Node officielle légère
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier tout le code du projet
COPY . .

# Exposer le bon port pour Vite (par défaut, c'est 5173)
EXPOSE 5173

# Démarrer l'application en mode dev, avec --host pour rendre accessible
CMD ["npm", "run", "dev", "--", "--host"]
