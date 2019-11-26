/**
 * Array Chunking
 *
 * [ 3, 6, 2, 5, 3, 9, 3, 2, 7 ] 'Chunk in 3'
 * [ [ 3, 6, 2 ], [ 5, 3, 9 ], [ 3, 2, 7 ] ]
 */

function arrayChunking(arr, size) {
  if (!arr.length) {
    return "Array has no items for chunking";
  } else {
    let chunked = [];

    for (let element of arr) {
      const lastArr = chunked[chunked.length - 1];

      if (!lastArr || lastArr.length === size) {
        chunked.push([element]);
      } else {
        lastArr.push(element);
      }
    }
    console.log(arr, `Chunk in ${size}`);
    return chunked;
  }
}

module.exports = arrayChunking;
