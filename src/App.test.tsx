import { describe, test, expect } from "vitest"
import { render } from '@testing-library/react'


import App from './App';

describe("test app", () => {
  test('renders header with correct text', () => {
   const comp = render(<App />);
    expect(comp.getByTestId('heading').textContent).toContain("Hello, World!")
  });
  test('renders header with correct paragraph text', () => {
   const comp = render(<App />);
    expect(comp.getByTestId('paragraph').textContent).toContain("React.js")
  });

})

