import React from 'react';
import { Functional_Component } from "./components/Functional-Component";
import Class_Component from "./components/Class-Component";
import Function_Props from "./components/Function_Props";
import Class_State from "./components/Class-State";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";
import './App.css';

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Functional_Component /> */}
      {/* <Class_Component /> */}
      {/* <Function_Props name="shraddha" age="21">
        <p>This is Unkonewn properties.</p>
      </Function_Props> */}
      {/* <Function_Props name="shardul" age="17"/> */}
      {/* <Class_State /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
    </div>
  );
}

export default App;
