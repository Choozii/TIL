/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  const valid = (el_x, el_y) => x == el_x || y == el_y;
  const distances = {}; //distance(key) : index(value)

  for (let i = 0; i < points.length; i++) {
    if (!valid(points[i][0], points[i][1])) continue;
    let dist = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);

    if (distances[dist] != undefined) {
      distances[dist] > i ? i : di;
      /**
       * @param {number} x
       * @param {number} y
       * @param {number[][]} points
       * @return {number}
       */
      var nearestValidPoint = function (x, y, points) {
        const valid = (el_x, el_y) => x == el_x || y == el_y;
        const distances = {}; //distance(key) : index(value)

        for (let i = 0; i < points.length; i++) {
          if (!valid(points[i][0], points[i][1])) continue;
          let dist = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);

          if (distances[dist] != undefined) {
            distances[dist] > i ? i : distances[dist]; //해당 값에 value로 작은 인덱스 넣기
          } else {
            distances[dist] = i;
          }
        }

        if (Object.keys(distances).length == 0) {
          return -1;
        }

        let min = Math.min(...Object.keys(distances));
        return distances[min];
      };
      stances[dist]; //해당 값에 value로 작은 인덱스 넣기
    } else {
      distances[dist] = i;
    }
  }

  if (Object.keys(distances).length == 0) {
    return -1;
  }

  let min = Math.min(...Object.keys(distances));
  return distances[min];
};
