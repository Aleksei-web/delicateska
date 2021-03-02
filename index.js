const express = require("express");
const fs = require("fs");
const {
  createMatrix,
  findDuplicateInLine,
  findDuplicateInRow,
  joinMatrix,
  address,
} = require("./functions/functions");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  const n = Number(req.query.n);
  const m = Number(req.query.m);
  if (!m || !n) {
    return res.status(403).send({ message: "не верные параметры" });
  }
  const matrix = createMatrix(m, n);
  const duplicateLine = findDuplicateInLine(matrix);
  const duplicateRow = findDuplicateInRow(matrix);
  const joinDuplicate = joinMatrix(duplicateRow, duplicateLine);
  const addresses = address(joinDuplicate);
  const resultObj = { input: matrix, output: addresses };
  fs.writeFile("data.json", JSON.stringify(resultObj), (err) => {
    if (err) console.log(err.message);
  });
  return res.status(200).json(resultObj);
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
