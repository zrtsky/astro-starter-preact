import { useState } from 'preact/hooks'

export const Counter = () => {
  const [value, setValue] = useState(0)

  return (
    <>
      <div class='text-blue-600'>Counter: {value}</div>
      <div class='flex gap-3'>
        <button onClick={() => setValue(value + 1)}>Increment</button>
        <button onClick={() => setValue(value - 1)}>Decrement</button>
      </div>
    </>
  )
}
