class Puissance{
    constructor(x,y,name_p1,name_p2,color1,color2)
    {
        this.color1 = color1;
        this.color2 = color2;
        this.name_p1 = name_p1;
        this.name_p2 = name_p2;
        this.x = x;
        this.y = y;
        
    }
    grille(selector)
    {
        const $jeu = $(selector);
        for(let i = 0; i < this.y; i++){
            const ligne = $('<div>').addClass('lgn');
            for(let j = 0; j < this.x; j++)
            {
                const colonne = $('<div>').addClass('col empty').attr('data-col',j).attr('data-lgn',i);
                ligne.append(colonne);
            }
            $jeu.append(ligne);
        }
    }
    

    
    
}