    <template>
        <div class="question-box-container">
            <b-jumbotron>
                <template slot="lead">
                   {{ currentQuestion.question }} 
                </template>

                <hr class="my-4" />
                
                <p>
                    list of answer
                </p>

                <b-button variant="primary" href="#">Submit</b-button>
                <b-button variant="success" href="#">Next</b-button>
            </b-jumbotron>
        </div>  
    </template>
    
    <script>
    export default {
        // any data that we want to show from parent to child we need to pass it in props
        // props is object
        props: {
            question: Object,
        }
    }
    </script>
    
    <style>
    
    </style>