<template>
<div  class="user-profile">
    <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ user.username }}</h1>
        <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
        <div class="user-profile__follower-count">  
            <strong>Followers:</strong> 
            {{followers}}
            <hr> 
        </div>        
    <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot()">
      <label for="newTwoot"><strong>New Twoot</strong></label>
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
    </div>
 
    <div class="user-profile__twoots-wrapper">
        <TwootItem 
        v-for="twoot in user.twoots" 
        :key="twoot.id" 
        :username="user.username" 
        :twoot="twoot" 
        @favourite="toogleFavourite"
        />
    </div>
    
</div>
</template>

<script>
import TwootItem from "./TwootItem.vue"

export default {
  name: 'UserProfile',
  components: { TwootItem },
  data() {
    return {
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        { value: 'draft', name: 'Draft' },
        { value: 'instant', name: 'Instant Twoot' }
      ],
      followers: 0,
      user: {
        id: 1,
        username: '_PeaceAida',
        firstName: 'Peace',
        lastName: 'Aida',
        email: 'peace@gmail.com',
        isAdmin: true,
        twoots: [
            {id: 1, content: 'Twotter is Amazing!'},
            {id: 2, content: "Dont' forget to subscribe to the Earth is Sqare!"}
        ]
      }
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`@${this.user.username} has gained a follower`)
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  },
  methods: {
    followUser() {
      this.followers++;
    },
    toogleFavourite(id){
      console.log(`Favourited Tweet #${id}`)
    },
    createNewTwoot() {
      if(this.newTwootContent && this.selectedTwootType !== 'draft') {
        this.user.twoots.unshift( {
          id: this.user.twoots.length +1,
          content: this.newTwootContent
        })
      }
      this.newTwootContent=""
    }
  },
  // Runs the functions before the first time to be called
  mounted() {
    this.followUser();
  }
}
</script>

<style>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
    padding: 50px 5%;
}

.user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
}

h1 {
    margin: 0;
}

.user-profile__admin-badge {
    background-color: rebeccapurple;
    color: white;
    border-radius: 5px;
    margin-right: auto;
    padding: 0 10px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 20px;
}

.user-profile__create-twoot {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}

</style>
