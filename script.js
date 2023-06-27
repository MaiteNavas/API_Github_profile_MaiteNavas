const search = document.getElementById('search');
const profileContainer = document.getElementById('profile');
const mainContainer = document.createElement('div');
const avatar = document.createElement('img');
const userInfo = document.createElement('div');
const userName= document.createElement('h2');
const userDescription = document.createElement('p');
const infoExtra = document.createElement('ul');
const followers = document.createElement('li');
const following = document.createElement('li');
const totalRepos = document.createElement('li');
const repos = document.createElement('div');
const repo1 = document.createElement('p');
const repo2 = document.createElement('p');
const repo3 = document.createElement('p');
mainContainer.classList.add('card');
avatar.classList.add('avatar');
userInfo.classList.add('user-info');
repo1.classList.add('repo')
repo2.classList.add('repo')
repo3.classList.add('repo')
profileContainer.appendChild(mainContainer)
mainContainer.appendChild(avatar);
mainContainer.appendChild(userInfo);
userInfo.appendChild(userName);
userInfo.appendChild(userDescription);
userInfo.appendChild(infoExtra);
infoExtra.appendChild(followers);
infoExtra.appendChild(following);
infoExtra.appendChild(totalRepos);
userInfo.appendChild(repos);
repos.appendChild(repo1);
repos.appendChild(repo2);
repos.appendChild(repo3);



const endPoint = ('https://api.github.com/users/')

async function getUser(user){

    const userUrl = `${endPoint}${user}`;
    const response = await fetch(userUrl);
    const data = await response.json();
   console.log(data);
    createUserCard(data)

    function createUserCard(user){


        
        userName.innerHTML = `${data.name}`;
        avatar.src= `${data.avatar_url}`;
        userDescription.innerHTML = `${data.bio}`
        followers.innerHTML = `Followers ${data.followers}`
        following.innerHTML = `Following ${data.following}`
        totalRepos.innerHTML = `Repos ${data.public_repos}`
        
        
    
    }
    getRepoUser(user)
        
        
}

async function getRepoUser(user){
        
        const repoUrl = `${endPoint}${user}/repos`;
        const responseRepo = await fetch(repoUrl);
        const dataRepo = await responseRepo.json()
        console.log(dataRepo)
        repo1.innerHTML = `${dataRepo[1].name}`
        repo2.innerHTML = `${dataRepo[2].name}`
        repo3.innerHTML = `${dataRepo[3].name}`


}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);

        search.value = "";
    }
});





//console.log(dataUser);
//dataUser.addEventListener("click", getUser(inputUser.value));

/*

        


const inputUser = document.getElementById('search');
inputUser.addEventListener('submit', function(e) {
  var keycode = e.keyCode || e.which;
  if (keycode == 13) {
    getUser()
  }
});

console.log(inputUser.value)





async function getUser(){
    const userUrl = `${endPoint}${dataUser}`;
    const repoUrl = `${endPoint}${dataUser}/repos`;
    try{
        const data = await fetch(userUrl);
        console.log(data)
        
    } catch (error) {

    }

}

//inputUser.addEventListener("click", getUser(inputUser.value));

*/
/*const url = 'https://api.github.com/users/'
const config = {
    method: 'GET',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    },
    }
fetch(url, config)
.then((response) => response.json())
.then((data) => {
    console.log(data)

}).catch((error) => {
        console.error(error);
    });

*/

/*async function getUsers(){

    const config = {
    headers: {
        Accept:'application/vnd.github+json',
    },
    }
    let response = await fetch("https://api.github.com/users/", config)

    let data = await response.json()
    console.log(data)

}
getUsers()*/