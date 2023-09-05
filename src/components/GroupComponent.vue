
<script>
import Person from './PersonComponent.vue';
export default{
    props: {
        id: Number,
        persons: Object
    },
    components: {
        Person
    }
}
</script>

<template>
    <div class="group">
        <header class="group-header">
            <h2>Groupe n°{{ id + 1 }}</h2>

            <hr>
        </header>

        <div class="group-list">
            <Person v-for="(name, index) in persons" :key="index"
            :id="parseInt(index)" :name="name" :isDeleteActive="false" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.group{
    width: 35rem;
    box-shadow: .2rem .2rem .2rem rgba(0, 0, 0, .25);
    background-color: #fff;
    border-radius: .4rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;

    &-header{
        h2{
            font-family: var(--secondary-font);
            font-weight: 600;
            text-align: center;
            font-size: 1.6rem;
            margin-top: 1rem;
        }

        hr{
            margin-left: auto;
            margin-right: auto;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }

    &-list{
        display: flex;
        min-height: 10rem;
        flex-direction: row;
        flex-wrap: wrap;
        gap: .4rem;
    }
}
</style>