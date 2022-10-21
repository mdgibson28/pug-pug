import React, {ReactNode} from 'react';

export interface IButtonProps {
    children:ReactNode;
    text:string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
}

export default class Button extends React.Component<IButtonProps, any> {

    constructor(props:IButtonProps) {
        super(props);

        console.log(props);
    }

    render():ReactNode {
        return (
            <button onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}
