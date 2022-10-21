import React from "react";
import Button from './Button';

export default class App extends React.Component<any, any> {

    public render() {
        return (
            <>
                <h1 className={'text-xl'}>
                    PugPug!
                </h1>

                <Button onClick={() => { alert('YAAASSSS!')}}
                        text={'I wanna see a dog!'}>
                </Button>
            </>
        );
    }
}
