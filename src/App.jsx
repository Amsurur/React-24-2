import axios from "axios";
import { AxiosNemon, BaseApi, GetToken, SaveToken } from "./utils/token";
// import { useNavigate } from "react-router-dom";

const App = () => {
  // const navigate = useNavigate();
  async function Login(user) {
    try {
      const { data } = await axios.post(`${BaseApi}/Account/login`, user);
      SaveToken(data.data);
      // navigate(-1);
    } catch (error) {
      console.error(error);
    }
  }

  async function getCart() {

    try {
      const { data } = await AxiosNemon.get(`/Cart/get-products-from-cart`);

      console.log(data);
    } catch (error) {

      console.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      userName: e.target[0].value,
      password: e.target[1].value,
    };
    Login(user);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input type="text" />
        <input type="password" />
        <button type="submit"> Login</button>
      </form>
      <button onClick={() => getCart()}>GetCart</button>
    </div>
  );
};

export default App;
