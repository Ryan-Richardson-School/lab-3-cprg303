import React from "react";
import {
  Alert,
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
import { employeeSchema, EmployeeFormData } from "../validation/employeeSchema";
import { useNavigation } from "@react-navigation/native";

export default function EmployeeForm() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      postalCode: "",
      employeeId: "",
      department: "",
    },
  });

  const onSubmit = (data: EmployeeFormData) => {
    console.log("Employee Form Submitted:", data);
    Alert.alert(
      "Success",
      `Employee Information Submitted

Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Postal Code: ${data.postalCode}
Employee ID: ${data.employeeId}
Department: ${data.department}`
    );
    reset();
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Employee Information Form</Text>
        <Text style={styles.subtitle}>Enter employee details below</Text>

        {/* Full Name */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Full Name</Text>
          <Controller
            control={control}
            name="fullName"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter full name"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[styles.input, errors.fullName && styles.inputError]}
              />
            )}
          />
          {errors.fullName && (
            <Text style={styles.errorText}>{errors.fullName.message}</Text>
          )}
        </View>

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

        {/* Phone */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Phone Number</Text>
          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter phone number"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="phone-pad"
                style={[styles.input, errors.phone && styles.inputError]}
              />
            )}
          />
          {errors.phone && (
            <Text style={styles.errorText}>{errors.phone.message}</Text>
          )}
        </View>

        {/* Postal Code */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Postal Code</Text>
          <Controller
            control={control}
            name="postalCode"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter postal code"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                autoCapitalize="characters"
                style={[styles.input, errors.postalCode && styles.inputError]}
              />
            )}
          />
          {errors.postalCode && (
            <Text style={styles.errorText}>{errors.postalCode.message}</Text>
          )}
        </View>

        {/* Employee ID */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Employee ID</Text>
          <Controller
            control={control}
            name="employeeId"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter employee ID"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                autoCapitalize="characters"
                style={[styles.input, errors.employeeId && styles.inputError]}
              />
            )}
          />
          {errors.employeeId && (
            <Text style={styles.errorText}>{errors.employeeId.message}</Text>
          )}
        </View>

        {/* Department */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Department</Text>
          <Controller
            control={control}
            name="department"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Enter department"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[styles.input, errors.department && styles.inputError]}
              />
            )}
          />
          {errors.department && (
            <Text style={styles.errorText}>{errors.department.message}</Text>
          )}
        </View>

        {/* Submit */}
        <TouchableOpacity
          style={[
            styles.button,
            (!isValid || isSubmitting) && styles.buttonDisabled,
          ]}
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || isSubmitting}
        >
          <Text style={styles.buttonText}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Text>
        </TouchableOpacity>

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
});