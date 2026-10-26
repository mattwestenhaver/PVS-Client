import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, beforeEach, expect, it } from 'vitest';
import App from './App';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
// jsdom doesn't implement these. Reporting reduced motion skips the home page intro animation.
window.matchMedia = () => ({ matches: true });
window.scrollTo = () => {};

let container;
let root;

beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    await act(() => root.render(<App />));
});

afterEach(() => {
    act(() => root.unmount());
    container.remove();
});

const findByText = (selector, text) =>
    [...container.querySelectorAll(selector)].find(el => el.textContent.trim().startsWith(text));

const click = el => act(() => el.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true })));

it('renders the navbar and home page', () => {
    expect(container.querySelector('nav.navbar')).not.toBeNull();
    expect(container.querySelector('.home__container')).not.toBeNull();
});

it('opens a dropdown and its submenu, then closes them after a link is chosen', () => {
    const areas = findByText('.dropdown-toggle', 'Areas of Service');
    click(areas);
    expect(areas.parentElement.classList.contains('open')).toBe(true);

    const ventura = findByText('.dropdown-toggle', 'Ventura County');
    click(ventura);
    expect(ventura.parentElement.classList.contains('open')).toBe(true);

    click(findByText('a', 'Malibu'));
    expect(window.location.pathname).toBe('/malibu');
    expect(container.querySelectorAll('.open')).toHaveLength(0);
});

it('closes an open dropdown on an outside click', () => {
    const about = findByText('.dropdown-toggle', 'About Us');
    click(about);
    expect(about.parentElement.classList.contains('open')).toBe(true);

    click(document.body);
    expect(about.parentElement.classList.contains('open')).toBe(false);
});

it('marks the section and county containing the current page as active', () => {
    click(findByText('a', 'Malibu'));
    expect(findByText('.dropdown-toggle', 'Areas of Service').parentElement.classList.contains('active')).toBe(true);
    expect(findByText('.dropdown-toggle', 'Ventura County').parentElement.classList.contains('active')).toBe(true);
    expect(findByText('.dropdown-toggle', 'Orange County').parentElement.classList.contains('active')).toBe(false);
    expect(findByText('.dropdown-toggle', 'About Us').parentElement.classList.contains('active')).toBe(false);
});
