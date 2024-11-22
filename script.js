$(document).ready(function() {

    //Seleciona o container .carousel e aplica a função slick() que ativa o carrossel com as configurações abaixo
    $('.carousel').slick({

        //slidesToShow: número de cards exibidos ao mesmo tempo no carrossel
        slidesToShow: 5, // Exibe 3 cards ao mesmo tempo

        //slidesToScroll: define quantos cards serão deslizados ao mover o carrossel
        slidesToScroll: 1, // Move 1 card por vez ao deslizar

        //infinite quando true, o carrossel retorna ao ínicio automaticamente
        infinite: true, // Mantém o carrossel em rotação contínua
        
        //dots: quando true, ativa os pontos de navegação abaixo do carrossel
        dots: true, // Ativa pontos de navegação para os usuários
        
        //arrows: exibe setas de navegação nas laterais do carrossel
        arrows: true //Ativa as setas para navegar entre os cards
    });
});