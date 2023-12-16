/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
 
  let map1 = {};
  let map2 = {};

  for(let c of str1){
    map1[c] = map1[c] ?? 0;
    map1[c]++;
  }
  for(let c of str2){
    map2[c] = map2[c] ?? 0;
    map2[c]++;
  }
 map1 = sortObjectKeys(map1);
 map2 = sortObjectKeys(map2);
 if(JSON.stringify(map1)==JSON.stringify(map2)){
  return true
 }
 else
 return false
}

isAnagram("ram" , "rma");

module.exports = isAnagram;


function sortObjectKeys(obj) {
  // Get the keys of the object
  const keys = Object.keys(obj);

  // Sort the keys
  keys.sort();

  // Create a new object with sorted keys
  const sortedObject = {};
  // keys.forEach(key => {
  //   sortedObject[key] = obj[key];
  // });
  for(let i of keys){
    sortedObject[i] = obj[i];
  }

  return sortedObject;

}
