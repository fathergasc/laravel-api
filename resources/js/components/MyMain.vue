<template>
    <main>

        <div class="container">
        <h1>Posts</h1>
            <div class="row">
                <div class="card col-12 my-3" v-for="(post, index) in posts" :key="index" style="width: 18rem;">
                    <!-- <img src="..." class="card-img-top" alt="..."> -->
                    <div class="card-body" >
                        <h5 class="card-title">{{post.title}}</h5>
                        <p class="card-text">{{post.content}}</p>
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
            }
        },
        methods: {
            getPosts() {
                axios.get('/api/posts')
                .then((response) => {
                    this.posts = response.data.results;
                    console.log(response);
                })
            }
        },
        mounted() {
            this.getPosts();
        }
    };
</script>

<style></style>
