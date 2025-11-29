import { companiesHandler, favoriteDetailHandler, favoritesHandler } from "@/entities/Manager";
import { favoritesPostHandler } from "@/features/Manager/createFavoriteCompany";
import { favoritesDeleteHandler } from "@/features/Manager/deleteFavoriteCompany";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(
  ...favoritesHandler,
  ...companiesHandler,
  ...favoritesPostHandler,
  ...favoritesDeleteHandler,
  ...favoriteDetailHandler,
);
