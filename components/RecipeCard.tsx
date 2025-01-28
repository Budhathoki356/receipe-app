import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '@/context/FavoritesContext';

export function RecipeCard({ recipe, onPress, size = 'large' }: { recipe: any, onPress: any, size: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(recipe.id);

  const handleFavoritePress = (e: any) => {
    e.stopPropagation();
    toggleFavorite(recipe);
  };

  return (
    <TouchableOpacity 
      style={[
        styles.card,
        size === 'small' && styles.smallCard
      ]} 
      onPress={onPress}
    >
      <Image 
        source={recipe.image} 
        style={[
          styles.image,
          size === 'small' && styles.smallImage
        ]} 
      />
      <TouchableOpacity 
        style={[
          styles.favoriteButton,
          size === 'small' && styles.smallFavoriteButton
        ]} 
        onPress={handleFavoritePress}
      >
        <Ionicons 
          name={favorited ? "heart" : "heart-outline"} 
          size={size === 'small' ? 16 : 20} 
          color={favorited ? "#FF4B4B" : "black"} 
        />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text 
          style={[
            styles.title,
            size === 'small' && styles.smallTitle
          ]} 
          numberOfLines={2}
        >
          {recipe.title}
        </Text>
        <View style={styles.authorInfo}>
          <Image source={recipe.author.avatar} style={styles.authorAvatar} />
          <Text style={styles.authorName}>{recipe.author.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  smallCard: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  smallImage: {
    height: 120,
  },
  favoriteButton: {
    position: 'absolute',
    right: 12,
    top: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  smallFavoriteButton: {
    right: 8,
    top: 8,
    padding: 6,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  smallTitle: {
    fontSize: 14,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  authorName: {
    color: '#666',
    fontSize: 14,
  },
}); 