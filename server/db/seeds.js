use bucketlist;
db.dropDatabase();

db.items.insertMany([{
    title: "Complete CodeClan Course",
    date: "2019-04",
    deadline: "2019-06",
    completed: false
},{
    title: "Go freediving",
    date: "2019-04",
    deadline: "2020-06",
    completed: false
},{
    title: "Bag Sgurr Alasdair",
    date: "1996-01",
    deadline: "2019-07",
    completed: false
}])