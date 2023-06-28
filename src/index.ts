import fs from "fs";
import path from "path";
import { NumberSorter } from "./NumberSorter";

function main() {
  const inputFilePath = "input.txt";
  const outputFilePath = "output.txt";

  try {
    // Read the file content from the input file
    const fileContent = fs.readFileSync(
      path.join(__dirname, inputFilePath),
      "utf-8"
    );

    // Split the file content by comma and space
    const numbers: number[] = fileContent
      .split(", ")
      .map((num) => parseFloat(num)); // Use parseFloat to convert string to number

    // Create a NumberSorter object with the numbers array
    const numberSorter: NumberSorter = new NumberSorter(numbers);

    // Sort the numbers in descending order
    numberSorter.sortDescending();

    // Get the sorted numbers as a string
    const sortedNumbers: string = numberSorter.getSortedNumbers().join(", ");

    // Write the sorted numbers to the output file
    fs.writeFileSync(path.join(__dirname, outputFilePath), sortedNumbers);

    console.log("Sorting completed successfully!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
