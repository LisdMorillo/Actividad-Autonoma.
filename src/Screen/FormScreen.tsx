import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { styles } from '../Theme/AppTheme';

export default function FormScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleDivide = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Por favor ingrese números válidos.');
      return;
    }

    if (n1 === 0 && n2 === 0) {
      setResult('INDETERMINACIÓN');
    } else if (n2 === 0) {
      setResult('NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResult((n1 / n2).toString());
    }
  };

  return (
    <View style={styles.container1}>
      <TextInput
        style={styles.input}
        placeholder="Campo número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Campo número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <Button
        title="Dividir"
        onPress={handleDivide}
      />
      {result && <Text style={styles.result}>{result}</Text>}
    </View>
  );
}
