const stringify = (object) => {

    return JSON.stringify(object, (key, value) =>
        value === Infinity ? 'Infinity' : value
    );
};

const parse = (string) => {

    return JSON.parse(string, (key, value) =>
        value === 'Infinity' ? Infinity : value
    );
};

export {
    stringify, parse
}