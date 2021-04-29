import { server } from "./mocks/server";
import {cache} from "swr"

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  cache.clear();
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
