import fs from "fs";
import path from "path";
import readline from "readline";
import { NumberSorter } from "./NumberSorter";

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the input file name: ", (inputFilePath) => {
    rl.question("Enter the output file name: ", (outputFilePath) => {
      rl.question("Choose the sort order (asc/desc): ", (sortOrder) => {
        rl.close();

        try {
          const fileContent = fs.readFileSync(
            path.join(__dirname, inputFilePath),
            "utf-8"
          );
          const numbers: number[] = fileContent
            .split(", ")
            .map((num) => parseFloat(num)); // Use parseFloat to convert string to number

          const numberSorter: NumberSorter = new NumberSorter(numbers);

          if (sortOrder === "asc") {
            numberSorter.sortAscending();
          } else if (sortOrder === "desc") {
            numberSorter.sortDescending();
          } else {
            console.error("Invalid sort order. Please choose 'asc' or 'desc'.");
            return;
          }

          const sortedNumbers: string = numberSorter.getSortedNumbers().join(", ");

          fs.writeFileSync(path.join(__dirname, outputFilePath), sortedNumbers);
          console.log("Sorting completed successfully!");
        } catch (error) {
          console.error("An error occurred:", error);
        }
      });
    });
  });
}

main();
