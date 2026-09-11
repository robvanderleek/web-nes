import {NoUserSelectButton} from "../Styles";
import TouchController, {ControllerButton} from "../TouchController";

interface ButtonProps {
    touchController: TouchController;
    controllerButton: ControllerButton;
    active?: boolean;
    className?: string;
}

export default function Button(props: ButtonProps) {
    const {touchController, controllerButton, active, className} = props;
    const classNames = active ? `nes-btn is-success ${className}` : `nes-btn ${className}`;

    const handleOnClick = async () => {
        console.log('click');
        await touchController.handleButtonClick(controllerButton);
    }

    return (
        <NoUserSelectButton className={classNames} onClick={handleOnClick}>{controllerButton}</NoUserSelectButton>
    );
}

