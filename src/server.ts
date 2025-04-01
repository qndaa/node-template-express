import app from './app';
import {AppDataSource} from './config/database';
import {logger} from './util/logger';

const PORT = process.env.PORT || 3000;

let server: any;


(async function () {
  try {
    await AppDataSource.initialize();
    logger.info("Database connection initialized");

    server = app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    logger.error("Error initializing the server:", error);
    process.exit(1);
  }
})();


function gracefulShutdown() {
  logger.info("Graceful shutdown");

  if (server) {
    server.close(() => {
      logger.info("Server closed");
    });
  }

  AppDataSource.destroy()
    .then(() => logger.info("Database connection closed"))
    .catch((err: any) => logger.error("Error closing database connection:", err))
    .finally(() => process.exit(0)); // Ensure process exits
}

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);

