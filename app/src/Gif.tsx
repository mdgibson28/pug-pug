import React, {ReactNode} from 'react';
import {Dog} from '../../core/entities';

export interface IGifProps {
    dog:Dog;
}

export default class Gif extends React.Component<IGifProps, any> {
    constructor(props:IGifProps) {
        super(props);
        this.state = { dog: null };
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    public url:string;

    public getUrl():string {
        return this.state.dog ? this.state.dog.url : '';
    }

    handleStatusChange(dog:Dog) {
        this.setState({
            dog: dog
        });
    }

    render():ReactNode {
        return(
            <img src={this.getUrl()}/>
        )
    }
}
