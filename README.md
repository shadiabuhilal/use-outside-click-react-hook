# use-outside-click-react-hook
![Build Status](https://github.com/shadiabuhilal/use-outside-click-react-hook/actions/workflows/push-workflows.yml/badge.svg)

React Hook for Handling Clicks and Touches Outside a Specified Element (Only 3 code steps!).

Storybook:

https://shadiabuhilal.github.io/use-outside-click-react-hook/

-----------

<img src="https://github.com/shadiabuhilal/use-outside-click-react-hook/raw/main/docs/screenshots/screenshot-use-outside-click-react-hook.gif" width="480" />


-----------

## Install
```
npm i use-outside-click-react-hook
```

-----------

## Usage

### import use-outside-click-react-hook

```js
import useOutsideClick from 'use-outside-click-react-hook';
```

### Using useOutsideClick
useOutsideClick React Hook

Example:

```js
const [currentStepIndexState, setCurrentStepIndex] = useState(0);

...

export default function FooComponent() {
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
}
```

For more info, please check [storybook](https://shadiabuhilal.github.io/use-outside-click-react-hook/)
