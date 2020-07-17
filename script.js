
(function($) {
	$.fn.grid = function(x, y,name_p1,name_p2,color1,color2) {
        if(color1 == color2)
        {
            $('#tour').fadeOut().fadeIn().html("Choissisez des couleurs differents"); 
            $('.etat').hide();
        }
        else{
            tour = 1;
            var score_p1 = 0;
            var score_p2 = 0;
            var total = x * y;
            $('.etat1').html('<h3>Joueur 1</h3><br>Nom : '+name_p1+'<br>Couleur : '+color1+'<br>Score : '+score_p1);
            $('.etat2').html('<h3>Joueur 2</h3><br>Nom : '+name_p2+'<br>Couleur : '+color2+'<br>Score : '+score_p2);
        
            function grille(selector){
                const $jeu = $(selector);
                for(let i = 0; i < y; i++){
                    const ligne = $('<div>').addClass('lgn');
                    for(let j = 0; j < x; j++)
                    {
                        const colonne = $('<div>').addClass('col empty').attr('data-col',j).attr('data-lgn',i);
                        ligne.append(colonne);
                    }
                    $jeu.append(ligne);
                }
            }
            grille('#game');
            
            
            function jouer(selector){
                const $jeu = $(selector);
                
                
                const that = this;
                function dernierCase(col){
                    const $commun = $(`.col[data-col='${col}']`);
                    
                    for(let i = $commun.length-1;i>=0; i--){
                        const $cell = $($commun[i]);
                        if($cell.hasClass('empty')){
                            return $cell;
                        }
                    }
                    return null;
                }
                $('#tour').fadeOut().fadeIn().html("Tour de " + name_p1);
                
                $jeu.on('click','.col.empty',function(){
                    const col = $(this).data('col');
                    
                    
                    const $last = dernierCase(col);
                    if(tour % 2 !=0)
                    {
                        
                        $('#tour').html("Tour de " + name_p2);
                        $last.addClass(color1).removeClass(`empty p${color1}`).data('player',color1);
                        total--;
                        
                    }
                    else{
                        $('#tour').html("Tour de " + name_p1);
                        $last.addClass(color2).removeClass(`empty p${color2}`).data('player',color2);
                        total--;
                    }
                    
                    tour++;
                    
                    
                    horiVictoir();
                    vertiVictoir();
                    diagonalDroite();
                    diagonalGauche();
                    if(total==0)
                    {
                        $('#game').hide();
                        $('#tour').hide();
                        $('.etat').hide();
                        $('#null').show();
                        
                        $('.relancer').show();
                    }
                    
                });
                
                
                
            }
            jouer('#game');
           
            function vertiVictoir(){

                for(let i =0;i<x;i++)
                {
                    for(let j =0;j<y;j++)
                    {
                        const vertical = $(`.col[data-col='${i}']`);
                        if($(vertical[j]).attr('class')==`col ${color1}`&&$(vertical[j+1]).attr('class')==`col ${color1}`&&$(vertical[j+2]).attr('class')==`col ${color1}`&&$(vertical[j+3]).attr('class')==`col ${color1}`)
                        {
                            score_p1++;
                            $('#game').hide();
                            $('#tour').hide();
                            $('.etat').hide();
                            $('#result').show();
                            $('#result').html(name_p1+" a gagné horizontalement<br>Score : "+score_p1+"<br> contre <br>"+name_p2+", de score: "+score_p2);
                            $('.relancer').show();
                            $('.etat1').html('<h3>Joueur 1</h3><br>Nom : '+name_p1+'<br>Couleur : '+color1+'<br>Score : '+score_p1);
                            $('.etat2').html('<h3>Joueur 2</h3><br>Nom : '+name_p2+'<br>Couleur : '+color2+'<br>Score : '+score_p2);
                        }
                        if($(vertical[j]).attr('class')==`col ${color2}`&&$(vertical[j+1]).attr('class')==`col ${color2}`&&$(vertical[j+2]).attr('class')==`col ${color2}`&&$(vertical[j+3]).attr('class')==`col ${color2}`)
                        {
                            score_p2++;
                            $('#game').hide();
                            $('#tour').hide();
                            $('.etat').hide();
                            $('#result').show();
                            $('#result').html(name_p2+" a gagné horizontalement<br>Score : "+score_p2+"<br> contre <br>"+name_p1+", de score: "+score_p1);
                            $('.relancer').show();
                            $('.etat1').html('<h3>Joueur 1</h3><br>Nom : '+name_p1+'<br>Couleur : '+color1+'<br>Score : '+score_p1);
                            $('.etat2').html('<h3>Joueur 2</h3><br>Nom : '+name_p2+'<br>Couleur : '+color2+'<br>Score : '+score_p2);
                        }
                    }
                }
                    
            }
            function horiVictoir(){
                  
                for(let i =0;i<y;i++)
                {
                    for(let j=0;j<x;j++)
                    {
                        const horizontal = $(`.col[data-lgn='${i}']`);
                        
                        if($(horizontal[j]).attr('class')==`col ${color1}`&&$(horizontal[j+1]).attr('class')==`col ${color1}`&&$(horizontal[j+2]).attr('class')==`col ${color1}`&&$(horizontal[j+3]).attr('class')==`col ${color1}`)
                        {
                            score_p1++;
                            $('#game').hide();
                            $('#tour').hide();
                            $('.etat').hide();
                            $('#result').show();
                            $('#result').html(name_p1+" a gagné horizontalement<br>Score : "+score_p1+"<br> contre <br>"+name_p2+", de score: "+score_p2);
                            $('.relancer').show();
                            $('.etat1').html('<h3>Joueur 1</h3><br>Nom : '+name_p1+'<br>Couleur : '+color1+'<br>Score : '+score_p1);
                            $('.etat2').html('<h3>Joueur 2</h3><br>Nom : '+name_p2+'<br>Couleur : '+color2+'<br>Score : '+score_p2);
                        }
                        if($(horizontal[j]).attr('class')==`col ${color2}`&&$(horizontal[j+1]).attr('class')==`col ${color2}`&&$(horizontal[j+2]).attr('class')==`col ${color2}`&&$(horizontal[j+3]).attr('class')==`col ${color2}`)
                        {
                            score_p2++;
                            $('#game').hide();
                            $('#tour').hide();
                            $('.etat').hide();
                            $('#result').show();
                            $('#result').html(name_p2+" a gagné horizontalement<br>Score : "+score_p2+"<br> contre <br>"+name_p1+", de score: "+score_p1);
                            $('.relancer').show();
                            $('.etat1').html('<h3>Joueur 1</h3><br>Nom : '+name_p1+'<br>Couleur : '+color1+'<br>Score : '+score_p1);
                            $('.etat2').html('<h3>Joueur 2</h3><br>Nom : '+name_p2+'<br>Couleur : '+color2+'<br>Score : '+score_p2);
                        }
                        
                    }      
                }   
            }
            $('#relancer').on('click',function(){
                
                $(".info").hide();
                $('#null').hide(); 
                $('#tour').show(); 
                $('.jeu').show();
                $('.etat').show();
                $('#game').show();
                $('.col').removeClass(color1).addClass('empty');
                $('.col').removeClass(color2).addClass('empty');
                $('#result').hide();
                $('#relancer').hide();
                total = x * y;
            });
            
            

            function diagonalDroite(){
                for(let i=y;i>=0;i--)
                {
                    for(let j=0;j<x;j++)
                    {
                        var lg1 = $(`.col[data-lgn='${i}']`);
                        var lg2 = $(`.col[data-lgn='${i-1}']`);
                        var lg3 = $(`.col[data-lgn='${i-2}']`);
                        var lg4 = $(`.col[data-lgn='${i-3}']`);
                        if($(lg1[j]).attr('class')==`col ${color1}`&&$(lg2[j+1]).attr('class')==`col ${color1}`&&$(lg3[j+2]).attr('class')==`col ${color1}`&&$(lg4[j+3]).attr('class')==`col ${color1}`)
                        {
                            score_p1++;
                            $('#game').hide();
                            $('#tour').hide();
                            $('.etat').hide();
                            $('#result').show();
                            $('#result').html(name_p1+" a gagné diagonalement vers la droite<br>Score : "+score_p1+"<br> contre <br>"+name_p2+", de score: "+score_p2);
                            $('.relancer').show();
                            $('.etat1').html('<h3>Joueur 1</h3><br>Nom : '+name_p1+'<br>Couleur : '+color1+'<br>Score : '+score_p1);
                            $('.etat2').html('<h3>Joueur 2</h3><br>Nom : '+name_p2+'<br>Couleur : '+color2+'<br>Score : '+score_p2);
                        }
                        if($(lg1[j]).attr('class')==`col ${color2}`&&$(lg2[j+1]).attr('class')==`col ${color2}`&&$(lg3[j+2]).attr('class')==`col ${color2}`&&$(lg4[j+3]).attr('class')==`col ${color2}`)
                        {
                            score_p2++;
                            $('#game').hide();
                            $('#tour').hide();
                            $('.etat').hide();
                            $('#result').show();
                            $('#result').html(name_p2+" a gagné diagonalement vers la droite<br>Score : "+score_p2+"<br> contre <br>"+name_p1+", de score: "+score_p1);
                            $('.relancer').show();
                            $('.etat1').html('<h3>Joueur 1</h3><br>Nom : '+name_p1+'<br>Couleur : '+color1+'<br>Score : '+score_p1);
                            $('.etat2').html('<h3>Joueur 2</h3><br>Nom : '+name_p2+'<br>Couleur : '+color2+'<br>Score : '+score_p2);
                        }


                    }
                }
            }
            function diagonalGauche()
            {
                for(let i=y;i>=0;i--)
                {
                    for(let j=x;j>=0;j--)
                    {
                        var lg1 = $(`.col[data-lgn='${i}']`);
                        var lg2 = $(`.col[data-lgn='${i-1}']`);
                        var lg3 = $(`.col[data-lgn='${i-2}']`);
                        var lg4 = $(`.col[data-lgn='${i-3}']`);
                        if($(lg1[j]).attr('class')==`col ${color1}`&&$(lg2[j-1]).attr('class')==`col ${color1}`&&$(lg3[j-2]).attr('class')==`col ${color1}`&&$(lg4[j-3]).attr('class')==`col ${color1}`)
                        {
                            score_p1++;
                            $('#game').hide();
                            $('#tour').hide();
                            $('.etat').hide();
                            $('#result').show();
                            $('#result').html(name_p1+" a gagné diagonalement vers la gauche<br>Score : "+score_p1+"<br> contre <br>"+name_p2+", de score: "+score_p2);
                            $('.relancer').show();
                            $('.etat1').html('<h3>Joueur 1</h3><br>Nom : '+name_p1+'<br>Couleur : '+color1+'<br>Score : '+score_p1);
                            $('.etat2').html('<h3>Joueur 2</h3><br>Nom : '+name_p2+'<br>Couleur : '+color2+'<br>Score : '+score_p2); 
                        }
                        if($(lg1[j]).attr('class')==`col ${color2}`&&$(lg2[j-1]).attr('class')==`col ${color2}`&&$(lg3[j-2]).attr('class')==`col ${color2}`&&$(lg4[j-3]).attr('class')==`col ${color2}`)
                        {
                            score_p2++;
                            $('#game').hide();
                            $('#tour').hide();
                            $('.etat').hide();
                            $('#result').show();
                            $('#result').html(name_p2+" a gagné diagonalement vers la gauche<br>Score : "+score_p2+"<br> contre <br>"+name_p1+", de score: "+score_p1);
                            $('.relancer').show();
                            $('.etat1').html('<h3>Joueur 1</h3><br>Nom : '+name_p1+'<br>Couleur : '+color1+'<br>Score : '+score_p1);
                            $('.etat2').html('<h3>Joueur 2</h3><br>Nom : '+name_p2+'<br>Couleur : '+color2+'<br>Score : '+score_p2); 
                        }
                    }
                }
            }
             
        }
        

        
        
       
        

    }
})(jQuery);

