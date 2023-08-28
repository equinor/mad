import AsyncStorage from '@react-native-async-storage/async-storage';
import { Spinner } from 'mad-expo-core';
import { useEffect, useState } from 'react';
import { Environment } from 'src/types';

import {
  ChangeLog,
  Release,
} from '../components/common/organisms/ChangeLog';
import * as mockData from '../resources/mock-data.json';
import { authenticateSilently } from '../services/auth';

type ReleaseNoteScreenProps = {
  name: string;
  version: string;
  environment: Environment;
  scopes: string[];
  navigation: any;
  redirectRoute: string;
  isDemoMode?: boolean;
};

export const ReleaseNoteScreen = ({
  name,
  version,
  environment,
  scopes,
  navigation,
  redirectRoute,
  isDemoMode = false,
}: ReleaseNoteScreenProps) => {
  const [release, setRelease] = useState<Release | null>(null);
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const versionStorageKey = `${name}-version`;

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem(versionStorageKey, value);
    } catch (e) {
      // TODO: Saving error
    }
  };

  useEffect(() => {
    const fetchRelease = async () => {
      try {
        const storedVersion = await AsyncStorage.getItem(versionStorageKey);
        if (storedVersion === version) {
          setIsFetching(false);
          return;
        }
      } catch (e) {
        // TODO: Error reading value
      }

      if (isDemoMode) {
        setRelease(mockData);
        setIsFetching(false);
      } else {
        const env = environment === "prod" ? `` : `${environment}/`;
        authenticateSilently(scopes)
          .then((response) => {
            fetch(
              `https://api.statoil.com/app/mad/${env}api/v1.1/ReleaseNote/${name}/${version}`,
              {
                method: 'GET',
                headers: new Headers({
                  Authorization: response
                    ? `Bearer ${response.accessToken}`
                    : '',
                }),
              }
            )
              .then((res) =>
                res.json().then((data) => {
                  setRelease(() => ({
                    ...data,
                  }));
                  setIsFetching(false);
                })
              )
              .catch((error) => {
                setError(error);
                setIsFetching(false);
              });
          })
          .catch((error) => {
            setError(error);
            setIsFetching(false);
          });
      }
    };

    fetchRelease();
  }, []);

  if (error || (!isFetching && !release)) {
    navigation.navigate(redirectRoute);
    return <></>;
  }

  if (!release) {
    return <Spinner />;
  }

  return (
    <ChangeLog
      release={release}
      onPressAffirm={() => {
        storeData(version);
        navigation.navigate(redirectRoute);
      }}
    />
  );
};
