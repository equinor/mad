// import {
//   Image,
//   ImageSourcePropType,
//   Pressable,
//   StyleSheet,
//   View,
//   AppState,
// } from 'react-native';
// import React, { useEffect, useState } from 'react';

// import LoginButton from '../components/authentication/LoginButton';
// import { authenticateSilently, IClaims } from '../services/auth';
// import colors from './stylesheets/colors';
// import equinorLogo from '../resources/images/equinor_logo.png';
// import { isMsalConnected } from '../services/auth';
// import { Button, Typography } from '../components/common';
// import {
//   handleAppStatusChange,
//   metricKeys,
//   setUsername,
//   track,
//   validateAppInsightsInit,
// } from '../services/appInsights';
// import type { MSALAccount } from 'react-native-msal';

// export default function LoginScreen(props: {
//   logo: ImageSourcePropType;
//   mainRoute: string;
//   navigation: any;
//   scopes: string[];
//   eds?: boolean;
//   title?: string;
//   showDemoButton?: boolean;
//   useDepartmentId?: boolean;
//   onLoginSuccessful?: (account: MSALAccount) => void;
//   onDemoPress?: () => void;
// }) {
//   const [logoPressCount, setLogoPressCount] = useState(0);

//   useEffect(() => {
//     validateAppInsightsInit();
//     isMsalConnected() &&
//       authenticateSilently(props.scopes)
//         .catch((e) => console.warn(e))
//         .then((res) => {
//           if (res) {
//             if (props.onLoginSuccessful) props.onLoginSuccessful(res.account);
//             const objectId = (res.account.claims as IClaims)?.oid;
//             setUsername(res.account.username, objectId);
//             track(metricKeys.AUTHENTICATION_AUTOMATIC);
//             props.navigation.navigate(props.mainRoute);
//           }
//         });
//     const subscription = AppState.addEventListener(
//       'change',
//       handleAppStatusChange
//     );
//     return () => subscription.remove();
//   }, []);

//   const renderLoginButton = () => (
//     <LoginButton
//       mainRoute={props.mainRoute}
//       navigation={props.navigation}
//       scopes={props.scopes}
//       onLoginSuccessful={props.onLoginSuccessful}
//       eds
//     />
//   );

//   const renderDemoButton = () => (
//     <Button
//       title="Demo"
//       onPress={() => {
//         if (props.onDemoPress) {
//           props.onDemoPress();
//           track(metricKeys.AUTHENTICATION_DEMO);
//         }
//       }}
//       viewStyle={{ marginTop: 8 }}
//     />
//   );

//   if (props.eds && props.title) {
//     return (
//       <View style={stylesEDS.container}>
//         <Typography variant="h1" bold color={'#3D3D3D'}>
//           {props.title}
//         </Typography>
//         <Pressable
//           onPress={() => {
//             {
//               setLogoPressCount((prevLogoPressCount) => prevLogoPressCount + 1);
//             }
//           }}
//         >
//           <Image
//             source={props.logo}
//             resizeMode="contain"
//             style={{ height: 360, width: 360 }}
//           />
//         </Pressable>

//         <View>
//           {renderLoginButton()}
//           {props.showDemoButton && logoPressCount >= 5 && renderDemoButton()}
//         </View>
//       </View>
//     );
//   }
//   return (
//     <View style={styles.container}>
//       <View style={styles.splashTop}>
//         <Image source={equinorLogo} resizeMode="contain" style={styles.logo} />
//       </View>
//       <View style={styles.splashBottom}>
//         <Pressable
//           style={styles.splashAppLogo}
//           onPress={() => {
//             setLogoPressCount((prevlogoPressCount) => prevlogoPressCount + 1);
//           }}
//         >
//           <Image source={props.logo} resizeMode="contain" style={styles.logo} />
//         </Pressable>
//         <View style={styles.splashAction}>
//           {renderLoginButton()}
//           {props.showDemoButton && logoPressCount >= 5 && renderDemoButton()}
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   splashTop: {
//     flex: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   splashBottom: {
//     flex: 3,
//     backgroundColor: colors.PINK_BACKGROUND,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   splashAppLogo: {
//     flex: 7,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   splashAction: {
//     flex: 3,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     height: 200,
//     width: 200,
//   },
// });

// const stylesEDS = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     paddingVertical: 72,
//   },
// });
