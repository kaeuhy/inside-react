// const BASE_DIR = "./dist";
// const PORT = Bun.env.PORT ?? 8000;
// // const SUB_PATH = "inside-react/eunhyeon";
//
// Bun.serve({
//   port: PORT,
//   async fetch(req) {
//     const url = new URL(req.url);
//     let path = url.pathname;
//
//     // 서브패스 접두사 제거
//     if (path.startsWith(SUB_PATH)) {
//       path = path.slice(SUB_PATH.length);
//     }
//
//     if (path === "/" || path === "") path = "/index.html";
//
//     let file = Bun.file(`${BASE_DIR}${path}`);
//
//     // SPA 라우팅 처리: 파일이 없으면 무조건 index.html 반환
//     if (!(await file.exists())) {
//       file = Bun.file(`${BASE_DIR}/index.html`);
//     }
//
//     return new Response(file);
//   },
// });
//
// console.info(`Server is running on port ${PORT}`);
