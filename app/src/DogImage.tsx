import React, {ReactNode} from 'react';
import {Dog} from '../../core/entities';
import {SeeRandomDogController} from './controllers';

export default class DogImage extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = { dog: null };
        this.handleStatusChange = this.handleStatusChange.bind(this);
        SeeRandomDogController
    }

    public url:string;

    public getUrl():string {
        return this.state.dog ? this.state.dog.url : '';
    }

    handleStatusChange(dog:Dog) {
        console.error('handleStatusChange');
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
