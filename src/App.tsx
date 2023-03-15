import React from 'react';

import styles from '../src/style.module.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList/TodoList';
import { TodoPanel } from './components/TodoPanel/TodoPanel';
import { TodoProvider } from './utils';


export const App = () => (
    <TodoProvider>
    <div className={styles.app_container}>
      <Header />
      <TodoPanel mode='add'/>
      <TodoList  />
    </div>
    </TodoProvider>

);


export default App;
