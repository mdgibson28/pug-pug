import React, {ReactNode} from 'react';
import {ISubscription} from '../../core/foundation/types/Observable';
import {DogImage as DogImageController} from '../../core/adapters/contollers/DogImage';
import {Dog} from '../../core/entities';

export default class DogImage extends React.Component<any, any> {

    private subscription:ISubscription;

    constructor(props:any) {
        super(props);

        this.state = {
            dog: new Dog()
        };
    }

    componentDidMount() {
        this.subscription = new DogImageController().dog.subscribe((dog:Dog) => {
            console.log('Setting state');
            console.log(JSON.stringify(dog, null, 4));
            this.setState({
                dog: dog
            });
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render():ReactNode {
        const css:string = 'm-2';
        return (
            <img className={css} src={this.state.dog.url}/>
        )
    }
}
