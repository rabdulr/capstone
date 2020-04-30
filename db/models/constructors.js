class Users {
    constructor(firstName, lastName, companyName, address, city, state, zip, latitude, longitude, username, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.latitude = latitude;
        this.longitude = longitude;
        this.username = username;
        this.password = password;
    }
};

class Posts {
    constructor(userId, acceptedId, title, description, industry, siteAddress, latitude, longitude, startDate, endDate, proposedBudget, status){
        this.userId = userId;
        this.acceptedId = acceptedId;
        this.title = title;
        this.description = description;
        this.industry = industry;
        this.siteAddress = siteAddress;
        this.latitude = latitude;
        this.longitude = longitude;
        this.startDate = startDate;
        this.endDate = endDate;
        this.proposedBudget = proposedBudget;
        this.status = status;
    }
};

class Bids {
    constructor(postId, userId, bidderId, proposal, bid){
        this.postId = postId
        this.userId = userId;
        this.bidderId = bidderId;
        this.proposal = proposal;
        this.bid = bid;
    }
};

class Contracts {
    constructor(userId, bidderId, postId, contract, contractStatus){
        this.userId = userId;
        this.bidderId = bidderId;
        this.postId = postId;
        this.contract = contract;
        this.contractStatus = contractStatus
    }
};

class Comments {
    constructor(id, idOfPoster, comment){
        this.id = id;
        this.idOfPoster = idOfPoster;
        this.comment = comment;
    }
}

class Chats {
    constructor(senderId, receiverId, message){
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.message = message;
    }
}

module.exports = {
    Users,
    Posts,
    Bids,
    Contracts,
    Comments,
    Chats
}
