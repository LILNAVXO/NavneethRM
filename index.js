const plugins = document.getElementById('plugins');
const github = document.getElementById('github');
const twitter = document.getElementById('twitter');
const aid = document.querySelector('.card1');
const calc = document.querySelector('.card2');


function onClickPlugin(){
    window.open('https://www.spigotmc.org/members/lilnav.1489716/');
}
function onClickGithub(){
    window.open('https://github.com/LILNAVXO');
}
function onClickTwitter(){
    window.open('https://twitter.com/XoLilnav');
}
function onClickAid(){
    window.open('https://www.spigotmc.org/resources/aid-lightweight-staff-plugin.111624/');
}
function onClickCalc(){
    window.open('https://github.com/LILNAVXO/Web-calculator');
}


plugins.addEventListener('click', onClickPlugin);
github.addEventListener('click', onClickGithub);
twitter.addEventListener('click', onClickTwitter);
aid.addEventListener('click', onClickAid);
calc.addEventListener('click', onClickCalc);

