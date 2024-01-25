import React, { useRef, useState } from 'react';
import useOutsideClick from '../src/index.tsx';


const meta = {
    component: useOutsideClick,
    decorators: [
        (Story) => (
            <Story />
        ),
    ],
};

export default meta;  

export const InteractiveDemo = {
    render: ()=> {
        const [isOpenState, setIsOpenState] = useState(false);
    
        // STEP1: Use ref to attach this functionality to the element that requires outside click and touch detection.
        const menuPopupDivRef = useRef(null);
    
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
        </div>;
    },
    args: {}
};
