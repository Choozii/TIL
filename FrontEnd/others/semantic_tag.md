<h2>시맨틱 태그를 정리해보자</h2>

<h3>- 시맨틱 태그란?</h3>
A semantic element clearly describes its meaning to both the browser and the developer.

Examples of semantic elements: \<form>, \<table>, and \<article> - Clearly defines its content.

즉 div, span처럼 아무 의미가 없는 것이 아니라 안의 내용물을 유추할 수 있는 등 의미가 있는 요소를 말한다.
시맨틱 태그는 HTML5에 도입되었다. 시맨틱 태그를 통해 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확하게 설명할 수 있다.


<h3>- 시맨틱 태그의 필요성</h3>

1. SEO

    시맨틱 태그는 브라우저에게 페이지와 내부 콘텐츠의 의미를 명확하게 하고, 검색 엔진의 쿼리에 대해 올바른 페이지가 제공되도록 한다.

2. 웹 접근성을 높임

    시각장애인이 스크린 리더를 사용해 페이지를 탐색할 때 도움이 된다. (또한 alt, area-label 등의 속성으로 정보를 넣어주면 접근성을 높일 수 있다)

3. 코드 가독성, 유지보수에 긍정적인 효과


<h3>- 시맨틱 태그 종류</h3>

\<article>

페이지의 다른 콘텐츠들과 독립적으로 존재할 수 있는 콘텐츠
ex. 블로그 포스트, 뉴스 기사...

\<aside>

사이드 영역
본문 이외에 내용에 사용

\<figure>

이미지, 사진 등과 같은 콘텐츠 / figcaption 태그를 포함

\<figcaption>

figure에 대한 설명

\<footer>

페이지의 아랫부분

\<header>

페이지의 윗부분

\<main>

본문 영역

\<mark>

강조되거나 하이라이트된 텍스트

\<nav>

내비게이션 링크/외부 사이트 링크 부분에도 사용

\<section>

일반적으로 제목이 있고, 하나의 주제로 묶이는 콘텐츠 영역

\<details>

사용자가 보거나 숨길 수 있는 추가적인 정보(토글)

\<summary>

details 내부에서 제목으로 정의 / 제목을 클릭해서 세부 정보를 보거나 숨길 수 있음
[summary/details 참고](https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_details)

\<time>

날짜나 시간


<h3>- reference</h3>

https://www.w3schools.com/html/html5_semantic_elements.asp