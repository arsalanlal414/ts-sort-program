export class NumberSorter {
    private numbers: number[];
  
    constructor(numbers: number[]) {
      this.numbers = numbers;
    }
  
    // Sorts the numbers in ascending order using merge sort algorithm.
    sortAscending(): void {
      this.numbers = this.mergeSortAscending(this.numbers);
    }
  
    // Sorts the numbers in descending order using merge sort algorithm.
    sortDescending(): void {
      this.numbers = this.mergeSortDescending(this.numbers);
    }
  
    // Recursively performs merge sort in ascending order on an array.
    private mergeSortAscending(arr: number[]): number[] {
      if (arr.length <= 1) {
        return arr;
      }
  
      const mid = Math.floor(arr.length / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
  
      return this.mergeAscending(
        this.mergeSortAscending(left),
        this.mergeSortAscending(right)
      );
    }
  
    // Merges two arrays in ascending order.
    private mergeAscending(left: number[], right: number[]): number[] {
      const merged: number[] = [];
      let leftIndex = 0;
      let rightIndex = 0;
  
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
          merged.push(left[leftIndex]);
          leftIndex++;
        } else {
          merged.push(right[rightIndex]);
          rightIndex++;
        }
      }
  
      // Add the remaining elements from the left array
      while (leftIndex < left.length) {
        merged.push(left[leftIndex]);
        leftIndex++;
      }
  
      // Add the remaining elements from the right array
      while (rightIndex < right.length) {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
  
      return merged;
    }
  
    // Recursively performs merge sort in descending order on an array.
    private mergeSortDescending(arr: number[]): number[] {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        return this.mergeDescending(
            this.mergeSortDescending(left),
            this.mergeSortDescending(right)
        );

    }

    // Merges two arrays in descending order.
    private mergeDescending(left: number[], right: number[]): number[] {
        const merged: number[] = [];
        let leftIndex = 0;
        let rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] >= right[rightIndex]) {
                merged.push(left[leftIndex]);
                leftIndex++;
            } else {
                merged.push(right[rightIndex]);
                rightIndex++;
            }
        }

        // Add the remaining elements from the left array
        while (leftIndex < left.length) {
        merged.push(left[leftIndex]);
        leftIndex++;
        }

        // Add the remaining elements from the right array
        while (rightIndex < right.length) {
            merged.push(right[rightIndex]);
            rightIndex++;
        }

        return merged;

    }

    // Returns the sorted numbers array.
    getSortedNumbers(): number[] {
        return this.numbers;
    }
}