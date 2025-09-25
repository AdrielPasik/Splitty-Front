import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

export default function RestablecerContrasena() {
  const [codigo, setCodigo] = useState("");
  const [nuevaContrasena, setNuevaContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");

  const handleRestablecer = () => {
    // Aquí puedes agregar la lógica para restablecer la contraseña
    alert('Contraseña restablecida');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          <View style={styles.headerContainer}>
            <View style={styles.iconBackground}>
              <Image
                source={{ uri: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png" }}
                style={styles.iconImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.title}>Restablecer contraseña</Text>
            <Text style={styles.subtitle}>Ingresa el código y tu nueva contraseña</Text>
          </View>
          <Text style={styles.infoText}>Código de verificación y nueva contraseña</Text>
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Código de verificación</Text>
              <TextInput
                style={styles.input}
                placeholder="123456"
                placeholderTextColor="#999999"
                keyboardType="numeric"
                value={codigo}
                onChangeText={setCodigo}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nueva contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="********"
                placeholderTextColor="#999999"
                secureTextEntry
                value={nuevaContrasena}
                onChangeText={setNuevaContrasena}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirmar nueva contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="********"
                placeholderTextColor="#999999"
                secureTextEntry
                value={confirmarContrasena}
                onChangeText={setConfirmarContrasena}
              />
            </View>
            <TouchableOpacity style={styles.resetButton} onPress={handleRestablecer}>
              <Text style={styles.resetButtonText}>Restablecer contraseña</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E6F4F1'
  },
  keyboardAvoidingView: {
    flex: 1
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40
  },
  headerContainer: {
    backgroundColor: '#DFF3F0',
    borderRadius: 12,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 24
  },
  iconBackground: {
    backgroundColor: '#BEE6DD',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16
  },
  iconImage: {
    width: 24,
    height: 24,
    tintColor: '#033E30'
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#212121',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center'
  },
  infoText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    marginBottom: 24
  },
  formContainer: {
    backgroundColor: '#E9F0EF',
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 20
  },
  inputGroup: {
    marginBottom: 16
  },
  label: {
    fontSize: 12,
    color: '#212121',
    marginBottom: 6
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#212121',
    backgroundColor: '#FFFFFF'
  },
  resetButton: {
    backgroundColor: '#033E30',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 14
  }
});