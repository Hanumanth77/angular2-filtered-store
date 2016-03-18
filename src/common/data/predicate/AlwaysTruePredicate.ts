import {IPredicate} from "./IPredicate";

export class AlwaysTruePredicate<T> implements IPredicate<T> {

    public apply(o:T):boolean {
        return true;
    }
}
