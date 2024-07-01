# Use uma imagem base do Node.js
FROM node:lts-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de dependências para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY prisma ./prisma/
COPY . .

CMD ["npm", "run", "start:dev"]