import React from 'react';
import ReactDOM from 'react-dom/client';
import { createEditor } from 'formula';
import { Editable } from './formula-react';

const App = () => {
  const editor = createEditor();
  return (
    <div>
      <div>公式编辑器</div>
      <Editable editor={editor}></Editable>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
