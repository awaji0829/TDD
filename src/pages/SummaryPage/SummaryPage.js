import React, { useState } from 'react';

export const SummaryPage = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <form>
        <input
          type='checkbox'
          onChange={(e) => setChecked(e.target.checked)}
          checked={checked}
          id='confirm-checkbox'
        />
        <label htmlFor='confirm-checkbox'>주문확인?</label>
        <br />
        <button disabled={!checked} type='submit'>
          주문 확인
        </button>
      </form>
    </div>
  );
};
