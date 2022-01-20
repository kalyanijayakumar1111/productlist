import React from 'react';
import ReactDOM from 'react-dom';

function MyForm() {
  return (
    <form>
      <label>Number of items going to remove:
        <input type="text" />
      </label>
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

