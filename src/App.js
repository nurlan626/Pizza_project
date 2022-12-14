import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import "./styles/app.scss";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <>
      <div class="wrapper">
        <Header />
        <div class="content">
          <div class="container">
            <div class="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              <PizzaBlock title='Чизбургер-пицца' price={500}/>
              <PizzaBlock title='пицца' price={300}/>
              <PizzaBlock title='маргарита-пицца' price={600}/>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
