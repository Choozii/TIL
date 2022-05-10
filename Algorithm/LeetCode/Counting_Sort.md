```
  var sortColors = function(nums) {
  let count = new Array(nums.length).fill(0);
  let answer = new Array(nums.length);

      for(let el of nums){
          count[el]++;
      }

      for(let i=1;i<nums.length;i++){
         count[i] += count[i-1]; //누적합 계산
      }

      for(let i = nums.length - 1; i>=0; i--){
         answer[count[nums[i]] - 1] = nums[i];
          count[nums[i]]--;
      }

      nums = answer;
      console.log(nums);

  };
```

- counting sort

  - 정렬할 숫자의 범위가 작을 때
  - 추가적인 메모리 공간이 필요함
  - 모든 값이 양수여야 함
  - Time Complexity : O(N)
  - Space Complexity : O(K)
