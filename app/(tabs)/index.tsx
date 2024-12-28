import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function HomeScreen() {
  const [text, onChangeText] = useState('Useless Text');
  const [selectedValue, setSelectedValue] = useState('');


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/sustainiq.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">SustainIQ</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Plan your meal</ThemedText>
        <ThemedText>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Plan your portion</ThemedText>
        <ThemedText>
          <View style={styles.container}>
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Select Portion" value="" />
              <Picker.Item label="Apple" value="apple" />
              <Picker.Item label="Banana" value="banana" />
              <Picker.Item label="Cherry" value="cherry" />
            </Picker>
            {selectedValue ? (
              <Text style={styles.selectedText}>Selected: {selectedValue}</Text>
            ) : (
              <Text style={styles.placeholderText}>No fruit selected</Text>
            )}
          </View>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 95,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF'
  },
  // picker: {
  //   width: '100%',
  //   height: 40,
  //   backgroundColor: '#FFF'
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 100,
    width: 300,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
  placeholderText: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});
