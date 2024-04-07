export const validateContactForm = (formData) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Invalid email format.";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(formData.phone)) {
    errors.phone = "Invalid phone number.";
  }

  if (!formData.details.trim()) {
    errors.details = "Message is required.";
  }

  return errors;
};
