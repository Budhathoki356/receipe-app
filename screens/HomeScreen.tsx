import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories, popularRecipes } from '@/data/recipesData';
import { RecipeCard } from '@/components/RecipeCard';

const { width } = Dimensions.get('window');
const CARD_GAP = 16;
const CARD_WIDTH = (width - 48 - CARD_GAP) / 2; // 48 = padding (16 * 2) + gap (16)

export default function HomeScreen({ navigation }: {navigation: any}) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.userName}>Eklal Budhathoki</Text>
        </View>
      </View>

      {/* Categories */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Category</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Category')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.categoryContainer}
        contentContainerStyle={styles.categoryContent}
      >
        {categories.map((category, index) => (
          <TouchableOpacity 
            key={category} 
            style={[
              styles.categoryItem,
              index === 0 && styles.activeCategory
            ]}
            onPress={() => navigation.navigate('Category', { initialCategory: category })}
          >
            <Text style={[
              styles.categoryText,
              index === 0 && styles.activeCategoryText
            ]}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Popular Recipes */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Recipes</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Popular')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.popularRecipesContent}
      >
        {popularRecipes.slice(0, 2).map((recipe) => (
          <View key={recipe.id} style={styles.popularRecipeCard}>
            <RecipeCard
              recipe={recipe}
              onPress={() => navigation.navigate('RecipeDetail', { recipeId: recipe.id })}
              size="large"
            />
          </View>
        ))}
      </ScrollView>

      {/* Recipes */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recipes</Text>
      </View>

      <View style={styles.recipesGrid}>
        {popularRecipes.slice(2, 4).map((recipe) => (
          <View key={recipe.id} style={styles.recipeCardContainer}>
            <RecipeCard
              recipe={recipe}
              onPress={() => navigation.navigate('RecipeDetail', { recipeId: recipe.id })}
              size="small"
            />
          </View>
        ))}
      </View>

      {/* Bottom spacing for tab bar */}
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    paddingTop: 44,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#666',
  },
  categoryContainer: {
    marginBottom: 24,
  },
  categoryContent: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCategory: {
    backgroundColor: '#FFE5D9',
  },
  categoryText: {
    color: '#666',
    fontSize: 14,
  },
  activeCategoryText: {
    color: '#000',
    fontWeight: '500',
  },
  popularRecipesContent: {
    paddingHorizontal: 16,
    gap: CARD_GAP,
  },
  popularRecipeCard: {
    width: 280,
  },
  recipesGrid: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: CARD_GAP,
  },
  recipeCardContainer: {
    width: CARD_WIDTH,
  },
  bottomSpacing: {
    height: 80,
  },
}); 