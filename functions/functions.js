/* eslint-disable no-param-reassign */

function createMatrix(m, n) {
  const matrix = [];
  for (let i = 0; i < m; i += 1) {
    const line = [];
    for (let k = 0; k < n; k += 1) {
      line.push(Math.floor(Math.random() * 4) + 1);
    }
    matrix.push(line);
  }
  return matrix;
}

function findDuplicateInRow(matrix) {
  const clone = JSON.parse(JSON.stringify(matrix));
  for (let i = 1; i < clone.length - 1; i += 1) {
    for (let k = 0; k < clone[i].length; k += 1) {
      if (clone[i][k] === clone[i - 1][k] && clone[i][k] === clone[i + 1][k]) {
        clone[i - 1][k] = 0;
        let count = i;
        const currentEl = clone[i][k];
        while (count <= clone.length - 1 && clone[count][k] === currentEl) {
          clone[count][k] = 0;
          count += 1;
        }
      }
    }
  }
  return clone;
}

function findDuplicateInLine(matrix) {
  const clone = JSON.parse(JSON.stringify(matrix));
  const changeMatrix = clone.map((line) => {
    for (let i = 0; i < line.length; i += 1) {
      if (line[i] === line[i - 1] && line[i] === line[i + 1]) {
        line[i - 1] = 0;
        const currentEl = line[i];
        let count = i;
        while (currentEl === line[count]) {
          line[count] = 0;
          count += 1;
        }
      }
    }
    return line;
  });
  return changeMatrix;
}

function address(arr) {
  const addressArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let k = 0; k < arr[i].length; k += 1) {
      if (!arr[i][k]) {
        addressArr.push([i, k]);
      }
    }
  }
  return addressArr;
}

function joinMatrix(arr1, arr2) {
  const joinArr = JSON.parse(JSON.stringify(arr1));
  for (let i = 0; i < arr1.length; i += 1) {
    for (let k = 0; k < arr1[i].length; k += 1) {
      if (!arr1[i][k] || !arr2[i][k]) joinArr[i][k] = 0;
    }
  }
  return joinArr;
}

module.exports = {
  createMatrix,
  findDuplicateInLine,
  findDuplicateInRow,
  joinMatrix,
  address,
};
