$(document).ready(function() 
{
    $('header button').click(function() 
    {
        $('form').slideDown();
    })

    $('#cancelar').click(function()
    {
        $('form').slideUp();
    })

    $('form').on('submit', function(e)
    {
        e.preventDefault();
        const enderecoDaNovaImagen = $("#imagem-nova").val();
        const novoItem = $('<li></li>');
        $(`<img src="${enderecoDaNovaImagen}"/>`).appendTo(novoItem);
        $(`
            <div class="imagem-link">
                <a href="${enderecoDaNovaImagen}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).apendTo(novoItem);
        $(novoItem).appendTo('ul');
    })
})
