
<script>
import router from '../router/index';
import Person from '@/components/PersonComponent.vue';

export default {
    components: {
        Person,
    },
    data() {
        return {

        }
    },
    methods: {
        updateStore(name) {
            this.$store.commit('addPerson', name);
        },
        newPerson() {
            const input = document.querySelector("#input-person");
            const name = input.value.trim();

            if (name.length >= 2) {
                this.updateStore(name);
                input.value = "";
            }
        },
        deletePerson(id) {
            this.$store.commit('removePerson', id);
        },
        checkDataForCreateGroups() {
            const inputNbGroup = document.querySelector("#input-nbgroup");
            let nbGroup = 0;

            nbGroup = parseInt(inputNbGroup.value);
            if (nbGroup < 2) return 1;
            if (nbGroup > this.persons.length) return 1;

            this.$store.commit('updateGroup', nbGroup);

            const nbPersonsRemaining = this.persons.length % nbGroup;

            if(nbPersonsRemaining != 0){
                const popin = document.querySelector(".popin");
                popin.style.display = "block";
            } else {
                this.createGroups();
            }
        },
        closePopin(){
            const popin = document.querySelector(".popin");
            popin.style.display = "none";
        },
        createGroups(){
            router.push({ name: 'groups' });
        }
    },
    computed: {
        persons() {
            return this.$store.state.persons;
        },
    },
}
</script>

<template>
    <form class="home wrapper">

        <div class="home-section home-section-groups">
            <label for="input-nbgroup">Nombre de groupe :</label>
            <input type="number" id="input-nbgroup" min="2" value="2">
        </div>

        <div class="home section home-section-persons">
            <label>Liste des élèves :</label>

            <div class="home-section-persons-list">
                <Person @deleteId="(deleteId) => deletePerson(deleteId)" v-for="(name, index) in persons" :key="index"
                    :id="parseInt(index)" :name="name" :isDeleteActive="true" />
            </div>
        </div>

        <div class="home-section-add">
            <input @keydown.enter.prevent="newPerson" type="text" id="input-person" placeholder="Harry Potter">
            <button @click.prevent="newPerson" class="home-section-add-button">Ajouter</button>
        </div>

        <div class="home-section-create">
            <button @click.prevent="checkDataForCreateGroups" class="home-section-create-button">Créer les groupes</button>
        </div>
    </form>

    <div class="popin">
        <div class="popin-card">
            <p>Le nombre d’élève par groupe n’est pas équitable. Voulez vous continuer ?</p>
            <div class="popin-buttons">
                <button @click="createGroups" class="popin-buttons-button popin-buttons-button-positive">Continuer</button>
                <button @click="closePopin" class="popin-buttons-button popin-buttons-button-negative">Revenir</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    input,
    button {
        border-radius: .4rem;
    }

    input {
        border: .1rem solid rgba(0, 0, 0, .25);
        margin-bottom: 3rem;
        padding: .4rem 1rem;
    }

    button {
        border: none;
        box-shadow: .2rem .2rem .2rem rgba(0, 0, 0, .25);
        transition: all .2s;
        background: var(--button-background-color);

        &:hover {
            background: var(--button-background-color-hover);
        }
    }

    label {
        margin-bottom: 1rem;
    }

    &-section {
        display: flex;
        flex-direction: column;

        &-persons-list {
            width: 100%;
            min-height: 5rem;
            border: .1rem solid rgba(0, 0, 0, .25);
            border-radius: .4rem;
            margin-top: 1rem;
            margin-bottom: 3rem;
            padding: 1rem;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            gap: 1rem;
        }

        &-add {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 3rem;

            input {
                flex: 1;
            }

            &-button {
                width: 15rem;
            }

            input,
            &-button {
                height: 3rem;
            }

            @media screen and (max-width: 48rem) {
                flex-direction: column;
                gap: 0;
                margin-bottom: 3rem;

                input {
                    margin-bottom: 1rem;
                }
            }
        }

        &-create-button {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 60rem;
            height: 4rem;
        }
    }
}

#input-nbgroup {
    max-width: 30rem;
}

.popin{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
    background: var(--mask-background-color);

    &-card{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        width: 46rem;
        padding: 2.5rem;
        border-radius: .4rem;
        box-shadow: .2rem .2rem .2rem rgba(0, 0, 0, .25);
    }

    &-buttons{
        margin-top: 3rem;
        width: 100%;
        display: flex;
        justify-content: space-between;

        &-button{
            width: 19rem;
            height: 4.3rem;
            border: none;
            box-shadow: .2rem .2rem .2rem rgba(0, 0, 0, .7);
            border-radius: .2rem;
            transition: .2s;

            &:hover{
                background: var(--button-background-color-hover);
            }

            &-positive{
                background: var(--button-background-color);
            }

            &-negative{
                background: var(--button-background-color-2);
            }
        }
    }
}
</style>
