import React, { useState, useEffect } from 'react'
import Main from './pages/Main'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Main />
    </DndProvider>
  );
}


export default App;
