/////// Addition avec boucle////////

const input = [1, 2, 3, 4, 5, 6]

let acc = 0;
for(num of input) {
    console.log(`Acc: ${acc}, Num: ${num}`)
    acc += num
}

console.log(acc)

/////// Addition avec reduce ///////

const input = [1, 2, 3, 4, 5, 6]

//Easy
const output = input.reduce((acc, val, i) => {
    console.log(`|${i}| ${acc} + ${val} = ${acc + val}`)
    return acc + val
})

// One Line
const output = input.reduce((acc, val) => acc + val)

console.log(output)


///// Transformer en objet /////


const data = ['🦒', '🦝', '🐸', '🦝', '🐸', '🦝']

//Easy
const output = data.reduce((a, v, i) => {

    a[v] = ++a[v] || 1
    console.log(`|${i}| Value : ${v}`)
    console.log(a)
    return a
}, {})

// One Line
const output = data.reduce((a, v) => ({...a, [v]: ++a[v] || 1}), {})

console.log(output)

////////// Map //////////

const input = [1, 2, 3]

const mapLike = (arr, fn) => arr.reduce((acc, x) => acc.concat(fn(x)), [])

const output = mapLike(input, x => x + 1)

console.log(output)


///////// Pipe function  /////////
// Eric Elliott


const input = 7
const add = x => x + 1
const divide = x => x / 2
const square = x => x*x
// console.log(`V: ${v} | F: ${f}`)


// Easy
const pipe = function (...fns) {

    console.log(fns)

    return function (x) {

        return fns.reduce((v, f) => {

            console.log(`V: ${v} | F: ${f}`)
            return f(v)
        }, x)

    }
}

// One line
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

const output = pipe(add, divide, square)(input)

console.log(output)