import Coopernet from "./Coopernet.js";

async function connect() {
  Coopernet.setUsername("y");
  Coopernet.setPassword("y");
  const token = await Coopernet.setOAuthToken();
  console.log(`token`, token);
  const tasks = await Coopernet.getTasks();
  console.log(`tasks`, tasks);
}

connect();
