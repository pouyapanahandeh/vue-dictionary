<template>
    <div>
        <h1>You Are  : {{userType}}</h1>
        <v-btn @click="setUserType('admin')">Become Admin user</v-btn>
        <v-btn @click="setUserType('normal')">Become Normal user</v-btn>
    </div>
</template>

<script>
    export default {
        middleware:'authenticated',
        computed: {
            userType(){
                return this.$store.getters.userType;
            }
        },
        methods:{
            setUserType(utype){
                this.$store.dispatch('setUserType', utype);
            }
        }
    }
</script>

<style scoped>

</style>