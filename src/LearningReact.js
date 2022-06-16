import React, { createContext, useCallback } from "react";
import { useState, useEffect, useContext, useRef, useReducer, useMemo } from "react";
import Todos from './Todos';
import './App.scss';
import { ListGroup, Card } from 'react-bootstrap';
import useFetch from "./useFetch";

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
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
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
        let timer = setTimeout(() => {
        setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer)
    }, []);


    return <h2>I've rendered {count} times!</h2>
};

function Counter() {
    const [count, setCount] = useState(1);
    const [calculation, setCalculation] = useState(2);

    useEffect(() => {
        setCalculation(() => count * 2)
    }, [count]);

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c * 2 )}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    );
};

const UserContext = createContext()

function Component1() {
    const [user, setUser] = useState("Markus Øxnevad");

    return (
        <UserContext.Provider value={user}>
            <h2>{`Hello ${user}!`}</h2>
            <Component2 user={user} />
        </UserContext.Provider>
    )
}

function Component2({user}) {
    return (
        <>
            <h2>Component 2</h2>
            <Component3 user={user}/>
        </>
    )
}

function Component3({user}) {
    return (
        <>
            <h2>Component 3</h2>
            <Component4 user={user}/>
        </>
    )
}

function Component4({user}) {
    return (
        <>
            <h2>Component 4</h2>
            <Component5 user={user}/>
        </>
    )
}
function Component5() {
    const user = useContext(UserContext);
    return (
        <>
            <h2>Component 5</h2>
            <h3>{`Hello ${user} again!`}</h3>
        </>
    )
}

function HooksUseRef() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>    
            </>
    )
}

const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false
    }
];

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }   
}

function UseReducerTodos() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id});
    };

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    )
}

const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i=0; i < 1000000000; i++) {
        num +=1;
    }
    return num;
};

const Home = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
        {data &&
            data.map((item) => {
                return <p key={item.id}>{item.title}</p>;
            })};
        </>

    );
};


class LearningReact extends React.Component {
    render() {
        return (
            <div>
                <h1>React Components</h1>
                <Card>
                    <Card.Body>
                        <Car />
                        <GarageInfo />
                    </Card.Body>
                </Card>
                <h1>React Forms</h1>
                <Card>
                    <Card.Body>
                        <MyForm />
                        <MyFormTextarea />
                        <MyFormDropdown />
                    </Card.Body>
                </Card>
                <h1>React Memo</h1>
                <Card>
                    <Card.Body>
                    <AppTodo />
                    </Card.Body>
                </Card>
                <h1>React Hooks</h1>
                <Card>
                    <Card.Header><h3>useState</h3></Card.Header>
                    <Card.Body>
                        <FavoriteColor />
                        <CarInformation />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header><h3>useEffect</h3></Card.Header>
                    <Card.Body>
                        <Timer />
                        <Counter />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header><h3>useContext</h3></Card.Header>
                    <Card.Body>
                        <Component1 />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header><h3>useRef</h3></Card.Header>
                    <Card.Body>
                        <HooksUseRef />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header><h3>useReducer</h3></Card.Header>
                    <Card.Body>
                        <UseReducerTodos />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header><h3>useCallback</h3></Card.Header>
                    <Card.Body>
                        <AppTodo />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header><h3>useMemo</h3></Card.Header>
                    <Card.Body>
                        <UseMemoHook />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header><h3>Custom Hooks</h3></Card.Header>
                    <Card.Body>
                        <Home />
                    </Card.Body>
                </Card>
            </div>

        )
    }
}



export default LearningReact;