const bodyParser = require('body-parser');
const path = require('path');

var friendsTable = require('../data/friends.js');
module.exports = function(app) {
    
    app.get('/api/friends', function(request, result) {
        result.json(friendsTable);
    });

    app.post("/api/friends", function(request, result) {
        var you = request.body;
        console.log(request);
        console.log(request.body);
        var newFriend = -1;
        var newFriendScore = 100;
        var currentFriendScore = 0;
       
        for (i = 0; i < friendsTable.length; i++) {

                for (j = 0; j < you['scores[]'].length; j++) {

                    currentFriendScore = currentFriendScore + Math.abs(friendsTable[i].scores[j] - you['scores[]'][j]);
                }
                if (currentFriendScore <= newFriendScore) {
                    newFriend = i;
                    newFriendScore = currentFriendScore;
                }

        }

        friendsTable.push(you);
        newFriendDetails = friendsTable[newFriend];
        result.json(newFriendDetails);

    });


};