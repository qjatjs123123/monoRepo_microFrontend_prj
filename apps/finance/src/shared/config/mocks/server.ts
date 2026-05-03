import { favoritesHandler } from "@/entities";
import { setupServer } from "msw/node";

export const server = setupServer(...favoritesHandler);

