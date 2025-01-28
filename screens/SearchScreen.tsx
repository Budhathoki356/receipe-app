import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image, TextStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/constants/theme';
import { popularRecipes } from '@/data/recipesData';

export default function SearchScreen({ navigation }: { navigation: any }) {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }
    
    const query = searchQuery.toLowerCase().trim();
    
    return popularRecipes.filter(recipe => 
      recipe.title.toLowerCase().includes(query) ||
      (recipe.category?.toLowerCase() || '').includes(query)
    );
  }, [searchQuery]);

  const showResults = searchQuery.trim().length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.default} />
        </TouchableOpacity>
        <Text style={styles.title}>Search</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={theme.colors.default} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search recipes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCapitalize="none"
        />
      </View>

      {showResults ? (
        <ScrollView style={styles.resultsContainer}>
          {searchResults.length > 0 ? (
            searchResults.map((recipe) => (
              <TouchableOpacity
                key={recipe.id}
                style={styles.resultCard}
                onPress={() => navigation.navigate('RecipeDetail', { recipeId: recipe.id })}
              >
                <Image source={recipe.image} style={styles.resultImage} />
                <View style={styles.resultInfo}>
                  <Text style={styles.resultTitle} numberOfLines={1}>
                    {recipe.title}
                  </Text>
                  <Text style={styles.resultCategory}>{recipe.category}</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color={theme.colors.default} />
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.noResults}>
              <Text style={styles.noResultsText}>No recipes found</Text>
            </View>
          )}
        </ScrollView>
      ) : (
        <View style={styles.popularSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Recipes</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Popular')}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popularRecipes.slice(0, 5).map((recipe) => (
              <TouchableOpacity
                key={recipe.id}
                style={styles.recipeCard}
                onPress={() => navigation.navigate('RecipeDetail', { recipeId: recipe.id })}
              >
                <Image source={recipe.image} style={styles.recipeImage} />
                <Text style={styles.recipeTitle} numberOfLines={1}>
                  {recipe.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight as TextStyle['fontWeight'],
    marginLeft: theme.spacing.md,
    color: theme.colors.default,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    height: 48,
    backgroundColor: theme.colors.tertiary,
    borderRadius: theme.borderRadius.md,
  },
  searchIcon: {
    marginRight: theme.spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: theme.colors.default,
  },
  popularSection: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.default,
  },
  viewAll: {
    fontSize: 14,
    color: theme.colors.default,
  },
  recipeCard: {
    width: 140,
    marginRight: theme.spacing.lg,
  },
  recipeImage: {
    width: '100%',
    height: 140,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
  },
  recipeTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.colors.default,
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  resultCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.tertiary,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
  },
  resultImage: {
    width: 60,
    height: 60,
    borderRadius: theme.borderRadius.sm,
  },
  resultInfo: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.default,
    marginBottom: 4,
  },
  resultCategory: {
    fontSize: 14,
    color: theme.colors.default,
    opacity: 0.7,
  },
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
  },
  noResultsText: {
    fontSize: 16,
    color: theme.colors.default,
    opacity: 0.7,
  },
}); 