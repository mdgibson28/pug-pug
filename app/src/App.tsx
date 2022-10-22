import React from "react";
import Button from './Button';
import {SeeDog} from '../../core/use-cases';
import {Dog} from '../../core/entities';
import Gif from './Gif';

export default class App extends React.Component<any, any> {
    private dog:Dog;

    public render() {
        return (
            <>
                <h1 className={'text-xl'}>
                    PugPug!
                </h1>

                <Button onClick={() => { this.execute() }}
                        text={'I wanna see a dog!'}>
                </Button>

                <Gif dog={this.dog}></Gif>
            </>
        );
    }

    public execute():void {
        new SeeDog().execute().then((dog:Dog) => {
            this.dog = dog;
        });
    }
}
