// import * as Device from 'expo-device';

// import { Button, Typography } from '@equinor/mad-components';
// import React, { useEffect, useState } from 'react';
// import {
//   InputAccessoryView,
//   Keyboard, LayoutAnimation,
//   Platform,
//   StyleSheet,
//   TextInput,
//   View
// } from "react-native";
// import { getAccount } from 'mad-expo-core';
// import Colors from '../stylesheets/colors';
// import type { MSALAccount } from 'react-native-msal';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { dictionary, setLanguage } from '../resources/language/dictionary';
// import { DataField } from './components/DataField';
// import { createIncident } from '../utils/CreateIncident';

// const CreateIncidentScreen = (props: {
//   locale: string;
//   timezone: string;
//   scopes: string[];
//   apiBaseUrl: string;
//   product: string;
//   languageCode?: string;
// }) => {
//   props.languageCode ? setLanguage(props.languageCode) : setLanguage('en');
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [ticket, setTicket] = useState('');
//   const [error, setError] = useState('');
//   const [isBusy, setIsBusy] = useState(false);
//   const [account, setAccount] = useState<MSALAccount | null>(null);

//   const isWeb = Platform.OS === 'web';

//   useEffect(() => {
//     getAccount()
//       .then((acc) => {
//         setAccount(acc);
//       })
//       .catch((error) => {
//         throw error;
//       });
//   }, []);

//   const userData: { [key: string]: string } = {
//     [dictionary('information.user')]: `${account?.username}`,
//     [dictionary('information.deviceBrand')]: `${isWeb ? 'web' : Device.brand}`,
//     [dictionary('information.device')]: `${isWeb ? 'web' : Device.modelName} `,
//     [dictionary('information.OS')]: `${Device.osName} ${Device.osVersion}`,
//     [dictionary('information.timezone')]: `${props?.timezone}`,
//     [dictionary('information.locale')]: `${props?.locale}`,
//   };

//   const createDescription = (): string => {
//     let systemMsg = '';
//     for (const key in userData) {
//       systemMsg += `${key}: ${userData[key]}\n`;
//     }
//     return `${systemMsg}\n${description}`;
//   };

//   const onPressSubmit = () => {
//     setIsBusy(true);
//     createIncident({
//       data: {
//         callerEmail: account?.username,
//         title: title,
//         description: createDescription(),
//       },
//       scopes: props.scopes,
//       product: props.product,
//       apiBaseUrl: props.apiBaseUrl,
//     }).then((response => {

//       LayoutAnimation.configureNext({
//         duration: 500,
//         update: {
//           type: LayoutAnimation.Types.easeInEaseOut
//         },
//         create: {
//           type: LayoutAnimation.Types.easeInEaseOut,
//           property: LayoutAnimation.Properties.opacity
//         }
//       });

//       if (response.ok) {
//         response.json().then((data) => {
//           const result = JSON.parse(data).result;
//           result.status === 'success'
//             ? setTicket(result.details.number)
//             : setError(result.status);
//         });
//       } else {
//         setError(response.statusText ?? "Unknown error");
//       }
//       setIsBusy(false);
//       setDescription('');
//       setTitle('');
//     }));
//   };

//   return (
//     <KeyboardAwareScrollView>
//       <View style={{ backgroundColor: Colors.GRAY_4 }}>
//         <View style={styles.containerStyle}>
//           <Typography variant="h1" style={{ marginBottom: 32 }}>
//             {dictionary('createIncident.title')}
//           </Typography>
//           <Typography style={{ marginBottom: 24 }} medium>
//             {dictionary('createIncident.info')}
//           </Typography>

//           {Object.entries(userData).map(([key, value]) => {
//             return (
//               <DataField
//                 key={key}
//                 itemKey={key}
//                 value={value}
//                 viewStyle={styles.dataFieldStyle}
//               />
//             );
//           })}
//           {ticket && (
//             <View
//               style={[styles.boxStyle, { borderColor: Colors.EQUINOR_PRIMARY }]}
//             >
//               <Typography>
//                 {dictionary('createIncident.created1') +
//                   ticket +
//                   dictionary('createIncident.created2')}
//               </Typography>
//             </View>
//           )}
//           {error && (
//             <View style={[styles.boxStyle, { borderColor: Colors.RED }]}>
//               <Typography>
//                 {dictionary('createIncident.error') + error}
//               </Typography>
//             </View>
//           )}
//           <TextInput
//             style={styles.titleInputStyle}
//             onChangeText={(e) => setTitle(e.toString())}
//             placeholder={dictionary('createIncident.placeholderTitle')}
//             textAlignVertical={'top'}
//             value={title}
//             inputAccessoryViewID={'id'}
//             placeholderTextColor={Colors.GRAY_2}
//           />
//           <TextInput
//             style={styles.textFieldStyle}
//             onChangeText={(e) => setDescription(e.toString())}
//             multiline
//             placeholder={dictionary('createIncident.placeholderDescription')}
//             textAlignVertical={'top'}
//             value={description}
//             inputAccessoryViewID={'id'}
//             placeholderTextColor={Colors.GRAY_2}
//           />
//           {!isWeb && (
//             <InputAccessoryView nativeID={'id'}>
//               <Button onPress={() => Keyboard.dismiss()} title="Done" />
//             </InputAccessoryView>
//           )}
//           <View style={styles.buttonContainerStyle}>
//             <Button
//               title="Send"
//               style={styles.buttonStyle}
//               disabled={description === '' || title === '' || isBusy}
//               onPress={onPressSubmit}
//             />
//           </View>
//         </View>
//       </View>
//     </KeyboardAwareScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   containerStyle: {
//     padding: 24,
//     backgroundColor: Colors.WHITE,
//     marginTop: 40
//   },
//   titleInputStyle: {
//     height: 60,
//     width: '100%',
//     backgroundColor: Colors.GRAY_4,
//     padding: 16,
//     marginTop: 16,
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: 'gray',
//   },
//   textFieldStyle: {
//     height: 200,
//     width: '100%',
//     backgroundColor: Colors.GRAY_4,
//     padding: 16,
//     paddingTop: 16,
//     marginVertical: 16,
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: 'gray',
//   },
//   dataFieldStyle: {
//     display: 'flex',
//     flexDirection: 'row',
//     padding: 8,
//     borderColor: Colors.GRAY_3,
//     borderBottomWidth: 1,
//     marginVertical: 8,
//   },
//   boxStyle: {
//     padding: 24,
//     marginTop: 16,
//     borderWidth: 2,
//     borderRadius: 4,
//   },
//   buttonContainerStyle: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
//   buttonStyle: {
//     width: 100,
//     borderRadius: 3,
//     marginTop: 16,
//   },
// });

// export default CreateIncidentScreen;
