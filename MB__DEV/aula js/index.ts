type User = {
  name: string;
  email: string;
  profile: "admin" | "manager" | "regular";
};

const myUser: User = {
  email: "email@email.com",
  name: "Nome",
  profile: "admin",
};

const myFunction = (
  profile: "admin" | "manager" | "regular"
): "admin" | "manager" | "regular" => {
  console.log(`My profile is ${profile}`);
  return "admin";
};

myFunction("manager");
