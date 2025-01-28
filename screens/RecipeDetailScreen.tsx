import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFavorites } from '@/context/FavoritesContext';
import { popularRecipes } from '@/data/recipesData';

const { width } = Dimensions.get('window');

export default function RecipeDetailScreen({ route, navigation }: { route: any, navigation: any }) {
  const { recipeId } = route.params;
  const recipe = popularRecipes.find(r => r.id === recipeId);
  const { isFavorite, toggleFavorite } = useFavorites();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeTab, setActiveTab] = useState('ingredients');

  if (!recipe) return null;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Recipe Image */}
        <Image source={recipe.image} style={styles.image} />
        
        {/* Header Buttons */}
        <View style={styles.headerButtons}>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => toggleFavorite(recipe)}
          >
            <Ionicons 
              name={isFavorite(recipe.id) ? "heart" : "heart-outline"} 
              size={24} 
              color={isFavorite(recipe.id) ? "#FF4B4B" : "black"} 
            />
          </TouchableOpacity>
        </View>

        {/* Recipe Info Card */}
        <View style={styles.infoCard}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{recipe.title}</Text>
            <View style={styles.timeContainer}>
              <Ionicons name="time-outline" size={16} color="#666" />
              <Text style={styles.timeText}>15 Min</Text>
            </View>
          </View>

          <Text style={styles.description} numberOfLines={showFullDescription ? undefined : 2}>
            This {recipe.title} is the universal delight of taco night
          </Text>
          {!showFullDescription && (
            <TouchableOpacity onPress={() => setShowFullDescription(true)}>
              <Text style={styles.viewMore}>View More</Text>
            </TouchableOpacity>
          )}

          {/* Nutrition Info */}
          <View style={styles.nutritionGrid}>
            <View style={styles.nutritionItem}>
              <Ionicons name="leaf-outline" size={20} color="#666" />
              <Text style={styles.nutritionValue}>65g carbs</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Ionicons name="fitness-outline" size={20} color="#666" />
              <Text style={styles.nutritionValue}>27g proteins</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Ionicons name="flame-outline" size={20} color="#666" />
              <Text style={styles.nutritionValue}>120 Kcal</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Ionicons name="pizza-outline" size={20} color="#666" />
              <Text style={styles.nutritionValue}>91g fats</Text>
            </View>
          </View>

          {/* Tabs */}
          <View style={styles.tabs}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'ingredients' && styles.activeTab]}
              onPress={() => setActiveTab('ingredients')}
            >
              <Text style={[styles.tabText, activeTab === 'ingredients' && styles.activeTabText]}>
                Ingredients
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'instructions' && styles.activeTab]}
              onPress={() => setActiveTab('instructions')}
            >
              <Text style={[styles.tabText, activeTab === 'instructions' && styles.activeTabText]}>
                Instructions
              </Text>
            </TouchableOpacity>
          </View>

          {/* Ingredients List */}
          {activeTab === 'ingredients' && (
            <View style={styles.ingredientsList}>
              <Text style={styles.ingredientsCount}>6 Items</Text>
              {recipe.ingredients?.map((ingredient, index) => (
                <View key={index} style={styles.ingredientItem}>
                  <View style={styles.ingredientIcon}>
                    <Image 
                      source={require('@/assets/images/onions.png')} 
                      style={styles.ingredientImage} 
                    />
                  </View>
                  <Text style={styles.ingredientText}>{ingredient}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Instructions List */}
          {activeTab === 'instructions' && (
            <View style={styles.instructionsList}>
              <Text style={styles.instructionsCount}>{recipe.instructions?.length || 0} Steps</Text>
              {recipe.instructions?.map((instruction, index) => (
                <View key={index} style={styles.instructionItem}>
                  <View style={styles.instructionNumber}>
                    <Text style={styles.stepNumber}>{index + 1}</Text>
                  </View>
                  <View style={styles.instructionContent}>
                    <Text style={styles.instructionText}>{instruction}</Text>
                    <Text style={styles.stepTime}>5 min</Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Related Recipes */}
          <View style={styles.relatedSection}>
            <View style={styles.relatedHeader}>
              <Text style={styles.sectionTitle}>Related Recipes</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.relatedRecipes}
            >
              {popularRecipes.slice(0, 3).map((relatedRecipe) => (
                <TouchableOpacity 
                  key={relatedRecipe.id}
                  style={styles.relatedRecipeCard}
                  onPress={() => navigation.push('RecipeDetail', { recipeId: relatedRecipe.id })}
                >
                  <Image source={relatedRecipe.image} style={styles.relatedRecipeImage} />
                  <Text style={styles.relatedRecipeTitle} numberOfLines={2}>
                    {relatedRecipe.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: width,
    height: width * 0.8,
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 44,
    left: 16,
    right: 16,
  },
  iconButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    padding: 24,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    marginLeft: 4,
    color: '#666',
  },
  description: {
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  viewMore: {
    color: '#0B1F51',
    fontWeight: '600',
    marginBottom: 16,
  },
  nutritionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  nutritionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 12,
    width: '47%',
  },
  nutritionValue: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 24,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#000',
    fontWeight: '600',
  },
  ingredientsList: {
    gap: 16,
  },
  ingredientsCount: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 12,
  },
  ingredientIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ingredientImage: {
    width: 24,
    height: 24,
  },
  ingredientText: {
    fontSize: 16,
  },
  creatorSection: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  creatorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 12,
  },
  creatorAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  creatorDetails: {
    marginLeft: 12,
  },
  creatorName: {
    fontSize: 16,
    fontWeight: '600',
  },
  creatorBio: {
    color: '#666',
    marginTop: 4,
  },
  relatedSection: {
    marginTop: 32,
  },
  relatedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAll: {
    color: '#666',
  },
  relatedRecipes: {
    marginBottom: 24,
  },
  relatedRecipeCard: {
    width: 140,
    marginRight: 16,
  },
  relatedRecipeImage: {
    width: 140,
    height: 140,
    borderRadius: 12,
    marginBottom: 8,
  },
  relatedRecipeTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  instructionsList: {
    gap: 24,
  },
  instructionsCount: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  instructionNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#0B1F51',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  stepNumber: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  instructionContent: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
  },
  instructionText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  stepTime: {
    fontSize: 14,
    color: '#666',
  },
});
