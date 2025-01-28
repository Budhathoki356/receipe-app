import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '@/context/FavoritesContext';
import { RecipeCard } from '@/components/RecipeCard';

export default function AccountScreen({ navigation }: {navigation: any}) {
  const { favorites } = useFavorites();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account</Text>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profile}>
          <Image 
            source={require('@/assets/images/avatars/james.png')} 
            style={styles.profileImage} 
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Eklal Budhathoki</Text>
            <Text style={styles.role}>Recipe Developer</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="arrow-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>My Favorites</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recipesGrid}>
            {favorites.slice(0, 4).map((recipe) => (
              <View key={recipe.id} style={styles.recipeCardContainer}>
                <RecipeCard
                  recipe={recipe}
                  onPress={() => navigation.navigate('RecipeDetail', { recipeId: recipe.id })}
                  size="small"
                />
              </View>
            ))}
            {favorites.length === 0 && (
              <Text style={styles.noFavorites}>No favorite recipes yet</Text>
            )}
          </View>
        </View>
        <View style={styles.bottomSpacing} />
      </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingTop: 44,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    color: '#666',
    marginTop: 4,
  },
  editButton: {
    padding: 8,
  },
  section: {
    marginTop: 24,
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
  recipesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 16,
  },
  recipeCardContainer: {
    width: '47%',
  },
  noFavorites: {
    textAlign: 'center',
    color: '#666',
    width: '100%',
    marginTop: 20,
  },
  bottomSpacing: {
    height: 80,
  },
}); 