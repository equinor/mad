// import React from "react";
// import {SettingsScreen} from "@equinor/mad-screens"
// import { dictionary } from "../language/dictionary";


// const SettingsScreenImplementation = () => {
//     const username = account?.username || "demo user";
//     const [account, setAccount] = useState<MSALAccount>(null);
//   useEffect(() => {
//     props.navigation.setOptions({
//       headerBackTitle: props.backLabel
//         ? props.backLabel
//         : dictionary('settings.back'),
//       headerTintColor: Colors.EQUINOR_PRIMARY,
//     });
//     getAccount()
//       .then((acc) => {
//         setAccount(acc);
//       })
//       .catch((error) => {
//         throw error;
//       });
//   }, []);
//     return <SettingsScreen username={account.username}
//     loggedInAs={dictionary('settings.loggedInAs')}
//     logoutButtonTitle={dictionary('settings.logOut')}
//     onPressLogoutButton={() => {
//         logout()
//           .catch((e) => console.warn(e))
//           .then(() => props.navigation.navigate(props.routeAfterLogout));
//         if (props.onLogout) {
//           props.onLogout();
//         }
//       }}/>
// }