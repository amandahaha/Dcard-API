var DcardAPI = require('./api');

var account = 'Dcard_Account';
var password = 'Dcard_Password';

DcardAPI.login(account, password).then(function(){
    
    return DcardAPI.getAllSchool();

}).then(function(allSchool){

    console.log('所有學校:');
    console.log(allSchool);
    console.log();

    return DcardAPI.getCollection();

}).then(function(collection){

    console.log('你收藏的文章:');
    console.log(collection);
    console.log();

});