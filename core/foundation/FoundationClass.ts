import {HydratableClass} from './HydratableClass';
import {InitializableClass} from './InitializableClass';

export class FoundationClass<T> extends HydratableClass<T> implements InitializableClass {
    _initialize():void {
        return;
    }
}
