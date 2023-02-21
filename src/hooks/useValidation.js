import { useState, useEffect } from 'react';

const useValidation = ({ full_name, email, slug, about }) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    let errors = {};

    // Validate full_name field
    if (!full_name) {
      errors.full_name = 'Full name is required';
    } else if (full_name.length < 6) {
      errors.full_name = 'Full name must be at least 6 characters long';
    } else if (/[!@#$%^&*(),.?":{}|<>]/g.test(full_name)) {
      errors.full_name = 'Full name must not contain any symbols';
    }

    // Validate email field
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }

    // Validate slug field
    if (!slug) {
      errors.slug = 'slug is required';
    } else if (slug.length < 6) {
      errors.slug = 'slug must be at least 6 characters long';
    } else if (!/^[\w.@]+$/.test(slug)) {
      errors.slug = 'slug must only contain letters, numbers, @, _, and . symbols';
    }

    // Validate about field
    if (!about) {
      errors.about = 'About is required';
    } else if (about.length < 10) {
      errors.about = 'About must be at least 10 characters long';
    }

    // Set errors state
    setErrors(errors);

    // Check if form is valid
    if (Object.keys(errors).length === 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [full_name, email, slug, about]);

  return { errors, isValid };
};

export default useValidation;