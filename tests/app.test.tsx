import { describe, it, expect } from 'vitest';
import Home from '../src/components/ui/home'
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
  it('renders correct heading', () => {
   render(<Home />);
   expect (screen.getByRole('heading').textContent).toMatch(/hello/i)
   
 });
});