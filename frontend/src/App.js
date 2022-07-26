import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./app.styles";
import { LoginModal } from "./components";
import { useAutoLogin } from "./hooks";
import {
  Account,
  Article,
  Articles,
  Brand,
  Brands,
  Categories,
  Category,
  Checkout,
  Diet,
  Exercises,
  Home,
  Login,
  LogoutSuccess,
  Product,
  ProductsDeals,
  Recipes,
  Review,
  Search,
  ShoppingCart,
  SignUp,
  Store,
  Tools,
  Top50Products,
  Workout,
  WorkoutCategory,
} from "./pages";
import { CATEGORY_TYPE_PAGE } from "./pages/workoutCategory/utils";

function App() {
  useAutoLogin();

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store">
          <Route index element={<Store />} />
          <Route path="promos" element={<ProductsDeals />} />
          <Route
            path="top-sellers"
            element={<Top50Products />}
          />
          <Route path="search/*" element={<Search />} />
          <Route
            path="product/:name/:id"
            element={<Product />}
          />
          <Route path="brands">
            <Route index element={<Brands />} />
            <Route path=":name" element={<Brand />} />
          </Route>
          <Route
            path="reviews/brands/:brand/:product/:id"
            element={<Review />}
          />
          <Route path="category">
            <Route index element={<Categories />} />
            <Route path=":type" element={<Category />} />
            <Route
              path=":type/:subType"
              element={<Category />}
            />
          </Route>
          <Route path="checkout">
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="onpage" element={<Checkout />} />
          </Route>
          <Route path="customer/account">
            <Route path="login" element={<Login />} />
            <Route path="create" element={<SignUp />} />
            <Route
              path="logoutSuccess"
              element={<LogoutSuccess />}
            />
            <Route path=":navItem" element={<Account />} />
          </Route>
        </Route>
        <Route path="/articles">
          <Route index element={<Articles />} />
          <Route
            path="category/:type"
            element={
              <WorkoutCategory
                categoryType={CATEGORY_TYPE_PAGE.ARTICLE}
              />
            }
          />
          <Route path=":id" element={<Article />} />
        </Route>
        <Route path="/workouts">
          <Route index element={<Workout />} />
          <Route path=":type" element={<WorkoutCategory />} />
        </Route>
        <Route path="/exercises">
          <Route index element={<Exercises />} />
          <Route
            path="category/:type"
            element={
              <WorkoutCategory
                categoryType={CATEGORY_TYPE_PAGE.EXERCISE}
              />
            }
          />
        </Route>
        <Route path="/diet-plans">
          <Route index element={<Diet />} />
        </Route>
        <Route path="/tools">
          <Route index element={<Tools />} />
        </Route>
        <Route path="/recipes">
          <Route index element={<Recipes />} />
          <Route
            path=":type"
            element={
              <WorkoutCategory
                categoryType={CATEGORY_TYPE_PAGE.DIET}
              />
            }
          />
        </Route>
      </Routes>
      <LoginModal />
    </>
  );
}

export default App;
