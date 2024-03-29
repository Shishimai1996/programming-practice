import { readFileSync } from "fs";
import * as path from "path";

interface Gas {
  desired: number;
  read: number;
}

function readAndValidateData(inputFile: string): Gas | null {
  try {
    const filePath: string = path.join(__dirname, inputFile);
    var input = readFileSync(filePath, "utf8");
    var lines = input.split("\n");
    const desired = parseFloat(lines[0]);
    const read = parseFloat(lines[1]);
    if (isNaN(desired) || isNaN(read)) {
      throw new Error("Invalid data format");
    }
    return { desired, read };
  } catch (err) {
    console.log("Error reading the data", err);
    return null;
  }
}

function Tire({ desired, read }: Gas): void {
  const calcular = desired - read;
  console.log(calcular);
}

// Usage
const gasData = readAndValidateData("index.txt");
if (gasData) {
  Tire(gasData);
}
