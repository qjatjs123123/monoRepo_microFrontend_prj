import { favoritesHandler } from "@/entities/Manager";
import { setupServer } from "msw/node";

export const server = setupServer(...favoritesHandler);

