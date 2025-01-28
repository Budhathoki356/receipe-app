import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import { theme } from '@/constants/theme';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onPress: () => void;
}

export const Checkbox = ({ label, checked, onPress }: CheckboxProps) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <View style={styles.checkmark} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create<{
  container: ViewStyle;
  checkbox: ViewStyle;
  checked: ViewStyle;
  checkmark: ViewStyle;
  label: TextStyle;
}>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: theme.colors.default,
    marginRight: theme.spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: theme.colors.default,
  },
  checkmark: {
    width: 12,
    height: 12,
    backgroundColor: theme.colors.background,
    borderRadius: 2,
  },
  label: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.body.fontWeight as TextStyle['fontWeight'],
    color: theme.colors.default,
  },
});