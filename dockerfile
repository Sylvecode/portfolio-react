# Utiliser une image Node officielle légère
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier tout le code du projet
COPY . .

# Exposer le bon port pour Vite
EXPOSE 5174

# Démarrer l'application en mode dev sur le port 5174
CMD ["npm", "run", "dev", "--", "--port=5174", "--host"]