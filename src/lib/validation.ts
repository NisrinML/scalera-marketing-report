import type { UserInformation } from "@/types/UserInformation";
import type { ValidationError } from "@/types/ValidationError";

export const validatePage1 = (data: UserInformation): ValidationError => {
  const errors: ValidationError = {};

  // First Name - Required
  if (!data.first_name.trim()) {
    errors.first_name = 'الاسم الأول مطلوب';
  } else if (data.first_name.trim().length < 2) {
    errors.first_name = 'يجب أن يكون الاسم الأول على الأقل حرفين';
  }

  // Last Name - Required
  if (!data.last_name.trim()) {
    errors.last_name = 'الكنية مطلوبة';
  } else if (data.last_name.trim().length < 2) {
    errors.last_name = 'يجب أن تكون الكنية على الأقل حرفين';
  }

  // Email - Required
  if (!data.email.trim()) {
    errors.email = 'البريد الإلكتروني مطلوب';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'الرجاء إدخال بريد إلكتروني صحيح';
  }

  // Phone - Optional but must be valid if provided
  const phoneTrimmed = data.phone.trim();
  if (phoneTrimmed !== '') {
    // Only validate if user typed something
    if (!/^[\d\s\-\+\(\)]+$/.test(phoneTrimmed)) {
      errors.phone = 'رقم الجوال غير صحيح';
    } else if (phoneTrimmed.replace(/\D/g, '').length < 9) {
      errors.phone = 'رقم الجوال قصير جداً';
    }
  }

  return errors;
};
