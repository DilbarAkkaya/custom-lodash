function filter(arr, predicate) {
let filteredArr = [];
for (let i = 0; i < arr.length; i++) {
 if ( predicate(arr[i], i, arr)) {
  filteredArr = [...filteredArr, arr[i]];
 }
}
return filteredArr;
}
export default filter;