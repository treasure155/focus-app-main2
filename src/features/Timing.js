import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(0.1)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="40" onPress={() => onChangeTime(40)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="59" onPress={() => onChangeTime(59)} />
      </View>
    </>
    
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});