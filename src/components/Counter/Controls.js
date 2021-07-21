const Controls = ({ children, onIncrement, onDecrement }) => (
  <>
    <button type="button" onClick={onIncrement}>
      increment
    </button>
    {children}
    <button type="button" onClick={onDecrement}>
      decrement
    </button>
  </>
);

export default Controls;
