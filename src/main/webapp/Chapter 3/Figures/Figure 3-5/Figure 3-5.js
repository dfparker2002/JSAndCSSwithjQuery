window.addEventListener(
    'load',
    function() {
        document.getElementsByTagName('a')[0].addEventListener(
            'click',
            function($event) {
                window.open(this.href, 'P2P', 'width=500,height=500');
                $event.preventDefault();
            }, false
        );
    }, false
);