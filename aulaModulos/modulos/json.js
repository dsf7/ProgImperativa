function jsonify(a, b, c, d ) {
    return JSON.stringify((a, b, c, d));
}

console.log(jsonify("5486273622",	"Conta Corrente",	"27771",	"Abigael Natte"	) );

module.exports = jsonify;
