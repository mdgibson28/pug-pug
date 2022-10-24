import React from "react";
import Button from './Button';
import DogImage from './DogImage';

export default class App extends React.Component<any, any> {
    public render() {
        return (
            <>
                <h1 className={'text-xl'}>
                    PugPug!
                </h1>

                <Button onClick={() => { this.seeRandomDog.execute() }}
                        text={'I wanna see a dog!'}>
                </Button>

                <DogImage></DogImage>
            </>
        );
    }
}
