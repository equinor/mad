import { ScrollView, View } from 'react-native';
import { Button, IconName, Typography } from '@equinor/mad-components';
import React from 'react';

export type SettingsScreenProps = {
  username: string
  logoutButtonTitle: string
  loggedInAs: string
  onPressLogoutButton: () => void;
  onPressSettingsItem: (route:string) => void
  config: Array<{ icon: IconName; title: string; route: string }>;
  onLogout?: () => void;
  routeAfterLogout: string;
  backLabel?: string;
  navigation: any;
  languageCode?: string;
}
export const SettingsScreen = ({username, logoutButtonTitle, loggedInAs, onPressLogoutButton, onPressSettingsItem, config}: SettingsScreenProps) => {
  
  return (
    <ScrollView>
      <View style={{ padding: 24 }}>
        {config.map(({icon, title, route}, index) => (
          <Setting
            key={index}
            icon={icon}
            title={title}
            route={route}
            onPress={onPressSettingsItem}
          />
        ))}
        <View style={{ paddingTop: 16 }}>
          <Typography bold>{loggedInAs}</Typography>
          <Typography style={{ paddingTop: 8 }}>{username + '\n'}</Typography>
          <Button
            title={logoutButtonTitle}
            onPress={onPressLogoutButton}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export type SettingProps = {icon: IconName, title:string, route: string, onPress: (route:string) => void}
const Setting = ({icon, title, route, onPress}: SettingProps) => {
  return (
    <Button
      title={title}
      iconName={icon}
      onPress={() => onPress(route)}
      variant='ghost'
      style={{ paddingVertical: 12, paddingLeft: 0 }}
    />
  );
};

