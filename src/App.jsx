import './App.css';
import { NavBarComponent } from './components/NavBarComponent';
import { IntroductionComponent } from './components/IntroductionComponent';
import { ProjectsComponent } from './components/ProjectsComponent';
import { SkillComponent } from './components/SkillComponent';

function App() {
  return (
    <div className="App">
      <NavBarComponent></NavBarComponent>
      <IntroductionComponent></IntroductionComponent>
      <ProjectsComponent></ProjectsComponent>
      <SkillComponent></SkillComponent>   
    </div>
  );
}

export default App;
