import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, Image, ScrollView, Dimensions } from 'react-native';

const image = { uri: 'https://img.freepik.com/premium-photo/white-abstract-background_882595-3799.jpg' };
const containerImage = { uri: 'https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg' }; // Replace with your image URL
const { width } = Dimensions.get('window');

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#999"
              value={search}
              onChangeText={setSearch}
            />
          </View>
          <ScrollView contentContainerStyle={styles.cardsContainer}>
            {[...Array(9)].map((_, index) => (
              <View key={index} style={styles.card}>
                <Image source={containerImage} style={styles.cardImage} />
                <Text style={styles.cardText}>Red Apple</Text>
                
              </View>
              
            ))}
          </ScrollView>
          
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  searchContainer: {
    width: '80%',
    backgroundColor: '#FFFFFF',
     borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: '20%',
    zIndex: 1,
  },
  searchInput: {
    height: 40,
    fontSize: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  card: {
    width: width * 0.4, // Adjusting width to fit 2 cards per row
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10, // Adding margin to create space between cards
  },
  cardImage: {
    width: '100%',
    height: '70%',
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default App;
