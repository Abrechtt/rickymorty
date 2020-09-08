const char={
    image:document.getElementById('char-image'),
    name:document.getElementById('char-name'),
    status:document.getElementById('char-status'),
    species:document.getElementById('char-species'),
    episode:document.getElementById('char-episode')

}
const Getchar=async _=>{

        const url=(`https://rickandmortyapi.com/api/character/${2}`)

        console.log(url);
        const data= await fetch(url);
        const dataJson=await data.json();
    
        const{name,image,status,species,episode}=dataJson;
        char.image.src=await image;
        char.name.innerHTML= `Name: ${name}`;
        char.status.innerHTML=`Status: ${status}`;
        char.species.innerHTML=`Species: ${species}`;
        char.episode.innerHTML=`Episode: ${episode}`

}
Getchar();