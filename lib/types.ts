export type Input =
    | Array<any>
    | Map<any, any>
    | WeakMap<any, any>
    | Set<any>
    | WeakSet<any>;

export type Output = Input;

export type ConstructorOutput = {
    set: Input,
    of: (...args: any[]) => ConstructorOutput,
    take: (...args: any[]) => Output,
    pick: (...args: any[]) => Output,
    get: (...args: any[]) => Output,
    choose: (...args: any[]) => Output,
};
