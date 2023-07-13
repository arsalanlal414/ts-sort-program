import fs from "fs";
import path from "path";
import readline from "readline";
import { NumberSorter } from "./NumberSorter";

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });


  // reading the inputs
  rl.question("Enter the input file name: ", () => {
    rl.question("Enter the output file name: ", (outputFilePath) => {
      rl.question("Choose the sort order (asc/desc): ", (sortOrder) => {
        rl.close();

        
        const arr: number[] = []
          for(let i = 0; i<=1000000; i++){
            arr.push(i)
        }
        try {
          // reading input file
          // const fileContent = fs.readFileSync(
          //   path.join(__dirname, inputFilePath),
          //   "utf-8"
          // );

          // converting file into an error of numbers
          // const numbers: number[] = fileContent
          //   .split(", ")
          //   .map((num) => parseFloat(num)); // Use parseFloat to convert string to number

          // Setting up the class with the initial data
          const numberSorter: NumberSorter = new NumberSorter(arr);

          // sorting the numbers 
          console.time("program")
          if (sortOrder === "asc") {
            numberSorter.sortAscending();
            
          } else if (sortOrder === "desc") {
            numberSorter.sortDescending();
            // console.time()
          } else {
            console.error("Invalid sort order. Please choose 'asc' or 'desc'.");
            return;
          }
          console.timeEnd("program")

          // getting the sorted numbers from a class
          const sortedNumbers: string = numberSorter.getSortedNumbers().join(", ");

          // writing the sorted numbers into a new file
          fs.writeFileSync(path.join(__dirname, outputFilePath), sortedNumbers);
          console.log("Sorting completed successfully!");
        } catch (error) {  // handling errors
          console.error("An error occurred:", error);
        }
      });
    });
  });
}

main();

