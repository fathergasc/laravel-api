<template>
    <main>


        </div>
        <div class="container">
        <h1>Posts</h1>
            <div v-if="loadingInProgress == true" class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div v-else class="row" >
                <div class="card col-12 my-3" v-for="(post, index) in posts" :key="index" style="width: 18rem;">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body" >
                        <h5 class="card-title">{{post.title}}</h5>
                        <p class="card-text">{{(post.content.length < 40)? post.content : cutText(post.content, 40)}}</p>
                        <p class="card-text">{{(post.category)? post.category.name:'No Category'}}</p>
                        <div class="card-text" v-if="post.tags.length > 0" >
                            Tags: <span v-for="(tag, index) in post.tags" :key="index">{{tag.name}}; </span>
                        </div>
                        <p class="card-text" v-else>No Tags</p>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'MyMain',
        data() {
            return {
                posts: [],
                loadingInProgress: true,
            }
        },
        methods: {
            getPosts() {
                axios.get('/api/posts')
                .then((response) => {
                    this.posts = response.data.results;
                    this.loadingInProgress = false;
                    console.log(response);
                })
            },
            cutText(text, textLength) {
               return text.substring(0, textLength) + '...';
            }
        },
        mounted() {
            this.getPosts();
        }
    };
</script>

<style></style>
