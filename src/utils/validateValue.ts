const validateValue = (name: string) => {
  const nameRegex = /^[a-zA-Zа-яА-Я0-9.,;:—\-\s]{2,}$/;
  return nameRegex.test(name);
};

export default validateValue;
