export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const mergedCollectionOf1and2: number[] = [];
  const min2maxCollection_2: number[] = [];
  const mergedCollection: number[] = [];
  //start with rearranging the collection 2 into ascending array
  while (collection_2.length > 0) {
    const lastElement = collection_2.pop();
    if (lastElement != undefined) {
      min2maxCollection_2.push(lastElement);
    }
  }
  //then start comparing 2 arrays and merge it by pushing into new array
  while (collection_1.length > 0 || min2maxCollection_2.length > 0) {
    let firstElement = undefined;

    if (collection_1.length > 0 && min2maxCollection_2.length > 0) {
      if (collection_1[0] <= min2maxCollection_2[0]) {
        firstElement = collection_1.shift();
      } else if (collection_1[0] > min2maxCollection_2[0]) {
        firstElement = min2maxCollection_2.shift();
      }
    } else if (collection_1.length > 0) {
      firstElement = collection_1.shift();
    } else if (min2maxCollection_2.length > 0) {
      firstElement = min2maxCollection_2.shift();
    }

    if (firstElement != undefined) {
      mergedCollectionOf1and2.push(firstElement);
    }
  }
  // after finished merging the 1st and 2nd array we will compare the merged array with the 3rd array(collections)
  while (mergedCollectionOf1and2.length > 0 || collection_3.length > 0) {
    let firstElement = undefined;

    if (mergedCollectionOf1and2.length > 0 && collection_3.length > 0) {
      if (mergedCollectionOf1and2[0] <= collection_3[0]) {
        firstElement = mergedCollectionOf1and2.shift();
      } else if (mergedCollectionOf1and2[0] > collection_3[0]) {
        firstElement = collection_3.shift();
      }
    } else if (mergedCollectionOf1and2.length > 0) {
      firstElement = mergedCollectionOf1and2.shift();
    } else if (collection_3.length > 0) {
      firstElement = collection_3.shift();
    }

    if (firstElement != undefined) {
      mergedCollection.push(firstElement);
    }
  }

  return mergedCollection;
}

// Test the merge function
const collection_1 = [1, 4, 7];
const collection_2 = [10, 8, 6, 4, 2];
const collection_3 = [3, 4, 5, 9];

const mergedArray = merge(collection_1, collection_2, collection_3);
console.log(mergedArray); // Expected output: [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10]
