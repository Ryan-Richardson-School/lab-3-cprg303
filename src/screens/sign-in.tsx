import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInFormData } from "../validation/signInSchema";
import { useNavigation } from "@react-navigation/native"; 

export default function SignIn() {
  const navigation = useNavigation<any>();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: SignInFormData) => {
    console.log("Sign In Submitted:", data);
    reset();
    navigation.navigate("TabLayout");
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Access your account</Text>

        {/* Email */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
                autoCapitalize="none"
                style={[styles.input, errors.email && styles.inputError]}
              />
            )}
          />

          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
        </View>

        {/* Password */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Password</Text>

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
                style={[styles.input, errors.password && styles.inputError]}
              />
            )}
          />

          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={[
            styles.button,
            !isValid || isSubmitting ? styles.buttonDisabled : null,
          ]}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || isSubmitting}
        >
          <Text style={styles.buttonText}>
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Text>
        </TouchableOpacity>

            {/* Button to redriect signup */}
        <View style={styles.bottomContainer}>
  
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#6d28d9", marginTop: 10 }]}  
            onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.buttonText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },
  inputError: {
    borderColor: "#dc2626",
    backgroundColor: "#fef2f2",
  },
  errorText: {
    color: "#dc2626",
    fontSize: 13,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#2563eb",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: "#93c5fd",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  bottomContainer:{
    marginTop: 20,
  },
  bottomText: {
    fontSize: 15,
    color: "#6b7280",
    marginBottom: 8,
  }
});