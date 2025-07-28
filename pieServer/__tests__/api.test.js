const express = require("express");
const request = require("supertest");
const router = require("../routes/pie");

const app = express();
app.use(express.json());
app.use(router);

describe("Pie Routes", () => {
  describe("GET /", () => {
    it("Should return a list of pies", async () => {
      const response = await request(app).get("/");
      expect(response.status).toBe(200);
      expect(response.body.pies).toContain("tomatillo");
      expect(response.body.pies).toContain("cherry");
    });
  });
  describe("POST /", () => {
    it("Should add a pie to the list of pies", async () => {
      const response = await request(app).post("/").send({
        flavor: "apple",
      });
      expect(response.status).toBe(201);
      expect(response.body.pies).toContain("apple");
    });
  });
});
