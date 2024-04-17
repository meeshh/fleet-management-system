import { beforeAll, expect, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { data } from "./data";

const fetchMocker = createFetchMock(vi);

fetchMocker.doMock();

describe("equipments", () => {
  let response;
  beforeAll(async () => {
    fetchMocker.mockResponseOnce(JSON.stringify(data));
    response = await fetchMocker("/api/equipments");
  });

  it("should return status 200", async () => {
    expect(response.status).toBe(200);
  });
});
