class Dier {
    poepen(){
        console.log('prprprrrtttt t t t');   
    }
}

class Kip extends Dier  {

    talk(){
        console.log('tok tok tok');
    }
}

class Koe extends Dier{
    talk(){
        console.log('boe boe');
    }
}

class Gerecht {
    ete(){  
        console.log('smakelijk');
    }
}

let kippetjetok = new Kip();
kippetjetok.talk();

console.log(kippetjetok.__proto__.__proto__);
kippetjetok.__proto__.__proto__ = Gerecht.prototype;
console.log(kippetjetok.__proto__.__proto__); 

// console.log(Kip.prototype.__proto__);

//demo voor Bob, this man is crazy NIET DOEN!
// kippetjetok.__proto__.__proto__.__proto__ = null;
// console.log(kippetjetok);

kippetjetok.rijoverdea2 = function(){
    console.log('Vroem vroem');
}

kippetjetok.talk = undefined;
