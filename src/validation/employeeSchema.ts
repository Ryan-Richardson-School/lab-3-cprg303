import { z } from "zod";

export const employeeSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be 100 letters or less"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .regex(
      /^(\+?1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}$/,
      "Please enter a valid phone number"
    ),

  postalCode: z
    .string()
    .regex(
      /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
      "Please enter a valid postal code"
    ),

  employeeId: z
    .string()
    .min(4, "Employee ID must be at least 4 characters")
    .max(10, "Employee ID must be 10 characters or less"),

  department: z
    .string()
    .min(2, "Department is required")
    .max(30, "Department must be 30 characters or less"),
});
export type EmployeeFormData = z.infer<typeof employeeSchema>;