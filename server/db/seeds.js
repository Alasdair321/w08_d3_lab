use bucketlist;
db.dropDatabase();

db.items.insertMany([{
    title: "Complete CodeClan Course",
    deadline: "2019-06",
    completed: false,
    image: "https://pbs.twimg.com/profile_images/1105505689760342016/iUTdm4Rn.png"
},{
    title: "Go freediving",
    deadline: "2020-06",
    completed: false,
    image: "http://www.thatsmags.com/image/view/201806/b2.jpg"
},{
    title: "Bag Sgurr Alasdair",
    deadline: "2019-07",
    completed: false,
    image: "https://www.mortenhansen.co.uk/img/s/v-3/p1362056896-3.jpg"
}])
