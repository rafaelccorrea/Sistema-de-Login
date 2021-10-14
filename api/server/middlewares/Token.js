import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(401)
      .send({ status: "error", message: "No token provided." });
  }

  jwt.verify(token.split(" ")[1], "novoapi", (err, decoded) => {
    if (err) {
      return res
        .status(500)
        .send({ status: "error", message: "Failed to authenticate token." });
    }

    req.dataReq = decoded;
    next();
  });
};