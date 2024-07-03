import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const image = { uri: 'https://img.freepik.com/premium-photo/white-abstract-background_882595-3799.jpg' };
const containerImage = { uri: 'https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg' };
const { width, height } = Dimensions.get('window');

const App = () => {
  const [search, setSearch] = useState('');

  const handlePress = () => {
    alert('Button pressed');
  };

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
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Click Me</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
          {/* <View style={styles.bottomSpace} /> */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 0.9, // Set container height to 90% of the screen height
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
    width: width * 0.8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: height * 0.1,
    zIndex: 1,
    marginBottom: 10,
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
    marginBottom: 10,
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
  buttonContainer: {
    width: '100%', // Adjusted to take full width of the card
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F83758',
    width: '80%', // 80% of the button container width
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: height*0.04,
    marginBottom: height*0.03,
  },
  buttonText: {
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  bottomSpace: {
    height: 20, // Adjust as needed for the space below the cards
  },
});

export default App;
