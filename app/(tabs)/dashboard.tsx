import { StyleSheet, Image, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as Progress from 'react-native-progress';
import dayjs from 'dayjs';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/sustainiq.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          MRFs Food Waste Contamination
        </ThemedText>
        <ThemedText>
          Date: {dayjs().format('YYYY-MM-DD HH:mm')}
        </ThemedText>
        <ThemedText>
          Facility 1
        </ThemedText>
        <Progress.Bar progress={0.3} width={250} /> 
        <Text>30 %</Text>
        <ThemedText>
          Facility 2
        </ThemedText>
        <Progress.Bar progress={0.2} width={250} />
        <Text>20 %</Text>
        <ThemedText>
          Facility 3
        </ThemedText>
        <Progress.Bar progress={0.5} width={250} />
        <Text>50 %</Text>
        <ThemedText>
          Facility 4
        </ThemedText>
        <Progress.Bar progress={0.9} width={250} />
        <Text>90 %</Text>
        <ThemedText>
          Facility 5
        </ThemedText>
        <Progress.Bar progress={0.1} width={250} />
        <Text>10 %</Text>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  reactLogo: {
    height: 95,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
