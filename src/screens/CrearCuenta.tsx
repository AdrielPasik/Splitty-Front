import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

export default function CrearCuenta({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [aceptaTyC, setAceptaTyC] = useState(false);

  const validarEmail = (correo) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(correo);
  };

  const handleCrearCuenta = () => {
    if (!nombre || !email || !fecha || !password || !confirmarPassword) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }
    if (!validarEmail(email)) {
      Alert.alert('Error', 'Por favor ingresa un correo electrónico válido.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (password !== confirmarPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }
    if (!aceptaTyC) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones.');
      return;
    }

    Alert.alert('Éxito', 'Cuenta creada correctamente.');
    navigation.navigate('InicioSesion');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>
      <Text style={styles.subtitle}>
        Únete y comienza a gestionar gastos compartidos
      </Text>

      <Text style={styles.label}>Nombre completo</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="tu@email.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Fecha de nacimiento</Text>
      <TextInput
        style={styles.input}
        placeholder="dd/mm/aaaa"
        value={fecha}
        onChangeText={setFecha}
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="******"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Confirmar contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="******"
        secureTextEntry
        value={confirmarPassword}
        onChangeText={setConfirmarPassword}
      />

      <TouchableOpacity onPress={() => setAceptaTyC(!aceptaTyC)} style={styles.tycContainer}>
        <View style={[styles.checkbox, aceptaTyC && styles.checkboxChecked]} />
        <Text style={styles.tycText}>
          Acepto los <Text style={styles.link}>términos y condiciones</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCrearCuenta}>
        <Text style={styles.buttonText}>Crear Cuenta</Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.separatorText}>O continúa con</Text>
        <View style={styles.separator} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Continuar con Google</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        ¿Ya tienes cuenta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('InicioSesion')}>
          Iniciar sesión
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E6F4F1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#033E30',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontWeight: '600',
    color: '#033E30',
  },
  input: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#999',
    marginBottom: 15,
  },
  tycContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#666',
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: '#033E30',
  },
  tycText: {
    fontSize: 14,
    color: '#333',
  },
  link: {
    color: '#007B5E',
    fontWeight: '600',
  },
  button: {
    width: '100%',
    backgroundColor: '#033E30',
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCC',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#999',
  },
  googleButton: {
    width: '100%',
    backgroundColor: '#DDD',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  googleButtonText: {
    color: '#555',
    fontWeight: '600',
    fontSize: 16,
  },
  footerText: {
    color: '#555',
  },
});
