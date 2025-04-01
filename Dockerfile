# Use an existing image as a base
FROM node:22

# Set the working directory
WORKDIR /service

# Create an unprivileged user
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "$(pwd)" \
    --no-create-home \
    "service"

# Copy the dist folder from the build stage to the working directory
COPY src /service/src

# Copy the package.json file from the build stage to the working directory
COPY package.json .

# Copy the package-lock.json file from the build stage to the working directory
COPY package-lock.json .

# Copy the tsconfig.json file from the build stage to the working directory
COPY tsconfig.json .

# Install the dependencies
RUN npm install

# Change the ownership of the /service directory to the unprivileged user
RUN chown -R service /service

# Switch to the unprivileged user
USER service

# Expose the port
EXPOSE 3000

# Run the server
CMD ["node", "--import=tsx", "src/server.ts"]