# Gunakan official Node.js 20 (LTS) image berbasis Alpine Linux
FROM node:20-alpine

# Direktori kerja di dalam container
WORKDIR /app

# Jika ada native module, install toolchain tambahan
# RUN apk add --no-cache python3 make g++ libtool autoconf automake

# Salin package.json dan lock file
COPY package.json yarn.lock package-lock.json* ./

# Install dependensi
RUN npm install

# Salin seluruh sisa file proyek
COPY . .

# Build proyek Docusaurus
RUN npm run build

# Port default Docusaurus
EXPOSE 3000

# Jalankan server statis
CMD ["npm", "run", "serve"]