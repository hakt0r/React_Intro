
import React         from 'react';
import Skills        from './component/Skills';
import SkillsCleaner from './component/SkillsCleaner';

export const data = [
  {name:'anx',age:36,skill:9001},
  {name:'fly',age:34,skill:8990},
  {name:'lea',age:4, skill:1023}
];

export const data2 = [
  {name:'anx',age:37,skill:9002},
  {name:'fly',age:35,skill:8991},
  {name:'lea',age:5, skill:3334}
];

function App() {
  return <>
    <Skills data={data}/>
    <SkillsCleaner data={data2}/>
  </>;
}

export default App;
