const CHAR_SETS = {
  low: "abcdefghijklmnopqrstuvwxyz",
  medium: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  high: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':\",.<>?/",
};

function generatePassword(length, strength) {
  if (length < 6 || length > 20) {
    throw new Error("Password length must be between 6 and 20 characters.");
  }

  const chars = CHAR_SETS[strength];
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

module.exports = generatePassword;
