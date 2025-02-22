import { Alert, Button, Image, StyleSheet, View } from 'react-native'

import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import DateTimePicker from 'react-native-ui-datepicker'
import * as Progress from 'react-native-progress';
import dayjs from 'dayjs'


export default function HomeScreen() {
  const [iotName, setIotName] = useState('breakfast')
  const [sensors, setSensors] = useState('[]')
  const [checkDate, setCheckDate] = useState(dayjs());


  const checkSensors = () => {
    // Alert.alert('Simple Button pressed')
    const payload = []
    payload.push(
      {
        checkDate,
        iotName,
      }
    )
    const payloadString = JSON.stringify([...JSON.parse(sensors), ...payload])
    setSensors(payloadString)
  }

  const renderSensors = () => {
    const arrMeals = JSON.parse(sensors)
    return arrMeals.map((meal: any, index: any) => {
      const rand1 = Math.floor(Math.random() * 11);
      return (
        <View key={`vc-${index}`}>
          <ThemedText key={`sd-${index}`}>
            Date: {dayjs(meal.checkDate).format()}
          </ThemedText>
          <ThemedText key={`iot-${index}`}>
            IoT Name: {meal.iotName}
          </ThemedText>
          <ThemedText key={`c-${index}`}>
            Contamination: <Progress.Bar width={100} progress={rand1 /100} /> {rand1}%
          </ThemedText>
        </View>
      )
    })
  }

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
        <View style={styles.containerDatePicker}>
          <DateTimePicker
            mode="single"
            date={checkDate}
            onChange={(params: any) => setCheckDate(params.date)}
          />
        </View>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">IoT Name</ThemedText>
        <ThemedText>
          <View style={styles.containerOptions}>
            <Picker
              selectedValue={iotName}
              style={styles.picker}
              onValueChange={(itemValue) => setIotName(itemValue)}
            >
              <Picker.Item label="Select IoT" value="" />
              <Picker.Item label="F1-1" value="f1-1" />
              <Picker.Item label="F1-2" value="f1-2" />
              <Picker.Item label="F2-1" value="f2-1" />
            </Picker>
          </View>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <View style={styles.button}>
          <Button
            title="CHECK"
            onPress={() => checkSensors()}
          />
        </View>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        {/* <View>
          <ThemedText>
            {sensors}
          </ThemedText>
        </View> */}
        {renderSensors()}
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
    width: 300,
    height: 40,
    borderWidth: 1,
    backgroundColor: '#FFF'
  },
  containerDatePicker: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    textAlign: 'center',
    width: '100%',
    height: '100%'
  },
  containerOptions: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: '100%',
    minWidth: 300,
    width: '100%',
  },
  selectedText: {
    marginTop: 20,
    color: 'green',
  },
  placeholderText: {
    marginTop: 20,
    color: 'gray',
  },
  button: {
    flex: 1,
    width: 300,
    backgroundColor: '#fff',
  },
});
