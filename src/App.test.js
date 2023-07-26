import { render, screen } from '@testing-library/react';
import App from './App';
// import reducers from '../../reducers';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// test('reducers', () => {
//   let state;
//   state = reducers({ list1: [], list2: [], list3: [], lastUpdated: 0 }, { type: 'slice/update', payload: { listNumber: 1, list: [] } });
//   expect(state).toEqual({ list1: [21], list2: [], list3: [], lastUpdated: 1 });
// });
