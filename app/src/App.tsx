import React from "react";
import Button from './Button';
import DogImage from './DogImage';
import {DogImage as DogImageController} from '../../core/adapters/contollers/DogImage';

export default class App extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }

    public render() {
        return (
            <>
                <h1 className={'text-xl m-2'}>
                    PugPug!
                </h1>

                <Button onClick={() => { new DogImageController().update() }}
                        text={'I wanna see a dog!'}>
                </Button>

                <DogImage></DogImage>
            </>
        );
    }
}
