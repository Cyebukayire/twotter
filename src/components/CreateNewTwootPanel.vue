<template>
    <!-- <div class="create-newtwoot-panel"> -->
    <form class="user-profile__create-twoot" 
    @submit.prevent="createNewTwoot()" :class="{ '--exceeded': newTwootCharacterCount > 180}">
      <label for="newTwoot"><strong>New Twoot</strong> {{ newTwootCharacterCount }}/180</label>
      <textarea id="newTwoot" rows="4" v-model="newTwootContent"/>

      <div class="user-profile__create-twoot-type">
        <lable for="newTwootType"><strong>Type: </strong>
        <select id="newTwootType" v-model="selectedTwootType">
          <option 
          :value="option.value" 
          v-for="(option, index) in twootTypes" 
          :key="index">
            {{ option.name }}
          </option>
        </select>
        </lable>
      </div>
      <button>Twoot!</button>
    </form>
    <!-- </div> -->
</template>

<script>
export default {
    name: 'CreateNewTwootPanel',
    data(){
        return {
            newTwootContent: '',
            selectedTwootType: 'instant',
            twootTypes: [
                { value: 'draft', name: 'Draft' },
                { value: 'instant', name: 'Instant Twoot' }
            ],
        }
    },
    computed: {
        newTwootCharacterCount() {
        return this.newTwootContent.length;
        }
  },
  methods: {
        createNewTwoot() {
            if((this.newTwootContent.length<180 || this.newTwootContent.length==180) && this.newTwootContent.length!=0 && this.selectedTwootType !== 'draft') {
                this.user.twoots.unshift( {
                    id: this.user.twoots.length +1,
                    content: this.newTwootContent
                })
                console.log(this.newTwootContent.length)
                this.newTwootContent=""
            }
        }
  }
}
</script>

<style lang="scss" scoped>
      .user-profile__create-twoot {
        padding-top: 20px;
        display: flex;
        flex-direction: column;

        &.--exceeded {
          color: red;
          border-color: red;
        }

        &.--exceeded button {
          background-color: red;
          border: none;
          color: white;
        }
      }
</style>