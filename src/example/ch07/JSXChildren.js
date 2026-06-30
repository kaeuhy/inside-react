// function IntermediateComponent({ children }) {
//   return (
//     <div
//       className="intermediate-wrapper"
//       style={{ border: "1px dashed gray", padding: "10px", margin: "10px 0" }}
//     >
//       <p style={{ fontWeight: "bold", color: "gray" }}>중간 컴포넌트 영역</p>
//       {children()}
//     </div>
//   );
// }
//
// // 데이터를 실제로 표시하는 컴포넌트
// function DisplayDataComponent({ loading, error, data }) {
//   if (loading) {
//     return <div className="loading">데이터 로딩 중...</div>;
//   }
//   if (error) {
//     return <div className="error">에러 발생: {error.message}</div>;
//   }
//   return (
//     <div className="data-display">
//       <h4>가져온 데이터 목록:</h4>
//       <ul>
//         {Array.isArray(data) ? (
//           data.map((item, index) => <li key={index}>{item}</li>)
//         ) : (
//           <li>데이터가 없습니다.</li>
//         )}
//       </ul>
//     </div>
//   );
// }
//
// // 앱 컴포넌트
// function AppWithIntermediateRenderProps() {
//   return (
//     <DataFetcher url="https://api.example.com/gadgets">
//       {({ loading, error, data }) => (
//         <IntermediateComponent>
//           {() => (
//             <DisplayDataComponent loading={loading} error={error} data={data} />
//           )}
//         </IntermediateComponent>
//       )}
//     </DataFetcher>
//   );
// }
