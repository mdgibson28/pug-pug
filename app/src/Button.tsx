import React, {ReactNode} from 'react';

export interface IButtonProps {
    children:ReactNode;
    text:string;
    onClick:React.MouseEventHandler<HTMLButtonElement>;
}

export default class Button extends React.Component<IButtonProps, any> {

    constructor(props:IButtonProps) {
        super(props);
    }

    render():ReactNode {
        const css:string = 'border-solid border-2 p-2 m-2 rounded border-red-800 hover:bg-red-200';
        return (
            <button className={css} onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}
