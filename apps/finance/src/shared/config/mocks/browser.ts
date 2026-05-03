import { companiesHandler, favoriteDetailHandler, favoritesHandler } from "@/entities"
import { setupWorker } from "msw/browser";

export const worker = setupWorker(
  ...favoritesHandler,
  ...companiesHandler,
  ...favoriteDetailHandler,
);
