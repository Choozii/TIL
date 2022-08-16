/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var anagramMappings = function(nums1, nums2) {
    // mapping[i] = j // nums1의 i 인덱스 요소가 nums2의 인덱스 j에 있다
    let mapping=[];
    for(let i=0;i<nums1.length;i++){
        mapping.push(nums2.indexOf(nums1[i]));
    }
    return mapping;
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var anagramMappings = function(nums1, nums2) {
    // mapping[i] = j // nums1의 i 인덱스 요소가 nums2의 인덱스 j에 있다
    const map = {};
    for(let i in nums2){
        map[nums2[i]] = i;
    }
    let mapping = [];
    for(let i=0;i<nums1.length;i++){
        mapping[i] = map[nums1[i]];
    }
    return mapping;
};