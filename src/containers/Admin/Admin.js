// import React from 'react';
// import ReactTable from 'react-table';
// import { NavBar, NavLeft, SubNavBar, SubNavItem } from '../../components/ToolBar';
// import Button from '../../components/Buttons';

// const styles = StyleSheet.create({
//     div: {
//         display: 'flex',
//     },
//     item: {
//         display: 'flex',
//         flex: '1',
//         flexDirection: 'column',
//         overflowY: 'auto',
//     },
//     input: {
//         display: 'none',
//         ':checked + label': {
//             backgroundColor: '#F00A6B',
//             color: '#fff'
//         },
//         ':checked + label + div': {
//             visibility: 'visible',
//         },
//     },
//     menuitem: {
//         display: 'inline-flex',
//         visibility: 'visible',
//         backgroundColor: '#4A4C48',
//         position: 'relative',
//         zIndex: '2',
//         color: '#fff',
//         height: '40px',
//     },
//     table: {
//         visibility: 'hidden',
//         position: 'absolute',
//         top: '80px',
//         left: '0',
//         right: '0',
//         backgroundColor: '#fff',
//     },
// });

// class Game extends React.Component {

//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         data: jasonData()
//     //     };
//     // }

//     render() {

//         // const { data } = this.state;
//         const data = [
//             {
//                 id: 1,
//                 name: 'Tanner Linsley',
//                 cell: 'illegal text',
//                 reported: 3
//             },
//             {
//                 id: 2,
//                 name: 'Tanner Linsley',
//                 cell: 'illegal text',
//                 reported: 2
//             },
//         ]

//         const columns = [
//             {
//                 Header: 'ID',
//                 accessor: 'id'
//             },
//             {
//                 Header: 'Name',
//                 accessor: 'name',
//             },
//             {
//                 Header: 'Report Cell',
//                 accessor: 'cell',
//             },
//             {
//                 Header: 'Reported',
//                 accessor: 'reported',
//             },
//             {
//                 Header: 'Delete',
//                 accessor: 'delete',
//                 Cell: props =>
//                     <div
//                         style={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Button theme='orange' icon='delete' />
//                     </div>,
//                 maxWidth: 80
//             }]

//         return (
//             <ReactTable
//                 defaultPageSize={20}
//                 data={data}
//                 noDataText="No Data!"
//                 columns={columns}
//                 className='-striped -highlight'
//                 style={{ height: "calc(100vh - 80px)" }}
//                 SubComponent={row => {
//                     const moreData = Object.keys(row.original).map((key) => {
//                         // return {
//                         //     property: key,
//                         //     value: row.original[key].toString(),
//                         // }
//                     });
//                     return (

//                         <div
//                             style={{ padding: "20px" }}>
//                             {moreData}
//                         </div>
//                     );
//                 }}
//             />
//         );
//     }

// }

// class User extends React.Component {

//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         data: jasonData()
//     //     };
//     // }

//     render() {

//         const data = [
//             {
//                 id: 1,
//                 name: 'Tanner Linsley',
//                 reported: 3
//             },
//             {
//                 id: 2,
//                 name: 'Tanner Linsley',
//                 reported: 2
//             },
//             {
//                 id: 3,
//                 name: 'Tanner Linsley',
//                 reported: 3
//             },
//         ]

//         // const { data } = this.state;
//         const columns = [
//             {
//                 Header: 'ID',
//                 accessor: 'id'
//             },
//             {
//                 Header: 'Name',
//                 accessor: 'name'
//             },
//             {
//                 Header: 'Reported',
//                 accessor: 'reported',
//             }]

//         return (
//             <ReactTable
//                 defaultPageSize={20}
//                 data={data}
//                 columns={columns}
//                 noDataText="No Data!"
//                 className='-striped -highlight'
//                 style={{ height: "calc(100vh - 80px)" }}
//             />
//         );
//     }

// }

// class Admin extends React.Component {

//     render() {

//         return (
//             <div>
//                 <NavBar>
//                     <NavLeft content='Gick Admin Page'/>
//                 </NavBar>
//                 <div className={css(styles.div)} >
//                     <div className={css(styles.item)}>
//                         <input className={css(styles.input)} type='radio' name='tabMenu' id='active' defaultChecked='checked' />
//                         <label htmlFor='active' className={css(styles.menuitem)}>
//                             <SubNavItem content='BoardGame(テーブルヘッダーをクリックして並び替え)' icon='boardgame' />
//                         </label>
//                         <div className={css(styles.table)}>
//                             <Game />
//                         </div>
//                     </div>
//                     <div className={css(styles.item)}>
//                         <input className={css(styles.input)} type='radio' name='tabMenu' id='news' />
//                         <label htmlFor='news' className={css(styles.menuitem)}>
//                             <SubNavItem content='User(テーブルヘッダーをクリックして並び替え)' icon='users' />
//                         </label>
//                         <div className={css(styles.table)}>
//                             <User />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

// }

// export default Admin;