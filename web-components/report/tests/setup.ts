import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import fragmentJson from "./fixtures/fragment.json?raw";
import * as Vue from "vue";
import hljs from "highlight.js";

// @highlightjs/vue-plugin expects global `Vue` and `hljs` variables
(globalThis as any).Vue = Vue;
(globalThis as any).hljs = hljs;

const DISPATCH_FRAGMENT = JSON.parse(fragmentJson);

/*
 * Set up mock server for dispatch endpoint
 */

export const restHandlers = [
    http.post("/app-rpc-call", () => {
        return HttpResponse.json(DISPATCH_FRAGMENT, { status: 200 });
    }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterAll(() => server.close());

// Reset handlers after each test (important for test isolation)
afterEach(() => server.resetHandlers());
