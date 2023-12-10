import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

export const FocusHistory = ({ history }) => {

  if (!history || history.length === 0) return null;
  const renderItem = ({item}) => <Text style={styles.item} > - {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Focus History</Text>
      <FlatList
        data={history}
        renderItem={ renderItem }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
        flex: 1,

  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    marginTop: spacing.md,
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
  },
});
