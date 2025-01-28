import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '@/context/FavoritesContext';
import { RecipeCard } from '@/components/RecipeCard';

const { width } = Dimensions.get('window');
const COLUMN_GAP = 16;
const CARD_WIDTH = (width - 48 - COLUMN_GAP) / 2; // 48 = horizontal padding (16 * 2) + gap between cards (16)

export default function FavoritesScreen({ navigation }: { navigation: any }) {
  const { favorites } = useFavorites();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Favorites</Text>
      </View>

      {favorites.length > 0 ? (
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.recipesGrid}>
            {favorites.map((recipe) => (
              <View key={recipe.id} style={styles.cardContainer}>
                <RecipeCard
                  recipe={recipe}
                  onPress={() => navigation.navigate('RecipeDetail', { recipeId: recipe.id })}
                  size="small"
                />
              </View>
            ))}
          </View>
          {/* Add bottom spacing for tab bar */}
          <View style={styles.bottomSpacing} />
        </ScrollView>
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="heart" size={64} color="#ddd" />
          <Text style={styles.emptyStateTitle}>No Favorites Yet</Text>
          <Text style={styles.emptyStateText}>
            Start adding your favorite recipes by tapping the heart icon on recipes you love
          </Text>
          <TouchableOpacity 
            style={styles.exploreButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.exploreButtonText}>Explore Recipes</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 44,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  recipesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: COLUMN_GAP,
  },
  cardContainer: {
    width: CARD_WIDTH,
  },
  bottomSpacing: {
    height: 80, // Height for tab bar spacing
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  exploreButton: {
    backgroundColor: '#0B1F51',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 