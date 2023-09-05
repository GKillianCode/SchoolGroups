
<script>
export default {
    emits: ['deleteId'],
    props: {
        id: Number,
        name: String,
        isDeleteActive: Boolean
    },
    data() {
        return {

        }
    },
    methods: {
        deletePerson(){
            this.$emit('deleteId', this.id);
        }
    }
}
</script>

<template>
    <div class="person">
        <span>{{name}}</span>
        <button v-if="isDeleteActive" @click.prevent="deletePerson">
            <img src="../assets/icons/cross.svg" alt="icon close">
        </button>
    </div>
</template>

<style lang="scss" scoped>
.person {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5rem;
    background: var(--tag-background-color);
    border-radius: 2rem;

    span {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    button{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: none;
        margin-right: .3rem;
        background: var(--tag-remove-button-background-color);
        transition: all .2s;

        &:hover{
            background: var(--tag-remove-button-background-color-hover);
        }
    }
}
</style>