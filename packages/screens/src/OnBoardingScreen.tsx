import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Checkbox, Typography } from '../components/common';
import { View, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import Radiobutton from '../components/common/atoms/Radiobutton';
import Colors from '../stylesheets/colors';
import {
  DictionaryObject,
  dictionary,
  setLanguage,
} from '../resources/language/dictionary';

const OnBoardingScreen = (props: {
  config: any;
  storageKey: string;
  navigation: any;
  onSubmitRoute?: string;
  languageCode?: string;
}) => {
  const [onboardingSettings, setOnboardingSettings] = useState(
    JSON.parse(JSON.stringify({}))
  );
  props.languageCode ? setLanguage(props.languageCode) : setLanguage('en');
  const config = props.config;
  const onboardingStorageKey = props.storageKey;
  const storeData = async (value: Object | null) => {
    try {
      if (value) {
        const valueToStore = JSON.stringify(value);
        await AsyncStorage.setItem(onboardingStorageKey, valueToStore);
      } else {
        await AsyncStorage.removeItem(onboardingStorageKey);
      }
    } catch (e) {
      // saving error
    }
  };

  function setOnboardingValue(key: string, value: string | string[]) {
    let newOnboardingSettings = { ...onboardingSettings };
    newOnboardingSettings[key] = value;
    if (newOnboardingSettings != onboardingSettings)
      setOnboardingSettings(newOnboardingSettings);
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem(onboardingStorageKey);
        if (value !== null) {
          setOnboardingSettings({ ...JSON.parse(value) });
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, [onboardingStorageKey]);

  if (Object.keys(config).length === 0) return <></>;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ display: 'flex', padding: 20 }}>
        {config.map((inputConfig) => {
          if (inputConfig.inputType === 'text') {
            return (
              <Input
                key={inputConfig.inputName}
                title={inputConfig.inputName}
                text={onboardingSettings[inputConfig.inputName]}
                callback={setOnboardingValue}
              />
            );
          }
          if (inputConfig.values && inputConfig.inputType === 'select') {
            return (
              <Select
                key={inputConfig.inputName}
                title={inputConfig.inputName}
                selectedValues={
                  onboardingSettings[inputConfig.inputName]
                    ? onboardingSettings[inputConfig.inputName]
                    : []
                }
                values={inputConfig.values}
                callback={setOnboardingValue}
              />
            );
          }
          if (inputConfig.values && inputConfig.inputType === 'multiselect') {
            return (
              <Select
                key={inputConfig.inputName}
                title={inputConfig.inputName}
                selectedValues={
                  onboardingSettings[inputConfig.inputName]
                    ? onboardingSettings[inputConfig.inputName]
                    : ''
                }
                values={inputConfig.values}
                callback={setOnboardingValue}
                multiselect
              />
            );
          }
          return <></>;
        })}
        <Button
          title={dictionary('Submit')}
          onPress={() => {
            {
              config.forEach((inputConfig) => {
                if(inputConfig.onSubmit) inputConfig.onSubmit(onboardingSettings);
                storeData(onboardingSettings);
                props.navigation.replace(props.onSubmitRoute ?? 'Root');
              });
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const Input = (props: {
  title: string;
  text: string;
  callback: CallableFunction;
}) => {
  return (
    <View style={{ paddingVertical: 8 }}>
      <Typography variant="h6">{props.title}</Typography>
      <TextInput
        style={{
          padding: 8,
          marginTop: 8,
          backgroundColor: Colors.GRAY_3,
          borderStyle: 'solid',
          borderBottomWidth: 1,
        }}
        onChangeText={(text) => props.callback(props.title, text)}
        value={props.text}
      />
    </View>
  );
};

const Select = (props: {
  title: string;
  values: string[];
  selectedValues: string[];
  callback: CallableFunction;
  multiselect?: boolean;
}) => {
  return (
    <View style={{ paddingVertical: 20 }}>
      <Typography variant="h6">
        {dictionary(props.title as keyof DictionaryObject)}
      </Typography>
      {props.values.map((value, index) => (
        <View
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 8,
            borderBottomWidth: 1,
            borderColor: Colors.GRAY_5,
          }}
        >
          <Typography>{dictionary(value as keyof DictionaryObject)}</Typography>
          {props.multiselect ? (
            <Checkbox
              checked={props.selectedValues.includes(value)}
              onValueChange={(checked: boolean) => {
                let newSelectedValues = [...props.selectedValues];
                if (checked) newSelectedValues.push(value);
                if (!checked)
                  newSelectedValues = newSelectedValues.filter(
                    (v) => v !== value
                  );
                props.callback(props.title, newSelectedValues);
              }}
            />
          ) : (
            <Radiobutton
              checked={props.selectedValues.includes(value)}
              onValueChange={(checked: boolean) => {
                if (checked) {
                  props.callback(props.title, value);
                }
              }}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default OnBoardingScreen;
