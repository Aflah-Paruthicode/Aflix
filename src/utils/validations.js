export function checkInputs(email, password, name = null) {
  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@!%*?&])[A-Za-z\d@!%*?&]{8,}$/.test(
      password
    );

  if (name)
    if (name.trim() == "" || name.length < 2 || name.length > 10)
      return "Enter Proper Name";
  if (!isEmail) return "Email Not Valid";
  if (!isPassword) return "Password Not Valid!";

  return null;
}
