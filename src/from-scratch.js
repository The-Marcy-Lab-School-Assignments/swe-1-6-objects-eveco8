const coolGreeting = (person) => {
  if (person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  }
};

const haveBirthday = (person) => {
  person.age += 1
};

const becomeSecretAgent = (person, spyHandle) => {
  person.spyHandle = spyHandle
  delete person.name
};

const carMaker = (name, maker, year) => {
  let obj = {
    name,
    maker,
    year,
    needsOilChange: false
  }
  return obj
};

const weAreNotFriends = (person) => {
  return person.friends.pop()
};

const listHobbies = (person) => {
  for (let hobby of person.hobbies) {
    console.log(`${person.name} likes ${hobby}.`)
  }
};

const getNextOpponent = (team) => {
  if (team.matches.length === 0) {
    return null
  }
  return team.matches[0].teamName
};

const listAllKeys = (object) => {
  let arr = Object.keys(object)
  return arr

  // let arr = []
  // for (let key in object) {
  //   arr.push(key)
  // }
  // return arr
};

const listAllValues = (object) => {
  let arr = Object.values(object)
  return arr
};

const convertToMatrix = (arrOfObj) => {
  if (arrOfObj.length === 0) {
    return []
  }

  let newArr = []
  let arrOfKeys = Object.keys(arrOfObj[0])
  newArr.push(arrOfKeys)

  for (i = 0; i < arrOfObj.length; i++) {
    let arrOfValues = Object.values(arrOfObj[i])
    newArr.push(arrOfValues)
  }

  return newArr

};



module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
