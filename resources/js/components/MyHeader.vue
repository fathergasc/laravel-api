<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Boolpress</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active" v-for="(link, index) in navBarLinks" :key="index">
                        <a class="nav-link" :href="link.url">{{link.text}}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'MyHeader',
    data() {
        return {
            navBarLinks: [
                {
                    text: 'Home',
                    url: '#'
                },
                {
                    text: 'Posts',
                    url: '#'
                },
                {
                    text: 'Contact Us',
                    url: '#'
                },
                {
                    text: 'About Us',
                    url: '#'
                },
                {
                    text: 'Back-Office',
                    url: '/admin'
                },
            ]
        };
    },
};
</script>

<style></style>
