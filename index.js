#!/usr/bin/env node

const axios = require('axios')
const checkInternetConnected = require('check-internet-connected');

function fetchData(user) {
    checkInternetConnected()
        .then(result => {
            axios.get(`https://api.github.com/users/${user}`)
                .then(response => {
                    console.log("Username  : "+response.data.login+'\n'+
                                (response.data.name ? ("Name      : "+response.data.name+'\n') : (""))+
                                "Repos     : "+response.data.public_repos+'\n'+
                                "Followers : "+response.data.followers+'\n'+
                                "Following : "+response.data.following);
                })
                .catch(err => {
                    console.log(`${user} username doesn't exist.`);
                })
        })
        .catch(err => {
            console.log("You are not connected to the internet");
        })
}

const user = process.argv[2];
fetchData(user);