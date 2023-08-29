import { getDateFromIsoString, getShortDate } from './utils/dateutils';
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import RenderHtml, { defaultSystemFonts } from 'react-native-render-html';
import * as showdown from 'showdown';

import Colors from '../stylesheets/colors';

import { Typography, Button } from '@equinor/mad-components';

const featureTitle = "What's new";
const affirmText = 'OK';
const converter = new showdown.Converter();
const systemFonts = [
  ...defaultSystemFonts,
  'Equinor-Regular',
  'Equinor-Medium',
];

export type Release = {
  app: string;
  version: string;
  modified: string;
  releaseNote: string;
  releaseDate: string;
};

type ChangelogProps = {
  release: Release;
  onPressAffirm: () => void;
};

export const ReleaseNotesScreen = ({ release, onPressAffirm }: ChangelogProps) => {
  const [width, setWidth] = useState(0);
  const html = { html: converter.makeHtml(release.releaseNote) };
  const date = getDateFromIsoString(release.releaseDate);
  const shortDate = date && getShortDate(date);

  return (
    <View style={styles.container}>
      <Typography style={styles.titleHeader} variant="h4">
        {featureTitle}
      </Typography>
      <ScrollView style={styles.changelogItem}>
        <Typography style={styles.versionHeader}>
          {release.version}
        </Typography>
        <Typography style={styles.subtitleHeader}>
          {shortDate}
        </Typography>
        <View
          onLayout={(event) => {
            const { width } = event.nativeEvent.layout;
            setWidth(width);
          }}
        >
          <RenderHtml
            contentWidth={width}
            source={html}
            systemFonts={systemFonts}
            tagsStyles={{
              li: {
                marginBottom: 10,
                fontFamily: 'Equinor-Medium',
                fontSize: 18,
                color: Colors.GRAY_1,
              },
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button title={affirmText} onPress={onPressAffirm} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
    backgroundColor: Colors.GRAY_4,
  },
  titleHeader: {
    marginVertical: 15,
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 30,
    color: Colors.GRAY_1,
  },
  changelogItem: {
    marginBottom: 15,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  versionHeader: {
    marginVertical: 15,
    fontWeight: '500',
    fontSize: 36,
    color: Colors.GRAY_1,
  },
  subtitleHeader: {
    fontSize: 18,
    marginVertical: 5,
    color: Colors.GRAY_1,
  },
  footer: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.GRAY_2,
    borderTopWidth: 0.5,
  },
});