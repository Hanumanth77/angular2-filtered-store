import {IPredicate} from "./IPredicate";

export class Predicates {

    public static or<T>(...predicates:IPredicate<T>[]):IPredicate<T> {
        class InnerPredicate implements IPredicate<T> {

            apply(o:T):boolean {
                let result = false;

                predicates.forEach(function (predicate:IPredicate<T>) {
                    result = result || predicate.apply(o);
                });
                return result;
            }
        }
        return new InnerPredicate();
    }
}
