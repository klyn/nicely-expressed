export type Input =
    | Array<any>
    // TODO
    // | Map<any, any>
    // | Set<any>;

export type Output = Input;

export type ConstructorOutput = {
    set: Input,
    should: Function,
    of: (...args: any[]) => ConstructorOutput,
    take: (...args: any[]) => Output,
    pick: (...args: any[]) => Output,
    get: (...args: any[]) => Output,
    choose: (...args: any[]) => Output,
};

export type ForEachConstructorOutput = {
    in: (set: Input) => ConstructorOutput,
};
