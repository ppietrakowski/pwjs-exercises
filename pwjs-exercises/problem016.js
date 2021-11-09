let checkUsersValid = function(goodUsers) {

    return function(users) {
       return users.every(user => goodUsers.
        some(goodUser => user.id === goodUser.id))
    }

}