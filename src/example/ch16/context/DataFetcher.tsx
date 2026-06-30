// import { type Context, useContext } from "react";
//
// function useData<T = any>() {
//   const context = useContext(
//     DataContext as Context<DataContextType<T> | undefined>,
//   );
//
//   if (context === undefined) {
//     throw new Error("useData must be used within a DataProvider");
//   }
//   return context;
// }
//
// function IntermediateComponentWithContext({ children }) {
//   return (
//     <div>
//       <p>중간 컴포넌트 영역</p>
//       {children}
//     </div>
//   );
// }
//
// function DisplayDataComponentWithContext() {
//   const { loading, error, data, refetch } = useData<string[]>();
//
//   if (loading) {
//     return <div>컨텍스트: 데이터 로딩 중...</div>;
//   }
//   if (error) {
//     return (
//       <div>
//         {error.message}{" "}
//         <button type="button" onClick={refetch}>
//           재시도
//         </button>
//       </div>
//     );
//   }
//
//   return (
//     <div>
//       <ul>
//         {Array.isArray(data) ? (
//           data.map((item, index) => <li key={index}>{item}</li>)
//         ) : (
//           <li>데이터가 없습니다.</li>
//         )}
//       </ul>
//       <button type="button" onClick={refetch}>
//         목록 새로고침
//       </button>
//     </div>
//   );
// }
//
// const contextValue = useMemo(
//   () => ({
//     loading,
//     error,
//     refetch: fetchData,
//   }),
//   [loading, error, data, fetchData],
// );

// const settingsValue = useMemo(
//   () => ({
//     theme,
//     notificationsEnabled,
//     userPreferences: { fontSize: "medium" },
//   }),
//   [theme, notificationsEnabled],
// );

const themeValue = useMemo(() => ({ theme }), [theme]);

const notificationsValue = useMemo(
  () => ({ notificationsEnabled }),
  [notificationsEnabled],
);
