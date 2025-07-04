const collapsiables = document.querySelectorAll( ".collapsible" )
collapsiables.forEach( ( item ) => {
    item.addEventListener( 'click', function () {
        this.classList.toggle( "collapsible--expanded" )
    } )
} )