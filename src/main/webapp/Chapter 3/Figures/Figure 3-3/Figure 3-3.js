window.addEventListener(
    'load',
    function() {
        document.getElementById('tmpSearch').addEventListener(
            'focus',
            function($e) {
                this.className = 'tmpInputFocused';
            }, false
        );

        document.getElementById('tmpSearch').addEventListener(
            'blur',
            function($e) {
                this.className = '';
            }, false
        );
        
    }, false
);