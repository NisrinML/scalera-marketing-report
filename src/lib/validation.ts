import type { CompanyInformation } from "@/types/CompanyInformation";
import type { UserInformation } from "@/types/userInformation";
import type { ValidationError } from "@/types/validationError";

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

export const validatePage2 = (data: CompanyInformation): ValidationError => {
  const errors: ValidationError = {};

  if (!data.name.trim()) {
    errors.name = 'اسم الشركة مطلوب';
  } else if (data.name.trim().length < 2) {
    errors.name = 'يجب أن يكون اسم الشركة على الأقل حرفين';
  }

  // if (!data.business_type.trim()) {
  //   errors.business_type = 'Business type is required';
  // }

  if (!data.website.trim()) {
    errors.website = 'عنوان موقع الشركة مطلوب';
  } 

  if (data.employees_from == 0) {
    errors.employees_from = 'عدد الموظفين مطلوب';
  }

  if (data.employees_to < data.employees_from) {
    errors.employees_to = 'Employee range end must be greater than start';
  }

  // if (data.revenue_from < 0) {
  //   errors.revenue_from = 'Invalid revenue amount';
  // }

  // if (data.revenue_to < data.revenue_from) {
  //   errors.revenue_to = 'Revenue range end must be greater than start';
  // }


  return errors;
};