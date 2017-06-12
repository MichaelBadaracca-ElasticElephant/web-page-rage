

var mainAppVm = new Vue( {
    el: '#app',
    data: {
        test: "Web Page Rage!!!",
        pageToDisplay: "http://eloquentjavascript.net/",
        pageHtml: "<div>Hello</div>",
        //reversedString: "",
        stringToReverse: "Is this what you meant bro?"
    },

    computed: {
        reversedString: function () {
            var reversed = "";
            for ( var i = this.stringToReverse.length - 1; i >= 0; i-- ) {
                reversed += this.stringToReverse[i];
            }




            //var test = "bah" +  this.stringToReverse;

            return reversed;
        }
    },
    methods: {
        getUrl: function () {
            $.post( `/externalPage/`, { url: this.pageToDisplay }, function ( data ) {
                this.pageHtml = data;
                console.log( this.pageHtml );
            })
        }
    }
})