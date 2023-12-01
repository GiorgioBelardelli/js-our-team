const listaMembri = document.getElementById("members");

let squadMembers = [

    {
        "nome" : "Wayne Barnett",
        "role" : "Founder & CEO",
        "image" : "img/wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome" : "Angela Caroll",
        "role" : "Chief Editor",
        "image" : "img/angela-caroll-chief-editor.jpg"
    },

    {
        "nome" : "Walter Gordon",
        "role" : "Office Manager",
        "image" : "img/walter-gordon-office-manager.jpg"
    },

    {
        "nome" : "Angela Lopez",
        "role" : "Social Media Manager",
        "image" : "img/angela-lopez-social-media-manager.jpg"
    },

    {
        "nome" : "Scott Estrada",
        "role" : "Developer",
        "image" : "img/scott-estrada-developer.jpg"
    },

    {
        "nome" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "image" : "img/barbara-ramos-graphic-designer.jpg"
    }

];

for( let i=0; i<squadMembers.length; i++){

    let memberName = squadMembers[i].nome;
    let memberRole = squadMembers[i].role;
    let memberImg = squadMembers[i].img;

    listaMembri.append(memberName + " " + memberRole + " " + memberImg + " ");

}