
export const printObject = (argument: any) => {
    console.log(argument)
};

export function Generic<T>(argumento: T) {
    return argumento;
}

export const functionGeneric = <T>( argument: T ) => argument;