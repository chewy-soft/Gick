// import React from "react";import colors from "../../colors";
// import { StyleSheet } from "react-native";
// import ReactTable from "react-table";
// import {
//   NavBar,
//   NavLeft,
//   SubNavBar,
//   SubNavItem
// } from "../../components/ToolBar";

// const styles = StyleSheet.create({
//   div: {
//     display: "flex"
//   },
//   table: {
//     backgroundColor: "#fff"
//   }
// });

// class AdminUser extends React.Component {
//   // constructor() {
//   //     super();
//   //     this.state = {
//   //         data: jasonData()
//   //     };
//   // }
//   render() {
//     const data = [
//       {
//         id: 1,
//         name: "Tanner Linsley",
//         reported: 3
//       },
//       {
//         id: 2,
//         name: "Tanner Linsley",
//         reported: 2
//       },
//       {
//         id: 3,
//         name: "Tanner Linsley",
//         reported: 3
//       }
//     ];
//     // const { data } = this.state;
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
//         Header: "Interactions",
//         accessor: "interactions"
//       },
//       {
//         Header: "Interaction Likes",
//         accessor: "interactionLikes"
//       },
//       {
//         Header: "Likes",
//         accessor: "likes"
//       },
//       {
//         Header: "Reported",
//         accessor: "reported"
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
//             style={{ color: "#bbb", backgroundColor: "inherit" }}
//           />
//           <SubNavItem
//             content="User(テーブルヘッダーをクリックして並び替え)"
//             icon="users"
//             style={{ color: "#fff", backgroundColor: colors.lightRed }}
//           />
//         </SubNavBar>
//         <div className={css(styles.table)}>
//           <ReactTable
//             defaultPageSize={20}
//             data={data}
//             columns={columns}
//             noDataText="No Data!"
//             className="-striped -highlight"
//             style={{ height: "calc(100vh - 80px)" }}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default AdminUser;
