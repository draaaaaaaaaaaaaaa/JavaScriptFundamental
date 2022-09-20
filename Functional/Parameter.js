const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

//Default Parameters

function exponentsFormula(baseNumber, exponent = 2 ) {
    let result = baseNumber * exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

