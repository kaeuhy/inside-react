// import { debounce } from "lodash-es";
// import { type SyntheticEvent, useState } from "react";
//
// const QuoteSearchComponent = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [results, setResults] = useState<Quote[]>([]);
//
//   const debouncedSearch = debounce(async (query: string) => {
//     if (query.trim() === "") {
//       setResults([]);
//       return;
//     }
//     try {
//       const response = await fetch(`/quote?query=${encodeURIComponent(query)}`);
//       if (response.ok) {
//         const data = await response.json();
//         setResults(data.results || []);
//       } else {
//         setResults([]);
//       }
//     } catch (error) {
//       setResults([]);
//     }
//   }, 300);
//
//   const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
//     const { value } = e.currentTarget;
//     setSearchTerm(value);
//     debouncedSearch(value);
//   };
//
//   return (
//     <div>
//       <h2>명언 검색</h2>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleChange}
//         placeholder="검색어를 입력하세요"
//       />
//       <MemoizedQuoteList quotes={results} />
//     </div>
//   );
// };
//
// import { useState } from "react";
//
// const user: UserType = {
//   name: "은현",
//   age: 21,
// };
//
// const address = {
//   address: "한밭대",
// };
//
// interface UserType {
//   name: string;
//   age: number;
// }
//
// interface AddressType {
//   address: string;
// }
//
// export default function User({ name, age }: UserType) {
//   const [count, setCount] = useState(0);
//   const [type, setType] = useState("");
//   const onTypeChange = (e: KeyboardEvent) => {
//     return setType(e.target.value);
//   };
//
//   return (
//     <div>
//       <button type="button" onChange={() => setCount((c) => c + 1)}>
//         버튼 클릭: {count}
//       </button>
//       <button></button>
//       <Input onChange={onTypeChange} />
//       <div>
//         나의 이름은 {name}, 나이는 {age}
//       </div>
//     </div>
//   );
// }
//
// User(user);
