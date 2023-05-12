// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let tmp = [];
    while(nums1.length != 0 || nums2.length != 0){
        if(nums1.length == 0){
            tmp = tmp.concat(nums2);
            break;
        }
        if(nums2.length == 0){
            tmp = tmp.concat(nums1);           
            break;
        }
        if(nums1[0] < nums2[0]){
            tmp.push(nums1[0]);
            nums1.splice(0,1);
        } else {
            tmp.push(nums2[0]);
            nums2.splice(0,1);
        }
    }
    let mid = Math.floor(tmp.length / 2);
    return tmp.length % 2 !== 0 ? tmp[mid] : (tmp[mid - 1] + tmp[mid]) / 2;
};