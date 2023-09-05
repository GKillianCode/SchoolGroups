
<script>
import { mapGetters } from 'vuex';
import Group from '@/components/GroupComponent.vue';
export default {
    components: {
        Group
    },
    data() {
        return {
            nbPersons: 0,
            persons: [],
            nbGroup: 0,
            groups: [],
            nbPersonsPerGroup: 0,
            nbGroupSup: 0,
            nbPersonsRemaining: 0,
        }
    },
    mounted() {
        this.persons = this.$store.getters.getPersons;
        this.nbGroup = this.$store.getters.getNbGroup;

        this.nbPersons = this.persons.length;

        const nbPersonsPerGroup = Math.floor(this.persons.length / this.nbGroup);
        const nbPersonsRemaining = this.persons.length % this.nbGroup;
        const groups = new Array();

        for (let i = 0; i < this.nbGroup; i++) {
            groups[i] = new Array();
        }


        for (let i = 0; i < this.nbGroup; i++) {
            for (let j = 0; j < nbPersonsPerGroup; j++) {
                groups[i].push(...this.persons.splice(0, 1));
            }
        }

        if(nbPersonsRemaining != 0){
            this.nbGroupSup = this.persons.length;

            for (let i = 0; i < this.persons.length; i++) {
            groups[i].push(...this.persons.splice(0, 1));
        }
        }

        this.groups = groups;
        this.nbPersonsPerGroup = nbPersonsPerGroup;
        this.nbPersonsRemaining = nbPersonsRemaining;

    },
    computed: {
        ...mapGetters(['getPersons']),
        ...mapGetters(['getNbGroup'])
    }
};
</script>

<template>
    <div class="groups wrapper">
        <div class="groups-infos">
            <p class="groups-infos-recap">Vous avez créé {{ nbGroup }} groupes de {{ nbPersonsPerGroup }} personne(s).</p>
            <p v-if="nbPersonsRemaining != 0" class="groups-infos-sup">Dont {{ nbGroupSup }} groupe de {{ nbPersonsPerGroup + 1 }} personnes.</p>
        </div>

        <div class="groups-recaps">
            <h2 class="groups-title">Récapitulatif :</h2>
            <ul class="groups-recaps-list">
                <li class="groups-recaps-item groups-nbGroups">{{ nbGroup }} groupes</li>
                <li class="groups-recaps-item groups-nbPersons">{{ nbPersons }} élèves</li>
            </ul>
        </div>

        <div class="groups-groups">
            <h2 class="groups-title">Liste des groupes :</h2>

            <div class="groups-groups-list">
                    <group v-for="(group, index) in groups" :key="index" :id="parseInt(index)" :persons="group" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.groups{
    &-title{
        margin-top: 3rem;
        margin-bottom: 1rem;
        font-weight: 600;
        font-size: 1.8rem;
    }
    &-recaps-item{
        list-style-type: disc;
        margin-left: 2rem;
    }
    &-groups-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4rem;
    }
}
</style>
