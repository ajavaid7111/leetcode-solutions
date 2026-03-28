/**You are given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:

Input: arr = [2,4,5,3,1,2]

Output: [5,5,3,2,2,-1]
Example 2:

Input: arr = [3,3]

Output: [3,-1]
Constraints:

1 <= arr.length <= 10,000
1 <= arr[i] <= 100,000 */




function replaceElements(arr) {
        let max = -1
        for(let i = arr.length-1; i>= 0 ; i--){
    
            let temporary = arr[i]
             arr[i] = max
             max = Math.max(max, temporary)

        }

        return arr}