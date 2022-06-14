import React from "react";
import { useState, useEffect } from "react";
import Todos from './Todos';
import './App.scss';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          brand: "Suzuki",
          model: "Swift",
          color: "white",
          favoritecolor: "white",
          year: 2012,
          show: true,
        };
    }
    // static getDerivedStateFromProps(props, state){
    //     return {favoritecolor: props.favcol};
    // }
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({favoritecolor: "black"})
    //     }, 2000)
    // }
    // getSnapshotBeforeUpdate(prevProp, prevState) {
    //     document.getElementById("div1").innerHTML =
    //     "Before the update, the favorite was " + prevState.favoritecolor;
    // }
    // componentDidUpdate() {
    //     document.getElementById("div2").innerHTML = 
    //     "The updated favorite is " + this.state.favoritecolor;
    // }
    // shouldComponentUpdate(){
    //     return true;
    // }
    changeColor = () => {
        this.setState({favoritecolor: "blue"})
    }
    delHeader = () => {
        this.setState({show: false});
    }
    render() {
        let myheader;
        if(this.state.show) {
            myheader = <Child />;
        }
      return (
          <div>
                <h2>My {this.state.brand}</h2>
                <h2>My Favorite Color is {this.state.favoritecolor}</h2>
                <p>
                    It is a {this.state.color} not favorite color {this.state.favoritecolor}, {this.state.model} from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                    >Change color
                </button>
                <div>
                    {myheader}
                    <button type="button" onClick={this.delHeader}>Delete car</button>
                </div>
                <div id="div1"></div>
                <div id="div2"></div>
          </div>
        )
    }
  }

class Child extends React.Component {
    // componentWillUnmount() {
    //     alert("The component named Car is about to be unmounted.")
    // }
    render() {
        return (
            <h2>Hello World!</h2>
        )
    }
}

function AllCars(props) {
    return <li>I am a {props.brand}</li>;
 }


function GarageInfo() {
    const cars = [
        {id: 1, brand:'Ford'},
        {id: 2, brand:'Audi'},
        {id: 3, brand:'Suzuki'}
    ];
    return (
        <>
            <h2>Who lives in my garage?</h2>
            <ul>
                {cars.map((car) => <AllCars key={car.id} brand={car.brand} />)}
            </ul>
            <h2>Garage</h2>
                { cars.length > 0 &&
                    <h2>
                        You have {cars.length} cars in your garage.
                    </h2>
                }           
        </>
    )
}

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Username is: ${inputs.username} and age is: ${inputs.age}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Enter your name:
                <input 
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit"/>
            <label> Enter your age:
                <input 
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit"/>
        </form>
    )
}

function MyFormTextarea() {
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
    );

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    return (
        <form>
            <textarea value={textarea} onChange={handleChange} />
        </form>
    )
}

function MyFormDropdown() {
    const [myCar, setMyCar]  = useState("Suzuki");

    const handleChange = (event) => {
        setMyCar(event.target.value);
    }

    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Fiat">Fiat</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Toyota">Toyota</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Nissan">Nissan</option>
            </select>
        </form>
    )
}

const AppTodo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
            <Todos todos={todos} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    )
};

const FavoriteColor = () => {
    const [color, setColor] = useState("red");

    return (
        <>
            <h2>My favorite color is {color}!</h2>
            <button type="Button" onClick={() => setColor("blue")}>Blue</button>
            <button type="Button" onClick={() => setColor("red")}>Red</button>
            <button type="Button" onClick={() => setColor("white")}>White</button>
            <button type="Button" onClick={() => setColor("green")}>Green</button>
        </>
    )
}

const CarInformation = () =>  {
    const [car, setCar] = useState({
        brand: "Suzuki",
        model: "Swift",
        year: "2012",
        color: "white"
    })

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "black" }
        });
    }

    return (
        <>
         <h2>My {car.brand}</h2>
         <p>
             It is a {car.color} {car.model} from {car.year}.
         </p>
         <button type="button" onClick={updateColor}>Black</button>
        </>
    )
}

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });

    return <h2>I've rendered {count} times!</h2>
};

class Garage extends React.Component {
    render() {
        return (
            <div>
                <hr />
                <h1>React Components</h1>
                <Car />
                <GarageInfo />
                <hr />
                <h1>React Forms</h1>
                <MyForm />
                <MyFormTextarea />
                <hr />
                <MyFormDropdown />
                <hr />
                <h1>React Memo</h1>
                <AppTodo />
                <hr />
                <h1>React Hooks</h1>
                <FavoriteColor />
                <CarInformation />
                <Timer />
            </div>
        )
    }
}

export default Garage;