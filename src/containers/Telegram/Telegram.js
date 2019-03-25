// import React from "react";import colors from "../../colors";
// import { StyleSheet } from "react-native";
// import ExtraItem from "./ExtraItem";

// const crt = {
//   "0%": {
//     opacity: "0.9"
//   },
//   "50%": {
//     opacity: "1"
//   }
// };
// const blinking = {
//   "from, to": { borderColor: "transparent" },
//   "50%": { borderColor: "#14fdce" }
// };
// const crtGlow = {
//   "0%": {
//     opacity: "0.1"
//   },
//   "50%": {
//     opacity: "0.2"
//   }
// };
// const vline = {
//   "0%": {
//     top: "0px"
//   },
//   "100%": {
//     top: "100%"
//   }
// };
// // TrunOnOff
// const flicker = {
//   "0%": {
//     opacity: "0.9137441186"
//   },
//   "5%": {
//     opacity: "0.7365967797"
//   },
//   "10%": {
//     opacity: ".7878735669"
//   },
//   "15%": {
//     opacity: "0.295641987"
//   },
//   "20%": {
//     opacity: "0.0506634383"
//   },
//   "25%": {
//     opacity: "0.6420445767"
//   },
//   "30% ": {
//     opacity: "0.9084750469"
//   },
//   "35% ": {
//     opacity: "0.4027936024"
//   },
//   "40%": {
//     opacity: "0.3309121469"
//   },
//   "45%": {
//     opacity: "0.7241561773"
//   },
//   "50% ": {
//     opacity: "0.7524635879"
//   },
//   "55%": {
//     opacity: "0.406805358"
//   },
//   "60%": {
//     opacity: "0.6174440772"
//   },
//   "65%": {
//     opacity: "0.0252240783"
//   },
//   "70% ": {
//     opacity: "0.6106609706"
//   },
//   "75%": {
//     opacity: "0.5198461386"
//   },
//   "80%": {
//     opacity: "0.0963849744"
//   },
//   "85%": {
//     opacity: "0.2428222683"
//   },
//   "90%": {
//     opacity: "0.4070432171"
//   },
//   "95%": {
//     opacity: "0.8597238733"
//   },
//   "100%": {
//     opacity: "0.9273480388"
//   }
// };
// const turnOn = {
//   "0%": {
//     transform: "scale(1, 0.8) translate3d(0, 0, 0)",
//     filter: " brightness(30)",
//     opacity: "1"
//   },
//   "3.5%": {
//     transform: "scale(1, 0.8) translate3d(0, 100%, 0)"
//   },
//   "3.6%": {
//     transform: "scale(1, 0.8) translate3d(0, -100%, 0)",
//     opacity: "1"
//   },
//   "9%": {
//     transform: "scale(1.3, 0.6) translate3d(0, 100%, 0)",
//     filter: "brightness(30)",
//     opacity: "0"
//   },
//   "11%": {
//     transform: "scale(1, 1) translate3d(0, 0, 0)",
//     filter: "contrast(0) brightness(0)",
//     opacity: "0"
//   },
//   "100%": {
//     transform: "scale(1, 1) translate3d(0, 0, 0)",
//     filter: "contrast(1) brightness(1.1) saturate(1.1)",
//     opacity: "1"
//   }
// };
// const turnOff = {
//   "0%": {
//     transform: "scale(1, 1.3) translate3d(0, 0, 0)",
//     filter: "brightness(1)",
//     opacity: "1"
//   },
//   "60%": {
//     transform: "scale(1.3, 0.001) translate3d(0, 0, 0)",
//     filter: "brightness(10)"
//   },
//   "100%": {
//     animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
//     transform: "scale(0, 0.0001) translate3d(0, 0, 0)",
//     filter: "brightness(50)"
//   }
// };

// const styles = StyleSheet.create({
//   div: {
//     display: "flex",
//     color: "#14fdce",
//     fontSmoothing: "none",
//     pointerEvents: "none",
//     backgroundColor: "transparent",
//     overflow: "hidden",
//     height: "100vh",
//     width: "100vw"
//   },
//   output: {
//     position: "absolute",
//     backgroundColor: "#031e11",
//     textShadow: "0rem 0.2rem 1rem #0c7b46",
//     height: "100vh",
//     width: "100vw",
//     overflow: "hidden",
//     overflowY: "auto",
//     boxShadow: "inset 0 0 18rem black, inset 0 0 3rem black, 0 0 10rem black",
//     pointerEvents: "auto",
//     animationName: [turnOn],
//     animationDuration: "4s",
//     animationIterationCount: "linear",
//     animationFillMode: "forwards",
//     // animationName: [crt],
//     // animationDuration: '10ms',
//     // animationIterationCount: 'infinite',
//     ":after": {
//       content: '""',
//       display: "flex",
//       position: "absolute",
//       top: "0",
//       left: "0",
//       bottom: "0",
//       right: "0",
//       background: "rgba(18, 16, 16, 0.1)",
//       opacity: "0",
//       zIndex: "2",
//       pointerEvents: "none"
//     },
//     ":before": {
//       content: '""',
//       display: "flex",
//       position: "absolute",
//       top: "0",
//       left: "0",
//       bottom: "0",
//       right: "0",
//       background:
//         "-webkit-gradient(linear, left top, left bottom, color-stop(50%, rgba(18, 16, 16, 0)), color-stop(50%, rgba(0, 0, 0, 0.25))), -webkit-gradient(linear, left top, right top, from(rgba(255, 0, 0, 0.06)), color-stop(rgba(0, 255, 0, 0.02)), to(rgba(0, 0, 255, 0.06)))",
//       background:
//         "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
//       zIndex: "2",
//       backgroundSize: "100% 2px, 3px 100%",
//       pointerEvents: "none"
//     }
//   },
//   content: {
//     padding: "3rem 2rem",
//     position: "relative",
//     display: "flex",
//     flexDirection: "column"
//   },
//   scanlines: {
//     position: "absolute",
//     background:
//       "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.6))",
//     backgroundSize: "100% 0.3rem",
//     height: "100vh",
//     width: "100vw"
//   },
//   glow: {
//     position: "fixed",
//     opacity: "0.15",
//     background:
//       "radial-gradient(circle at center, #1bd459 0%, rgba(27, 212, 89, 0.88) 58%, rgba(21, 235, 92, 0.57) 80%, rgba(19, 94, 29, 0.27) 93%, rgba(10, 23, 12, 0) 100%)",
//     animationName: [crtGlow],
//     animationDuration: "60s",
//     animationIterationCount: "infinite"
//   },
//   title: {
//     textTransform: "uppercase"
//   },
//   link: {
//     borderBottom: "0.2rem solid #14fdce",
//     color: "#14fdce",
//     cursor: "pointer",
//     textDecorationLine: "none",
//     ":hover": {
//       background: "#14fdce",
//       color: "#031e11"
//     },
//     ":focus": {
//       background: "#14fdce",
//       color: "#031e11"
//     },
//     ":active": {
//       background: "#14fdce",
//       color: "#031e11"
//     }
//   },
//   overlay: {
//     zIndex: "1",
//     position: "fixed",
//     height: "100%",
//     width: "100%",
//     minHeight: "1px",
//     content: '""',
//     ":before": {
//       content: '""',
//       position: "absolute",
//       top: "0px",
//       width: "100%",
//       height: "2px",
//       background:
//         "linear-gradient(to bottom, rgba(255, 0, 0, 0), snow 50%, rgba(255, 255,255, 0.98) 51%, rgba(255, 0, 0, 0))",
//       opacity: ".1",
//       animationName: [vline],
//       animationDuration: "2.5s",
//       animationIterationCount: "infinite"
//     }
//   },
//   switchInput: {
//     display: "none",
//     ":checked + label:after": {
//       content: '"on"'
//     },
//     ":checked ~ div:after": {
//       animationName: [flicker],
//       animationDuration: "0.15s",
//       animationIterationCount: "infinite"
//     },
//     ":checked ~ div": {
//       animationName: [turnOff],
//       animationDuration: "0.55s",
//       animationIterationCount: "cubic-bezier(0.23, 1, 0.32, 1)",
//       animationFillMode: "forwards"
//     }
//   },
//   switchLabel: {
//     pointerEvents: "auto",
//     zIndex: "99",
//     justifySelf: "flex-end",
//     marginTop: "2rem",
//     marginBottom: "auto",
//     marginLeft: "auto",
//     marginRight: "3rem",
//     border: "2px solid #fff",
//     borderRadius: "4px",
//     padding: "1rem 2rem",
//     cursor: "pointer",
//     ":hover": {
//       background: colors.background
//     },
//     ":after": {
//       content: '"off"'
//     }
//   },
//   inputBar: {
//     display: "flex",
//     flex: "1",
//     justifySelf: "flex-start",
//     marginTop: "auto",
//     pointerEvents: "auto",
//     wordBreak: "break-word"
//   },
//   cursor: {
//     content: '""',
//     display: "flex",
//     justifySelf: "flex-end",
//     alignSelf: "flex-end",
//     width: "0",
//     backgroundColor: "transparent",
//     borderLeft: ".5em solid",
//     lineHeight: "1rem",
//     animationName: [blinking],
//     animationDuration: "1s",
//     animationIterationCount: "infinite",
//     animationTimingFunction: "linear"
//   },
//   chatBar: {
//     // width: '100%',
//     ":focus": {
//       outline: "none"
//     },
//     display: "flex",
//     flex: "1",
//     backgroundColor: "transparent",
//     border: "none",
//     fontSize: "1rem",
//     color: "#14fdce",
//     textShadow: "0rem 0.2rem 1rem #0c7b46",
//     letterSpacing: "2px",
//     fontFamily:
//       '"varela_roundregular","Whitney","Helvetica Neue","Helvetica","Segoe UI","Microsoft YaHei","Meiryo UI","Flaticon","Material Design Icons","Arial","sans-serif"'
//   }
// });

// class Telegram extends React.Component {
//   constructor() {
//     super()
//   }
//   componentWillUpdate(nextProps){
//     if(nextProps.closing) {
//       setTimeout(() => this.props.onClose && this.props.onClose(), 500);
//     }
//   }
//   render() {
//     const {closing} = this.props;
//     const checked = closing && {defaultChecked: "checked"} || {}
//     return (
//       <div className={css(styles.div)}>
//         <input
//           className={css(styles.switchInput)}
//           type="checkbox"
//           id="switch"
//           {...checked}
//         />
//         <div className={css(styles.output)} id="crt">
//           <section className={css(styles.content)}>
//             <ExtraItem content="嗯 ？？？ 你能 看见我 ？" />
//             <div className={css(styles.inputBar)}>
//               ><input type="text" autoFocus/>
//               <span className={css(styles.cursor)} />
//               {/* <input className={css(styles.input)} type='text' name='type' id='user' autoFocus='autofocus' /> */}
//             </div>
//           </section>
//         </div>
//         <div className={css(styles.scanlines)} />
//         <div className={css(styles.glow)} />
//         <div className={css(styles.overlay)} />
//       </div>
//     );
//   }
// }

// export default Telegram;
