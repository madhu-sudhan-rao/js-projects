const inventors = [{
    "first": "Janey",
    "last": "Sainthill",
    "year": 1879,
    "passed": 1955
  }, {
    "first": "Kelly",
    "last": "Priddis",
    "year": 1643,
    "passed": 1727
  }, {
    "first": "Adria",
    "last": "Bolesma",
    "year": 1564,
    "passed": 1642
  }, {
    "first": "Sophi",
    "last": "Pantridge",
    "year": 1867,
    "passed": 1934
  }, {
    "first": "Neville",
    "last": "Piatto",
    "year": 1571,
    "passed": 1630
  }, {
    "first": "Nady",
    "last": "Tebald",
    "year": 1473,
    "passed": 1543
  }, {
    "first": "Philippa",
    "last": "Polkinghorne",
    "year": 1858,
    "passed": 1947
  }
]

const people = [
    "Emma", "Liam", "Olivia", "Noah", "Ava", "Isabella", "Sophia", "Jackson",
    "Amelia", "Lucas", "Mia", "Ethan", "Harper", "Aiden", "Evelyn", "Oliver",
    "Abigail", "Ella", "Charlotte", "Benjamin", "Lily", "Avery", "Chloe", "Sofia",
    "Michael", "Emily", "David", "Grace", "Aubrey", "Jackson", "Scarlett", "James",
    "Madison", "Logan", "Zoey", "Joseph", "Aria", "Samuel", "Avery", "Daniel",
    "Mila", "Ella", "Henry", "Addison", "Alexander", "Eleanor", "Sebastian", "Luna",
    "Jack", "Stella", "William", "Penelope", "Elijah", "Nora", "Carter", "Layla",
    "Julian", "Lillian", "Mason", "Natalie", "Aiden", "Hazel", "Grayson", "Zoe",
    "Wyatt", "Ellie", "Jayden", "Violet", "Gabriel", "Aurora", "Owen", "Savannah",
    "Leo", "Brooklyn", "Xavier", "Scarlet", "Isaac", "Claire", "Caleb", "Paisley"
];
  
// 1. Filter the list of inventors for those who were born in 1500's
const fifteen100s = inventors.filter((inventor)=> inventor["year"]<=1600 && inventor["year"]>=1500);
console.table(fifteen100s);

//2. Give us an array of the inventory first and last names
const firstLastNames = inventors.map((inventor) => {
  return {first: inventor.first, last: inventor.last}
})
console.table(firstLastNames)

//3. Sort the inventors by birthdate, oldest to youngest
