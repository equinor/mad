import React, { useState } from "react";
import { Typography } from "@equinor/mad-components";
import { Image, ImageSourcePropType, Pressable, StyleSheet, View } from "react-native";
import { DemoButton } from "./components/DemoButton";
import { LoginButton } from "./components/LoginButton";


type LoginScreenProps = {title:string, disableDemoMode?: boolean, logoSource: ImageSourcePropType, onDemoPress?: () => void, onLoginPress?: () => void}
export const LoginScreen = ({title, disableDemoMode = false, logoSource, onDemoPress, onLoginPress}:LoginScreenProps) => {
    const [logoPressCount, setLogoPressCount] = useState(0);
    const shouldDisplayDemoModeButton = disableDemoMode !== true && logoPressCount >= 5
    return <View style={styles.container}>
    <Typography variant="h1" bold color={'#3D3D3D'}>
      {title}
    </Typography>
    <Pressable
      onPress={() => {
        {
          setLogoPressCount((prevLogoPressCount) => prevLogoPressCount + 1);
        }
      }}
    >
      <Image
        source={logoSource}
        resizeMode="contain"
        style={styles.logo}
      />
    </Pressable>

    <View>
      <LoginButton onPress={onLoginPress} />
      {shouldDisplayDemoModeButton && <DemoButton onPress={onDemoPress} />}
    </View>
  </View>
}

const styles = StyleSheet.create({
    container: {flex:1, flexDirection: 'column'},
    logo: {height: 360, width: 360}
})

