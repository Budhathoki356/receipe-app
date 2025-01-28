import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

interface Ingredient {
  id: string;
  name: string;
}

export default function CreateRecipeScreen({ navigation }: { navigation: any }) {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [carbs, setCarbs] = useState('');
  const [proteins, setProteins] = useState('');
  const [calories, setCalories] = useState('');
  const [fats, setFats] = useState('');
  const [ingredients, setIngredients] = useState<Ingredient[]>([{ id: '1', name: '' }]);
  const [instructions, setInstructions] = useState('');
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const addIngredient = () => {
    setIngredients([...ingredients, { id: Date.now().toString(), name: '' }]);
  };

  const removeIngredient = (id: string) => {
    setIngredients(ingredients.filter(ing => ing.id !== id));
  };

  const updateIngredient = (id: string, value: string) => {
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, name: value } : ing
    ));
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setThumbnail(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    const recipe = {
      title,
      about,
      nutrition: { carbs, proteins, calories, fats },
      ingredients: ingredients.map(ing => ing.name).filter(Boolean),
      instructions,
      thumbnail,
    };
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Recipe</Text>
      </View>

      <ScrollView 
        style={styles.form}
        contentContainerStyle={styles.formContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g Food"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>About</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g About"
          value={about}
          onChangeText={setAbout}
          multiline
        />

        <Text style={styles.label}>Nutrition</Text>
        <View style={styles.nutritionGrid}>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionLabel}>Carbs</Text>
            <TextInput
              style={styles.nutritionInput}
              value={carbs}
              onChangeText={setCarbs}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionLabel}>Proteins</Text>
            <TextInput
              style={styles.nutritionInput}
              value={proteins}
              onChangeText={setProteins}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionLabel}>Kcal</Text>
            <TextInput
              style={styles.nutritionInput}
              value={calories}
              onChangeText={setCalories}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionLabel}>Fats</Text>
            <TextInput
              style={styles.nutritionInput}
              value={fats}
              onChangeText={setFats}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.ingredientsHeader}>
          <Text style={styles.label}>Ingredients</Text>
          <TouchableOpacity onPress={addIngredient}>
            <Ionicons name="add-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {ingredients.map((ingredient) => (
          <View key={ingredient.id} style={styles.ingredientRow}>
            <TextInput
              style={styles.ingredientInput}
              placeholder="e.g About"
              value={ingredient.name}
              onChangeText={(value) => updateIngredient(ingredient.id, value)}
            />
            <TouchableOpacity onPress={() => removeIngredient(ingredient.id)}>
              <Ionicons name="trash-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ))}

        <Text style={styles.label}>Instructions</Text>
        <TextInput
          style={[styles.input, styles.instructionsInput]}
          placeholder="Write your instructions here"
          value={instructions}
          onChangeText={setInstructions}
          multiline
          numberOfLines={4}
        />

        <Text style={styles.label}>Thumbnail</Text>
        <TouchableOpacity style={styles.thumbnailButton} onPress={pickImage}>
          {thumbnail ? (
            <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
          ) : (
            <View style={styles.uploadPlaceholder}>
              <Ionicons name="cloud-upload-outline" size={32} color="#666" />
              <Text style={styles.uploadText}>upload</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

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
    alignItems: 'center',
    padding: 16,
    paddingTop: 44,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  form: {
    flex: 1,
  },
  formContent: {
    padding: 16,
    paddingBottom: 100,
  },
  bottomSpacing: {
    height: 80,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
  },
  nutritionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  nutritionItem: {
    width: '48%',
    marginBottom: 16,
  },
  nutritionLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  nutritionInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
  },
  ingredientsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ingredientInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginRight: 8,
  },
  instructionsInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  thumbnailButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    height: 200,
    marginTop: 8,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  uploadPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    color: '#666',
    marginTop: 8,
  },
  submitButton: {
    backgroundColor: '#0B1F51',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 