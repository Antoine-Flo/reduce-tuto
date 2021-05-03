
/////// Addition avec boucle////////

// const input = [1, 2, 3, 4, 5, 6]

// let acc = 0;
// for(num of input) {
//     console.log(`Acc: ${acc}, Num: ${num}`)
//     acc += num
// }
// console.log(acc)

/////// Addition avec reduce ///////

// const input = [1, 2, 3, 4, 5, 6]

// const output = input.reduce((acc, val, i) => {
//     console.log(`|${i}| ${acc} + ${val} = ${acc + val}`)
//     return acc + val
// })

// console.log(output)



///// Transformer en objet /////

// let empty = {}
// console.log(empty[1] = "new")
// console.log(empty)

// const input = ["🦊", "🦝", "🦍"]
// const output = input.reduce((acc, x, i) => {

//     console.log(acc)
//     console.log(`Index: ${i} Value: ${x}`)
//     // acc[i] = x
//     // return acc

//     // console.log(acc)
//     return {...acc, [i] : x}
// }, {})

// console.log(output)

////////// Map //////////

// const input = [1, 2, 3]

// const mapLike = (arr, fn) => arr.reduce((acc, x) => {
//     return acc.concat(fn(x))
// }, [])

// const output = mapLike(input, (x) => x + 1)

// console.log(output)

///////// Pipe function  /////////

// Eric Elliott

// const input = 25

// pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

// const add = x => x + 1
// const divise = x => x / 2

// const output = pipe(add, divise)(input)

//console.log(Array.isArray(fns))
// console.log(output)