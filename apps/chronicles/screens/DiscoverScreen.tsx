import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import {Paper} from "@equinor/mad-components"

export default function DiscoverScreen({ navigation }: RootTabScreenProps<'Discover'>) {
  return (
    <ScrollView style={{backgroundColor: "white"}} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Paper</Text>
      <View style={{backgroundColor: "#D0D0D0", padding: 10, flex: 1, alignItems: "stretch", width: "100%", justifyContent: "space-evenly", height: 2000}}>
        <Paper elevation="none" style={{width: "auto", height: 50}}>
          <Text>none</Text>
        </Paper>
        <Paper elevation="raised" style={{width: "auto", height: 50}}>
          <Text>raised</Text>
        </Paper>
        <Paper elevation="overlay" style={{width: "auto", height: 50}}>
          <Text>overlay</Text>
        </Paper>
        <Paper elevation="sticky" style={{width: "auto", height: 50}}>
          <Text>sticky</Text>
        </Paper>
        <Paper elevation="temporary_nav" style={{width: "auto", height: 50}}>
          <Text>temporary_nav</Text>
        </Paper>
        <Paper elevation="above_scrim" style={{width: "auto", height: 50}}>
          <Text>above_scrim</Text>
        </Paper>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
