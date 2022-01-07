<template>
    <!-- <div class="create-newtwoot-panel"> -->
    <form class="create-newtwoot-panel" 
    @submit.prevent="createNewTwoot()" :class="{ '--exceeded': newTwootCharacterCount > 180}">
      <label for="newTwoot"><strong>New Twoot</strong> {{ newTwootCharacterCount }}/180</label>
      <textarea id="newTwoot" rows="4" v-model="newTwootContent"/>

      <div class="create-newtwoot-panel__submit">
      <div class="create-newtwoot-panel__create-twoot-type">
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
      </div>
    </form>
    <!-- </div> -->
</template>

<script>
import {reactive, computed} from 'vue'

export default {
    name: 'CreateNewTwootPanel',
    setup(props, ctx) {
      const state = reactive({  
          newTwootContent: '',
          selectedTwootType: 'instant',
          twootTypes: [
              { value: 'draft', name: 'Draft' },
              { value: 'instant', name: 'Instant Twoot' }
          ],
      })

      const newTwootCharacterCount = computed(() => state.newTwootContent.length)
      
      function createNewTwoot() {
          if((state.newTwootContent.length<180 || state.newTwootContent.length==180) && state.newTwootContent.length!=0 && state.selectedTwootType !== 'draft') {
              ctx.$emit('add-twoot', state.newTwootContent)
              state.newTwootContent = ''
          }
      }

      return ( 
        state,
        newTwootCharacterCount,
        createNewTwoot
      )
    }
  //   data(){
  //       return {
  //           newTwootContent: '',
  //           selectedTwootType: 'instant',
  //           twootTypes: [
  //               { value: 'draft', name: 'Draft' },
  //               { value: 'instant', name: 'Instant Twoot' }
  //           ],
  //       }
  //   },
  //   computed: {
  //       newTwootCharacterCount() {
  //       return this.newTwootContent.length;
  //       }
  // },
  // methods: {
  //       createNewTwoot() {
  //         console.log('creating twoot')
  //           if((this.newTwootContent.length<180 || this.newTwootContent.length==180) && this.newTwootContent.length!=0 && this.selectedTwootType !== 'draft') {
  //               this.$emit('add-twoot', this.newTwootContent)
  //               console.log(this.newTwootContent.length)
  //               this.newTwootContent = '';
  //           }
  //       }
  // }
}
</script>

<style lang="scss" scoped>
      .create-newtwoot-panel {
        padding-top: 20px;
        display: flex;
        flex-direction: column;

        &.--exceeded {
          color: red;
          border-color: red;

          button {
            background-color: red;
            border: none;
            color: white;
          }
        }
        
        textarea {
          border: 1px solid #DFE3E8;
          border-radius: 5px;
        }

        .create-newtwoot-panel__submit {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;

          .create-twoot-type {
            padding: 10px 0;
          }

          button {
            padding: 5px 20px;
            margin: auto 0;
            border-radius: 5px;
            border: none;
            background-color: deeppink;
            color: white;
            font-weight: bold;
          }
        }
      }
</style>