import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ViewStyle, TextStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';

interface AgeGroup {
  id: string;
  label: string;
}

interface Allergy {
  id: string;
  label: string;
}

const ageGroups: AgeGroup[] = [
  { id: '0-1', label: 'Infant (0-1 years)' },
  { id: '1-3', label: 'Toddler (1-3 years)' },
  { id: '3-5', label: 'Preschooler (3-5 years)' },
  { id: '5-12', label: 'School-age (5-12 years)' },
  { id: '12+', label: 'Teen (12+ years)' },
];

const allergies: Allergy[] = [
  { id: 'none', label: 'None' },
  { id: 'milk', label: 'Milk' },
  { id: 'egg', label: 'Egg' },
  { id: 'peanut', label: 'Peanut' },
  { id: 'fish', label: 'Fish' },
  { id: 'wheat', label: 'Wheat' },
  { id: 'other', label: 'Other Sensitivity' },
];

export default function OnboardingScreen({ navigation }: { navigation: any }) {
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);

  const handleAgeSelect = (id: string) => {
    setSelectedAges(prev => {
      if (prev.includes(id)) {
        return prev.filter(ageId => ageId !== id);
      }
      return [...prev, id];
    });
  };

  const handleAllergySelect = (id: string) => {
    setSelectedAllergies(prev => {
      // If "None" is selected, clear other selections
      if (id === 'none') {
        return ['none'];
      }
      // If another allergy is selected, remove "None"
      const newSelection = prev.filter(allergyId => allergyId !== 'none');
      if (prev.includes(id)) {
        return newSelection.filter(allergyId => allergyId !== id);
      }
      return [...newSelection, id];
    });
  };

  const handleComplete = () => {
    navigation.navigate('Tabs');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.question}>What is the age of your children?</Text>
            {ageGroups.map((age) => (
              <Checkbox
                key={age.id}
                label={age.label}
                checked={selectedAges.includes(age.id)}
                onPress={() => handleAgeSelect(age.id)}
              />
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.question}>Does your child have food allergies?</Text>
            {allergies.map((allergy) => (
              <Checkbox
                key={allergy.id}
                label={allergy.label}
                checked={selectedAllergies.includes(allergy.id)}
                onPress={() => handleAllergySelect(allergy.id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button 
          variant="secondary"
          onPress={handleComplete}
        >
          Done
        </Button>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create<{
  container: ViewStyle;
  scrollView: ViewStyle;
  content: ViewStyle;
  section: ViewStyle;
  question: TextStyle;
  footer: ViewStyle;
}>({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: theme.spacing.lg,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  question: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight as TextStyle['fontWeight'],
    marginBottom: theme.spacing.lg,
    color: theme.colors.default,
  },
  footer: {
    padding: theme.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: theme.colors.secondary,
  },
});