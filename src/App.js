import s from './App.module.scss';
import { Sidebar } from "./Components/Sidebar/Sidebar";
import {Content} from "./Components/Content/Content";



export function App() {
  return (
    <div className={s.wrapper}>
        <div className={s.container}>
            <Sidebar/>
            <Content/>
        </div>

    </div>
  );
}

