import React, { useRef, useState } from 'react';
import useOutsideClick from '../src/index';
import {fireEvent, render, screen} from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('useOutsideClick hook', () => {
    const TestComponent = () => {
        const [isOpenState, setIsOpenState] = useState<boolean>(false);

        // STEP1: Use ref to attach this functionality to the element that requires outside click and touch detection.
        const menuPopupDivRef = useRef<HTMLDivElement>(null);

        // STEP2: Use useOutsideClick React Hook to apply this functionality to the element that requires outside click and touch detection.
        useOutsideClick(menuPopupDivRef, () => {
            setIsOpenState(false);
        });

        return <div className='page-content'>
            <button data-testid="btnMenu" onClick={()=> setIsOpenState(true)}>Menu</button>
            {/* STEP3: Set ref to the element that requires outside click and touch detection */}
            {isOpenState && <div ref={menuPopupDivRef} className='menu-popup'>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>}
            <button data-testid="btnSave">Save</button>
        </div>;
    };

    it('Should close menu of TestComponent when mouseDown event outside menu popup container', () => {
        expect.assertions(3);

        const { asFragment } = render(<TestComponent />);

        expect(asFragment()).toMatchSnapshot('before click on Menu button');

        act(()=> fireEvent.click(screen.getByTestId('btnMenu')));

        expect(asFragment()).toMatchSnapshot('after click on Menu button');

        // IMPORTANT: To simulate outside click, fire mouseDown Event instead of click.
        act(()=> fireEvent.mouseDown(screen.getByTestId('btnSave')));

        expect(asFragment()).toMatchSnapshot('after click outside menu popup container');
    });

    it('Should close menu of TestComponent when touchStart event outside menu popup container', () => {
        expect.assertions(3);

        const { asFragment } = render(<TestComponent />);

        expect(asFragment()).toMatchSnapshot('before click on Menu button');

        act(()=> fireEvent.click(screen.getByTestId('btnMenu')));

        expect(asFragment()).toMatchSnapshot('after click on Menu button');

        // IMPORTANT: To simulate outside click, fire touchStart Event instead of click.
        act(()=> fireEvent.touchStart(screen.getByTestId('btnSave')));

        expect(asFragment()).toMatchSnapshot('after click outside menu popup container');
    });
});
