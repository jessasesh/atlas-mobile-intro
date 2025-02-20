import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function AddActivityScreen() {
  const router = useRouter();
  const [steps, setSteps] = React.useState<string>('');

  const handleAddActivity = () => {
    console.log(`Added ${steps} steps`);
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Activity</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Steps"
        keyboardType="numeric"
        value={steps}
        onChangeText={setSteps}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddActivity}>
        <Text style={styles.buttonText}>Add Activity</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => router.push('/')}>
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  goBackButton: {
    backgroundColor: 'red',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  goBackText: {
    color: 'white',
    fontSize: 16,
  },
});
