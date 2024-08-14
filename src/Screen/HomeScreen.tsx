import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../ts/Type';
import { styles } from '../Theme/AppTheme';


type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container2}>
      <Text style={styles.title}>Bienvenido</Text>
      <Image source={{ 
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslFxhjnbvyWUjxCPxysvXbYDg7HQEH-QC_g&s'
        }} 
        style={styles.image} />
      <Button
        title="Acceder"
        onPress={() => navigation.navigate('Form')}
      />
    </View>
  );
}
 
