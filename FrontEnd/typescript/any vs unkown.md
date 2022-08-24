<h3>any vs unknown</h3>

- any와 마찬가지로 어떤 값이든 unknown에 할당 가능함

- 하지만 차이점이 있다..

  - any
      - any 타입을 가진 값은 어느 타입에도 할당될 수 있음
          ```ts
          let any: any;
          let numberType:number = any; 
          ```
  - unknown
      - unknown 타입을 가진 값은 any와 unkown 타입을 가진 변수에만 할당 가능
          ```ts
          let unknown: unknown;
  
          let anyType:any = unkown;
          let numberType:number = unknown; // 에러 발생
          let stringType:string = unknown; // 에러 발생
          ```
      - unknown 타입 값의 프로퍼티에 접근, 호출, 인스턴스 생성 등을 할 수 없음
          ```ts
          let foo: unknown = 10;
          // 만약 foo가 any였다면 에러가 발생하지 않음
          // foo가 unknown이기 때문에 에러가 발생
          foo.x.prop;
          foo.y.prop;
          foo.z.prop;
          foo();
          new foo();
          upperCase(foo);
          foo `hello world!`;
          function upperCase(x: string) {
              return x.toUpperCase();
          }
          ```


- unknown 타입 변수를 실제로 사용할 때 type guard나 type assertion을 통해서 타입을 좁힌 후 사용해야함

- unknown은 any보다 더 안전하게 사용하기 위해서 만들어졌기 때문에 any보다 권장된다고 함

    ```ts
    let foo: unknown = 10;
        
    function hasXYZ(obj){...}
    function upperCase(x: string) {
    }

    if(hasXYZ(foo)){    //type guard
        foo.x.prop;
            foo.y.prop;
        foo.z.prop;
    }

    upperCase(foo as string);   //type assertion 
    ```

> https://devblogs.microsoft.com/typescript/announcing-typescript-3-0-rc-2/#the-unknown-type