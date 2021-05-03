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

const output = input.reduce((acc, val, i) => {
    console.log(`|${i}| ${acc} + ${val} = ${acc + val}`)
    return acc + val
})

console.log(output)

///// Transformer en objet /////

const input = ["🦊", "🦝", "🦍"]
const color = ["Orange", "Gris", "Noir"]
const output = input.reduce((acc, val, i) => ({...acc, [color[i]] : val}), {})

const input = ["a", "b", 45, 4, 45, "a"]
const output = input.reduce((a, v) => ({...a, [v]: ++[v] || 1}), {})

console.log(output)

////////// Map //////////

const input = [1, 2, 3]

const mapLike = (arr, fn) => arr.reduce((acc, x) => acc.concat(fn(x)), [])

const output = mapLike(input, x => x + 1)

console.log(output)

///////// Pipe function  /////////
// Eric Elliott


const input = 25
const add = x => x + 1
const divide = x => x / 2

const pipe = (...fns) => x => fns.reduce((v, f) => {
    console.log(`V: ${v} | F: ${f}`)
    return f(v)
}, x)

const output = pipe(add, divide)(input)

console.log(output)