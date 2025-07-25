const friends = [
  { name: "sam", nickName: "soomi" },
  { name: "ali", nickName: "dr ali" },
  { name: "sara", nickName: "dj s" },
  { name: "javad", nickName: "jd" },
  { name: "maryam", nickName: "mary" },
];

let { name, nickName } = friends[0];
console.log("name : ", name, " - nickName : ", nickName);

let [var0, var1, var2, var3, var4] = friends;
console.log(
  "var0 : ",
  var0,
  " - var1 : ",
  var1,
  " - var2 : ",
  var2,
  " - var3 : ",
  var3,
  " - var4 : ",
  var4
);

let [firstVar, secondVar] = friends;
console.log("firstVar : ", firstVar, " - secondVar : ", secondVar);

let [, , thiredVar] = friends;
console.log("thiredVar : ", thiredVar);

let [firstFriend, ...otherFriends] = friends;
console.log("firstFriend : ", firstFriend, " - otherFriends : ", otherFriends);
