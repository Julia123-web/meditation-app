const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");

const router = new Router();

router.post("/user", async (request, response) => {
  if (!request.body.email || !request.body.password) {
    return response
      .status(400)
      .send("Missing email or password in request body");
  }

  const hashedPassword = bcrypt.hashSync(request.body.password, 10);

  try {
    await User.create({
      ...request.body,
      password: hashedPassword
    });

    response.status(201).send("The user is created");
  } catch (error) {
    console.log(error.name);
    switch (error.name) {
      case "SequelizeUniqueConstraintError":
        return response.status(400).send({ message: "Email is not unique" });

      default:
        return response.status(400).send("Bad request");
    }
  }
});

router.post("/login", async (request, response) => {
  console.log("See the login", request.body);

  const user = await User.findOne({ where: { email: request.body.email } });
  console.log("--------USEEER-----", user);

  const passwordValid = bcrypt.compareSync(
    request.body.password,
    user.password
  );
  console.log("PASSWORD VALID##########", passwordValid);
  if (passwordValid) {
    const newUser = {
      id: user.id,
      email: user.email,
      token: toJWT({ id: user.id })
    };
    console.log("-----------", newUser);

    response.send(newUser);
  } else {
    // return response.status(200).send({  });
  }
});

module.exports = router;
