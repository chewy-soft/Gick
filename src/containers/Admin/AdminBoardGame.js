// import React from "react";import colors from "../../colors";
// import { StyleSheet } from "react-native";
// import ReactTable from "react-table";
// import {
//   NavBar,
//   NavLeft,
//   SubNavBar,
//   SubNavItem
// } from "../../components/ToolBar";
// import Button from "../../components/Buttons";

// const styles = StyleSheet.create({
//   div: {
//     display: "flex"
//   },
//   table: {
//     backgroundColor: "#fff"
//   }
// });

// class AdminBoardGame extends React.Component {
//   // constructor() {
//   //     super();
//   //     this.state = {
//   //         data: jasonData()
//   //     };
//   // }

//   render() {
//     // const { data } = this.state;
//     const data = [
//       {
//         id: 1,
//         name: "Tanner Linsley",
//         cell: "illegal text",
//         reported: 3
//       },
//       {
//         id: 2,
//         name: "Tanner Linsley",
//         cell: "illegal text",
//         reported: 2
//       }
//     ];

//     const columns = [
//       {
//         Header: "ID",
//         accessor: "id"
//       },
//       {
//         Header: "Name",
//         accessor: "name"
//       },
//       {
//         Header: "Report Cell",
//         accessor: "cell"
//       },
//       {
//         Header: "Reported",
//         accessor: "reported"
//       },
//       {
//         Header: "Delete",
//         accessor: "delete",
//         Cell: props => (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center"
//             }}
//           >
//             <Button theme="orange" icon="delete" />
//           </div>
//         ),
//         maxWidth: 80
//       }
//     ];
//     return (
//       <div>
//         <NavBar>
//           <NavLeft content="Gick Admin Page" />
//         </NavBar>
//         <SubNavBar>
//           <SubNavItem
//             content="BoardGame(テーブルヘッダーをクリックして並び替え)"
//             icon="boardgame"
//             style={{ color: "#fff", backgroundColor: colors.lightRed }}
//           />
//           <SubNavItem
//             content="User(テーブルヘッダーをクリックして並び替え)"
//             icon="users"
//             style={{ color: "#bbb", backgroundColor: "inherit" }}
//           />
//         </SubNavBar>
//         <div className={css(styles.table)}>
//           <ReactTable
//             defaultPageSize={20}
//             data={data}
//             noDataText="No Data!"
//             columns={columns}
//             className="-striped -highlight"
//             style={{ height: "calc(100vh - 80px)" }}
//             SubComponent={row => {
//               const moreData = Object.keys(row.original).map(key => {
//                 // return {
//                 //     property: key,
//                 //     value: row.original[key].toString(),
//                 // }
//               });
//               return <div style={{ padding: "20px" }}>{moreData}</div>;
//             }}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminBoardGame;
