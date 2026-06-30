// import * as React from "react";
// import {useMemo, useState} from "react";
//
// // const TitleComponent = ({title}: { title: string }) => {
// //     console.log(`${title} 렌더링`)
// //     return <h4>{title}</h4>
// // }
// //
// // const MemoizedTitleComponent = React.memo(({title}: { title: string }) => {
// //     console.log(`${title} (메모이즈) 렌더링`)
// //     return <h4>{title}</h4>
// // })
// //
// // export default function MemoExample() {
// //     const [count, setCount] = useState(0);
// //
// //     return (
// //         <div>
// //             <button onClick={() => setCount((c) => c + 1)}>
// //                 카운트 증가: {count}
// //             </button>
// //
// //             <TitleComponent title="일반 타이틀"/>
// //
// //             <MemoizedTitleComponent title="메모이즈된 타이틀"/>
// //         </div>
// //     )
// // }
// //
// // const Child = React.memo(({user}: { user: { name: string } }) => {
// //     console.log("Child 렌더링");
// //     return <h4>{user.name}</h4>;
// // })
// //
// // export default function Parent() {
// //     const [count, setCount] = useState(0);
// //
// //     return (
// //         <div>
// //             <button onClick={() => setCount((c) => c + 1)}>
// //                 count: {count}
// //             </button>
// //
// //             <Child user={{name: "Alice"}}/>
// //         </div>
// //     );
// // }
//
// const MemoizedParent = React.memo(
//     ({children}: { children: React.ReactNode }) => {
//         console.log("부모 컴포넌트 렌더링");
//         return <div>{children}</div>
//     }
// )
//
// const MemoizedChild = React.memo(() => {
//     console.log("자식 컴포넌트 렌더링");
//     return <div>자식 컴포넌트</div>
// })
//
// export default function Parent() {
//     const [count, setCount] = useState(0);
//
//     return (
//         <div>
//             <button onClick={() => setCount((c) => c + 1)}>
//                 count: {count}
//             </button>
//             <MemoizedParent>
//                 <MemoizedChild/>
//             </MemoizedParent>
//         </div>
//     )
// }import * as React from "react";
// import {useState} from "react";
//
// // const TitleComponent = ({title}: { title: string }) => {
// //     console.log(`${title} 렌더링`)
// //     return <h4>{title}</h4>
// // }
// //
// // const MemoizedTitleComponent = React.memo(({title}: { title: string }) => {
// //     console.log(`${title} (메모이즈) 렌더링`)
// //     return <h4>{title}</h4>
// // })
// //
// // export default function MemoExample() {
// //     const [count, setCount] = useState(0);
// //
// //     return (
// //         <div>
// //             <button onClick={() => setCount((c) => c + 1)}>
// //                 카운트 증가: {count}
// //             </button>
// //
// //             <TitleComponent title="일반 타이틀"/>
// //
// //             <MemoizedTitleComponent title="메모이즈된 타이틀"/>
// //         </div>
// //     )
// // }
// //
// // const Child = React.memo(({user}: { user: { name: string } }) => {
// //     console.log("Child 렌더링");
// //     return <h4>{user.name}</h4>;
// // })
// //
// // export default function Parent() {
// //     const [count, setCount] = useState(0);
// //
// //     return (
// //         <div>
// //             <button onClick={() => setCount((c) => c + 1)}>
// //                 count: {count}
// //             </button>
// //
// //             <Child user={{name: "Alice"}}/>
// //         </div>
// //     );
// // }
//
// // const MemoizedParent = React.memo(
// //     ({children}: { children: React.ReactNode }) => {
// //         console.log("부모 컴포넌트 렌더링");
// //         return <div>{children}</div>
// //     }
// // )
// //
// // const MemoizedChild = React.memo(() => {
// //     console.log("자식 컴포넌트 렌더링");
// //     return <div>자식 컴포넌트</div>
// // })
// //
// // export default function Parent() {
// //     const [count, setCount] = useState(0);
// //
// //     return (
// //         <div>
// //             <button onClick={() => setCount((c) => c + 1)}>
// //                 count: {count}
// //             </button>
// //             <MemoizedParent>
// //                 <MemoizedChild/>
// //             </MemoizedParent>
// //         </div>
// //     )
// // }
