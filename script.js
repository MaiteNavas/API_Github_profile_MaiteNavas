const search = document.getElementById('search');

const profileContainer = document.getElementById('main');

const mainContainer = document.createElement('div');
mainContainer.classList.add('card');

const avatar = document.createElement('img');
avatar.classList.add('avatar');

const userInfo = document.createElement('div');
userInfo.classList.add('user-info');

const userName= document.createElement('h2');
const userDescription = document.createElement('p');

const infoExtra = document.createElement('ul');
const followers = document.createElement('li');
const following = document.createElement('li');
const totalRepos = document.createElement('li');

const repo1 = document.createElement('p');
repo1.classList.add('repo');
const repo2 = document.createElement('p');
repo2.classList.add('repo');
const repo3 = document.createElement('p');
repo3.classList.add('repo');
const repo4 = document.createElement('p');
repo4.classList.add('repo');
const repo5 = document.createElement('p');
repo5.classList.add('repo');

profileContainer.appendChild(mainContainer)
mainContainer.appendChild(avatar);
mainContainer.appendChild(userInfo);
userInfo.appendChild(userName);
userInfo.appendChild(userDescription);
userInfo.appendChild(infoExtra);
infoExtra.appendChild(followers);
infoExtra.appendChild(following);
infoExtra.appendChild(totalRepos);
userInfo.appendChild(repo1);
userInfo.appendChild(repo2);
userInfo.appendChild(repo3);
userInfo.appendChild(repo4);
userInfo.appendChild(repo5);

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
        const dataRepo = await responseRepo.json();
        //console.log(dataRepo)
        const newDataRepo = dataRepo.sort((a, b) => a.stargazers_count - b.stargazers_count)
        .slice(0,5)   
        console.log(newDataRepo)   
        repo1.innerHTML = `${newDataRepo[0].name}`;
        repo2.innerHTML = `${newDataRepo[1].name}`;
        repo3.innerHTML = `${newDataRepo[2].name}`;
        repo4.innerHTML = `${newDataRepo[3].name}`;
        repo5.innerHTML = `${newDataRepo[4].name}`;  
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = search.value;
    if (user) {
        getUser(user);
        search.value = "";
    }
});
