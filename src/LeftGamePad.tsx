import './LeftGamePad.css';
import TouchController, {ControllerButton} from "./TouchController";
import {useDevice} from "./context/DeviceContext";
import {useHotkeys} from "react-hotkeys-hook";

export default function LeftGamePad(props: { touchController: TouchController }) {
    const {touchController} = props;
    const device = useDevice();
    const keyCallback = (button: ControllerButton) => (event: KeyboardEvent) => {
        if (event.type === 'keydown') {
            touchController.handleButtonDown(button);
        } else if (event.type === 'keyup') {
            touchController.handleButtonUp(button);
        }
    }
    useHotkeys('left', keyCallback('left'), {keydown: true, keyup: true});
    useHotkeys('up', keyCallback('up'), {keydown: true, keyup: true});
    useHotkeys('right', keyCallback('right'), {keydown: true, keyup: true});
    useHotkeys('down', keyCallback('down'), {keydown: true, keyup: true});
    useHotkeys('a', keyCallback('a'), {keydown: true, keyup: true});
    useHotkeys('s', keyCallback('b'), {keydown: true, keyup: true});
    useHotkeys('q', keyCallback('select'), {keydown: true, keyup: true});
    useHotkeys('w', keyCallback('start'), {keydown: true, keyup: true});

    function renderLfArrow(button: ControllerButton) {
        if (device.isTouchDevice) {
            return (
                <div style={{position: 'absolute', right: 0, width: '32px', height: '100%'}}
                     onTouchStart={() => touchController.handleButtonDown(button)}
                     onTouchEnd={() => touchController.handleButtonUp(button)}
                >
                    <div className="arrowlf"/>
                </div>
            );
        } else {
            return (
                <div style={{position: 'absolute', right: 0, width: '32px', height: '100%'}}
                     onMouseDown={() => touchController.handleButtonDown(button)}
                     onMouseUp={() => touchController.handleButtonUp(button)}
                >
                    <div className="arrowlf"/>
                </div>
            );
        }
    }

    function renderRhArrow(button: ControllerButton) {
        if (device.isTouchDevice) {
            return (
                <div style={{position: 'absolute', left: 0, width: '32px', height: '100%'}}
                     onTouchStart={() => touchController.handleButtonDown(button)}
                     onTouchEnd={() => touchController.handleButtonUp(button)}
                >
                    <div className="arrowrh"/>
                </div>
            );
        } else {
            return (
                <div style={{position: 'absolute', left: 0, width: '32px', height: '100%'}}
                     onMouseDown={() => touchController.handleButtonDown(button)}
                     onMouseUp={() => touchController.handleButtonUp(button)}
                >
                    <div className="arrowrh"/>
                </div>
            );
        }
    }

    return (
        <div style={{width: '110px', height: '110px', transform: 'scale(1.8)'}}>
            <div className="cross">
                <div className="circle"></div>
                <div className="horizontal">
                    {renderLfArrow('right')}
                    {renderRhArrow('left')}
                </div>
                <div className="vertical">
                    {renderLfArrow('down')}
                    {renderRhArrow('up')}
                </div>
                <div className="back-cross">
                    <div className="horiz"></div>
                    <div className="vert"></div>
                </div>
            </div>
        </div>
    );
}