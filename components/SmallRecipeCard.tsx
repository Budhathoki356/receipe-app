import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SmallRecipeCardProps {
  image: any;
  title: string;
  navigation: any;
}

export const SmallRecipeCard = ({ image, title, navigation }: SmallRecipeCardProps) => (
  <TouchableOpacity style={styles.smallRecipeCard} onPress={() => navigation.navigate('RecipeDetail')}>
    <Image source={image} style={styles.smallRecipeImage} />
    <TouchableOpacity style={styles.smallFavoriteButton}>
      <Ionicons name="heart-outline" size={16} color="black" />
    </TouchableOpacity>
    <Text style={styles.smallRecipeTitle} numberOfLines={2}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  smallRecipeCard: {
    width: '48%',
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  smallRecipeImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  smallFavoriteButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 6,
  },
  smallRecipeTitle: {
    fontSize: 14,
    fontWeight: '600',
    padding: 8,
  },
}); 