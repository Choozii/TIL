<h3> Lodash 정리</h3>

- Lodash : array, numbers, object, strings를 쉽게 다룰 수 있도록 method를 제공해주는 utility library

- 함수 정리

  - \_.isEmpty(v)

  - \_.isUndefined(v)

  - \_.groupBy(collection, iteratee) : 주어진 collection으로 객체를 생성함. 객체의 key는 collection의 각 element가 iteratee를 실행한 결과임

    ```
    _.groupBy([6.1, 4.1, 3.2], Math.floor);
    // {'3' : [3.2], '4' : [4.1], '6':[6.1]}
    ```

  - \_.keys(object) : object의 key값 배열을 리턴

  - \_.findLast(collection, predicate, fromIndx) : predicate가 true가 되는 원소 중 제일 마지막 값

  - \_.head : array의 첫번째 값

  - \_.orderBy(collection, iteratees, orders) : 정렬

  - \_.find(collection, predicate, fromIndex)

  - \_.isFunction(value)

  - \_.isNull(value)/isNaN(value)/isNumber(value)

  - \_.sumBy(array, iteratee) : 각 element마다 iteratee가 실행되고 그 element로 sum이 계산됨

  - \_.cloneDeep(value) : 객체를 deep copy

  - \_.toPath(value) : value를 적절한 path array로 변환

    ```
    _.toPath('a[0].b.c')
    // ['a','0','b','c']
    ```

  - \_.has(object, path) : path가 객체의 직접적인 속성인지 확인

  > https://lodash.com/docs/4.17.15
