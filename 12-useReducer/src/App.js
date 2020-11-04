
import Counter from "./component/Counter";
import CounterWithActionValues  from "./component/CounterWithActionValues";
import CounterWithActionValuesAndDispatcher  from "./component/CounterWithActionValuesAndDispatcher";
import CounterWithActionValuesAndDispatcherGenerator  from "./component/CounterWithActionValuesAndDispatcherGenerator";
import CounterWithActionValuesAndExternalDispatcherGenerator  from "./component/CounterWithActionValuesAndExternalDispatcherGenerator";
import CounterWithActionValuesAndExternalDispatcherGeneratorObject from "./component/CounterWithActionValuesAndExternalDispatcherGeneratorObject";

import Input from "./component/Input";
import Inputs from "./component/Inputs";
import InputUseState from "./component/InputUseState";

function App() {
  return (
    <div>
      <Counter/>
      <CounterWithActionValues/>
      <CounterWithActionValuesAndDispatcher/>
      <CounterWithActionValuesAndDispatcherGenerator/>
      <CounterWithActionValuesAndExternalDispatcherGenerator/>
      <CounterWithActionValuesAndExternalDispatcherGeneratorObject/>
      <InputUseState/>
      <Input/>
      <Inputs/>
    </div>
  );
}

export default App;
