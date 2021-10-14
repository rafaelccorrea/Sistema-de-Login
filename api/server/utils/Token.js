import jwt from "jsonwebtoken";

const generateToken = (data) => {
  const token = jwt.sign(data, "novoapi", {
    expiresIn: 86400,
  });

  return `bearer ${token}`;
};

export { generateToken };