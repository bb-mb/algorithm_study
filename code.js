const list = [
  {
    time: new Date("10/13 20:22:13"),
    num: 0,
    count: 0,
  },
  {
    time: new Date("10/25 20:22:13"),
    num: 1,
    count: 0,
  },
  {
    time: new Date("10/14 20:22:13"),
    num: 2,
    count: 0,
  },
  {
    time: new Date("10/25 20:22:13"),
    num: 3,
    count: 0,
  },
  {
    time: new Date("10/23 20:22:13"),
    num: 4,
    count: 0,
  },
]

const customSort = (a, b) => {
  if (a.time - b.time === 0) {
    console.log(b.num - a.num)
    return b.num - a.num
  } else {
    return a.time - b.time
  }
}

list.sort(customSort)
console.log(list)
